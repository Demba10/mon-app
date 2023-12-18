import {} from "./Header.css";

function Header() {
    return (
        <div className='navfixed'>
            <div className='burger'>
                <i class="fa-solid fa-bars"></i>
            </div>
            <div className='navbar'>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/experiences">Expériences</a></li>
                    <li>Partenaires</li>
                </ul>
            </div>
            <div className='profil'>
                {/* <h6>Andre Demba Ndione</h6> */}
                <i class="fa-solid fa-user"></i>
            </div>
        </div>
    )
}

export default Header;