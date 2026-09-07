//Fragment(프래그먼트)연습 .box>h3 글자색상변경
//------------------------------------------
const Student = ({student}) => {
    return (
        <div>
            <h3>학번:{student.id}</h3>
            <h3>이름:{student.name}</h3>
            <h3>학과:{student.dept}</h3>
            <br/>
        </div>
    )
}
export default Student