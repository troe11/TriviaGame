var time = 30;
var qNum = -1;
var points = 0;
//qNum will refer to the qArr index, setting the question

var questionID = $('#question');
var answer1Id = $('#answer1');
var answer2Id = $('#answer2');
var answer3Id = $('#answer3');
var answer4Id = $('#answer4');

var answerKey = function(question, answer1, answer2, answer3, answer4) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
};

var question1 = new answerKey('Which one of the following is NOT a Horcrux?', 'Harry', 'Nagini', 'Ginny', 'The Gaunt Ring');
var question2 = new answerKey('What do the Weasleys call their home?', 'The Burrow', 'Red Head Hell', 'Number 9 Privet Drive', 'They don\'t live in a house');
var question3 = new answerKey('Who brought Tom Riddle to Hogwarts', 'Snape', 'Harry', 'Dumbledore', 'Grindewald');

var answers = [question1.answer3, question2.answer1, question3.answer3];

var qArr = [question1, question2, question3];

var setQuestion = function(questionNum) {
    questionID.text(questionNum.question);
    answer1Id.text(questionNum.answer1);
    answer2Id.text(questionNum.answer2);
    answer3Id.text(questionNum.answer3);
    answer4Id.text(questionNum.answer4);
};

var resetQ = function() {
    if (qNum < 3) {
        setQuestion(qArr[qNum]);
        setInterval(function() {
            if (time > 0) {
                $('#countdown').text(time);
                --time;
            }
        }, 1000)
    } else { 
    	alert('You scored: ' + points);
    	qNum = -1
    	location.reload();
    	 }
}

$('button').on('click', function() {

    console.log(qNum)
    if (answers.indexOf($(this).text()) === -1) {
        qNum++;
        time = 30;
        resetQ();
    } else {
        qNum++;
        time = 30;
        points++;
        resetQ();
    }
});

$('#submit').click(function() {
    resetQ();
})