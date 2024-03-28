const mongoose = require('mongoose')

const UserDetails = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String
},{
    collection:"registerinfo"
}
)
const UserDetails1 = new mongoose.Schema(
    {
    category: String,
    voiceLanguage: String,
    queTitle: String,
    quDescription: String,
    startTime: String,
    endTime: String,
    attachment: String,
    subcategory: String,
    date: String
},{
    collection:"usersinfo"
}
)
const StudentModel = mongoose.model('Userinfo',UserDetails1)
const StudentModel1 = mongoose.model("registerinfo",UserDetails)

module.exports = {StudentModel1,StudentModel}