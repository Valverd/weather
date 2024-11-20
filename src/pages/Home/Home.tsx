import Carousel from "../../components/Carousel/Carousel";
import CityCard from "../../components/CityCard/CityCard";
import Hourly from "../../components/Hourly/Hourly";
import Layout from "../../components/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Home() {
    return (
        <>
            <Layout>
                <SearchBar />
                <Carousel />
                <Hourly />
            </Layout>
        </>
    )
}