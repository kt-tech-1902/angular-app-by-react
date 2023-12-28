import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <Link to="/">
            <header className="brand-name">
                <img
                    className="brand-logo"
                    src="../../assets/logo.svg"
                    alt="logo"
                    aria-hidden="true"
                />
            </header>
        </Link>
    );
};
