import { useState, type FormEvent } from "react";

import BaseSelector from "./components/BaseSelector";
import NumberInput from "./components/NumberInput";

import { convertNumber } from "./utils/convertNumber";
import { validateNumber } from "./utils/validateNumber";

function App() {
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(2);

  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const [error, setError] = useState("");

  const [conversionCount, setConversionCount] = useState(0);

  function handleConvert(event: FormEvent) {
    event.preventDefault();

    const validationError = validateNumber(inputValue, fromBase);

    if (validationError) {
      setError(validationError);
      setResult("");
      return;
    }

    setError("");

    const convertedValue = convertNumber(inputValue, fromBase, toBase);

    setResult(convertedValue);
    setConversionCount((count) => count + 1);
  }

  function handleSwapBases() {
    setFromBase(toBase);
    setToBase(fromBase);

    setInputValue(result);
    setResult(inputValue);

    setError("");
  }

  return (
    <main className="app">
      {/* Background */}
      <div className="background-grid" />

      <div className="glow glow-green" />
      <div className="glow glow-purple" />

      {/* Floating digital particles */}
      <div className="digital-particle particle-one">0101</div>

      <div className="digital-particle particle-two">1010</div>

      <div className="digital-particle particle-three">0110</div>

      <div className="floating-symbol symbol-one">✦</div>

      <div className="floating-symbol symbol-two">✧</div>

      <div className="floating-symbol symbol-three">◇</div>

      {/* Main converter */}
      <section className="converter">
        <div className="scan-line" />

        <div className="card-corner corner-top-left" />
        <div className="card-corner corner-top-right" />
        <div className="card-corner corner-bottom-left" />
        <div className="card-corner corner-bottom-right" />

        <header className="converter-header">
          <div className="system-status">
            <span className="status-dot" />
            SYSTEM ONLINE
          </div>

          <div className="logo-orb">
            <div className="logo-orb-core">✦</div>
          </div>

          <h1>
            NUMBER BASE
            <span>CONVERTER</span>
          </h1>

          <p>Transform your numbers across digital dimensions</p>
        </header>

        <form className="converter-form" onSubmit={handleConvert}>
          {/* FROM */}
          <div className="input-group">
            <label>
              <span>01</span>
              FROM
            </label>

            <BaseSelector label="" value={fromBase} onChange={setFromBase} />

            <NumberInput
              value={inputValue}
              placeholder="Enter a number..."
              onChange={(value) => {
                setInputValue(value);
                setError("");
              }}
            />

            {error && (
              <p className="error-message">
                <span>!</span>
                {error}
              </p>
            )}
          </div>

          {/* CONNECTION */}
          <div className="swap-container">
            <div className="connector-line">
              <span />
            </div>

            <button
              type="button"
              className="swap-button"
              onClick={handleSwapBases}
              aria-label="Swap conversion bases"
            >
              ⇅
            </button>

            <div className="connector-line">
              <span />
            </div>
          </div>

          {/* TO */}
          <div className="input-group">
            <label>
              <span>02</span>
              TO
            </label>

            <BaseSelector label="" value={toBase} onChange={setToBase} />

            <div key={conversionCount} className="result-animation">
              <NumberInput
                value={result}
                placeholder="Conversion result..."
                readOnly
              />
            </div>
          </div>

          {/* CONVERT */}
          <button type="submit" className="convert-button">
            <span>CONVERT</span>

            <span className="button-arrow">→</span>
          </button>
        </form>

        <footer className="converter-footer">
          <span>BASE SYSTEM</span>
          <span>•</span>
          <span className="footer-ready">READY</span>
          <span>•</span>
          <span>V1.0.0</span>
        </footer>
      </section>
    </main>
  );
}

export default App;
