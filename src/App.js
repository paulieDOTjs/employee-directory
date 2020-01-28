import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import EmployeeCard from "./Components/EmployeeCard/EmployeeCard";
import data from "./database/data.json";

function App() {
  const [cards, setCards] = useState(data);

  function sortByLastName() {
    let sortedArray = cards;
    sortedArray.sort(function(a, b) {
      var employeeA = a.lastName;
      var employeeB = b.lastName;
      if (employeeA < employeeB) {
        return -1;
      }
      if (employeeA > employeeB) {
        return 1;
      }
      return 0;
    });
    setCards([...sortedArray]);
  }

  function sortByAge() {
    let sortedArray = cards;
    sortedArray.sort(function(a, b) {
      var employeeA = a.age;
      var employeeB = b.age;
      if (employeeA < employeeB) {
        return -1;
      }
      if (employeeA > employeeB) {
        return 1;
      }
      return 0;
    });
    setCards([...sortedArray]);
  }

  function filterOver18() {
    const filteredArray = [];
    for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      if (employee.age > 17) {
        filteredArray.push(employee);
      }
    }
    setCards(filteredArray);
  }

  function filterUnder18() {
    const filteredArray = [];
    for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      if (employee.age < 18) {
        filteredArray.push(employee);
      }
    }
    setCards(filteredArray);
  }

  function filterNone() {
    setCards(data);
  }

  return (
    <div className="App">
      <Header />
      <section className="container main-section">
        <div className="row sort-and-filter">
          <div className="col-6 sort">
            <p className="sort-text">Sort by:</p>
            <button
              onClick={() => sortByLastName()}
              className="default middle-button"
            >
              Last Name
            </button>
            <button onClick={() => sortByAge()} className="default">
              Age
            </button>
          </div>
          <div className="col-6 filter">
            <p className="filter-text">Filter by:</p>
            <button onClick={() => filterOver18()} className="default ">
              18 and up
            </button>
            <button
              onClick={() => filterUnder18()}
              className="default middle-button"
            >
              18 and under
            </button>
            <button onClick={() => filterNone()} className="default">
              Show all
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row employee-cards">
              {cards.map(function(e) {
                return <EmployeeCard employee={e} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
