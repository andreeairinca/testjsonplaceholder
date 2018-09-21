const frisby = require('frisby');
const expect = require( "chai" ).expect;
const baseUrl = require( "../../support/helpers" ).baseUrl;
const usersRoute = require("../../support/helpers" ).usersRoute;


describe ( "Get users", function ( ) {

  it("Should return all 10 users with status 200", function( ) {
    return frisby
      .get(baseUrl + usersRoute)
      .expect("status", 200)
      .then( function( response ) {
        const body = response.json;
        expect( body.length ).to.equal( 10 )
      })
  })

    it("Should return the first user with status 200 by adding /1 to users route ", function(){
      return frisby
        .get(baseUrl + usersRoute + "/1")
        .expect("status", 200)
    })

    it("Should return status 404 for invalid user id", function(){
      return frisby
        .get(baseUrl + usersRoute + "/jhagckahckabhca")
        .expect("status", 404)
    })

    it("Should return all todos made by a user", function(){


    })

    it("Should return all users and verifies that they contain only the expected keys", function( ){
      return frisby
        .get(baseUrl + usersRoute)
        .then( function (response) {
          let expectedKeys = [  'id',
                                'name',
                                'username',
                                'email',
                                'address',
                                'phone',
                                'website',
                                'company' ]
          const body = response.json;
            body.forEach( function( user ) {
              for( let i = 0; i < expectedKeys.length; i++ ) {
                expect( Object.keys( user )[i] ).to.equal( expectedKeys[i])
              }
            })
        })
    })


})
