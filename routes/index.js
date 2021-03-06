/*  eslint complexity: ["error", 1] */

// var express = require('express')
// var knex = require('knex')

var db = require('../db')

module.exports = {
  get,
  getProfile,
  newUserForm,
  getFormDetails,
  saveNewUser,
  saveUserProfile
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

function getFormDetails (req, res) {
  var details = req.body
  var profile = {star_sign: details.star_sign}
  res.render('newUserForm', details)
  var newUser = {
    name: details.name,
    email: details.email
  }
  saveNewUser(newUser, profile)
}

function saveNewUser (newUser, profile) {
  db.newUser(newUser)
  .then(function (newUserID) {
    var id = newUserID[0]
    profile.user_id = id
    saveUserProfile(profile)
  })
}

function saveUserProfile (profile) {
  db.newUserProfile(profile)
  .then(function () {  
  })
}
