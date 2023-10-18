fetch ('https://swapi.dev/api/people/')
  .then(response => response.json())
  .then(response => {
    const menObjects = response.results.filter(person => person.gender === 'male');
    const menNames = menObjects.map(man => man.name);

    const womenObjects = response.results.filter(person => person.gender === 'female');
    const womenNames = womenObjects.map(woman => woman.name);
    
    console.log(menNames);
    console.log(womenNames);
  });