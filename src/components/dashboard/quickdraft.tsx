const QuickDraft = () => {
  return (
    <div className="quick">
      <h3>Quick Draft</h3>
      <p>Write A Draft For Your Ideas</p>
      <form action="">
        <input type="text" placeholder="title" />
        <textarea placeholder="Your Thought" />
        <button className="btn">Save</button>
      </form>
    </div>
  );
};

export default QuickDraft;
