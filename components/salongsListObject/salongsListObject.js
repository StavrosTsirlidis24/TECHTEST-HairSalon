import React from 'react';
import * as Style from './styleSalongsListObject';
import Link from 'next/link';
import Stars from '../stars/stars'
let SalongsListObject = props =>{
    let {open,name,adress,price,id,votes,stars,threatTime} = props;

    const spanStyleAdress = {
        fontSize:'4vw',
        color:'grey'
    };
    
    return(
            //Linking to salong page where we get salong depending of id, see pages/salong/[id].js
             <Link href="/salong/[id]" as={`/salong/${id}`}>                    
             <Style.container>

                        <Style.leftColumn><span>{open}</span></Style.leftColumn>

                        <Style.middleColumn>
                            <span>{name}</span>
                            <Stars votes = {votes} stars={stars} />
                            <p style={spanStyleAdress} >{adress.slice(0,-18)}</p>  
                        </Style.middleColumn>

                        <Style.rightColumn>
                            <span>{price +" kr"}</span>
                            <p>{threatTime}</p>
                        </Style.rightColumn>

                        <Style.arrowColumn><i className="fas fa-chevron-right"></i></Style.arrowColumn>
                 
                    </Style.container>
                    </Link>
            
    );
}


export default SalongsListObject;


