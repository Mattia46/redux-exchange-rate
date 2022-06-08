import { useDispatch } from 'react-redux';
import { changeAmount } from '../store/rates';

export function AmountField({ amount }) {
  const dispatch = useDispatch();

  function onChange(e) {
    // without Action creators - import AMOUNT_CHANGED action const first
    //dispatch({ type: AMOUNT_CHANGED, payload: e.target.value })
    dispatch(changeAmount(e.target.value))
  }

  return (
    <form className="ExchangeRate-form">
      <input
        aria-label="Amount in base currency"
        type="text"
        value={amount}
        onChange={onChange}
      />
    </form>
  );
}
