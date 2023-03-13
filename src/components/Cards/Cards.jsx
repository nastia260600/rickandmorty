import './cards.scss'
import { NavLink } from "react-router-dom";

const Cards = ({ results, page }) => {
   /*let sortResults = results.sort(function (a, b) {
      if (a.name > b.name) {
         return 1;
      }
      if (a.name < b.name) {
         return -1;
      }
      return 0;
   })*/

   let display;
   if (results) {
      display = results.map(el => {
         let { id, name, image, species } = el;
         return (
            <NavLink to={`${page}${id}`} key={id} className="card" style={{ textDecoration: "none", color: "#000" }}>
               <img src={image} alt={name} />
               <div className="card__info">
                  <p className='card__name'>{name}</p>
                  <p className="card__specie">{species}</p>
               </div>
            </NavLink>
         )
      });
   } else {
      display = "No Characters found :/"
   }

   return (
      <div className='cards'>
         {display}
      </div>
   )
}

export default Cards