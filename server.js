/** Imports */
const express = require("express");

/** Express Configuration */
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

/** Routes */
app.get("/", async (req, res) => {
  res.send("Hello, World 🌎!")
});

app.listen(PORT, () => console.log("App is running!"));