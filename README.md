# Vuex Shopping Cart

## Getting Started

### Installing

```bash
$ npm install
```

### Running

```bash
$ npm run serve
```

<!-- ## Vuex 란?

-   Vuex는 Vue 애플리케이션에 대한 `상태 관리 패턴`이자 라이브러리
-   모든 컴포넌트간의 중앙 집중식 저장소 역할
-   Flux 패턴에서 기인함
-   Vue 공식 [devtools 확장 프로그램](https://github.com/vuejs/vue-devtools)과 통합되어 디버깅 가능

### Flux란?

MVC 패턴의 복잡한 데이터 흐름 문제를 해결하기 위한 패턴

#### Flux의 `단일 방향 흐름`

1. actions: view에서 사용자의 입력에 따른 발생하는 이벤트
2. dispatcher: 데이터를 변경하는 방법, 메소드
3. model: 화면에 표시할 데이터
4. view: 사용자에게 비춰지는 화면

![https://github.com/namjunemy/TIL/blob/master/Vue/img/07.PNG?raw=true](https://github.com/namjunemy/TIL/blob/master/Vue/img/07.PNG?raw=true)

### 상태관리 패턴

-   state: 컴포넌트 간 공유되는 `data`
-   view: 데이터가 표현될 `template`
-   actions: 사용자의 입력에 따라 반응할 `methods`

![https://vuex.vuejs.org/flow.png](https://vuex.vuejs.org/flow.png)

### Vuex가 필요한 이유

컴포넌트가 많아짐에 따라 컴포넌트 간에 데이터 전달이 어려워진다. 하위 컴포넌트로 부터 계속해서 전달해야 할 때, props를 선언해야 하므로 depth가 깊어질 수록 데이터 전달이 불편해진다.

`이벤트버스`를 사용할 경우

```JS
// App.vue
...
export const eventBus = new Vue();

Vue.prototype.$eventBus = eventBus
...
```

## Dispatch()

-   Vue컴포넌트는 `Dispatch([action 메소드명])` 를 통해 Vuex store의 Actions에 속한 메서드를 실행시킬 수 있다.

## Actions

-   API서버 통신과 같은 역할을 수행하는 메소드 그룹
-   state에 반영하기 전 데이터를 조회하고 가공하는 역할

## Commit()

-   Action 메소드 혹은 Vue컴포넌트에서 `Commit([mutation 메소드명])` 을 통해 Mutation에 속한 메소드를 실행시킬 수 있다.
-   컴포넌트에서는 \$store.commit(), Actions 메소드에서는 첫번째 인자로 넘겨받는 contecnt.commit() 으로 트리거시킨다.

## Mutations

-   Vuex store의 state를 변경시키기 위한 메소드 집합
-   Vuex는 stat의 조작은 오로지 Mutations의 메소드를 통해 수행하길 권장한다.
-   mutate 메서드는 없고 첫 번째 인자로 받는 state.[state 요소]로 수정한다.

## State

-   사용자가 정의한 상태를 저장
-   반응형이기에 v-model의 computed 메소드 중 get()이 선언되어 있다면 즉각적으로 바인딩한다.
-   Vue컴포넌트의 watch처럼 \$store.watch로 변화를 감지하고 핸들링할 수 있다.

## Getters

-   여러 컴포넌트에서 동일한 computed를 통해 하나의 state를 가져와야 한다면 Vuex store에 getters를 등록하여 computed처럼 활용할 수 있다.
-   첫 번째 인자로 state를 받는다.

## -->
