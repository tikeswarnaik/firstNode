const addDocument = require("./addDoc");
const express = require("express");
const app = express();

const signUp = async (person, res) => {
  console.log("sign up process started");
  const result = await addDocument(person);
  if(result.added===true){
      console.log("sign up done");
      res.redirect(`thanks/${result.userName}`);
  }
  else{
      console.log("signup failed");
      res.redirect('/notfound');
  }
};

module.exports = signUp;
