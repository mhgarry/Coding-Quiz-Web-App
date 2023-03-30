//moved array of questions, options, and answers to seperate sprict file to make it more scalable. Reformatted it and added a radio button to each option 
const questionsArr = [
    {
      question: 
      "What is HTML's main use in Wev Development?",
      answers: [
      {Option: "Scripting", correct: false}, 
      {Option: "Styling", correct: false}, 
      {Option: "Debugging", correct: false}, 
      {Option: "Structuring", correct: true},
      ],
    },
    {
    question: 
    "What is it called when Web Developers organize code in a readable and functional manner?",
    answers: 
    [
      { Option: "JavaScript", correct: false }, 
      {Option: "API", correct: false},
      {Option: "Refactoring", correct: true},
      {Option: "Interfacing", correct: false},
    ]
    },
      //https://www.w3schools.com/java/java_data_types_non-prim.asp#:~:text=A%20primitive%20type%20has%20always,have%20all%20the%20same%20size.
    {
      question:
       "In JavaScript which of the following is not a primative values?",
      answers: 
      [
        {Option: "Number", correct: false},
        {Option: "Function", correct: true},
        {Option: "Boolean",  correct: false},
        {Option: "String", correct: false},
      ],
      },
    {
      question: 
      "In CSS which of the following are used as selectors?",
      answers: 
      [
      {Option: "ID", correct: true},
      {Option: "Class", correct: false},
      {Option: "Global", correct: false},
      {Option: "They're all selectors", correct: false},
        ],
     
    },
    {
      question: 
      'What is the planning and drawing out the design of a website before being built called?',
      answers: 
      [
      {Option: "Keyframing", correct: false},
      {Option: "Githubbing", correct: false},
      {Option: "Storyinboarding", correct: false},
      {Option: "Wireframing", correct: true},
        ],
    },
    {
       //paraphrased and forumlated from https://developer.mozilla.org/en-US/docs/Glossary/Element
      question:
       'What is a typical element in Web Design?',
      answers: 
      [
      {Option: "A key value pair", correct: false},
      { Option: "Any part of a webpage that includes an opening tag with attrtirutes, encolsoed text, and a closing tag", correct: true},
        {Option: "A Boolean", correct: false},
        {Option: "A google", correct: false},
         ],
    },
    {
      //paraphrased from https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories
      question: 
      'A github repository is?',
      answers: 
      [
      {Option: "Cointains all fo your project's files and revision history", correct: true},
      {Option: "Syntax", correct: false},
     {Option: "A mystery", correct: false},
     {Option: "A container for trash", correct: false},
      ],
     

    },
    {
      //https://www.hackreactor.com/blog/what-is-javascript-used-for paraphrased and referenced
      question: 
      'JavaScript is?',
      answers: 
      [
      {Option: "A cilent-side and server-side programming language that allows you to make web pages interactive", correct: true},
     {Option: "A web application", correct: false},
     {Option: "A node", correct: false},
     {Option: "A cup of coffee", correct: false},
     ],
    
    },
    {
      //https://www.git-tower.com/learn/git/faq/git-bash#:~:text=Git%20Bash%2C%20quite%20simply%2C%20is,built%20for%20Unix%2Dstyle%2
      question: 
      '"What is Git Bash?"',
      answers: 
    [
    {Option: "A Mac OSX application", correct: false},
    {Option: "A server designated for party chat", correct: false},
    {Option: "A Windows application designed for Git version control", correct: true},
    {Option: "A website", correct: false},
       ],
    },
    //https://www.stackpath.com/edge-academy/what-is-a-web-application/ referenced
    {
      question: 
      "What is a web application?", 
      answers: 
    [{Option: "A program downloaded from the internet that runs on your local system", correct: false},
    {Option: "A browser based flash file", correct: false},
    {Option: "An iphone accesory", correct: false},
    {Option: "A computer program that runs in a web browsers and perfroms taask over the internet", correct: true},
      ],
    },
  ]