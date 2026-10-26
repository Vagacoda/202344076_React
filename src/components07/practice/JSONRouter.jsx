//JSONRouter컴포넌트 '/json/:type' 에 JSONPage컴포넌트를 등록한다.
//-----------------------------------------------------------
import { NavLink, Route, Routes } from 'react-router-dom'
import JSONPage from './JSONPage'
import '../Style07.css'
import {Container} from "react-bootstrap";

const JSONRouter = () => {
    return (
        <Container>
            <div className="m-5">
                <NavLink to='/json/posts' className='me=3 px-2'>Posts</NavLink>
                <NavLink to='/json/todos' className='me=3'>Todos</NavLink>
                <NavLink to='/json/albums' className='me=3'>Albums</NavLink>
            </div>
            <Routes>
                <Route path='/json/:type' element={<JSONPage/>}/>
            </Routes>
        </Container>
    )
}
export default JSONRouter