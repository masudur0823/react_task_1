import React from "react";
// import useAuth from "../../hooks/useAuth";

const Description = (props) => {
  const { question } = props.quiz;
  const { formData, setFormData } = props;


  const handleSimpleInput = (e) =>{
    setFormData({...formData, des: e.target.value})
  }

  return (
    <div className=" p-2 ">
      <h4 className="  mb-5">{question}</h4>
      <textarea
        placeholder="description"
        onChange={handleSimpleInput}
        className="w-100"
        style={{ height: "100px" }}
        required
        type="text"
        value={formData.des}
      />
    </div>
  );
};

export default Description;
