const functions = require('firebase-functions')
const { dialogflow } = require('actions-on-google')

const app = dialogflow()

app.intent('Who am I', conv => {
  conv.ask(JSON.stringify(conv.user))
})

exports.collegeMate = functions.https.onRequest(app)
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
