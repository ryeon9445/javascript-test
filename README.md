# javascript-test

## config 모듈 사용해보기

> test-config.js

config모듈을 사용해서 ./config 디렉토리 내부의 JSON파일을 불러온다.  
NODE_ENV에 지정한 환경변수와 동일한 파일명을 ./config 디렉토리 내에서 찾는다.

default 환경의 데이터 불러오기

```
NODE_ENV=default node ./bin/test-config.js
```

production 환경의 데이터 불러오기

```
NODE_ENV=production node ./bin/test-config.js
```
