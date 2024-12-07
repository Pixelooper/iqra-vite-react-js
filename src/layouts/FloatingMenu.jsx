import read from '../assets/read-icon.svg';
import search from '../assets/search.svg';
import home from '../assets/home.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const FloatingMenu = () => {
  const navigate = useNavigate();
  const savedAyat = JSON.parse(localStorage.getItem('continue'));
  const [reading, setReading] = useState(savedAyat ? 'পড়া চালিয়ে যান' : 'ইকরা');

  const handleContinueReading = () => {
      if (savedAyat) {
        navigate(`/ayat/${savedAyat.surahId}`);
      }
  };

  useEffect(() => {
    if (savedAyat) {
      setReading('পড়া চালিয়ে যান')
    }
  }, [savedAyat]);

    return (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-[92%] bg-medium-green shadow-lg rounded-lg px-4 py-2">
        <Link to="/">
          <button className="flex flex-col items-center text-gray-600">
            <img src={home} alt="home" className="h-8 w-auto" />
          </button>
        </Link>
  
        <button className="text-white rounded-full px-4 py-2 flex flex-col items-center" onClick={handleContinueReading}>
          <img src={read} alt="Logo" className="h-10 w-auto fixed bottom-8" />
          <span className="text-xs relative top-1">{reading}</span>
        </button>
  
        <Link to="/search">
          <button className="flex flex-col items-center text-gray-600">
            <img src={search} alt="search" className="h-8 w-auto" />
          </button>
        </Link>
      </div>
    );
};

export default FloatingMenu;