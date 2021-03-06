import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        autoComplete="autocomplete ph"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        // shrink if the user types anything in
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
