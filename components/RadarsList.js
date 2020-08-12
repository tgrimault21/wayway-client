import { useState, useEffect } from 'react';
import translation from '../public/constants'
import { useRouter } from 'next/router';

const arrowUp = <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
viewBox="0 0 490.523 490.523" width="12px" height="12px" fill="#222">
<path d="M487.411,355.047L252.744,120.38c-4.165-4.164-10.917-4.164-15.083,0L2.994,355.047
c-4.093,4.237-3.976,10.99,0.262,15.083c4.134,3.993,10.687,3.993,14.821,0l227.115-227.115l227.115,227.136
c4.237,4.093,10.99,3.976,15.083-0.261c3.993-4.134,3.993-10.688,0-14.821L487.411,355.047z"/>
<path d="M479.859,373.266c-2.831,0.005-5.548-1.115-7.552-3.115L245.192,143.015L18.077,370.151
c-4.237,4.093-10.99,3.976-15.083-0.262c-3.993-4.134-3.993-10.687,0-14.821l234.667-234.667c4.165-4.164,10.917-4.164,15.083,0
l234.667,234.667c4.159,4.172,4.148,10.926-0.024,15.085C485.388,372.146,482.681,373.265,479.859,373.266z"/>
</svg>

const arrowDown = <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
viewBox="0 0 490.688 490.688" width="12px" height="12px" fill="#222">
<path d="M472.328,120.529L245.213,347.665L18.098,120.529c-4.237-4.093-10.99-3.975-15.083,0.262
c-3.992,4.134-3.992,10.687,0,14.82l234.667,234.667c4.165,4.164,10.917,4.164,15.083,0l234.667-234.667
c4.237-4.093,4.354-10.845,0.262-15.083c-4.093-4.237-10.845-4.354-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262
L472.328,120.529z"/>
<path d="M245.213,373.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,135.633c-4.093-4.237-3.975-10.99,0.262-15.083
c4.134-3.992,10.687-3.992,14.82,0l227.136,227.115l227.115-227.136c4.093-4.237,10.845-4.354,15.083-0.262
c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262L252.744,370.279
C250.748,372.281,248.039,373.408,245.213,373.415z"/>
</svg>


export default function RadarsList({ radars }) {  
  const radarsSorted = radars.sort(compareRegion)
  const [button, setButton] = useState(0)
  const [radarsList, setRadarsList] = useState({
    list: radarsSorted,
    searchList: radarsSorted
  })
  const [page, setPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    console.log(radarsList)
  })

  function compareRegion(a, b) {
    if (a.region < b.region)
       return -1;
    if (a.region > b.region)
       return 1;
    return 0;
  }

  function comparePlace(a, b) {
    if (a.place < b.place)
       return -1;
    if (a.place > b.place)
       return 1;
    return 0;
  }

  function compareType(a, b) {
    if (a.typeRadar.includes("130") && (b.typeRadar.includes("130") === false))
       return 1;
    if (b.typeRadar.includes("130") && (a.typeRadar.includes("130") === false))
       return -1;
    if (a.typeRadar.includes("110") && (b.typeRadar.includes("110") === false))
       return 1;
    if (b.typeRadar.includes("110") && (a.typeRadar.includes("110") === false))
       return -1;
    if (a.typeRadar.includes("90") && (b.typeRadar.includes("90") === false))
       return 1;
    if (b.typeRadar.includes("90") && (a.typeRadar.includes("90") === false))
       return -1;
    if (a.typeRadar.includes("80") && (b.typeRadar.includes("80") === false))
       return 1;
    if (b.typeRadar.includes("80") && (a.typeRadar.includes("80") === false))
       return -1;
    if (a.typeRadar.includes("70") && (b.typeRadar.includes("70") === false))
       return 1;
    if (b.typeRadar.includes("70") && (a.typeRadar.includes("70") === false))
       return -1;
    if (a.typeRadar.includes("60") && (b.typeRadar.includes("60") === false))
       return 1;
    if (b.typeRadar.includes("60") && (a.typeRadar.includes("60") === false))
       return -1;
    if (a.typeRadar.includes("50") && (b.typeRadar.includes("50") === false))
       return 1;
    if (b.typeRadar.includes("50") && (a.typeRadar.includes("50") === false))
       return -1;
    if (a.typeRadar.includes("30") && (b.typeRadar.includes("30") === false))
       return 1;
    if (b.typeRadar.includes("30") && (a.typeRadar.includes("30") === false))
       return -1;
    if ((a.typeRadar.includes("0") === false) && (b.typeRadar.includes("0") === false) && a.typeRadar > b.typeRadar)
       return 1;
    if ((a.typeRadar.includes("0") === false) && (b.typeRadar.includes("0") === false) && a.typeRadar < b.typeRadar)
       return -1;
    return 0;
  }

  function pagePrec(isFirst) {
    if(!isFirst && page > 1)
      setPage(page-1)
    if(isFirst)
      setPage(1)
  }

  function pageSuiv(isLast) {
    if(!isLast && (page < Math.ceil(radarsList.searchList.length/translation.itemsDisplayed)))
      setPage(page+1)
    if(isLast)
      setPage(Math.ceil(radarsList.searchList.length/translation.itemsDisplayed))
  }

  function onPlaceChange(e) {
    setRadarsList({list: radarsList.list, searchList: radarsList.list.filter(radar => e.target.value === '' || radar.place.toLowerCase().includes(e.target.value.toLowerCase()))})
  }

  function navigate(res) {
    router.push('/radars/[id]', `/radars/${res.id}`)
  }

  function sortUp(category) {
    if(category === "region") {
      setRadarsList({list: [...radarsList.list.sort(compareRegion)], searchList: [...radarsList.searchList.sort(compareRegion)]})
      setButton(1)
    } else if (category === "place") {
      setButton(3)
      setRadarsList({list: [...radarsList.list.sort(comparePlace)], searchList: [...radarsList.searchList.sort(comparePlace)]})
    } else if (category === "type") {
      setButton(5)
      setRadarsList({list: [...radarsList.list.sort(compareType)], searchList: [...radarsList.searchList.sort(compareType)]})
    }
  }

  function sortDown(category) {
    if(category === "region") {
      setButton(2)
      setRadarsList({list: [...radarsList.list.sort(compareRegion).reverse()], searchList: [...radarsList.searchList.sort(compareRegion).reverse()]})
    } else if (category === "place") {
      setButton(4)
      setRadarsList({list: [...radarsList.list.sort(comparePlace).reverse()], searchList: [...radarsList.searchList.sort(comparePlace).reverse()]})
    } else if (category === "type") {
      setButton(6)
      setRadarsList({list: [...radarsList.list.sort(compareType).reverse()], searchList: [...radarsList.searchList.sort(compareType).reverse()]})
    }
  }

  return(
    <div className="radars__table-card">
      <div className="radars-list__filters">
        <label htmlFor="radar-place">Filtrer par ville : </label>
        <input id="radar-place" type="text" onChange={onPlaceChange}></input>
      </div>
      <table className="radars__table">
        <tbody>
          <tr>
            <th scope="col">
              <div className="radars-list__header">
                Région
                <div className="radars-list__sort">
                  <button onClick={() => sortUp("region")} className={button === 1 ? 'sort--active' : ''} disabled={button === 1}>{arrowUp}</button>
                  <button onClick={() => sortDown("region")} className={button === 2 ? 'sort--active' : ''} disabled={button === 2}>{arrowDown}</button>
                </div>
              </div>
            </th>
            <th scope="col">
              <div className="radars-list__header">
                Ville
                <div className="radars-list__sort">
                  <button onClick={() => sortUp("place")} className={button === 3 ? 'sort--active' : ''} disabled={button === 3}>{arrowUp}</button>
                  <button onClick={() => sortDown("place")} className={button === 4 ? 'sort--active' : ''} disabled={button === 4}>{arrowDown}</button>
                </div>
              </div>
            </th>
            <th scope="col" className="radars__table--hidden">
              Voie
            </th>
            <th scope="col">
              <div className="radars-list__header">
                Limitation
                <div className="radars-list__sort">
                  <button onClick={() => sortUp("type")} className={button === 5 ? 'sort--active' : ''} disabled={button === 5}>{arrowUp}</button>
                  <button onClick={() => sortDown("type")} className={button === 6 ? 'sort--active' : ''} disabled={button === 6}>{arrowDown}</button>
                </div>
              </div>
            </th>
          </tr>
        {radarsList.searchList.slice((page-1)*translation.itemsDisplayed, page*translation.itemsDisplayed).map(res => (
          <tr onClick={() => navigate(res)} key={res.id}>
            <td>{res.region}</td>
            <td>{res.place}</td>
            <td className="radars__table--hidden">{res.voie}</td>
            <td>{translation.type[res.typeRadar]}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <div className="radars-list__pagination">
        <button onClick={() => pagePrec(true)} disabled={page === 1}><img src="/images/double-arrow.svg" style={{transform: "scaleX(-1)"}}/></button>
        <button onClick={() => pagePrec(false)} disabled={page === 1}>Précédent</button> 
        - {page}/{Math.ceil(radarsList.searchList.length/translation.itemsDisplayed)} - 
        <button onClick={() => pageSuiv(false)} disabled={page === Math.ceil(radarsList.searchList.length/translation.itemsDisplayed)}>Suivant</button>
        <button onClick={() => pageSuiv(true)} disabled={page === Math.ceil(radarsList.searchList.length/translation.itemsDisplayed)}><img src="/images/double-arrow.svg" /></button>
      </div>
    </div>
  )
}