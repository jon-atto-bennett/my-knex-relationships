var express = require('express')

var db = require('../db')

module.exports = {
  get: get,
  getProfile: getProfile
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
    .select()
    .then(function (profile) {
    res.render('profile', {users: profile})
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}
