var express = require('express')
var knex = require('knex')

var db = require('../db')

module.exports = {
  get: get,
  getProfile: getProfile,
  newUserForm: newUserForm,
  saveForm: saveForm

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
    .join('profile', 'users.id', '=', 'profile.user_id')
    .select('users.id', 'users.name', 'users.email', 'profile.star_sign')
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
console.log(details);
  res.render('newUserForm', details)
}
// function saveForm (req, res) {
//   res.render('newUserForm', details)
//   .insert('users' details)
// }
