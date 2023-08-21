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
   
     <img width="1092" alt="Screenshot 2023-08-21 at 10 04 32 AM" src="https://github.com/yash-kalwani/jwt-auth/assets/69454984/15351a7b-cb76-490e-838a-7bf1e259e4c3">

3. Generate JWT tokens
    
    POST /auth/token \
    This allows users to generate JWT tokens using emialId and password

    <img width="1088" alt="Screenshot 2023-08-21 at 10 05 04 AM" src="https://github.com/yash-kalwani/jwt-auth/assets/69454984/c597e40a-4661-443b-818e-ba223973f6a0">


   <img width="1091" alt="Screenshot 2023-08-21 at 10 06 46 AM" src="https://github.com/yash-kalwani/jwt-auth/assets/69454984/80606e23-dfc6-4c95-b33b-9aa0c929be16">

4. Get user's profile
    
    GET /users/profile \
    This is a proctected endpoint that gets the user's profile after validating the attached JWT token against the user's password

    <img width="1089" alt="Screenshot 2023-08-21 at 10 14 02 AM" src="https://github.com/yash-kalwani/jwt-auth/assets/69454984/94a3ef95-baad-4091-a890-20e2d463d249">
