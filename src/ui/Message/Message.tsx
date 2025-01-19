import "./Message.scss";

export function Message({ text }) {
  if (!text) {
    return null;
  }
  return (
    <div
      className="message__container"
      data-testid="message-id"
    >
      <p>{text}</p>
    </div>
  );
}
