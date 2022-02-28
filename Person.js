const mongoose = require('mongoose')
const personSchema = new mongoose.Schema({
 name: String,
 age: Number,
favoriteFoods: [String],
hobbies:[String],
})
 module.exports = mongoose.model('person', personSchema)