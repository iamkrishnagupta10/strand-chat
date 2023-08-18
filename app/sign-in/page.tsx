import { redirect } from 'next/navigation'

export default async function SignInPage() {
  // Redirecting to home as login is no longer required
  redirect('/')
  return null
}
