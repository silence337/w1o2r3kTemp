# React Markup example & storybook
```
clone or download zip 
```
Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## install

```
npm install or yarn install
```


## start

```
npm start or yarn start
```


React 와 storybook 함께 실행하기 위해 package.json 수정

[npm-run-all] package를 설치, 여러개 실행하기 위해 scripts 수정

```json
  "scripts": {
    "start": "run-p storybook react:scripts",
    "react:scripts": "set PORT=6005 && react-scripts start",
    "react:build": "react-scripts build",
    "build": "run-p build-storybook react:build",
    "build-storybook": "build-storybook -c .storybook -o build/storybook"
  },
```

## StoryBook 6.3 issue

react-script 의 babel-loader는 8.1.0 이고, storyBook 의 babel-loader 버전은 8.2.0.
최종 설치 버전은 8.2.0 으로 react-script 의 의존성 버전과 달라 충돌 에러 발생~

% 이슈 해결은  package.json 파일에 아래와 같이 추가 후 node_module 삭제, 재설치로 이슈 해결

```json
  "resolutions": {
    "babel-loader": "8.1.0"
  }
```

해당 이슈는 최초 storyBook 설치시에만 적용.

## Folder Structure Conventions

    .
    ├── .storybook           # storybook UI settings folder
    ├── public               # build public
    ├── src
    │   ├── assets           # resources
    │   ├── components       # common components
    │   │   ├── layout
    │   │   └── etc
    │   ├── guide            # element guide
    │   ├── pages            # markup pages ( page ID )
    │   └── storise          # storise page preview settings
    └──.
