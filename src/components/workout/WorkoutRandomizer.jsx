import React from 'react';
import './workout.scss';
import excercices from './excercises';

function getRandom(type) {
  const typeArray = excercices[type]
	return typeArray[Math.floor(Math.random() * (typeArray.length))];
}

const randomizedWorkout = [
  getRandom('arms'),
  getRandom('legs'),
  getRandom('stomach'),
]

const WorkoutRandomizer = () => {
  return (
    <div className="workout-randomizer">
      <h1>
        Idag består träningen utav:
      </h1>
      <ul className="workout-list">
        {randomizedWorkout.map((excercise) => (
          <li key={excercise}>
            {excercise}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default WorkoutRandomizer;