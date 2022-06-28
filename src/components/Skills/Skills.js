import React, { useState } from "react";
import { useEffect } from "react";
import SingleSkill from './SingleSkill'

const Skills = () => {

  const [skills, setSkills] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/skills', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setSkills(data))
  }, []);
  // const [valueEnd, setValueEnd] = React.useState(66);
  
  return (
    <section className="container mx-auto px-2 py-8">
      <div className="">
      <h1 className="text-3xl font-serif text-slate-800 font-semibold">Skills </h1>
      </div>
      <div className="grid grid-cols-4 justify-items-center gap-6 py-4">
        {
          skills.map((skill,index)=> <SingleSkill skill={skill} key={index}></SingleSkill> )
        }
        </div>
    </section>
  );
};
export default Skills;