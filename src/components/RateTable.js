import { useSelector } from 'react-redux';
import { getName } from '../store/user';

export function RateTable({ currencyData, amount }) {
  const name = useSelector(getName);
  return (
    <>
      <table className="ExchangeRate-table">
        <tbody>
          {Object.entries(currencyData).map(([code, rate]) => {
            const exchangeAmount = amount * rate || 0.0;
            return (
              <tr key={code}>
                <td>{code}</td>
                <td>
                  {exchangeAmount.toLocaleString("en", {
                    style: "currency",
                    currency: code,
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1 className="ExchangeRate-header">Hi { name }</h1>
    </>
  );
}
