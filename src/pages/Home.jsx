import SideNav2 from "./components/SideNav2";
import Cards from "./components/Cards";
import Timeline from "./components/Timeline";
import Breadcrumbs from "./components/Breadcrumbs";

const Home = () => {
    return (
        <>
            <div className="flex m-8 gap-4">
                <Breadcrumbs />
            </div>

            <div className="flex flex-col">
                <div className="flex justify-center m-4 gap-4">
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
                <div className="flex justify-center m-8 gap-4">
                    <Timeline />
                </div>
            </div>
        </>
    );
};

export default Home;