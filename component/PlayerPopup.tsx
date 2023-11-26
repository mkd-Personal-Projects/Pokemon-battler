import { PlayerPopupType } from "./ComponentTypes";

const PlayerPopup = ({ options }: PlayerPopupType) => {
  const style = options.length === 4 ? "four-options" : "";
  return (
    <div id='player-box-popup'>
      <div id='player-box-popup-inner-trim' className={style}>
        {options.map((option) => {
          return <p className='popup-options'>{option}</p>;
        })}
      </div>
    </div>
  );
};

export default PlayerPopup;
