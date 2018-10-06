const examSchema = {
    schema: {
        type: 'object',
        properties: {
            subject: {
                type: 'string'
            },
            degree: {
                type: 'string'
            }
        },
        required: ['subject', 'degree']
    },
    layout: [
        {
            key: 'subject',
            title: '选择科目',
            type: 'line-selector',
            titleMap: [
                {
                    key: 'complex',
                    title: '前端综合'
                },
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
        }
    ],
};

export default examSchema;
