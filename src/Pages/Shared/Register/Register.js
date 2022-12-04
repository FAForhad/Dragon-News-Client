import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Register = () => {
    const { createUserWithEmailPass, updateUserProfile, verifiEmail } = useContext(AuthContext);
    const [accept, setAccept] = useState(false)
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        // console.log(name, photoURL, email, password)
        createUserWithEmailPass(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                handleupdateUserProfile(name, photoURL)
                sendemailVarify()
                toast.success('Please Verify your email address')
                navigate('/')
            })
            .catch(error => console.error(error))

    }

    const sendemailVarify = () => {
        verifiEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleupdateUserProfile = (name, photoURL) => {

        const profile = {
            name: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .then(error => console.log(error))
    }

    const handleAccepted = (event) => {
        setAccept(event.target.checked)
        console.log(event.target.checked)
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo</Form.Label>
                    <Form.Control type="photoURL" name='photoURL' placeholder="PhotoURL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={handleAccepted} label={<>Accept <Link to='/terms'>terms & conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accept}>
                    Register
                </Button>
                <Form.Text className="text-muted text-danger">

                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;