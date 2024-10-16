
# 페이플러스

급하게 알바가 필요할 때 !

사장님도 알바생도 이용하는, 기존보다 높은 시급으로 알바를 빠르게 구할 수 있는 서비스입니다
![image](https://github.com/user-attachments/assets/7113795c-2371-401b-821f-e050410393ce)

- **베포 URL** : https://payplus-x.vercel.app/
- **프로젝트 노션** : https://sumptuous-eoraptor-948.notion.site/a0ebc3748be24b4aada43fc41d1545da?v=7b54bd80d081431a862e48295f4e7077&pvs=4

</br>

## 기술 스택

### 개발 및 베포환경
<div>
 <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
 <img src="https://img.shields.io/badge/next.js-black?style=for-the-badge&logo=next.js&logoColor=white" />
 <img src="https://img.shields.io/badge/scss_modules-CC6699?style=for-the-badge&logo=scss_modules&logoColor=white" />
 </br>
 <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
 <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white" />
 <img src="https://img.shields.io/badge/vercel-black?style=for-the-badge&logo=vercel&logoColor=white" />
 <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
 <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" />
</div>

### 협업툴
<div>
 <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />
 <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" />
 <img src="https://img.shields.io/badge/notion-white?style=for-the-badge&logo=notion&logoColor=black" />
 <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
</div>

</br>

## 프로젝트 규칙
### 브랜치 전략
Github Flow에 백업용 브랜치를 추가한 형태로 main, develop, feature, refactor, fix를 사용합니다.

#### 브랜치 종류
- main: 배포를 위한 브랜치 (develop -> PR -> main)
- develop: 개발 통합을 위한 브랜치 (feature -> PR -> develop)
- feature: 기능을 개발을 위한 브랜치
- refactor: 코드 리팩토링을 위한 브랜치
- fix: 긴급하게 수정하는 브랜치

#### 브랜치 관리 및 커밋 전략
- 깃 issue를 통해 브랜치를 생성하였습니다.
- issue 번호를 #을 이용하여 포함시켜 추적하기 편하게 만들었습니다. (ex: feat/#2-Login-Page)
- 커밋할 때에는 issue 번호와 어떤 기능인지 작성한 뒤 커밋하였습니다.
- 목표한 작업이 끝나면 develop으로 PR을 생성하는 방식으로 변경사항을 반영하며, git merge로 병합합니다.
- PR은 최소 2명의 승인이 있어야 병합 가능하며, 급하지 않다면 4명 모두 승인한 뒤 병합하도록 합니다.
- PR을 올린 브랜치가 develop 브랜치에 merge가 되면 팀원 모두 브랜치를 최신화시켜 충돌 오류를 최대한 방지하였습니다.

</br>

## 개발 문화
- 매일 아침마다 데일리 스크럼에 적극적으로 참석하여 화면을 공유해서 진행상황을 공유하였습니다.
- 매일 오후 2시부터 6시까지 코어타입을 정해 Discord 음성채팅방에 접속하여 빠른 의사소통이 가능하도록 하였습니다.
- 회의에 불참하거나 휴가를 사용할 경우에는 하루전에 팀원에게 공유합니다.
- PR이 올라가서 merge가 되면 팀채팅방에 알려준 뒤 모두 브랜치를 최신화시켰는지 확인하였습니다.
- 잘 이해가 안되거나 모르는 부분이 있으면 팀원들과 공유하여 해결하였습니다.

</br>

## 프로젝트 폴더 구조
```
10teamproject
├─ .env
├─ .eslintrc.json
├─ .gitignore
├─ .prettierrc.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ next.svg
│  └─ vercel.svg
├─ README.md
├─ s rc 
│  ├─ assets
│  │  ├─ icons // svg파일
│  │  └─ images // jpeg,png 파일
│  ├─ components // 페이지가 아닌 컴포넌트들
│  │  └─ login // 헤당페이지에 필요한 컴포넌트 폴더생성
│  │     ├─ Login.module.scss
│  │     └─ LoginComponents.tsx // 필요한 컴포넌트 생성
│  ├─ form 
│  │  └─ LoginForm.tsx
│  ├─ hooks // 필요한 훅들은 커스텀훅으로 분리
│  │  └─ hooks.ts
│  ├─ pages // 기본 페이지 폴더
│  │  ├─ api 
│  │  │  └─ AxiosInstance.ts
│  │  ├─ login // 헤당 주소로 들어갈 폴더 생성
│  │  │  └─ index.tsx // 위 폴더 주소로 보여줄 페이지 생성
│  │  ├─ _app.tsx
│  │  └─ _document.tsx
│  ├─ styles
│  │  └─ globals.css
│  ├─ types
│  │  └─ type.ts // 재사용가능한 타입들 모아 놓는 폴더
│  └─ utils
│     └─ utils.ts // 훅이아닌 필요로 하는 유틸파일들 ex) 시간계산 등
├─ tsconfig.json
└─ yarn.lock
```

</br>

