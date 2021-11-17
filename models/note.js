const mongoose = require('mongoose')

// ÄLÄ KOSKAAN TALLETA SALASANOJA GitHubiin!
const url = process.env.MONGODB_URI

// const url = 'mongodb+srv://fullstack:75KxVNqe2v4waIMY@cluster0.qjipx.mongodb.net/note-app?retryWrites=true'

// const url = 'mongodb+srv://fullstack:75Kmongodb.net/note-app?retryWrites=true'

console.log('connecting to', url)

mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)

