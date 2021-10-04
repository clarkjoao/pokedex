import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
      <div className="spinner-border text-secondary" role="status" />
      <span className="sr-only mt-2">Loading...</span>
    </div>
  );
};

export default Loading;
