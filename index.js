const Notification = (props) => {
  //  Write your code here.
  const { src, className, name } = props;
  const logo = <img class="logo" src={src} />;
  const logoName = <p class="logo-name">{name}</p>;
  return (
    <div className={`notify ${className}`}>
      {logo} {logoName}
    </div>
  );
};

const element = (
  //  Write your code here.
  <div class="main-container">
    <div class="content-container">
      <h1 class="heading">Notification</h1>
      <Notification
        className="primary"
        name="Information Message"
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="success"
        name="Success Message"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="warning"
        name="Warning Message"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="error"
        name="Error Message"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
