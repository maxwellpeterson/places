const functions = require("firebase-functions")
const admin = require("firebase-admin")
const express = require("express")
const cors = require("cors")
import geohash from "ngeohash"

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
// Confused about async/await syntax
app.post("/api/create", async (req, res) => {
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
})

const regionToHash = ({ minlat, minlng, maxlat, maxlng }) => ({
  minHash: geohash.encode(minlat, minlng),
  maxHash: geohash.encode(maxlat, maxlng),
})

app.get(
  "/api/places/withinregion/southWest@:minlat,:minlng&northEast@:maxlat,:maxlng",
  async (req, res) => {
    try {
      const { minHash, maxHash } = regionToHash(req.params)
      const query = db
        .collection("places")
        .where("geohash", ">=", minHash)
        .where("geohash", "<=", maxHash)
      const snapshot = await query.get()
      // Process results
      return res.status(200).send()
    } catch (error) {
      console.log(error)
      return res.status(500).send(error)
    }
  }
)

exports.app = functions.https.onRequest(app)
