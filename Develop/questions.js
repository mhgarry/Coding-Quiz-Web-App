//moved array of questions, options, and answers to seperate sprict file to make it more scalable. Reformatted it and added a radio button to each option
const questionsArr = [
    {
      "question":"What is HTML's main use in Web Development?",
			"choices": ["Scripting", "Styling", "Debugging", "Structuring"],
			"answer": 3
    },
    {
    "question":
    "What is it called when Web Developers organize code in a readable and functional manner?",
    "choices":["JavaScript","API","Refactoring","Interfacing",],
		"answer": 2
    },
      //https://www.w3schools.com/java/java_data_types_non-prim.asp#:~:text=A%20primitive%20type%20has%20always,have%20all%20the%20same%20size.
    {
      "question":
			"In JavaScript which of the following is not a primative values?",
      "choices":["Number", "Function","Boolean","String"],
			"answer": 1
		},
    {
      "question": "In CSS which of the following are used as selectors?",
      "choices":["ID","Class","Global","They're all selectors"],
			"answer": 3
		},
    {
      "question":"What is the planning and drawing out the design of a website before being built called?",
      "choices":["Keyframing","Githubbing","Storyinboarding","Wireframing"],
			"answer": 3
    },
    {
       //paraphrased and forumlated from https://developer.mozilla.org/en-US/docs/Glossary/Element
      "question": 'What is a typical element in Web Design?',
      "choices":["A key value pair","Any part of a webpage that includes an opening tag with attrtirutes, encolsoed text, and a closing tag","A Boolean","A google"],
			"answer": 1
    },
    {
      //paraphrased from https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories
      "question":"A github repository is?",
      "choices":[ "A folder on github.com that contains all of your project's files and revision history","Syntax","A mystery","A container for trash"],
			"answer": 1
		},
    {
      //https://www.hackreactor.com/blog/what-is-javascript-used-for paraphrased and referenced
      "question":"JavaScript is?",
      "choices":["A cilent-side and server-side programming language that allows a programmer make applications interactive","A web application","A node","A cup of coffee"],
			"answer": 0
		},
    {
      //https://www.git-tower.com/learn/git/faq/git-bash#:~:text=Git%20Bash%2C%20quite%20simply%2C%20is,built%20for%20Unix%2Dstyle%2
      "question": "What is the difference between a method and a funciton in JavaScript?",
			"choices":["They are the same thing", "One is server side and one is client side","A method is associated with an object while a function is an independent block of code",
			"A method cannot be called while a function can"],
  		"answer": 2
		},
    //https://www.educative.io/answers/what-is-the-difference-between-a-method-and-a-function
    {
      "question":"What is a web application?",
      "chocies": ["A program downloaded from the internet that runs on your local system","A browser based flash file","A program that runs on IOS",
			"A computer program that runs in a web browsers and perfroms taask over the internet"],
			"answer": 3
    },
  ]
console.log(questionsArr)
