const{
  auth
} = require('./model');


// add user in Auth
function addUser(userData) {
  return auth.createUser(userData);
}


// PERMISOS
async function addPermissions(uid, objectRole){
  return await auth.setCustomUserClaims(uid, objectRole)
}


// GENERAR TOKEN
 
async function costumToken(uid){
  return await auth.createCustomToken(uid);
}


function getUsers(uid) {

  if (uid) {
    return auth.getUser(uid);
  }else {
    return auth.listUsers(100)
  }
}

function getUserToEmail(email){
  return auth.getUserByEmail(email);
}

module.exports = {
  add: addUser,
  role: addPermissions,
  customToken: costumToken,
  list: getUsers,
  getEmail: getUserToEmail,
}