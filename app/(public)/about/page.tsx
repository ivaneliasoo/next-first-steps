import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ivan\'s Portfolio About',
  description: 'Generated by create next app',
  keywords: ['about page', 'ivan', 'portfolio'],
}

export default function AboutPage() {
  return (
    <>
      <span className="text-5xl">About Page</span>
    </>
  )
}