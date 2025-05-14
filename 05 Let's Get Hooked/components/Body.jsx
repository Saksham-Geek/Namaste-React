import RestaurantCard from "./RestaurantCard";
import ResList from '../utils/resList'

const Restaurants = ResList?.gridElements?.infoWithStyle?.restaurants;
console.log(Restaurants)
const Body = () =>{
  return (
    <>
      <div className="searchBox">
        <input type="text"></input>
      </div>
      <div className="restaurantContainer">
        {
        Restaurants.map( restaurant=> <RestaurantCard ResData={restaurant.info} key={restaurant.info.id} />)
        }
          {/* <RestaurantCard ResData={ResList?.gridElements?.infoWithStyle?.restaurants[0].info}/>
          <RestaurantCard ResData={ResList?.gridElements?.infoWithStyle?.restaurants[1].info}/>
          <RestaurantCard ResData={ResList?.gridElements?.infoWithStyle?.restaurants[2].info}/> */}
      </div>
    </>
  )
}

export default Body;