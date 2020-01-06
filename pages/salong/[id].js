import {get} from 'lodash/fp';
import Layout from '../../components/layout'
import Link from 'next/link';
import * as Style from '../../style/styleSalong';
import salongData from '../../data/salongData.json';
import Stars from '../../components/stars/stars';
const Salong = (props) =>{
const {name,webadress,adress,phone,close,votes,stars,description} = props.salongData;
const heartStyle ={
    fontSize: '6vw',
    paddingTop:'10px'
};
const arrowDown ={
    color: '#cca300'
};
    return (
        <Layout>
        
                <Style.container>
                
                    <Style.header>

                        <Style.topHeader>
                                <Link href="/salongs"><i className="fas fa-angle-left"></i></Link> 
                                <i style={heartStyle}  className="far fa-heart"></i>
                        </Style.topHeader>

                        <Style.bottomHeader>
                                <p>{name}</p>  
                                <Style.starCollection>
                                    <Stars stars={stars} votes={votes}/>
                                </Style.starCollection>
                        </Style.bottomHeader>    

                    </Style.header>

                    <Style.middleNav>
                        <Style.infoButton>Info</Style.infoButton>
                        <Style.schemaButton>Schema</Style.schemaButton>
                    </Style.middleNav>

                <Style.main>
                    
                    <span><i className="fas fa-map-marker-alt"></i>{adress}</span> 
                    <span><i className="fas fa-clock"></i>{"Öppet till "} {close} {" idag "} <i style={arrowDown} className="fas fa-angle-down"></i></span> 
                    <span><i className="fas fa-phone-alt"></i>{phone}</span> 
                    <span><i className="fas fa-globe"></i>{webadress}</span> 
                    <p>{description}</p>
                    
                </Style.main>
                
                </Style.container>  
        </Layout>      
    )
   
}

//feeds the Salong component with right data from salongData by checking the wich is the current salongId 
Salong.getInitialProps = (ctx) =>{
    
const salongId = ctx.query.id;

    return { salongData: get(salongId,salongData) }
}
export default Salong