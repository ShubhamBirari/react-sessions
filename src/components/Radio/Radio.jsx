const Radio = ({ gender, selected, setGender }) => {
  return (
    <div className="radio-container">
      <label>{gender}</label>
      <input
        type="radio"
        name={gender}
        value={gender}
        checked={selected === gender}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />
    </div>
  );
};

export default Radio;
