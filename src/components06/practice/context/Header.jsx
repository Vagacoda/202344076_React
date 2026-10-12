import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";
import {UserContext} from "../../done/context/UserContext";

const Header = () => {
    const {dark} = useContext(ThemeContext);
    const {user, setUser} = useContext(UserContext);
    const onLogin = () => {
        alert('LoginSuccess');
        setUser('hong');
    }
    const onLogout = () => {
        if(window.confirm('Do you want to Logout?')){
            setUser('');
        }
    }
    return (
        <div className={`header ${dark ? 'black' : 'gray'}`}>
            <h1>Welcom 사용자{user || '사용자'}</h1>
            {user ? <button onClick={onLogout}>LogOut</button>:<button onClick={onLogin}>LogIn</button>}
        </div>
    )
}
export default Header