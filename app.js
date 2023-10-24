const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: false
}));

const users = [
    {username: 'user1', password: '123' },
    // Add more users here
];

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.send('Invalid username or password');
    }

    req.session.user = user;
    res.send('Login successful');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
