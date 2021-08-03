import express from "express";
import compression from "compression";

import HomePage from "./home";

const app = express();
const port = process.env.PORT || 8084;

// Enable gzip compression for all HTTP responses
app.use(compression());

// Allow all of the generated files to be served up by Express
app.use("/static", express.static("dist/client"));

// Map the "/" route to the home page
app.get("/", HomePage);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
