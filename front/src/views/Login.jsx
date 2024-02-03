import LoginForm from "../components/LoginForm"

import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div>
        <div className='mt-32 mb-8'>
            <h1 className='text-center text-3xl md:text-6xl mb-2 md:mb-5'>Iniciar sesión en BriefLy</h1>
        </div>
        <div className="w-[350px] mx-auto flex flex-col gap-4 text-end">
            <LoginForm />
            <Link to="/register" className="text-sm">No tienes cuenta? Regístrate.</Link>
        </div>
    </div>
  )
}

export default Login