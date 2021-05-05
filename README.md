# c2e - Test Scaffolding

---

c2e is a Mocha/Chai & cypress.io test scaffolding helper losely aligned with TOGAF, Agile & other common concepts to produce end-to-end test files mapping organizational (c)apabilties to(2) (e)xpected outcomes / criteria (i.e. expect(A).to.equal(B), cy.get().contains(), etc)

🚨 c2e is currently under 'organic' development, any use or contribution is more than welcome 🙏

<u>Roadmap</u>

- [ ] Migrate c2e to NPM package
- [ ] Migrate functions to use param objects
- [ ] Establish `spec.json` structure
- [ ] Generate `spec.js` files from `.spec.json` files

<u>Usage</u>

- describe(Release(releaseVersion, releaseDescription),()=>{})
- describe(Epic(id, EpicDescription),()=>{})
- describe(Storyboard(id, storyTitle, storyBoards = {}),()=>{})
- describe(UserStory(id, AsA, MoSCoW, DoSomething, SoThat),()=>{})
- it(Criteria(id, Given, When, Then, ErrorOnTODO = false),()=>{})
