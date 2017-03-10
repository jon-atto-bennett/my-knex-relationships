var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  newUser: newUser,
  // newUserProfile: newUserProfile
}

function getUsers (testDb) {
  // Use a test database if one is passed in, or the connection defined above.
  var db = testDb || connection
  return db('users').select()
}

function getUser (id, testDb) {
  var db = testDb || connection
  return db('users').where('users.id', id)
  .join('profile', 'users.id', '=', 'profile.user_id')
  .select('users.id', 'users.name', 'users.email', 'profile.star_sign')

}

function newUser(newUser){
  return connection ('users')
  .insert(newUser).into("users")
}

// function newUserProfile(profile){
//   return connection ('users')
//   .insert(profile).into("profile")
//   .then(function (newUserProfileID){
//   })
// }
