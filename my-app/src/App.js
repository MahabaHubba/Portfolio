import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import { useRef } from 'react';
import ParagraphSections from './Sections/aboutmesection';
import ImageSlider from './Sections/portfolio';

//Section for about me
const sections = [
  "Hello my name is Mohibul Haque and welcome to my site",
  "I'm a software engineer with one year of  software developing experience. I have a strong passion for transforming ideas into functional and user-friendly solutions. Throughout my career, I've collaborated with cross-functional teams and gained valuable insights into the ever-evolving software industry. ",
  "My experience as an exercise physiologist has enabled me to work in a fast-paced environment, and collaborate effectively in a term environment to save time, money for my clients to reach their desired goal.",
  "Continue down below to see what I'm about and if you have any questions, queries or concerns, please don't hesitate to contact me"
];


const images = [
  { src: 'ichooseyou.png',
    title: 'Agile Framework',
    description:"HTML, CSS-Tailwind, JS",
    url: "https://github.com/AdamIsitmez/I-Choose-You" },
  { src: 'wagerless.png',
    title: 'MVC Framework',
    description: "HTML, CSS-Bootstrap,JS-Handlebar, Node.js, MySQL, Bycrypt.js, Heroku",
    url: "https://github.com/Y1va/Wagerless"},
  { src: 'Mongo.jpg', title: 'MERN Fullstack', description: "React, GraphQL, Node.js, MongoDB, JWT Authentication, Render", url: "https://github.com/BrxwnSugxr/MindOverMatter" },
];

//Section for navLink
function App() {
  const aboutRef = useRef(null);
  const pastWorkRef = useRef(null);
  const hobbiesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behaviour: 'smooth'
    });
  };

  
  return (
    //Overall Container
    <div className="container gradient-bg">
   
    <div className="row ">
    <Navbar className='navbarbackground' expand="lg">
        <Navbar className="navbarname">Mohibul Haque</Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className='nav-link-bounce' onClick={() => scrollToRef(aboutRef)}>About Me</Nav.Link>
            <Nav.Link className='nav-link-bounce' onClick={() => scrollToRef(pastWorkRef)}>Past Work</Nav.Link>
            <Nav.Link className='nav-link-bounce' onClick={() => scrollToRef(hobbiesRef)}>Hobbies</Nav.Link>
            <Nav.Link className='nav-link-bounce' onClick={() => scrollToRef(contactRef)}>Contact Me</Nav.Link>
            <Nav.Link className='nav-link-bounce navlinkpokemon'>E</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    <div className="col-12 welcome">
      <p className='pokemonpixel'>N</p>
    <h5 className="text-center welcometext bouncing-text"> Welcome </h5>
    <p className='pokemonpixel2'>O</p>
    </div>

    <div class="row" ref={aboutRef}>
  <div class="col-md-4 aboutme1">About Me</div>
  <div class="col-md-8 aboutmesegment">
  <ParagraphSections sections={sections} />
  </div>
</div>

    <div class="row" ref={pastWorkRef}>
    <div class="col-md-4 portfolio">Portfolio</div>
  <div class="col-md-8 portfolio">
  <ImageSlider images={images} />
  </div>
</div>

<div class="row" ref={hobbiesRef}>
  <div class="col-md-4 portfolio">Powerlifting</div>
  <div class="col-md-8 portfolio">Hobbies</div>
</div>

<div class="row" ref={contactRef}>
  <div class="col-md-4 contact1">Contact Me</div>
  <div class="col-md-8 contacticon">Icons</div>
</div>

  </div>
</div>
  );

  
}

export default App;
