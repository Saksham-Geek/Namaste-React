import {CDN_URL} from '../utils/constants'
const RestaurantCard = ({ResData}) =>{
    console.log("RESLIST:::", ResData)
    const {name, cuisines, costForTwo, avgRatingString, cloudinaryImageId} = ResData
    const {deliveryTime} = ResData.sla
    // console.log("name:", name)
    return (
     <div className="restaurantCard">
      <img src={`${CDN_URL}${cloudinaryImageId}`} />
      <h4>{name}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(', ')}</h4>
      <h4>ETA :{deliveryTime} Minutes</h4>
     </div>
  
    
    )
  } 

  export default RestaurantCard;