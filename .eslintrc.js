module.exports = {
  'settings': {
    'react': {
      'version': 'detect',
    },
    'import/resolver': {
      'node': {
        'extensions': ['.ts', '.tsx'],
      },
      'typescript': {},
    },
    'import/ignore': ['node_modules/*'],
  },
  'extends': [
    'standard',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'plugin:storybook/recommended',
  ],
  'globals': {
    'globalThis': false,
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': ['react', 'prettier', 'import'],
  'rules': {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': [
      2,
      {
        'ignore': ['children'],
      },
    ],
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
      },
    ],
    'object-shorthand': 'error',
    'quote-props': ['error', 'consistent'],
    'dot-notation': 'off',
    'template-curly-spacing': 'off',
    'indent': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'block',
          'block-like',
          'cjs-export',
          'class',
          'const',
          'export',
          'import',
          'let',
          'var',
        ],
      },
      {
        blankLine: 'always',
        prev: [
          'block',
          'block-like',
          'cjs-export',
          'class',
          'const',
          'export',
          'import',
          'let',
          'var',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'any',
        prev: ['export', 'import'],
        next: ['export', 'import'],
      },
      {
        blankLine: 'always',
        prev: ['multiline-let', 'multiline-var', 'multiline-const'],
        next: ['multiline-let', 'multiline-var', 'multiline-const'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: ['multiline-let', 'multiline-var', 'multiline-const'],
      },
      {
        blankLine: 'always',
        prev: ['multiline-let', 'multiline-var', 'multiline-const'],
        next: ['const', 'let', 'var'],
      },
    ],
  },
}
