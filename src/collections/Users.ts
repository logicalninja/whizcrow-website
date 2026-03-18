import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
    slug: 'users',
    admin: {
        useAsTitle: 'email',
    },
    auth: true,
    access: {
        admin: () => true,
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
    },
    fields: [
        // Email added by default
        // Add more fields as needed
    ],
}
