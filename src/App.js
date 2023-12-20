import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container, Nav, Navbar } from 'react-bootstrap';
import AboutComponent from './components/about.component';
import SkillsComponent from './components/skills.component';
import WorkComponent from './components/work.component';
import EducationComponent from './components/education.component';

function App() {  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary font-lg-text" fixed='top'>
        <Container className='mr-0 float-right'>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end" style={{ width: "100%" }}>
              <Nav.Link className='px-3' href="#skills">Skills</Nav.Link>
              <Nav.Link className='px-3' href="#experience">Experience</Nav.Link>
              <Nav.Link className='px-3' href="#education">Education</Nav.Link>
              <Nav.Link className='px-3' href="file/Vaishnavi_Jayapalan_Latest_Resume.pdf" target='_blank'>Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='container font-tm mt-100'>
          <AboutComponent />
          <hr className='mt-5'></hr>
          <SkillsComponent />
          <hr className='mt-5'></hr>
          <WorkComponent />
          <hr className='mt-5'></hr>
          <EducationComponent />
          <hr className='mt-5'></hr>
      </div>
    </>
  );
}

export default App;
