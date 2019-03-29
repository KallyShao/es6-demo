/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

	// 结构赋值：左右一一对应进行赋值
	// 数组的结构赋值
	{
	    var a = void 0,
	        b = void 0,
	        res = void 0;

	    // console.log(a, b, res);
	    //这种解构赋值的使用场景：
	    a = 23;
	    b = 'x';
	    res = [8, 3, 0];
	}
	// 对象解构赋值
	{
	    var _x$y = { x: 'sjy', y: 18 },
	        x = _x$y.x,
	        y = _x$y.y; // 前后的Key必须一样
	    // console.log(x);
	}
	// 使用场景
	// 第一 变量交换
	// 第二 接收函数返回值
	{
	    var f = function f() {
	        return [1, 2];
	    };

	    var _f = f(),
	        _f2 = _slicedToArray(_f, 2),
	        _a = _f2[0],
	        _b = _f2[1];

	    console.log(_a, _b);
	}
	// 第三 选择性的接收某些值
	{
	    var _f3 = function _f3() {
	        return [1, 2, 3, 4, 5];
	    };
	    // let [a, , , b] = f();


	    var _f4 = _f3(),
	        _f5 = _toArray(_f4),
	        _a2 = _f5[0],
	        _b2 = _f5.slice(1); // 或者这样使用

	}

	{
	    var _a4 = { a: 22 },
	        _a4$a = _a4.a,
	        _a3 = _a4$a === undefined ? 3 : _a4$a,
	        _a4$b = _a4.b,
	        _b3 = _a4$b === undefined ? 2 : _a4$b; //前面括号内是给变量先赋默认值


	    console.log(_a3, _b3);
	}

	{
	    var _res = {
	        title: 'abc',
	        data: [{
	            title: 'item1'
	        }]
	    };

	    var t1 = _res.title,
	        _res$data = _slicedToArray(_res.data, 1),
	        t2 = _res$data[0].title;

	    console.log(t1, t2);
	}

/***/ })
/******/ ]);