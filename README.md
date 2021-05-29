# C2E - Test Scaffolding

c2e is a Mocha/Chai & Cypress.io test scaffolding helper loosely aligned with TOGAF, Agile & other common concepts to produce end-to-end test files mapping organizational (c)apabilties to(2) (e)xpected outcomes / criteria (i.e. expect(A).to.equal(B), cy.get().contains(), etc)

🚨 c2e is currently under 'organic' development, any use or contribution is more than welcome 🙏

### <u>Input JSON file</u>

C2E currently processes JSON files using the following basic structure;</br>
See `.\examples\example-input.c2e.json'` for more detail.

```
|-> Version
|-> Capability
    \-> Storyboard
        |-> Action(s)
        \-> Scene(s)
            |-> Action(s)
            \-> User Story(s)
                |-> Action(s)
                    \-> Criteria(s)
                        \-> Expectation(s)
```

## <u>Usage</u>

From the folder containing \*.c2e.json file(s) run `c2e`</br>
In the current folder C2E will generate folders & files for each Storyboard e.g.`".\{Capability}\{Version} {Capability} {Storyboard}.spec.js"`

## <u>Roadmap</u>

- [x] Define input `*.c2e.json` file structure & output folder(s) / `*.spec.js` file(s) structure
- [x] Generate Cypress.io ready `*.spec.js` file(s) with basic test types from `*.c2e.json` file(s)
- [ ] Add support for object validation tests using AJV, json-schema to be loaded from \*.json file(s)
- [ ] Add `*.c2e.json` schema validation & feedback
- [ ] Update `*.c2e.json` file(s) from `*.spec.js` file(s) structure (i.e. enable 'round trip' generation)
- [ ] Add `*.c2e.json` GUI editor

<i>[...by the Modly community](mailto:community@modlycrew.com)</i>
