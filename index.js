var scoreBoard=0,questionOne = {
    question : "what is full form if IPL..?",
    answer : ["","INDIAN PREMIER LEAGUE","ISTANBULL PREMIER LEAGUE"],
    status : "incomplete"
  },questionTwo = {
    question : "IPL 2020 was held in which country..?",
    answer : ["","INDIA","DUBAI"],
    status : "incomplete"
  },highScore1 = {
    name : "Akash",
    score : 2
  },highScore2 = {
    name : "Jayant",
    score : 2
  },highScore3 = {
    name : "Ajay",
    score : 2
  }
  console.log("---------------------------LeaderBoard------------------------------");
  console.log("Name : " + highScore1.name + " Score : " + highScore1.score);
  console.log("Name : " + highScore2.name + " Score : " + highScore2.score)
  console.log("Name : " + highScore3.name + " Score : " + highScore3.score)
  console.log("--------------------------------------------------------------------");
  
  console.log("--------------Please select from appropriate option-----------------");
  var read = require('readline-sync');
  console.log("1 Question : " + questionOne.question);
  var userOption = read.question("1. "+ questionOne.answer[1]+" \n2. "+questionOne.answer[2]+ " ");
  
  if(userOption === "1") {
    scoreBoard = scoreBoard + 1;
    console.log("Result : Great. ");
  } else {
    console.log("Result : OOP`s. ");
  }
  
  console.log("2 Question : "+questionTwo.question);
  var userOption = read.question("1. "+ questionTwo.answer[1]+" \n2. "+questionTwo.answer[2]+ " ");
  
  if(userOption === "2") {
    scoreBoard = scoreBoard + 1;
    console.log("Result : Great..!,Your score is " +scoreBoard);
  } else {
      console.log("Result : wishing you good luck for next time");
  }