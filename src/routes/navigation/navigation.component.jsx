import {Link, Outlet} from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link classname='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-link-container'>
          <Link classname='nav-link' to='/shop'>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation