import { useState, useCallback, useEffect } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { getRandomWord } from './utils/getRandomWord';

import { Loader } from './components/Loader';
import { Gallows } from './components/Gallows';
// import { DrawHangman } from './components/DrawHangman';
import { WordToGuess } from './components/WordToGuess';
import { Alphabet } from './components/Alphabet';

import './App.scss';

export const App: React.FC = () => {
  const [loader, setLoader] = useState(true);
  const [wordToGuess, setWordToGuess] = useState<string>('');
  const [hint, setHint] = useState<string>('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const fetch = useCallback(async () => {
    const { word, definition } = await getRandomWord();

    setWordToGuess(word);
    setHint(definition);
    setLoader(false);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) {
        return;
      }

      setGuessedLetters(currLetters => [...currLetters, letter]);
    },
    [guessedLetters],
  );

  return (
    <div className="App">
      {loader
        ? (<Loader />) : (
          <>
            <Gallows />
            <WordToGuess
              wordToGuess={wordToGuess}
              hint={hint}
              guessedLetters={guessedLetters}
            />
            <Alphabet addGuessedLetter={addGuessedLetter} />
          </>
        )}
    </div>
  );
};

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
