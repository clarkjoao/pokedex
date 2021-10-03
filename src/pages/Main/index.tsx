import React from "react";
const Main: React.FC = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vw-100 vh-100">
      <div className="case d-flex flex-column bg-primary  px-4 pt-4">
        <div className="case__top flex-grow-1">
          <div className="screen h-100 p-2">
            <h1>teste</h1>
          </div>
        </div>
        <div className="case__bottom d-flex align-items-center justify-content-center flex-grow-1">
          <div className="btn-arrow">1</div>
          <div className="btn">2</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
