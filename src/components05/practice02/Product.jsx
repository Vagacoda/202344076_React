const Product = ({product}) => {
    return (
        <tr>
            <td width='50px'>{product.id}</td>
            <td width='270px'>{product.name}</td>
        </tr>
    )
}
export default Product