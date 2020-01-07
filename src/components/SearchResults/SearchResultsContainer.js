import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearch } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;

  return {
    cards: getCardsForSearch(state, id),
  };
};

export default connect(mapStateToProps)(SearchResults);
