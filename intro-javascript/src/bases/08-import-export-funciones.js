//console.log('??')
//import  {heroes} from './data/heroes';
import  {heroes, owners} from '../data/heroes';
console.log(heroes);

const getHeroeById  = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(2))

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
console.log(getHeroesByOwner('DC'))