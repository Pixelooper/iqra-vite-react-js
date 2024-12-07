import { Link, useOutletContext, useParams } from "react-router-dom";
import { convertToBengaliDigits } from '../hooks/useBengaliDigit';
import { useEffect, useState } from "react";

const Tasfir = () => {
    const { id, aid } = useParams();
    const [surahData, setSurahData] = useState(null);
    const [ayatData, setAyatData] = useState(null);
    const { data } = useOutletContext();

    useEffect(() => {
        const surah = data.find(surah => surah.no == id);
        const ayat = surah?.ayat.find(ayat => ayat.no == aid);
        setSurahData(surah);
        setAyatData(ayat)
    }, [data, id, aid]);

    return (
        !data || !surahData || !ayatData ? 
        <div className="fixed inset-0 flex items-center justify-center bg-light-olive bg-opacity-70 z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-medium-green"></div>
        </div> :
        <div className="p-1 pt-24">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-primary-green mb-2">
                سورة {surahData.name_ar}
                </h1>
                <h2 className="text-lg font-medium text-secondary-green mb-1">
                    সূরা {surahData.name_bn}
                </h2>
                <p className="text-sm text-gray-600">
                    তাফসীর ইবনে কাসীর
                </p>
            </div>

            <div className="p-4 py-6 text-white bg-pattern-aotd bg-dark-green rounded-3xl">
                <div className="mb-4">
                    <div className="flex justify-between mb-4">
                        <h3 className="font-semibold text-yellow-400 mb-2">
                            {convertToBengaliDigits(ayatData.no)}
                        </h3>
                        <div>
                            <button>⭐</button>
                        </div>
                    </div>
                    <div className="border-b-2 border-yellow-400 pb-4">
                        <p className="text-lg mb-6 text-right">
                            {ayatData.ar}
                        </p>
                        <p className="text-sm mb-6">
                            {ayatData.bn}
                        </p>
                        
                        <p className="text-sm leading-6"> 
                            <span className="font-semibold text-yellow-400">তাফসির: </span>  
                            {ayatData.tafsir}
                        </p>
                    </div>
                </div>

                <div className="text-center pt-2">
                    <div className="flex justify-between">
                        <Link to={`/tafsir/${surahData.no}/${ayatData.no - 1}`}>
                            <button
                                className={`bg-yellow-500 text-dark-green px-6 py-3 rounded-lg font-semibold text-xs ${
                                    ayatData.no === 1 ? "opacity-40 cursor-not-allowed" : ""
                                }`}
                                disabled={ayatData.no === 1}
                            >
                                পূর্ববর্তী
                            </button>
                        </Link>

                        <Link to={`/tafsir/${surahData.no}/${ayatData.no + 1}`}>
                            <button
                                className={`bg-yellow-500 text-dark-green px-6 py-3 rounded-lg font-semibold text-xs ${
                                    ayatData.no === surahData.ayat.length ? "opacity-40 cursor-not-allowed" : ""
                                }`}
                                disabled={ayatData.no === surahData.ayat.length}
                            >
                                পরবর্তী
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Tasfir;
