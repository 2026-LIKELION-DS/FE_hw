function TextInput({
  className,
  placeholder,
  value,
  onChange,
}) {
  return (
    <textarea
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextInput;