import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const PlayersSetup = ({ hdlStartGame, playersList, setPlayersList }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#e1e1e1");
  const [isLoading, setIsLoading] = useState(false);

  const hdlAdd = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setColor("#e1e1e1");
      setName("");
      setPlayersList((prev) => [...prev, { name, color, score: 0 }]);
    }, 1000);
  };

  const hdlName = (e) => {
    setName(e.target.value);
  };
  const hdlColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <section className="w-[80%] h-full flex flex-col gap-8 py-10 mx-auto">
      <h1 className="text-lg font-bold text-center">Welcome to 10.000</h1>
      <p className="text-sm sm:text-base text-slate-700 text-center">
        You need to choose a player name and a color. Then click over the ADD
        PLAYER button. At least two players are needed to start the game.
      </p>
      <label>
        Player name
        <article className="flex  items-center gap-4 border border-slate-400 w-full  p-2 rounded shadow-md">
          <input
            onChange={(e) => hdlName(e)}
            className="w-full px-2"
            type="text"
            value={name}
          />
        </article>
      </label>
      <label className="">
        Player color
        <input
          type="color"
          onChange={(e) => hdlColor(e)}
          className="w-full h-12 rounded"
          value={color}
        />
      </label>

      <article className="py-4 w-full">
        <button
          onClick={() => hdlAdd()}
          className="bg-black shadow-md text-white hover:text-slate-200  px-6 py-2 rounded w-full disabled:text-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100"
          disabled={!name || !color}
        >
          {isLoading ? (
            <FontAwesomeIcon
              className={`text-slate-500 px-10 animate-spin `}
              icon={faSpinner}
            />
          ) : (
            "ADD PLAYER"
          )}
        </button>
      </article>

      <article className="flex flex-col gap-2 w-full">
        {playersList.length > 0 &&
          playersList.map(({ name, color }, idx) => (
            <div
              key={name}
              className={`flex border-2 rounded text-center`}
              style={{ backgroundColor: `${color}`, borderColor: `${color}` }}
            >
              <span
                className={`text-white font-bold flex-none w-32 p-2`}
              >{`PLAYER ${idx + 1}`}</span>
              <p className="flex-1 p-2 uppercase font-bold bg-white">{name}</p>
            </div>
          ))}
      </article>
      {playersList.length >= 2 && (
        <article className="py-4 w-full">
          <button
            onClick={hdlStartGame}
            className="bg-black shadow-md text-white hover:text-slate-200 px-6 py-2 rounded w-full disabled:text-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100"
            disabled={playersList.length < 2}
          >
            START!{" "}
          </button>
        </article>
      )}
    </section>
  );
};

export default PlayersSetup;
