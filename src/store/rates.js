const initialState = {
  amount: "12.00",
  currencyCode: 'GBP'
}

export function rateReducer(state = initialState, action) {
  switch(action.type) {
    case AMOUNT_CHANGED:
      return { ...state, amount: action.payload }
    case CURRENCY_CODE_CHANGED:
      return { ...state, currencyCode: action.payload }
    default:
      return state;
  }
}

// selectors
export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;

// Actions
export const AMOUNT_CHANGED = 'rates/amountChanged';
export const CURRENCY_CODE_CHANGED = 'rates/currencyCodeChanged';


// Action creators
export const changeAmount = (amount) => ({
  type: AMOUNT_CHANGED,
  payload: amount
})

export const changeCurrencyCode = (currencyCode) => ({
  type: CURRENCY_CODE_CHANGED,
  payload: currencyCode
})
