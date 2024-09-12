import { prisma } from '@/utils/db'
import { auth, currentUser, User as ClerkUser } from '@clerk/nextjs/server'

import { User } from '@prisma/client'
import { redirect } from 'next/navigation'

type Auth = ReturnType<typeof auth>

const createNewUser = async (currentUser: ClerkUser) => {
  const user = await prisma.user.create({
    data: {
      email: currentUser.primaryEmailAddress?.emailAddress ?? '',
      clerkId: currentUser.id,
      name: currentUser.fullName,
    },
  })
  return user
}

const Onboarding = async () => {
  const currUser = await currentUser()

  if (currUser) {
    const match = await prisma.user.findUnique({
      where: { clerkId: currUser.id },
    })
    if (!match) {
      const user = await createNewUser(currUser)
      return <div>Witaj {user.name}</div>
    }
  }
  console.log('failed auth/assigning new user')
  redirect('/')
  //   navigate('/')
  //   if (!user) return <div>loading...</div>
}

export default Onboarding
