import { getPayload } from 'payload'
import configPromise from './src/payload.config'

async function sync() {
    console.log('Initializing Payload...')
    try {
        const payload = await getPayload({
            config: configPromise,
        })
        console.log('Payload initialized. Checking database...')
        // Trigger a simple query to ensure tables are created
        const users = await payload.find({
            collection: 'users',
        })
        console.log('Sync complete. Users found:', users.totalDocs)
        process.exit(0)
    } catch (err) {
        console.error('Error syncing database:', err)
        process.exit(1)
    }
}

sync()
