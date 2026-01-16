// 'use server'
 
// export async function submitRSDV(formData: FormData): Promise<void> {
//   const { rsdvTable } = await import('@/lib/airtable') // lazy import
//   const email = formData.get('email') as string
 
//   if (!email) throw new Error('Email is required')
 
//   await rsdvTable.create([{ fields: { Email: email } }])
// }



'use server'

export async function submitRSDV(formData: FormData): Promise<void> {
  const { rsdvTable } = await import('@/lib/airtable')

  const email = formData.get('email') as string

  if (!email) {
    throw new Error('Email is required')
  }

  await rsdvTable.create([
    {
      fields: {
        Email: email, // ⚠️ Airtable field names are case-sensitive
      },
    },
  ])
}
