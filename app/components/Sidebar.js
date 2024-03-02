import React from 'react'
import './Sidebar.css';


const Sidebar = () => {
  return (
    <div>
      <div>
      </div>
      <div id='sidebar'>
        <h1 class='heading'>Virtual tours</h1>
        <p class='content'>We create immersive, interactive virtual tours that allow users to explore real-world locations in stunning detail, no matter where they are in the world. From historic sites to natural wonders to corporate offices, we can bring any location to life in the virtual realm.</p>
        <h1 class='heading'>Product demos</h1>
        <p class='content'>Our product demos allow customers to experience your products in a whole new way. We create interactive, 3D models that let users explore your products from every angle, see them in action, and get a better sense of their features and benefits.</p>
        <h1 class='heading'>Exhibitions and museums</h1>
        <p class='content'>Our virtual exhibitions and museums allow visitors to experience the wonders of the world's greatest museums and galleries without leaving.</p>
        <button id="button1">&lt; Go back</button>
      </div>
  </div>
    
  )
}

export default Sidebar
