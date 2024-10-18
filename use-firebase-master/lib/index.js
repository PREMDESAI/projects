"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useFirebase(docsRef) {
    var _a = react_1.useState(), value = _a[0], setValue = _a[1];
    react_1.useEffect(function () {
        docsRef.onSnapshot(function (snapshot) { return setValue(snapshot.data()); });
    }, [docsRef]);
    return value;
}
exports.default = useFirebase;
