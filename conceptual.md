### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
Json Web Token - Is a standard of data transfer that has a header, payload, and signature. Simialr but less complicated; to http maybe?

- What is the signature portion of the JWT?  What does it do?
The signature portion authenticates the message by encoding the header and the payload together and then encrypting it. If either is changed then the signature will not be correct.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes. After decoding it from base64; unless it is encrypted.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
The server will create a signature with all of the data using a sercret key. That key can be used to access the data from another server. This process verifies the integrity of the data contents. Usually JWT is used for information exchange and authorization.
const jwt = require("jsonwebtoken"); <----- thats how its implemented.

- Compare and contrast unit, integration and end-to-end tests.
Unit tests focus on a single function and isolate it. Integration tests take a whole operation (many functions that operate together) and test the end result of them.

- What is a mock? What are some things you would mock?
A fake "something" meant to demenstrate when it is supposed to look like.
I dont know what would be mocked in code. Perhaps this is useful in a testing scenario? I dont recall seeing anything about this in the lessons.

- What is continuous integration?
It is a style of development where the code is consistently being updated and rigorously tested.

- What is an environment variable and what are they used for?
A variable that is set outside of the code. An API URL is an example.

- What is TDD? What are some benefits and drawbacks?
Test Driven Development. The concept of writing your tests 1st and writing your code to make the test work. This seems like a good idea until you write code that needs your tests to look different. Although it seems that you will always have to go back and edit your tests to match the code every time you go to make updates.

- What is the value of using JSONSchema for validation?
This will verify that you are getting good information into your db. Reducing the risk that you have unhealthy data sets.

- What are some ways to decide which code to test?
No clue. Help me out here. If I had to guess; I would say test the basics and leave the complicated stuff out of it.

- What does `RETURNING` do in SQL? When would you use it?
Ends an sql statment and returns values of specific information that you declare. Without a returning statement you would have to run a seperate SELECT statement to get those values.

- What are some differences between Web Sockets and HTTP?
Websockets offer 2 way communication allowing the client to contact the server. This simulates for better real time communication.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  I really don have enough experience to say for sure but I think I like node Express more. Its seems more structured and better layed out as an overall. Almost like it is easier to modulate things in express.