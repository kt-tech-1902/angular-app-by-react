import { useEffect, useState } from "react";

export interface HousingLocation {
    id: number;
    name: string;
    city: string;
    state: string;
    photo: string;
    availableUnits: number;
    wifi: boolean;
    laundry: boolean;
}

const BASE_URL = "http://localhost:3000/locations";

export const HouseList = () => {
    const getAllHousingLocations = async () => {
        const data = await fetch(BASE_URL);
        return (await data.json()) ?? [];
    };

    const getHousingLocationById = async (
        id: number
    ): Promise<HousingLocation | undefined> => {
        const data = await fetch(`${BASE_URL}/${id}`);
        return (await data.json()) ?? {};
    };

    console.log(getAllHousingLocations());
    const [housingLocation, setHousingLocation] = useState<HousingLocation>();

    useEffect(() => {
        setHousingLocation(await getAllHousingLocations());
    }, []);

    return (
        <>
            <Head
                title={"【MCU】公開予定"}
                description="【MCU】公開予定の作品を紹介"
            />
            <main className={styles.main}>
                {videoInfo ? (
                    <MediaCard videoInfo={videoInfo} />
                ) : (
                    <Typography>Loading...</Typography>
                )}
            </main>
        </>
    );
};
