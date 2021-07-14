import AuthLayout from '../../layouts/auth_layout'
import Link from 'next/link'

const Register = () => {
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

                                <div>
                                    <input type="text" name="name" placeholder="Ifeanyi cornelius" className="form-control" />
                                </div>

                                <div className="password">
                                    <span> show </span>
                                    <input type="password" name="password" placeholder="xxxxx" className="form-control" />
                                </div>

                                <div className="pt-4 d-flex justify-content-center">
                                    <div className="btn-auth"> Register </div>
                                </div>

                                <div className="pt-4 d-flex justify-content-center">
                                    Have an Account? <Link href="/auth/login"> Login </Link>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-8 ads">
                        <div className="ads-content">
                            <h1> Discover <br /> amazing homes</h1>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Register;