import { MouseEventHandler } from "react";
import styles from "./SearchArea.module.css";

type Props = {
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    searchButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export const SearchArea = (props: Props) => {
    return (
        <section className={styles.searchAreaContainer}>
            <form>
                <input
                    type="text"
                    className={styles.searchText}
                    placeholder="Filter by city"
                    value={props.searchText}
                    onChange={(event) =>
                        props.setSearchText(event.target.value)
                    }
                />
                <button
                    className={styles.searchButton}
                    type="button"
                    onClick={props.searchButtonClick}
                >
                    Search
                </button>
            </form>
        </section>
    );
};
