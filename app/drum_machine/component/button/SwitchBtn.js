const SwitchBtn = ({ label, onChangeHandle, disabled }) => {
  return (
    <div className="positionFlx">
      <label>{label}</label>
      <label className="switch">
        <input type="checkbox" onChange={onChangeHandle} disabled={disabled} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default SwitchBtn;
