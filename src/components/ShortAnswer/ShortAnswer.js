import React from 'react';
import useAuth from '../../hooks/useAuth';

const ShortAnswer = (props) => {
    const { question } = props.quiz;
    const { formData, setFormData } = props;
    const { answeredQuiz, currentQuestion } = useAuth();

    const handleAnswer = (e) => {
        answeredQuiz[currentQuestion].correct_answer = e.target.value;
        setFormData({...formData, shortAns: e.target.value})
    }
    return (
        <div className=' p-2 '>
            <h4 className=' text-danger' >{question}</h4>
            <input
                placeholder='short answer'
                onChange={handleAnswer}
                className='border-0 rounded mt-2 text-start'
                required
                type="text"
                value={formData.shortAns}
            />
        </div>
    );
};

export default ShortAnswer;