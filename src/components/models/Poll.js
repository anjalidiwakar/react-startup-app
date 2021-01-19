export default class PollList {

    pollTitle;
    pollId;
    userWhoAnswered = [];
    pollStatus;
    questionList = [];
    constructor() { }

    setQuestionList(list) {
        this.questionList = list;
    }
    setpollTitle(title) {
        this.pollTitle = title;
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
    setPollStatus(status) {
        this.pollStatus = status
    }
    setTotalVotes

}

export class Answers {
    value = "";
    count = 0;
    optionId;
    isSelected = false;
}
