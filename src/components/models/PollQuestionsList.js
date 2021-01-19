export class PollDetails {
    question;
    description;
    options = [];
    totalVotes = 0;
    quesId;

    setQuestion(que) {
        this.question = que;
    }
    setDescription(description) {
        this.description = description;
    }
    setAnswer(optionsList) {
        this.options = optionsList;
    }
    setQuestionId(quesId) {
        this.questionId= quesId;
    }
}