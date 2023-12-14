import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';


const Addmovie=({movies,setMovies})=>{

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title,setTitle ]= useState('')
  const [description,setDescription]= useState('')
  const [posterURL,setPosterURL]= useState('')
  const [rating,setRating]= useState(0)

  const Add=()=>{
    setMovies([...movies, {title,description,posterURL, rating, id : Math.random()}])

  }

return(

<div>
<Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="enter title" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="enter description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>image</Form.Label>
                <Form.Control onChange={(e)=>setPosterURL(e.target.value)} type="text" placeholder="enter imageURL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Rating</Form.Label>
                <Rating  onChange={(e)=>setRating(e.target.value)}/> 
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {Add();handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

</div>
)
}
export default Addmovie;