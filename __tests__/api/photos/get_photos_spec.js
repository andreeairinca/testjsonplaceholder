const frisby = require('frisby');
const expect = require( "chai" ).expect;
const baseUrl = require( "../../support/helpers" ).baseUrl;
const photosRoute = require("../../support/helpers" ).photosRoute;


describe ( "Get photos", function ( ) {

  it("Should return all 5000 photos with status 200", function( ) {
    return frisby
      .get(baseUrl + photosRoute)
      .expect("status", 200)
      .then( function( response ) {
        const body = response.json;
        expect(body.length).to.equal( 5000)
      })
  })

  it("Should return the first photo with status 200 by adding /1 to photos route ", function(){
    return frisby
      .get(baseUrl + photosRoute + "/1")
      .expect("status", 200)
  })

  it("Should return status 404 for invalid post id", function(){
    return frisby
      .get(baseUrl + photosRoute + "/jhagckahckabhca")
      .expect("status", 404)
  })

  it("Should return all photos made by a user", function(){


  })

  it("Should return all photos and verifies that they contain only the expected keys", function( ){
    return frisby
      .get(baseUrl + photosRoute)
      .then( function (response) {
        let expectedKeys = [  'albumId',
                              'id',
                              'title',
                              'url',
                              'thumbnailUrl']
        const body = response.json;
          body.forEach( function( photo ) {
            for( let i = 0; i < expectedKeys.length; i++ ) {
              expect( Object.keys( photo )[i] ).to.equal( expectedKeys[i])
              // console.log(Object.keys( post )[i] + " = " + expectedKeys[i])
            }
          })
      })
  })
})
