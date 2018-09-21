const frisby = require('frisby');
const expect = require( "chai" ).expect;
const baseUrl = require( "../../support/helpers" ).baseUrl;
const commentsRoute = require("../../support/helpers" ).commentsRoute;


describe ( "Get comments", function ( ) {

  it("Should return all 500 comments with status 200", function( ) {
    return frisby
      .get(baseUrl + commentsRoute)
      .expect("status", 200)
      .then( function( response ) {
        const body = response.json;
        expect(body.length).to.equal( 500)
      })
  })

  it("Should return the first comment with status 200 by adding /1 to comments route ", function(){
    return frisby
      .get(baseUrl + commentsRoute + "/1")
      .expect("status", 200)
  })

  it("Should return status 404 for invalid comment id", function(){
    return frisby
      .get(baseUrl + commentsRoute + "/jhagckahckabhca")
      .expect("status", 404)
  })

  it("Should return all comments made by a user", function(){


  })

  it("Should return all comments and verifies that they contain only the expected keys", function( ){
    return frisby
      .get(baseUrl + commentsRoute)
      .then( function (response) {
        let expectedKeys = [  'postId',
                              'id',
                              'name',
                              'email',
                              'body']
        const body = response.json;
          body.forEach( function( comment ) {
            for( let i = 0; i < expectedKeys.length; i++ ) {
              expect( Object.keys( comment )[i] ).to.equal( expectedKeys[i])
              // console.log(Object.keys( post )[i] + " = " + expectedKeys[i])
            }
          })
      })
  })

})
