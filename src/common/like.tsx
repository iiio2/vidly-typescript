interface LikeProps {
  liked: boolean | undefined;
  onLike: () => void;
}

const Like = ({ liked, onLike }: LikeProps): JSX.Element => {
  let classes = 'fa fa-heart';
  if (!liked) classes += '-o';
  return (
    <>
      <i
        onClick={onLike}
        className={classes}
        aria-hidden='true'
        style={{ cursor: 'pointer' }}
      ></i>
    </>
  );
};

export default Like;
