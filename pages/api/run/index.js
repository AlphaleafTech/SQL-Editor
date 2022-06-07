const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
  if (!fs.existsSync(path.join(__dirname, "run/codes")))
    fs.mkdirSync(path.join(__dirname, "run/codes"));
  if (!fs.existsSync(path.join(__dirname, "run/csv")))
    fs.mkdirSync(path.join(__dirname, "run/csv"));

  res.status(200).json({
    name: "John Doe",
  });
}
