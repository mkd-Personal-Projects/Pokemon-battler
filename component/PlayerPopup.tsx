import { PlayerPopupType } from "./ComponentTypes";

const PlayerPopup = ({ options, isMoveSelect }: PlayerPopupType) => {
  const style = options.length === 4 ? "four-options" : "";
  return (
    <div
      id='player-box-popup'
      className={isMoveSelect ? "width-55" : "width-45"}
    >
      <div id='player-box-popup-inner-trim' className={style}>
        {options.map((option) => {
          return (
            <p key={option} className='popup-options'>
              {option}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default PlayerPopup;
