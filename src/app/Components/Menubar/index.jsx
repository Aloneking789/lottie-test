'use client'
import Link from 'next/link'
import './Menubar.css'
const Logo = () => {
    return(
        <div className='logo-text'>Wottl Marketing</div>
    )
}

const menuItems = [
    {
        label: 'Services',
        link: '/services'
    },
    {
        label: 'About us',
        link: '/aboutUs'
    },
    {
        label: 'For Businesses',
        link: '/businesses'
    },
    {
        label: 'For Creators',
        link: '/creators'
    },
]

const Menubar = ({showLogo}) => {
    const handleBookACall = () =>{
        window.alert("Book a call")
    }
  return (
    <div className='menubar-container'>
        <div className='menubar-section'>
            <Logo/>
            <div className='menu-section'>
                {
                    menuItems.map((item)=>(
                        <Link href={item.link} key={item.label}>
                            <div className='menu-'>
                                {item.label}
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className='book-a-call-button' onClick = {handleBookACall}>
                Book a Call
            </div>
        </div>
    </div>
  )
}

export default Menubar;
