import { useOutletContext } from 'react-router-dom';
import Settings from '../components/Settings';
import RandomAyat from '../components/RandomAyat';
import Featured from '../components/Featured';
import LastReadAyat from '../components/LastReadAyat';
import Blogs from '../components/Blogs';
import Mood from '../components/Mood';

const Home = () => {
    const { loading } = useOutletContext();

    return (
        !loading ? 
        <div className="fixed inset-0 flex items-center justify-center bg-light-olive bg-opacity-70 z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-medium-green"></div>
        </div> :
        <>
            <RandomAyat/>
            <Settings/>
            <LastReadAyat/>
            <Featured/>
            <Blogs/>
            <Mood/>
        </>
    );
};

// import PropTypes from 'prop-types';
// Home.propTypes = {
//     data: PropTypes.array.isRequired,
// };

export default Home;