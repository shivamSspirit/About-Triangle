import React, { useState, useEffect } from "react";
import "./isTrianlge.css";

function IsTriangle() {
  const [angleOnevalue, setangleOneValue] = useState(0);
  const [angleTwovalue, setangleTwoValue] = useState(0);
  const [angleThirdvalue, setangleThirdValue] = useState(0);
  const [istrinagle, setIstrinagle] = useState(false);

  const angleOneHandler = (e) => {
    const angleone = parseInt(e.target.value);
    setangleOneValue(angleone);
  };

  const angleTwoHandler = (e) => {
    const angletwo = parseInt(e.target.value);
    setangleTwoValue(angletwo);
  };

  const angleThirdHandler = (e) => {
    const anglethird = parseInt(e.target.value);
    setangleThirdValue(anglethird);
  };

  const calcIsTrianlge = () => {
    const conditionTri = Number(180);
    const o = angleOnevalue;
    const s = angleTwovalue;
    const t = angleThirdvalue;
    console.log(o, s, t, "values");
    const sumOfthree = o + s + t;
    console.log(`sumOfthree`, sumOfthree);
    if (conditionTri === sumOfthree) {
      console.log(`this is right trianlge`);
      setIstrinagle(true);
    } else {
      setIstrinagle(false);
    }
  };

  const CalcHandler = () => {
    calcIsTrianlge();
  };

  return (
    <>
      <div className="head">
        <h1>Calculate triangle or not</h1>
      </div>

      <div className="form-input">
        <div className="form-first-block">
          <label className="lableforfirstvalue" htmlFor="label">
            Enter first value:
          </label>
          <input
            className="angleinputvalue"
            value={angleOnevalue}
            onChange={angleOneHandler}
            type="number"
          />
        </div>
        <div className="form-second-block">
          <label className="lableforsecondvalue" htmlFor="label">
            Enter second value:
          </label>
          <input
            className="angleinputvalue"
            value={angleTwovalue}
            onChange={angleTwoHandler}
            type="number"
          />
        </div>

        <div className="form-third-block">
          <label className="lableforthirdvalue" htmlFor="label">
            Enter third value:
          </label>
          <input
            className="angleinputvalue"
            value={angleThirdvalue}
            onChange={angleThirdHandler}
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
    <h2 className="result">
          {istrinagle === true
            ? `yay this match trianlge condition`
            : `oh no this not match`}
        </h2>
      </div>
    </>
  );
}

export default IsTriangle;
