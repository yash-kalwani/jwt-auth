# JWT Authentication Library

This application is a basic implementation of allowing users to sign up with an id and password, generating a jwt and validating those jwt claims against the password.

## Features

- Allow users to sign up with email id and password
- Allow users to generate JWT against their email id and password
- Have an authentication middleware that validates this JWT token
- Get user's profile using the JWT

## Running locally

You need to have npm & node installed locally on your machine.

NOTE - Ideally you would have a docker image for this

You can run the server with `npm i && npm run start` or with `npm i && npm run start:dev` 

If you run it with `npm run start:dev` your server runs using nodemon

The server will run on port 3000

## Example

POSTMAN collection link -

1. User sign up

    POST /auth/sign-up \
    This allows users to sign up using emailId and password

2. Generate JWT tokens
    
    POST /auth/token \
    This allows users to generate JWT tokens using emialId and password
3. Get user's profile
    
    GET /users/profile \
    This is a proctected endpoint that gets the user's profile after validating the attached JWT token against the user's password
