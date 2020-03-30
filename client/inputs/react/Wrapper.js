import React from "react";

export const Wrapper = ({ children, label = "", meta = undefined }) => {
  return (
    <div
      className={`form-group ${
        meta && meta.touched && meta.error ? "has-error" : ""
      }`}
    >
      <div className="col-sm-12">
        <label className="control-label">{label}</label>
        {children}
        {meta && meta.touched && meta.error ? (
          <div className="help-block">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};
