import React from 'react'
import './App.css';
import Header from './components/Header'
import MapDashhboard from './components/Map'
import Description from './components/Description'

function App() {
  const [location,setLocation] = React.useState("")
  const handleLocation = (loc) => {
    setLocation(loc)
  }

  return (
    <div className="App">
      <Header handleLocation={handleLocation}/> 
      <MapDashhboard location={location}/>
      <Description location={location}/>
    </div>
  );
}

export default App;
