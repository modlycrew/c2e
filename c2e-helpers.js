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
