 var jsonData = {
  "Question": "Are you interested in learning English?",
  "Options": {
    "Yes": {
      "Question": "Let me tell you about my course. ",
      "Options": {
        "Next": {
          "Question": "What is in this course?",
          "Answer": "This course has pre-recorded videos and quizzes to reinforce your understanding of the topic",
          "Options": {
            "Next": {
              "Question": "What is the duration of the course?",
              "Answer": "Three months for 3 levels. Each level needs one month",
              "Options": {
                "Next": {
                  "Question": "How long can I view the course content?",
                  "Answer": "6 months",
                  "Options": {
                    "Next": {
                      "Question": "Is there any personal or group training?",
                      "Answer": "No, but if you have any questions, I will personally answer them within 24 hours",
                      "Options": {
                        "Next": {
                          "Question": "Are the classes available on WhatsApp?",
                          "Answer": "No, they are on my course website",
                          "Options": {
                            "Next": {
                              "Question": "What are the course timings?",
                              "Answer": "Since the course is available as pre-recorded videos, you can learn whenever you have time",
                              "Options": {
                                "Next": {
                                  "Question": "How can I clear my doubts?",
                                  "Answer": "You can either email me or comment on the course videos",
                                  "Options": {
                                    "Next": {
                                      "Question": "What is the fee?",
                                      "Answer": "Level 1: Rs.3,500/-, Level 2: Rs.4,500/-, Level 3: Rs.5,300/-",
                                      "Options": {
                                        "Next": {
                                          "Question": "Is there any offer?",
                                          "Answer": "If you buy all three levels together, you can pay Rs.10,500/- instead of Rs.13,300/-",
                                          "Options": {
                                            "Next": {
                                              "Question": "Can I pay in monthly installments?",
                                              "Answer": "Yes, if you buy the 3 level bundle, you can pay in two monthly installments of Rs.5,500/-",
                                              "Options": {
                                                "Next": {
                                                  "Question": "How can I pay the fee?",
                                                  "Answer": "At the moment, you can only use your card to make the payment. You can't use RuPay card. Before making the payment, make sure that international transactions are enabled on your card",
                                                  "Options": {
                                                    "Next": {
                                                      "Question": "How do I enable international transactions?",
                                                      "Answer": "You can search on YouTube or Google about how to do this for your bank.",
                                                      "Options": {
                                                        "Next": {
                                                          "Question": "How can I know which level to join?",
                                                          "Answer": "Please take this level test",
                                                          "Options": "LEVEL TEST"
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

// Function to create a question div
function createQuestionDiv(question) {
  var questionDiv = document.createElement('div');
  questionDiv.className = 'question';
  questionDiv.textContent = question;
  return questionDiv;
}

// Function to create an answer div
function createAnswerDiv(questionContainer, answer) {
  if (typeof answer === 'undefined') return;
  var answerDiv = document.createElement('div');
  answerDiv.className = 'answer';
  answerDiv.textContent = answer;
  questionContainer.appendChild(answerDiv);
}

// Function to create an option button
function createOptionButton(option, callback) {
  var button = document.createElement('a');
  button.className = 'option-button';
  button.onclick = callback;
  var text = document.createElement('p');
  text.textContent = option;
  text.className = 'option-button-text';
  button.appendChild(text);
  return button;
}

// Function to update question and options
function updateQuestionAndOptions(question, answer, options) {
  var questionContainer = document.getElementById('questionDiv');
  var optionButtonsContainer = document.getElementById('optionButtonsContainer');

  questionContainer.innerHTML = '';
  optionButtonsContainer.innerHTML = '';

  questionContainer.appendChild(createQuestionDiv(question));
  createAnswerDiv(questionContainer, answer);

  var optionKeys = options === 'LEVEL TEST' ? ['Go to Level Test'] : Object.keys(options);
  optionKeys.forEach(function(optionKey) {
    var option = optionKey === 'Go to Level Test' ? optionKey : options[optionKey];
    var button = createOptionButton(optionKey, function() {
      if (typeof option === 'string') {
        if (option === optionKey) {
          // Handle LEVEL TEST case
          window.location.href = 'levelTest.html';
        }
      } else {
        // Update question and options recursively
        updateQuestionAndOptions(option.Question, option.Answer, option.Options);
      }
    });

    optionButtonsContainer.appendChild(button);
  });
}

// Call the function with initial question and options
updateQuestionAndOptions(jsonData.Question, jsonData.Answer, jsonData.Options);