import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card
      className='my-3 rounded'
      style={{
        backgroundColor: '#F1F1F1',
        // backgroundColor: 'red',
        marginLeft: '0.2rem',
        paddingBottom: '0px',
        boxShadow: '3px 3px 10px 3px #888888',
        borderRadius: '10px',
      }}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant='top'
          style={{
            height: '250px',
          }}
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong style={{ color: 'black' }}>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
