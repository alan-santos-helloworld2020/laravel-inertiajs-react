import { Head } from '@inertiajs/inertia-react';
import React,  {useRef} from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Navegador from '../components/Navegador';



const Login = (props) => {
    const frmLogin = useRef()
    const { data, setData, post, processing, errors } = useForm({
        name:"",
        email: "",
        password: "",
    })
    function logar(e) {
        e.preventDefault()
        alert(JSON.stringify(data))
        frmLogin.current.reset();

    }

    return (
        <div className="row">
            <Head>
                <title>{props.title}</title>
            </Head>
            <Navegador></Navegador>
            <div className="col-12 col-lg-6 mx-auto">
                <p className="text-center">Login</p>
                <form onSubmit={logar} ref={frmLogin}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            value={data.name}
                            className="form-control"
                            name="name"
                            id="name"
                            onChange={e => setData('name', e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            value={data.email}
                            className="form-control"
                            name="email"
                            id="email"
                            onChange={e => setData('email', e.target.value)}
                        />
                        {errors.email && <div>{errors.email}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            value={data.password}
                            className="form-control"
                            name="password"
                            id="password"
                            onChange={e => setData('password', e.target.value)}
                        />
                    </div>
                    <div className="mb-3 d-flex justify-content-end">
                        <button type="submit" className="btn btn-success d-flex">
                            <span className="me-3">LOGAR</span>
                            <i className="material-icons">send</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
