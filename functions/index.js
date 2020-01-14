const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebasegeryerreyer!");
});

exports.getData = functions.https.onRequest((request, response) => {
    admin.firestore().collection('Users').get()
       .then(
        data => {
            let users = [];



            
            data.forEach(doc => {
                users.push(doc.data());
            });
            return response.json(users);
        }


       ).catch(err=>console.log(err));
   });
