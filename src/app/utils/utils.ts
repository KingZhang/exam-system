import degreeConfig from '../config/degreeConfig';
import * as _ from 'lodash';

export function getDegreeConfig(degree) {
    return degreeConfig[degree];
}

export function getListBySubject(questionList, subject, degree) {
    if (subject === 'complex') {
        return questionList;
    } else {
        return questionList.filter(item => item.subject === subject);
    }
}

export function getListByDegreeType(questionList, degree, type) {
    return questionList.filter(item => item.degree === degree && item.type === type);
}

export function getRandoQuestion(questionList, subject, degree) {
    let resultList = [];
    const questions = _.cloneDeep(questionList);
    const matchList = getListBySubject(questions, subject, degree);
    const condition = getDegreeConfig(degree);
    try {
        Object.keys(condition).forEach((type) => {
            const configArr = condition[type];
            const addList = [];

            configArr.forEach((config) => {
                let { number, degree: degreeVal } = config;
                degreeVal = degreeVal + '';
                const matchTypeList = getListByDegreeType(matchList, degreeVal, type);
                if (matchTypeList.length >= number) {
                    while (number) {
                        const randomItem = matchTypeList[Math.floor(Math.random() * matchTypeList.length)];
                        if (!addList.includes(randomItem.id)) {
                            addList.push(randomItem.id);
                            resultList.push(randomItem);
                            number--;
                        }
                    }
                } else {
                    throw new Error(`not enough question for ${type} level ${degreeVal}.
                                Actually: ${matchTypeList.length}, require: ${number}`);
                }
            });
        });
    } catch (error) {
        console.warn(error.message);
        resultList = [];
    }
    return resultList;
}

export function getScore(examData, examQuestion, fullList) {
    const examDegree = examData.degree;
    // 只计算选择题和判断题
    if (parseInt(examDegree, 10) > 3) {
        return 'pending';
    }
    let score = 0;
    const degreeConfigs = getDegreeConfig(examDegree);

    examQuestion.forEach((item) => {
        score += countScore(degreeConfigs, item, fullList);
    });

    return score;
}

function countScore(degreeConfigs, question, fullList) {
    let score = 0;
    const { id, type, degree } = question;

    switch (type) {
        case 'judgment':
            if (question.judgmentAnswer) {
                const fullQuiz = fullList.find(item => item.id === id);
                if (fullQuiz.judgmentAnswer === question.judgmentAnswer) {
                    score = getQuestionScore(degreeConfigs, type, degree);
                }
            }
            break;
        case 'single':
            if (question.choiceAnswer && question.choiceAnswer.length) {
                const fullQuiz = fullList.find(item => item.id === id);
                if (fullQuiz.choiceAnswer[0] === question.choiceAnswer[0]) {
                    score = getQuestionScore(degreeConfigs, type, degree);
                }
            }
            break;
        case 'multiple':
            if (question.choiceAnswer && question.choiceAnswer.length) {
                const fullQuiz = fullList.find(item => item.id === id);
                if (fullQuiz.choiceAnswer.sort().join() === question.choiceAnswer.sort().join()) {
                    score = getQuestionScore(degreeConfigs, type, degree);
                }
            }
            break;
    }
    return score;
}

function getQuestionScore(degreeConfigs, type, degree) {
    const degreeNum = parseInt(degree, 10);
    const configItem = degreeConfigs[type].find(item => item.degree === degreeNum);
    return configItem.score;
}
