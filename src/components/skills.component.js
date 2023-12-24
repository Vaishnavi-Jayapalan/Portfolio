import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';

function SkillsComponent() {
    const [skills, setSkills] = useState({});

    useEffect(() => {
        setSkills({
            'topSkills': [{
                data: 'React, Redux',
                value: '80'
            }, {
                data: 'PHP(Symfony), Python(Django)',
                value: '85'
            }, {
                data: 'NodeJS(Express JS)',
                value: '60'
            }, {
                data: 'MySQL, Postgres, MongoDB', 
                value: '90'
            }],
            'others' : ['HTML5', 'CSS3/SCSS', 'Javascript', 'Typescript', 'API(REST & SOAP)', 'Github', 'Azure', 'ASW S3', 'GCP', 'Kafka', 'Microservices', 'Docker', 'Unit Testing', 'CI/CD Pipeline']
        })
    }, [])

    return ( 
        <div className='row mt-5' id='skills'>
            <h1 className='float-left fw-bold'>SKILLS</h1>
            <h3 className='text-center fw-bold mt-2 color-grey pb-5'>TOP SKILLS</h3>
            {skills && skills?.topSkills?.map((skill, i) => {
                return (
                    <div  key={i}>
                    <div className='col p-2'>
                        <p className='font-md-text cl-lg-drk-gry'>{skill.data}</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{"width": `${skill.value}%`}} aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100">{skill.value}%</div>
                        </div>
                    </div>
                    {i===1 && <div className="w-100 p-2"></div>}
                    </div>
                );
            })}
            <h3 className='text-center fw-bold mt-5 color-grey pt-5 pb-5'>OTHER SKILLS</h3>
            <div className='row'>
            <div className='col text-center'>
                {skills && skills?.others?.map((value, i) => {
                    return <span className='font-lg-text pr-20' key={i}><Badge bg='light' text="dark">{value}</Badge></span>
                })}
            </div>
            </div>
        </div>
    );
}

export default SkillsComponent;