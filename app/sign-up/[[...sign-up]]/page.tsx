import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <div>
      <SignUp forceRedirectUrl={'/onboarding'} />
    </div>
  )
}

export default SignUpPage
