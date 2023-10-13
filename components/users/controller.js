const store = require('./store');

function addUser(userData) {
  return new Promise((resolve, reject) => {
    if (Object.entries(userData).length === 0) {
      console.log("[UsersController]: User doesn't have content, the user is empty");
      reject('There is no data user');
    }

    store.add(userData)
      .then((userRecord) => {
        store.customToken(userRecord.uid)
          .then((tokenGenerated) => console.log(tokenGenerated))
        store.role(userRecord.uid, {
            role: userData.role
          })
          .then((userRole) => console.log(userRole))
          resolve(userData);
      })
      // .catch((error) => reject('[UserController]: Error creating new user: ' + error));
  })
  .catch((error) => {
    reject('[UserController]: Error creating new user: ' + error)
    return false;
  })
};

function getUsers(userID) {
  return new Promise((resolve, reject) => {
    if (userID) {
      resolve(
        store.list(userID)
        .then((getUsersResult) => {
          console.log(getUsersResult);
          const uid = getUsersResult.uid;
          const userInfo = getUsersResult.providerData[0];
          const role = getUsersResult.customClaims.role;
          // getUsersResult.users.map(userRecord => console.log(userRecord))
          return {
            uid,
            userInfo,
            role
          };
        })
        .catch(error => console.log(error))
      )
    } else {
      resolve(
        store.list()
        .then((getUsersResult) => {
          return getUsersResult.users;
        })
        .catch(error => console.log(error))
      )
    }
  })
}


function getEmailFromRegister (email) {
  return new Promise((resolve, reject) => {
    if (Object.entries(email).length === 0) {
      console.log("[UsersController]: User doesn't have email, the email is empty");
      reject('There is no data user');
    }

    store.getEmail(email)
      .then((userEmail) => {
        if(userEmail) {
          reject('[ErrorEmail]: Email ya listo')
        }
      })
      .catch((error) => console.log(error))
  })
}
module.exports = {
  addUser,
  getUsers,
  getEmailFromRegister
}