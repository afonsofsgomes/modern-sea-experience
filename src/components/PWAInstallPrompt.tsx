
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
};

export const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    // Store the install prompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if the app is already installed
    window.addEventListener('appinstalled', () => {
      setIsInstallable(false);
      setDeferredPrompt(null);
      toast({
        title: "App Installed",
        description: "SeaYou Madeira has been successfully installed on your device!",
        duration: 5000
      });
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // Handle the install button click
  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    await deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;
    
    if (choiceResult.outcome === 'accepted') {
      toast({
        title: "Installation Started",
        description: "SeaYou Madeira is being installed on your device.",
        duration: 3000
      });
    } else {
      toast({
        title: "Installation Declined",
        description: "You can always install our app later from the browser menu.",
        duration: 3000
      });
    }

    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  // Show install button only if the app can be installed
  if (!isInstallable) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <Button
        onClick={handleInstallClick}
        className="shadow-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Install App
      </Button>
    </div>
  );
};

export default PWAInstallPrompt;
