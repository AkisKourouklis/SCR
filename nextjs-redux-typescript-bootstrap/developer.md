# How we write code ( SCR-F | Structure Consistency Readability - Frontend )

I created this project to showcase the best way to write React Projects. 
After 2 years of active development a wrote this project, to keep all
my code consistent throughout my projects.

The tech stack I use in this project is:
- Next.js
- Redux
- AntD
- Eslint
- Prettier
- Less
- Husky

## Application Stracture

├──**public** *(Images, fonts etc.)*
├──**src** *(The source code of the application, not the config files)*
  ├── **component** *(All the components, minimum logic)*
    ├── **Page1** *(Each page has each own folder in here)*
      ─ **Page1.tsx** *(The index file of the folder)*
      ─ **Component1.tsx** *(Component of the Page1.tsx)*
      ─ **Component2.tsx** *(Component of the Page1.tsx)*
    ├── **Shared** *(Search, Navbar, Button, Footer. Everything reusable goes in here)*
    ├── **Main** *(Usually it is a HOC every component is wrapped arround)*
  ├── **config** *(Configuration files, like vars, sms, etc)*
  ├── **pages** *(The pages of the application, API requests as well with getServerSideProps, getStaticProps, getStaticPaths etc)*
  ├── **store** *(All the redux stuff are in here)*
    ├── **actions** *(All the redux actions, all the application requests to APIs)*
    ├── **reducers** *(All the redux actions)*
      ─ **types.ts** *(All the redux types)*
      ─ **store.ts** *(Store index file)*
  ├── **styles** *(All the styles)*
    ─ **custom.less** *(AntD, custom variables file.)*
    ─ **variables.less** *(Every new veriable goes in here.)*
    ─ **global.less** *(Here you import all the other less files.)*
  ├── **types** *(All the types)*
  ├── **utils** *(Custom hooks, functions, special requests etc)*
─**.env.local** *(Enviroment variables)*
─**.eslintrc.js** *(Eslint configuration)*
─**.prettierrc.js** *(Prettier configuration)*
─**lint-staged.config.js** *(Lint Staged configuration)*
─**next.config.js** *(Next.js, webpack configuration etc)*
─**tsconfig..json** *(Typescript configuration)*

## How we write a component
`
import { FC, useEffect } from 'react'
import Main from '../Main/Main'

const Home: FC<{prop1: string}> = ({prop1}) => {
  // no API requests here. only component logic:
  // 1. State
  // 2. Redux (All the API request are in redux, or in Pages)
  // 3. All types(interfaces) are no types folder no types here
  // 4. We don't want massive component neither super small as well.
  // If the compoent is massive create a subcomponent, if the component
  // is just a few lines put the code in the parent component.

  const func1 = ({num1, num2}: IFunc1) => {
    // ...code
  }

  useEffect(() => {
    func1()
  }, [prop1])

  return <Main>home</Main>
}

export default Home
`

## How we write Redux

Write Redux code as you like. Yet try to use async functions,
and make all api request from redux and not your components.[^1]

[^1]: Also remember to put all types in the Types folder

## How we write css

Check out BEM for more information.
[BEM](http://getbem.com/naming/)

## Graphql

If you want to use Graphql I recommend using this package [graphql-request](https://www.npmjs.com/package/graphql-request)

## Important Things

- **DO NOT WRITE INLINE STYLING**
- **IMPORT ALL STYLES THROUGH GLOBAL.LESS**
- **REMEMBER BEM**
- **ONLY FETCH DATA IN PAGES**
- **MAKE ALL REQUESTS FROM REDUX**
- **ALL TYPES GO IN TYPES FOLDER**


