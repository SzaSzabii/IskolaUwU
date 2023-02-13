import React from "react";
import {MyImg} from './MyImg'
import {Card,CardTitle,CardText, CardBody,Button} from 'reactstrap'
import {useParams,useNavigate} from 'react-router-dom'
import {data} from '../products'

export const Product=()=> {
    const navigate=useNavigate()
    const parms=useParams()
    console.log(parms.id)
    const product=data.find(obj=> obj.id == parms.id)
    console.log(product)

  return (
      <Card
        style={{
          width: "18rem",
        }}
      >
        <MyImg product={product}/>
        {/*<img alt="Sample" src={product.imgUrl} />*/}
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardText>Price:{product.price}</CardText>
          <Button onClick={() => navigate('/products')}>back to all products...</Button>
        </CardBody>
      </Card>
  );
}
