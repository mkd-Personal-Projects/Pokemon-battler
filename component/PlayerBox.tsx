import { ChildrenType } from "./ComponentTypes";

const PlayerBox = ({ children }: ChildrenType) => {
  return (
    <div id='player-box'>
      <div id='player-box-inner-trim'>{children}</div>
    </div>
  );
};

export default PlayerBox;
