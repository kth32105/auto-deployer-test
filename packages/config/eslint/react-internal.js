import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { config as baseConfig } from './base.js';
/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config[]} */
export const config = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      'react/react-in-jsx-scope': 'off',
      // TypeScript를 사용하므로 PropTypes 검증이 필요 없음
      'react/prop-types': 'off',
      // 컴포넌트 displayName 필요 없음 (개발 도구에서 컴포넌트 이름 자동 감지)
      'react/display-name': 'off',
      // 배열 인덱스를 키로 사용하는 것은 때로는 필요함
      'react/no-array-index-key': 'warn',

      // 컴포넌트 관련 규칙
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-pascal-case': 'warn', // 컴포넌트 이름은 PascalCase로
      'react/jsx-no-leaked-render': 'warn', // 조건부 렌더링 시 잘못된 패턴 방지 (false, undefined 등의 누수)
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }], // 불필요한 중괄호 방지
      'react/jsx-no-useless-fragment': 'warn', // 불필요한 Fragment 방지

      // 훅 관련 규칙 강화 (exhaustive-deps는 유지하되 경고로만)
      'react-hooks/exhaustive-deps': 'warn', // useEffect의 의존성 배열 검사
      'react/hook-use-state': 'warn', // useState 사용 시 구조 분해 할당 사용 권장
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // 1. React와 React DOM 패키지
            ['^react$', '^react-dom$', '^react-router$', '^react-router-dom$'],
            // 2. React 관련 패키지 (hooks, router 등)
            ['^react-', '^@react'],
            // 3. 외부 라이브러리/패키지 (일반적인 npm 패키지)
            ['^@?\\w'],
            // 4. 내부 모듈 (@ 또는 ~ 로 시작하는 경로)
            ['^(@|~)(/.*|$)'],
            // 5. 부모 디렉토리 임포트 (../)
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // 6. 같은 디렉토리 임포트 (./)
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // 7. 스타일 임포트
            ['^.+\\.?(css|scss|sass|less|styl)$'],
            // 8. 타입 임포트
            ['^.+\\u0000$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'warn',
    },
  },
  // TypeScript 관련 추가 규칙
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // 더 엄격한 타입 검사
      '@typescript-eslint/no-explicit-any': 'off', // any 타입 사용 허용
      // 인터페이스, 타입 이름 컨벤션은 개인/팀 선호에 맡김
      '@typescript-eslint/naming-convention': 'off',
      // 빈 객체 타입({}) 사용 허용 - ban-types 규칙이 분할됨
      '@typescript-eslint/no-empty-object-type': 'off', // 빈 객체 타입({}) 허용
      // 미사용 변수는 경고로만 (언더스코어 접두사면 무시)
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      // 미사용 표현식 규칙 조정 (a && b() 패턴 허용)
      '@typescript-eslint/no-unused-expressions': [
        'warn',
        {
          allowShortCircuit: true, // a && b() 패턴 허용
          allowTernary: true, // a ? b() : c() 패턴 허용
          allowTaggedTemplates: true, // 태그드 템플릿 허용
        },
      ],
      // 추가 완화 규칙
      '@typescript-eslint/ban-ts-comment': 'off', // 타입스크립트 주석 관련 경고 비활성화
      '@typescript-eslint/no-non-null-assertion': 'off', // ! 연산자 사용 허용
      '@typescript-eslint/explicit-module-boundary-types': 'off', // 반환 타입 명시 강제하지 않음
      '@typescript-eslint/no-empty-interface': 'off', // 빈 인터페이스 허용 (확장성 위해)
    },
  },
  // 일반적인 코드 스타일 규칙
  {
    rules: {
      'prefer-const': 'warn', // 재할당되지 않는 변수는 const 사용 권장
      'no-duplicate-imports': 'warn', // 중복 import 방지
      'object-shorthand': 'warn', // 객체 속성 단축 구문 사용 권장
      'prefer-template': 'warn', // 문자열 연결 시 템플릿 리터럴 사용 권장
    },
  },
];
