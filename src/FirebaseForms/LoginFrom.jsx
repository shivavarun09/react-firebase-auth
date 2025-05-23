import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './LoginFrom.css';
import { auth } from '../FirebaseConfig/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [userLoginDetails, setUserLoginDetails] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const getUserLoginDetails = (e) => {
    setUserLoginDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleUserLoginWithEmailAndPass = async (e) => {
    e.preventDefault();
    const { email, password } = userLoginDetails;
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;
      alert(`${user.email} login successful... redirecting to dashboard`);
      navigate('/Logindashboard');
    } catch (error) {
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <div>
      <Form
        style={{ margin: '4rem auto', maxWidth: '350px' }}
        className="LoginForm"
        onSubmit={handleUserLoginWithEmailAndPass}
      >
        <Form.Group className="mb-1">
          <Form.Label style={{ textAlign: 'center' }}>Login Here</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={getUserLoginDetails}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={getUserLoginDetails}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Don't have an account?{' '}
            <span onClick={() => navigate('/signup')} style={{ color: 'green', cursor: 'pointer' }}>
              Signup
            </span>
          </Form.Label>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
