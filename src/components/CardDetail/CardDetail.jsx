import { NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import './cardDetail.scss'

const CardDetail = () => {
   let { id } = useParams();
   let [fetchedData, updateFetchData] = useState([]);
   let { name, gender, species, status, origin, type, image } = fetchedData

   let api = `https://rickandmortyapi.com/api/character/${id}`

   useEffect(() => {
      (async function () {
         let data = await fetch(api).then(res => res.json())
         updateFetchData(data);
      })();
   }, [api])

   let newType;
   if (type === "") {
      newType = <p>Unknown</p>;
   } else {
      newType = type;
   }

   return (
      <div className="detail__page">
         <div className="back">
            <NavLink to="/" style={{ textDecoration: "none", color: "#000", display: "flex" }}>
               <p className="back__arrow">←</p>
               <p className="back__text">Go back</p>
            </NavLink>
         </div>
         <div className="detail">
            <img src={image} alt={name} />
            <p className="detail__name">{name}</p>
            <p className="detail__title">Informations</p>
            <div className="detail__info">
               <div className="detail__gender info">
                  <p className="detail__subtitle">Gender</p>
                  <p>{gender}</p>
               </div>
               <div className="detail__status info">
                  <p className="detail__subtitle">Status</p>
                  <p>{status}</p>
               </div>
               <div className="detail__specie info">
                  <p className="detail__subtitle">Specie</p>
                  <p>{species}</p>
               </div>
               <div className="detail__origin info">
                  <p className="detail__subtitle">Origin</p>
                  <p>{origin?.name}</p>
               </div>
               <div className="detail__type info">
                  <p className="detail__subtitle">Type</p>
                  <p>{newType}</p>
               </div>
            </div>
         </div>
      </div >
   )
}

export default CardDetail