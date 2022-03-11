"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const logo = require("./logo.svg");
require("./App.css");
const eel_js_1 = require("./eel.js");
class App extends react_1.Component {
    constructor(props) {
        super(props);
        eel_js_1.eel.set_host("ws://localhost:8888");
        eel_js_1.eel.hello();
    }
    render() {
        return (react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement("header", { className: "App-header" },
                react_1.default.createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
                react_1.default.createElement("h1", { className: "App-title" }, "Welcome to React! Hi.")),
            react_1.default.createElement("p", { className: "App-intro" },
                "To get started, edit ",
                react_1.default.createElement("code", null, "src/App.js"),
                " and save to reload.")));
    }
}
exports.default = App;
