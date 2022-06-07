const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

export default async function handler(req, res) {
  const { code, currentTable } = req.body;

  if (!fs.existsSync(path.join(__dirname, "run")))
    fs.mkdirSync(path.join(__dirname, "run"));

  if (!fs.existsSync(path.join(__dirname, "run/codes")))
    fs.mkdirSync(path.join(__dirname, "run/codes"));

  if (!fs.existsSync(path.join(__dirname, "run/csvs")))
    fs.mkdirSync(path.join(__dirname, "run/csvs"));

  const jobID = uuid();
  fs.writeFileSync(
    path.join(__dirname, `run/codes/${jobID}.sql`),
    `.mode csv  
.import '${path.join(__dirname, `run/csvs/${jobID}.csv`)}' CurrentTable
${code}`
  );
  fs.writeFileSync(path.join(__dirname, `run/csvs/${jobID}.csv`), currentTable);

  const output = await new Promise((resolve, reject) => {
    exec(
      `sqlite3 ${path.join(__dirname, `run/codes/${jobID}.db`)} < ${path.join(
        __dirname,
        `run/codes/${jobID}.sql && rm -rf ${path.join(
          __dirname,
          `run/codes/${jobID}.db`
        )}`
      )}`,
      (error, stdout) => {
        if (error) {
          error = error.toString();
          resolve({
            success: false,
            error: error.substring(error.lastIndexOf("Error: ")),
          });
          return;
        }
        resolve({ success: true, data: stdout.toString() });
      }
    );
  });

  res.status(200).json({
    ...output,
    jobid: jobID,
  });
}
