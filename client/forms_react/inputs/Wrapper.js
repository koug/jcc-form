import React from "react";

export const Wrapper = ({ children, label = "", meta = undefined, ...props }) => {
  return (
    <div
      className={`form-group ${
        meta && meta.touched && meta.error ? "has-error" : ""
      } col-sm-${props.colsize ?? 12}`}
    >
      <div className={`col-sm-12`}>
        <label className="control-label">{label}</label>
        {children}
        {meta && meta.touched && meta.error ? (
          <div className="help-block">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

export const WrapperInline = ({ children, label = "", meta = undefined, ...props }) => {
  return (
    <div
      className={`form-group ${
        meta && meta.touched && meta.error ? "has-error" : ""
      } col-sm-${props.colsize ?? 12}`}
    >
    <label className="control-label col-sm-3">{label}</label>
    <div className={`col-sm-9`}>
        {children}
        {meta && meta.touched && meta.error ? (
          <div className="help-block">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

