import "./TextAvatar.css";

function TextAvatar({ text }) {
  return (
    <div className="text-avatar">
      <p className="text-avatar__text">{text.substring(0, 1).toUpperCase()}</p>
    </div>
  );
}

export default TextAvatar;
