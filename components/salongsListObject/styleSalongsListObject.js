import Styled from 'styled-components';

export const container = Styled.div `
display:flex;
flex-direction:row;
background-color:white;
margin:10px 0px 0px 0px;
padding-bottom:10px;
border-bottom:1px solid #f5f5f5;


a{
    text-decoration:none;
    color:black;

}
`
export const leftColumn = Styled.div `
display:flex;
width:15vw;
flex-direction:row;
justify-content:center;
background-color:white;
margin:2px 5px 0px 5px;
font-size:4vw;

`
export const middleColumn = Styled.div `
display:flex;
width:53vw;
margin:0px 15px 0px 5px;
flex-direction:column;
background-color:white;
justify-content:space-between;
p{
    margin:0px;
    
}
span{
    font-family: 'MyWebFont';
    margin:0px 0px 10px 0px;
    font-size:6vw;
    color:black;
}
`
export const rightColumn = Styled.div `
display:flex;
width:22vw;
flex-direction:column;
align-items:flex-end;
margin:5px 5px 0px 5px;
background-color:white;
font-size:3.5vw;
p{color:grey}
`

export const arrowColumn = Styled.div `
display:flex;
width:10vw;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:white;
color:#cca300;
i{
    font-size:4vw;
}
`
