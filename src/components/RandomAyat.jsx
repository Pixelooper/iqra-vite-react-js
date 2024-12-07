import { Link, useOutletContext } from "react-router-dom";
import { convertToBengaliDigits } from '../hooks/useBengaliDigit';

const RandomAyat = () => {
  const { data } = useOutletContext();
  const {no, ayat, name_bn, totalAyat} = data[0];

    return (
        <div className="bg-pattern-aotd bg-dark-green rounded-b-3xl p-6 text-white pt-32">
          <h1 className="text-2xl font-semibold mb-8 text-right">{ayat[1].ar}</h1>
          <p className="text-sm mb-1 text-left">{ayat[1].bn}</p>
          <div className="flex justify-between">
            <p className="text-xs text-gray-300 text-left">- {name_bn} / {convertToBengaliDigits(ayat[1].no)} / {convertToBengaliDigits(totalAyat)}</p>
            <Link to={`/ayat/${no}`}><button>👉</button></Link>
          </div>
        </div>
    );
};

export default RandomAyat;