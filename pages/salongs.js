import {useState} from 'react';
import Layout from '../components/layout'
import salongData from '../data/salongData.json';
import * as Style from '../style/styleSalongs';
import SalongsListObject from '../components/salongsListObject/salongsListObject'

const Salongs = (props) =>{

    
    const dotsStyle ={
        fontSize: '6vw',
        paddingTop:'1.5vh'
    };

    //Uses the hook and the function below to change the filter price, depeding of price,number of salons is displayed.
    const [filterPrice, setFilterPrice] = useState('150-450');

    const onChangeHandler = (event) =>{
        setFilterPrice(event.target.value);
    }



    
return (
    <Layout>
    <Style.container>
    
            <Style.header>
           
            
                <Style.topHeader>
                    <i className="fas fa-angle-left"></i> <p>Hår</p><i style={dotsStyle} className="fas fa-ellipsis-v"></i>
                </Style.topHeader>

                <Style.filterHeader>
                    <select onChange={onChangeHandler}>
                        <option value="150-450">Pris Alla</option>
                        <option value="150-250">Pris 150-250 kr</option>
                        <option value="250-350">Pris 250-350 kr</option>
                        <option value="350-450">Pris 350-450 kr</option>
                    </select>
                </Style.filterHeader>

            </Style.header>
            
            <Style.main>
                {/* Printing out a list with salons with unique id */}
                {props.salongs.map(element =>{ 
                        if(element.price === filterPrice){
                            return <SalongsListObject key={element.id} {...element}/>
                        
                        }
                        else if(filterPrice === "150-450"){
                            return <SalongsListObject key={element.id} {...element}/>
                        }
                        
                    })
                }
            </Style.main>
            
        </Style.container>

        </Layout>
    
)
 

}

//feeds data from the imported local salongData.json file to the Salongs component like props
Salongs.getInitialProps = () => {
    return {
      salongs: salongData
    }
  }

export default Salongs