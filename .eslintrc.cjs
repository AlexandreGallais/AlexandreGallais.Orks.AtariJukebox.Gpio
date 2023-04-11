/* eslint-disable no-magic-numbers */
module.exports = {
    root: true,
    env : {
        browser: false,
        es2022 : true,
        node   : true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType : 'module',
    },
    plugins: ['import'],
    rules  : {
        'array-callback-return': [
            2,
            { checkForEach: true },
        ],
        'no-await-in-loop'               : [2],
        'no-constant-binary-expression'  : [2],
        'no-constructor-return'          : [2],
        'no-new-native-nonconstructor'   : [2],
        'no-promise-executor-return'     : [2],
        'no-self-compare'                : [2],
        'no-template-curly-in-string'    : [2],
        'no-unmodified-loop-condition'   : [2],
        'no-unreachable-loop'            : [2],
        'no-unused-private-class-members': [2],
        'no-use-before-define'           : [2],
        'require-atomic-updates'         : [2],
        'accessor-pairs'                 : [2],
        'arrow-body-style'               : [
            2,
            'always',
        ],
        'camelcase'             : [2],
        'consistent-return'     : [2],
        'curly'                 : [2],
        'default-case'          : [2],
        'default-case-last'     : [2],
        'default-param-last'    : [2],
        'eqeqeq'                : [2],
        'func-style'            : [2],
        'grouped-accessor-pairs': [
            2,
            'getBeforeSet',
        ],
        'init-declarations'           : [2],
        'logical-assignment-operators': [2],
        'new-cap'                     : [2],
        'no-alert'                    : [2],
        'no-bitwise'                  : [2],
        'no-caller'                   : [2],
        'no-console'                  : [2],
        'no-else-return'              : [2],
        'no-empty'                    : [2],
        'no-empty-function'           : [2],
        'no-empty-static-block'       : [2],
        'no-eval'                     : [2],
        'no-extend-native'            : [2],
        'no-extra-bind'               : [2],
        'no-floating-decimal'         : [2],
        'no-implicit-coercion'        : [2],
        'no-implicit-globals'         : [2],
        'no-implied-eval'             : [2],
        'no-inline-comments'          : [2],
        'no-invalid-this'             : [2],
        'no-iterator'                 : [2],
        'no-labels'                   : [2],
        'no-lone-blocks'              : [2],
        'no-lonely-if'                : [2],
        'no-loop-func'                : [2],
        'no-magic-numbers'            : [2],
        'no-mixed-operators'          : [2],
        'no-multi-assign'             : [2],
        'no-multi-str'                : [2],
        'no-nested-ternary'           : [2],
        'no-new'                      : [2],
        'no-new-func'                 : [2],
        'no-new-wrappers'             : [2],
        'no-octal-escape'             : [2],
        'no-param-reassign'           : [2],
        'no-plusplus'                 : [2],
        'no-proto'                    : [2],
        'no-return-assign'            : [2],
        'no-return-await'             : [2],
        'no-script-url'               : [2],
        'no-sequences'                : [2],
        'no-shadow'                   : [2],
        'no-throw-literal'            : [2],
        'no-undef-init'               : [2],
        'no-underscore-dangle'        : [2],
        'no-unneeded-ternary'         : [2],
        'no-useless-call'             : [2],
        'no-useless-computed-key'     : [2],
        'no-useless-concat'           : [2],
        'no-useless-constructor'      : [2],
        'no-useless-rename'           : [2],
        'no-useless-return'           : [2],
        'no-var'                      : [2],
        'no-warning-comments'         : [2],
        'object-shorthand'            : [2],
        'one-var'                     : [
            2,
            'never',
        ],
        'one-var-declaration-per-line': [
            2,
            'always',
        ],
        'operator-assignment'           : [2],
        'prefer-const'                  : [2],
        'prefer-destructuring'          : [2],
        'prefer-exponentiation-operator': [2],
        'prefer-named-capture-group'    : [2],
        'prefer-numeric-literals'       : [2],
        'prefer-object-has-own'         : [2],
        'prefer-object-spread'          : [2],
        'prefer-promise-reject-errors'  : [2],
        'prefer-regex-literals'         : [2],
        'prefer-rest-params'            : [2],
        'prefer-spread'                 : [2],
        'prefer-template'               : [2],
        'quote-props'                   : [
            2,
            'consistent-as-needed',
        ],
        'radix'                 : [2],
        'require-await'         : [2],
        'require-unicode-regexp': [2],
        'spaced-comment'        : [2],
        'symbol-description'    : [2],
        'vars-on-top'           : [2],
        'yoda'                  : [2],
        'array-bracket-newline' : [
            2,
            {
                multiline: true,
                minItems : 2,
            },
        ],
        'array-bracket-spacing': [2],
        'array-element-newline': [
            2,
            'always',
        ],
        'arrow-parens' : [2],
        'arrow-spacing': [2],
        'block-spacing': [2],
        'brace-style'  : [
            2,
            'allman',
        ],
        'comma-dangle': [
            2,
            'always-multiline',
        ],
        'comma-spacing'            : [2],
        'comma-style'              : [2],
        'computed-property-spacing': [2],
        'dot-location'             : [
            2,
            'property',
        ],
        'func-call-spacing'             : [2],
        'function-call-argument-newline': [
            2,
            'consistent',
        ],
        'function-paren-newline': [
            2,
            'consistent',
        ],
        'generator-star-spacing'  : [2],
        'implicit-arrow-linebreak': [2],
        'indent'                  : [
            2,
            4,
            { SwitchCase: 1 },
        ],
        'key-spacing': [
            2,
            { align: 'colon' },
        ],
        'keyword-spacing'      : [2],
        'line-comment-position': [2],
        'linebreak-style'      : [
            2,
            'unix',
        ],
        'new-parens'                      : [2],
        'no-extra-parens'                 : [2],
        'no-multi-spaces'                 : [2],
        'no-tabs'                         : [2],
        'no-trailing-spaces'              : [2],
        'no-whitespace-before-property'   : [2],
        'nonblock-statement-body-position': [2],
        'object-curly-newline'            : [
            2,
            { consistent: true },
        ],
        'object-curly-spacing': [
            2,
            'always',
        ],
        'object-property-newline': [2],
        'operator-linebreak'     : [
            2,
            'before',
        ],
        'padded-blocks': [
            2,
            'never',
        ],
        'quotes': [
            2,
            'single',
            { avoidEscape: true },
        ],
        'rest-spread-spacing': [2],
        'semi'               : [
            2,
            'always',
        ],
        'semi-spacing'          : [2],
        'semi-style'            : [2],
        'space-in-parens'       : [2],
        'space-infix-ops'       : [2],
        'space-unary-ops'       : [2],
        'switch-colon-spacing'  : [2],
        'template-curly-spacing': [2],
        'template-tag-spacing'  : [2],
        'wrap-iife'             : [
            2,
            'inside',
        ],
        'wrap-regex'        : [2],
        'yield-star-spacing': [2],

        'import/no-unresolved': 'error',
    },
    overrides: [
        {
            files  : ['**/*.ts'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:@typescript-eslint/strict',
                'plugin:import/typescript',
            ],
            parser       : '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType : 'module',
                project    : ['tsconfig.json'],
            },
            plugins : ['@typescript-eslint'],
            settings: {
                'import/parsers': {
                    '@typescript-eslint/parser': ['.ts'],
                },
                'import/resolver': {
                    typescript: {
                        alwaysTryTypes: true,
                        project       : ['tsconfig.json'],
                    },
                    node: true,
                },
            },
            rules: {
                '@typescript-eslint/consistent-indexed-object-style': [
                    2,
                    'index-signature',
                ],
                '@typescript-eslint/consistent-type-exports'       : [2],
                '@typescript-eslint/consistent-type-imports'       : [2],
                '@typescript-eslint/explicit-function-return-type' : [2],
                '@typescript-eslint/explicit-member-accessibility' : [2],
                '@typescript-eslint/explicit-module-boundary-types': [2],
                '@typescript-eslint/method-signature-style'        : [2],

                'camelcase'                           : [0],
                '@typescript-eslint/naming-convention': [
                    2,
                    {
                        selector: ['default'],
                        format  : ['camelCase'],
                    },
                    {
                        selector: ['class'],
                        format  : ['PascalCase'],
                    },
                    {
                        selector: ['objectLiteralProperty'],
                        format  : null,
                    },
                    {
                        selector: [
                            'interface',
                            'typeAlias',
                            'typeParameter',
                        ],
                        format: ['snake_case'],
                        custom: {
                            regex: '^type_',
                            match: true,
                        },
                    },
                    {
                        selector: ['enum'],
                        format  : ['snake_case'],
                        custom  : {
                            regex: '^enum_',
                            match: true,
                        },
                    },
                ],

                '@typescript-eslint/no-confusing-void-expression'  : [2],
                '@typescript-eslint/no-extraneous-class'           : [0],
                '@typescript-eslint/no-import-type-side-effects'   : [2],
                '@typescript-eslint/no-redundant-type-constituents': [2],
                '@typescript-eslint/no-require-imports'            : [2],
                '@typescript-eslint/no-type-alias'                 : [
                    2,
                    {
                        allowAliases   : 'in-unions',
                        allowTupleTypes: 'always',
                    },
                ],
                '@typescript-eslint/no-unnecessary-qualifier'   : [2],
                '@typescript-eslint/no-useless-empty-export'    : [2],
                '@typescript-eslint/parameter-properties'       : [2],
                '@typescript-eslint/prefer-enum-initializers'   : [2],
                '@typescript-eslint/prefer-readonly'            : [2],
                '@typescript-eslint/promise-function-async'     : [2],
                '@typescript-eslint/require-array-sort-compare' : [2],
                '@typescript-eslint/strict-boolean-expressions' : [2],
                '@typescript-eslint/switch-exhaustiveness-check': [2],

                'default-param-last'                   : [0],
                '@typescript-eslint/default-param-last': [2],

                'dot-notation'                   : [0],
                '@typescript-eslint/dot-notation': [0],

                'init-declarations'                   : [0],
                '@typescript-eslint/init-declarations': [2],

                'no-array-constructor'                   : [0],
                '@typescript-eslint/no-array-constructor': [0],

                'no-dupe-class-members'                   : [0],
                '@typescript-eslint/no-dupe-class-members': [2],

                'no-invalid-this'                   : [0],
                '@typescript-eslint/no-invalid-this': [2],

                'no-loop-func'                   : [0],
                '@typescript-eslint/no-loop-func': [2],

                'no-magic-numbers'                   : [0],
                '@typescript-eslint/no-magic-numbers': [
                    2,
                    {
                        ignoreEnums                  : true,
                        ignoreNumericLiteralTypes    : true,
                        ignoreReadonlyClassProperties: true,
                    },
                ],

                'no-redeclare'                   : [0],
                '@typescript-eslint/no-redeclare': [2],

                'no-shadow'                   : [0],
                '@typescript-eslint/no-shadow': [2],

                'no-use-before-define'                   : [0],
                '@typescript-eslint/no-use-before-define': [2],

                'no-return-await'                : [0],
                '@typescript-eslint/return-await': [2],

                'block-spacing'                   : [0],
                '@typescript-eslint/block-spacing': [2],

                'brace-style'                   : [0],
                '@typescript-eslint/brace-style': [
                    2,
                    'allman',
                ],

                'comma-dangle'                   : [0],
                '@typescript-eslint/comma-dangle': [
                    2,
                    'always-multiline',
                ],

                'comma-spacing'                   : [0],
                '@typescript-eslint/comma-spacing': [2],

                'func-call-spacing'                   : [0],
                '@typescript-eslint/func-call-spacing': [2],

                'keyword-spacing'                   : [0],
                '@typescript-eslint/keyword-spacing': [2],

                '@typescript-eslint/member-delimiter-style': [
                    2,
                    { multiline: {
                        delimiter  : 'comma',
                        requireLast: true,
                    } },
                ],

                'no-extra-parens'                   : [0],
                '@typescript-eslint/no-extra-parens': [2],

                'object-curly-spacing'                   : [0],
                '@typescript-eslint/object-curly-spacing': [
                    2,
                    'always',
                ],

                'quotes'                   : [0],
                '@typescript-eslint/quotes': [
                    2,
                    'single',
                    { avoidEscape: true },
                ],

                'semi'                   : [0],
                '@typescript-eslint/semi': [
                    2,
                    'always',
                ],

                'space-infix-ops'                   : [0],
                '@typescript-eslint/space-infix-ops': [2],

                '@typescript-eslint/type-annotation-spacing': [2],
            },
        },
    ],
};
