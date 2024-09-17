import './menu.css'
import iconPaimon from '../../assets/icon-paimon.png'


function Menu() {

    return (
      <div className="menu glass-effect">
        <img src={iconPaimon} alt="paimon" />
            <div className="container">
                <div className="menu-content">
                    <nav>
                        <ul class="link">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">Characters</a></li>
                            <li><a href="#services">Regions</a></li>
                            <li><a href="#portfolio">Map</a></li>
                            <li><a href="#contact">More</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
      </div>
    )
  }
  
  export default Menu;
  