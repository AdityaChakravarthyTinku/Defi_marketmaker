/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Notification.jsx":
/*!*************************************!*\
  !*** ./components/Notification.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Notification)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/solid */ \"@heroicons/react/solid\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_EthersContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/EthersContext */ \"./context/EthersContext.js\");\n\n\n\n\nfunction Notification() {\n    const { notificationStatus , setNotificationStatus  } = (0,_context_EthersContext__WEBPACK_IMPORTED_MODULE_3__.useEthers)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let timeout;\n        if (notificationStatus.show) {\n            timeout = setTimeout(()=>{\n                setNotificationStatus((prevStatus)=>{\n                    return {\n                        show: false,\n                        error: prevStatus.error\n                    };\n                });\n            }, 3000);\n        }\n        return ()=>clearTimeout(timeout);\n    }, [\n        notificationStatus\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `${!notificationStatus.show && \"hidden\"} absolute bottom-4 right-4 lg:right-auto lg:top-4 lg:bottom-auto p-4 md:text-lg rounded-xl flex gap-2 items-center bg-purple-900 text-purple-50`,\n        children: [\n            notificationStatus.error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.XCircleIcon, {\n                className: \"h-6 w-6 md:h-8 md:w-8\",\n                \"aria-hidden\": true\n            }, void 0, false, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\components\\\\Notification.jsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.CheckCircleIcon, {\n                className: \"h-6 w-6 md:h-8 md:w-8\",\n                \"aria-hidden\": \"true\"\n            }, void 0, false, {\n                fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\components\\\\Notification.jsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this),\n            notificationStatus.error ? \"Error\" : \"Success\"\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\components\\\\Notification.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNvQztBQUNqQjtBQUVyQyxTQUFTSSxZQUFZLEdBQUc7SUFFckMsTUFBTSxFQUFFQyxrQkFBa0IsR0FBRUMscUJBQXFCLEdBQUUsR0FBR0gsaUVBQVMsRUFBRTtJQUVqRUgsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBSU8sT0FBTztRQUNYLElBQUlGLGtCQUFrQixDQUFDRyxJQUFJLEVBQUU7WUFDM0JELE9BQU8sR0FBR0UsVUFBVSxDQUFDLElBQU07Z0JBQ3pCSCxxQkFBcUIsQ0FBQ0ksQ0FBQUEsVUFBVSxHQUFJO29CQUNsQyxPQUFPO3dCQUFFRixJQUFJLEVBQUUsS0FBSzt3QkFBRUcsS0FBSyxFQUFFRCxVQUFVLENBQUNDLEtBQUs7cUJBQUU7Z0JBQ2pELENBQUMsQ0FBQztZQUNKLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDVixDQUFDO1FBQ0QsT0FBUSxJQUFNQyxZQUFZLENBQUNMLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUMsRUFBRTtRQUFDRixrQkFBa0I7S0FBQyxDQUFDO0lBRXhCLHFCQUNFLDhEQUFDUSxLQUFHO1FBQUNDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQ1Qsa0JBQWtCLENBQUNHLElBQUksSUFBSSxRQUFRLENBQUMsK0lBQStJLENBQUM7O1lBQ3JNSCxrQkFBa0IsQ0FBQ00sS0FBSyxpQkFDdkIsOERBQUNULCtEQUFXO2dCQUFDWSxTQUFTLEVBQUMsdUJBQXVCO2dCQUFDQyxhQUFXOzs7OztvQkFBRyxpQkFFN0QsOERBQUNkLG1FQUFlO2dCQUFDYSxTQUFTLEVBQUMsdUJBQXVCO2dCQUFDQyxhQUFXLEVBQUMsTUFBTTs7Ozs7b0JBQUc7WUFFekVWLGtCQUFrQixDQUFDTSxLQUFLLEdBQ3ZCLE9BQU8sR0FFUCxTQUFTOzs7Ozs7WUFFUCxDQUNQO0FBRUgsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NjYW1tLWZyb250ZW5kLy4vY29tcG9uZW50cy9Ob3RpZmljYXRpb24uanN4PzI4MjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IENoZWNrQ2lyY2xlSWNvbiwgWENpcmNsZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiXG5pbXBvcnQgeyB1c2VFdGhlcnMgfSBmcm9tIFwiLi4vY29udGV4dC9FdGhlcnNDb250ZXh0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90aWZpY2F0aW9uKCkge1xuXG4gIGNvbnN0IHsgbm90aWZpY2F0aW9uU3RhdHVzLCBzZXROb3RpZmljYXRpb25TdGF0dXMgfSA9IHVzZUV0aGVycygpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZW91dFxuICAgIGlmIChub3RpZmljYXRpb25TdGF0dXMuc2hvdykge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXROb3RpZmljYXRpb25TdGF0dXMocHJldlN0YXR1cyA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgc2hvdzogZmFsc2UsIGVycm9yOiBwcmV2U3RhdHVzLmVycm9yIH1cbiAgICAgICAgfSlcbiAgICAgIH0sIDMwMDApXG4gICAgfVxuICAgIHJldHVybiAoKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpKVxuICB9LCBbbm90aWZpY2F0aW9uU3RhdHVzXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHshbm90aWZpY2F0aW9uU3RhdHVzLnNob3cgJiYgXCJoaWRkZW5cIn0gYWJzb2x1dGUgYm90dG9tLTQgcmlnaHQtNCBsZzpyaWdodC1hdXRvIGxnOnRvcC00IGxnOmJvdHRvbS1hdXRvIHAtNCBtZDp0ZXh0LWxnIHJvdW5kZWQteGwgZmxleCBnYXAtMiBpdGVtcy1jZW50ZXIgYmctcHVycGxlLTkwMCB0ZXh0LXB1cnBsZS01MGB9PlxuICAgICAge25vdGlmaWNhdGlvblN0YXR1cy5lcnJvciA/XG4gICAgICAgIDxYQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IG1kOmgtOCBtZDp3LThcIiBhcmlhLWhpZGRlbiAvPlxuICAgICAgICA6XG4gICAgICAgIDxDaGVja0NpcmNsZUljb24gY2xhc3NOYW1lPVwiaC02IHctNiBtZDpoLTggbWQ6dy04XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgIH1cbiAgICAgIHtub3RpZmljYXRpb25TdGF0dXMuZXJyb3IgP1xuICAgICAgICBcIkVycm9yXCJcbiAgICAgICAgOlxuICAgICAgICBcIlN1Y2Nlc3NcIlxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG5cbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJDaGVja0NpcmNsZUljb24iLCJYQ2lyY2xlSWNvbiIsInVzZUV0aGVycyIsIk5vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvblN0YXR1cyIsInNldE5vdGlmaWNhdGlvblN0YXR1cyIsInRpbWVvdXQiLCJzaG93Iiwic2V0VGltZW91dCIsInByZXZTdGF0dXMiLCJlcnJvciIsImNsZWFyVGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImFyaWEtaGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Notification.jsx\n");

/***/ }),

/***/ "./components/WalletButton.jsx":
/*!*************************************!*\
  !*** ./components/WalletButton.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WalletButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_EthersContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/EthersContext */ \"./context/EthersContext.js\");\n\n\nfunction WalletButton() {\n    const { account , requestAccount , logout  } = (0,_context_EthersContext__WEBPACK_IMPORTED_MODULE_1__.useEthers)();\n    if (account) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"absolute top-4 md:right-8 py-2 px-4 rounded-xl font-bold bg-purple-300 text-purple-700 hover:bg-purple-200 hover:text-purple-900\",\n            onClick: logout,\n            children: [\n                \"Disconnect \",\n                `${account.substring(0, 5)}...${account.slice(-4)}`\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\components\\\\WalletButton.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"absolute top-4 md:right-8 py-2 px-4 rounded-xl font-bold bg-purple-300 text-purple-700 hover:bg-purple-200 hover:text-purple-900\",\n        onClick: requestAccount,\n        children: \"Connect Wallet\"\n    }, void 0, false, {\n        fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\components\\\\WalletButton.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dhbGxldEJ1dHRvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQW9EO0FBRXJDLFNBQVNDLFlBQVksR0FBRztJQUVyQyxNQUFNLEVBQUVDLE9BQU8sR0FBRUMsY0FBYyxHQUFFQyxNQUFNLEdBQUUsR0FBR0osaUVBQVMsRUFBRTtJQUV2RCxJQUFJRSxPQUFPLEVBQUU7UUFDWCxxQkFDRSw4REFBQ0csUUFBTTtZQUNMQyxTQUFTLEVBQUMsa0lBQWtJO1lBQzVJQyxPQUFPLEVBQUVILE1BQU07O2dCQUNoQixhQUNZO2dCQUFDLENBQUMsRUFBRUYsT0FBTyxDQUFDTSxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRU4sT0FBTyxDQUFDTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Z0JBQ3ZELENBQ1Y7SUFDSCxDQUFDO0lBRUQscUJBQ0UsOERBQUNKLFFBQU07UUFDTEMsU0FBUyxFQUFDLGtJQUFrSTtRQUM1SUMsT0FBTyxFQUFFSixjQUFjO2tCQUN4QixnQkFFRDs7Ozs7WUFBUyxDQUNWO0FBRUgsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NjYW1tLWZyb250ZW5kLy4vY29tcG9uZW50cy9XYWxsZXRCdXR0b24uanN4PzBlYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRXRoZXJzIH0gZnJvbSBcIi4uL2NvbnRleHQvRXRoZXJzQ29udGV4dFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhbGxldEJ1dHRvbigpIHtcblxuICBjb25zdCB7IGFjY291bnQsIHJlcXVlc3RBY2NvdW50LCBsb2dvdXQgfSA9IHVzZUV0aGVycygpXG5cbiAgaWYgKGFjY291bnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgbWQ6cmlnaHQtOCBweS0yIHB4LTQgcm91bmRlZC14bCBmb250LWJvbGQgYmctcHVycGxlLTMwMCB0ZXh0LXB1cnBsZS03MDAgaG92ZXI6YmctcHVycGxlLTIwMCBob3Zlcjp0ZXh0LXB1cnBsZS05MDBcIlxuICAgICAgICBvbkNsaWNrPXtsb2dvdXR9XG4gICAgICA+XG4gICAgICAgIERpc2Nvbm5lY3Qge2Ake2FjY291bnQuc3Vic3RyaW5nKDAsNSl9Li4uJHthY2NvdW50LnNsaWNlKC00KX1gfVxuICAgICAgPC9idXR0b24+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIFxuICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgbWQ6cmlnaHQtOCBweS0yIHB4LTQgcm91bmRlZC14bCBmb250LWJvbGQgYmctcHVycGxlLTMwMCB0ZXh0LXB1cnBsZS03MDAgaG92ZXI6YmctcHVycGxlLTIwMCBob3Zlcjp0ZXh0LXB1cnBsZS05MDBcIlxuICAgICAgb25DbGljaz17cmVxdWVzdEFjY291bnR9XG4gICAgPlxuICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICA8L2J1dHRvbj5cbiAgKVxuXG59Il0sIm5hbWVzIjpbInVzZUV0aGVycyIsIldhbGxldEJ1dHRvbiIsImFjY291bnQiLCJyZXF1ZXN0QWNjb3VudCIsImxvZ291dCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzdWJzdHJpbmciLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WalletButton.jsx\n");

/***/ }),

/***/ "./context/EthersContext.js":
/*!**********************************!*\
  !*** ./context/EthersContext.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EthersProvider),\n/* harmony export */   \"useEthers\": () => (/* binding */ useEthers)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"web3modal\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst EthersContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useEthers() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(EthersContext);\n}\nfunction EthersProvider({ children  }) {\n    const { 0: account , 1: setAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: chainId , 1: setChainId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: notificationStatus , 1: setNotificationStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        show: false,\n        error: false\n    });\n    const validChainId = \"0x61\" // BSC testnet\n    ;\n    async function requestAccount() {\n        const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n        let provider;\n        try {\n            const connection = await web3Modal.connect();\n            provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(connection);\n            const address = await provider.getSigner().getAddress();\n            setAccount(address);\n        } catch (e) {\n            console.log(e);\n        }\n        if (!provider) return;\n        const chain = (await provider.getNetwork()).chainId;\n        setChainId(decToHex(chain));\n        const chainName = \"BSC - Testnet\";\n        const rpcUrl = \"https://data-seed-prebsc-1-s1.binance.org:8545/\";\n        const currency = \"BNB\";\n        const explorer = \"https://testnet.bscscan.com\";\n        switchOrCreateNetwork(validChainId, chainName, rpcUrl, currency, explorer);\n    }\n    function logout() {\n        setAccount(null);\n    }\n    function isValidChain() {\n        return chainId === validChainId;\n    }\n    function decToHex(number) {\n        return `0x${parseInt(number).toString(16)}`;\n    }\n    async function switchOrCreateNetwork(chainIdHex, chainName, rpcUrl, currency, explorer) {\n        try {\n            await window.ethereum.request({\n                method: \"wallet_switchEthereumChain\",\n                params: [\n                    {\n                        chainId: chainIdHex\n                    }\n                ]\n            });\n        } catch (error) {\n            if (error.code === 4902) {\n                try {\n                    await window.ethereum.request({\n                        method: \"wallet_addEthereumChain\",\n                        params: [\n                            {\n                                chainId: chainIdHex,\n                                chainName: chainName,\n                                rpcUrls: [\n                                    rpcUrl\n                                ],\n                                nativeCurrency: {\n                                    name: currency,\n                                    symbol: currency,\n                                    decimals: 18\n                                },\n                                blockExplorerUrls: [\n                                    explorer\n                                ]\n                            }, \n                        ]\n                    });\n                } catch (e) {\n                    console.log(e.message);\n                }\n            }\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (typeof window.ethereum === \"undefined\") {\n            console.log(\"Please install metamask to use this website\");\n            return;\n        }\n        window.ethereum.on(\"accountsChanged\", (accounts)=>{\n            const address = accounts[0];\n            setAccount(address);\n        });\n        window.ethereum.on(\"chainChanged\", (newChain)=>{\n            setChainId(decToHex(newChain));\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EthersContext.Provider, {\n        value: {\n            account,\n            requestAccount,\n            logout,\n            chainId,\n            setChainId,\n            isValidChain,\n            notificationStatus,\n            setNotificationStatus\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\context\\\\EthersContext.js\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFCQUNFLDhEQUFDdkQsYUFBYSxDQUFDd0QsUUFBUTtRQUNyQkMsS0FBSyxFQUFFO1lBQ0xyRCxPQUFPO1lBQ1BTLGNBQWM7WUFDZHFCLE1BQU07WUFDTjVCLE9BQU87WUFDUEMsVUFBVTtZQUNWNEIsWUFBWTtZQUNaM0Isa0JBQWtCO1lBQ2xCQyxxQkFBcUI7U0FDdEI7a0JBRUFOLFFBQVE7Ozs7O1lBQ2MsQ0FDMUI7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2NhbW0tZnJvbnRlbmQvLi9jb250ZXh0L0V0aGVyc0NvbnRleHQuanM/ODRhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCJcblxuY29uc3QgRXRoZXJzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRXRoZXJzKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChFdGhlcnNDb250ZXh0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdGhlcnNQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcblxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbY2hhaW5JZCwgc2V0Q2hhaW5JZF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbm90aWZpY2F0aW9uU3RhdHVzLCBzZXROb3RpZmljYXRpb25TdGF0dXNdID0gdXNlU3RhdGUoeyBzaG93OiBmYWxzZSwgZXJyb3I6IGZhbHNlIH0pXG4gIGNvbnN0IHZhbGlkQ2hhaW5JZCA9IFwiMHg2MVwiIC8vIEJTQyB0ZXN0bmV0XG5cbiAgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEFjY291bnQoKSB7XG4gICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpXG4gICAgbGV0IHByb3ZpZGVyXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpXG4gICAgICBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKVxuICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHByb3ZpZGVyLmdldFNpZ25lcigpLmdldEFkZHJlc3MoKVxuICAgICAgc2V0QWNjb3VudChhZGRyZXNzKVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG5cbiAgICBpZiAoIXByb3ZpZGVyKSByZXR1cm5cblxuICAgIGNvbnN0IGNoYWluID0gKGF3YWl0IHByb3ZpZGVyLmdldE5ldHdvcmsoKSkuY2hhaW5JZFxuICAgIHNldENoYWluSWQoZGVjVG9IZXgoY2hhaW4pKVxuXG4gICAgY29uc3QgY2hhaW5OYW1lID0gXCJCU0MgLSBUZXN0bmV0XCJcbiAgICBjb25zdCBycGNVcmwgPSBcImh0dHBzOi8vZGF0YS1zZWVkLXByZWJzYy0xLXMxLmJpbmFuY2Uub3JnOjg1NDUvXCJcbiAgICBjb25zdCBjdXJyZW5jeSA9IFwiQk5CXCJcbiAgICBjb25zdCBleHBsb3JlciA9IFwiaHR0cHM6Ly90ZXN0bmV0LmJzY3NjYW4uY29tXCJcbiAgICBzd2l0Y2hPckNyZWF0ZU5ldHdvcmsodmFsaWRDaGFpbklkLCBjaGFpbk5hbWUsIHJwY1VybCwgY3VycmVuY3ksIGV4cGxvcmVyKVxuICB9XG5cbiAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgIHNldEFjY291bnQobnVsbClcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVmFsaWRDaGFpbigpIHtcbiAgICByZXR1cm4gY2hhaW5JZCA9PT0gdmFsaWRDaGFpbklkO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVjVG9IZXgobnVtYmVyKSB7XG4gICAgcmV0dXJuIGAweCR7cGFyc2VJbnQobnVtYmVyKS50b1N0cmluZygxNil9YFxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3dpdGNoT3JDcmVhdGVOZXR3b3JrKGNoYWluSWRIZXgsIGNoYWluTmFtZSwgcnBjVXJsLCBjdXJyZW5jeSwgZXhwbG9yZXIpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwid2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW5cIixcbiAgICAgICAgcGFyYW1zOiBbeyBjaGFpbklkOiBjaGFpbklkSGV4IH1dLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5jb2RlID09PSA0OTAyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIndhbGxldF9hZGRFdGhlcmV1bUNoYWluXCIsXG4gICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoYWluSWQ6IGNoYWluSWRIZXgsXG4gICAgICAgICAgICAgICAgY2hhaW5OYW1lOiBjaGFpbk5hbWUsXG4gICAgICAgICAgICAgICAgcnBjVXJsczogW3JwY1VybF0sXG4gICAgICAgICAgICAgICAgbmF0aXZlQ3VycmVuY3k6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGN1cnJlbmN5LFxuICAgICAgICAgICAgICAgICAgc3ltYm9sOiBjdXJyZW5jeSxcbiAgICAgICAgICAgICAgICAgIGRlY2ltYWxzOiAxOCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJsb2NrRXhwbG9yZXJVcmxzOiBbZXhwbG9yZXJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgaW5zdGFsbCBtZXRhbWFzayB0byB1c2UgdGhpcyB3ZWJzaXRlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB3aW5kb3cuZXRoZXJldW0ub24oXCJhY2NvdW50c0NoYW5nZWRcIiwgKGFjY291bnRzKSA9PiB7XG4gICAgICBjb25zdCBhZGRyZXNzID0gYWNjb3VudHNbMF1cbiAgICAgIHNldEFjY291bnQoYWRkcmVzcylcbiAgICB9KVxuXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIG5ld0NoYWluID0+IHtcbiAgICAgIHNldENoYWluSWQoZGVjVG9IZXgobmV3Q2hhaW4pKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPEV0aGVyc0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGFjY291bnQsXG4gICAgICAgIHJlcXVlc3RBY2NvdW50LFxuICAgICAgICBsb2dvdXQsXG4gICAgICAgIGNoYWluSWQsXG4gICAgICAgIHNldENoYWluSWQsXG4gICAgICAgIGlzVmFsaWRDaGFpbixcbiAgICAgICAgbm90aWZpY2F0aW9uU3RhdHVzLFxuICAgICAgICBzZXROb3RpZmljYXRpb25TdGF0dXMsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0V0aGVyc0NvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwiZXRoZXJzIiwiV2ViM01vZGFsIiwiRXRoZXJzQ29udGV4dCIsInVzZUV0aGVycyIsIkV0aGVyc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsImNoYWluSWQiLCJzZXRDaGFpbklkIiwibm90aWZpY2F0aW9uU3RhdHVzIiwic2V0Tm90aWZpY2F0aW9uU3RhdHVzIiwic2hvdyIsImVycm9yIiwidmFsaWRDaGFpbklkIiwicmVxdWVzdEFjY291bnQiLCJ3ZWIzTW9kYWwiLCJwcm92aWRlciIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiYWRkcmVzcyIsImdldFNpZ25lciIsImdldEFkZHJlc3MiLCJlIiwiY29uc29sZSIsImxvZyIsImNoYWluIiwiZ2V0TmV0d29yayIsImRlY1RvSGV4IiwiY2hhaW5OYW1lIiwicnBjVXJsIiwiY3VycmVuY3kiLCJleHBsb3JlciIsInN3aXRjaE9yQ3JlYXRlTmV0d29yayIsImxvZ291dCIsImlzVmFsaWRDaGFpbiIsIm51bWJlciIsInBhcnNlSW50IiwidG9TdHJpbmciLCJjaGFpbklkSGV4Iiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicGFyYW1zIiwiY29kZSIsInJwY1VybHMiLCJuYXRpdmVDdXJyZW5jeSIsIm5hbWUiLCJzeW1ib2wiLCJkZWNpbWFscyIsImJsb2NrRXhwbG9yZXJVcmxzIiwibWVzc2FnZSIsIm9uIiwiYWNjb3VudHMiLCJuZXdDaGFpbiIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/EthersContext.js\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_EthersContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/EthersContext */ \"./context/EthersContext.js\");\n/* harmony import */ var _components_WalletButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WalletButton */ \"./components/WalletButton.jsx\");\n/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Notification */ \"./components/Notification.jsx\");\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_EthersContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative h-screen grid place-items-center px-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WalletButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\_app.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Notification__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\_app.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\_app.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\_app.jsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\SEM 5\\\\BTA\\\\Hardhat\\\\amm-project\\\\amm-frontend-main\\\\pages\\\\_app.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQ3VCO0FBQ0M7QUFDQTtBQUV0RCxTQUFTRyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUV2QyxxQkFDRSw4REFBQ0wsOERBQWM7a0JBQ2IsNEVBQUNNLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGdEQUFnRDs7OEJBQzdELDhEQUFDTixnRUFBWTs7Ozt3QkFBRzs4QkFDaEIsOERBQUNDLGdFQUFZOzs7O3dCQUFHOzhCQUNoQiw4REFBQ0UsU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozt3QkFBSTs7Ozs7O2dCQUN4Qjs7Ozs7WUFDUyxDQUNsQjtBQUVILENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3NjYW1tLWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qc3g/NGNiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCBFdGhlcnNQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dC9FdGhlcnNDb250ZXh0XCJcbmltcG9ydCBXYWxsZXRCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9XYWxsZXRCdXR0b24nO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbic7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXG4gIHJldHVybiAoXG4gICAgPEV0aGVyc1Byb3ZpZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLXNjcmVlbiBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBweC0yXCI+XG4gICAgICAgIDxXYWxsZXRCdXR0b24gLz5cbiAgICAgICAgPE5vdGlmaWNhdGlvbiAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0V0aGVyc1Byb3ZpZGVyPlxuICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJFdGhlcnNQcm92aWRlciIsIldhbGxldEJ1dHRvbiIsIk5vdGlmaWNhdGlvbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@heroicons/react/solid":
/*!*****************************************!*\
  !*** external "@heroicons/react/solid" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3modal":
/*!****************************!*\
  !*** external "web3modal" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("web3modal");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();