const questionSchema = {
    schema: {
        type: 'object',
        properties: {
            subject: {
                type: 'string'
            },
            degree: {
                type: 'string'
            },
            type: {
                type: 'string'
            },
            description: {
                type: 'string'
            },
            answerItems: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        key: {
                            type: 'string'
                        },
                        description: {
                            type: 'string'
                        },
                    }
                }
            },
            choiceAnswer: {
                type: 'array',
                items: {
                    type: 'string'
                }
            },
            judgmentAnswer: {
                type: 'string'
            },
            textAnswer: {
                type: 'string'
            },
            programAnswer: {
                type: 'string'
            },
            point: {
                type: 'string'
            }
        },
        required: ['subject', 'degree', 'type', 'description']
    },
    layout: [
        {
            key: 'subject',
            title: '归类',
            type: 'line-selector',
            titleMap: [
                {
                    key: 'js',
                    title: 'Javascript'
                },
                {
                    key: 'html',
                    title: 'HTML'
                },
                {
                    key: 'css',
                    title: 'CSS'
                },
            ]
        },
        {
            key: 'degree',
            title: '难度',
            type: 'line-rate',
        },
        {
            key: 'type',
            title: '题目类型',
            type: 'line-selector',
            titleMap: [
                {
                    key: 'judgment',
                    title: '判断题'
                },
                {
                    key: 'single',
                    title: '单选题'
                },
                {
                    key: 'multiple',
                    title: '多选题'
                },
                {
                    key: 'answer',
                    title: '问答题'
                },
                {
                    key: 'program',
                    title: '编程题'
                },
            ]
        },
        {
            key: 'description',
            title: '问题描述',
            type: 'line-input',
            isTextarea: 'true',
        },
        {
            key: 'answerItems',
            title: '选择项',
            type: 'line-add-object',
            condition: function(data) {
                return data.type === 'single' || data.type === 'multiple';
            }
        },
        {
            key: 'choiceAnswer',
            title: '答案',
            type: 'line-add-item',
            condition: function(data) {
                return data.type === 'single' || data.type === 'multiple';
            }
        },
        {
            key: 'judgmentAnswer',
            title: '答案',
            type: 'line-radio-group',
            titleMap: [
                {
                    key: 'true',
                    title: '正确'
                },
                {
                    key: 'false',
                    title: '错误'
                },
            ],
            condition: function(data) {
                return data.type === 'judgment';
            }
        },
        {
            key: 'textAnswer',
            title: '答案',
            type: 'line-input',
            isTextarea: 'true',
            condition: function(data) {
                return data.type === 'answer';
            }
        },
        {
            key: 'programAnswer',
            title: '答案',
            type: 'line-input',
            isTextarea: 'true',
            condition: function(data) {
                return data.type === 'program';
            }
        },
        {
            key: 'point',
            title: '知识点',
            type: 'line-input',
            isTextarea: 'true',
        },
    ],
};

export default questionSchema;
