import { useState } from 'react';
import './contact.css'
export default function Footer() {
    const [showEmail, setShowEmail] = useState(false);
  
    const toggleContact = (contactType) => {
      if (contactType === 'email') {
        setShowEmail(!showEmail);
        // setShowPhone(false); 
      };

    }
    return (
        <footer className="p-4">
          <div className="logos d-flex justify-content-center">
              <img 
                src="envelope.png" 
                alt="email logo" 
                onClick={() => toggleContact('email')}  
              />
            <a href="https://github.com/MahabaHubba" target="_blank" title="Github"  rel="noreferrer">
              <img src="github.png" alt="github logo" />
            </a>
            <a href="https://www.instagram.com/mahabahubba/" target="_blank"  title="Instagram" rel="noreferrer">
              <img src="instagram.png" alt="instagram logo" />
            </a>
            <a href="https://www.linkedin.com/in/mohibul-haque-14782020b/" target="_blank"  title="LinkedIn" rel="noreferrer">
              <img src="linkedin.png" alt="linkedin logo" />
            </a>
          </div>
    
          {showEmail && (
            <div className="d-flex justify-content-center mt-2">
              <div className="contact-details text-center p-2 shadow">
                <p className="m-0 text-dark">Email: mohibul.haque3000@gmail.com</p>
              </div>
            </div>
          )}
        </footer>
)};