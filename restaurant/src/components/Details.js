
import React from 'react'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, ListGroupItem, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Review from './Review'
// import { useSelector } from 'react-redux'
function Details() {

  const [data, setData] = useState([])
  const params = useParams()

  useEffect(() =>{
    const fetchData = async () =>{
      await fetch('/restaurants.json')
      .then((res)=> res.json())
      .then((data)=> setData(data.restaurants))
    }
    fetchData()
  },[])

  // const data = useSelector(state => state.restaurantList)
  // const {restaurant} = data

  const details = data.find((i)=> i.id == params.id)


  return (
    <div>
      <Link className ="btn btn-outline-dark rounded btn-sm my-2 m-2" to={'/'}>Back</Link>
      {details ? (
        <Row className='my-3'>
          <Col md={3}>
            <Image src={details.photograph} alt={details.name} fluid/>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroupItem>
                <h2>{details.name}</h2>
                <p>{details.neighborhood}</p>
              </ListGroupItem>
              <ListGroupItem>
                <p>{details.cuisine_type}</p>
                <p>Address : {details.address}</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4}>
           <ListGroup>
            <ListGroupItem>
              <p>Monday :{details.operating_hours.Monday}</p>
              <p>Tuesday :{details.operating_hours.Tuesday}</p>
              <p>Wednesday :{details.operating_hours.Wednesday}</p>
              <p>Thursday :{details.operating_hours.Thursday}</p>
              <p>Friday :{details.operating_hours.Friday}</p>
              <p>Saturday :{details.operating_hours.Saturday}</p>
              <p>Sunday :{details.operating_hours.Sunday}</p>
            </ListGroupItem>
           </ListGroup>
          </Col>
          <Row>
            <Card className='my-3 mx-3 p-3 rounded'>
              <Review data ={details.reviews}></Review>
            </Card>
          </Row>
        </Row>
      ):null}
    </div>
  )
}

export default Details