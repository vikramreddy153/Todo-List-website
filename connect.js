const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Dhanalakshmi143@',
  database: 'AuthDB',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }

  console.log('Connected to the database as ID ' + connection.threadId);

  // Perform database operations here

  // Release the connection when done
  connection.release();
});

// Close the connection pool when your application exits
process.on('exit', () => {
  pool.end();
});
