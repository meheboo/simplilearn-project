'use server'

import { rsvpTable } from '@/lib/airtable'

export async function submitRSVP(formData: FormData): Promise<void> {
  const email = formData.get('email') as string

  if (!email) {
    // You can throw an error, which Next.js will handle
    throw new Error('Email is required')
  }

  await rsvpTable.create([
    {
      fields: {
        Email: email,
      },
    },
  ])

  // Do NOT return anything
}
