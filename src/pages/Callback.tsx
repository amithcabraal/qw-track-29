import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessTokenFromHash, saveAccessToken } from '../utils/auth';

export const Callback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the URL hash immediately to prevent token exposure
    window.history.replaceState({}, document.title, window.location.pathname);
    
    const token = getAccessTokenFromHash();
    if (token) {
      saveAccessToken(token);
      // Force a small delay to ensure token is saved before navigation
      setTimeout(() => {
        navigate('/login-success', { replace: true });
      }, 100);
    } else {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-500 border-t-transparent"></div>
    </div>
  );
};
