const { Client } = require('pg');

async function nuclearReset() {
    const client = new Client({
        connectionString: 'postgres://whizcrow:whizcrow_secure_pass@localhost:5432/whizcrow_cms',
    });

    try {
        await client.connect();
        console.log('Connected to DB');

        console.log('Performing nuclear reset of public schema...');
        await client.query('DROP SCHEMA public CASCADE;');
        await client.query('CREATE SCHEMA public;');
        await client.query('GRANT ALL ON SCHEMA public TO whizcrow;');
        await client.query('GRANT ALL ON SCHEMA public TO public;');

        console.log('Nuclear reset successful');
    } catch (err) {
        console.error('Error in nuclear reset:', err);
    } finally {
        await client.end();
    }
}

nuclearReset();
