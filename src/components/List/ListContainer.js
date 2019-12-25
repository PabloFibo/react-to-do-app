import { connect } from 'react-redux';
import List from './List';

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

const getColumnsForList = ({columns}, listId) =>
  columns.filter(column => column.listId == listId);

export default connect(mapStateToProps)(List);
