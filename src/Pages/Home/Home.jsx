import AllFood from "../AllFood/AllFood";
import Banner from "./Banner";
import Introduction from "./Introduction/Introduction";
import SpecialSection from './SpecialSEction/SpecialSection';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Introduction></Introduction>
            <SpecialSection></SpecialSection>
            <AllFood></AllFood>
        </div>
    );
};

export default Home;