import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const educationRef = useRef('')
    const locationRef = useRef('')
    const phoneRef = useRef('')

    const handleUserInfo =(event) => {
        event.prevent.default();

        const education = educationRef.current.value;
        const location = locationRef.current.value;
        const phone = phoneRef.current.value;

        const addInfo = {education, location, phone}

        // send data to server

        const url = 'http://localhost:5000/info'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addInfo)
        })
        .then(res => res.json)
        .then(data => {
            console.log(data);
            alert('info added successfully')
            event.target.reset()
        })
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{user?.displayName}</h2>
                    <h2 class="card-title">{user?.email}</h2>
                </div>
            </div>
            <Form onSubmit={handleUserInfo} className='mt-5 card w-96 bg-base-100 shadow-xl p-8'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Education</Form.Label>
                    <Form.Control ref={educationRef} type="text" placeholder="Education" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Location</Form.Label>
                    <Form.Control ref={locationRef} type="text" placeholder="Enter Location" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control ref={phoneRef} type="number" placeholder="Phone No." />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default MyProfile;