import CityCard from "../../components/CityCard/CityCard";
import Layout from "../../components/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Home() {
    return (
        <>
            <Layout>
                <SearchBar />
                <CityCard />
            </Layout>
        </>
    )
}