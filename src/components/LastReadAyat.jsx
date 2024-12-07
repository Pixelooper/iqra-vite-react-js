import { Link, useOutletContext } from 'react-router-dom';
import { convertToBengaliDigits } from '../hooks/useBengaliDigit';

const LastReadAyat = () => {
  const { data } = useOutletContext();

    return (
        <div className="mt-6 px-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Last Read</h2>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {data.map((surah, index) => (
              <div
                key={index}
                className="min-w-[200px] bg-dark-green text-white rounded-lg p-4 flex flex-col items-start"
              >
                <p className="text-sm font-bold mb-1">{surah.name_bn}</p>
                <p className="text-xs text-gray-300 mb-3">আয়াত সংখ্যা {convertToBengaliDigits(surah.totalAyat)}</p>
                <div className="flex items-center justify-between w-full">
                  <Link to={`/surah/${surah.no}`}>
                    <button className="bg-green-600 text-xs py-1 px-3 rounded-full">
                      এখন পড়ুন
                    </button>
                  </Link>
                  <span className="text-xl font-semibold border px-1">{convertToBengaliDigits(surah.no)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
};

export default LastReadAyat;