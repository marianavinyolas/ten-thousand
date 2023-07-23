import { useEffect, useState } from "react";
import "./App.css";
import Player from "./Player";
import PlayersSetup from "./PlayersSetup";
import Confetti from "react-confetti";

const App = () => {
  const [initialValue, setInitialValue] = useState({});
  const [score, setScore] = useState({});
  const [reset, setReset] = useState(false);

  const [playersList, setPlayersList] = useState([]);
  const [gameStatus, setGameStatus] = useState("setup");
  const [winner, setWinner] = useState({ name: "" });

  // Confetti effect resize
  const [confetiPieces, setConfetiPieces] = useState(200);
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  useEffect(() => (window.onresize = updateSize), []);

  useEffect(() => {
    const winningPlayer = Object.keys(score).find(
      (playerName) => score[playerName] === 10000
    );
    if (winningPlayer) {
      setWinner({ name: winningPlayer });
      setGameStatus("winner");
      setTimeout(() => {
        setConfetiPieces(0);
      }, 10000);
    }
  }, [score]);

  useEffect(() => {
    const initialState = {};

    playersList.forEach((player) => {
      initialState[player.name] = 0;
    });
    setScore(initialState);
    setInitialValue(initialState);
  }, [playersList, reset]);

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
    let currentPlayers = playersList.filter((item) => item.name !== name);
    setPlayersList(currentPlayers);
  };

  const hdlStartGame = () => {
    setGameStatus("playing");
  };

  const hdlRestart = () => {
    setScore({});
    setReset(!reset);
    setGameStatus("playing");
  };
  const hdlReset = () => {
    setScore({});
    setGameStatus("setup");
    setPlayersList([]);
  };

  return (
    <div className="w-full h-screen sm:w-[80%] md:w-[70%]  flex flex-col gap-y-5 p-5 mx-auto">
      {gameStatus === "setup" && (
        <PlayersSetup {...{ playersList, setPlayersList, hdlStartGame }} />
      )}
      {gameStatus === "playing" && (
        <main className="h-full grid content-center">
          <h1 className="text-4xl font-bold text-center">Welcome to 10.000</h1>
          <section className="flex flex-col items-center gap-y-5 py-10">
            {playersList.map((player, idx) => (
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
          <section className="w-full flex justify-between">
            <button
              onClick={hdlReset}
              className="border border-black/10 shadow-md bg-slate-100 px-6 py-2 rounded mt-10"
            >
              Reset players
            </button>
            <button
              onClick={hdlRestart}
              className="border border-black/10 shadow-md bg-slate-100 px-6 py-2 rounded mt-10"
            >
              Reset scores
            </button>
          </section>
        </main>
      )}
      {gameStatus === "winner" && (
        <section className="h-full grid content-center">
          <Confetti
            width={size.x}
            height={size.y}
            numberOfPieces={confetiPieces}
          />
          <article className="flex flex-col items-center gap-8 pb-32">
            <h1 className="text-3xl animate-pulse">Congratulations!</h1>
            <h1 className="text-5xl">{winner.name}</h1>
            <h1 className="text-3xl animate-pulse">You win!!</h1>
          </article>
          <section className="w-full flex justify-between">
            <button
              onClick={hdlReset}
              className="border border-black/10 shadow-md bg-slate-100 px-6 py-2 rounded mt-10"
            >
              Reset players
            </button>
            <button
              onClick={hdlRestart}
              className="border border-black/10 shadow-md bg-slate-100 px-6 py-2 rounded mt-10"
            >
              Play again
            </button>
          </section>
        </section>
      )}
    </div>
  );
};

export default App;
