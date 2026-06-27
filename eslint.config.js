import pluginVue from 'eslint-plugin-vue'
import { withVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'

export default withVueTs(
  {
    ignores: [
      '.DS_Store',
      'node_modules',
      'coverage',
      'dist',
      'ios',
      'android',
      '.env.local',
      '.env.*.local',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      '.idea',
      '.vscode',
      '*.suo',
      '*.ntvs*',
      '*.njsproj',
      '*.sln',
      '*.sw?',
    ],
  },
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        process: 'readonly',
      },
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/no-deprecated-slot-attribute': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
)
