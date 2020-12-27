const questions = [
    {
        "id": 1,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Lequel de ces rappeurs est originaire de Roubaix (59)",
            "choix": [
                "Seth Gueko", "ZKR", "Larry", "JNR",
            ],
            "reponse": "ZKR",
        },
    },
    {
        "id": 2,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Lequel de ces rappeurs ne fait pas partit du Secteur Ä",
            "choix": [
                "Doc Gynéco", "Lino", "Le Rat Luciano", "Djamatik",
            ],
            "reponse": "Le Rat Luciano",
        },
    },
    {
        "id": 3,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "unique",
        "question": {
            "intitule": "Combien y a-t-il de rappeurs dans 13 Organisé",
            "reponse": "50",
        },
    },
    {
        "id": 4,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Quel Media Rap a sorti un album en 2020",
            "choix": [
                "RAPLUME", "KULTURE", "BOOSKA-P", "RAPUNCHLINE",
            ],
            "reponse": "RAPLUME",
        },
    },
    {
        "id": 4,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Quel Media Rap a sorti un album en 2020",
            "choix": [
                "RAPLUME", "KULTURE", "BOOSKA-P", "RAPUNCHLINE",
            ],
            "reponse": "RAPLUME",
        },
    },
    {
        "id": 5,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Quel rappeur est resté le plus longtemps du top 1 Spotify",
            "choix": [
                "Jul", "SCH", "Ninho", "Booba",
            ],
            "reponse": "SCH",
        },
    },
    {
        "id": 6,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Avec qui Alkapote n'a-t-il pas fait de feat",
            "choix": [
                "Bilal Hassani", "Freeze Corleone", "Kaaris", "Kalash",
            ],
            "reponse": "Kalash",
        },
    },
    {
        "id": 7,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "multiple",
        "question": {
            "intitule": "Lesquels des ses rappeurs sont apparu dans un film",
            "choix": [
                "Kaaris", "Fianso", "Jok'Air", "Lefa",
            ],
            "reponse": [
                "Kaaris", "Fianso",
            ],
        },
    },
]

const addQuestion = (question) => {
    question.id = questions.length + 1;
    questions.push(question);
};

const getQuestions = () => questions;

const getQuestion = (id) => questions.find((question) => question.id === id);

const filterQuestions = (predicate) => questions.filter(predicate);

module.exports = {
    addQuestion,
    getQuestions,
    getQuestion,
    filterQuestions,
};