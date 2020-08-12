import { useEffect } from "react"

export default function Presentation() {
  useEffect(() => {
    window.addEventListener('scroll', addTransition)
  })

  function addTransition() {
    [...document.getElementsByClassName("presentation__section")].forEach(
      elem => {
        if(elem.getBoundingClientRect().top <= window.innerHeight) {
          elem.classList.add('appears');
        }
      }
    );
  }

  return(
    <div>
      <section id="presentation" className="presentation__section">
        <div className="app__screenshot">
        <img src="/images/screenshot5.jpg"/>
        </div>
        <div className="app__description">
          <h2>
            Wayway veille sur votre environnement
          </h2>
          <p>
            Wayway vous propose un suivi en temps réel de votre position géographique, et indique tous types de radars fixes se trouvant à proximité (notamment les radars de feux ou encore à tronçon).
          </p>
          <p>
            La signalisation du radar le plus proche devient orange lorsque celui-ci se trouve potentiellement sur votre route. Vous serez donc alerté à temps pour pas vous faire surprendre lors du passage devant le radar.
          </p>
        </div>
      </section>
      <section id="out-of-app" className="presentation__section">
        <div className="app__description">
          <h2>
            Wayway, toujours visible
          </h2>
          <p>
            Vous voulez profiter des avantages de Wayway tout en restant sur votre application GPS fétiche ? Pas de problème, Wayway continue de vous indiquer les radars à proximité, grâce à une petite bulle en premier plan, lorsque vous naviguez sur d'autres applications. Pour cela il suffit de cliquer sur le compteur de vitesse en bas de l'application, puis d'ouvrir votre GPS.
          </p>
        </div>
        <div className="app__screenshot">
          <img src="/images/screenshot6.jpg"/>
        </div>
      </section>
      <section id="settings" className="presentation__section">
        <div className="app__screenshot">
          <img src="/images/screenshot7.jpg"/>
        </div>
        <div className="app__description">
          <h2>
            Personnalisez Wayway
          </h2>
          <p>
            <b>Notifications</b> : Vous pouvez activer ou désactiver les notifications en fonction du type d'alerte. Vous pouvez également déterminer une fréquence maximale de notifications, si vous souhaitez limiter le nombre de notifications reçues.
          </p>
          <p>
            <b>Pays</b> : Vous pouvez également utiliser Wayway dans un pays limitrophe à la France. Pour cela, il vous suffit de choisir celui dans lequel vous voyagez, puis redémarrer l'application. Vous aurez donc accès à tous les radars de France et du pays choisi.
          </p>
          <p>
            <b>Localisation</b> : Vous pouvez adapter le comportement de Wayway en signalant le type de routes sur lesquelles vous allez rouler. Cela permet d'ajuster la distance de signalement d'un radar, et également d'accorder la vue GPS en fonction du type de route.
          </p>
        </div>
      </section>
    </div>
  )
}