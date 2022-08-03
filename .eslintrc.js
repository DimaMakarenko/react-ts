module.exports = {
  parser: '@typescript-eslint/parser',
  // Specifies the ESLint parser for typescript
  parserOptions: {
    ecmaVersion: 2020,
    // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',
    // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  env: {
    'jest/globals': true,
  },
  plugins: ['jest', 'testing-library', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
    ],
    // forbids naming interfaces in lower case
    'react/jsx-uses-react': 'off',
    // off because New JSX Transform - https://uk.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/react-in-jsx-scope': 'off',
    // off because New JSX Transform
    '@typescript-eslint/no-unused-vars': 'off',
    // off because tsconfig have noUnusedLocals, noUnusedParameters
    // 'import/order': [
    //   'error',
    //   {
    //     groups: ['builtin', 'external', 'internal'],
    //     pathGroups: [
    //       {
    //         pattern: 'react',
    //         group: 'external',
    //         position: 'before',
    //       },
    //     ],
    //     'newlines-between': 'always',
    //     alphabetize: {
    //       order: 'asc',
    //       caseInsensitive: true,
    //     },
    //   },
    // ],
    // configure import order, import from react always first
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
      },
    ],
    // disallow unnecessary curly braces in JSX props and/or children
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect', 'cy'],
      },
    ],
    // configure asserts for cypress and jest
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'styled-components',
            message: 'Please import from styled-components/macro.',
          },
        ],
        patterns: ['!styled-components/macro'],
      },
    ], // styled-components enforce macro imports
  },
};
