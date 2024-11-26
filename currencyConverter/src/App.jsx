import { useState } from 'react';
import InputBox from './components/InputBox'; // Correct import for default exportimport useCurrencyInfo from './hooks/useCurrencyInfo';
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetch the currency info for the "from" currency
  const CurrencyInfo = useCurrencyInfo(from);
  const Options = Object.keys(CurrencyInfo);

  // Function to swap currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount); // Reset the converted amount
    setAmount(convertedAmount); // Update the amount after swap
  };

  // Convert the amount from "from" currency to "to" currency
  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1263324/pexels-photo-1263324.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={Options} // Fixed typo
                onCurrencyChange={(currency) => setFrom(currency)} // Fix: change the currency
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={Options} // Fixed typo
                onCurrencyChange={(currency) => setTo(currency)} // Fix: change the currency
                selectCurrency={to} // Fixed: should be "to", not "from"
                amountDisable={true} // Disable the amount field for the second box
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
