import './nav.css'

const Navbar = () => {
    return (
         <div className='navbox'>
            <img src="../../src/assets/drug.jpg" alt="d" />

        
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact us</a></li>
        </ul>
        
        <div className='btc'>

        <button>Register</button>
        </div>
    </div> );
}

 
export default Navbar;