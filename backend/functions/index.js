const functions = require("firebase-functions")
const admin = require("firebase-admin")
const express = require("express")
const cors = require("cors")

var serviceAccount = require("./permissions.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://places-proto.firebaseio.com",
})

const db = admin.firestore()
const app = express()
app.use(cors({ origin: true }))

app.get("/hello-world", (req, res) => {
  return res.status(200).send("Hello World!")
})

// Does a thing!
app.post("/api/create", (req, res) => {
  ;(async () => {
    try {
      await db
        .collection("places")
        .doc("/" + req.body.id + "/")
        .create({ title: req.body.title })
      return res.status(200).send()
    } catch (error) {
      console.log(error)
      return res.status(500).send(error)
    }
  })()
})

exports.app = functions.https.onRequest(app)
