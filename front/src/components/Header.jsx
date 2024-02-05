import { Link } from "react-router-dom"

const Header = ({children}) => {
  return (
    <header className='flex items-center justify-between w-full h-16 max-w-[1400px] mx-auto flex-col md:flex-row pt-8 md:pt-0 gap-6 md:gap-0'>
        <Link to="/">
          <h3
            className='text-xl font-semibold'
          >BriefLy</h3>
        </Link>
        <nav className='flex gap-4 font-semibold'>
            {children}
        </nav>
    </header>
  )
}

export default Header