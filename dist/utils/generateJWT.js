const jwt = require('jsonwebtoken');
// Retrieve payload parameters from environment variables
const userId = process.env.USER_ID || 'default_user_id';
// You can add more payload parameters here, retrieved from environment variables
// Define your secret key used to sign the token
const secretKey = process.env.JWT_SECRET || 'your_default_secret_key';
// Function to generate JWT token
const generateToken = () => {
    // Define the payload using environment variables or defaults
    const payload = {
        sub: "1234567890",
        roles: ['user'],
        name: 'John Doe',
    };
    // Generate the JWT token with the payload and secret key
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
    return token;
};
// Generate and output the JWT token
const token = generateToken();
console.log('Bearer', token);
