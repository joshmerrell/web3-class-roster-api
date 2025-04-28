// Scripting

// Data source
const url = "https://assets.codepen.io/16425/Spring-2025-Roster.json";

// Get data
fetch(url)
  .then( response  => response.json())
  .then( data  => {
    
    // check-check: is the data good?
    console.log(data);
    console.log(data.name);
    console.log(data.imageUrl);

    // get container for data
    const roster = document.querySelector(".roster");

    // loop through data
    data.forEach( student => {
      
      // template
      const template = `
          <figure>
            <figcaption> ${student.name} </figcaption>
            <img src=" ${student.imageUrl} " alt=" ${student.name} ">
          </figure>
       `;

      // insert EACH `student` record into container
      roster.insertAdjacentHTML("afterbegin", template);
    });
  });
