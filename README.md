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
    │   ├── pages            # markup pages ( page ID === storyboad ID )
    │   └── storise          # storise page preview settings
    └──.

### stroybook 구성의 React Markup 을 만든 의도는..

React 프로젝트가 중상 규모의 스펙 일 경우, 프론트엔드 시장에 부족한 인력( 마크업, SCSS, API 등 해당 업무를 전체 원활히 수행할 수 있는 인력? ) 으로 인해 
분업화를 생각해보았고, 일반 프로젝트에서 html 코딩리스트 라는 제작물을 보여주는 순수 html 만 제작 한다면 
React 환경 프로젝트에서는 순수 JSX 마크업을 storybook 으로 제공하면 어떨까 하는 생각에...

### component 는 어떻게..

마크업을 수행하는 작업자들이 component 를 분리하게 된다면 최소한 개발 로직에 대한 이해와 구조를 알아야 할 것이고, 
이를 API 연동하는 작업자들과 협업을 통해 설계가 되면 좋겠지만, 그렇지 못한 구조가 많은 관계로... 
여러가지 케이스를 생각하였지만 정리가 덜 된 상태라 추후에 다시 정리해봄.
