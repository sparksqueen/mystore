import ItemCount from './ItemCount';
import { Jumbotron , Container , Image , Row , Col } from 'react-bootstrap'


const ItemDetail = ({productos}) => {
  
    return (

        <>
        <Jumbotron fluid>
            <Container>
            <Row>
    <Col xs={6} md={4} lg={4} xl={4}>
      <Image src={productos.img} thumbnail />
    </Col>
    <Col xs={6} md={8} lg={8} xl={8}>
    <h1>{productos.titulo}</h1>
  <h1>{productos.precio}</h1> 
  <p>{productos.descripcion}</p>

  <ItemCount stock={productos.stock} precio={productos.precio}/>
    </Col>
    </Row>


  </Container>
      
</Jumbotron>

        </>
    )
}
export default ItemDetail;