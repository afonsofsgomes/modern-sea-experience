
import React, { useEffect } from 'react';

interface TallyScriptProps {
  formId?: string;
}

const TallyScript: React.FC<TallyScriptProps> = ({ formId = 'wLYLZ2' }) => {
  useEffect(() => {
    // Check if Tally is already loaded
    if (window.Tally) {
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tally.so/widgets/embed.js';
    
    // Add script to document
    document.body.appendChild(script);
    
    // Load Tally when script is ready
    script.onload = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    
    // Clean up on unmount
    return () => {
      // Only remove if it's the script we added
      const tallyscript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (tallyscript) {
        document.body.removeChild(tallyscript);
      }
      
      // Remove Tally from window
      if (window.Tally) {
        delete window.Tally;
      }
    };
  }, []);
  
  // Add interactive popup form when button with data-tally-open attribute is clicked
  useEffect(() => {
    // Function to handle button clicks for Tally popup
    const handleTallyPopup = () => {
      const buttons = document.querySelectorAll('[data-tally-open]');
      
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          
          // Delay to ensure Tally is loaded
          window.setTimeout(() => {
            if (window.Tally && window.Tally.open) {
              const formId = button.getAttribute('data-tally-open') || 'wLYLZ2';
              window.Tally.open(formId);
            }
          }, 300);
        });
      });
    };
    
    // Wait for DOM to be fully loaded
    if (document.readyState === 'complete') {
      handleTallyPopup();
    } else {
      window.addEventListener('load', handleTallyPopup);
    }
    
    return () => {
      window.removeEventListener('load', handleTallyPopup);
    };
  }, []);
  
  return null;
};

// Note: We've removed the duplicate global declaration as it's now in vite-env.d.ts

export default TallyScript;
