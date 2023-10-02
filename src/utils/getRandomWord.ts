import { generate } from 'random-words';
import axios from 'axios';

const randomWord = generate({ minLength: 4, maxLength: 9 });
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`;

function loader(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getRandomWord() {
  await loader(1000);

  return axios.get(url)
    .then(res => {
      if (res.status !== 200) {
        throw new Error(`${res.status} - ${res.statusText}`);
      }

      const word = res.data[0].word.toUpperCase().split('');
      const { definition } = res.data[0].meanings[0].definitions[0];

      return {
        word,
        definition,
      };
    });
}
