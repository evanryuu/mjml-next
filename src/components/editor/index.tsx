'use client'

import 'grapesjs/dist/css/grapes.min.css'
import grapesjs from 'grapesjs'
import plugin from './mjml'
import { useEffect, useRef } from 'react'

const Editor = () => {
  const el = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const editor = grapesjs.init({
      height: '100%',
      noticeOnUnload: false,
      storageManager: false,
      container: el.current!,
      plugins: [plugin],
      pluginsOpts: {
        [plugin.name]: {},
      },
    })
    const defaultContent = `<mjml>
  <mj-head>
    <mj-font name="Barlow" href="https://fonts.googleapis.com/css?family=Barlow"></mj-font>

    <mj-style> .slogan { background: #000; } </mj-style>
  </mj-head>
  <mj-body>
    <!-- Company Header -->
    <mj-section background-color="#f0f0f0">
      <mj-column border="10px solid #F45E43">
        <mj-text font-family="Barlow">A first line of text</mj-text>
        <mj-spacer height="50px" />
      </mj-column>
    </mj-section>

    <!-- Image Header -->
    <mj-section
      background-url="http://1.bp.blogspot.com/-TPrfhxbYpDY/Uh3Refzk02I/AAAAAAAALw8/5sUJ0UUGYuw/s1600/New+York+in+The+1960's+-+70's+(2).jpg"
      background-size="cover"
      background-repeat="no-repeat"
    >
      <mj-column>
        <mj-text css-class="slogan" align="center" color="#fff" font-size="40px" font-family="Helvetica Neue"
          >Slogan here</mj-text
        >
        <mj-button background-color="#F63A4D" href="#"> Promotion </mj-button>
      </mj-column>
    </mj-section>

    <!-- Intro text -->
    <mj-wrapper background-color="#ffe9f7" padding="10px">
      <mj-section background-color="#eaeffa">
        <mj-group background-color="#fffadd">
          <mj-column>
            <mj-text font-style="italic" font-size="20px" font-family="Helvetica Neue" color="#626262"
              >My Awesome Text</mj-text
            >
            <mj-text color="#525252">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu
              semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus, sit
              amet suscipit nibh. Proin nec commodo purus. Sed eget nulla elit. Nulla aliquet mollis faucibus.
            </mj-text>
            <mj-button background-color="#F45E43" href="#">Learn more</mj-button>
          </mj-column>
        </mj-group>
      </mj-section>
    </mj-wrapper>

    <!-- Side image -->
    <mj-section background-color="white">
      <mj-column>
        <mj-image width="200px" src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg" />
      </mj-column>
      <mj-column>
        <mj-text font-style="italic" font-size="20px" font-family="Helvetica Neue" color="#626262">
          Find amazing places ...
        </mj-text>
        <mj-text color="#525252">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu
          semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus.</mj-text
        >
      </mj-column>
    </mj-section>
    <mj-section>
      <mj-column>
        <mj-text font-style="italic" font-size="20px" font-family="Helvetica Neue" color="#626262" align="center">
          ... with real-life images
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-raw>
      <div class="container">
        <img class="item" src="https://source.unsplash.com/random/200x141?random" alt="Example image" />
        <img class="item" src="https://source.unsplash.com/random/200x142?random" alt="Example image" />
        <img class="item" src="https://source.unsplash.com/random/200x143?random" alt="Example image" />
        <img class="item" src="https://source.unsplash.com/random/200x144?random" alt="Example image" />
        <img class="item" src="https://source.unsplash.com/random/200x145?random" alt="Example image" />
        <img class="item" src="https://source.unsplash.com/random/200x146?random" alt="Example image" />
      </div>
    </mj-raw>
    <!-- Icons -->
    <mj-section background-color="#fbfbfb">
      <mj-column>
        <mj-image width="100px" src="http://191n.mj.am/img/191n/3s/x0l.png" />
      </mj-column>
      <mj-column>
        <mj-image width="100px" src="http://191n.mj.am/img/191n/3s/x01.png" />
      </mj-column>
      <mj-column>
        <mj-image width="100px" src="http://191n.mj.am/img/191n/3s/x0s.png" />
      </mj-column>
    </mj-section>

    <!-- Footer -->
    <mj-section background-color="#e7e7e7">
      <mj-column>
        <mj-button href="#">Hello There!</mj-button>
        <mj-social font-size="15px" icon-size="30px" mode="horizontal">
          <mj-social-element name="facebook" href="https://mjml.io/"> Facebook </mj-social-element>
          <mj-social-element name="google" href="https://mjml.io/"> Google </mj-social-element>
          <mj-social-element name="twitter" href="https://mjml.io/"> Twitter </mj-social-element>
        </mj-social>
      </mj-column>
    </mj-section>
    <!-- Footer -->
  </mj-body>
</mjml>`

    editor.setComponents(defaultContent)
  }, [])
  return (
    <div
      id="gjs"
      ref={el}
      style={{
        height: 0,
        overflow: 'hidden',
      }}
    ></div>
  )
}

export default Editor
