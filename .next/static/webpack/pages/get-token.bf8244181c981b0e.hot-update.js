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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GetToken; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_EthersContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/EthersContext */ \"./context/EthersContext.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _contracts_Erc20_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contracts/Erc20.json */ \"./contracts/Erc20.json\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.jsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n(__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").config)({\n    path: \".env\"\n});\n\n\n\nfunction GetToken() {\n    _s();\n    var ref = (0,_context_EthersContext__WEBPACK_IMPORTED_MODULE_1__.useEthers)(), isValidChain = ref.isValidChain, account = ref.account, requestAccount = ref.requestAccount, setNotificationStatus = ref.setNotificationStatus;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var daiAddress = \"0x1685264bF5845711A1f544df984C5611233C1b6A\";\n    var busdAddress = \"0x4552169AD309A7B915bB09B4b564d1a405B7ceF3\";\n    function addTokenToMetamask(address) {\n        return _addTokenToMetamask.apply(this, arguments);\n    }\n    function _addTokenToMetamask() {\n        _addTokenToMetamask = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(address) {\n            var tokenAddress, tokenSymbol, tokenDecimals, wasAdded, e;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        tokenAddress = address;\n                        tokenSymbol = address === daiAddress ? \"DAI\" : \"BUSD\";\n                        tokenDecimals = 18;\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            ethereum.request({\n                                method: \"wallet_watchAsset\",\n                                params: {\n                                    type: \"ERC20\",\n                                    options: {\n                                        address: tokenAddress,\n                                        symbol: tokenSymbol,\n                                        decimals: tokenDecimals\n                                    }\n                                }\n                            })\n                        ];\n                    case 2:\n                        wasAdded = _state.sent();\n                        if (wasAdded) {\n                            console.log(\"token added to your wallet\");\n                        } else {\n                            console.log(\"Could not add LP token to your wallet\");\n                        }\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        e = _state.sent();\n                        console.log(e);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _addTokenToMetamask.apply(this, arguments);\n    }\n    //const hexValue='0x0Bc260a9F16ed6C34D0c8B791c17a8cC43269E36'\n    //const NEXT_PUBLIC_TOKEN_WALLET=ethers.utils.hexlify(hexValue)\n    var METAMASK_PRIVATEKEY = \"3b52897d72ef6528e295acccebc4e8b4f234f6aeaadb8e104e7bc3e64c354b59\";\n    function transferToken(tokenAddress) {\n        return _transferToken.apply(this, arguments);\n    }\n    function _transferToken() {\n        _transferToken = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(tokenAddress) {\n            var provider, signer, token, e;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(window.ethereum);\n                        console.log(\"Private Key:\", METAMASK_PRIVATEKEY);\n                        signer = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Wallet(METAMASK_PRIVATEKEY, provider);\n                        token = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(tokenAddress, _contracts_Erc20_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        setLoading(true);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        if (!account || !isValidChain()) requestAccount();\n                        return [\n                            4,\n                            token.transfer(account, ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.utils.parseEther(\"10\"))\n                        ];\n                    case 2:\n                        _state.sent();\n                        setNotificationStatus({\n                            show: true,\n                            error: false\n                        });\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        e = _state.sent();\n                        console.log(e);\n                        setNotificationStatus({\n                            show: true,\n                            error: false\n                        });\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        setLoading(false);\n                        addTokenToMetamask(tokenAddress);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _transferToken.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4 text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"cursor-pointer text-purple-800 underline underline-offset-1\",\n                    children: \"Go back\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                loading: loading,\n                disabled: !account || loading,\n                onClick: function() {\n                    return transferToken(daiAddress);\n                },\n                children: \"Get DAI Tokens in Account\"\n            }, void 0, false, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                loading: loading,\n                disabled: !account || loading,\n                onClick: function() {\n                    return transferToken(busdAddress);\n                },\n                children: \"Get BUSD Tokens in Account\"\n            }, void 0, false, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-purple-800\",\n                children: \"Just connect your wallet and get some tokens to test the AMM functionality.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-purple-800\",\n                children: [\n                    \"If you need BNB, you can get some at the \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \" underline underline-offset-2\",\n                        href: \"https://testnet.binance.org/faucet-smart\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: \"BSC faucet\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 50\n                    }, this),\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(GetToken, \"HucoAfmGFMPofKi1es4pDT4up5g=\", false, function() {\n    return [\n        _context_EthersContext__WEBPACK_IMPORTED_MODULE_1__.useEthers\n    ];\n});\n_c = GetToken;\nvar _c;\n$RefreshReg$(_c, \"GetToken\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztvQkFBUzswQkFDdkksOERBQUN3QyxHQUFDO2dCQUFDTCxTQUFTLEVBQUMsaUJBQWlCOzBCQUFDLDZFQUEyRTs7Ozs7b0JBQUk7MEJBQzlHLDhEQUFDSyxHQUFDO2dCQUFDTCxTQUFTLEVBQUMsaUJBQWlCOztvQkFBQywyQ0FDWTtrQ0FBQSw4REFBQ00sR0FBQzt3QkFBQ04sU0FBUyxFQUFDLCtCQUErQjt3QkFBQ0MsSUFBSSxFQUFDLDBDQUEwQzt3QkFBQ00sTUFBTSxFQUFDLFFBQVE7d0JBQUNDLEdBQUcsRUFBQyxxQkFBcUI7a0NBQUMsWUFBVTs7Ozs7NEJBQUk7b0JBQUEsR0FDaE07Ozs7OztvQkFBSTs7Ozs7O1lBQ0EsQ0FDUDtBQUVILENBQUM7R0E1RXVCbkQsUUFBUTs7UUFFMkNWLDZEQUFTOzs7QUFGNURVLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2V0LXRva2VuLmpzeD9iNzFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUV0aGVycyB9IGZyb20gXCIuLi9jb250ZXh0L0V0aGVyc0NvbnRleHRcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5yZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZyh7IHBhdGg6IFwiLmVudlwiIH0pO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiXG5pbXBvcnQgRXJjMjAgZnJvbSBcIi4uL2NvbnRyYWN0cy9FcmMyMC5qc29uXCJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRUb2tlbigpIHtcblxuICBjb25zdCB7IGlzVmFsaWRDaGFpbiwgYWNjb3VudCwgcmVxdWVzdEFjY291bnQsIHNldE5vdGlmaWNhdGlvblN0YXR1cyB9ID0gdXNlRXRoZXJzKClcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgZGFpQWRkcmVzcyA9IFwiMHgxNjg1MjY0YkY1ODQ1NzExQTFmNTQ0ZGY5ODRDNTYxMTIzM0MxYjZBXCJcbiAgY29uc3QgYnVzZEFkZHJlc3MgPSBcIjB4NDU1MjE2OUFEMzA5QTdCOTE1YkIwOUI0YjU2NGQxYTQwNUI3Y2VGM1wiXG4gIFxuXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZFRva2VuVG9NZXRhbWFzayhhZGRyZXNzKSB7XG4gICAgY29uc3QgdG9rZW5BZGRyZXNzID0gYWRkcmVzc1xuICAgIGNvbnN0IHRva2VuU3ltYm9sID0gYWRkcmVzcyA9PT0gZGFpQWRkcmVzcyA/IFwiREFJXCIgOiBcIkJVU0RcIlxuICAgIGNvbnN0IHRva2VuRGVjaW1hbHMgPSAxOFxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdhc0FkZGVkID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ3dhbGxldF93YXRjaEFzc2V0JyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ0VSQzIwJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBhZGRyZXNzOiB0b2tlbkFkZHJlc3MsXG4gICAgICAgICAgICBzeW1ib2w6IHRva2VuU3ltYm9sLFxuICAgICAgICAgICAgZGVjaW1hbHM6IHRva2VuRGVjaW1hbHMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAod2FzQWRkZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuIGFkZGVkIHRvIHlvdXIgd2FsbGV0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IGFkZCBMUCB0b2tlbiB0byB5b3VyIHdhbGxldCcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuICAvL2NvbnN0IGhleFZhbHVlPScweDBCYzI2MGE5RjE2ZWQ2QzM0RDBjOEI3OTFjMTdhOGNDNDMyNjlFMzYnXG4gIC8vY29uc3QgTkVYVF9QVUJMSUNfVE9LRU5fV0FMTEVUPWV0aGVycy51dGlscy5oZXhsaWZ5KGhleFZhbHVlKVxuICBjb25zdCAgTUVUQU1BU0tfUFJJVkFURUtFWT0nM2I1Mjg5N2Q3MmVmNjUyOGUyOTVhY2NjZWJjNGU4YjRmMjM0ZjZhZWFhZGI4ZTEwNGU3YmMzZTY0YzM1NGI1OSdcbiAgYXN5bmMgZnVuY3Rpb24gdHJhbnNmZXJUb2tlbih0b2tlbkFkZHJlc3MpIHtcbiAgXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKVxuICAgIGNvbnNvbGUubG9nKFwiUHJpdmF0ZSBLZXk6XCIsTUVUQU1BU0tfUFJJVkFURUtFWSk7XG4gICAgY29uc3Qgc2lnbmVyID0gbmV3IGV0aGVycy5XYWxsZXQoTUVUQU1BU0tfUFJJVkFURUtFWSwgcHJvdmlkZXIpO1xuICAgIFxuICAgIGNvbnN0IHRva2VuID0gbmV3IGV0aGVycy5Db250cmFjdCh0b2tlbkFkZHJlc3MsIEVyYzIwLmFiaSwgc2lnbmVyKVxuICBcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgdHJ5IHtcbiAgICAgIGlmICghYWNjb3VudCB8fCAhaXNWYWxpZENoYWluKCkpXG4gICAgICAgIHJlcXVlc3RBY2NvdW50KClcblxuICAgICAgYXdhaXQgdG9rZW4udHJhbnNmZXIoYWNjb3VudCwgZXRoZXJzLnV0aWxzLnBhcnNlRXRoZXIoXCIxMFwiKSlcbiAgICAgIHNldE5vdGlmaWNhdGlvblN0YXR1cyh7IHNob3c6IHRydWUsIGVycm9yOiBmYWxzZSB9KVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIHNldE5vdGlmaWNhdGlvblN0YXR1cyh7IHNob3c6IHRydWUsIGVycm9yOiBmYWxzZSB9KVxuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIGFkZFRva2VuVG9NZXRhbWFzayh0b2tlbkFkZHJlc3MpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHRleHQtY2VudGVyXCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LXB1cnBsZS04MDAgdW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtMVwiPkdvIGJhY2s8L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgICA8QnV0dG9uIGxvYWRpbmc9e2xvYWRpbmd9IGRpc2FibGVkPXshYWNjb3VudCB8fCBsb2FkaW5nfSBvbkNsaWNrPXsoKSA9PiB0cmFuc2ZlclRva2VuKGRhaUFkZHJlc3MpfT5HZXQgREFJIFRva2VucyBpbiBBY2NvdW50PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIGxvYWRpbmc9e2xvYWRpbmd9IGRpc2FibGVkPXshYWNjb3VudCB8fCBsb2FkaW5nfSBvbkNsaWNrPXsoKSA9PiB0cmFuc2ZlclRva2VuKGJ1c2RBZGRyZXNzKX0+R2V0IEJVU0QgVG9rZW5zIGluIEFjY291bnQ8L0J1dHRvbj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTgwMFwiPkp1c3QgY29ubmVjdCB5b3VyIHdhbGxldCBhbmQgZ2V0IHNvbWUgdG9rZW5zIHRvIHRlc3QgdGhlIEFNTSBmdW5jdGlvbmFsaXR5LjwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTgwMFwiPlxuICAgICAgICBJZiB5b3UgbmVlZCBCTkIsIHlvdSBjYW4gZ2V0IHNvbWUgYXQgdGhlIDxhIGNsYXNzTmFtZT1cIiB1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC0yXCIgaHJlZj1cImh0dHBzOi8vdGVzdG5ldC5iaW5hbmNlLm9yZy9mYXVjZXQtc21hcnRcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+QlNDIGZhdWNldDwvYT4uXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIClcblxufSJdLCJuYW1lcyI6WyJ1c2VFdGhlcnMiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsIkxpbmsiLCJyZXF1aXJlIiwiY29uZmlnIiwicGF0aCIsImV0aGVycyIsIkVyYzIwIiwiTW9kYWwiLCJHZXRUb2tlbiIsImlzVmFsaWRDaGFpbiIsImFjY291bnQiLCJyZXF1ZXN0QWNjb3VudCIsInNldE5vdGlmaWNhdGlvblN0YXR1cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGFpQWRkcmVzcyIsImJ1c2RBZGRyZXNzIiwiYWRkVG9rZW5Ub01ldGFtYXNrIiwiYWRkcmVzcyIsInRva2VuQWRkcmVzcyIsInRva2VuU3ltYm9sIiwidG9rZW5EZWNpbWFscyIsIndhc0FkZGVkIiwiZSIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInBhcmFtcyIsInR5cGUiLCJvcHRpb25zIiwic3ltYm9sIiwiZGVjaW1hbHMiLCJjb25zb2xlIiwibG9nIiwiTUVUQU1BU0tfUFJJVkFURUtFWSIsInRyYW5zZmVyVG9rZW4iLCJwcm92aWRlciIsInNpZ25lciIsInRva2VuIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiV2FsbGV0IiwiQ29udHJhY3QiLCJhYmkiLCJ0cmFuc2ZlciIsInV0aWxzIiwicGFyc2VFdGhlciIsInNob3ciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzcGFuIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwicCIsImEiLCJ0YXJnZXQiLCJyZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/get-token.jsx\n"));

/***/ })

});