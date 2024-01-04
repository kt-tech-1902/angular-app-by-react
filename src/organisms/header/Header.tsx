import { Link } from "react-router-dom";
import logoSvg from "../../assets/logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <Link to="/">
            <header className={styles.header}>
                <img
                    className="brand-logo"
                    src={logoSvg}
                    alt="logo"
                    aria-hidden="true"
                />
            </header>
        </Link>
    );
};
