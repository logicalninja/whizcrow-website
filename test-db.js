const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' });

const pool = new Pool({
    connectionString: process.env.DATABASE_URI,
});

console.log('Testing connection to:', process.env.DATABASE_URI);

pool.query('SELECT 1', (err, res) => {
    if (err) {
        console.error('Connection error:', err.stack);
    } else {
        console.log('Connection successful!');
    }
    pool.end();
    process.exit();
});
