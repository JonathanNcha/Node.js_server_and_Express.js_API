const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/lessons', (req, res) => {
    const lessons = [
        {
            topic: 'Math',
            location: 'London',
            price: 100,
        },
        {
            topic: 'Math',
            location: 'Liverpool',
            price: 80,
        },
        {
            topic: 'Math',
            location: 'Oxford',
            price: 90,
        },
        {
            topic: 'Math',
            location: 'Bristol',
            price: 120,
        },
    ];

    res.send(lessons);
})

app.get('/users', (req, res) => {
    const users = {
        email: 'user@email.com',
        password: 'mypassword',
    }

    res.send(users);
})

app.listen(9000, () => {
    console.log('app is listening on port: 9000');
});
