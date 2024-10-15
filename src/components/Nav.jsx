import arrow from '../../src/assets/svg/icon-arrow-down.svg'
import hanburger from '../../src/assets/svg/icon-menu.svg'
import './Nav.css'


function Nav() {
  return (
    <div className="navBar">

        <div className='snap'>

            <h1>snap</h1>

            <ul className="navList">
                <li>Features <img src={arrow} alt="" /></li>
                <li>Company <img src={arrow}></img></li>
                <li>Career </li>
                <li>About </li>
            </ul>

      </div>

      <div className="login">

        <button className="lobtn">Login</button>
        <button className="rebtn">Register</button>
      </div>
        <img src={hanburger} className='hanb' />
    </div>
  )
}

export default Nav
