import * as Style from './starsStyle';

const Stars = (props) => { 
let {votes,stars} = props;

//return golden stars depending of the stars it gets from props, filles the rest up to 5 stars with white stars
const starGenerator = () =>{
     let starsArray = [];
     for(let i=0;i<5;i++){
          if (i<stars)
               {
                    starsArray.push(<i className="fas fa-star" key={i}/>)
               }
          else
               {
                    starsArray.push(<i className="far fa-star" key={i}/>)
               }
     }
     return (starsArray)
}
 
return(
     
          <Style.starCollection>
               {starGenerator()}
               <p>({votes})</p>
          </Style.starCollection>
     )
}

export default Stars