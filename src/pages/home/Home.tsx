import { useState, useEffect } from "react";
import { Header } from "../../organisms/header/Header";
import { HouseList } from "../../organisms/house-list/HouseList";
import { SearchArea } from "../../organisms/search-area/SearchArea";
import { HousingLocation } from "../../utils/type";
import styles from "./Home.module.css";
import { BASE_URL } from "../../utils/utils";

const Home = () => {
    let [filteredLocationList, setFilteredLocationList] =
        useState<HousingLocation[]>();
    let [housingLocationList, setHousingLocationList] =
        useState<HousingLocation[]>();
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getAllHousingLocations().then(
            (housingLocationList: HousingLocation[]) => {
                setHousingLocationList(housingLocationList);
                setFilteredLocationList(housingLocationList);
            }
        );
    }, []);

    const getAllHousingLocations = async () => {
        const data = await fetch(BASE_URL);
        console.log("API");
        return (await data.json()) ?? [];
    };

    const searchButtonClick = () => {
        filterResults();
    };

    const filterResults = () => {
        let filteredList;
        if (!searchText) {
            filteredList = housingLocationList;
        }

        filteredList = housingLocationList!.filter((housingLocation) =>
            housingLocation?.city
                .toLowerCase()
                .includes(searchText.toLowerCase())
        );

        setFilteredLocationList(filteredList);
        console.log(filteredLocationList);
    };
    return (
        <>
            <Header />
            <section className={styles.main}>
                <SearchArea
                    searchText={searchText}
                    setSearchText={setSearchText}
                    searchButtonClick={searchButtonClick}
                />
                <HouseList housingLocationList={filteredLocationList!} />
            </section>
        </>
    );
};
export default Home;
