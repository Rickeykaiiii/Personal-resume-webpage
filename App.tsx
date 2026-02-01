
import React from 'react';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      <main className="w-full h-screen">
        <Home />
      </main>
    </div>
  );
};

export default App;
