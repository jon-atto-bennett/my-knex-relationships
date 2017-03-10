var express = require('express')
var knex = require('knex')

var db = require('../db')

module.exports = {
  get: get,
  getProfile: getProfile,
  newUserForm: newUserForm,
  saveForm: saveForm,
  // newUserProfile: newUserProfile

}

function get (req, res) {
  db.getUsers()
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getProfile (req, res) {
  var id = req.params.id

  db.getUser(id)
    .then(function (profile) {
      res.render('profile', {users: profile})
    })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

function newUserForm (req, res) {
  res.render('newUserForm')
}

function saveForm (req, res) {
  var details = req.body
  var profile = {star_sign: details.star_sign}
  res.render('newUserForm', details)
  var newUser = {
    name: details.name,
    email: details.email
  }
  db.newUser (newUser)
  .then(function (newUserID) {
    console.log(newUserID[0]);
    var id = newUserID[0]
    profile.user_id = id
    console.log(profile.user.id);
    // newUserProfile(profile)
  })


}

// function newUserProfile(profile){
//   db.newUserProfile(profile)
//
// }
