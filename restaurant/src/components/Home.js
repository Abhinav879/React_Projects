
import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import RestaurantsCard from './RestaurantsCard'
import {listRestaurants} from '../actions/restaurantAction'
import {useDispatch,useSelector} from 'react-redux'


function Home() {

  const dispatch = useDispatch()
  const data = useSelector(state => state.restaurantList)
  const {restaurant} = data

// const [restaurants, setRestaurants] = useState([])

// async function fetchData() {
//     await fetch("restaurants.json")
//     .then((res)=> res.json())
//     .then((data)=>setRestaurants(data.restaurants))
// }

useEffect(() => {
  dispatch(listRestaurants())
  // fetchData()
}, [])

console.log(data);

  return (
    <Row>
      {restaurant ?
      (restaurant.map(restaurant =>(
        <Col sm={12} md ={8} lg ={6} xl={3}>
          <RestaurantsCard item = {restaurant} />
        </Col>
        ))) : null}
  </Row>
  )
  
}

export default Home