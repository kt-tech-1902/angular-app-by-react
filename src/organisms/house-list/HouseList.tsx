import { HousingLocation } from "../../utils/type";
import { HouseCard } from "../house-card/HouseCard";
import styles from "./HouseList.module.css";

type Props = {
    housingLocationList: HousingLocation[];
};

export const HouseList = (props: Props) => {
    return (
        <section className={styles.houseListContainer}>
            {props.housingLocationList &&
                props.housingLocationList.length > 0 && (
                    <>
                        {props.housingLocationList.map((housingLocation) => {
                            return (
                                <HouseCard
                                    key={housingLocation.id}
                                    housingLocation={housingLocation}
                                />
                            );
                        })}
                    </>
                )}
        </section>
    );
};
