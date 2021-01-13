export default class Poll {
    polltitle;
    description;
    totalVotes = 0;
    options = [];
    pollId;
    answer1 = { value: "", count: 0 };
    // answer2 = { value: "", count: 0 };
    // answer3 = { value: "", count: 0 };
    userWhoAnswered = [];
    pollStatus;

    constructor() { }

    setTitle(polltitle) {
        this.polltitle = polltitle
    }
    setDescription(description) {
        this.description = description
    }
    setAnswer(optionsList) {
        // let answer = new Answers();
        // answer.value=userOption;
        this.options = optionsList;
    }
    // setAnswer1(answer1) {
    //     this.answer1.value = answer1
    //     this.answer1.count = 0
    //     this.options.push(this.answer1)
    // }
    // setAnswer2(answer2) {
    //     this.answer2.value = answer2
    //     this.answer2.count = 0
    //     this.options.push(this.answer2)
    // }
    // setAnswer3(answer3) {
    //     this.answer3.value = answer3
    //     this.answer3.count = 0
    //     this.options.push(this.answer3)
    // }
    setPollId(pollId) {
        this.pollId = pollId
    }
    setLastName(questionList) {
        this.q = questionList;
    }
    setPollStatus(status) {
        this.pollStatus = status
    }

}

export class Answers {
    value = "";
    count = 0;
    isSelected = false;
}