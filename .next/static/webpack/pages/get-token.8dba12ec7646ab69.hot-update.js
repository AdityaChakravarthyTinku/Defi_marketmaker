"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/get-token",{

/***/ "./pages/get-token.jsx":
/*!*****************************!*\
  !*** ./pages/get-token.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GetToken; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_EthersContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/EthersContext */ \"./context/EthersContext.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _contracts_Erc20_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contracts/Erc20.json */ \"./contracts/Erc20.json\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.jsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n(__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").config)({\n    path: \".env\"\n});\n\n\n\nfunction GetToken() {\n    _s();\n    var ref = (0,_context_EthersContext__WEBPACK_IMPORTED_MODULE_1__.useEthers)(), isValidChain = ref.isValidChain, account = ref.account, requestAccount = ref.requestAccount, setNotificationStatus = ref.setNotificationStatus;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var daiAddress = \"0x1685264bF5845711A1f544df984C5611233C1b6A\";\n    var busdAddress = \"0x4552169AD309A7B915bB09B4b564d1a405B7ceF3\";\n    function addTokenToMetamask(address) {\n        return _addTokenToMetamask.apply(this, arguments);\n    }\n    function _addTokenToMetamask() {\n        _addTokenToMetamask = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(address) {\n            var tokenAddress, tokenSymbol, tokenDecimals, wasAdded, e;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        tokenAddress = address;\n                        tokenSymbol = address === daiAddress ? \"DAI\" : \"BUSD\";\n                        tokenDecimals = 18;\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            ethereum.request({\n                                method: \"wallet_watchAsset\",\n                                params: {\n                                    type: \"ERC20\",\n                                    options: {\n                                        address: tokenAddress,\n                                        symbol: tokenSymbol,\n                                        decimals: tokenDecimals\n                                    }\n                                }\n                            })\n                        ];\n                    case 2:\n                        wasAdded = _state.sent();\n                        if (wasAdded) {\n                            console.log(\"LP token added to your wallet\");\n                        } else {\n                            console.log(\"Could not add LP token to your wallet\");\n                        }\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        e = _state.sent();\n                        console.log(e);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _addTokenToMetamask.apply(this, arguments);\n    }\n    //const hexValue='0x0Bc260a9F16ed6C34D0c8B791c17a8cC43269E36'\n    //const NEXT_PUBLIC_TOKEN_WALLET=ethers.utils.hexlify(hexValue)\n    var METAMASK_PRIVATEKEY = \"3b52897d72ef6528e295acccebc4e8b4f234f6aeaadb8e104e7bc3e64c354b59\";\n    function transferToken(tokenAddress) {\n        return _transferToken.apply(this, arguments);\n    }\n    function _transferToken() {\n        _transferToken = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(tokenAddress) {\n            var provider, signer, token, balanceBefore, amount, finalBalance, e;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            6,\n                            ,\n                            7\n                        ]);\n                        if (!(!account || !isValidChain())) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            requestAccount()\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            2\n                        ]; // Return if account or chain is not valid\n                    case 2:\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(window.ethereum);\n                        signer = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Wallet(METAMASK_PRIVATEKEY, provider);\n                        token = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(tokenAddress, _contracts_Erc20_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        setLoading(true);\n                        return [\n                            4,\n                            token.balanceOf(account)\n                        ];\n                    case 3:\n                        balanceBefore = _state.sent();\n                        amount = ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.utils.parseEther(\"5\");\n                        console.log(Bal);\n                        // Perform the transfer\n                        return [\n                            4,\n                            token.transfer(account, amount)\n                        ];\n                    case 4:\n                        _state.sent();\n                        return [\n                            4,\n                            token.balanceOf(account)\n                        ];\n                    case 5:\n                        finalBalance = _state.sent();\n                        console.log(\"Final Balance:\", finalBalance.toString());\n                        // Notify success\n                        setNotificationStatus({\n                            show: true,\n                            error: false\n                        });\n                        setLoading(false);\n                        // Add token to Metamask\n                        addTokenToMetamask(tokenAddress);\n                        return [\n                            3,\n                            7\n                        ];\n                    case 6:\n                        e = _state.sent();\n                        console.error(e);\n                        setNotificationStatus({\n                            show: true,\n                            error: true\n                        });\n                        setLoading(false);\n                        return [\n                            3,\n                            7\n                        ];\n                    case 7:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _transferToken.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4 text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"cursor-pointer text-purple-800 underline underline-offset-1\",\n                    children: \"Go back\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                loading: loading,\n                disabled: !account || loading,\n                onClick: function() {\n                    return transferToken(daiAddress);\n                },\n                children: \"Get 5 DAI\"\n            }, void 0, false, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                loading: loading,\n                disabled: !account || loading,\n                onClick: function() {\n                    return transferToken(busdAddress);\n                },\n                children: \"Get 5 BUSD\"\n            }, void 0, false, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-purple-800\",\n                children: \"Just connect your wallet and get some tokens to test the AMM functionality.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-purple-800\",\n                children: [\n                    \"If you need BNB, you can get some at the \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \" underline underline-offset-2\",\n                        href: \"https://testnet.binance.org/faucet-smart\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: \"BSC faucet\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 50\n                    }, this),\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(GetToken, \"HucoAfmGFMPofKi1es4pDT4up5g=\", false, function() {\n    return [\n        _context_EthersContext__WEBPACK_IMPORTED_MODULE_1__.useEthers\n    ];\n});\n_c = GetToken;\nvar _c;\n$RefreshReg$(_c, \"GetToken\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRXRoZXJzIH0gZnJvbSBcIi4uL2NvbnRleHQvRXRoZXJzQ29udGV4dFwiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKHsgcGF0aDogXCIuZW52XCIgfSk7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcbmltcG9ydCBFcmMyMCBmcm9tIFwiLi4vY29udHJhY3RzL0VyYzIwLmpzb25cIlxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldFRva2VuKCkge1xuXG4gIGNvbnN0IHsgaXNWYWxpZENoYWluLCBhY2NvdW50LCByZXF1ZXN0QWNjb3VudCwgc2V0Tm90aWZpY2F0aW9uU3RhdHVzIH0gPSB1c2VFdGhlcnMoKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBkYWlBZGRyZXNzID0gXCIweDE2ODUyNjRiRjU4NDU3MTFBMWY1NDRkZjk4NEM1NjExMjMzQzFiNkFcIlxuICBjb25zdCBidXNkQWRkcmVzcyA9IFwiMHg0NTUyMTY5QUQzMDlBN0I5MTViQjA5QjRiNTY0ZDFhNDA1QjdjZUYzXCJcbiAgXG5cbiAgYXN5bmMgZnVuY3Rpb24gYWRkVG9rZW5Ub01ldGFtYXNrKGFkZHJlc3MpIHtcbiAgICBjb25zdCB0b2tlbkFkZHJlc3MgPSBhZGRyZXNzXG4gICAgY29uc3QgdG9rZW5TeW1ib2wgPSBhZGRyZXNzID09PSBkYWlBZGRyZXNzID8gXCJEQUlcIiA6IFwiQlVTRFwiXG4gICAgY29uc3QgdG9rZW5EZWNpbWFscyA9IDE4XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2FzQWRkZWQgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiAnd2FsbGV0X3dhdGNoQXNzZXQnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnRVJDMjAnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHRva2VuQWRkcmVzcyxcbiAgICAgICAgICAgIHN5bWJvbDogdG9rZW5TeW1ib2wsXG4gICAgICAgICAgICBkZWNpbWFsczogdG9rZW5EZWNpbWFscyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICh3YXNBZGRlZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTFAgdG9rZW4gYWRkZWQgdG8geW91ciB3YWxsZXQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb3VsZCBub3QgYWRkIExQIHRva2VuIHRvIHlvdXIgd2FsbGV0Jyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9XG4gIC8vY29uc3QgaGV4VmFsdWU9JzB4MEJjMjYwYTlGMTZlZDZDMzREMGM4Qjc5MWMxN2E4Y0M0MzI2OUUzNidcbiAgLy9jb25zdCBORVhUX1BVQkxJQ19UT0tFTl9XQUxMRVQ9ZXRoZXJzLnV0aWxzLmhleGxpZnkoaGV4VmFsdWUpXG4gIGNvbnN0ICBNRVRBTUFTS19QUklWQVRFS0VZPSczYjUyODk3ZDcyZWY2NTI4ZTI5NWFjY2NlYmM0ZThiNGYyMzRmNmFlYWFkYjhlMTA0ZTdiYzNlNjRjMzU0YjU5J1xuICBhc3luYyBmdW5jdGlvbiB0cmFuc2ZlclRva2VuKHRva2VuQWRkcmVzcykge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWFjY291bnQgfHwgIWlzVmFsaWRDaGFpbigpKSB7XG4gICAgICAgIGF3YWl0IHJlcXVlc3RBY2NvdW50KCk7XG4gICAgICAgIHJldHVybjsgLy8gUmV0dXJuIGlmIGFjY291bnQgb3IgY2hhaW4gaXMgbm90IHZhbGlkXG4gICAgICB9XG4gIFxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICAgIGNvbnN0IHNpZ25lciA9IG5ldyBldGhlcnMuV2FsbGV0KE1FVEFNQVNLX1BSSVZBVEVLRVksIHByb3ZpZGVyKTtcbiAgICAgIGNvbnN0IHRva2VuID0gbmV3IGV0aGVycy5Db250cmFjdCh0b2tlbkFkZHJlc3MsIEVyYzIwLmFiaSwgc2lnbmVyKTtcbiAgXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICBcbiAgICBjb25zdCBiYWxhbmNlQmVmb3JlID0gYXdhaXQgdG9rZW4uYmFsYW5jZU9mKGFjY291bnQpO1xuICAgIGNvbnN0IGFtb3VudCA9IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKFwiNVwiKTtcbiAgICBjb25zb2xlLmxvZyhCYWwpXG5cbiAgICAgIC8vIFBlcmZvcm0gdGhlIHRyYW5zZmVyXG4gICAgICBhd2FpdCB0b2tlbi50cmFuc2ZlcihhY2NvdW50LGFtb3VudCk7XG4gIFxuICAgICAgLy8gQ2hlY2sgdGhlIGJhbGFuY2UgYWZ0ZXIgdGhlIHRyYW5zZmVyXG4gICAgICBjb25zdCBmaW5hbEJhbGFuY2UgPSBhd2FpdCB0b2tlbi5iYWxhbmNlT2YoYWNjb3VudCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkZpbmFsIEJhbGFuY2U6XCIsIGZpbmFsQmFsYW5jZS50b1N0cmluZygpKTtcbiAgXG4gICAgICAvLyBOb3RpZnkgc3VjY2Vzc1xuICAgICAgc2V0Tm90aWZpY2F0aW9uU3RhdHVzKHsgc2hvdzogdHJ1ZSwgZXJyb3I6IGZhbHNlIH0pO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBcbiAgICAgIC8vIEFkZCB0b2tlbiB0byBNZXRhbWFza1xuICAgICAgYWRkVG9rZW5Ub01ldGFtYXNrKHRva2VuQWRkcmVzcyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIHNldE5vdGlmaWNhdGlvblN0YXR1cyh7IHNob3c6IHRydWUsIGVycm9yOiB0cnVlIH0pO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHRleHQtY2VudGVyXCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LXB1cnBsZS04MDAgdW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtMVwiPkdvIGJhY2s8L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgICA8QnV0dG9uIGxvYWRpbmc9e2xvYWRpbmd9IGRpc2FibGVkPXshYWNjb3VudCB8fCBsb2FkaW5nfSBvbkNsaWNrPXsoKSA9PiB0cmFuc2ZlclRva2VuKGRhaUFkZHJlc3MpfT5HZXQgNSBEQUk8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gbG9hZGluZz17bG9hZGluZ30gZGlzYWJsZWQ9eyFhY2NvdW50IHx8IGxvYWRpbmd9IG9uQ2xpY2s9eygpID0+IHRyYW5zZmVyVG9rZW4oYnVzZEFkZHJlc3MpfT5HZXQgNSBCVVNEPC9CdXR0b24+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZS04MDBcIj5KdXN0IGNvbm5lY3QgeW91ciB3YWxsZXQgYW5kIGdldCBzb21lIHRva2VucyB0byB0ZXN0IHRoZSBBTU0gZnVuY3Rpb25hbGl0eS48L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZS04MDBcIj5cbiAgICAgICAgSWYgeW91IG5lZWQgQk5CLCB5b3UgY2FuIGdldCBzb21lIGF0IHRoZSA8YSBjbGFzc05hbWU9XCIgdW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtMlwiIGhyZWY9XCJodHRwczovL3Rlc3RuZXQuYmluYW5jZS5vcmcvZmF1Y2V0LXNtYXJ0XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPkJTQyBmYXVjZXQ8L2E+LlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApXG5cbn0iXSwibmFtZXMiOlsidXNlRXRoZXJzIiwiQnV0dG9uIiwidXNlU3RhdGUiLCJMaW5rIiwicmVxdWlyZSIsImNvbmZpZyIsInBhdGgiLCJldGhlcnMiLCJFcmMyMCIsIk1vZGFsIiwiR2V0VG9rZW4iLCJpc1ZhbGlkQ2hhaW4iLCJhY2NvdW50IiwicmVxdWVzdEFjY291bnQiLCJzZXROb3RpZmljYXRpb25TdGF0dXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRhaUFkZHJlc3MiLCJidXNkQWRkcmVzcyIsImFkZFRva2VuVG9NZXRhbWFzayIsImFkZHJlc3MiLCJ0b2tlbkFkZHJlc3MiLCJ0b2tlblN5bWJvbCIsInRva2VuRGVjaW1hbHMiLCJ3YXNBZGRlZCIsImUiLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJwYXJhbXMiLCJ0eXBlIiwib3B0aW9ucyIsInN5bWJvbCIsImRlY2ltYWxzIiwiY29uc29sZSIsImxvZyIsIk1FVEFNQVNLX1BSSVZBVEVLRVkiLCJ0cmFuc2ZlclRva2VuIiwicHJvdmlkZXIiLCJzaWduZXIiLCJ0b2tlbiIsImJhbGFuY2VCZWZvcmUiLCJhbW91bnQiLCJmaW5hbEJhbGFuY2UiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJXYWxsZXQiLCJDb250cmFjdCIsImFiaSIsImJhbGFuY2VPZiIsInV0aWxzIiwicGFyc2VFdGhlciIsIkJhbCIsInRyYW5zZmVyIiwidG9TdHJpbmciLCJzaG93IiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwic3BhbiIsImRpc2FibGVkIiwib25DbGljayIsInAiLCJhIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/get-token.jsx\n"));

/***/ })

});