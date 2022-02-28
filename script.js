const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/Mongoosecheckpoint"
// , () => {
//      console.log('connected')
//  },
//  e =>console.log.error(e)
)
const Person = require("./Person")

run()
async function run (){
    // const person = new Person({ name: "Taiwo", age:1000,favoriteFoods: [" beans", "Eba", "Apu"],
    // hobbies:["football", "Racing","Reading", "Coding"]})  
    // await person.save()
    //  const person =  await Person.findById("621d40108036266bdc6ae195")
    // const person = await Person.find({ name:"Taiwo"})
    // const person = await Person.findOne({ name: "Taiwo"})
    const person = await Person.exists({name: "Taiwo"})
    console.log(person) 
}

  
