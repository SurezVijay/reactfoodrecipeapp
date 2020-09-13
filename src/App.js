import React from 'react';
import './App.css';
// import ClassComponent from './ClassComponent';
// import FunctionalComponent from './functionalComponent';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends React.Component { 
  render(){
    // const courses = ["React", "Angular", "Vue"];
    // const courseName = courses.map(name=> {
    //   return <div key={name}> {name}</div>
    // })
    //<ClassComponent name="Suresh"/>
    //<FunctionalComponent name="Kumar" />
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
export default App;
