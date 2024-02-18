import Link from "next/link"

const Login = () => {
    return(
        <div>
            <h1 className="heading">This is Login Page</h1>
            <Link href='/'>Go to Home Page.</Link>
            <br />
            <br />
            <Link href='/login/loginStudent'>Login as Student.</Link>
            <br />
            <br />
            <Link href='/login/loginTeacher'>Login as Teacher.</Link>
        </div>
    )
}
export default Login