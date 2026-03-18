import { getPayload } from 'payload'
import configPromise from '@payload-config'
import jwt from 'jsonwebtoken'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    const slug = searchParams.get('slug')

    if (!id || !slug) {
        return Response.json({ error: 'Page ID and slug are required' }, { status: 400 })
    }

    const payload = await getPayload({ config: configPromise })
    const secret = process.env.PAYLOAD_SECRET || 'fallback-secret'

    // Create a time-limited token (e.g., 48 hours)
    const token = jwt.sign({ pageId: id, slug }, secret, { expiresIn: '48h' })

    const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
    const magicLink = `${serverURL}/${slug}?preview=true&token=${token}`

    return Response.json({
        success: true,
        magicLink,
        expires: '48 hours',
        instructions: 'Share this link with external reviewers. No login required.'
    })
}
