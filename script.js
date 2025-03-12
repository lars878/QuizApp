let qestions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams", 
        "answer_2": "Lady Gaga", 
        "answer_3": "Tim Berners-Lee", 
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },  
    {
        "question": "Wie wird ein Array in JavaScript deklariert?",
        "answer_1": "[]",
        "answer_2": "{}",
        "answer_3": "()",   
        "answer_4": "keine Ahnung",
        "right_answer": 1
    },
    {
        "question": "Wie heißt die Hauptstadt von Deutschland?",
        "answer_1": "München",
        "answer_2": "Berlin",
        "answer_3": "Hamburg",  
        "answer_4": "Frankfurt",
        "right_answer": 2
    },
    
    {
        "question": "Wie heißt der aktuelle Bundeskanzler?",
        "answer_1": "Angela Merkel",
        "answer_2": "Olaf Scholz",
        "answer_3": "Horst Seehofer",
        "answer_4": "Jens Spahn",
        "right_answer": 2   
    },
    {
        "question": "Wie heißt die Hauptstadt von Frankreich?",
        "answer_1": "Lyon",
        "answer_2": "Paris",
        "answer_3": "Nizza",    
        "answer_4": "Marseille",
        "right_answer": 2
    },
    {
        "question": "Wie heißt die Hauptstadt von Spanien?",
        "answer_1": "Barcelona",
        "answer_2": "Sevilla",
        "answer_3": "Valencia",  
        "answer_4": "Madrid",
        "right_answer": 4
    },
    {
        "question": "Wie heißt die Hauptstadt von Italien?",
        "answer_1": "Mailand",
        "answer_2": "Rom",
        "answer_3": "Turin",   
        "answer_4": "Neapel",
        "right_answer": 2
    },
    {
        "question": "Wie heißt die Hauptstadt von England?",
        "answer_1": "Manchester",
        "answer_2": "Liverpool",
        "answer_3": "Birmingham",
        "answer_4": "London",
        "right_answer": 4
    },
    {
        "question": "Wie heißt die Hauptstadt von Österreich?",
        "answer_1": "Salzburg",
        "answer_2": "Wien",
        "answer_3": "Graz",   
        "answer_4": "Innsbruck",
        "right_answer": 2
    },
    {
        "question": "Wie heißt die Hauptstadt von der Schweiz?",
        "answer_1": "Bern",
        "answer_2": "Zürich",
        "answer_3": "Genf",  
        "answer_4": "Basel",
        "right_answer": 1
    }
];

let currentQuestion = 0; 

function init(){
    document.getElementById("all-questions").innerHTML = qestions.length;

    showQuestion();
}

function showQuestion(){
    let question = qestions[currentQuestion]; 

    document.getElementById("questiontext").innerHTML = question['question'];
    document.getElementById("answer_1").innerHTML = question['answer_1'];
    document.getElementById("answer_2").innerHTML = question['answer_2'];
    document.getElementById("answer_3").innerHTML = question['answer_3'];
    document.getElementById("answer_4").innerHTML = question['answer_4'];
}

function answer(selection){
    let question = qestions[currentQuestion]; 
    console.log('Selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    console.log('Current question is', question['right_answer']);
    
    if(selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('Falsche Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
    }
}