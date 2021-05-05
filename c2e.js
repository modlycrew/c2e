export function Release(releaseVersion, releaseDescription) {
  return `[v${releaseVersion}] ${releaseDescription}`
  //e.g. "v0.0.1 Basic Node & Attribute CRUD"
};
export function Epic(id, EpicDescription) {
  return `🏛 Epic: ${id} - ${EpicDescription}`
  //e.g. "March 2050 Space Tourism Launch"
};
export function Storyboard(id, storyTitle, storyBoards) { //storyBoard object has frame#:"Description" pairs
  let story = `🎥 Storyboard: ${id} - ${storyTitle};
    ${Object.keys(storyBoards).map((key, index) => {
      return `..... ${key}) ${storyBoards[key]}
    `;
    }).join("")}`
  return story;
};
export function UserStory(id, AsA, MoSCoW, DoSomething, SoThat) {
  return `📖 User Story: ${id} - As a ${AsA} I ${MoSCoW} be able to ${DoSomething} so that ${SoThat}.`
  //e.g "As a website user I Must be able to search on the webpage So that I can find necessary information" 
};
export function Criteria(id, Given, When, Then, ErrorOnTODO = false) {
  return (ErrorOnTODO ? `🔥🔥 This Criteria may have expect()'s pending development 🔥🔥
  ` : ``) + `📇 Criteria: ${id} - Given ${Given}, when ${When} then ${Then}`;
  //e.g. “Given that I’m in a role of registered or guest user, When I open the“ Products” page Then the system shows me the list of all products"
};

import Ajv from "ajv";
export function loadAjv() {
  const ajv = new Ajv({
    $data: true,
    allErrors: true,
    allowMatchingProperties: true,
  });
  require('ajv-formats')(ajv);
  require('ajv-merge-patch')(ajv);
  ajv.addKeyword("$version");
  //add ajv-keywords if needing more complex tests ref https://github.com/ajv-validator/ajv-keywords#keywords
  return ajv;
}

export function validateObject(objectToValidate, schema, ajvObject) {
  expect(objectToValidate, 'Schema => ' + JSON.stringify(schema)).to.equal(ajvObject.validate(schema.$id, objectToValidate) ? objectToValidate : ajvObject.errors.filter(e => e.keyword != '$merge'));
}

export function clearIndexedDB() {
  var req = indexedDB.deleteDatabase('radata');
  req.onsuccess = function () {
    console.log("Deleted database successfully");
  };
  req.onerror = function () {
    console.log("Couldn't delete database");
  };
  req.onblocked = function () {
    console.log("Couldn't delete database due to the operation being blocked");
  };
}