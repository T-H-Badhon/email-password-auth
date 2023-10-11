import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth,signInWithEmailAndPassword  } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const auth = getAuth(app);
    const navigate=useNavigate();

    const handleSubmitForm = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                console.log(error)
            });

        event.target.reset();
        navigate('/')
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
                <p className='my-2'>Create new <Link className='text-primary' to='/register'>one</Link> </p>
                <p className='my-2'><Link className='text-primary' to='/reset'>Forget password</Link> </p>
            </Form>
        </div>
    );
};

export default Login;