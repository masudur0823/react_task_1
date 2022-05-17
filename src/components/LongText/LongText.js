import React from "react";
// import useAuth from "../../hooks/useAuth";
import styles from "./LongText.module.css";

const LongText = (props) => {
  const { question } = props.quiz;
  const { formData, setFormData } = props;


  const handleSimpleInput = (e) => {
    setFormData({ ...formData, longAns: e.target.value })
  }
  return (
    <div className=" p-2 ">
      <h4 className=" text-success">{question}</h4>
      <input
        placeholder="Answer goes here"
        onChange={handleSimpleInput}
        className={styles.LongTextInput}
        required
        type="text"
        value={formData.longAns}
      />
    </div>
  );
};

export default LongText;
