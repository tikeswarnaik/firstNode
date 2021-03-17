const findDocument = require('./findDoc');
const express = require('express');
const app = express();

const signIn = async (person, res) =>{
    console.log('Sign in Started')
    const result = await findDocument(person);
    if (result.found === true) {
      console.log("Signed in")
      res.redirect(`/back/${result.userName}`);
    } else {
      console.log("Failed to sign in")
      res.redirect('/notfound');
    }
}

module.exports = signIn;