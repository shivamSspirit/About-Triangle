import React, { useState, useEffect } from "react";
import "./trianglehypo.css";

function TrianlgeHypo() {
  const [basevalue, setBaseValue] = useState(0);
  const [height, setHeight] = useState(0);
  const [hypo, setHypo] = useState();

  const baseHandler = (e) => {
    const base = e.target.value;
    setBaseValue(base);
  };

  const heightHandler = (e) => {
    const height = e.target.value;
    setHeight(height);
  };

  const calcHypotenus = () => {
    const squrt = Math.sqrt(basevalue * basevalue + height * height);
    const hypotenus = Math.hypot(basevalue, height);
    setHypo(hypotenus);
    console.log(`hypotenus`, hypotenus);
    console.log(`squrt`, squrt);
  };

  const CalcHandler = () => {
    console.log(`calculate`, calcHypotenus());
  };

  return (
    <>
      <div className="head">
        <h1>Calculate Hypotenuse of a triangle</h1>
      </div>

      <div className="form-input">
        <div className="form-first-block">
          <label className="lableforbasevalue" htmlFor="label">
            Enter base value:
          </label>
          <input
            className="baseinputvalue"
            value={basevalue}
            onChange={baseHandler}
            type="number"
          />
        </div>
        <div className="form-second-block">
          <label className="lableforheightvalue" htmlFor="label">
            Enter height value:
          </label>
          <input
            className="heightinputvalue"
            value={height}
            onChange={heightHandler}
            type="number"
          />
        </div>
      </div>

      <div>
        <button onClick={CalcHandler} className="calculate-btn">
          calculate
        </button>
      </div>

      <div className="result-block">
        <h2>Hypotenuse formula</h2>
        <h3>√(base² + height²)</h3>

        <h2>
          the length of hypotenus is <span className="result-val">{hypo}</span>
        </h2>
      </div>
    </>
  );
}

export default TrianlgeHypo;
