const frisby = require('frisby');
const expect = require( "chai" ).expect;
const baseUrl = require( "../../support/helpers" ).baseUrl;
const albumsRoute = require("../../support/helpers" ).albumsRoute;


describe ( "Get albums", function ( ) {

  it("Should return all albums with status 200", function( ) {
    return frisby
      .get(baseUrl + albumsRoute)
      .expect("status", 200)
      .then( function( response ) {
        const body = response.json;
        expect(body.length).to.equal(100)
      })
  })

  it("Should return the first album with status 200 by adding /1 to albums route ", function(){
    return frisby
      .get(baseUrl + albumsRoute + "/1")
      .expect("status", 200)
  })

  it("Should return status 404 for invalid album id", function(){
    return frisby
      .get(baseUrl + albumsRoute + "/jhagckahckabhca")
      .expect("status", 404)
  })

  it("Should return all albums made by a user", function(){


  })

  it("Should return all albums and verifies that they contain only the expected keys", function( ){
    return frisby
      .get(baseUrl + albumsRoute)
      .then( function (response) {
        let expectedKeys = [  'userId',
                              'id',
                              'title']
        const body = response.json;
          body.forEach( function( album ) {
            for( let i = 0; i < expectedKeys.length; i++ ) {
              expect( Object.keys( album )[i] ).to.equal( expectedKeys[i])
              // console.log(Object.keys( post )[i] + " = " + expectedKeys[i])
            }
          })
      })
  })
})
