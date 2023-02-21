import React from 'react'

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover"
      }}
    >
      <div className="banner_contents">
        <h1 className="banner__title">
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
        </h1>
      </div>

      <div className="banner--fadeButtom" />
    </header>
  );
}

export default Banner
