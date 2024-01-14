import {
  faClose,
  faEllipsisV,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Player = ({
  initialValue,
  hdlValue,
  hdlClick,
  score,
  name,
  color,
  hdlDelete,
  index,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const hdlShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const hdlDeletePlayer = (name) => {
    hdlDelete(name);
    setShowMenu(false);
  };

  const hdlKeyDown = (e) => {
    e.key === "Enter" && hdlClick(name, initialValue, 0, score);
  };
  return (
    <div
      className={`flex items-center gap-x-2 bg-neutral-100 shadow-lg rounded p-2 w-full relative`}
    >
      <FontAwesomeIcon
        icon={faEllipsisV}
        onClick={hdlShowMenu}
        className="px-2 text-slate-500 cursor-pointer"
      />
      <section
        className={`${
          showMenu
            ? "absolute top-[64px] left-0 z-10 bg-white/95 w-[120px] px-2 py-3 rounded shadow-lg"
            : "hidden"
        }`}
      >
        <div
          className="flex items-center my-2 gap-3 cursor-pointer text-neutral-500  hover:text-neutral-700"
          onClick={() => hdlDeletePlayer(name)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
          <p>Delete</p>
        </div>
        <div
          className="flex items-center py-2 gap-3 cursor-pointer text-neutral-500  hover:text-neutral-700"
          onClick={() => setShowMenu(false)}
        >
          <FontAwesomeIcon icon={faClose} size="lg" />
          <p>Close</p>
        </div>
      </section>
      <input
        name={name}
        value={initialValue !== 0 ? initialValue : ""}
        type="number"
        onChange={(e) => hdlValue(e)}
        onKeyDown={hdlKeyDown}
        className={`border-2 rounded pl-2 py-[10px] w-20 bg-transparent no-arrows ${index !==0 && 'cursor-not-allowed'}`}
        style={{ borderColor: `${color}` }}
        disabled={index !== 0}
      />
      <button
        className={`shadow-lg text-white rounded py-3 w-1/2`}
        style={{ backgroundColor: `${color}` }}
        onClick={() => hdlClick(name, initialValue, 0, score)}
      >
        {name}
      </button>
      <div
        style={{ borderColor: `${color}` }}
        className={`border-[3px] w-1/3 h-12 rounded-md text-center flex justify-center`}
      >
        <p className="my-auto">{score ?? 0}</p>
      </div>
    </div>
  );
};

export default Player;
