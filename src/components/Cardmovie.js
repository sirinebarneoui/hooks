import { Rating } from '@mui/material';
import Card from 'react-bootstrap/Card';


const Cardmovie=({el})=>{
return(

<div>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {el.posterURL} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text> {el.description} </Card.Text>
        <br/>
        <Rating value={el.rating} readOnly />
      </Card.Body>
    </Card>
</div>
)
}
export default Cardmovie;