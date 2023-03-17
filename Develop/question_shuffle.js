//create questions array
var qAndA = [
    {
      question: "What is HTML's main use in Wev Development?",
        answers:{   A: "Scripting",
                    B: "Styling",
                    C: "Debugging",
                    D: "Structuring"

             },
              correctAnswer: "D"
    },
    
    {
      question: 'What is it called when Web Developers organize code in a readable and functional manner?',
        answers: 
                {
                    A: 'Refactoring',
                    B: 'JavaScript',
                    C: 'API',
                    D: 'Interfacing'
                },
                
                correctAnswer: "A"
    },
    //https://www.w3schools.com/java/java_data_types_non-prim.asp#:~:text=A%20primitive%20type%20has%20always,have%20all%20the%20same%20size.
    { 
      question: "In JavaScript which of the following is not a primative values?",
        answers: {
                A: "Number", 
                B: "Function",
                C: "Boolean",
                D: "String"
             },
                correctAnswer: "B"
            
    },
    
    {
        question: "In CSS which of the following are used as selectors?",
          anwsers:  {
                A: "ID",
                B: "Class",
                C: "They're all selectors",
                D: "Global",

                correctAnswer: "C",
            
            },
            
    },

    {
        question: "What is the planning and drawing out the design of a website before being built called?",
            answers: {
                        A: "Keyframing",
                        B: "Githubbing",
                        C: "Storyboarding",
                        D: "Wireframing"
                    },
                    correctAnswer: "D"
    },
    
    {
        //paraphrased and forumlated from https://developer.mozilla.org/en-US/docs/Glossary/Element
        question: "What is a typical element in Web Design?",
            answers: { A: "A key value pair",
                       B: "Any part of a webpage that includes an opening tag with attributes, enclosed text content, and a closing tag",
                       C: "A Boolean",
                       D: "A google"
                    },
                    correctAnswer: "B"
            },
        //paraphrased from https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories
        {
            question: "A github repository is?",
            answers:  {
                A: "Contains all of your project's files and revision history",
                B: "Syntax",
                C: "A mystery",
                D: "A container for trash"
            },
            
            correctAnswer: "A"
        },
        //https://www.hackreactor.com/blog/what-is-javascript-used-for paraphrased and referenced
        {   
            question: "JavaScript is?",
            answers: { A: "A cilent-side and server-side programming language that allows you to make web pages interactive",
                       B: "A web application",
                       C: "A node",
                       D: "A cup of coffee"
                    },

                    correctAnswer: "A"

        },
       //https://www.git-tower.com/learn/git/faq/git-bash#:~:text=Git%20Bash%2C%20quite%20simply%2C%20is,built%20for%20Unix%2Dstyle%20environments. referenced
        {
            question: "What is Git Bash?",
            answers: { 
                    A: "A Mac OSX application",
                    B: "A server designated for party chat",
                    C: "A Windows application designed for Git version control",
                    D: "A website",

                    correctAnswer: "C"
        }

        },
        //https://www.stackpath.com/edge-academy/what-is-a-web-application/ referenced 
        {
            question: "What is a web application?",
             answers: { A: "A program downloaded from the internet that runs on your local system",
                        B: "A browser based flash file",
                        C: "An iphone accesory", 
                        D: "A computer program that runs in a web browsers and perfroms taask over the internet",
                        },
                    correctAnswer: D
        }
]

