//1. MainRouter에 등록한다.
//2. 로그인 성공시 MenuBar를 변경한다.
//3. success.user.email, success.user.uid, error.message
//---------------------------------------------------------------
import React, { useContext, useState } from 'react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router'
import { ModalContext } from '../../context/ModalContext'
import { app } from '../../initFirebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const LoginPage = () => {
    const { setAlert } = useContext(ModalContext);
    const navi = useNavigate();
    const auth = getAuth(app);

    const [form, setForm] = useState({
        email:"hong@test.com",
        pass:'12341234'
    });

    const {email, pass} = form;
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onLogin = (e) => {
        e.preventDefault()
        if(email === '' || !email.includes('@')){
            alert('Invalid email address')
        }else if(pass.length < 8){
            alert('Invalid password length')
        }else{//Login Check
            signInWithEmailAndPassword(auth, email, pass)
                .then(success => {
                    alert('success login');
                    sessionStorage.setItem('email', email);
                    sessionStorage.setItem('uid', success.user.uid);
                    navi('/');
                })
                .catch(error => {
                    alert(`error : ${error.message}`);
                })
        }
    }

    return (
        <Row className='my-5 justify-content-center'>
            <Col xs={7} md={6} lg={5} xl={4} className='my-5'>
                <Card>
                    <Card.Header>
                        <h3 className='text-center'>로그인</h3>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={onLogin}>
                            <Form.Control onChange={onChange} value={email} name='email' className='mb-2'/>
                            <Form.Control onChange={onChange} value={pass} name='pass'
                                          type='password' className='mb-2'/>
                            <Button type='submit' className='w-100'>로그인</Button>
                        </Form>
                    </Card.Body>
                    <Card.Footer className='text-end'>
                        <Link to ='/join'>회원가입</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}
export default LoginPage