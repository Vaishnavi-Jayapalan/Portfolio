import React, { useEffect, useState } from 'react';

function EducationComponent(props) {
    const [education, setEducation] = useState([])
    useEffect(() => {
        setEducation([
            {
                course: 'Artificial Intelligence PGDM',
                college: 'Georgian College',
                city: 'Barrie, ON',
                year: '2022-2023'
            }, {
                course: `Bachelor's of Computer Science`,
                college: 'AIHT College',
                city: 'Chennai, India',
                year: '2014-2018'
        }])
    }, []);

    return(
        <div className='row mt-5' id='education'>
            <h1 className='float-left fw-bold'>EDUCATION</h1>
            <ul className='ml-5-rem font-md-text color-lg-blk '>
                {education?.map((data) => {
                    return (
                        <li className='pb-2'>
                            <h3 className='fw-bold mt-2 cl-lg-drk-gry pb-2'>{data.course} - {data.college}, {data.city}</h3>
                            <p className='color-grey font-md-text'>{data.year}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default EducationComponent;