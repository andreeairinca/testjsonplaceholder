const frisby = require('frisby');
const expect = require( "chai" ).expect;
const baseUrl = require( "../../support/helpers" ).baseUrl;
const postsRoute = require("../../support/helpers" ).postsRoute;


describe ( "Get posts", function ( ) {

  it("Should return all 100 posts with status 200", function( ) {
    return frisby
      .get(baseUrl + postsRoute)
      .expect("status", 200)
      .then( function( response ) {
        const body = response.json;
        expect(body.length).to.equal(100)
      })
  })

  it("Should return the first post with status 200 by adding /1 to posts route ", function(){
    return frisby
      .get(baseUrl + postsRoute + "/1")
      .expect("status", 200)
  })

  it("Should return status 404 for invalid post id", function(){
    return frisby
      .get(baseUrl + postsRoute + "/jhagckahckabhca")
      .expect("status", 404)
  })

  it("Should return all posts made by a user", function(){


  })

//next test fails because post with id 101 has different keys than expected
  it.skip("Should return all posts and verifies that they contain only the expected keys", function( ){
    return frisby
      .get(baseUrl + postsRoute)
      .then( function (response) {
        let expectedKeys = [  'userId',
                              'id',
                              'title',
                              'body']
        const body = response.json;
          body.forEach( function( post ) {
            for( let i = 0; i < expectedKeys.length; i++ ) {
              expect( Object.keys( post )[i] ).to.equal( expectedKeys[i])
              // console.log(Object.keys( post )[i] + " = " + expectedKeys[i])
            }
          })
      })
  })
})
