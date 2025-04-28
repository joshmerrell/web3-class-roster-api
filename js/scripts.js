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
    data.forEach(student => {
      
      // template
      const template = `<figure class="card" style="background-color: ${student.favoriteColor};">
            <div class="card-inner">
              <img src=" ${student.imageUrl} " alt=" ${student.name} ">
              <figcaption>
                <h2>${student.name} - ${student.status}</h2>
                <p class="cursive">Motto: ${student.motto}</p>
                <p class="cursive">Favorite Character: ${student.favoriteSimpsonsCharacter}</p>
              </figcaption>
            </div>
          </figure>`;

      // insert EACH `student` record into container
      roster.insertAdjacentHTML("afterbegin", template);
    });
  });
