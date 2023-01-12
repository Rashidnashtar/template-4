const QuickDraft = () => {
  return (
    <div className="quick">
      <h3>Quick Draft</h3>
      <p>Write A Draft For Your Ideas</p>
      <form action="">
        <input type="text" placeholder="title" />
        <textarea
          cols="32"
          rows="10"
          placeholder="Your Thought"
          resize="none"
        />
        <button className="btn">Save</button>
      </form>
    </div>
  );
};

export default QuickDraft;
