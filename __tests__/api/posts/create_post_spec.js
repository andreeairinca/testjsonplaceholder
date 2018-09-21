const frisby = require('frisby');
const expect = require( "chai" ).expect;
const baseUrl = require( "../../support/helpers" ).baseUrl;
const postsRoute = require("../../support/helpers" ).postsRoute;

beforeAll( function( ) {
  frisby.globalSetup({
    request: {
      headers: {
        //"Content-type": "application/json; charset=UTF-8"
      }
    }
  })
})

describe ( "Create a post with random id ", function ( ) {

  it.skip("Should create a post and return post id with status 201", function( ) {
    return frisby
      .post( baseUrl + postsRoute, {
        "userId": 1,
        "title": 'foo',
        "body": 'bar'
      })
//    .inspectJSON()
      .inspectStatus()
      .inspectResponse()
      .expect("status", 201)
  });
})
