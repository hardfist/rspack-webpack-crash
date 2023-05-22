(function() {
var __webpack_modules__ = {
"./src/index.js": function (module, exports, __webpack_require__) {
const hexoid = __webpack_require__("./node_modules/.pnpm/hexoid@1.0.0/node_modules/hexoid/dist/index.mjs");
const toID = hexoid();
toID();
},
"./node_modules/.pnpm/hexoid@1.0.0/node_modules/hexoid/dist/index.mjs": function (module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var IDX = 256, HEX = [];
while(IDX--)HEX[IDX] = (IDX + 256).toString(16).substring(1);
function _default(len) {
    len = len || 16;
    var str = '', num = 0;
    return function() {
        if (!str || num === 256) {
            str = '';
            num = (1 + len) / 2 | 0;
            while(num--)str += HEX[256 * Math.random() | 0];
            str = str.substring(num = 0, len - 2);
        }
        return str + HEX[num++];
    };
}
},

}
// The module cache
 var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
// Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
      return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
       exports: {}
      });
      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
// Return the exports of the module
 return module.exports;

}
var __webpack_exports__ = __webpack_require__("./src/index.js");
})()
