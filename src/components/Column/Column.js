import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component{
  static propTypes = {
    animals: PropTypes.string,
    plants: PropTypes.string,
    minerals: PropTypes.string,
  }

  render(){
    const {animals, plants, minerals} = this.props;
    
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {animals}
          {plants}
          {minerals}
        </h3>
      </section>
    )
  }
}

export default Column;
