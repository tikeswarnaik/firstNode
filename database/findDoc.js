const User = require("./data");

const findDocument = async (person) => {
  try {
   console.log("Finding");  
    const result = await User.findOne({ userEmail: person.userEmail,userPassword: person.userPassword });
    if(result) {
      console.log(result.userName);
      return {
        found: true,
        userName: result.userName
      }
    }
    else throw new Error("Email or Password is incorrect");
  } catch (e) {
    console.log("Email or Password is incorrect");
    return {
      found: false,
      userName: '',
    };
  }
};

module.exports = findDocument;
