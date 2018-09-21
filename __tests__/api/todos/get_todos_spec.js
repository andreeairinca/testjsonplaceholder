const frisby = require('frisby');
const expect = require( "chai" ).expect;
const baseUrl = require( "../../support/helpers" ).baseUrl;
const todosRoute = require("../../support/helpers" ).todosRoute;


describe ( "Get Todos", function ( ) {

  it("Should return all 200 todos with status 200", function( ) {
    return frisby
      .get(baseUrl + todosRoute)
      .expect("status", 200)
      .then( function( response ) {
        const body = response.json;
        expect(body.length).to.equal(200)
      })
  })

  it("Should return the first todo with status 200 by adding /1 to todos route ", function(){
    return frisby
      .get(baseUrl + todosRoute + "/1")
      .expect("status", 200)
  })

  it("Should return status 404 for invalid todo id", function(){
    return frisby
      .get(baseUrl + todosRoute + "/jhagckahckabhca")
      .expect("status", 404)
  })

  it("Should return all todos made by a user", function(){


  })

  it("Should return all todos and verifies that they contain only the expected keys", function( ){
    return frisby
      .get(baseUrl + todosRoute)
      .then( function (response) {
        let expectedKeys = [  'userId',
                              'id',
                              'title',
                              'completed']
        const body = response.json;
          body.forEach( function( todo ) {
            for( let i = 0; i < expectedKeys.length; i++ ) {
              expect( Object.keys( todo )[i] ).to.equal( expectedKeys[i])
            }
          })
      })
  })
})
