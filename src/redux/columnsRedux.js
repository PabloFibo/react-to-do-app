import shortid from 'shortid';

//selector
export const getColumnsForList = ({columns}, listId) =>
  columns.filter(column => column.listId == listId);

// action name creator
const reducerName = 'columns';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const createActionAddColumn = payload => ({
  payload: { ...payload, id: shortid.generate() },
  type: ADD_COLUMN });

//reducerName
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN:
      return [...state, action.payload];
    default:
      return state;
  }
}
