var request = require('supertest')
, express = require('express');

var app = require('../app.js')

describe('GET /', function(){
  it('respond with html', function(done){
    request(app)
    .get('/')
    .set('Accept', 'text/html')
    .expect('Content-Type', /html/)
    .expect(200, done);
  })
})

describe('POST /', function(){
  it('respond with specific json structure', function(done){
    request(app)
    .post('/')
    .send({message:"Post Working!", username:"Cait", email:"cait@mail.com"})
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect({message:"Post Working!", username:"Cait", email:"cait@mail.com"})
    .expect(200, done);
  })
})
