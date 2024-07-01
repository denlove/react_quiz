import { ImockData } from '../types/interfaces'

export const MOCK_TITLE = 'Funny Testing'
export const MOCK_PARAGRAPH = 'Just answer the few questions :D'

export const MOCK_DATA: ImockData = {
    timer: {
        time: '0:10',
        isExpired: false,
    },
    test: [
        {
            id: 0,
            question: 'First question ................... First?',
            answer: {
                type: 'radio',
                variants: ['First answer', 'Second answer', 'Third answer'],
                result: [],
            },
            state: 'active',
        },
        {
            id: 1,
            question: 'Second question ................... Second?',
            answer: {
                type: 'checkbox',
                variants: ['First answer', 'Second answer', 'Third answer'],
                result: [],
            },
            state: 'default',
        },
        {
            id: 2,
            question: 'Third question ................... Third?',
            answer: {
                type: 'text',
                variants: [],
                result: [],
            },
            state: 'default',
        },
    ],
}
