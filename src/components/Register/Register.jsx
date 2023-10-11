import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const auth = getAuth(app);
    const navigate=useNavigate();

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                if (user) {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            alert('email verification send')
                        });
                }
            })
            .catch((error) => {
                console.log(error)
                // ..
            });


        event.target.reset()
        navigate('/login');
    }


    return (
        <div>
            <Form onSubmit={handleSubmitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;