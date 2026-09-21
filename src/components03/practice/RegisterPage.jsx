//상품목록을 출력하고 form의 입력상자 내용이 변경 될때마다 form state 값 변경
//onSubmit 핸들러에 상품등록 함수, onReset 핸들러에 입력상자 초기화 함수등록
//상품 등록시 useRef를 이용해 id 증가시키고 이름 입력상자에 포커스 지정
//상품목록 특정행에서 마우스 오른쪽 버튼 클릭시 해당상품 삭제
//----------------------------------------------------------------------
import React, { useRef, useState } from 'react'
import '../Style03.css'

const data = [
    { id: 1, name: '삼성 세탁기', price: 2500000 },
    { id: 2, name: '엘지 냉장고', price: 3500000 },
    { id: 3, name: '삼성 스타일러', price: 150000 },
]

const initForm = {
    name: '엘지 TV',
    price: 2000000
};

const RegisterPage = () => {

    // 상품목록 state
    const [products, setProducts] = useState(data);

    // 입력 폼 state
    const [formData, setFormData] = useState(initForm);

    // formData 객체 비구조화 할당
    const { name, price } = formData;

    // 다음 상품의 id
    const nextId = useRef(4);

    // 상품이름 input 참조
    const nameRef = useRef();

    // 입력상자 내용 변경
    const onChangeForm = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onClickRegister = (e) => {
        e.preventDefault();
        setProducts([...products,formData]);
    }

    // 상품 등록
    const onSubmit = (e) => {
        e.preventDefault();

        const product = {
            id: nextId.current,
            name: name,
            price: parseInt(price)
        };

        // 상품목록에 새로운 상품 추가
        setProducts([
            ...products,
            product
        ]);

        // id 증가
        nextId.current += 1;

        // 입력상자 초기화
        setFormData(initForm);

        // 상품이름 입력상자로 포커스
        nameRef.current.focus();
    };

    // 입력상자 초기화
    const onReset = (e) => {
        e.preventDefault();

        setFormData(initForm);
        nameRef.current.focus();
    };

    // 상품 삭제
    const onDelete = (e, id) => {
        e.preventDefault();

        setProducts(
            products.filter(p => p.id !== id)
        );
    };

    return (
        <div className='box'>
            <h1>상품등록</h1>

            <form
                onSubmit={onSubmit}
                onReset={onReset}
            >
                <input
                    ref={nameRef}
                    onChange={onChangeForm}
                    value={name}
                    placeholder='상품이름'
                    name='name'
                />

                <input
                    onChange={onChangeForm}
                    value={price}
                    placeholder='상품가격'
                    name='price'
                    type='number'
                    step={1000}
                />

                <div>
                    <button type='submit'>등록</button>
                    <button type='reset'>취소</button>
                </div>
            </form>

            <h1 style={{ marginTop:'30px' }}>상품목록</h1>

            <table>
                <tbody>
                {products.map(p =>
                    <tr
                        key={p.id}
                        onContextMenu={(e) => onDelete(e, p.id)}
                    >
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default RegisterPage