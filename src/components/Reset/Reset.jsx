import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from '../../firebase/firebase.config';


const Reset = () => {
    const auth = getAuth(app);

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const email=event.target.email.value
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                console.log(error)
                // ..
            });
        event.target.reset();
    }



    return (
        <div>
            <Form onSubmit={handleSubmitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Reset;