import ReactMapGL, {Marker} from 'react-map-gl';
import { useState, useEffect } from 'react';

export default function Map({latitude, longitude}) {
  const size = useWindowSize()
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom: 10
  })

  useEffect(() => {
    setViewport({
      ...viewport,
      height: size.width > 550 ? 480 : 0.9*size.width-20,
      width: size.width > 550 ? 480 : 0.9*size.width-20
    })
  }, [size])

  return(
    <div>
    {console.log(size.width)}
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoidGdyaW1hdWx0MjEiLCJhIjoiY2tkOHV6M3UxMGpqMTJ5azY2N2hxcWtnMCJ9.agaqJWiDG5i-h2nLQvv_XQ"
        onViewportChange={(vp) => setViewport(vp)}
        {...viewport}>
          <Marker latitude={latitude} longitude={longitude} offsetLeft={-24} offsetTop={-48}>
            <img src="/images/marker.png" />
          </Marker>
      </ReactMapGL>
    </div>
  )  
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);

  }, []); 

  return windowSize;
}