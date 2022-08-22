import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Intro from './components/Intro/intro'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';

const API_ALL = "http://hp-api.herokuapp.com/api/characters"
const API_STUD = "http://hp-api.herokuapp.com/api/characters/students"
const API_STAFF = "http://hp-api.herokuapp.com/api/characters/staff"
const API_HOUSE_GRY = "http://hp-api.herokuapp.com/api/characters/house/gryffindor"
const API_HOUSE_HUF = "http://hp-api.herokuapp.com/api/characters/house/hufflepuff"
const API_HOUSE_RAV = "http://hp-api.herokuapp.com/api/characters/house/ravenclaw"
const API_HOUSE_SLI = "http://hp-api.herokuapp.com/api/characters/house/slytherin"

function App() {
  const [characters, setChar] = useState([])
 

  const fetchAll = () => {
    fetch(API_ALL)                                      //API_ALL = "http://hp-api.herokuapp.com/api/characters"
    .then((response) => {return response.json()})
    .then((data) => {setChar(data)});
  }
  const fetchStudents = () => {
     fetch(API_STUD)                                    //API_STUD = "http://hp-api.herokuapp.com/api/characters/students"
    .then((response) => {return response.json()})
    .then((data) => {setChar(data)});
  }
  const fetchStaff = () => {
    fetch(API_STAFF)                                    //API_STAFF = "http://hp-api.herokuapp.com/api/characters/staff"
    .then((response) => {return response.json()})
    .then((data) => {setChar(data)});
  }
 
  const fetchHouseGRY = () => {
     fetch(API_HOUSE_GRY)                               //API_HOUSE_GRY = "http://hp-api.herokuapp.com/api/characters/house/gryffindor"
    .then((response) => {return response.json()})
    .then((data) => {setChar(data)});
  }
  const fetchHouseHUF = () => {
     fetch(API_HOUSE_HUF)                             //API_HOUSE_HUF = "http://hp-api.herokuapp.com/api/characters/house/hufflepuff"
    .then((response) => {return response.json()})
    .then((data) => {setChar(data)});
  }
  const fetchHouseRAV = () => {
     fetch(API_HOUSE_RAV)                           //API_HOUSE_RAV = "http://hp-api.herokuapp.com/api/characters/house/ravenclaw"
    .then((response) => {return response.json()})
    .then((data) => {setChar(data)});
  }
  const fetchHouseSLI = () => {
     fetch(API_HOUSE_SLI)                           //API_HOUSE_SLI = "http://hp-api.herokuapp.com/api/characters/house/slytherin"
    .then((response) => {return response.json()})
    .then((data) => {setChar(data)});
  }

  return (
    <div className="App">
      <Intro id="intro" className="intro"/>
      <Header />
      <Stack className="btn-toolbar justify-content-md-center mt-3 p-3" direction="horizontal" gap={3}>
        <Button href="#" size="md" variant="dark" onClick={fetchAll}>Ver Todos</Button>
        <Button href="#" size="md" variant="dark" onClick={fetchStudents}>Estudiantes</Button>
        <Button href="#" size="md" variant="dark" onClick={fetchStaff}>Profesores</Button>
        <Dropdown className='drop'>
          <Dropdown.Toggle className='drop' size="md"  id="dropdown-button-dark-example1" variant="dark">
            Seleccionar Casa
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark" align={{ md: 'end' }}>
            <Dropdown.Item href="#" size="md" variant="dark" onClick={fetchHouseGRY} active>Gryffindor</Dropdown.Item>
            <Dropdown.Item href="#" size="md" variant="dark" onClick={fetchHouseHUF}>Hufflepuff</Dropdown.Item>
            <Dropdown.Item href="#" size="md" variant="dark" onClick={fetchHouseRAV}>Ravenclaw</Dropdown.Item>
            <Dropdown.Item href="#" size="md" variant="dark" onClick={fetchHouseSLI}>Slytherin</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>
           
      <div id="" className = "charList row align-items-center justify-content-center container-fluid">
        {characters.map((char) => (

         <div className = "char-card text-center col-md-3 justify-content-center"> 
            {char.image.length > 0 ? <img className="Images" src={char.image} width={350} height={400} alt="El carcater no tiene imagen asignada"/> : <div className='No-Images' ></div>}
            <div className= "char-card__inner">
            <h1 className='name'>{char.name}</h1>
            <p><b>Actor:</b> {char.actor}</p>
            <p><b>Ascendencia:</b> {char.ancestry}</p>
            <p><b>Fecha Nacimiento:</b> {char.dateOfBirth}</p>
            <p><b>Casa:</b> {char.house}</p>
            <p><b>Guardian:</b> {char.patronus}</p>
            <p><b>Varita:</b> {char.wand.core}, {char.wand.wood}</p>
            </div>
         </div> 
        ))}
      </div>
          
      <footer ><Footer /></footer>
      
      <script src="https://code.jquery.com/jquery-3.2.1.js"></script>
      <link href="http://fonts.cdnfonts.com/css/harry-potter" rel="stylesheet"></link>
    </div>
  );
}

export default App;
