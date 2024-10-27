import { useState } from 'react'
import PersonalInfo from 'PersonalInfo.jsx';
import Education from 'Education.jsx';
import Experience from 'Experience.jsx';
import Resume from 'Resume.jsx';
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
