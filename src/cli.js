import readlineSync from 'readline-sync';

const hi = () => {
  console.log('Welcome to the brain-games');
  const name = readlineSync.question('What`s your name? ');
  return (`hello ${name}`);
};
export default hi;