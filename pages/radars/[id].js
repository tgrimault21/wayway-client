import { useRouter } from 'next/router'
import useSWR from 'swr';
import Navbar from '../../components/Navbar'
import RadarInfos from '../../components/RadarInfos'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Radar() {
  const router = useRouter()
  const { data, error } = useSWR('http://165.22.76.251:8080/radars/' + router.query.id, fetcher)

  if (error) return (
    <div>
      <Navbar />
      <div>Failed to load user</div>
    </div>
  ) 

  if (!data) return (
    <div style={{textAlign: "center"}}>
      <Navbar />
      <img className="loading" src="/images/spinLoad.svg"/>
    </div>
  )
  
  return(
    <div>
      <Navbar />
      <RadarInfos radar={data} />
    </div>
  )
}