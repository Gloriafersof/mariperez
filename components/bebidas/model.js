const app= require ('../../firebase/firebase.config');
const admin= require('firebase-admin');
const{
    getFirestore
}= require('firebase-admin/firestore');

const data = getFirestore(admin.apps[app]);

module.exports = data