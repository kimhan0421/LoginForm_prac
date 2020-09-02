import React from "react";
import styles from "./InsertForm.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const InsertForm = () => {
  return (
    <div className={cx("form")}>
      <div className={cx("title")}>Insert Your Note Here...</div>
      <input type="text" name="note" />
    </div>
  );
};

export default InsertForm;
