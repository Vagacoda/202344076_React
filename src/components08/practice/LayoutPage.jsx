//리액트 부트스트랩->Components->Layout->Grid
//Col 레이아웃 디자인 xs={6},md={4},lg={3},xl={2}
import React, { useEffect, useRef, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import '../Style08.css'
import axios from 'axios'
import PageButton from './PageButton';

const LayoutPage = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const lastRef = useRef(1);
    const size=12;
    
    const callAPI = async() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const res = await axios.get(url);
        console.log(res)
        const start = (page-1) * size + 1;
        const end = page * size; 
        const data = res.data.filter(post=>post.id>=start && post.id<=end);
        setPosts(data);
        lastRef.current=Math.ceil(res.data.length/size); // 마지막 페이지
    }

    useEffect(() => {
        callAPI()
    }, {})

    return (
        <div>
            <h1 className='text-center mx-5 px-5'
                style = {{background:'pink'}}>게시글</h1>
            <Row>
                {posts.map(post=>
                <Col>
                    <Card.Body>
                        <div className='body'>{post.body}</div>
                    </Card.Body>
                </Col>)}
            </Row>
        </div>
    )
}
export default LayoutPage