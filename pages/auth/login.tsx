import AuthLayout from '../../layouts/auth_layout'
import Link from 'next/link'

const Login = () => {
    return (
        <AuthLayout>
            <div className="auth">
                <div className="row main">
                    <div className="col-md-4">
                        <div className="container">

                            <form className="myform">
                                <div className="px-3">
                                    <h3> JHELY  </h3>
                                </div>

                                <div>
                                    <input type="text" name="email" placeholder="hello@jhely.com" className="form-control" />
                                </div>

                                <div className="password">
                                    <span> show </span>
                                    <input type="password" name="password" placeholder="xxxx" className="form-control" />
                                </div>

                                <div className="pt-4 d-flex justify-content-center">
                                    <div className="btn-auth"> Login </div>
                                </div>

                                <div className="pt-4 d-flex justify-content-center">
                                    Need an Account? <Link href="/auth/register"> Register </Link>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-8 ads">
                        <div className="ads-content">
                            <h1> Welcome <br /> back </h1>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Login;