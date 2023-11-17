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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GetToken; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_EthersContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/EthersContext */ \"./context/EthersContext.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _contracts_Erc20_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contracts/Erc20.json */ \"./contracts/Erc20.json\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.jsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n(__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").config)({\n    path: \".env\"\n});\n\n\n\nfunction GetToken() {\n    _s();\n    var ref = (0,_context_EthersContext__WEBPACK_IMPORTED_MODULE_1__.useEthers)(), isValidChain = ref.isValidChain, account = ref.account, requestAccount = ref.requestAccount, setNotificationStatus = ref.setNotificationStatus;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var daiAddress = \"0x1685264bF5845711A1f544df984C5611233C1b6A\";\n    var busdAddress = \"0x4552169AD309A7B915bB09B4b564d1a405B7ceF3\";\n    function addTokenToMetamask(address) {\n        return _addTokenToMetamask.apply(this, arguments);\n    }\n    function _addTokenToMetamask() {\n        _addTokenToMetamask = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(address) {\n            var tokenAddress, tokenSymbol, tokenDecimals, wasAdded, e;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        tokenAddress = address;\n                        tokenSymbol = address === daiAddress ? \"DAI\" : \"BUSD\";\n                        tokenDecimals = 18;\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            ethereum.request({\n                                method: \"wallet_watchAsset\",\n                                params: {\n                                    type: \"ERC20\",\n                                    options: {\n                                        address: tokenAddress,\n                                        symbol: tokenSymbol,\n                                        decimals: tokenDecimals\n                                    }\n                                }\n                            })\n                        ];\n                    case 2:\n                        wasAdded = _state.sent();\n                        if (wasAdded) {\n                            console.log(\"LP token added to your wallet\");\n                        } else {\n                            console.log(\"Could not add LP token to your wallet\");\n                        }\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        e = _state.sent();\n                        console.log(e);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _addTokenToMetamask.apply(this, arguments);\n    }\n    //const hexValue='0x0Bc260a9F16ed6C34D0c8B791c17a8cC43269E36'\n    //const NEXT_PUBLIC_TOKEN_WALLET=ethers.utils.hexlify(hexValue)\n    var METAMASK_PRIVATEKEY = \"3b52897d72ef6528e295acccebc4e8b4f234f6aeaadb8e104e7bc3e64c354b59\";\n    function transferToken(tokenAddress) {\n        return _transferToken.apply(this, arguments);\n    }\n    function _transferToken() {\n        _transferToken = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(tokenAddress) {\n            var provider, signer, token, initialBalance, finalBalance, e;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            6,\n                            ,\n                            7\n                        ]);\n                        if (!(!account || !isValidChain())) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            requestAccount()\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            2\n                        ]; // Return if account or chain is not valid\n                    case 2:\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(window.ethereum);\n                        signer = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Wallet(METAMASK_PRIVATEKEY, provider);\n                        token = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(tokenAddress, _contracts_Erc20_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        setLoading(true);\n                        return [\n                            4,\n                            token.balanceOf(account)\n                        ];\n                    case 3:\n                        initialBalance = _state.sent();\n                        console.log(\"Initial Balance:\", initialBalance.toString());\n                        // Perform the transfer\n                        return [\n                            4,\n                            token.transfer(account, ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.utils.parseEther(\"10\"))\n                        ];\n                    case 4:\n                        _state.sent();\n                        return [\n                            4,\n                            token.balanceOf(account)\n                        ];\n                    case 5:\n                        finalBalance = _state.sent();\n                        console.log(\"Final Balance:\", finalBalance.toString());\n                        // Notify success\n                        setNotificationStatus({\n                            show: true,\n                            error: false\n                        });\n                        setLoading(false);\n                        // Add token to Metamask\n                        addTokenToMetamask(tokenAddress);\n                        return [\n                            3,\n                            7\n                        ];\n                    case 6:\n                        e = _state.sent();\n                        console.error(e);\n                        setNotificationStatus({\n                            show: true,\n                            error: true\n                        });\n                        setLoading(false);\n                        return [\n                            3,\n                            7\n                        ];\n                    case 7:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _transferToken.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4 text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"cursor-pointer text-purple-800 underline underline-offset-1\",\n                    children: \"Go back\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                loading: loading,\n                disabled: !account || loading,\n                onClick: function() {\n                    return transferToken(daiAddress);\n                },\n                children: \"Get 10 DAI\"\n            }, void 0, false, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                loading: loading,\n                disabled: !account || loading,\n                onClick: function() {\n                    return transferToken(busdAddress);\n                },\n                children: \"Get 10 BUSD\"\n            }, void 0, false, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-purple-800\",\n                children: \"Just connect your wallet and get some tokens to test the AMM functionality.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-purple-800\",\n                children: [\n                    \"If you need BNB, you can get some at the \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \" underline underline-offset-2\",\n                        href: \"https://testnet.binance.org/faucet-smart\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: \"BSC faucet\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 50\n                    }, this),\n                    \".\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\get-token.jsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(GetToken, \"HucoAfmGFMPofKi1es4pDT4up5g=\", false, function() {\n    return [\n        _context_EthersContext__WEBPACK_IMPORTED_MODULE_1__.useEthers\n    ];\n});\n_c = GetToken;\nvar _c;\n$RefreshReg$(_c, \"GetToken\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSw4REFBQ21CLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHVCQUF1Qjs7MEJBQ3BDLDhEQUFDdEQsa0RBQUk7Z0JBQUN1RCxJQUFJLEVBQUMsR0FBRzswQkFDWiw0RUFBQ0MsTUFBSTtvQkFBQ0YsU0FBUyxFQUFDLDZEQUE2RDs4QkFBQyxTQUFPOzs7Ozt3QkFBTzs7Ozs7b0JBQ3ZGOzBCQUNQLDhEQUFDeEQsMERBQU07Z0JBQUNjLE9BQU8sRUFBRUEsT0FBTztnQkFBRTZDLFFBQVEsRUFBRSxDQUFDaEQsT0FBTyxJQUFJRyxPQUFPO2dCQUFFOEMsT0FBTyxFQUFFOzJCQUFNeEIsYUFBYSxDQUFDcEIsVUFBVSxDQUFDO2lCQUFBOzBCQUFFLFlBQVU7Ozs7O29CQUFTOzBCQUN0SCw4REFBQ2hCLDBEQUFNO2dCQUFDYyxPQUFPLEVBQUVBLE9BQU87Z0JBQUU2QyxRQUFRLEVBQUUsQ0FBQ2hELE9BQU8sSUFBSUcsT0FBTztnQkFBRThDLE9BQU8sRUFBRTsyQkFBTXhCLGFBQWEsQ0FBQ25CLFdBQVcsQ0FBQztpQkFBQTswQkFBRSxhQUFXOzs7OztvQkFBUzswQkFDeEgsOERBQUM0QyxHQUFDO2dCQUFDTCxTQUFTLEVBQUMsaUJBQWlCOzBCQUFDLDZFQUEyRTs7Ozs7b0JBQUk7MEJBQzlHLDhEQUFDSyxHQUFDO2dCQUFDTCxTQUFTLEVBQUMsaUJBQWlCOztvQkFBQywyQ0FDWTtrQ0FBQSw4REFBQ00sR0FBQzt3QkFBQ04sU0FBUyxFQUFDLCtCQUErQjt3QkFBQ0MsSUFBSSxFQUFDLDBDQUEwQzt3QkFBQ00sTUFBTSxFQUFDLFFBQVE7d0JBQUNDLEdBQUcsRUFBQyxxQkFBcUI7a0NBQUMsWUFBVTs7Ozs7NEJBQUk7b0JBQUEsR0FDaE07Ozs7OztvQkFBSTs7Ozs7O1lBQ0EsQ0FDUDtBQUVILENBQUM7R0ExRnVCdkQsUUFBUTs7UUFFMkNWLDZEQUFTOzs7QUFGNURVLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2V0LXRva2VuLmpzeD9iNzFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUV0aGVycyB9IGZyb20gXCIuLi9jb250ZXh0L0V0aGVyc0NvbnRleHRcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5yZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZyh7IHBhdGg6IFwiLmVudlwiIH0pO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiXG5pbXBvcnQgRXJjMjAgZnJvbSBcIi4uL2NvbnRyYWN0cy9FcmMyMC5qc29uXCJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRUb2tlbigpIHtcblxuICBjb25zdCB7IGlzVmFsaWRDaGFpbiwgYWNjb3VudCwgcmVxdWVzdEFjY291bnQsIHNldE5vdGlmaWNhdGlvblN0YXR1cyB9ID0gdXNlRXRoZXJzKClcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgZGFpQWRkcmVzcyA9IFwiMHgxNjg1MjY0YkY1ODQ1NzExQTFmNTQ0ZGY5ODRDNTYxMTIzM0MxYjZBXCJcbiAgY29uc3QgYnVzZEFkZHJlc3MgPSBcIjB4NDU1MjE2OUFEMzA5QTdCOTE1YkIwOUI0YjU2NGQxYTQwNUI3Y2VGM1wiXG4gIFxuXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZFRva2VuVG9NZXRhbWFzayhhZGRyZXNzKSB7XG4gICAgY29uc3QgdG9rZW5BZGRyZXNzID0gYWRkcmVzc1xuICAgIGNvbnN0IHRva2VuU3ltYm9sID0gYWRkcmVzcyA9PT0gZGFpQWRkcmVzcyA/IFwiREFJXCIgOiBcIkJVU0RcIlxuICAgIGNvbnN0IHRva2VuRGVjaW1hbHMgPSAxOFxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdhc0FkZGVkID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ3dhbGxldF93YXRjaEFzc2V0JyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ0VSQzIwJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBhZGRyZXNzOiB0b2tlbkFkZHJlc3MsXG4gICAgICAgICAgICBzeW1ib2w6IHRva2VuU3ltYm9sLFxuICAgICAgICAgICAgZGVjaW1hbHM6IHRva2VuRGVjaW1hbHMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAod2FzQWRkZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xQIHRva2VuIGFkZGVkIHRvIHlvdXIgd2FsbGV0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IGFkZCBMUCB0b2tlbiB0byB5b3VyIHdhbGxldCcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuICAvL2NvbnN0IGhleFZhbHVlPScweDBCYzI2MGE5RjE2ZWQ2QzM0RDBjOEI3OTFjMTdhOGNDNDMyNjlFMzYnXG4gIC8vY29uc3QgTkVYVF9QVUJMSUNfVE9LRU5fV0FMTEVUPWV0aGVycy51dGlscy5oZXhsaWZ5KGhleFZhbHVlKVxuICBjb25zdCAgTUVUQU1BU0tfUFJJVkFURUtFWT0nM2I1Mjg5N2Q3MmVmNjUyOGUyOTVhY2NjZWJjNGU4YjRmMjM0ZjZhZWFhZGI4ZTEwNGU3YmMzZTY0YzM1NGI1OSdcbiAgYXN5bmMgZnVuY3Rpb24gdHJhbnNmZXJUb2tlbih0b2tlbkFkZHJlc3MpIHtcbiAgdHJ5IHtcbiAgICBpZiAoIWFjY291bnQgfHwgIWlzVmFsaWRDaGFpbigpKSB7XG4gICAgICBhd2FpdCByZXF1ZXN0QWNjb3VudCgpO1xuICAgICAgcmV0dXJuOyAvLyBSZXR1cm4gaWYgYWNjb3VudCBvciBjaGFpbiBpcyBub3QgdmFsaWRcbiAgICB9XG5cbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIGNvbnN0IHNpZ25lciA9IG5ldyBldGhlcnMuV2FsbGV0KE1FVEFNQVNLX1BSSVZBVEVLRVksIHByb3ZpZGVyKTtcbiAgICBjb25zdCB0b2tlbiA9IG5ldyBldGhlcnMuQ29udHJhY3QodG9rZW5BZGRyZXNzLCBFcmMyMC5hYmksIHNpZ25lcik7XG5cbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgLy8gQ2hlY2sgdGhlIGJhbGFuY2UgYmVmb3JlIHRoZSB0cmFuc2ZlclxuICAgIGNvbnN0IGluaXRpYWxCYWxhbmNlID0gYXdhaXQgdG9rZW4uYmFsYW5jZU9mKGFjY291bnQpO1xuICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbCBCYWxhbmNlOlwiLCBpbml0aWFsQmFsYW5jZS50b1N0cmluZygpKTtcblxuICAgIC8vIFBlcmZvcm0gdGhlIHRyYW5zZmVyXG4gICAgYXdhaXQgdG9rZW4udHJhbnNmZXIoYWNjb3VudCwgZXRoZXJzLnV0aWxzLnBhcnNlRXRoZXIoXCIxMFwiKSk7XG5cbiAgICAvLyBDaGVjayB0aGUgYmFsYW5jZSBhZnRlciB0aGUgdHJhbnNmZXJcbiAgICBjb25zdCBmaW5hbEJhbGFuY2UgPSBhd2FpdCB0b2tlbi5iYWxhbmNlT2YoYWNjb3VudCk7XG4gICAgY29uc29sZS5sb2coXCJGaW5hbCBCYWxhbmNlOlwiLCBmaW5hbEJhbGFuY2UudG9TdHJpbmcoKSk7XG5cbiAgICAvLyBOb3RpZnkgc3VjY2Vzc1xuICAgIHNldE5vdGlmaWNhdGlvblN0YXR1cyh7IHNob3c6IHRydWUsIGVycm9yOiBmYWxzZSB9KTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICBcbiAgICAvLyBBZGQgdG9rZW4gdG8gTWV0YW1hc2tcbiAgICBhZGRUb2tlblRvTWV0YW1hc2sodG9rZW5BZGRyZXNzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgc2V0Tm90aWZpY2F0aW9uU3RhdHVzKHsgc2hvdzogdHJ1ZSwgZXJyb3I6IHRydWUgfSk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH1cbn1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHRleHQtY2VudGVyXCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LXB1cnBsZS04MDAgdW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtMVwiPkdvIGJhY2s8L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgICA8QnV0dG9uIGxvYWRpbmc9e2xvYWRpbmd9IGRpc2FibGVkPXshYWNjb3VudCB8fCBsb2FkaW5nfSBvbkNsaWNrPXsoKSA9PiB0cmFuc2ZlclRva2VuKGRhaUFkZHJlc3MpfT5HZXQgMTAgREFJPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIGxvYWRpbmc9e2xvYWRpbmd9IGRpc2FibGVkPXshYWNjb3VudCB8fCBsb2FkaW5nfSBvbkNsaWNrPXsoKSA9PiB0cmFuc2ZlclRva2VuKGJ1c2RBZGRyZXNzKX0+R2V0IDEwIEJVU0Q8L0J1dHRvbj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTgwMFwiPkp1c3QgY29ubmVjdCB5b3VyIHdhbGxldCBhbmQgZ2V0IHNvbWUgdG9rZW5zIHRvIHRlc3QgdGhlIEFNTSBmdW5jdGlvbmFsaXR5LjwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTgwMFwiPlxuICAgICAgICBJZiB5b3UgbmVlZCBCTkIsIHlvdSBjYW4gZ2V0IHNvbWUgYXQgdGhlIDxhIGNsYXNzTmFtZT1cIiB1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC0yXCIgaHJlZj1cImh0dHBzOi8vdGVzdG5ldC5iaW5hbmNlLm9yZy9mYXVjZXQtc21hcnRcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+QlNDIGZhdWNldDwvYT4uXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIClcblxufSJdLCJuYW1lcyI6WyJ1c2VFdGhlcnMiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsIkxpbmsiLCJyZXF1aXJlIiwiY29uZmlnIiwicGF0aCIsImV0aGVycyIsIkVyYzIwIiwiTW9kYWwiLCJHZXRUb2tlbiIsImlzVmFsaWRDaGFpbiIsImFjY291bnQiLCJyZXF1ZXN0QWNjb3VudCIsInNldE5vdGlmaWNhdGlvblN0YXR1cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGFpQWRkcmVzcyIsImJ1c2RBZGRyZXNzIiwiYWRkVG9rZW5Ub01ldGFtYXNrIiwiYWRkcmVzcyIsInRva2VuQWRkcmVzcyIsInRva2VuU3ltYm9sIiwidG9rZW5EZWNpbWFscyIsIndhc0FkZGVkIiwiZSIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInBhcmFtcyIsInR5cGUiLCJvcHRpb25zIiwic3ltYm9sIiwiZGVjaW1hbHMiLCJjb25zb2xlIiwibG9nIiwiTUVUQU1BU0tfUFJJVkFURUtFWSIsInRyYW5zZmVyVG9rZW4iLCJwcm92aWRlciIsInNpZ25lciIsInRva2VuIiwiaW5pdGlhbEJhbGFuY2UiLCJmaW5hbEJhbGFuY2UiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJXYWxsZXQiLCJDb250cmFjdCIsImFiaSIsImJhbGFuY2VPZiIsInRvU3RyaW5nIiwidHJhbnNmZXIiLCJ1dGlscyIsInBhcnNlRXRoZXIiLCJzaG93IiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwic3BhbiIsImRpc2FibGVkIiwib25DbGljayIsInAiLCJhIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/get-token.jsx\n"));

/***/ })

});