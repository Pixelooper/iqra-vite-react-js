import { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { convertToBengaliDigits } from '../hooks/useBengaliDigit';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data } = useOutletContext();

  const filteredSurahs = data.filter((surah) =>
    surah.name_bn.includes(searchQuery) || surah.name_en.includes(searchQuery) || surah.name_ar.includes(searchQuery)
  );

  return (
    !data ? 
    <div className="fixed inset-0 flex items-center justify-center bg-light-olive bg-opacity-70 z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-medium-green"></div>
    </div> :
    <div className="p-4 pb-32 min-h-screen">
        <h1 className="text-center text-xl font-semibold mt-24 mb-4">সূরা তালিকা</h1>
        <div className="mb-6">
            <input
                type="text"
                placeholder="এখানে লিখুন"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border rounded-md text-gray-700"
            />
        </div>

        {filteredSurahs.map((surah) => (
            <div key={surah.no} className="bg-dark-green text-white rounded-lg p-4 flex flex-col items-start mb-2">
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
  );
};

export default Search;
