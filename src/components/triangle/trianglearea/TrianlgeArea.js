import React, { useState } from "react";

import "./trainglearea.css";

function TrianlgeArea() {
	const [sideOnevalue, setsideOneValue] = useState(0);
	const [sideTwovalue, setsideTwoValue] = useState(0);
	const [sideThirdvalue, setsideThirdValue] = useState(0);
	const [area, setArea] = useState(0);

	const sideOneHandler = (e) => {
		const sideone = Number(e.target.value);
		setsideOneValue(sideone);
	};

	const sideTwoHandler = (e) => {
		const sidetwo = Number(e.target.value);
		setsideTwoValue(sidetwo);
	};

	const sideThirdHandler = (e) => {
		const sidethird = Number(e.target.value);
		setsideThirdValue(sidethird);
	};

	const calcArea = (e) => {
		const f = sideOnevalue;
		const s = sideTwovalue;
		const t = sideThirdvalue;
		const sideSumhalf = (f + s + t) / 2;
		const herons = Math.sqrt(
			sideSumhalf *
				(sideSumhalf - f) *
				(sideSumhalf - s) *
				(sideSumhalf - t)
		).toFixed(4);
		console.log(`herons`, herons);
		console.log(f, s, t, "values");
		setArea(herons);
	};

	const CalcHandler = () => {
		calcArea();
	};

	return (
		<>
			<div className="head">
				<h1>Calculate triaingle Area</h1>
			</div>

			<div className="form-input">
				<div className="form-first-block">
					<label className="lableforfirstvalue" htmlFor="label">
						Enter first value:
					</label>
					<input
						className="sideinputvalue"
						value={sideOnevalue}
						onChange={sideOneHandler}
						type="number"
					/>
				</div>
				<div className="form-second-block">
					<label className="lableforsecondvalue" htmlFor="label">
						Enter second value:
					</label>
					<input
						className="sideinputvalue"
						value={sideTwovalue}
						onChange={sideTwoHandler}
						type="number"
					/>
				</div>

				<div className="form-third-block">
					<label className="lableforthirdvalue" htmlFor="label">
						Enter third value:
					</label>
					<input
						className="sideinputvalue"
						value={sideThirdvalue}
						onChange={sideThirdHandler}
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
				<h2>
					Area of triangle is{" "}
					<span className="resultval">{area}</span>
				</h2>
			</div>
		</>
	);
}

export default TrianlgeArea;
