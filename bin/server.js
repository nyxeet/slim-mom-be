const mongoose = require("mongoose");
require("dotenv").config();
const app = require("../app");

const { DB_HOST, PORT = 3001 } = process.env;

mongoose
  .connect(DB_HOST, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, function () {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) =>
    console.log(`Server not running. Error message: ${err.message}`)
  );
