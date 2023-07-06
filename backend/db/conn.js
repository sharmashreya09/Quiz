const mongoose = require("mongoose");
const DB =
  "mongodb+srv://sharmashreya00070:y5f0jGSnoEYlSXxr@cluster0.grkgp9n.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection start"))
  .catch((error) => console.log(error.message));
