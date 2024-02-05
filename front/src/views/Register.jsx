import RegisterForm from "../components/RegisterForm"
import { Link } from "react-router-dom"

import { motion } from 'framer-motion'

const Register = () => {

  return (
    <motion.div
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{delay:0.175}}
    >
        <div className='mt-32 mb-8 text-center'>
            <h1 className='text-3xl md:text-6xl mb-2 md:mb-5'>Registrarse en Briefly</h1>
            <h2 className='text-xl md:text-2xl mb-6'>podrás almacenar, borrar y editar tus URL</h2>
        </div>
        <div className="w-[350px] mx-auto flex flex-col gap-4 text-end">
          <RegisterForm />
          <Link to="/login" className="text-sm">Ya tienes cuenta? Iniciar sesión</Link>
        </div>
    </motion.div>
  )
}

export default Register