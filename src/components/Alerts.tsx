import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  OnClose: () => void;
}

export const Alerts = ({ children, OnClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={OnClose}
      ></button>
    </div>
  );
};
