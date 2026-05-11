function Button({ title, onClick }) {
  return (
    <button className="write-button" onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
