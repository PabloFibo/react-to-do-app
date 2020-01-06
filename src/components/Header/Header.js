import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { settings, pageContents } from '../../data/dataStore';
import Search from '../Search/Search';

class Header extends React.Component {

  render(){
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={settings.headerIcon} />
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>{pageContents.navtitle}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{settings.info.title}</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>{settings.faq.title}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
