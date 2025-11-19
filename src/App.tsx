import { useEffect } from 'react';
import * as en from './lang/en-us.json';
import './App.css';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';
import TopNav from './components/TopNav';

function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 400, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);


  useEffect(() => {
    document.title = en.title;
  });

  return (
    <main>
      <TopNav />
      <h1 className='title-main'>{en.title}</h1>
      <p className='phrase'>{en.welcome_message}</p>

      <motion.div 
        className='moving-container'
        style={{
          position: 'fixed',
          top: -250,
          left: -250,
          translateX: useMotionTemplate`${smoothX}px`,
          translateY: useMotionTemplate`${smoothY}px`,
        }}
      >
      </motion.div>
    </main>
  );
}

export default App;
