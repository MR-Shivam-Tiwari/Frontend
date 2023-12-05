import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function TermsOfServices() {
  return (
    <div>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        <Navbar />
        
      </div>
          <div className="container mb-5">
          <h2>Terms of Service</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            bibendum tristique justo, sed fermentum mauris gravida eu. Morbi nec
            justo eu tortor malesuada bibendum. Fusce aliquet lectus at nisi
            malesuada, vel malesuada metus suscipit. Nullam vel ultrices nisl.
            Nulla facilisi.
          </p>
          <p>
            Donec luctus, turpis in viverra euismod, urna libero auctor ex, et
            viverra lectus enim non justo. Vivamus fringilla vestibulum sapien,
            vitae efficitur nisi lacinia eu. Vivamus consectetur cursus mauris
            eget pharetra. Proin aliquam quam id arcu finibus, at tincidunt urna
            fermentum. Suspendisse potenti.
          </p>
          <p>
            Curabitur sit amet tortor sit amet orci posuere vulputate. Fusce
            hendrerit arcu nec sapien tincidunt, sit amet cursus ex dapibus.
            Curabitur laoreet commodo ullamcorper. Integer et mi eu elit
            fermentum aliquam. Vivamus ut elit vitae purus suscipit iaculis vel
            vitae felis.
          </p>
        </div>
        <Footer />
    </div>
    </div>
  )
}

export default TermsOfServices
