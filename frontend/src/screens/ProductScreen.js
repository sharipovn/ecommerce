import React,{useEffect,useState} from 'react'
import {Link,useParams } from 'react-router-dom'
import { Row, Col,Image,ListGroup,Button,Card,Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useDispatch,useSelector } from 'react-redux'
import {listProductDetails} from '../actions/productActions'


function ProductScreen() {

  const [qty,setQty]=useState(1)

  const params = useParams() // import useParams from react-router
  //  const product = products.find((p) => p._id === params.id);
  const dispatch=useDispatch()
  const productDetails=useSelector(state=>state.productDetails)
  const {loading,error,product}=productDetails

  useEffect(()=>{
      dispatch(listProductDetails(params.id))
    },[dispatch,params])

  return (
    <div> 
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      {
        loading?<Loader />
        :error
        ?<Message variant='danger'>{error}</Message>
        :(
            <Row>
            
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid/>
            </Col>

            <Col md={3}>
              <ListGroup variant='flush'>

                <ListGroup.Item>
                <h3>{product.name}</h3>
                </ListGroup.Item>

                <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                </ListGroup.Item>

                <ListGroup.Item>
                Price: ${product.price}
                </ListGroup.Item>

                <ListGroup.Item>
                Description: {product.description}
                </ListGroup.Item>

              </ListGroup>  
            </Col>
            
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>

                  <ListGroup.Item>
                    <Row>
                    <Col>Price:</Col>
                    <Col><strong>${product.price}</strong></Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                    <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'} 
                      </Col>
                    </Row>
                  </ListGroup.Item>


                {product.countInStock > 0 &&(
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>  
                      <Col xs='auto' className='my-1'>
                        <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e)=>setQty(e.target.value)}>
                        {[...Array(product.countInStock).keys()]}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  )}


                  <ListGroup.Item>
                  <Button style={{ width: '100%' }}  disabled={product.countInStock === 0}  className='btn-block' type='button'>
                    Add to Cart
                  </Button>
                  </ListGroup.Item>

                </ListGroup>
              </Card>
            </Col>
          </Row>
        )
      }

      
    </div>
  )
}

export default ProductScreen
