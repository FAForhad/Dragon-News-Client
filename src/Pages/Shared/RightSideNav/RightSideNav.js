import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaTwitter, FaFacebook, FaWhatsapp, FaTelegram, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrendCarusole from '../BrendCarusole/BrendCarusole';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";


const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext)
    const googleprovider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleprovider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-secondary my-2"><FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h4>Find Us On </h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2 mt-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 mt-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 mt-2'><FaTelegram></FaTelegram> Telegram</ListGroup.Item>
                    <ListGroup.Item className='mb-2 mt-2'><FaWhatsapp></FaWhatsapp> Whats App</ListGroup.Item>
                    <ListGroup.Item className='mb-2 mt-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <BrendCarusole></BrendCarusole>
        </div>
    );
};

export default RightSideNav;