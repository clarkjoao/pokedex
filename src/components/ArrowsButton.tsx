import React from "react";
import { ReactComponent as Left } from "assets/icons/left.svg";
import { ReactComponent as Right } from "assets/icons/right.svg";
const ArrowsButton: React.FC = () => {
  return (
    <div className="arrows_button position-relative d-flex align-items-center justify-content-center flex-column">
      <div className="content position-absolute d-flex w-100 justify-content-between rotate-l-90">
        <button>
          <Left />
        </button>
        <button>
          <Right />
        </button>
      </div>
      <div className="content position-absolute d-flex w-100 justify-content-between">
        <button>
          <Left />
        </button>
        <button>
          <Right />
        </button>
      </div>
    </div>
  );
};

export default ArrowsButton;
