import { Link, useOutletContext, useParams } from "react-router-dom";
import { convertToBengaliDigits } from "../hooks/useBengaliDigit";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Ayat = () => {
    const { data } = useOutletContext();
    const { id } = useParams();
    const [surahData, setSurahData] = useState(null);
    const [highlightedAyat, setHighlightedAyat] = useState(null);
    const [expandedAyat, setExpandedAyat] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const surah = data.find((surah) => surah.no == id);
        setSurahData(surah);
    }, [data, id]);

    useEffect(() => {
        if (data && surahData) {
            const savedAyat = JSON.parse(localStorage.getItem("continue"));
            if (savedAyat && savedAyat.surahId == surahData.no) {
                const element = document.getElementById(savedAyat.ayatNo);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "center" });
                    setHighlightedAyat(savedAyat.ayatNo);
                    setTimeout(() => setHighlightedAyat(null), 1500);
                }
            }
        }
    }, [data, surahData]);

    const handleSaveForLater = (sId, aNo) => {
        localStorage.setItem("continue", JSON.stringify({ surahId: sId, ayatNo: aNo }));
        toast.success("পরে পড়ার জন্য সংরক্ষিত");
    };

    const toggleExpand = (ayatNo) => {
        setExpandedAyat(expandedAyat === ayatNo ? null : ayatNo);
    };

    const filteredAyats = !data || !surahData ? [] : surahData.ayat.filter((ayat) =>
        ayat.bn.includes(searchQuery) || ayat.ar.includes(searchQuery)
    );

    return !data || !surahData ? (
        <div className="fixed inset-0 flex items-center justify-center bg-light-olive bg-opacity-70 z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-medium-green"></div>
        </div>
    ) : (
        <div className="p-1 pt-24">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-primary-green mb-2">
                    سورة {surahData.name_ar}
                </h1>
                <h2 className="text-lg font-medium text-secondary-green mb-1">
                    সূরা {surahData.name_bn}
                </h2>
                <p className="text-sm text-gray-600">
                    আয়াত সংখ্যা {convertToBengaliDigits(surahData.totalAyat)}
                </p>
                <div className="mb-6 mt-4 px-2">
                    <input
                        type="text"
                        placeholder="এখানে লিখুন"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md text-gray-700"
                    />
                </div>
            </div>

            <div className="p-4 py-6 text-white bg-pattern-aotd bg-dark-green rounded-3xl">
                <div className="text-center">
                    <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                    </h3>
                    <p className="text-sm text-gray-100 mb-4">
                        পরম করুণাময় অসীম দয়ালু আল্লাহতায়ালার নামে
                    </p>
                </div>

                {filteredAyats.map((ayat, index) => (
                    <section key={index} className="mb-4" id={ayat.no}>
                        <div className="flex justify-between mb-4">
                            <h3
                                className={`mb-2 ${
                                    highlightedAyat === ayat.no
                                        ? "text-red-700 font-bold"
                                        : "font-semibold text-yellow-400"
                                }`}
                            >
                                {convertToBengaliDigits(ayat.no)}
                            </h3>
                            <div>
                                <Link to={`/tafsir/${surahData.no}/${ayat.no}`}>
                                    <button>🌐</button>
                                </Link>
                                <button onClick={() => handleSaveForLater(surahData.no, ayat.no)}>
                                    🔖
                                </button>
                                <button>⭐</button>
                                <button onClick={() => toggleExpand(ayat.no)}>{expandedAyat === ayat.no ? '🔼' : '🔽'}</button>
                            </div>
                        </div>
                        <div className="border-b-2 border-yellow-400 pb-4">
                            <p className="text-2xl mb-6 text-right">{ayat.ar}</p>
                            <p className="text-sm mb-2 leading-6">{ayat.bn}</p>

                            {
                                expandedAyat === ayat.no && (
                                    <>
                                        {
                                            ayat.shanenuzul &&
                                            <p className="text-sm text-gray-300 mt-3">
                                                <span className="font-semibold text-yellow-400">শানে নুযূল: </span>  
                                                {ayat.shanenuzul}
                                            </p>
                                        }
                                        {
                                            ayat.tika.length > 0 &&
                                            ayat.tika.map((text, index) => (
                                                <p key={index}  className="text-sm text-gray-300 mt-3">
                                                    <span className="font-semibold text-yellow-400">টিকা ({index+1}): </span>  
                                                    {text}
                                                </p>
                                            ))
                                        }
                                        {
                                            ayat.quote &&
                                            <p className="text-sm text-gray-300 mt-3">
                                                <span className="font-semibold text-yellow-400">লেখকের কথা: </span>  
                                                {ayat.quote}
                                            </p>
                                        }
                                    </>
                                )
                            }
                        </div>
                    </section>
                ))}
            </div>
            <Toaster
                position="bottom-center"
                containerStyle={{
                    top: 20,
                    left: 20,
                    bottom: 120,
                    right: 20,
                }}
            />
        </div>
    );
};

export default Ayat;
