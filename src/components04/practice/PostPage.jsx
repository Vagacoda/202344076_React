//useEffect을 이용해 jsonplaceholder의 posts 데이터 불러오기
//page가 변경될 때마다 해당 페이지의 5개의 데이터 불러오기
//posts의 제목을 클릭할 때마다 본문이 보였다, 사라졌다하는 토글기능
//-----------------------------------------------------------------
import React, { useEffect, useState, useRef } from 'react'
import PageButton from './PageButton'
import '../Style04.css'

const PostPage = () => {
    const [posts, setPosts] = useState([]) //set을 붙여야함
    const [page, setPage] = useState(1);
    const size = 10;
    const callAPI = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            const start = (page - 1) * size + 1;
            const end = (page * size);
            const data = json.filter(post => post.id>=start && post.id <= end);
            setPosts(data); // 시험에 ( 빈칸 ) 으로 나옴
        });
    }

    useEffect(() => {
        callAPI();
    }, []);

    return (
        <div className='box'>
            <h1>Posts</h1>

            {posts.map(post => (
                <div key={post.id}>
                    <h5 ClassName = 'title'>{post.id}. {post.title}</h5>
                </div>
            ))}

            <PageButton/>
        </div>
    )
}
export default PostPage