import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import { useRef } from 'react';
import ParagraphSections from './Sections/aboutmesection';
import ImageSlider from './Sections/portfolio';
import HobbiesSlider from './Sections/hobbies';
import Footer from './Sections/contact';
//Section for about me
const sections = [
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

//Section for Hobbies
const hobbiesimage = [
  {src: "Japan.JPG", title: "Japan Trip", description: "Exploring light show at Team Lab Tokyo "}, 
  {src: "Lifting.JPG", title: "Powerlifting", description: "Prepping to compete soon"},
  {src: "Food.PNG", description: "My first time trying somalian mandi"},
  {src: "Party.JPG", description: "Who doesn't like to dance?"}
  
]

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
  <div class="col-md-4 aboutme1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop:'30px' }}>
  <p>About Me</p>
    <p className='portfoliocontent'> Hello my name is Mohibul Haque and welcome to my site</p>
    <p className='pokemonpixel3 nav-link-bounce'>s</p>
  </div>
  <div class="col-md-8 aboutmesegment">
  <ParagraphSections sections={sections} />
  </div>
</div>

    <div className="row portfolio" ref={pastWorkRef}>
    <div className="col-md-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <p>Portfolio</p>
    <p className='portfoliocontent'> Slide scross to see some projects I've made using various technologies as I've gathered more knowledge</p>
    <p className='pokemonpixel3 nav-link-bounce'>Y</p>
      </div>
  <div class="col-md-8 portfolio">
  <ImageSlider images={images} />
  </div>
</div>

<div className="row portfolio" ref={hobbiesRef}>
  <div className="col-md-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <p>Hobbies</p>
    <p className='portfoliocontent'>Same as anyone else, I have a special interest in travelling, powerlifting, eating and partying</p>
    <p className='pokemonpixel3 nav-link-bounce'>i</p>
  </div>
  <div className="col-md-8 portfolio">
    <HobbiesSlider hobbiesimage={hobbiesimage} />
  </div>
</div>


{/* Technicall skill section */}
<div class="row ">
<div class="col-12 welcome" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:"0px"}}>
  <p className='pokemonpixelC' style={{ marginRight:'10px' }}>S</p>
  <h6 className='technicalskilltext'>Technical Skills</h6>
  <p className='pokemonpixelC' style={{ marginLeft:'10px' }}>G</p>
</div>
<p className='technicalskillcontent'style={{ marginTop: '-25px' }}>Some of the technical skills which I've picked up on during my career.</p>

</div>
<div className="row justify-content-center mx-auto">

<div className="col-md-4 technicalborder technicalbox boxjump">
<p>HTML</p>
</div>

<div className="col-md-4 technicalborder boxjump">
<p>CSS</p>
</div>

</div>
<div className="row justify-content-center mx-auto">

<div className="col-md-4 technicalborder boxjump">
<p>JavaScript</p>
</div>

<div className="col-md-4 technicalborder boxjump">
<p>MongoDB</p>
</div>

</div>
<div className="row justify-content-center mx-auto">

<div className="col-md-4 technicalborder boxjump">
<p>GraphQL</p>
</div>

<div className="col-md-4 technicalborder boxjump">
<p>Apollo Server</p>
</div>

</div>
<div className="row justify-content-center mx-auto">

<div className="col-md-4 technicalborder boxjump">
<p>React</p>
</div>

<div className="col-md-4 technicalborder boxjump">
<p>AWS</p>
</div>

</div>



{/* Contact Me section */}
<div className="row contactbox" ref={contactRef}>
  <div class="col-12 welcome" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "20px" }}>
    <p className='pokemonpixelC' style={{ marginRight:'10px' }}>M</p>
    <h6 className='technicalskilltext'>Contact Me</h6>
    <p className='pokemonpixelC' style={{ marginLeft:'10px' }}>7</p>
  </div>
  <p className='technicalskillcontent'style={{ marginTop: '-25px' }}>If you have any question queries or concerns, please don't hesitate to contact througuh my socials.</p>
  <Footer/>
</div>

  </div>
</div>
  );

  
}

export default App;
