import Link from "next/link"
import './login.css'
const Layout = ({children}) => {
    return(
        <div >
            <ul className="login-menu">
                <li><h3>Login Navbar</h3></li>
                <li><Link href='/login'>Login Main</Link></li>
                <li><Link href='/login/loginStudent'>Student Login</Link></li>
                <li><Link href='/login/loginTeacher'>Teacher Login</Link></li>
            </ul>
            {children}
        </div>
    )
}

export default Layout