import { useEffect, useState } from "react";
import "./App.css";
import Player from "./Player";

const INITIAL_VALUES = {
  Adela: 0,
  Cecilia: 0,
  Mariana: 0,
  Martin: 0,
  Martina: 0,
  Patricia: 0,
  Ruben: 0,
  Valentina: 0,
}

const INITIAL_PLAYERS = [
  { name: "Adela", color: "red"},
  { name: "Cecilia", color: "black"},
  { name: "Mariana", color: "blue"},
  { name: "Martin", color: "grey"},
  { name: "Martina", color: "deeppink"},
  { name: "Patricia", color: "coral"},
  { name: "Ruben", color: "darkcyan"},
  { name: "Valentina", color: "blueviolet"},
]

const App = () => {
  const [initialValue, setInitialValue] = useState(INITIAL_VALUES);
  const [score, setScore] = useState(INITIAL_VALUES);
  const [players, setPlayers] = useState(INITIAL_PLAYERS);

  useEffect(() => {
  
  }, [players])
  

  const hdlClick = (name, value) => {
    let currentValue = score[name];
    let newValue = currentValue + value;
    setScore((prevState) => ({ ...prevState, [name]: newValue }));
    setInitialValue((prevState) => ({ ...prevState, [name]: 0 }));
  };

  const hdlValue = (e) => {
    let points = parseInt(e.target.value);
    setInitialValue((prevState) => ({ ...prevState, [e.target.name]: points }));
  };
  const hdlDelete = (name) => {
    let currentPlayers = players.filter(item => item.name !== name)
    setPlayers(currentPlayers);
  };
  const handleReset = () => {
    setScore(INITIAL_VALUES);
    setPlayers(INITIAL_PLAYERS)
  };
  return (
    <div className="w-full sm:w-1/2  flex flex-col gap-y-5 p-5 mx-auto">
      <section className="flex flex-col items-center gap-y-5">
        {players.map((player, idx) => (
          <Player
            key={idx}
            name={player.name}
            initialValue={initialValue[player.name]}
            hdlValue={hdlValue}
            hdlClick={hdlClick}
            score={score[player.name]}
            color={player.color}
            hdlDelete={hdlDelete}
          />
        ))}
      </section>
      {score.Adela === 10000 && (
        <h1 className="text-2xl text-center font-bold text-red-500">
          ADELA gaanasteee!!!!
        </h1>
      )}
      {score.Cecilia === 10000 && (
        <h1 className="text-2xl text-center font-bold text-black">
          CECILIA gaanasteee!!!!
        </h1>
      )}
      {score.Mariana === 10000 && (
        <h1 className="text-2xl text-center font-bold text-blue-500">
          MARIANA gaanasteee!!!!
        </h1>
      )}
      {score.Martin === 10000 && (
        <h1 className="text-2xl text-center font-bold text-zinc-500">
          MARTIN gaanasteee!!!!
        </h1>
      )}
      {score.Martina === 10000 && (
        <h1 className="text-2xl text-center font-bold text-pink-500">
          MARTINA gaanasteee!!!!
        </h1>
      )}
      {score.Patricia === 10000 && (
        <h1 className="text-2xl text-center font-bold text-orange-500">
          PATRICIA gaanasteee!!!!
        </h1>
      )}
      {score.Ruben === 10000 && (
        <h1 className="text-2xl text-center font-bold text-sky-500">
          RUBEN gaanasteee!!!!
        </h1>
      )}
      {score.Valentina === 10000 && (
        <h1 className="text-2xl text-center font-bold text-purple-500">
          VALENTINA gaanasteee!!!!
        </h1>
      )}

      <button
        onClick={handleReset}
        className="border border-black bg-slate-100 px-6 py-2 rounded mt-10"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
