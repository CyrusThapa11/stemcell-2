/* eslint-disable no-unused-vars */
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";

// Get ID from URL
const ViewPatient = () => {
  const params = useParams();

  const [UserState, setUserState] = useState(null);

  console.log("params --> ", params.id);
  useEffect(() => {
    // effect

    // const getUser = async () => {
    //   console.log("getting user");
    //   const docRef = await getDoc(doc(db, "Patients", params.id));
    //   console.log(docRef.data());
    //   setUserState(...docRef.data()); 
    // };
    // getUser();

    return () => {
      // cleanup
    };
  }, []);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ViewPatient;
