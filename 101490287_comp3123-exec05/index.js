const express = require('express');
const path = require('path');

const app = express();

// Parse JSON request bodies
app.use(express.json());

// Serve static assets from /public
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/home');
});


app.get('/home', (req, res, next) => {
  const filePath = path.join(__dirname, 'public', 'home.html');
  res.sendFile(filePath, (err) => {
    if (err) next(err);
  });
});


const userRouter = require('./routes/users');
app.use('/api/v1/user', userRouter);


app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});


app.use((err, req, res, next) => {
  console.error(err && err.stack ? err.stack : err);
  res.status(500).send('Server Error');
});


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
