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
    <div className="gradient-bg">
      <div className="container mt-5">
        <div className="row justify-content-between">
          <div className="boxborder bg-light border mb-4">
            <h5 className="text-center"> Welcome </h5> 
          </div>   
        </div>
      </div>
    </div>
  );
}

export default App;
