import "./RentalWindow.css";

const RentalWindow = (props) => {
  const { endRental } = props;
  return (
    <>
      <div className="rental__window__container">
        <div className="rental__window">
          <div className="rental__window__buttons">
            <div className="rental__cancel__button" onClick={endRental}>
              Cancel <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="rental__next__button">
              Next Step <i className="fa-solid fa-angles-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalWindow;
