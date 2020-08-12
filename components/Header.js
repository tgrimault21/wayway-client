import { useState } from 'react';

export default function Header() {

  const [imageShown1, setImageShown1] = useState("");
  const [imageShown2, setImageShown2] = useState("hidden");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonOpacity1, setButtonOpacity1] = useState("");
  const [buttonOpacity2, setButtonOpacity2] = useState("disabled");

  function toggleImage() {
    if (imageShown1 === "") {
      setImageShown1("hidden");
      setImageShown2("");
      setButtonDisabled(false);
      setButtonOpacity1("disabled");
      setButtonOpacity2("");
    } else {
      setImageShown1("");
      setImageShown2("hidden");
      setButtonDisabled(true);
      setButtonOpacity1("");
      setButtonOpacity2("disabled");
    }
  }

  return(
    <section className="header">
      <div className="header__description">
        <div className="header__top">
          <img className="header__logo" src="/images/car_wayway_logo.svg" />
          <h1 className="header__title">WayWay</h1>
        </div>
        <h2>Radars signalés, conduite apaisée</h2>
        <p>Wayway vous indique les radars fixes à proximité, et vous alerte lorsque l'un d'entre eux se trouve sur votre itinéraire dans la minute qui suit !</p>
        <div className="header__download">
          <span>Télécharger APK</span> 
          <a href="/wayway-beta.apk" download><img src="/images/download.svg" /></a>
        </div>
      </div>
      <div className="header__mobile">
        <div className="header__images">
          <button id="right-arrow" disabled={!buttonDisabled} className={"header__button " + buttonOpacity1} onClick={toggleImage}><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="#ff7700"><path d="M22 12l-20 12 7.289-12-7.289-12z"/></svg></button>
          <button id="left-arrow" disabled={buttonDisabled} className={"header__button " + buttonOpacity2} onClick={toggleImage}><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="#ff7700"><path d="M22 12l-20 12 7.289-12-7.289-12z" transform="scale(-1,1) translate(-24,0)"/></svg></button>
          <img className="header__smartphone" src="/images/smartphone.png"/>
          <img className={"header__screenshot " + imageShown1} src="/images/screenshot1.png"/>
          <img className={"header__screenshot " + imageShown2} src="/images/screenshot2.png"/>
        </div>
      </div>
    </section>
  );
}