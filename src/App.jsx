import React, { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(180)
  const [saturation, setSaturation] = useState(50)
  const [lightness, setLightness] = useState(50)

  function changeHue(event) {
    setHue(event.target.value)
  }

  function changeSaturation(event) {
    setSaturation(event.target.value)
  }

  function changeLightness(event) {
    setLightness(event.target.value)
  }

  return (
    <>
      <body
        style={{
          backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        }}
      >
        <h1>Color Mixer</h1>
        <div>
          <ul>
            <li>
              <b>H:</b>
            </li>
            <li>
              <input
                type="range"
                min="0"
                max="360"
                onInput={changeHue}
                value={hue}
              />
            </li>
          </ul>
          <ul>
            <li>
              <b>S:</b>
            </li>
            <li>
              <input
                type="range"
                min="0"
                max="100"
                onInput={changeSaturation}
                value={saturation}
              />
            </li>
          </ul>
          <ul className="last">
            <li>
              <b>L:</b>
            </li>
            <li>
              <input
                type="range"
                min="0"
                max="100"
                onInput={changeLightness}
                value={lightness}
              />
            </li>
          </ul>
        </div>
        <p>Hi</p>
      </body>
    </>
  )
}
