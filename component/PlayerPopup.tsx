import { PlayerPopupType } from "./ComponentTypes";

const PlayerPopup = ({
  options,
  isMoveSelect,
  handleClick,
  fontSize,
  isDisabled,
}: PlayerPopupType) => {
  const style = options.length === 4 ? "four-options" : "";
  return (
    <div
      id='player-box-popup'
      className={isMoveSelect ? "width-55" : "width-45"}
    >
      <div id='player-box-popup-inner-trim' className={style}>
        {options.map((option) => {
          return (
            <button
              onClick={() => handleClick(option)}
              key={option}
              className='popup-options'
              disabled={isDisabled}
            >
              <div className='popup-options-arrow-pointer'></div>
              <div className='popup-options-arrow-hider'></div>
              <p className='popup-text' style={{ fontSize: fontSize }}>
                {option}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PlayerPopup;
