import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import {Router } from './components/Router'
import Dynamic from './containers/Dynamic'

import Nav from './components/Nav'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <React.Suspense fallback={<em>Loading...</em>}>
      <Nav></Nav>
      </React.Suspense>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <div className="footer"> copyright 2020. All rights resevered</div>
      
    </Root>
  )
}

export default App
