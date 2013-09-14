#Exercise framework
Oilproject extensible exercise framework

##Description
OEEF is a modular framework to generate different kind of exercise. You can add new exercise model being independent from the backend.
The only dependence (for the core) will be (i hope) require.js.

###How it works
##Backend
Every exercise have to be saved in the same way, for example:
* id (single (1 => Math, 2 => Chem ,ecc..) or nested ('Math'=> (1=>'Calc', 2=> 'Graph', 3=>'Write the function'), 'Lett' =>(1=>'Multichoice', 2=>'Complete the phrase'), ecc...))
* problem: the text to describe the exercise + additional data (ex. to design a graph i need the function or the coord)
* possible answers: if the problem gives you some choice, else empty.
* hints: to help you resolve the exercise.
* solution: the correct solution

##Frontend
We get the data for the exercise with an ajax call. Reading the id, we are able to load the correct module for the exercise(a js for the logic and a .html for the template);
The user's answer will be sent to the backend that will compare the effective solution and give back the result.

####Change Log
#####0.0.1
* Started the concept
* Created the main controller
* Created an exercise Base Class
* Implemented a sort of js class inheritance
* Implemented a super simple template engine for the exercise template (scavallato)

