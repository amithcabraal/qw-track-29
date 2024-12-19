import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStoredAccessToken, removeAccessToken } from '../utils/auth';

export const useSpotify = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getStoredAccessToken();
    if (token) {
      setIsInitialized(true);
    } else {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  const signOut = () => {
    removeAccessToken();
    setIsInitialized(false);
    navigate('/login', { replace: true });
  };

  return {
    isInitialized,
    signOut
  };
};