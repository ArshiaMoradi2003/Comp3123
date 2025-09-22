
const express = require('express');
const { getAllEmployees, getEmployeeNamesAsc, getTotalSalary } = require('./Employee');
const app = express();
const PORT = process.env.PORT || 3000;

// Welcome route (HTML)
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`
    <html>
      <head><title>Welcome</title></head>
      <body>
        <h1>Welcome to the Employee Service</h1>
        <p>Available endpoints:</p>
        <ul>
          <li><code>/employee</code> — all employee details (JSON)</li>
          <li><code>/employee/names</code> — employee full names ascending (JSON)</li>
          <li><code>/employee/totalsalary</code> — total salary of all employees (JSON)</li>
        </ul>
      </body>
    </html>
  `);
});

// All employees (JSON)
app.get('/employee', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).json(getAllEmployees());
});

// Names ascending (JSON)
app.get('/employee/names', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).json(getEmployeeNamesAsc());
});

// Total salary (JSON)
app.get('/employee/totalsalary', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).json({ totalSalary: getTotalSalary() });
});

// 404 + error handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
