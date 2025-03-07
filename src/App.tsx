import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <MainLayout>
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </MainLayout>
  );
}

export default App;