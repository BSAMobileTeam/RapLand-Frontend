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
        "type_question": "fermee",
        "question": {
            "intitule": "Combien y a-t-il de rappeurs dans 13 Organisé",
            "choix": [
                "48", "50", "52", "54",
            ],
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
    {
        "id": 8,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Quel rappeur a ouvert le Barlou Burger",
            "choix": [
                "MHD", "Georgio", "Seth Gueko", "Youssoupha",
            ],
            "reponse": "Seth Gueko",
        },
    },
    {
        "id": 9,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "A quel film fait référence le nom du média Booska-P",
            "choix": [
                "Scarface", "La Cité de Dieu", "La Haine", "Banlieu 13",
            ],
            "reponse": "La Cité de Dieu",
        },
    },
    {
        "id": 10,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Qui est à l'origine de cette phrase : « J’ai pris en stop la dame blanche au virage, j’l’ai mise en cloque »",
            "choix": [
                "Despo Rutti", "Alkapote", "Seth Gueko", "S.Pri Noir",
            ],
            "reponse": "Alkapote",
        },
    },
    {
        "id": 11,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Combien d'albums Jul a-t-il sortit",
            "choix": [
                "18", "19", "20", "21",
            ],
            "reponse": "21",
        },
    },
    {
        "id": 12,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Combien de sons compte « Chaise Pliante (Edition Deluxe) » d'Hatik",
            "choix": [
                "11", "29", "48", "56",
            ],
            "reponse": "48",
        },
    },
    {
        "id": 13,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "A quelle mannequin Ninho fait-il référence dans le morceau « Zipette »",
            "choix": [
                "Caroline de Maigret", "Camille Row", "Carla Bruni", "Marion Cotillard",
            ],
            "reponse": "Carla Bruni",
        },
    },
    {
        "id": 14,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Quel beatmaker est connu pour ses collaborations avec le rappeur Vald",
            "choix": [
                "Flem", "Junior Alaprod", "Seezy", "Pyroman",
            ],
            "reponse": "Seezy",
        },
    },
    {
        "id": 15,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Quel rappeur a été comdamné à de la prison avec surcis pour avoir tourné un clip sur l'autoroute ",
            "choix": [
                "Koba LaD", "Sofiane", "MHD", "SCH",
            ],
            "reponse": "Sofiane",
        },
    },
    {
        "id": 16,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Quel rappeur a sortit le légendaire morceau « Sur La Tete De Ma Mère »",
            "choix": [
                "Seyfu", "Tragédie", "La Fouine", "L'Algérino",
            ],
            "reponse": "L'Algérino",
        },
    },
    {
        "id": 17,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Quel acteur se cache sous le pseudonyme du rappeur « Fatal »",
            "choix": [
                "Franck Dubosc", "Gilles Lellouche", "Michaël Youn", "Max Boublil",
            ],
            "reponse": "Michaël Youn",
        },
    },
    {
        "id": 18,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Qui est à l'origine des morceaux « Journal Perso »",
            "choix": [
                "Maes", "Vald", "Diddie Trix", "Nekfeu",
            ],
            "reponse": "Vald",
        },
    },
    {
        "id": 19,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Combien de « Freestyle Ténébreux » Koba LaD a-t-il sortit",
            "choix": [
                "3", "4", "5", "6",
            ],
            "reponse": "5",
        },
    },
    {
        "id": 20,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Qui est le précurseur de l'Afro Trap en France",
            "choix": [
                "Y du V", "Madrane", "Niska", "MHD",
            ],
            "reponse": "MHD",
        },
    },
    {
        "id": 21,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Lequel de ces rappeurs n'est pas français",
            "choix": [
                "Frenetik", "Redk", "Sadek", "Da Uzi",
            ],
            "reponse": "Frenetik",
        },
    },
    {
        "id": 22,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Quel groupe culte de rap français a été condamné à 3 mois de prison ferme",
            "choix": [
                "IAM", "Suprême NTM", "Sages Poètes de la rue", "Fonky Family",
            ],
            "reponse": "Suprême NTM",
        },
    },
    {
        "id": 23,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "multiple",
        "question": {
            "intitule": "Quels rappeurs ont eu un concert annulé à cause de féministes",
            "choix": [
                "Orelsan", "Lorenzo", "Lefa", "Seth Gueko",
            ],
            "reponse": [
                "Orelsan", "Seth Gueko",
            ],
        },
    },
    {
        "id": 24,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Avec qui Nakk Mendosa n'a-t-il jamais fait de featuring",
            "choix": [
                "Soprano", "Médine", "Lino", "Dixon",
            ],
            "reponse": "Soprano",
        },
    },
    {
        "id": 25,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Qui n'appraît pas dans le clip « Zidane » de 13 Block",
            "choix": [
                "Da Uzi", "Kalash Criminel", "Ixzo", "Dabs",
            ],
            "reponse": "Dabs",
        },
    },
    {
        "id": 26,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Qui est le professeur Chen du rap français",
            "choix": [
                "Alkapote", "Freeze Corleone", "Nekfeu", "Damso",
            ],
            "reponse": "Freeze Corleone",
        },
    },
    {
        "id": 27,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "D'où viens Maes",
            "choix": [
                "Évry", "Roubaix", "Sevran", "Toulouse",
            ],
            "reponse": "Sevran",
        },
    },
    {
        "id": 28,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Quel est l'album avec le plus de certifications",
            "choix": [
                "PNL - Dans la légende", "Damso - Ispeité", "Booba - Trône", "Nekfeu - Cyborg",
            ],
            "reponse": "Damso - Ispeité",
        },
    },
    {
        "id": 29,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Quel rappeur a vendu le plus d'albums",
            "choix": [
                "Ninho", "Gims", "Nekfeu", "Jul",
            ],
            "reponse": "Jul",
        },
    },
    {
        "id": 30,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Qui a dit « La banlieu influence Paname, Paname influence le monde »",
            "choix": [
                "Lartiste", "Youssoupha", "Médine", "Alivor",
            ],
            "reponse": "Médine",
        },
    },
    {
        "id": 31,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Qui n'est pas présent dans « Grand Paris 2 » de Médine",
            "choix": [
                "Pirate", "Rémy", "Larry", "Sofiane",
            ],
            "reponse": "Sofiane",
        },
    },
    {
        "id": 32,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Qui est l'auteur de « Molotov 4 »",
            "choix": [
                "Seyfu", "Salif", "Sat", "Rohff",
            ],
            "reponse": "Seyfu",
        },
    },
    {
        "id": 32,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Quel groupe viens du département 94",
            "choix": [
                "Psy 4 de la Rime", "Mafia k'1 Fry", "Sexion d'Assaut", "Lunatic",
            ],
            "reponse": "Mafia k'1 Fry",
        },
    },
    {
        "id": 33,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Qui a sorti l'album « Perdu d'avance » en 2009",
            "choix": [
                "Nessbeal", "La Fouine", "Orelsan", "Busta Flex",
            ],
            "reponse": "Orelsan",
        },
    },
    {
        "id": 34,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Quel rappeur nomme-t-on le « Sauce God »",
            "choix": [
                "Hamza", "Kekra", "Laylow", "Kalash",
            ],
            "reponse": "Hamza",
        },
    },
    {
        "id": 35,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Qui a dit « J’gratte, j’gratte et la nuit, je me défoule contre tes textes. *CLAP CLAP* : C’est le bruit de mes boules contre tes fesses ! »",
            "choix": [
                "Nekfeu", "Jazzy Bazz", "Wojtek", "Logik Konstantine",
            ],
            "reponse": "Nekfeu",
        },
    },
    {
        "id": 36,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": " Qui n'a jamais participé aux « Hip Hop Symphonique »",
            "choix": [
                "Meryl", "Maes", "Dadju", "SCH",
            ],
            "reponse": "Dadju",
        },
    },
    {
        "id": 37,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Qui a dit « Elle a sa petite culotte qui fuit comme une piscine à débordement. »",
            "choix": [
                "Booba", "Alkapote", "Kaaris", "Salif",
            ],
            "reponse": "Kaaris",
        },
    },
    {
        "id": 38,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Qui présente l'émission « Rap Jeu »",
            "choix": [
                "Fif Tobossi", "Mehdi Maïzi", "Fred Musa", "Mouloud Achour",
            ],
            "reponse": "Mehdi Maïzi",
        },
    },
    {
        "id": 39,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "A qui Orelsan a-t-il refusé un feat",
            "choix": [
                "Guizmo", "Lorenzo", "Kalash Criminel", "BigFlo et Oli",
            ],
            "reponse": "BigFlo et Oli",
        },
    },
    {
        "id": 40,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Quel footballeur apparaît dans « Fais Moi La Passe » de Rohff",
            "choix": [
                "Karim Benzema", "Zinédine Zidane", "Thierry Henry", "Mathieu Valbuena",
            ],
            "reponse": "Karim Benzema",
        },
    },
    {
        "id": 41,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "En quelle année le premier « Planète Rap » a-t-il été diffusé",
            "choix": [
                "1993", "1996", "1999", "2002",
            ],
            "reponse": "1996",
        },
    },
    {
        "id": 42,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Avec qui Ninho n'a-t-il pas fait de feat",
            "choix": [
                "Dosseh", "Hiro", "Hornet La Frappe", "Hös Copperfield",
            ],
            "reponse": "Dosseh",
        },
    },
    {
        "id": 43,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Comment s'appelle le duo formé par Aldcide H et Dany Boss",
            "choix": [
                "D.Abuz System", "Serum", "La Cliqua", "Mo'vez Lang",
            ],
            "reponse": "Serum",
        },
    },
    {
        "id": 44,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Qui a sortit « L'NMIACCd'HTCK72KPDP »",
            "choix": [
                "MC Solaar", "Kery James", "Akhenaton", "Fabe",
            ],
            "reponse": "MC Solaar",
        },
    },
    {
        "id": 45,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "fermee",
        "question": {
            "intitule": "Qui n'a jamais fait parti du label « Beat De Boul »",
            "choix": [
                "Zoxea", "Booba", "Salif", "Pirate",
            ],
            "reponse": "Pirate",
        },
    },
    {
        "id": 46,
        "theme": "rap_fr",
        "mode": "solo",
        "type_question": "multiple",
        "question": {
            "intitule": "Qui sont les juges de l'émission « Rhythm + Flow »",
            "choix": [
                "Niska", "SCH", "Ninho", "Shay",
            ],
            "reponse": [
                "Niska", "SCH", "Shay",
            ],
        },
    },
]

const addQuestion = (question) => {
    question.id = questions.length + 1;
    questions.push(question);
};

const getQuestions = () => questions;

const getQuestion = id => questions.find((question) => question.id === id);

const filterQuestions = predicate => questions.filter(predicate);

const getRandomQuestion = () => questions[Math.floor(Math.random() * questions.length)];

module.exports = {
    addQuestion,
    getQuestions,
    getQuestion,
    filterQuestions,
    getRandomQuestion
};
