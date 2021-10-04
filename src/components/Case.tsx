import React, { useEffect, useRef, useState } from "react";

interface ICaseProps {
  footer?: React.FC;
  loadMore?: () => void;
}
const Case: React.FC<ICaseProps> = ({ children, loadMore, footer: Footer }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [executing, setExeculting] = useState<boolean>(false);

  useEffect(() => {
    ref?.current?.addEventListener("scroll", () => {
      if (!ref.current) return;
      if (
        ref.current.scrollTop + ref.current.clientHeight >=
          ref.current.scrollHeight - 100 &&
        !executing
      ) {
        setExeculting(true);
        loadMore && loadMore();
        setTimeout(() => setExeculting(false), 3000);
      }
    });
    return () => ref?.current?.removeEventListener("scroll", () => {});
  }, [executing, loadMore, ref]);

  return (
    <div className="d-flex align-items-center justify-content-center vw-100 vh-100">
      <div className="case d-flex flex-column bg-primary">
        <div className="display d-flex align-items-center justify-content-center">
          <div className="screen d-flex align-items-center justify-content-center p-3 me-2">
            <div ref={ref} className="screen__content w-100 h-100 bg-white p-2">
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
    </div>
  );
};

export default Case;
