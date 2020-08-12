import dynamic from 'next/dynamic';
import translation from '../public/constants'

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), {
  ssr: false
});

export default function RadarInfos({ radar }) {
  return(
    <div className="radar__card">
      {console.log(radar)}
      <ul>
        <li><img src="/images/iconmarker.svg" /> {radar.place} - {radar.region}</li>
        <li><img src="/images/road.svg" /> {radar.voie} - {radar.direction}</li>
        <li><img src="/images/speed-camera.svg" /> {translation.type[radar.typeRadar]} - {radar.radarEquipment}</li>
      </ul>
      
      <DynamicComponentWithNoSSR latitude={radar.latitude} longitude={radar.longitude}/>
    </div>
  )
} 