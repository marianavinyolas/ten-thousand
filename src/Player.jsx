import { faClose, faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Player = ({ initialValue, hdlValue, hdlClick, score, name, color, hdlDelete }) => {

  const hdlKeyDown = (e) => {
    e.key === 'Enter' && hdlClick(name, initialValue)
  }
  return (
    <div className={`flex items-center gap-x-2 bg-neutral-100 shadow-lg rounded p-2 w-full`}>
      <FontAwesomeIcon icon={faTrashCan} onClick={() => hdlDelete(name)} className="px-2 text-slate-500 cursor-pointer" />
      <input
        name={name}
        value={initialValue !== 0 ? initialValue : ""}
        type="number"
        onChange={(e) => hdlValue(e)}
        onKeyDown={hdlKeyDown}
        className={`border rounded pl-2 py-[10px] w-20 bg-transparent ${color.split(' ')[1]} no-arrows`}
      />
      <button
        className={`shadow-lg text-white rounded py-3 w-1/2 ${color.split(' ')[0]}`}
        onClick={() => hdlClick(name, initialValue)}
      >
        {name}
      </button>
      <div
        className={`border-[3px] w-1/3 h-12 rounded-md text-center flex justify-center ${color.split(' ')[1]}`}
      >
        <p className="my-auto">{score}</p>
      </div>
    </div>
  );
};

export default Player;
