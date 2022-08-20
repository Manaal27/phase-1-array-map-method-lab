const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = () => {
  //return tutorials

  function titleCased() {

    let ourNewArray = tutorials.map(word => {
      let se = word.split(" ");
      for (let i =0; i< se.length; i++) {
        se[i] = se[i][0].toUpperCase() + se[i].substring(1);
      }
      return se.join(" ")
    })
    return ourNewArray
  }
  titleCased();
 
//}

