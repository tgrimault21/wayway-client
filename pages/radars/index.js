import Navbar from '../../components/Navbar'
import RadarsList from '../../components/RadarsList'
import useSWR from 'swr';

/* const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,  
}) */
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Radars() {
  const { data: radars, error } = useSWR('http://165.22.76.251:8080/radars/product/simple', fetcher)

  if (error) return (
    <div>
      <Navbar />
      <div>Failed to load user</div>
    </div>
  ) 

  if (!radars) return (
    <div style={{textAlign: "center"}}>
      <Navbar />
      <img className="loading" src="/images/spinLoad.svg"/>
    </div>
  )  

  return (
    <div>
      <Navbar />
      <RadarsList radars={radars}/>
    </div>
  )
}
