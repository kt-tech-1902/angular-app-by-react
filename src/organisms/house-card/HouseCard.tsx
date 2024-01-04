import { HousingLocation } from "../../utils/type";
import styles from "./HouseCard.module.css";

type Props = {
    housingLocation: HousingLocation;
};

export const HouseCard = (props: Props) => {
    const { id, name, city, state, photo } = props.housingLocation;
    return (
        <section className={styles.houseDetailContainer}>
            <img
                className={styles.photo}
                src={photo}
                alt={"Exterior photo of " + { name }}
            />
            <h2 className={styles.heading}>{name}</h2>
            <p className={styles.location}>
                {city}, {state}
            </p>
            <a href={"/details/" + id}>Learn More</a>
        </section>
    );
};
