import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";

export default [
    js.configs.recommended,
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            "react": react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "jsx-a11y": jsxA11y,
        },
        rules: {
            // Reglas generales de JavaScript
            "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "no-console": "warn",
            "no-debugger": "error",
            "prefer-const": "error",
            "no-var": "error",

            // Reglas específicas de React
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],

            // Reglas de formato y estilo
            indent: ["error", 4, { "SwitchCase": 1 }],
            quotes: ["error", "single"],
            semi: ["error", "always"],
            "comma-dangle": ["error", "always-multiline"],
            "object-curly-spacing": ["error", "always"],
            "array-bracket-spacing": ["error", "never"],

            // Reglas de accesibilidad
            "jsx-a11y/alt-text": "warn",
            "jsx-a11y/anchor-has-content": "warn",
            "jsx-a11y/anchor-is-valid": "warn",

            // Reglas de rendimiento
            "react/jsx-no-bind": "warn",
            "react/jsx-key": "error",
            "react/jsx-no-duplicate-props": "error",
            "react/jsx-no-undef": "error",
            "react/no-array-index-key": "warn",
            "react/no-danger": "warn",
            "react/no-deprecated": "warn",
            "react/no-direct-mutation-state": "error",
            "react/no-find-dom-node": "warn",
            "react/no-is-mounted": "warn",
            "react/no-render-return-value": "warn",
            "react/no-string-refs": "warn",
            "react/no-unescaped-entities": "warn",
            "react/no-unknown-property": "warn",
            "react/no-unsafe": "warn",
            "react/self-closing-comp": "error",
            "react/sort-comp": "warn",
            "react/sort-prop-types": "warn",
            "react/style-prop-object": "warn",
            "react/void-dom-elements-no-children": "error",
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    {
        files: ["**/*.test.{js,jsx}", "**/*.spec.{js,jsx}", "**/__tests__/**/*"],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
        rules: {
            "no-console": "off",
        },
    },
    {
        ignores: [
            "node_modules/**",
            "dist/**",
            "build/**",
            "coverage/**",
            "*.config.js",
            "*.config.mjs",
        ],
    },
];
