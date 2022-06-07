import { Reducer } from 'redux';

import { ICartState } from './type';

const INITIAL_STATE: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const { product } = action.payload;

      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            quantity: 1,
          },
        ],
      };
    }

    default: {
      return state;
    }
  }
};

export { cart };
