import React from 'react';
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const SingleSkill = ({ skill }) => {
  const percentage =parseInt(skill.percentage)
  const props = {
    percent:  percentage, // is require
    colorSlice: "#00a1ff",
    colorCircle: "#D3D3D3",
    fontColor: "#365b74",
    fontSize: "1rem",
    fontWeight: 400,
    size:200,
    stroke: 5,
    strokeBottom: 0,
    speed: 60,
    cut: 0,
    rotation: -90,
    opacity: 10,
    // fill: "#00897B",
    unit: "%",
    textPosition: "0.35em",
    animationOff: false,
    // strokeDasharray: "10,1",
    inverse: false,
    round: false,
    number: true,
    animationSmooth:`all 2s ease-in-out`,
    linearGradient: ["#0054D5", "#0054D5"]
  };
  return (
    <div className="text-center">
      <CircularProgressBar className='m-auto' {...props} />
      <p className='uppercase text-xl font-serif text-slate-800'>{skill.skillName}</p>
    </div>
  );
};

export default SingleSkill;