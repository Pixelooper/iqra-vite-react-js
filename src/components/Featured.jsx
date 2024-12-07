import { Link, useOutletContext } from 'react-router-dom';
import { convertToBengaliDigits } from '../hooks/useBengaliDigit';

const Featured = () => {
  const { data } = useOutletContext();

  return (
    <div className="mt-6 px-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Featured</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {data.map((surah) => (
          <Link to={`/surah/${surah.no}`} key={surah._id}>
            <div className="min-w-[250px] bg-dark-green text-white rounded-lg p-4 flex flex-col items-center">
              <p className="text-sm font-bold mb-20">{surah.name_bn}</p>
              <p className="text-xs py-1 px-3 rounded-full"> সূরা নং {convertToBengaliDigits(surah.no)} | আয়াত সংখ্যা {convertToBengaliDigits(surah.totalAyat)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;