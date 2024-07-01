# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Usage

#### Mock
All default mock data stores in `src/utils/mock.ts`, `const MOCK_DATA` constant. 

The field `timer` has all info about timer. The timer is considered set if 
`MOCK_DATA.timer.time` has string value like _"00:10:00"_
where pattern is _"H:M:S"_ . If this string value is `''` timer is not set.

The field `test` has all tests/questions/quiz with details. According this table,

| `test` fields   |      Meaning  |
|----------|:-------------|
| `id` |  Just a number, it doesn't specify the order |
| `question` |    String witch define a question   | 
| `answer` | `type` - set 3 various forms of answers: `radio`, `text`, `checkbox;`<br>`variants` - set the number of answers with its content;<br>`result` - empty field for user answers|
| `state` | Solve-state of current question: `default`, `active`, `answered`.<br>It defaines progress bar color and your active question|


> [!WARNING]  
> ___If you want to set new content, e.g. add new question or set timer, you must clean LocalStorage in your browser first and then mutate MOCK_DATA constant!!!___
