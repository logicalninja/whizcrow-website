const { Client } = require('pg');

async function listTables() {
    const client = new Client({
        connectionString: 'postgres://whizcrow:whizcrow_secure_pass@localhost:5432/whizcrow_cms',
    });

    try {
        await client.connect();
        const res = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
        console.log('Tables in public schema:');
        res.rows.forEach(row => console.log(` - ${row.table_name}`));
    } catch (err) {
        console.error('Error listing tables:', err);
    } finally {
        await client.end();
    }
}

listTables();
