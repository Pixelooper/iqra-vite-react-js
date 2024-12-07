import { Link, useOutletContext, useParams } from "react-router-dom";
import { convertToBengaliDigits } from '../hooks/useBengaliDigit';
import { useEffect, useState } from "react";

const Surah = () => {
  const { id } = useParams();
  const [surahData, setSurahData] = useState(null);
  const { data } = useOutletContext();

  useEffect(() => {
      const surah = data.find(surah => surah.no == id);
      setSurahData(surah);
  }, [data, id]); 

  return (
      !data || !surahData ? 
      <div className="fixed inset-0 flex items-center justify-center bg-light-olive bg-opacity-70 z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-medium-green"></div>
      </div> :
      <div className="p-1 pt-24">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-primary-green mb-2">
          سورة {surahData?.name_ar}
          </h1>
          <h2 className="text-lg font-medium text-secondary-green mb-1">
            সূরা {surahData?.name_bn}
          </h2>
          <p className="text-sm text-gray-600">
            আয়াত সংখ্যা {convertToBengaliDigits(surahData?.totalAyat)}
          </p>
        </div>

        <div className="rounded-lg mb-4 p-2">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
               পারা {convertToBengaliDigits(surahData?.para)} / সূরা {convertToBengaliDigits(surahData?.no)}
            </h3>
            <div>
              <button>⭐</button>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-md font-semibold">
              {surahData?.place}
            </span>
            <span className="text-md font-semibold">রুকুঃ {convertToBengaliDigits(surahData?.ruku)}</span>
          </div>
          {surahData?.naming && 
          <div className="mt-2">
            <p className="text-sm text-black leading-6">
              <span className="font-semibold text-yellow-400">নামকরণ: </span> 
              {surahData?.naming}
            </p>
          </div>
          }
          {surahData?.shanenuzul && 
          <div className="mt-2">
            <p className="text-sm text-black leading-6">
              <span className="font-semibold text-yellow-400">শানে নুযূল: </span> 
              {surahData?.shanenuzul}
            </p>
          </div>
          }
          {surahData?.fazilat && 
          <div className="mt-2">
            <p className="text-sm text-black leading-6"> 
              <span className="font-semibold text-yellow-400">ফজিলত: </span>  
              {surahData?.fazilat}
            </p>
          </div>
          }
          {surahData?.quote && 
          <div className="mt-2">
            <p className="text-sm text-black leading-6"> 
              <span className="font-semibold text-yellow-400">লেখকের কথা: </span>  
              {surahData?.quote}
            </p>
          </div>
          }
        </div>

        <div className="mt-2 px-4 py-6 text-white bg-pattern-aotd bg-dark-green rounded-3xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </h3>
            <p className="text-sm text-gray-100 mb-4">
            পরম করুণাময় অসীম দয়ালু আল্লাহতায়ালার নামে
            </p>
          </div>

          <div className="mb-4">
            <div className="flex justify-between mb-4">
                <h3 className="font-semibold text-yellow-400 mb-2">
                  {convertToBengaliDigits(surahData?.ayat[0]?.no)}
                </h3>
                <div>
                    <Link to={`/tafsir/${surahData.no}/${surahData?.ayat[0]?.no}`}>
                        <button>🌐</button>
                    </Link>
                    <button>⚙️</button>
                </div>
            </div>
            <div className="border-b-2 border-yellow-400 pb-4">
                <p className="text-2xl mb-6 text-right">
                  {surahData?.ayat[0]?.ar}
                </p>
                <p className="text-sm mb-2 leading-6">
                {surahData?.ayat[0]?.bn}
                </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link to={`/ayat/${surahData?.no}`}>
              <button className="bg-yellow-500 text-dark-green px-6 py-3 rounded-lg font-semibold text-sm">
                সব আয়াত পড়ুন
              </button>
            </Link>
          </div>
        </div>

      </div>
  );
};

export default Surah;
