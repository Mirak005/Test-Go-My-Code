import React from 'react'
import {Card , ListGroup , ListGroupItem} from 'react-bootstrap'


function ContactCard({user:{name , email , phone , id }}) {
    return (
        <Card style={{ width: '18rem',margin:'1rem' }}  >
        
        <Card.Body>
    <Card.Title className="card-first-name  text-white text-center" >{name[0]}</Card.Title>
          <Card.Title>{name}</Card.Title>
         
        </Card.Body>
        <ListGroup className="list-group-flush">
    <ListGroupItem>Email: {email}</ListGroupItem>
    <ListGroupItem>Phone: {phone}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href={`/${id}`}>Posts</Card.Link>
        </Card.Body>
      </Card>
    )
}

export default ContactCard