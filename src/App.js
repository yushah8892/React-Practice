import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import Redium,{StyleRoot} from 'radium';
import styled from 'styled-components';


const ButtonStyled = styled.button`
background-color : ${props => (props.alt1) ? 'red' : 'green'};
font:inherit;
color:white;
border:1px solid blue;
padding:8px;
cursor:pointer;
&:hover{
  background-color:${props => (props.alt1) ? 'salmon' : 'lightgreen'};
  color:black;
}
`;

class App extends Component {

  
    state = {
      persons :[
        {id : '1a',name:'Yash',age:28},
        {id : '2b',name:'khushbu',age: 25},
        {id : '3c',name:'Sunny',age: 26}
      ],
      showPerson :false

    }

 deletePersonhandler =(index) =>{
  // const persons = this.state.persons; //it will change to original state of application
  const persons = [...this.state.persons ] //create a copy of original and then change state 
   persons.splice(index,1)
   this.setState({persons:persons});

 }

  nameChangehandler = (event,id) => {
    console.log('name change handler')
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id
      })
      console.log(personIndex)
      const person = {
        ...this.state.persons[personIndex]
      }
      console.log('person',person)
      person.name = event.target.value;
      const persons = [...this.state.persons ] 
      persons[personIndex] = person;
      this.setState({persons:persons});

  }

  togglePersonhandler = ()=>{
      const doesShow = this.state.showPerson;
      this.setState({showPerson: !doesShow})
  }
  render() {
 
    // const style = {
    //   backgroundColor : 'green',
    //   font:'inherit',
    //   color:'white',
    //   border:'1px solid blue',
    //   padding:'8px',
    //   cursor:'pointer',
    //   ':hover':{
    //     backgroundColor:'lightgreen',
    //     color:'black'
    //   }
    // };

    let persons = null;
    if(this.state.showPerson){

      persons = (
        <div >
        {
        this.state.persons.map((person,index) => {
          return <Person key={person.id}
          name={person.name} 
          age={person.age}
          click={this.deletePersonhandler.bind(this,index)}
          changed = {(event) => this.nameChangehandler(event,person.id)}
          >
          </Person>
        })

        }

        </div>
      )
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor:'salmon',
      //   color:'black'
      // }


    }

    let classes = [];
    if(this.state.persons.length <=2 ){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }


    return (
      // <StyleRoot>
      <div className="App">
       <h1>Hello to React App Development</h1>
       <p className={classes.join(' ')}>This is really working !!!</p>
       <ButtonStyled alt1={this.state.showPerson}
       onClick={this.togglePersonhandler}>Toggle Person</ButtonStyled>
       {persons}
      </div>
      // </StyleRoot>
    );

//    return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I am a react App!!!'));
  }
}

//export default Redium(App);

export default App;
