import {
  faCheckCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const PlayersSetup = ({ hdlStartGame, playersList, setPlayersList }) => {
  const [player, setPlayer] = useState({ name: "", color: "" });
  const [isLoading, setIsLoading] = useState(false);
  const hdlAdd = () => {
    setIsLoading(true);
    setPlayer({ color: "", name: "" });
    setTimeout(() => {
      setIsLoading(false);
      setPlayersList((prev) => [...prev, player]);
    }, 1000);
  };
  const hdlName = (e) => {
    setPlayer((prev) => {
      return { ...prev, name: e.target.value };
    });
  };
  const hdlColor = (color) => {
    setPlayer((prev) => {
      return { ...prev, color: color };
    });
  };

  return (
    <section className="h-full grid content-center gap-8">
      <h1 className="text-[40px] font-bold text-center">Welcome to 10.000</h1>
      <p className="text-lg text-slate-700 text-center">
        You need to choose a player name and a color. Then click over the ADD
        PLAYER button. At least two players are needed to start the game and up
        to ten.
      </p>
      <article className="flex  items-center gap-4 border border-slate-400 w-full  p-2 rounded shadow-md">
        <input
          onChange={(e) => hdlName(e)}
          className="w-full px-2"
          type="text"
          placeholder="Player name"
          value={player.name}
        />
      </article>
      <article className="flex w-full justify-center flex-wrap gap-2 py-4">
        <button
          className="p-8 py-4 rounded bg-black"
          onClick={() => hdlColor("bg-black border-black")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-black border-black"
                ? "text-slate-300"
                : "text-black"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-blue-700"
          onClick={() => hdlColor("bg-blue-700 border-blue-700")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-blue-700 border-blue-700"
                ? "text-slate-300"
                : "text-blue-700"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-sky-500"
          onClick={() => hdlColor("bg-sky-500 border-sky-500")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-sky-500 border-sky-500"
                ? "text-slate-300"
                : "text-sky-500"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-blue-300"
          onClick={() => hdlColor("bg-blue-300 border-blue-300")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-blue-300 border-blue-300"
                ? "text-slate-500"
                : "text-blue-300 "
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-violet-700"
          onClick={() => hdlColor("bg-violet-700 border-violet-700")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-violet-700 border-violet-700"
                ? "text-slate-300"
                : "text-violet-700"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-violet-300 "
          onClick={() => hdlColor("bg-violet-300 border-violet-300")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-violet-300 border-violet-300"
                ? "text-slate-500"
                : "text-violet-300"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-purple-600 "
          onClick={() => hdlColor("bg-purple-600 border-purple-600")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-purple-600 border-purple-600"
                ? "text-slate-300"
                : "text-purple-600"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-purple-200 "
          onClick={() => hdlColor("bg-purple-200 border-purple-200")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-purple-200 border-purple-200"
                ? "text-slate-500"
                : "text-purple-200"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-red-700 "
          onClick={() => hdlColor("bg-red-700 border-red-700")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-red-700 border-red-700"
                ? "text-slate-300"
                : "text-red-700"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-red-500 "
          onClick={() => hdlColor("bg-red-500 border-red-500")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-red-500 border-red-500"
                ? "text-slate-300"
                : "text-red-500"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-red-300 "
          onClick={() => hdlColor("bg-red-300 border-red-300")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-red-300 border-red-300"
                ? "text-slate-500"
                : "text-red-300"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-pink-600 "
          onClick={() => hdlColor("bg-pink-600 border-pink-600")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-pink-600 border-pink-600"
                ? "text-slate-300"
                : "text-pink-600"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-pink-400 "
          onClick={() => hdlColor("bg-pink-400 border-pink-400")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-pink-400 border-pink-400"
                ? "text-slate-500"
                : "text-pink-400"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-pink-200 "
          onClick={() => hdlColor("bg-pink-200 border-pink-200")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-pink-200 border-pink-200"
                ? "text-slate-500"
                : "text-pink-200"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-emerald-600 "
          onClick={() => hdlColor("bg-emerald-600 border-emerald-600")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-emerald-600 border-emerald-600"
                ? "text-slate-300"
                : "text-emerald-600"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-emerald-300 "
          onClick={() => hdlColor("bg-emerald-300 border-emerald-300")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-emerald-300 border-emerald-300"
                ? "text-slate-500"
                : "text-emerald-300"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-orange-500 "
          onClick={() => hdlColor("bg-orange-500 border-orange-500")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-orange-500 border-orange-500"
                ? "text-slate-500"
                : "text-orange-500"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
        <button
          className="p-8 py-4 rounded bg-yellow-500 "
          onClick={() => hdlColor("bg-yellow-500 border-yellow-500")}
        >
          <FontAwesomeIcon
            className={`${
              player.color === "bg-yellow-500 border-yellow-500"
                ? "text-slate-500"
                : "text-yellow-500"
            } text-xl`}
            icon={faCheckCircle}
          />
        </button>
      </article>
      <article className="py-4 w-full">
        <button
          onClick={() => hdlAdd()}
          className="border border-black/10 shadow-md bg-slate-100 px-6 py-2 rounded w-full disabled:text-slate-400 "
          disabled={!player.name || !player.color || playersList.length >= 10}
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
              className={`flex border-2 rounded text-center ${
                color.split(" ")[1]
              }`}
            >
              <span
                className={`text-white font-bold flex-none w-32 p-2 ${
                  color.split(" ")[0]
                }`}
              >{`PLAYER ${idx + 1}`}</span>
              <p className="flex-1 p-2 uppercase font-bold">{name}</p>
            </div>
          ))}
      </article>
      {playersList.length >= 2 && <article className="py-4 w-full">
        <button
          onClick={hdlStartGame}
          className="border border-black/10 shadow-md bg-slate-100 px-6 py-2 rounded w-full disabled:text-slate-400 "
          disabled={playersList.length < 2}
        >
          START!{" "}
        </button>
      </article>}
    </section>
  );
};

export default PlayersSetup;
