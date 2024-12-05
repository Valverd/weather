import Carousel from "../../components/Carousel/Carousel";
import CarouselHourly from "../../components/CarouselHourly/CarouselHourly";
import Layout from "../../components/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Home() {
    return (
        <>
            <Layout>
                <SearchBar />
                <Carousel />
                <CarouselHourly />
            </Layout>
        </>
    )
}