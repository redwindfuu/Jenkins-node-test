const express = require('express');

const port = process.env.PORT || 3000;

const app = express();
app.use((req, res, next) => {
    res.send('Welcome to the API');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});