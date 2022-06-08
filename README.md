# Online SQL Editor

Run SQL online by visiting this [website](https://sql-editor-jaagrav.herokuapp.com/). You can also run SQL from your website using the API, to know more [read the api docs](#api-docs) down below.

## Performance

![On Desktop](https://user-images.githubusercontent.com/52719271/172604433-dc9fb732-7030-446f-977b-ce7548e15a00.png)

Tested on [Google's PageSpeed Insights](https://pagespeed.web.dev/report?url=https%3A%2F%2Fsql-editor-jaagrav.herokuapp.com%2F&form_factor=desktop) this website loads in under **0.8s** on Desktop, however on phone it's not as good with a load time of **4.8s**.

**Disclaimer**: All this data was recorded when the Heroku Dyno was awake, since I am using a free heroku dyno for this project, after 30 mins of inactivity the Dyno will sleep.

## Getting Started

### Install project (using Docker)

For development

```bash
docker build --no-cache -t sql-editor-dev .

docker run -p 3000:3000 sql-editor-dev
```

For Production

```bash
docker build --no-cache -t sql-editor-prod -f Dockerfile.production .

# Test prod locally
docker run -p 3000:3000 sql-editor-prod
```

### Install project (using npm or yarn)

```bash
npm i
# or
yarn
```

Make sure to have sqlite3 installed by default on your device otherwise the api endpoint `/run` won't work.

```bash
# Install SQLite3
sudo apt-get install sqlite3
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on http://localhost:3000/api/${endpoint}. This endpoint can be edited in `pages/api/{endpoint}.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## API Docs

### `/run`

Use this endpoint to run SQL code online.

### NodeJS Example to Execute API Call?

```js
var axios = require("axios");
var qs = require("qs");
var data = qs.stringify({
  code: "SELECT first_name, last_name, age  FROM CurrentTable;",
  currentTable:
    "customer_id,first_name,last_name,age,country\n1,John,Doe,31,USA\n2,Robert,Luna,22,USA\n3,David,Robinson,22,UK\n4,John,Reinhardt,25,UK",
  // Current Table can be CSV content
});
var config = {
  method: "get",
  url: "https://sql-editor-jaagrav.herokuapp.com/api/run",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

### Sample Output

```json
{
  "success": true,
  "data": "John,Doe,31\nRobert,Luna,22\nDavid,Robinson,22\nJohn,Reinhardt,25\n",
  "jobid": "b8268795-c694-4092-9941-5ae52077d58d"
}
```
