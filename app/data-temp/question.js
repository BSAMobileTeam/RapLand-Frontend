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