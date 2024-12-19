import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Music } from 'lucide-react';

export const LoginSuccess: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <Music className="w-16 h-16 text-green-500 mx-auto" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Login Successful!</h1>
        <p className="text-gray-600 mb-8">You're now connected to Spotify</p>
        <button
          onClick={handleContinue}
          className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
        >
          Continue to Game
        </button>
      </div>
    </div>
  );
};