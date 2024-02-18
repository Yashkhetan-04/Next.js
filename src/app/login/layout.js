'use client'
import Link from "next/link"
import './login.css'
import { usePathname } from "next/navigation"
const Layout = ({ children }) => {
    const pathname = usePathname();
    return (
        <div>
            {
                pathname !== "/login/loginTeacher" ? 
                <ul className="login-menu">
                    <li><h3>Login Navbar</h3></li>
                    <li><Link href='/login'>Login Main</Link></li>
                    <li><Link href='/login/loginStudent'>Student Login</Link></li>
                    <li><Link href='/login/loginTeacher'>Teacher Login</Link></li>
                </ul> 
                : null
            }
            {children}
        </div>
    )
}
export default Layout