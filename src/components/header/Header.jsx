import "./index.scss";
import logo from "../../../images/pokemon_logo.svg";

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header__img">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="header__inputs">
                        <select id="select">
                            <option disabled defaultValue>
                                Gross
                            </option>
                        </select>
                        <input type="search" placeholder="Search" id="search" />
                        <select id="sort">
                            <option disabled defaultValue>
                                Sort
                            </option>
                            <option>Aa-Zz</option>
                            <option>Zz-Aa</option>
                        </select>
                        <button className="btn">Button</button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
