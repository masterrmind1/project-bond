export * as functions from "firebase-functions";
//  import cors=require("cors");
// import functions = require("firebase-functions");
import admin = require("firebase-admin");

admin.initializeApp();
// const options = {
//   url: "https://api.icndb.com/jokes/random",
//   json: true,
// };
// import request = require("request");
// import { response } from "express";


// exports.urlWithTImer = functions.pubsub.schedule("* * * * *").onRun(() => {
//   // eslint-disable-next-line max-len
//   const myPromise = new Promise(function(resolve) {
//     request(url, function() {
//       resolve("done");
//     });
//     myPromise.then((value) => {
//       console.log("yahhh" + value);
//     });
//   });
// });
// const database = admin.database();
// exports.changeName=functions.database.ref("cityData/users/user2/Name")
//     .onCreate((snapshot, context)=>{
//       const name=snapshot.val();
//       const userId=context.params.userId;
//       database.ref("cityData/users/user2/Name").set("newName");
//       console.log(userId + "becomes" + name);
//       return null;
//     });


// exports.dummyFun = functions.pubsub.schedule("* * * * *").onRun(() => {
//   const myPromise= new Promise(function(resolve) {
//     request(options, function(err) {
//       if (err) {
//         console.log(err);
//       }

//       console.log("successful timer update");
//       resolve("abcde");
//     });
//   });
//   myPromise.then((value)=>{
//     console.log("ok"+ value );
//   });
// });


// exports.consoleHello = functions.pubsub
//     .schedule("* * * * *").onRun(() => {
//       return console.log("hello");
//     });

// exports.dummyFun = functions.pubsub.schedule("* * * * *").onRun(() => {
//   request("http://www.google.com", function(error, response, body) {
//     console.error("error:", error); // Print the error if one occurred
//     console.log("statusCode:", response && response.statusCode);
//     // Print the response status code if a response was received
//   });
// });
