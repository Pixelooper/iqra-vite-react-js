import PropTypes from 'prop-types';
import brand from '../assets/iqra-brand.svg';

const Splash = ({loading, sessionStart}) => {
  return (
      <div className="min-h-svh flex flex-col items-center justify-center text-center px-4">
        <div className="flex flex-col items-center">
          <div className="rounded-lg p-4 pb-20">
            <img src={brand} alt="Dome Icon" className="w-100 h-100 mx-auto" />
          </div>
        </div>

        {
          !loading ? 
          <div className="space-y-4 flex flex-col items-center p-4">
            <div className="h-6 w-40 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-6 w-64 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-8 w-40 bg-gray-300 rounded-full animate-pulse"></div>
          </div> :
          <>
            <p className="text-lg font-semibold text-gray-700 mb-2">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
            <p className="text-sm text-gray-500 mb-8">পরম করুণাময় অসীম দয়ালু আল্লাহতায়ালার নামে</p>
            <button className="bg-green-700 text-white font-medium py-2 px-14 rounded-full hover:bg-green-800 focus:outline-none" onClick={sessionStart}>
                শুরু করছি
            </button>
          </>
        }
      </div>
  );
};

Splash.propTypes = {
  sessionStart: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Splash;