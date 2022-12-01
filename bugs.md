1. Login does not authenticate properly
    - The model was grabbing data from the body.
    - Changed to grab data from the header with the _token tag
    - This broke several of the tests. The token was being sent instead of being set.
    - Changed where the token was being fetched from in the authUser function
    
2. Login does not work properly /auth/login returns token with incorrect password.
    - There was alot to change here and this may be multiple bugs.
    - /auth/login route no await command for User.authenticate
    - /auth/login route user variable was not being verified with if statement. 
    - /auth/login route the jwt.sign method was not being used to verify the password.

3. No 404 error when calling incorrect user/username
    - Missing throw command in error handeling of the model


 