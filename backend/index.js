const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const user = require("./model/userSchema");
const catdb=require("./model/CategorySchema");
const Question = require("./model/QuestionSchema");
app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  let newuser = new user(req.body);
  let result = await newuser.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
    let User = await user.findOne(req.body);
    if (User) {
      res.send(User);
    } else {
      res.send({ result: "No user found!" });
    }
});
app.post("/catpost",async(req,res)=>{
  let category= new catdb(req.body);
  let result=await category.save();
  res.send(result)
})
app.post("/question",async(req,res)=>{
  let ques=new Question(req.body)
  let result=await ques.save();
  res.send(result)
})
app.get("/categories/:CategoryName",async (req, res) => {

   const { CategoryName } = req.params;
     try {
    
       const result = await catdb.find({ CategoryName });
       if (result.length > 0) {
         res.send(result);

       } else {
         res
           .status(404)
           .json({ message: "No category  found for the provided CategoryName." });
       }
     } catch (error) {
       res
         .status(500)
         .json({ message: "Error fetching Category from the database." });
     }
  
});

const seedata = async () => {
  const result = await Question.find();
  console.log(result);
};

seedata();
const port = 5000;
app.listen(port, () => {
  console.log(`server is start port number ${port}`);
});