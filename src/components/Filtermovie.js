import Form from 'react-bootstrap/Form';
import { Rating } from '@mui/material';
import { Button } from 'react-bootstrap';


const Filtermovie=({titre,setTitre,rate,setRate})=>{

 const deleteMovie=()=>{
    setTitre('')
    setRate(0)
 }
 return(

<div className='pop'>
<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Control style={{width: "240px"}} value={titre} onChange={(e)=> setTitre(e.target.value)} type="text" placeholder="Search" />
      </Form.Group>
</Form>
<Rating value={rate} onChange={(e)=>setRate(e.target.value)} /> 

<Button onClick={deleteMovie} variant="info">Reset</Button>

</div>
 )
}
export default Filtermovie;