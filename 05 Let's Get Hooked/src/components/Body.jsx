import RestaurantCard from "./RestaurantCard";
import ResList from '../utils/mockData'
import { useState } from "react";


const Body = () => {
  // Normal JS Variable which has list of restaurants
  let RestaurantsList = ResList?.gridElements?.infoWithStyle?.restaurants;
  // console.log(RestaurantsList)

  // State variable
  let [RestaurantList, setRestaurantList] = useState(RestaurantsList)


  return (
    <>
      <div className="filter">
        <button onClick={function filterTopRestaurants() {
          const filteredRestaurants = RestaurantsList.filter((restaurant) =>  restaurant.info.avgRating > 4.3)
          setRestaurantList(filteredRestaurants)
          console.log("filteredRestaurants", filteredRestaurants)

        }}>Top Rated Restaurants</button>
      </div>
      <div className="restaurantContainer">
        {
          RestaurantList.map(restaurant => <RestaurantCard ResData={restaurant.info} key={restaurant.info.id} />)
        }
        {/* <RestaurantCard ResData={ResList?.gridElements?.infoWithStyle?.restaurants[0].info}/>
          <RestaurantCard ResData={ResList?.gridElements?.infoWithStyle?.restaurants[1].info}/>
          <RestaurantCard ResData={ResList?.gridElements?.infoWithStyle?.restaurants[2].info}/> */}
      </div>
    </>
  )
}

export default Body;