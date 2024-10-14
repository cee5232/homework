import React, { useState } from 'react';
import UNSDG from './components/UNSDG';

function App() {
  const [randomGoal, setRandomGoal] = useState(1);

  const changeRandomGoal = () => {
    setRandomGoal(Math.floor(Math.random() * 17) + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">UN Sustainable Development Goals</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Random Goal (Stateful)</h2>
        <UNSDG goal={randomGoal} />
        <button
          onClick={changeRandomGoal}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Change Goal
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {[...Array(17)].map((_, index) => (
          <UNSDG key={index + 1} goal={index + 1} />
        ))}
      </div>

      <div className="mt-8 flex gap-8">
        <UNSDG goal="all" />
        <UNSDG goal="circle" />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Color-only Examples</h2>
        <div className="flex gap-4 flex-wrap">
          {[...Array(17)].map((_, index) => (
            <UNSDG key={index + 1} goal={index + 1} colorOnly width="50px" height="50px" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;