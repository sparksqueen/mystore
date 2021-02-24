import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { Col } from 'react-bootstrap';


const Item = ({producto}) => {



    return <>

<NavLink to={`/item/${producto.id}`}>
    <Col className="mb-4" >
        <Card  >
            <div style={{height: 200}}>
            <Card.Img className="d-block mx-auto" style={{maxHeight: 200, width: "auto", maxWidth: "100%"}} variant="top" src={producto.img} />
            </div>
            <Card.Body>
                <Card.Title >{producto.titulo}</Card.Title> 
                <Card.Text>{producto.precio}</Card.Text>
                <Button variant="secondary">Comprar</Button>

            </Card.Body>
        </Card>
        </Col>
</NavLink>

    </>
}

export default Item;