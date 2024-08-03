import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


//Currently is able to come one by one in terms of letters however there is some error
// import React, { useState, useEffect } from 'react';

// const TextReveal = () => {
//   const [displayedText, setDisplayedText] = useState('');
//   const fullText = 'Welcome';

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < fullText.length) {
//         setDisplayedText((prev) => prev + fullText[index]);
//         index += 1;
//       } else {
//         clearInterval(interval);
//       }
//     }, 100);
//     return () => clearInterval(interval);
//   }, [fullText]);

//   return <span>{displayedText}</span>;
// };

function App() {
  return (
    //Overall Container
    <div className="container gradient-bg">
   
    <div className="row ">
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">MySite</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    <div className="col-12 welcome">
    <h5 className="text-center welcometext bouncing-text"> Welcome </h5> 
    </div>

    <div class="row">
  <div class="col-md-4 aboutme1">About Me</div>
  <div class="col-md-8 aboutmesegment">Little segements</div>
</div>

    <div class="row">
  <div class="col-md-8 portfolio">Dashes</div>
  <div class="col-md-4 portfolio">Portfolio</div>
</div>

<div class="row">
  <div class="col-md-4 contact1">Contact Me</div>
  <div class="col-md-8 contacticon">Icons</div>
</div>

  </div>
</div>
    // <div className="gradient-bg">
    //   <div className="container mt-5">
    //     <div className="row justify-content-between">
    //       <div className="boxborder bg-light border mb-4">
    //         <h5 className="text-center"> Welcome </h5> 
    //       </div>   
    //     </div>
    //   </div>
    // </div>
  );

  
}

export default App;
