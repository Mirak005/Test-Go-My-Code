import React from 'react'
import { Jumbotron, Container, Badge } from "react-bootstrap";

 function UserDescription({user:{name ,email ,address ,phone ,company , website} }) {
    return (
        <Jumbotron fluid>
        <Container className="posts-profile-user">
          <h2
            className="card-first-name text-white text-center"
            style={{ margin: "auto" }}
          >
            {name[0]}
          </h2>
          <h2 className="text-justify-left">{name}</h2>
          <h5 className="text-justify-left">
            Phone Number : <Badge variant="secondary">{`${phone}`}</Badge>
          </h5>
          <h5 className="text-justify-left">
            E-mail : <Badge variant="secondary">{`${email}`}</Badge>
          </h5>
          <h5 className="text-justify-left">
            Address :
            <Badge variant="secondary">{`${address.street} ${address.suite} ${address.city} ${address.zipcode}`}</Badge>
          </h5>
          <h5 className="text-justify-left">
            Company Name :<Badge variant="secondary">{`${company.name}`}</Badge>
          </h5>
          <h5 className="text-justify-left">
            Website Link : <Badge variant="secondary">{`${website}`}</Badge>
          </h5>
        </Container>
      </Jumbotron>
    )
}

export default UserDescription