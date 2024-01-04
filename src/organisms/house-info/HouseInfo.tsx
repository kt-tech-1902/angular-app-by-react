import styles from "./HouseInfo.module.css";
import { HousingLocation } from "../../utils/type";

type Props = {
    housingLocation: HousingLocation;
};

export const HouseInfo = (props: Props) => {
    const { name, city, state, photo, availableUnits, wifi, laundry } =
        props.housingLocation;

    return (
        <>
            <img
                className={styles.photo}
                src={photo}
                alt={"Exterior photo of" + name}
            />
            <section>
                <h2 className={styles.heading}>{name}</h2>
                <p className={styles.location}>
                    {city}, {state}
                </p>
            </section>
            <section className={styles.features}>
                <h2 className={styles.sectionHeading}>
                    About this housing location
                </h2>
                <ul className={styles.aboutLocation}>
                    <li>Units available: {availableUnits}</li>
                    <li>Does this location have wifi: {wifi}</li>
                    <li>Does this location have laundry: {laundry}</li>
                </ul>
            </section>
        </>
    );
};
