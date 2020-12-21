"use strict";
// The union is represented by a pipe |, so the parameter can accept both types
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item + ".");
}
function logInfo(uid, user) {
    console.log("A product with " + uid + " has a name as " + user + ".");
}
function renderPlatform(platform) {
    return platform;
}
logDetails(123, "shoes");
logDetails("123", "shoes");
logInfo(123, "John");
logInfo("123", "John");
