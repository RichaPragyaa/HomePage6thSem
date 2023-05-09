import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Home</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="http://code-buddy-drab.vercel.app">Code Buddy</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://saptarshibanerjee420.github.io/Task-Planner/">Task Planner</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://vanshikatiwari.github.io/WeatherApp.github.io/">Weather</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://roaring-souffle-19faf3.netlify.app/">Unit Converter</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://jyoti1610.github.io/6th-sem-project/">Reading Zone</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="https://krishru.github.io/Translator-and-Dictionary/">Dictionary</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">Health</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://padmini02.github.io/World-Clock-/">World Clock</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://jayapreyasi.github.io/Help-Page/">Help</a>
          </li>


        </ul>
      </div>
    </div>
  </nav>
  )
}
