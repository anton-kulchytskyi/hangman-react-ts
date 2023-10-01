import { useState, useCallback, useEffect } from 'react';
import { getRandomWord } from './utils/getRandomWord';
import { checkCh } from './utils/checkCh';

import { Loader } from './components/Loader';
import { Gallows } from './components/Gallows';
import { WordToGuess } from './components/WordToGuess';
import { Alphabet } from './components/Alphabet';

import './App.scss';

export const App: React.FC = () => {
  const [loader, setLoader] = useState(true);
  const [wordToGuess, setWordToGuess] = useState<string[]>([]);
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

  const numberOfGuesses = guessedLetters.filter(
    (letter: string) => !checkCh(wordToGuess, letter),
  ).length;

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (checkCh(guessedLetters, letter)) {
        return;
      }

      setGuessedLetters((currLetters) => [...currLetters, letter]);
    },
    [guessedLetters],
  );

  const isActive = (letter: string) => checkCh(wordToGuess, letter)
    && checkCh(guessedLetters, letter);

  const isMissing = (letter: string) => !checkCh(wordToGuess, letter)
    && checkCh(guessedLetters, letter);

  const isLose = numberOfGuesses >= 6;
  const isWin = wordToGuess.every((letter) => checkCh(guessedLetters, letter));

  return (
    <div className="App">
      {loader ? (
        <Loader />
      ) : (
        <>
          <Gallows numberOfGuesses={numberOfGuesses} />
          <WordToGuess
            wordToGuess={wordToGuess}
            hint={hint}
            guessedLetters={guessedLetters}
            isLose={isLose}
            isWin={isWin}
          />
          <Alphabet
            addGuessedLetter={addGuessedLetter}
            guessedLetters={guessedLetters}
            isActive={isActive}
            isMissing={isMissing}
            isLose={isLose}
            isWin={isWin}
          />
        </>
      )}
    </div>
  );
};
