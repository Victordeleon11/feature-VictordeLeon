import React, { useEffect, useState } from 'react';
import './App.css';
import CreateStudent from './components/CreateStudent';
import ListStudents from './components/ListStudents';

function App() {
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className={`header ${isTransparent ? 'transparent' : ''}`}>
        <h1 className="text-center text-4xl font-bold">Gestión de Alumnos</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <CreateStudent />
        <ListStudents />
      </main>
    </div>
  );
}

export default App;