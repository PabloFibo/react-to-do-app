import shortid from 'shortid';

//selector
export const getCardsForColumn = ({ cards }, columnId) =>
  cards.filter(card => card.columnId == columnId
  );
export const getCardsForSearch = ({ cards }, searchString) =>
  cards.filter(card => new RegExp(searchString, 'i').test(card.title
  ));
export const getListForSearch = ({ lists } , id) =>
  lists.map(list => list.id == id
  );

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARDS = createActionName('ADD_CARDS');

// action creators
export const createActionAddCard = payload => ({
  payload: { ...payload, id: shortid.generate() },
  type: ADD_CARDS });

//reducerName
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARDS:
      return [...state, action.payload];
    default:
      return state;
  }
}
