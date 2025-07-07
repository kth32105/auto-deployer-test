# Labuddy

모노레포 구조의 React 프로젝트입니다.

## 프로젝트 구조

### Apps

- `apps/dealer` - 딜러용 React 앱 (Vite)
- `apps/user` - 사용자용 React 앱 (Vite)

### Packages

- `packages/ui` - 공통 UI 컴포넌트 라이브러리 (Tailwind CSS + shadcn/ui)
- `packages/utils` - 공통 유틸리티 함수들
- `packages/store` - 상태 관리 (Zustand)
- `packages/types` - 공통 TypeScript 타입 정의
- `packages/config` - 설정 파일들
  - `eslint` - ESLint 설정
  - `typescript` - TypeScript 설정
  - `tailwind` - Tailwind CSS 설정
  - `vite` - Vite 설정
  - `postcss` - PostCSS 설정

## 기술 스택

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Forms**: React Hook Form
- **State Management**: Zustand, TanStack Query
- **Build Tool**: Vite
- **Monorepo**: Turborepo
- **Package Manager**: pnpm
- **Code Quality**: ESLint, Prettier

## 개발 환경 설정

### 의존성 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
# 모든 앱 실행
pnpm dev

# 특정 앱만 실행
pnpm dev:dealer   # 딜러 앱
pnpm dev:user     # 사용자 앱
```

### 빌드

```bash
# 모든 앱과 패키지 빌드
pnpm build
```

### 코드 품질 관리

```bash
# 린팅
pnpm lint

# 포맷팅
pnpm format

# 타입 체크
pnpm check-types
```

## 주요 컴포넌트

### UI 컴포넌트

- `Header` - 반응형 헤더 (PC/모바일)
- `Form` - React Hook Form 기반 폼 컴포넌트
- `Button`, `Input`, `Card` 등 기본 UI 컴포넌트
