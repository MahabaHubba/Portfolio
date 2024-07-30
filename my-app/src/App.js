import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div class="container gradient-bg">
   
    <div class="row ">
      
    <div class="col-12 welcome">
    <h5 className="text-center"> Welcome </h5> 
    </div>

    <div class="row">
  <div class="col-md-4">Portfolio</div>
  <div class="col-md-8">Little segements</div>
</div>

    <div class="row">
  <div class="col-md-8">Blah Blah Blah</div>
  <div class="col-md-4">About Me</div>
</div>

<div class="row">
  <div class="col-md-4">Conact Me</div>
  <div class="col-md-8">Icons</div>
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
