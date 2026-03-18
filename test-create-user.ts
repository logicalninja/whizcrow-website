import { getPayload } from 'payload'
import configPromise from './src/payload.config'

async function run() {
  try {
    const payload = await getPayload({ config: configPromise })
    console.log('Payload initialized successfully.')
    const user = await payload.create({
      collection: 'users',
      data: {
        email: 'test@example.com',
        password: 'password123',
      },
    })
    console.log('Successfully created user:', user.email)
  } catch (err) {
    console.error('Failed to create user:', err)
  }
  process.exit(0)
}

run()
