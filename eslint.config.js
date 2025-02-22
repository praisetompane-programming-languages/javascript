import js from "@eslint/js";
import globals from "globals";
import c_spell_plugin from "@cspell/eslint-plugin/configs";

export default [
    js.configs.recommended,
    c_spell_plugin.recommended,
    {
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error",
            "@cspell/spellchecker": [
                "error",
                { customWordListFile: ".spellcheck_exceptions_dictionary.txt" },
            ],
        },
        languageOptions: {
            ecmaVersion: 2024,
            globals: {
                //...globals.node,
                //...globals.jest,
            },
        },
        ignores: ["legacy/*"]   
    }
];
