import "./Media.scss";
export const Media = ({ media, children }: any) => {
  return (
    <div className="Media">
      <div className="media">{media}</div>
      <div className="content">{children}</div>
    </div>
  );
};
