import React from "react";
// import useAuth from "../../hooks/useAuth";

const MultipleSelectionChoice = (props) => {
  const { question, answers } = props.quiz;
  console.log(props.quiz)
  // const { answeredQuiz, currentQuestion } = useAuth();
  //state for multiple selection
  // const [selectedCategories, setSelectedCategories] = useState([]);
  //
  // const handleAnswer = (e) => {
  //   const updateCategory = selectedCategories.map((category) => category.value);
    // updating the answer for the current quiz
  //   answeredQuiz[currentQuestion].correct_answer = updateCategory;
  // };

  //   handeling the changes for multiple choices
  // const handleChange = (selectedCategories) => {
  //   setSelectedCategories(selectedCategories);
  // };
  return (
    <div>
      <h4 className="text-primary mb-3">{question}</h4>

      {/* <Select
        onBlur={handleAnswer}
        isMulti
        value={selectedCategories}
        name="categories"
        onChange={handleChange}
        options={answers}
        className="mb-2  rounded border-2 mt-1"
      /> */}
      <ul className="list-unstyled text-start">
        {
          answers.map((ans) =>
            <li key={ans.id} className="d-inline me-3"
              style={{border:'1px solid grey',padding:'10px'}}
            >
              <input
                type="checkbox"
                name=""
                id=""
              />{ans.answer}
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default MultipleSelectionChoice;
