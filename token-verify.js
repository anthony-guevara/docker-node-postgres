const jwt = require('jsonwebtoken');

const secret = 'myCat';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1OTI5NDI1NX0.m4DNOQbCva8AMyyuViMSCC6of9EyDDF6whFPlVgYlm8';


function verifyToken(token, secret){
    return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);