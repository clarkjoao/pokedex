import React from "react";

interface ICaseProps {
  footer?: React.FC;
}
const Case: React.FC<ICaseProps> = ({ children, footer: Footer }) => {
  return (
    <div className="case d-flex flex-column bg-primary">
      <div className="display d-flex align-items-center justify-content-center">
        <div className="screen d-flex align-items-center justify-content-center p-3 me-2">
          <div className="screen__content w-100 h-100 bg-white p-2">
            {children}
          </div>
        </div>
      </div>
      {Footer && (
        <footer className="footer d-flex flex-column align-items-center justify-content-center mt-4">
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default Case;
