import { enableSound } from "../../utils/enableSound";

const ClickBtn = ({ item, power, msg, vol }) => {
  const { id, nameBtn, src, parentId } = item;

  const soundClick = () => enableSound(id, parentId, power, msg, vol);

  return (
    <div className="btnStyle" id={parentId} onClick={soundClick}>
      <audio id={id} src={power ? src : "#"}></audio>

      <div className="w-100 text-center pt-3">
        <p>{nameBtn}</p>
      </div>
    </div>
  );
};

export default ClickBtn;
