import {  } from "./Menu.css";

function Menu() {
    return (
        <>
            <div className="menu">
                <span className="close"><i class="fa-solid fa-xmark"></i></span>
                <ul>
                    <li>Publications</li>
                    <li>Messages</li>
                    <li>Amis</li>
                </ul>
            </div>
        </>
    )
}

export default Menu;