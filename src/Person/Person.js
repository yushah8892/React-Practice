import React from 'react';
import './Person.css';
//import Redium from 'radium';
import styled from 'styled-components';

const person = (props) =>{

    // const style = {
    //     '@media( min-width:500px)':{
    //         width:'450px'
    //     }
    // }
    const DivStyled = styled.div`  
        width: 60%;
        margin: 16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;
        @media( min-width:500px){
            width:450px
        } 
    `;
    return (
            <DivStyled>
        {/* // <div className="Person" style={style}> */}
            <p onClick={props.click}> I'm a {props.name} and i am {props.age} years old!!</p>
            <input type="text" onChange={props.changed} value={props.name} />

            <p>{props.children}</p>
           
        {/* // </div> */}
        </DivStyled>
        
    );
}

//export default Redium(person);
export default person;