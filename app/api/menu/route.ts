import { prisma } from '@/utils/db'
import { getUserByClerkID } from '@/utils/getUserByClerkID'
import { NextResponse } from 'next/server'

export const POST = async () => {
  const user = await getUserByClerkID()
  const menu = await prisma.menu.create({
    data: {
      userId: user.id,
    },
  })

  return NextResponse.json({ data: menu })
}
