import Hero from "./Hero.jsx";
import TopRatedProducts from "./TopRatedProducts.jsx";


const HomePage = () => {
    return (
        <div className="px-16 pt-5">
            <Hero/>
            <TopRatedProducts/>
        </div>
    );
};

export default HomePage;