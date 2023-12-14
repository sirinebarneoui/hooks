import Cardmovie from "./Cardmovie";
const Listemovie=({titre,movies, rate})=>{
    var x= movies.filter((el,i,t)=> el.title.toUpperCase().includes(titre.toUpperCase()) && el.rating>= rate)

    return(

    <div className="lol">
     {
       x.length === 0 ? <h1>Movies Not found</h1> : x.map((el,i,t)=> <Cardmovie el={el}/>)
     }
    </div>
    )
}
export default Listemovie;