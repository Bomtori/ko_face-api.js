# ko_face-api.js
ITS 2023년도 2학기 인턴 얼굴 및 표정 인식 js 프로젝트

## 개요

체험 홈페이지에 얼굴 및 표정 인식 알고리즘을 기재하기 위해 제작한 코드
한국인들도 쉽게 따라할 수 있게 주석과 사용 방법을 설명함


## 순서

1. 환경 구성
   1. Visual Studio code 사용하여 새로운 폴더 생성
   2. 확장<ctrl + shift + x>에서 Live server 다운로드
   3. 우측 하단 Go Live 버튼 클릭 후 서버가 잘 실행되는지 확인
2. 파일 소개
   1. models : github에서 가져온 파일 이 코드내에서는 expression, landmark, recognition, detector만 가능하다.
   2. face-api.min.js : api를 가져와 실행할 수 있도록 도와준다.
   3. index.html : 홈페이지 화면에서 영상을 볼 수 있도록 도와준다.
   4. script.js : 가져온 모델들을 홈페이지에서 볼 수 있도록 튜닝한다.
   5. style.js : detect를 진행시 제대로 인식하지 못할 때 padding을 맞춰 정확하게 맞춰준다. 

### 활용데이터

koush / face-api.js

## 사용기술

Visual Studio Code
확장 Live Server `5.7.9`

## 사용언어
- JavaScript
- CSS
- HTML



