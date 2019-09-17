$('#start').on('click', function(){
    game.start();


   
})

$(document).on('click', '#end', function(){
    game.done();
})


var questions = [{
    question: "What is the most visited tourist attraction in the world?",
    answers: ["Times Square", "Disney World", "The Colosseum", "Eiffel Tower"],
    correctA: "Times Square"
},  {
    question: "The Bahamas is one of the most popular destinations for U.S. residents to visit in the Caribbean. On average, how cold does it get in the Bahamas?",
    answers: ["40 Degrees", "50 Degrees", "60 Degrees", "70 Degrees"],
    correctA: "70 Degrees"
},  {
    question: "Champagne is less than 100 miles away from Paris. How many bottles of Champagne are shipped around the country from there each year?",
    answers: ["1.5 million bottles", "322 million bottles", "550 million bottles", "1 billion bottles"],
    correctA: "322 million bottles"
},  {
    question: "Which major Canadian city has not hosted the Olympics?",
    answers: ["Montreal", "Toronto", "Calgary", "Vancouver"],
    correctA: "Toronto"
},  {
    question: "In the movie “National Lampoon’s Vacation,” where is the Griswold family traveling?",
    answers: ["Sea World", "Walley World", "Disney World", "Busch Gardens"],               
    correctA: "Walley World"

}]; 



var game = {
    correct: 0,
    incorrect: 0,
    counter: 10,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time is up");
            game.done();

        }
    },
    start: function() {
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">10</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0; i<questions.length;i++){
        $('#subwrapper').append('<h2>'+questions[i].question+'</h2');
        for(var j=0;j<questions[i].answers.length;j++){
            $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
        }
    }
    $('#subwrapper').append('<br><button id="end>done</button>');

    },
    done: function() {
        $.each($('input[name="question-0]":checked'),function() {
            if($(this).val()==questions[0].correctA){
                game.correct++;
            } else {
                game.incorrect++;
            }

        });

            $.each($('input[name="question-1]":checked'),function() {
                if($(this).val()==questions[1].correctA){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
    
            });

                $.each($('input[name="question-2]":checked'),function() {
                    if($(this).val()==questions[2].correctA){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
        
                });

                    $.each($('input[name="question-3]":checked'),function() {
                        if($(this).val()==questions[3].correctA){
                            game.correct++;
                        } else {
                            game.incorrect++;
                        }
            
                    });

                        $.each($('input[name="question-4]":checked'),function() {
                            if($(this).val()==questions[4].correctA){
                                game.correct++;
                            } else {
                                game.incorrect++;
                            }
                
                        });

                            $.each($('input[name="question-5]":checked'),function() {
                                if($(this).val()==questions[5].correctA){
                                    game.correct++;
                                } else {
                                    game.incorrect++;
                                }
                    
                            });
                
        this.result();
                        },
                        result: function(){
                            clearInterval(timer);
                            $('#subwrapper h2').remove();

                            $('#subwrapper').html("<h2> Clear </h2>");
                            $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3");
                            $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3");
                            $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
                        }




    }