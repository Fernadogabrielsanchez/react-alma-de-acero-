
import logo from '../../imagenes/logo.png'
import CartWidget from './CartWidget'


const NavBar = () => {
    return (
        <>
  <nav>
    <div class="nav-wrapper">
      <a href="" class="brand-logo"><img src={logo} alt="logo" width={100} height={64}/>alma de acero</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">economico</a></li>
        <li><a href="badges.html">medio</a></li>
        <li><a href="collapsible.html">premium</a></li>
        <li><CartWidget/></li>
      </ul>
      
    </div>
  </nav>
        
            
        </>
    )

    
}
export default NavBar