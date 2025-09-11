var d=Object.defineProperty,a=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var l=(s,e,i)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i,r=(s,e)=>{for(var i in e||(e={}))x.call(e,i)&&l(s,i,e[i]);if(o)for(var i of o(e))j.call(e,i)&&l(s,i,e[i]);return s},t=(s,e)=>a(s,u(e));import{j as n}from"./iframe-DldSfwU-.js";import{useMDXComponents as h}from"./index-DelgR-sQ.js";import{M as g}from"./blocks-zF-hAATi.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFfcEqSA.js";import"./index-xpI64LTH.js";function c(s){const e=r(r({a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul"},h()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(g,{title:"Contributing"}),`
`,n.jsx(e.h1,{id:"contributing-to-chop-logic-components",children:"Contributing to Chop Logic Components"}),`
`,n.jsxs(e.p,{children:["Thank you for your interest in contributing to ",n.jsx(e.strong,{children:"Chop Logic"}),`! We appreciate your help in improving and maintaining this
project. Before you get started, please read through the guidelines below to ensure a smooth contribution process.`]}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#code-of-conduct",children:"Code of Conduct"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#how-to-contribute",children:"How to Contribute"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#reporting-issues",children:"Reporting Issues"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#submitting-pull-requests",children:"Submitting Pull Requests"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#feature-requests",children:"Feature Requests"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#development-workflow",children:"Development Workflow"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#commit-rules",children:"Commit Rules"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#branch-names",children:"Branch Names"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#coding-guidelines",children:"Coding Guidelines"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#testing",children:"Testing"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#license",children:"License"})}),`
`]}),`
`,n.jsx(e.h2,{id:"code-of-conduct",children:"Code of Conduct"}),`
`,n.jsxs(e.p,{children:["Please follow our ",n.jsx(e.a,{href:"CODE_OF_CONDUCT.md",children:"Code of Conduct"})," to ensure a welcoming and inclusive environment for everyone."]}),`
`,n.jsx(e.h2,{id:"how-to-contribute",children:"How to Contribute"}),`
`,n.jsx(e.h3,{id:"reporting-issues",children:"Reporting Issues"}),`
`,n.jsxs(e.p,{children:[`If you encounter a bug, performance issue, or have a suggestion for improvement, please open an issue in
our `,n.jsx(e.a,{href:"https://github.com/SavouryGin/chop-logic-components/issues",rel:"nofollow",children:"GitHub issue tracker"})," with the following details:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"A clear and descriptive title."}),`
`,n.jsx(e.li,{children:"Steps to reproduce the issue."}),`
`,n.jsx(e.li,{children:"Expected vs. actual behavior."}),`
`,n.jsx(e.li,{children:"Environment details (e.g., OS, browser, Chop Logic version)."}),`
`,n.jsx(e.li,{children:"Any relevant screenshots or logs."}),`
`]}),`
`,n.jsx(e.h3,{id:"submitting-pull-requests",children:"Submitting Pull Requests"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Fork the repository"})," and create a new branch:"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`git checkout -b feat/your-feature-name
`})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Make your changes"}),", ensuring they align with our ",n.jsx(e.a,{href:"https://github.com/ChopLogic/chop-logic-components/blob/main/CONTRIBUTING.md",rel:"nofollow",children:"coding guidelines"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Run tests"})," locally before submitting:"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`npm run test
`})}),`
`,n.jsxs(e.ol,{start:"4",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Commit your changes"}),` with a meaningful message
following `,n.jsx(e.a,{href:"https://www.conventionalcommits.org/",rel:"nofollow",children:"Conventional Commits"}),":"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`git commit -m "feat: add new button variant"
`})}),`
`,n.jsxs(e.ol,{start:"5",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Push your changes"})," to your forked repository:"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`git push origin feat/your-feature-name
`})}),`
`,n.jsxs(e.ol,{start:"6",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Open a pull request (PR)"})," against the ",n.jsx(e.code,{children:"main"})," branch and fill in the provided PR template."]}),`
`]}),`
`,n.jsx(e.h4,{id:"pull-request-guidelines",children:"Pull Request Guidelines"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keep your PR focused and concise."}),`
`,n.jsx(e.li,{children:"Link related issues in your PR description."}),`
`,n.jsx(e.li,{children:"Ensure CI checks pass before requesting a review."}),`
`,n.jsx(e.li,{children:"Document new features or changes in Storybook if applicable."}),`
`]}),`
`,n.jsx(e.h3,{id:"feature-requests",children:"Feature Requests"}),`
`,n.jsx(e.p,{children:"We welcome feature requests! Please open an issue and describe:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The problem you're trying to solve."}),`
`,n.jsx(e.li,{children:"Potential API suggestions."}),`
`,n.jsx(e.li,{children:"Any related discussion or examples."}),`
`]}),`
`,n.jsx(e.h2,{id:"development-workflow",children:"Development Workflow"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Clone the repository:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`git clone git@github.com:SavouryGin/chop-logic-components.git
cd chop-logic-components
`})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsx(e.li,{children:"Install dependencies:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`npm install
`})}),`
`,n.jsxs(e.ol,{start:"3",children:[`
`,n.jsx(e.li,{children:"Start development server:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`npm start
`})}),`
`,n.jsxs(e.ol,{start:"4",children:[`
`,n.jsx(e.li,{children:"Make changes and test using Storybook."}),`
`]}),`
`,n.jsx(e.h2,{id:"commit-rules",children:"Commit Rules"}),`
`,n.jsxs(e.p,{children:["We enforce ",n.jsx(e.a,{href:"https://www.conventionalcommits.org/",rel:"nofollow",children:"Conventional Commits"}),` to maintain a consistent commit history. A
pre-commit hook is set up to lint commit messages, and commits that do not follow the correct format will be rejected.`]}),`
`,n.jsx(e.p,{children:"Commit message structure:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`type(scope): description

Example:
feat: add primary variant
fix: correct validation logic
`})}),`
`,n.jsx(e.p,{children:"Allowed commit types:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"feat"}),": A new feature (triggers a minor version bump)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fix"}),": A bug fix (triggers a patch version bump)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"chore"}),": Routine tasks or dependency updates"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"docs"}),": Documentation updates"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"refactor"}),": Code changes that do not fix a bug or add a feature"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"test"}),": A new unit test or tests refactoring"]}),`
`]}),`
`,n.jsx(e.h2,{id:"branch-names",children:"Branch Names"}),`
`,n.jsx(e.p,{children:"Our workflow automates npm versioning based on the branch name. Please use the following branch name conventions:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"feat/*"})," – Increments ",n.jsx(e.strong,{children:"minor"})," version (e.g., ",n.jsx(e.code,{children:"feat/new-component"})," → ",n.jsx(e.code,{children:"1.x.0"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fix/*"})," – Increments ",n.jsx(e.strong,{children:"patch"})," version (e.g., ",n.jsx(e.code,{children:"fix/button-bug"})," → ",n.jsx(e.code,{children:"1.0.x"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"release/*"})," – Increments ",n.jsx(e.strong,{children:"major"})," version (e.g., ",n.jsx(e.code,{children:"release/v2.0"})," → ",n.jsx(e.code,{children:"2.0.0"}),")"]}),`
`]}),`
`,n.jsx(e.h2,{id:"coding-guidelines",children:"Coding Guidelines"}),`
`,n.jsx(e.p,{children:"Please follow these guidelines to maintain code consistency:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Follow the project's existing coding style (ESLint and Prettier)."}),`
`,n.jsx(e.li,{children:"Write clear and concise documentation."}),`
`,n.jsx(e.li,{children:"Prefer functional components and hooks."}),`
`,n.jsx(e.li,{children:"Use TypeScript for type safety."}),`
`,n.jsx(e.li,{children:"Keep components reusable and accessible."}),`
`]}),`
`,n.jsx(e.h2,{id:"testing",children:"Testing"}),`
`,n.jsxs(e.p,{children:["We use ",n.jsx(e.strong,{children:"Vitest"})," and ",n.jsx(e.strong,{children:"React Testing Library"})," for testing. Ensure all tests pass before submitting changes:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`npm run test
`})}),`
`,n.jsx(e.p,{children:"Write tests for new components and features to maintain quality and prevent regressions."}),`
`,n.jsx(e.p,{children:"To check the code coverage run:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`npm run coverage
`})}),`
`,n.jsx(e.h2,{id:"license",children:"License"}),`
`,n.jsxs(e.p,{children:["By contributing to Chop Logic, you agree that your contributions will be licensed under the ",n.jsx(e.a,{href:"https://github.com/ChopLogic/chop-logic-components/blob/main/LICENSE",rel:"nofollow",children:"MIT"})," license."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.p,{children:`Thanks for contributing to Chop Logic! Your support helps us create a better, more reusable component library for
everyone.`})]})}function C(s={}){const{wrapper:e}=r(r({},h()),s.components);return e?n.jsx(e,t(r({},s),{children:n.jsx(c,r({},s))})):c(s)}export{C as default};
