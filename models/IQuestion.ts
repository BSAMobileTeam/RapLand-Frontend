export default interface IQuestion {
    id: number,
    theme: string,
    type_question: string,
    question: {
        intitule: string,
        choix: string[],
        reponse: string | string[]
    }
}
