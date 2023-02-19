#!/usr/bin/env node
function multiplyDown(startTimes) {
    console.log("startTimes: " + startTimes);
    let myResult = 0;
    let myOutput = ``
    if (startTimes > 1) {
        let thisRun = startTimes * (startTimes - 1);
        console.log("thisRun => ", startTimes, " * ", (startTimes - 1), " = ", thisRun);
        let { result, output } = multiplyDown((startTimes - 1));
        myResult = thisRun + result;
        myOutput = `<<OPENING #${startTimes}>>${output}<<CLOSING #${startTimes}>>`;
        console.log("result  = thisRun + nextRun => ", result, " = ", thisRun, " + ", result);
    };
    console.log("myResult => " + myResult);
    console.log("myOutput => " + myOutput);
    return { result: myResult, output: myOutput };
};

let test = multiplyDown(5);
console.log("5 => ", test.result);
console.log("output => ", test.output);