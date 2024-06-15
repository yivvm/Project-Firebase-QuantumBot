// ESM
// import * as v2 from "firebase-functions/v2";
// import admin from "firebase-admin";
// admin.initializeApp(functions.config().firebase);

// CJS
// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// admin.initializeApp(functions.config().firebase);

// exports.sendMessage = functions.firestore
//   .document("products/{productId}")
//   .onCreate((event) => {
//     const docId = event.params.productId;
//     const name = event.data.data().name;
//     const productRef = admin.firestore().collection("products").doc(docId);

//     return productRef.update({ message: `Nice ${name}!` });
//   });

const admin = require("firebase-admin");
admin.initializeApp();

// Import the function from the specific file
const { addMessage } = require("./api/addMessage");

// Export the function for deployment
exports.addMessage = addMessage;
