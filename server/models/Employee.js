const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const studentDetails = new mongoose.Schema({
    category: String,
    voiceLanguage: String,
    queTitle: String,
    quDescription: String,
    startTime: String,
    endTime: String,
    attachment: String,
    subcategory: String,
    date: String
})

const StudentModel = mongoose.model("student-login",StudentSchema)
const StudentModel1 = mongoose.model("student-details",studentDetails)

module.exports = {StudentModel1,StudentModel}

