const User = require('./data');

const addDocument = async (person)=>{
    try{
        console.log("Adding");
        const p = User(person);
        const result = await p.save();
        console.log("Added");
        return {
          added: true,
          userName: result.userName,
        };
    }
    catch(e){
        console.log("Email id already exists");
        return {
          added: false,
          userName: '',
        };
    }
}

module.exports = addDocument;