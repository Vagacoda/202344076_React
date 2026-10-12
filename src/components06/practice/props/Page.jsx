import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Page = ({dark,setDark}) => {
    return (
        <div>
            <Header/>
            <Content/>
            <Footer dark={dark} setDark={setDark}/>
        </div>
    )
}
export default Page