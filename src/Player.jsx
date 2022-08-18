import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Player = ({ initialValue, hdlValue, hdlClick, score, name, color, hdlDelete }) => {
  return (
    <div className={`flex items-center gap-x-2 bg-neutral-100 shadow-lg rounded p-2 w-full`}>
      <FontAwesomeIcon icon={faClose} onClick={() => hdlDelete(name)} />
      <input
        name={name}
        value={initialValue !== 0 ? initialValue : ""}
        type="number"
        onChange={(e) => hdlValue(e)}
        className="border rounded py-[10px] w-20 bg-transparent"
        style={{ borderColor: color }}
      />
      <button
        className={`shadow-lg text-white rounded py-3 w-1/2`}
        style={{ backgroundColor: color }}
        onClick={() => hdlClick(name, initialValue)}
      >
        {name}
      </button>
      <div
        className="border-[3px] w-1/3 h-12 rounded-md text-center flex justify-center"
        style={{ borderColor: color }}
      >
        <p className="my-auto">{score}</p>
      </div>
    </div>
  );
};

export default Player;
