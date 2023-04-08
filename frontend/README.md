# frontend 공부

## TODO

* ~~로그인 페이지~~ (로그인 페이지는 따로 분리하는게 좋다는데 나중에 개선해보기)
* ~~카테고리 리스트~~
* ~~카테고리 관리~~
* ~~카테고리 게시글 리스트~~
* ~~전체글 리스트~~
* ~~게시글 작성 (업로드 기능 제외)~~
* ~~게시글 보기~~
* 게시글 이미지 첨부 기능
* 게시글 파일 첨부 기능
* 게시글 코드 하이라이팅 지원
* 댓글 작성
* 댓글 보기
* 회원가입
* 회원 프로필 설정
* 회원 게시판 (질문이나 안부인사)
* 최근에 작성한 게시글 리스트
* 최근에 댓글이 달린 게시글 리스트
* 게시글 TOC 기능 (따라다니는 목차)
* (선택) DB 문자열 변경 https://nakanara.tistory.com/230

## 참고자료

### 1. Route 설정으로 데이터 넘기기

```js
<div className="App">
    <HashRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/about/:id' element={<About/>}></Route> {/* :id 부분이 data param */}
        </Routes>
    </HashRouter>
</div>

const about = (props) => {
    console.log(props);
    console.log(props.match.params.id);
}
```
---
### 2. Bootstrap 참고

* https://react-bootstrap.netlify.app/components/alerts
---

### 3. CKEditor5 적용

* https://velog.io/@yund_272/%EB%A6%AC%EC%95%A1%ED%8A%B8-CKEditor5-%EC%A0%81%EC%9A%A9%EA%B8%B0-88vylruv


---
### 4. Babel Parsing Error

CKEditor5를 커스텀해서 쓰려면, webpack을 추출해야하는데 이때 모든 React 코드에 babel error가 뜸.
해결방법은

1. package.json 열어서 아래와 같이 수정하기

```bash
{
/*... skip ... */
"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ],
    "env": {
      "NODE_ENV": "development"
    }
  },
/*... skip ... */
}
```
위의 코드가 추가되면, NODE_ENV와 관련된 에러가 뜨는데, 아래의 패키지를 설치하면 된다.

```javascript
npm install -g win-node-env
```

단점은 프로젝트 빌드시에 NODE_ENV 환경을 찾을 수 없다면서 에러가 뜬다.
그래서 찾은 두번째 방법이 가장 완벽하다.

2. 똑같이 package.json 열어서 아래와 같이 수정하기

```bash
/*... skip ... */
"eslintConfig": {
    "extends": [
        "react-app",
        "react-app/jest"
    ],
    "parserOptions": {
        "babelOptions": {
            "presets": [
                ["babel-preset-react-app", false]
            ]
        }
    }
},
/*... skip ... */
```

출처
https://github.com/facebook/create-react-app/issues/12070
https://stackoverflow.com/questions/11928013/node-env-is-not-recognized-as-an-internal-or-external-command-operable-comman

---
### 5. 목차 (ToC)

https://naubull2.tistory.com/166

---

### 6. Json Web Token

https://tech-monster.tistory.com/95

---

## 7. Nginx로 배포

https://tobegood.tistory.com/entry/Nginx%EB%A1%9C-React%EB%A5%BC-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0-%EC%9A%B0%EB%B6%84%ED%88%AC-%ED%99%98%EA%B2%BD

---

## 8. React.js SEO 최적화

https://starlight-j-h.tistory.com/107?category=1021682

---