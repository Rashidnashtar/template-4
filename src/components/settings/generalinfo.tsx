const GeneralInfo: React.FC = () => {
  return (
    <div className="settings-widget general-info">
      <h3>General Info</h3>
      <p>General Information About Your Account</p>
      <form>
        <label htmlFor="name">First Name</label>
        <input type="text" name="name" placeholder="First Name" />
        <label htmlFor="Lname">Last Name</label>
        <input type="text" name="Lname" placeholder="Last Name" />

        <label htmlFor="email">Email</label>
        <div className="email">
          <input
            type="text"
            name="email"
            placeholder="rashid@gmail.com"
            disabled
          />
          <button>Change</button>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
