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

const titleCased = () => {
  let properArr = []
  tutorials.map(string => {
    let newSentence = ''
    for (let item of string.split(" ")) {
    newSentence += item[0].toUpperCase() + item.substring(1) + " "
  }
    properArr.push(newSentence.trim())
  })
  return properArr
  }