const MessageItem = (props) => {
  const { from } = props;
  const styling =
    from === 'false'
      ? 'bg-gray-500 h-fit max-w-sm p-2 rounded-2xl mb-3'
      : 'bg-custom-yellow h-fit max-w-sm p-2 rounded-2xl mb-3 ml-auto';

  return <div className={styling}>{props.content}</div>;
};

export default MessageItem;
