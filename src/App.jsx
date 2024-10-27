// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <PersonalInfo />
      <Education />
      <Experience />
      <Resume
        personalInfo={personalInfo}
        education={education}
        experience={experience}
      />
    </>
  )
}

export default App
