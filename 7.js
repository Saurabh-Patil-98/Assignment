// For React -

// 1) A class and a function component example ( please also use Typescript for
// function component: For example create interface for function Props)
//Class component example:

import React, { Component } from 'react';
import { string } from 'prop-types';

interface Props {
  name: string;
}

class MyComponent1 extends Component<Propss> {
  static propTypes = {
    name: string.isRequired
  }

  render () {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
      </div>
    );
  }
}

export default MyComponent1;


//Function component example:

import React from 'react';
import { string } from 'prop-types';

interface Props {
  name: string;
}

const MyComponent = (props: Props): JSX.Element => (
  <div>
    <h1>Hello {props.name}!</h1>
  </div>
);

MyComponent.propTypes = {
  name: string.isRequired
};

export default MyComponent;

// 2) use hooks to get update regarding any state value into function component.

// 3) Into function component show example for hooks
// (useState,UseEffect,UseCallback, useContext)
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { PersonContext } from './Context';
 
const ExampleFunctionComponent = () => {
  const [name, setName] = useState("Amol");
  const [age, setAge] = useState(25);
  const { personDetails } = useContext(PersonContext);
  const [person, setPerson] = useState(null);
 
  // useEffect is used to recieve personDetails object from context
  useEffect(() => {
    if (personDetails) {
      setPerson(personDetails);
    }
  }, [personDetails]);

  //useCallback
  const handleNameChange = useCallback(
    (newName) => {
      setName(newName);
    },
    [name]
  );

  return (
    <div>
      <h2>{name} - {age}</h2>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
      <button onClick={() => handleNameChange('Saurabh')}>Update Name</button>
      {person && <p>{person.name}, {person.info.city}</p>}
    </div>
  );
};

export default ExampleFunctionComponent;

// 4) create socket IO connectivity with node
npm i socket.io socket.io-client
import openSocket from 'socket.io-client';const socket = openSocket('http://localhost:3000');
socket.on('connect', () => {
  console.log('Connected');
}); 
socket.emit('send-message', {message: 'Hello World'});

socket.on('message-received', (data) => {
  console.log('Message received: ', data);
});

import index from '.index.js'; //... handleSend() {
   index.socket.emit('send-message', {
      message: 'Hello World'
   });
}

// 5) create a Div reference and Using Div reference scroll into Div

class DivScroll extends React.Component {
  constructor() {
    super()

    //Create a Div reference
    this.myDiv = React.createRef();
  }

  componentDidMount() {
    //Using Div reference scroll into Div   
    window.scrollTo(0, this.myDiv.current.offsetTop)
  }
  
  render() {
    return (
      <div ref={this.myDiv}>I will be scrolled into view</div>
    )
  }
}

// 6) Pass Data from 1 component to another component
//In the parent component, you can pass data with React’s props system:

class Parent extends React.Component {
  render() {
    return (
      <Child
        stringProp="Hello World"
        numberProp={3}
      />
    )
  }
}

//Then, in the child component, you can access the data via props.

class Child extends React.Component {
  render() {
    const { stringProp, numberProp } = this.props
    return (
      <div>
        {`This is string prop from parent: ${stringProp}`}
        <br />
        {`This is number prop from parent: ${numberProp}`}
      </div>
    )
  }
}