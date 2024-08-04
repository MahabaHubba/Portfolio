import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';


function App() {
  return (
    //Overall Container
    <div className="container gradient-bg">
   
    <div className="row ">
    <Navbar className='navbarbackground' expand="lg">
        <Navbar className="navbarname">Mohibul Haque</Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className='nav-link-bounce'>About Me</Nav.Link>
            <Nav.Link className='nav-link-bounce'>Past Work</Nav.Link>
            <Nav.Link className='nav-link-bounce'>Contact Me</Nav.Link>
           
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
