//type을 parameter로, id는 query로 받아 해당 데이터를 불러온다.
//--------------------------------------------------------
import React, {useEffect, useRef, useState} from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import {Table, Button} from 'react-bootstrap';

const JSONPage = () => {
    const [response, setResponse] = useState(null);
    const {type} = useParams();
    const [search] = useSearchParams();
    const id = parseInt(search.get('id')) || 1;
    const navi = useNavigate();
    const size = 10;
    const [list, setList] = useState([]);
    const lastRef = useRef();

    const callAPI = () => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setResponse(json);
                const start = (id-1) * size+1;
                const end = (id * size);
                const data = json.filter(item=> item.id >= start && item.id <= end);
                setList(data);
                lastRef.current = Math.ceil(json.length/size);
            })
    }

    useEffect(() => {
        callAPI();
    }, [type, id]);

    return (
        <div className='json'>
            <h5 className='text-center mb-3'>{type}202344076박인서JSONPlaceHolder</h5>
            <Table bordered striped hover variant='dark'>
                <tbody>
                {list.map(item =>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td className='text-truncate'>
                            <div className='text-truncate'>{item.title}</div>
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>
            <div className='text-center'>
                <Button
                    size='sm'
                    variant='succes'
                    disabled={id === 1}
                    onClick={()=>navi(`/json/${type}?id=${id-1}`)}>
                    이전
                </Button>
                <span>{id}/{lastRef.current}</span>
                <Button
                    size='sm'
                    variant='succes'
                    disabled={id === lastRef.current}
                    onClick={()=>navi(`/json/${type}?id=${id+1}`)}>
                    다음
                </Button>
            </div>
        </div>
    )
}
export default JSONPage