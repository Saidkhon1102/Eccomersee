function FormInput({ name, label, type }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend ">{label}</legend>
      <input
        name={name}
        type={type}
        className="input  input-neutral w-full text-xl font-bold"
        placeholder="Type here"
      />
    </fieldset>
  );
}

export default FormInput;
