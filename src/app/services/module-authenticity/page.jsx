import HelpSection from '@/app/components/home/HelpSection'
import ModuleAuthenticityPage from '@/app/components/ModuleAuthenticityPage'
import React from 'react'

const page = () => {
  return (
    <div className='mt-[60px]'>
      <ModuleAuthenticityPage />
      <HelpSection />
    </div>
  )
}

export default page
