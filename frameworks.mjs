export default [
  {
    id: "svelte",
    title: "Svelte",
    img: "framework/svelte.svg",
    eslint: {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
      plugins: ["svelte3"],
    },
    playgroundURL: "https://svelte.dev/repl",
    documentationURL: "https://svelte.dev/",
    filesSorter(files) {
      return [
        files.find(({ fileName }) => fileName === "App.svelte"),
        ...(files.filter(({ fileName }) => fileName !== "App.svelte") || []),
      ].filter(Boolean);
    },
  },
  {
    id: "react",
    title: "React",
    img: "framework/react.svg",
    eslint: {
      files: ["**/react/*.jsx", "**/react/*.tsx"],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
      ],
      settings: {
        react: {
          version: "detect",
        },
      },
    },
    playgroundURL: "https://codesandbox.io/s/mystifying-goldberg-6wx04b",
    documentationURL: "https://reactjs.org/docs/getting-started.html",
    filesSorter(files) {
      return [
        files.find(({ fileName }) => fileName === "App.jsx"),
        ...(files.filter(({ fileName }) => fileName !== "App.jsx") || []),
      ].filter(Boolean);
    },
  },
  {
    id: "vue2",
    title: "Vue 2",
    img: "framework/vue.svg",
    eslint: {
      files: ["**/vue2/*.vue"],
      extends: ["eslint:recommended", "plugin:vue/recommended"],
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
    playgroundURL: "",
    documentationURL: "https://v2.vuejs.org",
    filesSorter(files) {
      return [
        files.find(({ fileName }) => fileName === "App.vue"),
        ...(files.filter(({ fileName }) => fileName !== "App.vue") || []),
      ].filter(Boolean);
    },
  },
  {
    id: "vue3",
    title: "Vue 3",
    img: "framework/vue.svg",
    eslint: {
      files: ["**/vue3/*.vue"],
      env: {
        "vue/setup-compiler-macros": true,
      },
      extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
    playgroundURL: "https://sfc.vuejs.org",
    documentationURL: "https://vuejs.org/guide",
    filesSorter(files) {
      return [
        files.find(({ fileName }) => fileName === "App.vue"),
        ...(files.filter(({ fileName }) => fileName !== "App.vue") || []),
      ].filter(Boolean);
    },
  },
  {
    id: "angular",
    title: "Angular",
    img: "framework/angular.svg",
    eslint: [
      {
        files: ["**/angular/**"],
        parserOptions: {
          project: ["tsconfig.app.json", "tsconfig.spec.json"],
          createDefaultProgram: true,
        },
        extends: [
          "plugin:@angular-eslint/recommended",
          // This is required if you use inline templates in Components
          "plugin:@angular-eslint/template/process-inline-templates",
        ],
        rules: {
          /**
           * Any TypeScript source code (NOT TEMPLATE) related rules you wish to use/reconfigure over and above the
           * recommended set provided by the @angular-eslint project would go here.
           */
          "@angular-eslint/directive-selector": [
            "error",
            { type: "attribute", prefix: "app", style: "camelCase" },
          ],
          "@angular-eslint/component-selector": [
            "error",
            { type: "element", prefix: "app", style: "kebab-case" },
          ],
        },
      },
      {
        files: ["**/angular/*.html"],
        extends: ["plugin:@angular-eslint/template/recommended"],
        rules: {
          /**
           * Any template/HTML related rules you wish to use/reconfigure over and above the
           * recommended set provided by the @angular-eslint project would go here.
           */
        },
      },
    ],
    playgroundURL: "https://codesandbox.io/s/angular",
    documentationURL: "https://angular.io/docs",
    filesSorter(files) {
      return [
        files.find(({ fileName }) => fileName === "app.module.ts"),
        files.find(({ fileName }) => fileName === "app.component.ts"),
        files.find(({ fileName }) => fileName === "app.component.html"),
        ...(files.filter(
          ({ fileName }) =>
            ![
              "app.module.ts",
              "app.component.ts",
              "app.component.html",
            ].includes(fileName)
        ) || []),
      ].filter(Boolean);
    },
  },
  {
    id: "solid",
    title: "SolidJS",
    img: "framework/solid.svg",
    eslint: {
      files: ["**/solid/*.jsx"],
      plugins: ["solid"],
      extends: ["eslint:recommended", "plugin:solid/recommended"],
    },
    playgroundURL: "https://playground.solidjs.com/",
    documentationURL: "https://www.solidjs.com/",
    filesSorter(files) {
      return [
        files.find(({ fileName }) => fileName === "App.jsx"),
        ...(files.filter(({ fileName }) => fileName !== "App.jsx") || []),
      ].filter(Boolean);
    },
  },
  {
    id: "lit",
    title: "Lit",
    img: "framework/lit.svg",
    eslint: {
      files: ["**/lit/**"],
      plugins: ["lit"],
      parser: "@babel/eslint-parser",
      extends: ["plugin:lit/recommended"],
    },
    playgroundURL: "https://lit.dev/playground",
    documentationURL: "https://lit.dev",
    filesSorter(files) {
      return [
        files.find(({ fileName }) => fileName === "index.html"),
        files.find(({ fileName }) => fileName === "x-app.js"),
        ...(files.filter(
          ({ fileName }) => !["index.html", "x-app.js"].includes(fileName)
        ) || []),
      ].filter(Boolean);
    },
  },
  {
    id: "ember",
    title: "Ember",
    img: "framework/ember.svg",
    eslint: {
      files: ["**/ember/**"],
      plugins: ["ember"],
      parser: "@babel/eslint-parser",
      extends: ["plugin:ember/recommended"],
    },
    playgroundURL: "https://ember-twiddle.com",
    documentationURL: "https://emberjs.com",
    filesSorter(files) {
      return [
        files.find(({ fileName }) => fileName === "app.hbs"),
        files.find(({ fileName }) => fileName === "app.js"),
        ...(files.filter(
          ({ fileName }) => !["app.hbs", "app.js"].includes(fileName)
        ) || []),
      ].filter(Boolean);
    },
  },
  {
    id: "alpine",
    title: "Alpine",
    img: "framework/alpine.svg",
    eslint: {
      files: ["**/alpine/**"],
      extends: ["eslint:recommended"],
    },
    playgroundURL: "https://codesandbox.io/s/7br3q8",
    documentationURL: "https://alpinejs.dev/start-here",
    filesSorter(files) {
      return files;
    },
  },
  {
    id: "qwik",
    title: "Qwik",
    img: "framework/qwik.svg",
    eslint: {
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      files: ["**/qwik/**"],
      extends: ["eslint:recommended", "plugin:qwik/recommended"],
      rules: {
        "qwik/valid-lexical-scope": "off",
      },
    },
    playgroundURL: "https://qwik.builder.io/playground",
    documentationURL: "https://qwik.builder.io/docs/overview",
    filesSorter(files) {
      return [
        files.find(({ fileName }) => fileName === "App.tsx"),
        ...(files.filter(({ fileName }) => !["App.tsx"].includes(fileName)) ||
          []),
      ].filter(Boolean);
    },
  },
  {
    id: "aurelia1",
    title: "Aurelia 1",
    img: "framework/aurelia.svg",
    eslint: {
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      files: ["**/aurelia1/**"],
      extends: ["eslint:recommended"],
    },
    playgroundURL: "https://codesandbox.io/s/ppmy26opw7",
    documentationURL: "http://aurelia.io/docs/",
    filesSorter(files) {
      return [
        files.find(({ fileName }) => fileName === "app.html"),
        files.find(({ fileName }) => fileName === "app.ts"),
        ...(files.filter(
          ({ fileName }) => !["app.html", "app.ts"].includes(fileName)
        ) || []),
      ].filter(Boolean);
    },
  },
];
