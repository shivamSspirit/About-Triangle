import React, { useState } from "react";
import "./Quiz.css";

const constant = [
  {
    id: "0",
    qustion:
      " What is the third angle for the triangle where angle1 = 45° andangle2 = 45°?",
    labels: {
      label0: "45°",
      label1: "90°",
      label3: "60°",
    },
    qustion0: "qustion0",
  },
  {
    id: "1",
    qustion:
      "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
    labels: {
      label0: "obtuse",
      label1: "acute",
      label3: "right angled",
    },
    qustion0: "qustion1",
  },
  {
    id: "2",
    qustion: "A triangle can have",
    labels: {
      label0: "one right angle",
      label1: "two right angles",
      label3: "nothing",
    },
    qustion0: "qustion2",
  },
  {
    id: "3",
    qustion: "Which of the following can form a right angled triangle?",
    labels: {
      label0: "14, 15, 26",
      label1: "12, 16, 20",
      label3: "nothing",
    },
    qustion0: "qustion3",
  },
  {
    id: "4",
    qustion: "Which of the following triangles are always similar?",
    labels: {
      label0: "Equilateral triangle",
      label1: "Isosceles triangle",
      label3: "nothing",
    },
    qustion0: "qustion4",
  },
  {
    id: "5",
    qustion:
      "If one angle of a triangle is obtuse, then which one of the following is the possible measure of remaining angles?",
    labels: {
      label0: "100°",
      label1: "85°",
      label3: "nothing",
    },
    qustion0: "qustion5",
  },
  {
    id: "6",
    qustion:
      "If the largest angle in a triangle is 70°, what is the least possible value of the smallest angle of the triangle?",
    labels: {
      label0: "30°",
      label1: "10°",
      label3: "nothing",
    },
    qustion0: "qustion6",
  },
  {
    id: "7",
    qustion: "The perimeter of scalene triangle with sides a, b, c is",
    labels: {
      label0: "a + b + c",
      label1: "2a",
      label3: "nothing",
    },
    qustion0: "qustion7",
  },

  {
    id: "8",
    qustion: "A scalene triangle has ___ lines of symmetry",
    labels: {
      label0: "two",
      label1: "no",
      label3: "15",
    },
    qustion0: "qustion8",
  },

  {
    id: "9",
    qustion:
      "There is a right triangle PQR where: angle Q = 90°; angle P = angle R. What is the measure of angles P and R?",
    labels: {
      label0: "85°",
      label1: "65°",
      label3: "45°",
    },
    qustion0: "qustion9",
  },
];

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

function Quiz() {
  const [formvalue, setFormValue] = useState([]);
  const [score, setScore] = useState(0);
  console.log(`score`, score);

  console.log(`formvalue`, formvalue);

  function onValueChange(event) {
    setFormValue({ ...formvalue, [event.target.name]: event.target.value });
  }

  function formSubmit(event) {
    event.preventDefault();
    console.log(`forms`, formvalue);
  }

  function calculateScore() {
    const formResults = formvalue;
    let score = 0,
      index = 0;
    for (let value of Object.values(formResults)) {
      if (value === correctAnswers[index]) {
        score = score + 1;
      }

      index = index + 1;
    }
    setScore(score);
  }

  return (
    <div>
      <h1>Quiz Triangle</h1>
      <h3 className="points">for each right answer you get one point</h3>
      <form className="quiz" onSubmit={formSubmit}>
        {constant.map((qustion) => (
          <div key={qustion.id} className="question-container">
            <p>{qustion.qustion}</p>
            <label>
              <input
                type="radio"
                name={qustion.qustion0}
                value={qustion.labels.label0}
                onChange={onValueChange}
              />
              {qustion.labels.label0}
            </label>
            <label>
              <input
                type="radio"
                name={qustion.qustion0}
                value={qustion.labels.label1}
                onChange={onValueChange}
              />
              {qustion.labels.label1}
            </label>
            <label>
              <input
                type="radio"
                name={qustion.qustion0}
                value={qustion.labels.label3}
                onChange={onValueChange}
              />
              {qustion.labels.label3}
            </label>
          </div>
        ))}
      </form>

      <div>
        {" "}
        <button className="btn-default" type="submit" onClick={calculateScore}>
          Submit
        </button>
      </div>
      <div className="scores">{`your socre is ${score}`}</div>
    </div>
  );
}

export default Quiz;
