import { useUser } from '@clerk/nextjs'

import { prisma } from './db'
import { auth } from '@clerk/nextjs/server'
import { Prisma } from '@prisma/client'

interface PropTypes {
  select?: Prisma.UserSelect
  include?: Prisma.UserInclude
}

export const getUserByClerkID = ({ select, include }: PropTypes = {}) => {
  const { userId } = auth()

  const options: Prisma.UserFindUniqueOrThrowArgs = {
    where: { clerkId: userId ?? '' },
  }
  if (select) options.select = select
  else if (include) options.include = include

  const user = prisma.user.findUniqueOrThrow(options)

  return user
}
