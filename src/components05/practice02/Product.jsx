const Product = ({product, type}) => {
    return (
        <tr>
            <td width='50px'>{product.id}</td>
            <td width='270px'>{product.name}</td>
            {type === 'cart' &&
                <td>
                    <button>삭제</button>
                    <button>주문</button>
                </td>}
            {type === 'order' &&
                <td>
                    <button>취소</button>
                </td>}
        </tr>
    )
}
export default Product