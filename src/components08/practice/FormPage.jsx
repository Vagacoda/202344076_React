//리액트 부트스트랩->Components->Forms
//Col 레이아웃 디자인 xs={12} md={10} lg={9} xs={8}
import React, { useContext, useRef, useState } from 'react'
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap'
import '../Style08.css'
import { ModalContext } from '../context/ModalContext'

const initForm = {
    id:'blue',
    pass:'1234',
    name:'홍길동',
    intro:'저는 초보 개발자입니다.'
}

const FormPage = () => {
    const [form, setForm] = useState(initForm);

    const onSubmit = (e) => {
        
    }
    const onChange = (e) => {
        
    }

    return (
        <div>
            <h1 className='text-center my-5'>회원가입</h1>
            <Row className='justify-content-center'>
                <Col xs={12} md={10} lg={9} xl={8}>
                    <Form className='p-3'>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>아이디</InputGroup.Text>
                            <Form.Control/>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>비밀번호</InputGroup.Text>
                            <Form.Control type='password'/>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
export default FormPage