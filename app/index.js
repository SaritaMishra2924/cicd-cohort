const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/crash', (req, res) => {
    res.send('Server will crash now!');
    process.exit(1);
});
// take input from params and return it back to the user
app.get('/:input', (req, res) => {
    const input = req.params.input;
    res.send(`You said: ${input}`);

})

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;