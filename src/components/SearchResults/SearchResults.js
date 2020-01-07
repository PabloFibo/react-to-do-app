import React from 'react';
import styles from '../Column/Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {Link} from 'react-router-dom';

class SearchResults extends React.Component{

  static propTypes = {
    cards: PropTypes.array,
    columns: PropTypes.array,
  }

  render(){
    const { cards } = this.props;
    console.log('cards', cards);

    return (
      <section className={styles.component}>
        <div>
          {cards.map(cardData => (
            <div key={cardData.id}>
              <Link to={`/list/${cardData.listid}`}>

                <Card key={cardData.id} {...cardData} />
              </Link>
            </div>
          ))}
        </div>
        {/*<div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>*/}
      </section>
    );
  }
}

export default SearchResults;
