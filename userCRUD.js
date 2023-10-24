const express = require('express');
const app = express();
app.use(express.json());


const users = [
    { id: 1, username: 'user1', email: 'user1@example.com' },
    // Add more dummy users here
];


app.post('/users', (req, res) => {
    // Implement user creation logic here
});


app.get('/users', (req, res) => {
    // Implement logic to return all users
});


app.put('/users/:id', (req, res) => {
    // Implement user update logic here
});


app.delete('/users/:id', (req, res) => {
    // Implement user deletion logic here
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
