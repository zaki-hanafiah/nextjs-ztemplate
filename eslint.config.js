import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'
import nextPlugin from '@next/eslint-plugin-next'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    {
        ignores: ['.next/**', 'node_modules/**'],
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            '@next/next': nextPlugin,
        },
        rules: {
            ...eslintConfigPrettier.rules,
            '@next/next/no-html-link-for-pages': 'off',
            '@typescript-eslint/naming-convention': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    }
)
