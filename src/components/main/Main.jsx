import React from 'react'
import { Portfolio } from './Portfolio'
import { Skills } from './Skills'

import { SoftSkills2 } from './SoftSkills2'


export const Main = () => {
  return (
    <div className='container mb-5'>

      <Portfolio />
      <div className='app-header pb-4'>
      <Skills />
      <SoftSkills2 />

      </div>
    </div>
  )
}
