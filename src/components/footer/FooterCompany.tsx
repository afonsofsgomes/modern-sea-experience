
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CareersModal } from "@/components/CareersModal";

export const FooterCompany: React.FC = () => {
  const [showCareersModal, setShowCareersModal] = useState(false);

  return (
    <div>
      <h3 className="font-medium text-lg mb-4">Company</h3>
      <ul className="space-y-3">
        <li>
          <button
            onClick={() => setShowCareersModal(true)}
            className="text-muted-foreground hover:text-foreground transition-colors text-left"
          >
            Careers
          </button>
        </li>
        <li>
          <Link
            to="/privacy-policy"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            to="/terms"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms & Conditions
          </Link>
        </li>
      </ul>
      
      {/* Careers Modal */}
      <CareersModal 
        isOpen={showCareersModal} 
        onOpenChange={setShowCareersModal} 
      />
    </div>
  );
};
