import React from 'react';
import styles from '../Column/Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';

class SearchResults extends React.Component{

  static propTypes = {
    cards: PropTypes.array,
  }

  render(){
    const { cards } = this.props;
  
    return (
      <Container>
        <section className={styles.component}>
          <div>
            {cards.map(cardData => (
              <div key={cardData.id}>
                <Link to={`/list/${cardData.listId}`}  >
                  <Card key={cardData.id} {...cardData}/>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;
