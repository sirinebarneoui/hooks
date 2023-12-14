import { useState } from 'react';
import './App.css';
import Listemovie from './components/Listemovie';
import Addmovie from './components/Addmovie';
import Navmovie from './components/Navmovie';
import Filtermovie from './components/Filtermovie';

function App() {
  const [movies,setMovies] = useState(
    [
      {title : 'Dachra', description :'Yasmine, étudiante en journalisme, et ses deux amis Walid et Bilel qui cherchent à élucider le mystère d’un vieux crime, commis il y a plus de 25 ans. Au milieu de nulle part, une femme avait été trouvée mutilée et presque morte. Une fois leur investigation terminée, ils vont se trouver dans une forêt où ils allaient découvrir un petit village isolé appelé “Dachra”. Coincé dans ce territoire inconnu, le trio va essayer de fuir l’horreur. Auront-ils réussi à s’échapper ?',posterURL:'https://pictures.artify.tn/media/r9p6ux7liv6q4pxabgwi.jpg?width=200',rating : 5, id : Math.random()},
      {title : 'Rebelote', description :'C’est l’histoire de trois tunisiens que rien ne les relie dans la vie quotidienne à part le fait qu’ils sont accros à la drague via Facebook. Un jour ils tombent dans le piège d’une femme qui leur donne rendez-vous dans un endroit retiré et les braque avec l’aide d’un gang. Et c’est là qu’un phénomène surnaturel se produit et nos trois personnages se retrouvent sans le savoir projetés dans le passé…',posterURL:'https://pictures.artify.tn/media/ezxhsrwyexyglmoitxlh.jpg?width=200',rating : 3, id : Math.random()},
      {title : 'Noce d’été', description :'Hamid est journaliste, la trentaine passée et il vit son célibat avec sa famille petite bourgeoise comme un échappatoire pour ne pas ressembler aux siens. Sa famille veut le marier à tout prix avec sa voisine Rym (30 ans) pour mettre fin à ses hésitations, et aux mauvaises langues qui n’épargnent pas les célibataires endurcis. N’osant s’opposer à la décision de mariage de sa famille, Hamid préfère fuir l’atmosphère des préparatifs…',posterURL:'https://pictures.artify.tn/media/zhkfzolegpiij9rzf3ui.jpg?width=200',rating : 1, id : Math.random()}]
  )
  const [titre,setTitre]=useState('')
  const [rate, setRate]=useState(0)

      return (
    <div> 
      <Navmovie/>
      <div className='top'>
      <Filtermovie titre={titre} setTitre={setTitre} rate={rate} setRate={setRate} />
    <Addmovie movies={movies} setMovies={setMovies}/>
    </div>
    <Listemovie movies={movies} rate={rate} titre={titre}/>

    </div>
  );
}

export default App;
