# C2E - Test Scaffolding

c2e is a Mocha/Chai & Cypress.io test scaffolding helper loosely aligned with TOGAF, Agile & other common concepts to produce end-to-end test files mapping organizational (c)apabilties to(2) (e)xpected outcomes (i.e. expect(A).to.equal(B), cy.get().contains(), etc)

🚨 c2e is currently under 'organic' development, any use or contribution is more than welcome 🙏

### <u>C2E Input Files</u>

C2E processes .c2e.yaml files using the following basic structure;</br>
See `.\examples\example-input.c2e.yaml'` for more detail.
Each Capability should have it's own versioned .c2e.yaml file.
Each Capability must have at least one Storyboard.
Use of Scenes or User Stories for grouping at any level below a Storyboard is optional.
Use of Actions or Expectations are allowed at any level below a Storyboard, Scene or Storyboard.
All Variables used within an Action are defined in the Storyboard scope.
```
|-> Version
|-> Capability
|-> Storyboard(s)
    \-> Scene(s)
        \-> User Story(s)
            |-> Action(s)
                \-> Cypress compatible Javascript Code
            \-> Expectation(s)
                \-> Cypress compatible assertions or use of AJV helper functions ( i.e. validateObject() )
```

Note: only variables on the 1st line of code under an Action will be hoisted.
Note: for object validation using json-schema the schema needs to be added to the ajv object e.g. `ajv.addSchema(schema,schemaID)`. To validate an object in an Expectation call `validateObject(object,schemaID)`.

## <u>Usage</u>

From the folder containing \*.c2e.yaml file(s) run `c2e`</br>
In the current folder C2E will generate folders & files for each Storyboard e.g.`/{$version}/{$capability}/{$version} - {$capability} - {$storyboard}.spec.js`

## <u>Roadmap</u>

- [ ] Change to run once by default & add command line option to watch .c2e.yaml files
- [ ] Add support for Playwright compatible .spec.js output files command line option to switch between Cypress.io & Playwright compatible output
- [ ] Add `*.c2e.yaml` GUI editor
- [ ] Add `*.c2e.json` schema validation & feedback
- [x] Define input `*.c2e.ymal` file structure & output folder(s) / `*.spec.js` file(s) structure
- [x] Generate Cypress.io ready `*.spec.js` file(s) with basic test types from `*.c2e.json` file(s)
- [x] Add support for object validation tests using AJV, json-schema to be loaded from \*.json file(s)
- [x] ~~Update `*.c2e.json` file(s) from `*.spec.js` file(s) structure (i.e. enable 'round trip' generation)~~ Cancelled: Replaced through use of watching \*.c2e.yaml files to allow update on change & using Cypress.io file watching mode.

## <u>Change Log</u>
- 0.0.3 ⚠️ Breaking changes to .c2e.yaml format
- 0.0.2 Changes to input file format & added functionality;
  - Changed input format from .json to .yaml to make generation of inputs easier for non-technical users, support of multiline editing & use of code highlighting tools (e.g. https://github.com/iuyoy/highlight-string-code)
  - Added support for hoisting variables up one grouping
  - Added support for hoisting imports to start of .spec.js
  - Added support for object validation using AJV
  - Changed to file watching & re-writting of .spec.js files on .c2e.yaml change (...works with Cypress.io in watch mode)
- 0.0.1 Initial release

<i>[...by the Modly community](mailto:community@modlycrew.com)</i>


