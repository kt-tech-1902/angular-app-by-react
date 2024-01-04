/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { HousingLocation } from "../../utils/type";
import styles from "./HouseDetail.module.css";
import { BASE_URL } from "../../utils/utils";
import { useEffect, useState } from "react";
import { Header } from "../../organisms/header/Header";
import { ContactForm } from "../../organisms/contact-form/ContactForm";
import { HouseInfo } from "../../organisms/house-info/HouseInfo";

export const HouseDetail = () => {
    const [housingLocation, setHousingLocation] = useState<
        HousingLocation | undefined
    >();

    const { id } = useParams();

    useEffect(() => {
        getHousingLocationById().then(
            (housingLocation: HousingLocation | undefined) => {
                setHousingLocation(housingLocation);
            }
        );
    }, []);

    const getHousingLocationById = async (): Promise<
        HousingLocation | undefined
    > => {
        const data = await fetch(`${BASE_URL}/${id}`);
        return (await data.json()) ?? {};
    };

    return (
        <>
            <Header />
            {housingLocation !== undefined &&
                Object.keys(housingLocation).length > 0 && (
                    <article className={styles.main}>
                        <HouseInfo housingLocation={housingLocation} />
                        <ContactForm />
                    </article>
                )}
            {!housingLocation ||
                (Object.keys(housingLocation).length === 0 && (
                    <span>Not Found</span>
                ))}
        </>
    );
};
