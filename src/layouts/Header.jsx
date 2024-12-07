
import brand from '../assets/iqra-brand.svg';
import avatar from '../assets/avatar.png';
import ham from '../assets/ham.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed flex items-center justify-between w-full py-4 px-6">
          <div className="flex items-center">
            <Link to="/">
              <img src={brand} alt="Logo" className="w-16" />
            </Link>
          </div>
    
          <div className="flex items-center space-x-4">
            <img src={avatar} alt="Logo" className="w-8" />
            <img src={ham} alt="Logo" className="w-8" />
          </div>
        </header>
    );
};

export default Header;