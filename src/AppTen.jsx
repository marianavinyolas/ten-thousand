import { useEffect, useState } from "react";
import "./App.css";
import Player from "./Player";
import PlayersSetup from "./PlayersSetup";
import Confetti from "react-confetti";

const App = () => {
  const [initialValue, setInitialValue] = useState({});
  const [reset, setReset] = useState(false);

  const [playersList, setPlayersList] = useState([]);
  const [gameStatus, setGameStatus] = useState("setup");
  const [winner, setWinner] = useState({ name: "" , color: ""});

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
    const players = JSON.parse(localStorage.getItem("players") || "[]");
    if (players.length > 0) {
      setPlayersList(players);
    }
  }, []);

  useEffect(() => {
    const winningPlayer = playersList.find((item) => item.score === 10000);
    if (winningPlayer) {
      setWinner({ name: winningPlayer.name, color: winningPlayer.color });
      setGameStatus("winner");
      setTimeout(() => {
        setConfetiPieces(0);
      }, 10000);
    }
  }, [playersList]);

  useEffect(() => {
    const initialState = {};

    playersList.forEach((player) => {
      initialState[player.name] = 0;
    });
    setInitialValue(initialState);
  }, [playersList, reset]);

  const hdlAddValue = (name, value, index, score) => {
    setInitialValue((prevState) => ({ ...prevState, [name]: 0 }));
    const updatedPlayersList = [...playersList];
    const removedPlayer = updatedPlayersList.splice(index, 1)[0];
    updatedPlayersList.push({ ...removedPlayer, score: score + value });
    setPlayersList(updatedPlayersList);
  };

  const hdlValue = (e) => {
    let points = parseInt(e.target.value);
    setInitialValue((prevState) => ({ ...prevState, [e.target.name]: points }));
  };

  const hdlDelete = (name) => {
    let currentPlayers = playersList.filter((item) => item.name !== name);
    localStorage.setItem("players", JSON.stringify(currentPlayers));

    setPlayersList(currentPlayers);
  };

  const hdlStartGame = () => {
    localStorage.setItem("players", JSON.stringify(playersList));
    setGameStatus("playing");
  };

  const hdlResetScores = () => {
    setReset(!reset);
    setGameStatus("playing");
    const newScores = playersList.map((item) => {
      return { ...item, score: 0 };
    });
    setPlayersList(newScores);
    setConfetiPieces(200);
  };
  const hdlResetPlayers = () => {
    setGameStatus("setup");
    setPlayersList([]);
    localStorage.removeItem("players");
  };

  const hdlContinue = () => {
    setGameStatus("playing");
    setConfetiPieces(200);
    const deleteWinner = playersList.filter((item) => item.score !== 10000);
    setPlayersList(deleteWinner);
  };

  const hdlPlayNewGame = () => {
    window.location.reload()
  }

  return (
    <main className="w-full h-screen flex flex-col justify-center py-4">
      <div className="w-[98%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] flex flex-col gap-y-5 p-5 mx-auto border border-neutral-300 rounded-md shadow-lg">
        {gameStatus === "setup" && (
          <PlayersSetup {...{ playersList, setPlayersList, hdlStartGame }} />
        )}
        {gameStatus === "playing" && (
          <main className="h-full grid content-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
              Welcome to 10.000
            </h1>
            <section className="flex flex-col items-center gap-y-5 py-10">
              {playersList.map((player, idx) => (
                <Player
                  key={idx}
                  name={player.name}
                  initialValue={initialValue[player.name]}
                  hdlValue={hdlValue}
                  hdlClick={hdlAddValue}
                  score={player.score}
                  color={player.color}
                  hdlDelete={hdlDelete}
                  index={idx}
                />
              ))}
            </section>
            <section className="w-full flex justify-between">
              <button
                onClick={hdlResetPlayers}
                className="border border-black/10 shadow-md bg-slate-100 px-6 py-2 rounded mt-10"
              >
                Reset all
              </button>
              <button
                onClick={hdlResetScores}
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
            <article className="flex flex-col items-center gap-8 py-24">
              <h1 className="text-3xl animate-pulse">Congratulations!</h1>
              <h1 className={`text-5xl`} style={{color: `${winner.color}`}}>{winner.name}</h1>
              <h1 className="text-3xl animate-pulse">You win!!</h1>
            </article>
            <section className="w-full flex justify-between">
              <button
                onClick={hdlPlayNewGame}
                className="border border-black/10 shadow-md bg-slate-100 px-6 py-2 rounded mt-10"
              >
                Play new game
              </button>
              <button
                onClick={hdlContinue}
                className="border border-black/10 shadow-md bg-slate-100 px-6 py-2 rounded mt-10"
              >
                Continue playing
              </button>
            </section>
          </section>
        )}
      </div>
    </main>
  );
};

export default App;
