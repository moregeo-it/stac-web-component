(self["webpackChunkvue_lib_openeo"] = self["webpackChunkvue_lib_openeo"] || []).push([[4870],{

/***/ 41:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $defineProperty = __webpack_require__(655);

var $SyntaxError = __webpack_require__(8068);
var $TypeError = __webpack_require__(9675);

var gopd = __webpack_require__(5795);

/** @type {import('.')} */
module.exports = function defineDataProperty(
	obj,
	property,
	value
) {
	if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
		throw new $TypeError('`obj` must be an object or a function`');
	}
	if (typeof property !== 'string' && typeof property !== 'symbol') {
		throw new $TypeError('`property` must be a string or a symbol`');
	}
	if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
		throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
		throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
		throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
		throw new $TypeError('`loose`, if provided, must be a boolean');
	}

	var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
	var nonWritable = arguments.length > 4 ? arguments[4] : null;
	var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
	var loose = arguments.length > 6 ? arguments[6] : false;

	/* @type {false | TypedPropertyDescriptor<unknown>} */
	var desc = !!gopd && gopd(obj, property);

	if ($defineProperty) {
		$defineProperty(obj, property, {
			configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
			enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
			value: value,
			writable: nonWritable === null && desc ? desc.writable : !nonWritable
		});
	} else if (loose || (!nonEnumerable && !nonWritable && !nonConfigurable)) {
		// must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
		obj[property] = value; // eslint-disable-line no-param-reassign
	} else {
		throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
	}
};


/***/ }),

/***/ 76:
/***/ ((module) => {

"use strict";


/** @type {import('./functionCall')} */
module.exports = Function.prototype.call;


/***/ }),

/***/ 242:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"aa":"Afar","ab":"Abkhazian","af":"Afrikaans","ak":"Akan","am":"Amharic","an":"Aragonese","ar":"Arabic","as":"Assamese","av":"Avar","ay":"Aymara","az":"Azerbaijani","ba":"Bashkir","be":"Belarusian","bg":"Bulgarian","bh":"Bihari","bi":"Bislama","bm":"Bambara","bn":"Bengali","bo":"Tibetan","br":"Breton","bs":"Bosnian","ca":"Catalan","ce":"Chechen","ch":"Chamorro","co":"Corsican","cr":"Cree","cs":"Czech","cu":"Old Bulgarian","cv":"Chuvash","cy":"Welsh","da":"Danish","de":"German","dv":"Divehi","dz":"Dzongkha","ee":"Ewe","el":"Greek","en":"English","eo":"Esperanto","es":"Spanish","et":"Estonian","eu":"Basque","fa":"Persian","ff":"Peul","fi":"Finnish","fj":"Fijian","fo":"Faroese","fr":"French","fy":"West Frisian","ga":"Irish","gd":"Scottish Gaelic","gl":"Galician","gn":"Guarani","gu":"Gujarati","gv":"Manx","ha":"Hausa","he":"Hebrew","hi":"Hindi","ho":"Hiri Motu","hr":"Croatian","ht":"Haitian","hu":"Hungarian","hy":"Armenian","hz":"Herero","ia":"Interlingua","id":"Indonesian","ie":"Interlingue","ig":"Igbo","ii":"Sichuan Yi","ik":"Inupiak","io":"Ido","is":"Icelandic","it":"Italian","iu":"Inuktitut","ja":"Japanese","jv":"Javanese","ka":"Georgian","kg":"Kongo","ki":"Kikuyu","kj":"Kuanyama","kk":"Kazakh","kl":"Greenlandic","km":"Cambodian","kn":"Kannada","ko":"Korean","kr":"Kanuri","ks":"Kashmiri","ku":"Kurdish","kv":"Komi","kw":"Cornish","ky":"Kirghiz","la":"Latin","lb":"Luxembourgish","lg":"Ganda","li":"Limburgian","ln":"Lingala","lo":"Laotian","lt":"Lithuanian","lv":"Latvian","mg":"Malagasy","mh":"Marshallese","mi":"Maori","mk":"Macedonian","ml":"Malayalam","mn":"Mongolian","mo":"Moldovan","mr":"Marathi","ms":"Malay","mt":"Maltese","my":"Burmese","na":"Nauruan","nd":"North Ndebele","ne":"Nepali","ng":"Ndonga","nl":"Dutch","nn":"Norwegian Nynorsk","no":"Norwegian","nr":"South Ndebele","nv":"Navajo","ny":"Chichewa","oc":"Occitan","oj":"Ojibwa","om":"Oromo","or":"Oriya","os":"Ossetian","pa":"Punjabi","pi":"Pali","pl":"Polish","ps":"Pashto","pt":"Portuguese","qu":"Quechua","rm":"Raeto Romance","rn":"Kirundi","ro":"Romanian","ru":"Russian","rw":"Rwandi","sa":"Sanskrit","sc":"Sardinian","sd":"Sindhi","sg":"Sango","sh":"Serbo-Croatian","si":"Sinhalese","sk":"Slovak","sl":"Slovenian","sm":"Samoan","sn":"Shona","so":"Somalia","sq":"Albanian","sr":"Serbian","ss":"Swati","st":"Southern Sotho","su":"Sundanese","sv":"Swedish","sw":"Swahili","ta":"Tamil","te":"Telugu","tg":"Tajik","th":"Thai","ti":"Tigrinya","tk":"Turkmen","tl":"Tagalog","tn":"Tswana","to":"Tonga","tr":"Turkish","ts":"Tsonga","tt":"Tatar","tw":"Twi","ty":"Tahitian","ug":"Uyghur","uk":"Ukrainian","ur":"Urdu","ve":"Venda","vi":"Vietnamese","vo":"Volapük","wa":"Walloon","wo":"Wolof","xh":"Xhosa","yi":"Yiddish","yo":"Yoruba","za":"Zhuang","zh":"Chinese","zu":"Zulu"}');

/***/ }),

/***/ 414:
/***/ ((module) => {

"use strict";


/** @type {import('./round')} */
module.exports = Math.round;


/***/ }),

/***/ 453:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var undefined;

var $Object = __webpack_require__(9612);

var $Error = __webpack_require__(9383);
var $EvalError = __webpack_require__(1237);
var $RangeError = __webpack_require__(9290);
var $ReferenceError = __webpack_require__(9538);
var $SyntaxError = __webpack_require__(8068);
var $TypeError = __webpack_require__(9675);
var $URIError = __webpack_require__(5345);

var abs = __webpack_require__(1514);
var floor = __webpack_require__(8968);
var max = __webpack_require__(6188);
var min = __webpack_require__(8002);
var pow = __webpack_require__(5880);
var round = __webpack_require__(414);
var sign = __webpack_require__(3093);

var $Function = Function;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = __webpack_require__(5795);
var $defineProperty = __webpack_require__(655);

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(4039)();

var getProto = __webpack_require__(3628);
var $ObjectGPO = __webpack_require__(1064);
var $ReflectGPO = __webpack_require__(8648);

var $apply = __webpack_require__(1002);
var $call = __webpack_require__(76);

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	__proto__: null,
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': $Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': $EvalError,
	'%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': $Object,
	'%Object.getOwnPropertyDescriptor%': $gOPD,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': $RangeError,
	'%ReferenceError%': $ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': $URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,

	'%Function.prototype.call%': $call,
	'%Function.prototype.apply%': $apply,
	'%Object.defineProperty%': $defineProperty,
	'%Object.getPrototypeOf%': $ObjectGPO,
	'%Math.abs%': abs,
	'%Math.floor%': floor,
	'%Math.max%': max,
	'%Math.min%': min,
	'%Math.pow%': pow,
	'%Math.round%': round,
	'%Math.sign%': sign,
	'%Reflect.getPrototypeOf%': $ReflectGPO
};

if (getProto) {
	try {
		null.error; // eslint-disable-line no-unused-expressions
	} catch (e) {
		// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
		var errorProto = getProto(getProto(e));
		INTRINSICS['%Error.prototype%'] = errorProto;
	}
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen && getProto) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	__proto__: null,
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(6743);
var hasOwn = __webpack_require__(9957);
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ 487:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var setFunctionLength = __webpack_require__(6897);

var $defineProperty = __webpack_require__(655);

var callBindBasic = __webpack_require__(3126);
var applyBind = __webpack_require__(2205);

module.exports = function callBind(originalFunction) {
	var func = callBindBasic(arguments);
	var adjustedLength = originalFunction.length - (arguments.length - 1);
	return setFunctionLength(
		func,
		1 + (adjustedLength > 0 ? adjustedLength : 0),
		true
	);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ 537:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnvRegex = /^$/;

if (({"NODE_ENV":"production","BASE_URL":"/"}).NODE_DEBUG) {
  var debugEnv = ({"NODE_ENV":"production","BASE_URL":"/"}).NODE_DEBUG;
  debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
    .replace(/\*/g, '.*')
    .replace(/,/g, '$|^')
    .toUpperCase();
  debugEnvRegex = new RegExp('^' + debugEnv + '$', 'i');
}
exports.debuglog = function(set) {
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (debugEnvRegex.test(set)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').slice(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.slice(1, -1);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
exports.types = __webpack_require__(9032);

function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
exports.types.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;
exports.types.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;
exports.types.isNativeError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(1135);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(6698);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb.bind(null, null, ret)) },
            function(rej) { process.nextTick(callbackifyOnRejected.bind(null, rej, cb)) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


/***/ }),

/***/ 592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $defineProperty = __webpack_require__(655);

var hasPropertyDescriptors = function hasPropertyDescriptors() {
	return !!$defineProperty;
};

hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
	// node v0.6 has a bug where array lengths can be Set but not Defined
	if (!$defineProperty) {
		return null;
	}
	try {
		return $defineProperty([], 'length', { value: 1 }).length !== 1;
	} catch (e) {
		// In Firefox 4-22, defining length on an array throws an exception.
		return true;
	}
};

module.exports = hasPropertyDescriptors;


/***/ }),

/***/ 655:
/***/ ((module) => {

"use strict";


/** @type {import('.')} */
var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = false;
	}
}

module.exports = $defineProperty;


/***/ }),

/***/ 697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Registry = __webpack_require__(9087);
const _ = __webpack_require__(5288);
const I18N = __webpack_require__(4540);
const DataTypes = __webpack_require__(8995);
const Formatters = __webpack_require__(735);

function formatGrouped(context, data, type, filter, coreKey) {
	// Group fields into extensions
	let groups = {};
	for(let field in data) {
		let value;
		try {
			let parts = field.split(/:(.*)/);
			if (parts.length === 1) {
				parts.unshift(coreKey);
			}
			let ext = parts[0];
			if (typeof filter === 'function' && !filter(field, [field])) {
				continue;
			}

			value = data[field];
			let spec = Registry.getSpecification(field, type);

			// Move to another extension (e.g. if no prefix is provided)
			if (spec.ext) {
				ext = spec.ext;
			}

			// Special handling for summaries that contain a list with keys (e.g. cube:dimensions, gee:schema)
			// There's usually just a single object included, so get that as value
			let isSummarizedListWithKeys = false;
			if (type === 'summaries' && spec.listWithKeys && Array.isArray(value) && value.length > 0) {
				value = value[0];
				isSummarizedListWithKeys = true;
			}

			// Fill items with missing properties
			let items = null;
			let itemOrder = [];
			if (_.isObject(spec.items)) {
				let temp = value;
				// Ignore keys for lists that are stored as object (e.g. cube:dimensions)
				if (spec.listWithKeys) {
					temp = Object.values(temp);
				}

				let itemFieldNames = [];
				if (Array.isArray(temp)) {
					itemFieldNames = _.keysFromListOfObjects(temp);
				}
				else if (_.isObject(temp)) {
					itemFieldNames = Object.keys(temp);
				}

				items = {};
				// Remove fields from list that are not available in the data
				itemOrder = spec.itemOrder.filter(fieldName => itemFieldNames.includes(fieldName));

				itemFieldNames.forEach(key => {
					if (typeof spec.items[key] === 'undefined') {
						// Add fields that are not specified in fields.json
						items[key] = {
							label: _.formatKey(key),
							explain: key
						};
						// Place non-specified fields at the end
						itemOrder.push(key);
					}
					else {
						// Clone field spec from fields.json
						items[key] = Object.assign({}, spec.items[key]);
						items[key].label = label(key, spec.items[key]);
					}
				});
			}

			// Format values
			let formatted;

			// Handle summaries
			if (type === 'summaries') {
				if (!isSummarizedListWithKeys && _.isObject(value)) {
					if (typeof value.minimum !== 'undefined' && typeof value.maximum !== 'undefined') {
						const formatSummaryValue = x => format(x, field, context, data, spec, filter, [field]);
						if (value.minimum === value.maximum) {
							formatted = formatSummaryValue(value.minimum);
						}
						else if (value.minimum === null) {
							formatted = `< ${formatSummaryValue(value.maximum)}`;
						}
						else if (value.maximum === null) {
							formatted = `> ${formatSummaryValue(value.minimum)}`;
						}
						else {
							formatted = `${formatSummaryValue(value.minimum)} – ${formatSummaryValue(value.maximum)}`;
						}
					}
					else {
						formatted = DataTypes.object(value);
					}
				}
				else if (Registry.externalRenderer && items) {
					let formatted = isSummarizedListWithKeys ? Object.assign({}, value) : value.slice(0);
					// Go through each field's summary
					for(let i in formatted) {
						let result = _.isObject(formatted[i]) ? {} : [];
						// Go through each entry in a field's summary (this is besically a single value as defined in the Item spec)
						for(let key in items) {
							result[key] = format(formatted[i][key], key, context, data, items[key]);
						}
						formatted[i] = result;
					}
				}
				else if (Array.isArray(value)) {
					formatted = _.toList(value, !spec.custom && !spec.items, v => format(v, field, context, data, spec));
				}
				else {
					console.warn(`Invalid summary value: ${value}`);
				}
			}

			// Fallback to "normal" rendering if not handled by summaries yet
			if (typeof formatted === 'undefined') {
				formatted = format(value, field, context, data, spec, filter, [field]);
			}

			// Add group if missing
			if (!_.isObject(groups[ext])) {
				groups[ext] = {
					extension: ext,
					label: extension(ext),
					properties: {}
				};
			}

			groups[ext].properties[field] = {
				label: label(field, spec),
				value,
				formatted,
				items,
				itemOrder,
				spec
			};
		} catch(error) {
			console.error(`Field '${field}' with value '${value}' resulted in an error`, error);
		}
	}
	return Object.values(groups).sort((a,b) => I18N.collator.compare(a.extension, b.extension));

}

// For assets (item and collection) and item-assets (extension)
function formatAsset(asset, context, filter = null, coreKey = '') {
	return formatGrouped(context, asset, 'assets', filter, coreKey);
}

// For links
function formatLink(link, context, filter = null, coreKey = '') {
	return formatGrouped(context, link, 'links', filter, coreKey);
}

// For Providers
function formatProvider(provider, context, filter = null, coreKey = '') {
	return formatGrouped(context, provider, 'providers', filter, coreKey);
}

// For Collection summaries
function formatSummaries(collection, filter = null, coreKey = '') {
	return formatGrouped(collection, collection.summaries, 'summaries', filter, coreKey);
}

// For Collections
function formatCollection(collection, filter = null, coreKey = '') {
	return formatGrouped(collection, collection, 'collection', filter, coreKey);
}

// For Catalogs
function formatCatalog(catalog, filter = null, coreKey = '') {
	return formatGrouped(catalog, catalog, 'catalog', filter, coreKey);
}

// For item properties
function formatItemProperties(item, filter = null, coreKey = '') {
	return formatGrouped(item, item.properties, 'metadata', filter, coreKey);
}

function format(value, field, context = null, parent = null, spec = null, filter = null, path = []) {
	if (!_.isObject(spec)) {
		spec = Registry.getSpecification(field);
	}

	if (typeof spec.format === 'string') {
		let fn = Formatters[`format${spec.format}`];
		if (!fn) {
			console.warn(`Formatter '${spec.format}' not available.`);
		}
		return fn(value, field, spec, context, parent);
	}
	else if (typeof spec.formatter === 'function') {
		return spec.formatter(value, field, spec, context, parent);
	}
	else if (_.isObject(spec.mapping)) {
		let key = String(value);
		if (typeof spec.mapping[key] !== 'undefined') {
			value = spec.mapping[key];
		}
		else if (typeof spec.mapping[key.toLowerCase()] !== 'undefined') {
			value = spec.mapping[key.toLowerCase()];
		}
		else if (typeof spec.mapping[key.toUpperCase()] !== 'undefined') {
			value = spec.mapping[key.toUpperCase()];
		}
		return DataTypes.format(_.t(value), spec.unit);
	}
	else if (value === null && spec.null) {
		return DataTypes.null(spec.null);
	}
	else if (Array.isArray(value)) {
		let callback = (v, i) => format(v, field, context, parent, spec, filter, path.concat([i]));
		if (typeof filter === 'function' && path.length > 0) {
			value = value.filter((v, i) => filter(path[0], path.concat([i])));
		}
		if (Registry.externalRenderer && (spec.custom || spec.items)) {
			return value.map(callback);
		}
		else {
			return _.toList(value, false, callback);
		}
	}
	else if (_.isObject(value)) {
		let callbackSpec = k => {
			if (_.isObject(spec.items)) {
				return spec.listWithKeys ? {items: spec.items, itemOrder: spec.itemOrder} : spec.items[k];
			}
			else if (_.isObject(spec.properties)) {
				return spec.properties[k];
			}
			return {};
		};
		let callbackValue = (v, k, p) => format(v, k, context, p, callbackSpec(k), filter, path.concat([k]));
		if (Registry.externalRenderer && (spec.custom || spec.items || spec.properties)) {
			let formattedValues = {};
			for(let key in value) {
				if (typeof filter === 'function' && path.length > 0 && !filter(path[0], path.concat([key]))) {
					continue;
				}
				formattedValues[key] = callbackValue(value[key], key, value);
			}
			return formattedValues;
		}
		else {
			let callbackLabel = k => label(k, callbackSpec(k));
			let itemOrder = spec.listWithKeys ? [] : spec.itemOrder;
			return _.toObject(value, callbackValue, callbackLabel, itemOrder, filter, path);
		}
	}
	else {
		return DataTypes.format(value, spec.unit);
	}
}

function label(key, spec = null) {
	if (!_.isObject(spec)) {
		spec = Registry.getSpecification(key);
	}
	if (_.isObject(spec) && typeof spec.label === 'string') {
		if (typeof spec.explain === 'string') {
			if (spec.explain.match(/^https?:\/\//i)) {
				return _.toLink(spec.explain, _.t(spec.label), "about");
			}
			else {
				return _.abbrev(_.t(spec.label), _.t(spec.explain));
			}
		}
		else if (typeof spec.label === 'string') {
			return _.t(spec.label);
		}
	}
	return _.formatKey(key);
}

function extension(key) {
	return label(key, Registry.getExtension(key));
}

module.exports = {
	format,
	label,
	extension,
	formatCatalog,
	formatCollection,
	formatSummaries,
	formatItemProperties,
	formatAsset,
	formatLink,
	formatProvider,
	formatGrouped
};

/***/ }),

/***/ 735:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const _ = __webpack_require__(5288);
const DataTypes = __webpack_require__(8995);
const I18N = __webpack_require__(4540);
const Registry = __webpack_require__(9087);

const Formatters = {

	allowHtmlInCommonMark: false,

	formatUrl(value, field, spec = {}, context = null, parent = null) {
		let title = _.isObject(parent) && typeof parent === 'string' ? parent.title : value;
		return _.toLink(value, title, parent.rel || "");
	},

	formatLink(value) {
		return _.toList(value, false, value => _.toLink(value.href, value.title, value.rel));
	},

	formatMediaType(value, field, spec = {}) {
		return _.e(_.t(Formatters._formatMediaType(value, field, spec)));
	},

	_formatMediaType(value, field, spec = {}) {
		let short = Boolean(spec.shorten);

		const mediaType = Registry.getDependency('content-type');
		if (!mediaType) {
			return short ? "" : _.e(value);
		}

		let media;
		try {
			media = mediaType.parse(value);
		} catch (error) {
			console.warn(error);
			return short ? "" : _.e(value);
		}

		switch(media.type) {
			// not supported: image/vnd.stac.geotiff; cloud-optimized=true
			case 'image/tiff':
				if (media.parameters.application === "geotiff") {
					if (media.parameters.profile === "cloud-optimized") {
						return short ? 'COG' : 'Cloud-Optimized GeoTIFF image';
					}
					else {
						return short ? 'GeoTiff' : 'GeoTIFF image';
					}
				}
				else {
					return short ? 'TIFF' : 'TIFF image';
				}
			case 'image/jp2':
				return short ? 'JPEG 2000' : 'JPEG 2000 image';
			case 'image/png':
			case 'image/apng':
			case 'image/vnd.mozilla.apng':
				return short ? 'PNG' : 'PNG image';
			case 'image/gif':
				return short ? 'GIF' : 'GIF image';
			case 'image/jpeg':
			case 'image/jpg':
				return short ? 'JPEG' : 'JPEG image';
			case 'image/webp':
				return short ? 'WebP' : 'WebP image';
			case 'image/bmp':
			case 'image/x-bmp':
			case 'image/x-ms-bmp':
			case 'image/wbmp':
				return short ? 'Bitmap' : 'Bitmap image';
			case 'image/svg+xml':
				return short ? 'SVG' : 'SVG vector image';
			case 'text/csv':
				return short ? 'CSV' : 'Comma-separated values (CSV)';
			case 'text/xml':
			case 'application/xml':
				return 'XML';
			case 'text/json':
			case 'application/json':
				return 'JSON';
			case 'application/x-ndjson':
				return short ? 'NDJSON' : 'Newline Delimited JSON';
			case 'text/yaml':
			case 'text/vnd.yaml':
			case 'text/x-yaml':
			case 'application/x-yaml':
				return 'YAML';
			case 'application/geo+json':
				return 'GeoJSON';
			case 'application/gml+xml':
				return 'GML';
			case 'application/vnd.google-earth.kml+xml':
			case 'application/vnd.google-earth.kmz':
				return 'KML';
			case 'application/geopackage+vnd.sqlite3':
			case 'application/geopackage+sqlite3':
				return 'GeoPackage';
			case 'text/html':
			case 'application/html':
			case 'application/xhtml+xml':
				return short ? 'HTML' : 'HTML (Website)';
			case 'text/plain':
				return short ? 'Text' : 'Text document';
			case 'text/markdown':
				return short ? 'Markdown' : 'Markdown document';
			case 'application/pdf':
				return short ? 'PDF' : 'PDF document';
			case 'application/zip':
				return short ? 'ZIP' : 'ZIP archive';
			case 'application/gzip':
				return short ? 'GZIP' : 'GZIP archive';
			case 'application/x-hdf':
				return 'HDF';
			case 'application/netcdf':
			case 'application/x-netcdf':
				return 'NetCDF';
			case 'application/x.mrf':
				return short ? 'MRF' : 'Meta Raster Format';
			case 'application/wmo-GRIB2':
				return 'GRIB 2';
			case 'application/grib':
				return `GRIB ${media.parameters.edition || ""}`.trim();
			case 'application/bufr':
				return `BUFR ${media.parameters.edition || ""}`.trim();
			case 'application/octet-stream':
				return short ? 'Binary' : 'Binary file';
			case 'application/vnd.laszip':
				return 'LASzip';
			case 'application/vnd.laszip+copc': // https://github.com/copcio/copcio.github.io/issues/53
				return short ? 'COPC' : 'Cloud-Optimized Point Cloud (LASzip)';
			case 'application/vnd+zarr': // https://github.com/zarr-developers/zarr-specs/issues/123
				return 'Zarr';
			case 'application/x-parquet': // Inofficial
			case 'application/vnd.apache.parquet': // Official (tbc): https://github.com/opengeospatial/geoparquet/issues/115
				return 'Parquet'
			case 'application/vnd.pmtiles':
				return 'PMTiles';
			case 'application/vnd.cov+json':
				return 'CoverageJSON';
			case 'application/vnd.flatgeobuf':
				return 'FlatGeobuf'; // inofficial: https://github.com/flatgeobuf/flatgeobuf/discussions/112
			case 'application/x-filegdb':
				return short ? 'Geodatabase' : 'Esri File Geodatabase';
			case 'application/vnd.nitf':
				return short ? 'NITF' : 'National Imagery Transmission Format';
			case 'application/3dtiles+json':
				return '3D Tiles';
			default: {
				let [group, format] = media.type.split('/');
				format = _.formatKey(format.replace(/^(vnd|x)[.+-]/, ''));
				if (short) {
					return format;
				}
				switch(group) {
					case 'audio':
						return `${format} audio`;
					case 'image':
						return `${format} image`;
					case 'font':
						return `Font`;
					case 'model':
						return `${format} 3D model`;
					case 'video':
						return `${format} video`;
					case 'text':
					case 'application':
						return format;
					default:
						return value;
				}
			}
		}
	},

	formatTimestamp(value) {
		if (typeof value === 'string') {
			try {
				return I18N.dateTimeFormatter.format(new Date(value));
			} catch (error) {}
		}
		return DataTypes.null();
	},

	formatPercent0to1(value, field, spec = {}) {
		return DataTypes.number(value * 100, spec.unit);
	},

	formatDate(value) {
		if (typeof value === 'string') {
			try {
				return I18N.dateFormatter.format(new Date(value));
			} catch (error) {}
		}
		return DataTypes.null();
	},

	formatDuration(value) {
		if (typeof value === 'string') {
			const lib = Registry.getDependency('@musement/iso-duration');
			if (!lib) {
				return _.e(value);
			}
			const { isoDuration, en } = lib;
			isoDuration.setLocales({ en }, { fallbackLocale: 'en' });
			let formatted = isoDuration(value).humanize('en');
			if (formatted.length === 0) {
				return _.e(_.t('none'));
			}
			else {
				return _.e(formatted);
			}
		}
		return DataTypes.null();
	},

	formatLanguageCode(value) {
		if (Array.isArray(value)) {
			return _.toList(value, true, Formatters.formatLanguageCode, false);
		}
		else if (typeof value !== 'string' || value.length < 2) {
			return DataTypes.null();
		}

		const list = __webpack_require__(242);
		const [code, ...rest] = value.split('-');
		if (code in list) {
			const name = list[code];
			if (rest.length > 0) {
				return _.e(_.t(`${name} (${rest.join(' ')})`));
			}
			return _.e(_.t(name));
		}
		return _.e(_.t(value));
	},

	formatLicense(value, field, spec = {}, context = null) {
		if (typeof value !== 'string' || value.length === 0) {
			return DataTypes.null();
		}

		// We could use the spdx-license-ids and/or spdx-to-html packages previously used in STAC Browser,
		// but let's try it without additional dependency for now.
		if (value !== 'other' && value !== 'proprietary' && value !== 'various' && value.match(/^[\w\.\-]+$/i)) { // SPDX
			return _.toLink(`https://spdx.org/licenses/${value}.html`, value, "license");
		}
		
		let licenses = Array.isArray(context.links) ? context.links.filter(link => (_.isObject(link) && typeof link.href === 'string' && link.rel === 'license')) : [];
		if (licenses.length > 0) {
			return _.toList(licenses, false, link => _.toLink(link.href, link.title || value, "license"));
		}
		else {
			return DataTypes.string(value);
		}
	},

	formatProviders(value) {
		return _.toList(value, false, provider => {
			let name = provider.name;
			let roles = '';
			let description = '';
			if (typeof provider.url === 'string' && provider.url.length > 0) {
				name = _.toLink(provider.url, name);
			}
			if (Array.isArray(provider.roles) && provider.roles.length > 0) {
				roles = provider.roles.map(r => DataTypes.format(r)).join(', ');
				roles = ` (<em>${roles}</em>)`;
			}
			if (typeof provider.description === 'string' && provider.description.length > 0) {
				description = Formatters.formatCommonMark(provider.description);
			}
			return `${name}${roles}${description}`;
		});
	},

	formatCommonMark(value) {
		if (typeof value !== 'string' || value.length === 0) {
			return DataTypes.null();
		}
		const commonmark = Registry.getDependency('commonmark');
		let html;
		if (commonmark) {
			let reader = new commonmark.Parser();
			let writer = new commonmark.HtmlRenderer({safe: !Formatters.allowHtmlInCommonMark, smart: true});
			html = writer.render(reader.parse(value));
		}
		else if (Formatters.allowHtmlInCommonMark) {
			html = value;
		}
		else {
			html = _.e(value);
		}
		return `<div class="description">${html}</div>`;
	},

	formatSoftware(value) {
		if (!_.isObject(value)) {
			return DataTypes.null();
		}

		let list = [];
		for(let software in value) {
			let version = value[software];
			if ((typeof version === 'string' && version.length > 0) || typeof version === 'number') {
				list.push(`${software} (${version})`);
			}
			else {
				list.push(software);
			}
		}
		return _.toList(list, true, null, false);
	},

	formatDOI(value) {
		value = DataTypes.format(value);
		return _.toLink(`http://doi.org/${value}`, value);
	},

	formatCRS(value) {
		return _.toList(value, false, value => {
			if (typeof value === 'string') {
				let title = value
					.replace(/^https?:\/\/www\.opengis\.net\/def\/crs\//i, '') // HTTP(s) URI
					.replace(/^urn:ogc:def:crs:/i, ''); // OGC URN
				return _.toLink(value, title);
			}
			return DataTypes.format(value);
		});
	},

	formatCrsCode(value) {
		if (typeof value === 'string') {
			const [authority, code] = value.split(':', 2);
			switch(authority.toUpperCase()) {
				case 'EPSG':
				case 'ESRI':
				case 'IAU_2015':
				case 'IGNF':
				case 'MKG':
				case 'OGC':
					return _.toLink(`https://spatialreference.org/ref/${authority.toLowerCase()}/${code}/`, value);
				default:
					return DataTypes.string(value);
			}
		}
		
		return DataTypes.null();
	},

	/**
	 * @deprecated Use formatCrsCode instead
	 */
	formatEPSG(value) {
		if (typeof value === 'number') {
			return Formatters.formatCrsCode(`EPSG:${value}`);
		}
		else if (typeof value === 'string') {
			return Formatters.formatCrsCode(value);
		}
		return DataTypes.null();
	},

	formatExtent(value, field, spec = {}) {
		if (!Array.isArray(value) || value.length < 2) {
			return DataTypes.null();
		}
		else if (value[0] === value[1]) {
			return DataTypes.format(value[0], spec.unit);
		}
		else if (value[0] === null) {
			return `< ${DataTypes.format(value[1], spec.unit)}`;
		}
		else if (value[1] === null) {
			return `> ${DataTypes.format(value[0], spec.unit)}`;
		}
		else {
			return value.map(v => DataTypes.format(v, spec.unit)).join(' – ');
		}
	},

	formatHexColor(value) {
		if (typeof value !== 'string' || !value.match(/^#?[\dA-F]{3,8}$/i)) {
			return DataTypes.null();
		}
		if (value.startsWith('#')) {
			value = value.substring(1);
		}
		return `<div class="color" style="background-color: #${value}"><code class="color-code">#${value}</code></div>`;
	},

	formatPROJJSON(value) {
		if (!_.isObject(value)) {
			return DataTypes.null();
		}
		if (_.isObject(value.id) && value.id.authority === 'EPSG' && typeof value.code === 'number' && value.code > 0) {
			return 'EPSG ' + Formatters.formatEPSG(value);
		}
		else if (typeof value.name === 'string') {
			return DataTypes.string(value.name);
		}
		else {
			return DataTypes.object(value);
		}
	},

	formatTemporalExtent(value, field, spec = {}) {	
		if (!Array.isArray(value) || value.length !== 2) {
			return DataTypes.null();
		}

		value = value.map(d => {
			try {
				return d ? new Date(d) : null;
			} catch(e) {
				return null;
			}
		});

		try {
			const [start, end] = value;
			if (start || end) {
				const base = spec.shorten ? I18N.dateFormatter : I18N.dateTimeFormatter;
				if (!start) {
					return _.t("Until {0}", [base.format(end)]);
				}
				else if (!end) {
					return _.t("{0} until present", [base.format(start)]);
				}
				else {
					return base.formatRange(start, end);
				}
			}
		} catch (error) {}

		return DataTypes.null();
	},

	formatTemporalExtents(value, field, spec = {}) {
		let sortExtents = (a,b) => {
			if (a[0] === null) {
				return -1;
			}
			else {
				return I18N.collator.compare(a[0], b[0]);
			}
		};
		return _.toList(value, sortExtents, v => Formatters.formatTemporalExtent(v, field, spec));
	},

	formatWKT2(value) {
		if (typeof value !== 'string') {
			return DataTypes.null();
		}
		
		// This is a VERY simplistic WKT2 formatter, which may fail to render properly in some cases.
		let indent = -1;
		let formatted;
		try {
			formatted = value.replace(/([A-Z]+)\[|\]/ig, (match, keyword) => {
				if (match === ']') {
					indent--;
					return match;
				}
				else {
					indent++;
					let tabs = "  ".repeat(indent);
					return `\n${tabs}${keyword}[`;
				}
			});
		} catch (e) {
			// In case the formatting did not work properly
			// (usually the number of [ and ] doesn't match)
			// just return the unformatted value
			formatted = value;
			
		}

		return `<pre>${formatted}</pre>`;
	},

	fileSizeUnits: ['B', 'kB', 'MB', 'GB', 'TB'],

	formatFileSize(value) {
		if (typeof value !== 'number') {
			return DataTypes.format(value);
		}
		var i = value == 0 ? 0 : Math.floor( Math.log(value) / Math.log(1024) );
		return _.unit(( value / Math.pow(1024, i) ).toFixed(2) * 1, Formatters.fileSizeUnits[i]);
	},

	formatChecksum(value) {
		if (typeof value !== 'string') {
			return DataTypes.null();
		}

		const multihash = Registry.getDependency('multihashes');
		if (!multihash) {
			return _.e(value);
		}

		try {
			const meta = multihash.decode(_.hexToUint8(value));
			const name = _.e(meta.name);
			const hex = _.e(_.uint8ToHex(meta.digest));
			return `<div class="checksum"><input class="checksum-input" size="32" value="${hex}" readonly><br><span class="checksum-algo">${_.t('Hashing algorithm:')} <strong>${name}</strong></span></div>`;
		} catch (error) {
			return DataTypes.null();
		}
	},

	fileDataTypes: {
		"int8": "8-bit integer",
		"int16": "16-bit integer",
		"int32": "32-bit integer",
		"int64": "64-bit integer",
		"uint8": "unsigned 8-bit integer",
		"uint16": "unsigned 16-bit integer",
		"uint32": "unsigned 32-bit integer",
		"uint64": "unsigned 64-bit integer",
		"float16": "16-bit float",
		"float32": "32-bit float",
		"float64": "64-bit float",
		"cint16": "16-bit complex integer",
		"cint32": "32-bit complex integer",
		"cfloat32": "32-bit complex float",
		"cfloat64": "64-bit complex float"
	},

	formatFileDataType(value) {
		if (value === "other") {
			return _.t("non-standard");
		}
		else if (typeof value === 'string' && value in Formatters.fileDataTypes) {
			return _.abbrev(_.t(value), _.t(Formatters.fileDataTypes[value]));
		}

		return DataTypes.null();
	},

	formatTransform(value) {
		if (Array.isArray(value) && value.length % 3 === 0) {
			let rows = [];
			for (let i = 0; i < value.length; i = i+3) {
				let chunk = value.slice(i, i + 3);
				rows.push(`[${Formatters.formatCSV(chunk)}]`);
			}
			return rows.join('<br>');
		}
		else {
			return Formatters.formatCSV(value);
		}
	},

	formatShape(value, field, spec = {}) {
		if (Array.isArray(value)) {
			return value.map(x => DataTypes.format(x, spec.unit)).join(' × ');
		}
		else {
			return DataTypes.format(value, spec.unit);
		}
	},

	formatCSV(value) {
		if (Array.isArray(value)) {
			let numeric = value.find(v => typeof v === 'number') !== undefined;
			// If there's potentially a comma in the values (decimal or thousand separators in numbers), use semicolon instead of comma.
			return value.map(DataTypes.format).join(numeric ? '; ' : ', ');
		}
		else {
			return DataTypes.format(value);
		}
	},

	formatImage(value, field) { // from url or link
		let title = "";
		let src = null;
		if (_.isObject(value)) {
			src = value.href;
			title = value.title || "";
		}
		else if (typeof value === 'string') {
			src = value;
		}
		else {
			return DataTypes.format(src);
		}

		return `<img src="${_.e(src)}" title="${_.e(title)}" class="${_.e(field.replace(':', '_'))}">`;
	},

	formatPhone(value) {
		return _.toLink(`tel:${value}`, value);
	},

	formatEmail(value) {
		return _.toLink(`mailto:${value}`, value);
	},

	formatConcepts(value) {
		return _.toList(value, false, concept => {
			if (!_.isObject(concept)) {
				return DataTypes.format(concept);
			}

			let html = "";
			if (concept.title) {
				let title = concept.title;
				if (concept.url) {
					title = _.toLink(concept.url, concept.title);
				}
				html += `<strong>${title}</strong> (<code>${_.e(concept.id)}</code>)`;
			}
			else {
				let title = concept.id;
				if (concept.url) {
					title = _.toLink(concept.url, concept.id);
				}
				html += `<strong><code>${title}</code></strong>`;
			}
			if (concept.description) {
				html += `<br><small>${_.e(concept.description)}</small>`;
			}
			return html;
		});
	},

	formatAddress(value) { // array or object
		return _.toList(value, false, address => {
			if (!_.isObject(address)) {
				return DataTypes.format(address);
			}

			let lines = Array.isArray(address.deliveryPoint) ? address.deliveryPoint.slice(0) : [];

			if (address.postalCode && address.city) {
				// Try to create a compact address
				let line = `${address.postalCode} ${address.city}`;
				if (address.administrativeArea) {
					line += ` (${address.administrativeArea})`;
				}
				if (typeof address.country === 'string' && address.country.length > 0) {
					if (address.country.length === 2 && address.country.toUpperCase() === address.country) { // is ISO code
						line = address.country + '-' + line;
						lines.push(line);
					}
					else {
						lines.push(line);
						lines.push(address.country.toUpperCase());
					}
				}
			}
			else {
				// Long version of the address
				if (address.city) {
					lines.push(address.city);
				}
				if (address.administrativeArea) {
					lines.push(address.administrativeArea);
				}
				if (address.postalCode) {
					lines.push(address.postalCode);
				}
				if (typeof address.country === 'string' && address.country.length > 0) {
					lines.push(address.country.toUpperCase());
				}
			}
			return DataTypes.string(lines.join("\n\n"));
		});
	},

	formatGridCode(value) {
		if (typeof value !== 'string') {
			return DataTypes.format(value);
		}

		let splitHalf = function(parts, value, labelA, labelB) {
			let len = value.length;
			if ((len % 2) === 1) {
				parts.push(`Code: ${value}`);
			}
			else {
				let mid = len/2;
				let a = value.substring(0, mid);
				parts.push(`${labelA}: ${a}`);
				let b = value.substring(mid, len);
				parts.push(`${labelB}: ${b}`);
			}
		};

		let [designator, code] = value.split(/-(.*)/);
		let parts = [];
		switch(designator) {
			case 'MGRS': 
				parts.push(_.abbrev(_.t(designator), _.t('Military Grid Reference System')));
				let [, utm, band, sq, coord] = code.match(/^(\d{2})([C-X])([A-Z]{2})(\d*)$/);
				parts.push(`${_.t("UTM Zone")}: ${utm}`);
				parts.push(`${_.t("Latitude Band")}: ${band}`);
				parts.push(`${_.t("Square Identifier")}: ${sq}`);
				if (coord) {
					splitHalf(parts, coord, _.t("Easting"), _.t("Northing"));
				}
				break;
			case 'MSIN':
				parts.push(_.t('MODIS Sinusoidal Tile Grid'));
				splitHalf(parts, code, _.t('Horizontal'), _.t('Vertical'));
				break;
			case 'WRS1':
			case 'WRS2':
				let version = designator.substring(3,4);
				parts.push(_.abbrev(_.t('WRS-' + version), _.t('Worldwide Reference System ' + version)));
				splitHalf(parts, code, _.t('Path'), _.t('Row'));
				break;
			case 'DOQ':
				parts.push(_abbrev(_.t(designator), _.t('Digital Orthophoto Quadrangle')));
				parts.push(`${_.t("Quadrangle")}: ${code}`);
				break;
			case 'DOQQ':
				parts.push(_abbrev(_.t(designator), _.t('Digital Orthophoto Quarter Quadrangle')));
				let quad = code.substr(0, code.length - 2);
				parts.push(`${_.t("Quadrangle")}: ${quad}`);
				let quarter = code.substr(-2);
				let a = quarter[0] === 'N' ? _.t('North') : _.t('South');
				let b = quarter[1] === 'E' ? _.t('East') : _.t('West');
				parts.push(`${_.t("Quarter")}: ${a} ${b}`);
				break;
			case 'MXRA':
				parts.push(_.t('Maxar ARD Tile Grid'));
				let [zone, quadkey] = code.split(/-(.*)/);
				if (zone.startsWith('Z')) {
					zone = zone.substring(1);
				}
				parts.push(`${_.t("UTM Zone")}: ${zone}`);
				parts.push(`${_.t("Quadkey")}: ${quadkey}`);
				break;
			case 'EASE':
				let [dggs, components] = code.split('-');
				if (dggs === 'DGGS') {
					parts.push(_.t('EASE-DGGS'));
					let [level, rowcol, ...fractions] = components.split('.');
					parts.push(`${_.t("Level")}: ${level}`);
					if (rowcol.length === 6) {
						parts.push(`${_.t("Level 0 row cell")}: ${rowcol.substring(0,3)}`);
						parts.push(`${_.t("Level 0 column cell")}: ${rowcol.substring(3,6)}`);
						for(let i in fractions) {
							let value = fractions[i];
							if (value.length === 2) {
								parts.push(`${_.t("Fraction of level {i} row cell", {i})}: ${value[0]}`);
								parts.push(`${_.t("Fraction of level {i} column cell", {i})}: ${value[1]}`);
							}
						}
					}
					break;
				}
			case 'CDEM':
				let [, n, e] = code.match(/^([A-Z]\d+)([A-Z]\d+)$/);
				parts.push(_.t("Copernicus Digital Elevation Model Grid"));
				parts.push(`${_.t("Easting")}: ${e}`);
				parts.push(`${_.t("Northing")}: ${n}`);
			default:
				parts.push(value);
		}

		return parts.join('<br>');
	}

};

module.exports = Formatters;

/***/ }),

/***/ 1002:
/***/ ((module) => {

"use strict";


/** @type {import('./functionApply')} */
module.exports = Function.prototype.apply;


/***/ }),

/***/ 1064:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $Object = __webpack_require__(9612);

/** @type {import('./Object.getPrototypeOf')} */
module.exports = $Object.getPrototypeOf || null;


/***/ }),

/***/ 1135:
/***/ ((module) => {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ 1203:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
    encode: __webpack_require__(1877)
  , decode: __webpack_require__(6797)
  , encodingLength: __webpack_require__(7867)
}


/***/ }),

/***/ 1237:
/***/ ((module) => {

"use strict";


/** @type {import('./eval')} */
module.exports = EvalError;


/***/ }),

/***/ 1333:
/***/ ((module) => {

"use strict";


/** @type {import('./shams')} */
/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	/** @type {{ [k in symbol]?: unknown }} */
	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (var _ in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		// eslint-disable-next-line no-extra-parens
		var descriptor = /** @type {PropertyDescriptor} */ (Object.getOwnPropertyDescriptor(obj, sym));
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ 1466:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/**
 * Implementation of the [multibase](https://github.com/multiformats/multibase) specification.
 *
 */


const constants = __webpack_require__(7579)
const { encodeText, decodeText, concat } = __webpack_require__(4084)

/** @typedef {import('./base')} Base */
/** @typedef {import("./types").BaseNameOrCode} BaseNameOrCode */
/** @typedef {import("./types").BaseCode} BaseCode */
/** @typedef {import("./types").BaseName} BaseName */

/**
 * Create a new Uint8Array with the multibase varint+code.
 *
 * @param {BaseNameOrCode} nameOrCode - The multibase name or code number.
 * @param {Uint8Array} buf - The data to be prefixed with multibase.
 * @returns {Uint8Array}
 * @throws {Error} Will throw if the encoding is not supported
 */
function multibase (nameOrCode, buf) {
  if (!buf) {
    throw new Error('requires an encoded Uint8Array')
  }
  const { name, codeBuf } = encoding(nameOrCode)
  validEncode(name, buf)

  return concat([codeBuf, buf], codeBuf.length + buf.length)
}

/**
 * Encode data with the specified base and add the multibase prefix.
 *
 * @param {BaseNameOrCode} nameOrCode - The multibase name or code number.
 * @param {Uint8Array} buf - The data to be encoded.
 * @returns {Uint8Array}
 * @throws {Error} Will throw if the encoding is not supported
 *
 */
function encode (nameOrCode, buf) {
  const enc = encoding(nameOrCode)
  const data = encodeText(enc.encode(buf))

  return concat([enc.codeBuf, data], enc.codeBuf.length + data.length)
}

/**
 * Takes a Uint8Array or string encoded with multibase header, decodes it and
 * returns the decoded buffer
 *
 * @param {Uint8Array|string} data
 * @returns {Uint8Array}
 * @throws {Error} Will throw if the encoding is not supported
 *
 */
function decode (data) {
  if (data instanceof Uint8Array) {
    data = decodeText(data)
  }
  const prefix = data[0]

  // Make all encodings case-insensitive except the ones that include upper and lower chars in the alphabet
  if (['f', 'F', 'v', 'V', 't', 'T', 'b', 'B', 'c', 'C', 'h', 'k', 'K'].includes(prefix)) {
    data = data.toLowerCase()
  }
  const enc = encoding(/** @type {BaseCode} */(data[0]))
  return enc.decode(data.substring(1))
}

/**
 * Is the given data multibase encoded?
 *
 * @param {Uint8Array|string} data
 * @returns {false | string}
 */
function isEncoded (data) {
  if (data instanceof Uint8Array) {
    data = decodeText(data)
  }

  // Ensure bufOrString is a string
  if (Object.prototype.toString.call(data) !== '[object String]') {
    return false
  }

  try {
    const enc = encoding(/** @type {BaseCode} */(data[0]))
    return enc.name
  } catch (err) {
    return false
  }
}

/**
 * Validate encoded data
 *
 * @param {BaseNameOrCode} name
 * @param {Uint8Array} buf
 * @returns {void}
 * @throws {Error} Will throw if the encoding is not supported
 */
function validEncode (name, buf) {
  const enc = encoding(name)
  enc.decode(decodeText(buf))
}

/**
 * Get the encoding by name or code
 *
 * @param {BaseNameOrCode} nameOrCode
 * @returns {Base}
 * @throws {Error} Will throw if the encoding is not supported
 */
function encoding (nameOrCode) {
  if (Object.prototype.hasOwnProperty.call(constants.names, /** @type {BaseName} */(nameOrCode))) {
    return constants.names[/** @type {BaseName} */(nameOrCode)]
  } else if (Object.prototype.hasOwnProperty.call(constants.codes, /** @type {BaseCode} */(nameOrCode))) {
    return constants.codes[/** @type {BaseCode} */(nameOrCode)]
  } else {
    throw new Error(`Unsupported encoding: ${nameOrCode}`)
  }
}

/**
 * Get encoding from data
 *
 * @param {string|Uint8Array} data
 * @returns {Base}
 * @throws {Error} Will throw if the encoding is not supported
 */
function encodingFromData (data) {
  if (data instanceof Uint8Array) {
    data = decodeText(data)
  }

  return encoding(/** @type {BaseCode} */(data[0]))
}

exports = module.exports = multibase
exports.encode = encode
exports.decode = decode
exports.isEncoded = isEncoded
exports.encoding = encoding
exports.encodingFromData = encodingFromData
exports.names = Object.freeze(constants.names)
exports.codes = Object.freeze(constants.codes)


/***/ }),

/***/ 1514:
/***/ ((module) => {

"use strict";


/** @type {import('./abs')} */
module.exports = Math.abs;


/***/ }),

/***/ 1877:
/***/ ((module) => {

module.exports = encode

var MSB = 0x80
  , REST = 0x7F
  , MSBALL = ~REST
  , INT = Math.pow(2, 31)

function encode(num, out, offset) {
  if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {
    encode.bytes = 0
    throw new RangeError('Could not encode varint')
  }
  out = out || []
  offset = offset || 0
  var oldOffset = offset

  while(num >= INT) {
    out[offset++] = (num & 0xFF) | MSB
    num /= 128
  }
  while(num & MSBALL) {
    out[offset++] = (num & 0xFF) | MSB
    num >>>= 7
  }
  out[offset] = num | 0
  
  encode.bytes = offset - oldOffset + 1
  
  return out
}


/***/ }),

/***/ 2165:
/***/ ((module) => {

"use strict";


/**
 * Returns a new Uint8Array created by concatenating the passed ArrayLikes
 *
 * @param {Array<ArrayLike<number>>} arrays
 * @param {number} [length]
 */
function concat (arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0)
  }

  const output = new Uint8Array(length)
  let offset = 0

  for (const arr of arrays) {
    output.set(arr, offset)
    offset += arr.length
  }

  return output
}

module.exports = concat


/***/ }),

/***/ 2205:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(6743);
var $apply = __webpack_require__(1002);
var actualApply = __webpack_require__(3144);

/** @type {import('./applyBind')} */
module.exports = function applyBind() {
	return actualApply(bind, $apply, arguments);
};


/***/ }),

/***/ 2220:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const bases = __webpack_require__(7980)

/**
 * @typedef {import('./util/bases').SupportedEncodings} SupportedEncodings
 */

/**
 * Turns a `Uint8Array` into a string.
 *
 * Supports `utf8`, `utf-8` and any encoding supported by the multibase module.
 *
 * Also `ascii` which is similar to node's 'binary' encoding.
 *
 * @param {Uint8Array} array - The array to turn into a string
 * @param {SupportedEncodings} [encoding=utf8] - The encoding to use
 * @returns {string}
 */
function toString (array, encoding = 'utf8') {
  const base = bases[encoding]

  if (!base) {
    throw new Error(`Unsupported encoding "${encoding}"`)
  }

  // strip multibase prefix
  return base.encoder.encode(array).substring(1)
}

module.exports = toString


/***/ }),

/***/ 2410:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"extensions":{"alternate":"Alternative Access Methods","anon":"Anonymized Location","auth":"Authentication","card4l":{"label":"CARD4L","explain":"CEOS Analysis Ready Data for Land"},"classification":"Classification","contacts":"Contacts","cube":"Data Cube","esa_cci_lc":"ESA Climate Change Initiative - Land Cover","eo":"Electro-Optical","forecast":"Forecast","file":"File","grid":"Gridded Data","goes":{"label":"NOAA GOES","explain":"NOAA Geostationary Operational Environmental Satellite"},"label":"Labels / ML","language":"Internationalization / Localization","mgrs":{"label":"MGRS","explain":"Military Grid Reference System"},"noaa_mrms_qpe":{"label":"NOAA MRMS QPE","explain":"NOAA Multi-Radar Multi-Sensor Quantitative Precipitation Estimation"},"odc":"Open Data Cube","order":"Order","pc":"Point Cloud","processing":"Processing","product":"Product","proj":"Projection","raster":"Raster Imagery","sar":{"label":"SAR","explain":"Synthetic Aperture Radar"},"sat":"Satellite","sci":"Scientific","ssys":"Solar System","stats":"STAC Statistics","storage":"Cloud Storage","table":"Tabular Data","themes":"Themes","tiles":"Tiled Assets","view":"View Geometry","web-map-links":"Web Maps","xarray":"xarray","gee":"Google Earth Engine","landsat":"Landsat","msft":"Microsoft","openeo":"openEO","pl":"Planet Labs PBC","s2":"Sentinel-2","sentinel":"Copernicus Sentinel","cbers":{"label":"CBERS","explain":"China-Brazil Earth Resources Satellite Program"},"geoadmin":{"label":"swisstopo","explain":"Federal Office of Topography (Switzerland)"}},"links":{"href":{"label":"URL","format":"Url"},"hreflang":{"label":"Language","format":"LanguageCode"},"rel":{"label":"Relation","explain":"Based on IANA relation types","mapping":{"self":"This document","root":"Root STAC Catalog","parent":"Parent STAC Catalog","collection":"STAC Collection","derived_from":"STAC Item for input data","about":"About this resource","alternate":"Alternative representation","via":"Source metadata","next":"Next page","prev":"Previous page","canonical":"Origin of this document","processing-expression":"Processing inctructions/code","latest-version":"Latest version","predecessor-version":"Predecessor version","successor-version":"Successor version","source":"Source data","cite-as":"Citation information","related":"Related resource","describedby":"Description of the resource","service-desc":"API definitions","service-doc":"API user documentation","conformance":"API conformance declaration","order":"Order details","3d-tiles":"3D Tiles","pmtiles":"PMTiles","tilejson":"TileJSON","wms":"OGC Web Map Service (WMS)","wmts":"OGC Web Map Tile Service (WMTS)","xyz":"XYZ Web Map"}},"type":{"label":"File Format","explain":"Based on the IANA media (MIME) types","format":"MediaType"},"method":"HTTP Method","headers":"HTTP Headers","body":"Request Body"},"assets":{"href":{"label":"URL","format":"Url"},"hreflang":{"label":"Language","format":"LanguageCode"},"type":{"label":"File Format","explain":"Based on the IANA media (MIME) types","format":"MediaType"},"roles":{"label":"Purpose","mapping":{"thumbnail":"Preview","overview":"Overview","visual":"Visualization","data":"Data","metadata":"Metadata","graphic":"Illustration"}},"alternate":{"label":"Alternatives","listWithKeys":true,"items":{"alternate:name":"Identifier","href":{"label":"URL","format":"Url"},"title":{"alias":"title"},"description":{"alias":"description"}},"summary":false,"ext":"alternate"},"pl:asset_type":"Asset Type","pl:bundle_type":"Bundle Type","table:storage_options":{"alias":"xarray:storage_options"},"xarray:open_kwargs":{"label":"Read Options","custom":true,"summary":false},"xarray:storage_options":{"label":"fsspec Options","custom":true,"summary":false}},"metadata":{"id":"Identifier","keywords":"Keywords","datetime":{"label":"Time of Data","format":"Timestamp","summary":false},"title":{"label":"Title","summary":false},"description":{"label":"Description","format":"CommonMark","summary":false},"roles":"Purpose","start_datetime":{"label":"Time of Data begins","format":"Timestamp","summary":false},"end_datetime":{"label":"Time of Data ends","format":"Timestamp","summary":false},"created":{"label":"Created","format":"Timestamp","summary":"r"},"updated":{"label":"Updated","format":"Timestamp","summary":"r"},"published":{"label":"Published","format":"Timestamp","summary":"r"},"expires":{"label":"Expires","format":"Timestamp","summary":"r"},"unpublished":{"label":"Unpublished","format":"Timestamp","summary":"r"},"license":{"label":"License","format":"License","summary":false},"providers":{"label":"Providers","format":"Providers","summary":false},"platform":"Platform","instruments":{"label":"Instruments","format":"CSV"},"constellation":"Constellation","mission":"Mission","gsd":{"label":"GSD","explain":"Ground Sample Distance","unit":"m"},"bands":{"label":"Bands","items":{"name":{"label":"Name","sortable":true,"id":true,"order":0},"description":{"alias":"description","order":2},"gsd":{"alias":"gsd","sortable":true},"nodata":{"alias":"nodata"},"data_type":{"alias":"data_type","sortable":true},"statistics":{"alias":"statistics"},"eo:common_name":{"alias":"eo:common_name","sortable":true,"order":1},"eo:center_wavelength":{"alias":"eo:center_wavelength","sortable":true},"eo:full_width_half_max":{"alias":"eo:full_width_half_max","sortable":true},"eo:solar_illumination":{"alias":"eo:solar_illumination","sortable":true},"raster:sampling":{"alias":"raster:sampling","sortable":true},"unit":{"alias":"unit","sortable":true},"raster:bits_per_sample":{"alias":"raster:bits_per_sample","sortable":true},"raster:spatial_resolution":{"alias":"raster:spatial_resolution","sortable":true},"raster:scale":{"alias":"raster:scale","sortable":true},"raster:offset":{"alias":"raster:offset","sortable":true},"raster:histogram":{"alias":"raster:histogram"},"classification:classes":{"alias":"classification:classes"},"classification:bitfields":{"alias":"classification:bitfields"}}},"nodata":{"label":"No-Data Values","format":"CSV","summary":false},"data_type":{"label":"Data Type of Values","format":"FileDataType"},"unit":"Unit of Values","statistics":{"label":"Statistics","properties":{"mean":"Average","maximum":{"label":"Max.","explain":"Maxmimum value"},"minimum":{"label":"Min.","explain":"Minimum value"},"stdev":{"label":"Std. Dev.","explain":"Standard Deviation"},"count":{"label":"Count","explain":"Total number of values"},"valid_percent":{"label":"Valid","explain":"Percentage of valid values","unit":"%"}}},"version":{"label":"Data Version","summary":false},"deprecated":{"label":"Deprecated","summary":false},"experimental":{"label":"Experimental","summary":false},"language":{"label":"Current Language","ext":"language","summary":"v","properties":{"name":{"label":"Name"},"alternate":{"label":"Alternate Name"},"code":{"label":"Code"},"dir":{"label":"Direction","explain":"Reading and writing direction","mapping":{"ltr":"left-to-right","rtl":"right-to-left"},"default":"ltr"}}},"languages":{"label":"Available Languages","ext":"language","summary":false,"items":{"name":{"label":"Name","sortable":true,"order":0},"alternate":{"label":"Alternate Name","sortable":true,"order":1},"code":{"label":"Code","sortable":true,"order":2},"dir":{"label":"Direction","explain":"Reading and writing direction","sortable":true,"order":3,"mapping":{"ltr":"left-to-right","rtl":"right-to-left"},"default":"ltr"}}},"contacts":{"label":"Contacts","ext":"contacts","summary":"v","items":{"name":{"label":"Name"},"identifier":{"label":"Identifier"},"position":{"label":"Position"},"organization":{"label":"Organization"},"logo":{"label":"Logo","format":"Image"},"phones":{"label":"Phone","items":{"value":{"label":"Number","format":"Phone","order":0},"roles":{"label":"Used For","order":1,"mapping":{"work":"Work","home":"Personal","fax":"Fax"}}}},"emails":{"label":"Email","items":{"value":{"label":"Address","format":"Email","order":0},"roles":{"label":"Used For","order":1,"mapping":{"work":"Work","home":"Personal"}}}},"addresses":{"label":"Postal Addresses","format":"Address","items":{"deliveryPoint":{"label":"Street / House","order":0},"city":{"label":"City","order":1},"administrativeArea":{"label":"State / Province","order":2},"postalCode":{"label":"Postal Code","order":3},"country":{"label":"Country","order":4}}},"links":{"label":"Additional Resources","format":"Link"},"contactInstructions":"Further Instructions","roles":{"label":"Types","format":"CSV"}}},"themes":{"label":"Themes","ext":"themes","summary":false,"items":{"scheme":{"label":"Vocabulary","order":0,"format":"Url"},"concepts":{"label":"Terms","order":1,"format":"Concepts","items":{"id":{"label":"Identifier","order":0},"title":{"label":"Title","order":1},"description":{"label":"Description","order":2},"url":{"label":"URL","order":3,"format":"Url"}}}}},"crs":{"label":"CRS","format":"CRS","explain":"Coordinate Reference System"},"anon:size":{"label":"Uncertainty","unit":"°","explain":"The size of one side of the anonymized bounding box"},"anon:warning":{"label":"Warning","summary":false},"classification:classes":{"summary":false,"label":"Classes","items":{"color_hint":{"label":"Color","order":0,"format":"HexColor"},"value":{"label":"Value","sortable":true,"order":1},"title":{"label":"Title","sortable":true,"order":2},"name":{"label":"Identifier","sortable":true,"order":3},"description":{"label":"Description","order":4,"format":"CommonMark"},"percentage":{"label":"Percentage of samples","sortable":true,"order":5,"unit":"%"},"count":{"label":"Number of samples","sortable":true,"order":6},"nodata":{"label":"No-data value","order":7,"default":false}}},"classification:bitfields":{"summary":false,"label":"Bit Mask","items":{"name":{"label":"Name","sortable":true,"order":0},"offset":{"label":"Offset","explain":"Offset to the first bit","order":1},"length":{"label":"Number of bits","order":2},"description":{"label":"Description","order":3,"format":"CommonMark"},"classes":{"alias":"classification:classes"},"roles":{"label":"Purpose"}}},"cube:dimensions":{"label":"Dimensions","summary":false,"listWithKeys":true,"items":{"type":{"label":"Type","order":0},"axis":{"label":"Axis","order":1},"description":{"label":"Description","format":"CommonMark","order":2},"extent":{"label":"Extent","format":"Extent","order":3},"bbox":{"alias":"proj:bbox","order":3},"values":{"label":"Values","order":4},"step":{"label":"Step","order":5},"unit":{"alias":"unit","order":5},"geometry_types":{"label":"Geometry Types","order":5},"reference_system":{"label":"Reference System","explain":"Coordinate / Temporal / Other Reference System","order":6}}},"cube:variables":{"label":"Variables","summary":false,"listWithKeys":true,"items":{"dimensions":{"label":"Dimensions","order":0},"type":{"label":"Type","order":1,"mapping":{"data":"Measured values","auxiliary":"Coordinate data"}},"description":{"label":"Description","format":"CommonMark","order":2},"extent":{"label":"Extent","format":"Extent","order":3},"values":{"label":"Values","order":4},"step":{"label":"Step","order":5},"unit":{"alias":"unit","order":6}}},"eo:bands":{"label":"Spectral Bands","items":{"name":{"label":"Name","sortable":true,"id":true,"order":0},"common_name":{"alias":"eo:common_name","sortable":true,"order":1},"center_wavelength":{"alias":"eo:center_wavelength","sortable":true,"order":2},"full_width_half_max":{"alias":"eo:full_width_half_max","sortable":true,"order":3},"solar_illumination":{"alias":"eo:solar_illumination","sortable":true,"order":7},"description":{"alias":"description"},"gsd":{"alias":"gsd","sortable":true},"cloud_cover":{"alias":"eo:cloud_cover","sortable":true}}},"eo:cloud_cover":{"label":"Cloud Cover","unit":"%"},"eo:snow_cover":{"label":"Snow/Ice Cover","unit":"%"},"eo:common_name":"Common Name","eo:center_wavelength":{"label":"Wavelength","explain":"The center wavelength of the band","unit":"μm"},"eo:full_width_half_max":{"label":"FWHM","explain":"Full Width Half Max","unit":"μm"},"eo:solar_illumination":{"label":"Solar Illumination","unit":"W/m²/μm"},"forecast:reference_datetime":{"label":"Reference Time","format":"Timestamp","summary":"r"},"forecast:horizon":{"label":"Forecast Horizon","explain":"The time between the reference time and the forecast time","format":"Duration"},"forecast:duration":{"label":"Forecast Length","format":"Duration"},"file:bits_per_sample":{"alias":"raster:bits_per_sample"},"file:byte_order":"Byte Order","file:checksum":{"label":"Checksum","format":"Checksum","summary":false},"file:data_type":{"alias":"data_type"},"file:header_size":{"label":"Header Size","format":"FileSize","summary":false},"file:nodata":{"alias":"nodata"},"file:size":{"label":"Size","format":"FileSize","summary":false},"file:unit":{"alias":"unit"},"file:values":{"label":"Map of Values","summary":false,"items":{"values":{"label":"Values","format":"CSV","order":1},"summary":{"label":"Summary","order":0}}},"file:local_path":{"label":"Local Path","summary":false},"nodata:values":{"alias":"nodata"},"goes:orbital_slot":"Orbital Slot","goes:system_environment":{"label":"System Environment","mapping":{"OR":"Operational system, real-time data","OT":"Operational system, test data","IR":"Test system, real-time data","IT":"Test system, test data","IP":"Test system, playback data","IS":"Test system, simulated data"}},"goes:image_type":{"label":"Area","mapping":{"FULL DISK":"The Americas (full disk)","CONUS":"North America (continental US)","MESOSCALE":"Central/South America (mesoscale)"}},"goes:mesoscale_image_number":{"label":"Area in Central/South America","mapping":{"1":"Region 1","2":"Region 2"}},"goes:mode":{"label":"Capture Mode","mapping":{"3":"3: 1x full disk, 3x continental US, 30x mesoscale region 1, 30x mesoscale region 2 (every 15 minutes)","4":"4: 1x full disk (every 5 minutes)","6":"6: 1x full disk, 2x continental US, 20x mesoscale region 1, 20x mesoscale region 2 (every 10 minutes)"}},"goes:group_time_threshold":{"label":"Time Threshold in a Group","explain":"Lightning group maximum time difference among lightning events in a group","unit":"s"},"goes:flash_time_threshold":{"label":"Time Threshold in a Flash","explain":"Lightning flash maximum time difference among lightning events in a flash","unit":"s"},"goes:lightning_wavelength":{"label":"Central Wavelength","unit":"nm"},"goes:yaw_flip_flag":{"label":"Yaw Flip Configuration","explain":"Flag indicating that the spacecraft is operating in yaw flip configuration.","mapping":{"0":"Upright","1":"Neither","2":"Inverted"}},"goes:event_count":"Lightning Events","goes:group_count":"Lightning Groups","goes:flash_count":"Lightning Flashes","goes:nominal_satellite_subpoint_lat":{"label":"Satellite Subpoint Latitude","unit":"°N"},"goes:nominal_satellite_subpoint_lon":{"label":"Satellite Subpoint Longitude","unit":"°E"},"goes:nominal_satellite_height":{"label":"Satellite Height","explain":"Nominal satellite height above GRS 80 ellipsoid","unit":"km"},"goes:percent_navigated_L1b_events":{"label":"Events navigated by Instrument","format":"Percent0to1","unit":"%"},"goes:percent_uncorrectable_L0_errors":{"label":"Data Lost","format":"Percent0to1","unit":"%"},"grid:code":{"label":"Grid","format":"GridCode"},"raster:bands":{"label":"Layers","items":{"nodata":{"alias":"nodata"},"sampling":{"alias":"raster:sampling","sortable":true},"data_type":{"alias":"data_type","sortable":true},"bits_per_sample":{"alias":"raster:bits_per_sample","sortable":true},"spatial_resolution":{"alias":"raster:spatial_resolution","sortable":true},"statistics":{"alias":"statistics"},"unit":{"alias":"unit","sortable":true},"scale":{"alias":"raster:scale","sortable":true},"offset":{"alias":"raster:offset","sortable":true},"histogram":{"alias":"raster:histogram"}}},"raster:sampling":{"label":"Sampling","mapping":{"area":"Area","point":"Point (at pixel center)"}},"raster:bits_per_sample":"Bits per Sample","raster:spatial_resolution":{"label":"Resolution","explain":"Average spatial resolution","unit":"m"},"raster:scale":"Scale","raster:offset":"Offset","raster:histogram":{"label":"Histogram","custom":true},"label:properties":{"label":"Properties","null":"raster data"},"label:classes":{"label":"Classes","items":{"name":{"label":"Name","null":"raster-formatted","sortable":true,"id":true},"classes":"Classes"}},"label:description":{"label":"Description","format":"CommonMark","summary":false},"label:type":"Type","label:tasks":"Tasks","label:methods":"Methods","label:overviews":{"label":"Overviews","summary":false,"items":{"property_key":{"label":"Property Key","id":true},"counts":{"label":"Counts","custom":true},"statistics":{"label":"Statistics","custom":true}}},"mgrs:latitude_band":"Latitude Band","mgrs:grid_square":"Grid Square","mgrs:utm_zone":"UTM Zone","noaa_mrms_qpe:pass":{"label":"Pass Number","mapping":{"1":"1 (less latency / less gauges)","2":"2 (more latency / more gauges)"}},"noaa_mrms_qpe:period":{"label":"Accumulation Period","unit":"h"},"noaa_mrms_qpe:region":{"label":"Region","mapping":{"CONUS":"Continental US","HAWAII":"Hawaii","GUAM":"Guam","ALASKA":"Alaska","CARIB":"Caribbean Islands"}},"openeo:status":"Processing Status","api_version":{"label":"API Version","ext":"openeo"},"backend_version":{"label":"Back-End Version","ext":"openeo"},"production":{"label":"Production-Ready","ext":"openeo"},"endpoints":{"label":"Supported Endpoints","ext":"openeo","summary":false,"items":{"path":{"label":"Path Template","order":0},"methods":{"label":"HTTP Methods","order":1,"format":"CSV"}}},"billing":{"label":"Billing","ext":"openeo","custom":true,"summary":false},"order:status":{"label":"Status","mapping":{"orderable":"Orderable (data can be ordered)","ordered":"Ordered (preparing to deliver data)","pending":"Pending (waiting for activation)","shipping":"Shipping (data is getting processed)","succeeded":"Delivered (data is available)","failed":"Failed (unable to deliver)","canceled":"Canceled (delivery stopped)"}},"order:id":"Identifier","order:date":{"label":"Submitted","format":"Timestamp","summary":"r"},"order:expiration_date":{"alias":"expires"},"pc:count":{"label":"Points","explain":"Number of Points"},"pc:type":"Type","pc:encoding":"Format","pc:schemas":{"label":"Schemas","summary":false,"items":{"name":{"label":"Name","sortable":true,"id":true},"size":{"label":"Size","unit":"bytes","sortable":true},"type":{"label":"Type","sortable":true}}},"pc:density":"Density","pc:statistics":{"label":"Statistics","summary":"s","items":{"name":{"label":"Name","id":true},"position":"Position","average":"Average","count":"Count","maximum":{"label":"Max.","explain":"Maxmimum value"},"minimum":{"label":"Min.","explain":"Minimum value"},"stddev":{"label":"Std. Dev.","explain":"Standard Deviation"},"variance":"Variance"}},"processing:expression":{"label":"Processing Instructions","summary":false},"processing:lineage":{"label":"Lineage","format":"CommonMark","summary":false},"processing:level":"Level","processing:facility":"Facility","processing:software":{"label":"Software","format":"Software","summary":false},"processing:version":"Processor Version","processing:datetime":{"label":"Processing Time","format":"Timestamp","summary":"r"},"product:type":"Product Type","product:timeliness":{"label":"Timeliness","format":"Duration"},"product:timeliness_category":"Timeliness Category","product:acquisition_type":{"label":"Acquisition Type","mapping":{"nominal":"Nominal","calibration":"Calibration","other":"Other"}},"proj:epsg":{"label":"EPSG Code","format":"EPSG","summary":"v"},"proj:code":{"label":"Code","format":"CrsCode","summary":"v"},"proj:wkt2":{"label":"WKT2","explain":"Well-Known Text, version 2","format":"WKT2","summary":false},"proj:projjson":{"label":"PROJJSON","explain":"JSON encoding of WKT2","format":"PROJJSON","summary":false},"proj:geometry":{"label":"Footprint","custom":true,"summary":false},"proj:bbox":{"label":"Bounding Box","custom":true,"summary":false},"proj:centroid":{"label":"Centroid","custom":true,"summary":false},"proj:shape":{"label":"Image Dimensions","format":"Shape","summary":false},"proj:transform":{"label":"Transformation Matrix","format":"Transform","summary":false},"sar:instrument_mode":"Instrument Mode","sar:frequency_band":"Frequency Band","sar:center_frequency":{"label":"Center Frequency","unit":"GHz"},"sar:polarizations":{"label":"Polarizations","format":"CSV"},"sar:product_type":"Product Type","sar:resolution_range":{"label":"Range Resolution","unit":"m"},"sar:resolution_azimuth":{"label":"Azimuth Resolution","unit":"m"},"sar:pixel_spacing_range":{"label":"Range Pixel Spacing","unit":"m"},"sar:pixel_spacing_azimuth":{"label":"Azimuth Pixel Spacing","unit":"m"},"sar:looks_range":"Range Looks","sar:looks_azimuth":"Azimuth Looks","sar:looks_equivalent_number":{"label":"ENL","explain":"Equivalent Number of Looks"},"sar:observation_direction":"Observation Direction","sat:platform_international_designator":{"label":"Int. Designator","explain":"International designator for the platform, also known as COSPAR ID and NSSDCA ID."},"sat:orbit_state":"Orbit State","sat:absolute_orbit":{"label":"Abs. Orbit Number","explain":"Absolute Orbit Number"},"sat:relative_orbit":{"label":"Rel. Orbit Number","explain":"Relative Orbit Number"},"sat:anx_datetime":{"label":"ANX Time","format":"Timestamp","explain":"Ascending Node Crossing time","summary":"r"},"sci:doi":{"label":"DOI","format":"DOI"},"sci:citation":"Citation","sci:publications":{"label":"Publications","summary":false,"items":{"citation":{"label":"Publication","sortable":true,"order":0},"doi":{"label":"DOI","format":"DOI","sortable":true,"order":1}}},"ssys:targets":"Target Body","auth:refs":"Methods","auth:schemes":{"label":"Methods","listWithKeys":true,"items":{"type":{"label":"Method","order":0,"mapping":{"http":"HTTP","s3":"S3","signedUrl":"Signed URL","oauth2":"OAuth2","openIdConnect":"OpenID Connect","apiKey":"API Token"}},"description":{"alias":"description","order":1},"in":{"label":"Provide token as","mapping":{"query":"Query parameter","header":"HTTP header","cookie":"Cookie"},"order":1},"name":{"label":"Parameter","order":2},"scheme":"HTTP Scheme","flows":"Flows","openIdConnectUrl":"OpenID Connect metadata"}},"storage:refs":"Providers","storage:schemes":{"label":"Providers","listWithKeys":true,"items":{"title":{"label":"Title","order":0},"description":{"title":"Description","format":"CommonMark","order":1},"type":{"label":"Type","order":2,"mapping":{"s3":"S3 (Amazon Web Services)","custom-s3":"S3 (self-hosted)","ms-azure":"Microsoft Azure"}},"platform":{"label":"Host","order":3},"region":{"label":"Region","order":4},"requester_pays":{"label":"Payment","mapping":{"true":"Requester Pays","false":"Provider Pays"},"order":5}}},"table:columns":{"label":"Columns","items":{"name":{"label":"Name","sortable":true,"id":true,"order":0},"type":{"label":"Data Type","sortable":true,"order":1},"description":{"label":"Description","format":"CommonMark","order":2}}},"table:primary_geometry":"Primary Geometry Column","table:row_count":"Rows","table:tables":{"label":"Tables","summary":false,"listWithKeys":true,"items":{"name":{"label":"Name","sortable":true,"id":true,"order":0},"description":{"label":"Description","format":"CommonMark","order":1}}},"tiles:tile_matrix_sets":{"label":"Tile Matrix Sets","custom":true,"summary":false},"tiles:tile_matrix_set_links":{"label":"Tile Matrix Set Links","custom":true,"summary":false},"view:off_nadir":{"label":"Off-Nadir Angle","unit":"°"},"view:incidence_angle":{"label":"Incidence Angle","unit":"°"},"view:azimuth":{"label":"Viewing Azimuth","unit":"°"},"view:sun_azimuth":{"label":"Sun Azimuth","unit":"°"},"view:sun_elevation":{"label":"Sun Elevation","unit":"°"},"pl:black_fill":{"label":"Unfilled Image Parts","unit":"%"},"pl:clear_percent":{"label":"Clear Sky","unit":"%"},"pl:grid_cell":"Grid Cell","pl:ground_control":"Positional Accuracy","pl:ground_control_ratio":"Successful Rectification Ratio","pl:item_type":"Type","pl:pixel_resolution":{"label":"Spatial Resolution","unit":"m"},"pl:publishing_stage":{"label":"Publishing Stage","mapping":{"preview":"Preview","standard":"Standard","finalized":"Finalized"}},"pl:quality_category":{"label":"Quality Category","mapping":{"standard":"Standard","test":"Test"}},"pl:strip_id":"Image Strip ID","gee:type":{"label":"Type","mapping":{"image":"Single image","image_collection":"Image collection","table":"Table"}},"gee:cadence":"Cadence","gee:schema":{"label":"Variables","items":{"name":"Name","description":"Description","type":"Data Type"},"summary":false},"gee:revisit_interval":"Revisit Interval","gee:terms_of_use":{"label":"Terms of Use","format":"CommonMark","summary":false},"gee:visualizations":{"label":"Visualizations","custom":true,"summary":false},"landsat:scene_id":"Scene ID","landsat:collection_category":"Collection Category","landsat:collection_number":"Collection Number","landsat:wrs_type":{"label":"WRS Type","explain":"Worldwide Reference System Type"},"landsat:wrs_path":{"label":"WRS Path","explain":"Worldwide Reference System Path"},"landsat:wrs_row":{"label":"WRS Row","explain":"Worldwide Reference System Row"},"landsat:cloud_cover_land":{"label":"Land Cloud Cover","unit":"%"},"msft:container":"Container","msft:storage_account":"Storage Account","msft:short_description":{"label":"Summary","summary":false},"sentinel:utm_zone":"UTM Zone","sentinel:latitude_band":"Latitude Band","sentinel:grid_square":"Grid Square","sentinel:sequence":"Sequence","sentinel:product_id":{"label":"Product ID","summary":"s"},"sentinel:data_coverage":{"label":"Data Coverage","unit":"%"},"sentinel:valid_cloud_cover":"Valid Cloud Cover","cbers:data_type":{"label":"Processing Level","explain":"Geolocation precision level","mapping":{"L2":"Geolocation using only satellite telemetry","L3":"Control points used to geolocate image, no terrain correction","L4":"Control points used to geolocate image, orthorectified"},"summary":"v"},"cbers:path":"Reference Grid Path","cbers:row":"Reference Grid Row","card4l:specification":{"label":"Specification","mapping":{"SR":"Surface Reflectance (Optical)","ST":"Surface Temperature (Optical)","NRB":"Normalized Radar Backscatter (SAR)","POL":"Polarimetric Radar (SAR)"}},"card4l:specification_version":"Specification Version","card4l:orbit_mean_altitude":{"label":"Platform Altitude","unit":"m"},"card4l:incidence_angle_near_range":{"label":"Incidence Angle (near)","unit":"°"},"card4l:incidence_angle_far_range":{"label":"Incidence Angle (far)","unit":"°"},"card4l:noise_equivalent_intensity":{"label":"Noise Equivalent Intensity","unit":"dB"},"card4l:mean_faraday_rotation_angle":{"label":"Mean Faraday Rotation","unit":"°"},"card4l:speckle_filtering":{"label":"Speckle Filtering","custom":true,"summary":false,"null":"not applied"},"card4l:relative_rtc_accuracy":{"label":"Rel. RTC Accuracy","explain":"Relative accuracy of the Radiometric Terrain Correction","unit":"dB"},"card4l:absolute_rtc_accuracy":{"label":"Abs. RTC Accuracy","explain":"Absolute accuracy of the Radiometric Terrain Correction","unit":"dB"},"card4l:northern_geometric_accuracy":{"label":"Northern Geometric Accuracy","unit":"m"},"card4l:eastern_geometric_accuracy":{"label":"Eastern Geometric Accuracy","unit":"m"},"card4l:ellipsoidal_height":{"label":"Ellipsoidal Height","unit":"m"},"geoadmin:variant":{"label":"Product Variant","mapping":{"krel":"RGB color with relief","komb":"RGB color without relief","kgrel":"Grayscale with relief","kgrs":"Grayscale without relief"}},"href:servers":{"label":"Servers","ext":"web-map-links"},"pmtiles:layers":{"label":"Layers","ext":"web-map-links"},"wms:layers":{"label":"Layers","ext":"web-map-links"},"wms:styles":{"label":"Styles","ext":"web-map-links"},"wms:dimensions":{"label":"Dimensions","ext":"web-map-links"},"wms:transparent":{"label":"Transparency","ext":"web-map-links"},"wmts:layer":{"label":"Layers","ext":"web-map-links"},"wmts:dimensions":{"label":"Dimensions","ext":"web-map-links"}}}');

/***/ }),

/***/ 2682:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isCallable = __webpack_require__(9600);

var toStr = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

/** @type {<This, A extends readonly unknown[]>(arr: A, iterator: (this: This | void, value: A[number], index: number, arr: A) => void, receiver: This | undefined) => void} */
var forEachArray = function forEachArray(array, iterator, receiver) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            if (receiver == null) {
                iterator(array[i], i, array);
            } else {
                iterator.call(receiver, array[i], i, array);
            }
        }
    }
};

/** @type {<This, S extends string>(string: S, iterator: (this: This | void, value: S[number], index: number, string: S) => void, receiver: This | undefined) => void} */
var forEachString = function forEachString(string, iterator, receiver) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        if (receiver == null) {
            iterator(string.charAt(i), i, string);
        } else {
            iterator.call(receiver, string.charAt(i), i, string);
        }
    }
};

/** @type {<This, O>(obj: O, iterator: (this: This | void, value: O[keyof O], index: keyof O, obj: O) => void, receiver: This | undefined) => void} */
var forEachObject = function forEachObject(object, iterator, receiver) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            if (receiver == null) {
                iterator(object[k], k, object);
            } else {
                iterator.call(receiver, object[k], k, object);
            }
        }
    }
};

/** @type {(x: unknown) => x is readonly unknown[]} */
function isArray(x) {
    return toStr.call(x) === '[object Array]';
}

/** @type {import('.')._internal} */
module.exports = function forEach(list, iterator, thisArg) {
    if (!isCallable(iterator)) {
        throw new TypeError('iterator must be a function');
    }

    var receiver;
    if (arguments.length >= 3) {
        receiver = thisArg;
    }

    if (isArray(list)) {
        forEachArray(list, iterator, receiver);
    } else if (typeof list === 'string') {
        forEachString(list, iterator, receiver);
    } else {
        forEachObject(list, iterator, receiver);
    }
};


/***/ }),

/***/ 3093:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $isNaN = __webpack_require__(4459);

/** @type {import('./sign')} */
module.exports = function sign(number) {
	if ($isNaN(number) || number === 0) {
		return number;
	}
	return number < 0 ? -1 : +1;
};


/***/ }),

/***/ 3126:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(6743);
var $TypeError = __webpack_require__(9675);

var $call = __webpack_require__(76);
var $actualApply = __webpack_require__(3144);

/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */
module.exports = function callBindBasic(args) {
	if (args.length < 1 || typeof args[0] !== 'function') {
		throw new $TypeError('a function is required');
	}
	return $actualApply(bind, $call, args);
};


/***/ }),

/***/ 3144:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(6743);

var $apply = __webpack_require__(1002);
var $call = __webpack_require__(76);
var $reflectApply = __webpack_require__(7119);

/** @type {import('./actualApply')} */
module.exports = $reflectApply || bind.call($call, $apply);


/***/ }),

/***/ 3628:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reflectGetProto = __webpack_require__(8648);
var originalGetProto = __webpack_require__(1064);

var getDunderProto = __webpack_require__(7176);

/** @type {import('.')} */
module.exports = reflectGetProto
	? function getProto(O) {
		// @ts-expect-error TS can't narrow inside a closure, for some reason
		return reflectGetProto(O);
	}
	: originalGetProto
		? function getProto(O) {
			if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
				throw new TypeError('getProto: not an object');
			}
			// @ts-expect-error TS can't narrow inside a closure, for some reason
			return originalGetProto(O);
		}
		: getDunderProto
			? function getProto(O) {
				// @ts-expect-error TS can't narrow inside a closure, for some reason
				return getDunderProto(O);
			}
			: null;


/***/ }),

/***/ 3702:
/***/ ((module) => {

"use strict";
/* eslint quote-props: off */


/**
 * Names for all available hashes
 *
 * @typedef { "identity" | "sha1" | "sha2-256" | "sha2-512" | "sha3-512" | "sha3-384" | "sha3-256" | "sha3-224" | "shake-128" | "shake-256" | "keccak-224" | "keccak-256" | "keccak-384" | "keccak-512" | "blake3" | "murmur3-128" | "murmur3-32" | "dbl-sha2-256" | "md4" | "md5" | "bmt" | "sha2-256-trunc254-padded" | "ripemd-128" | "ripemd-160" | "ripemd-256" | "ripemd-320" | "x11" | "kangarootwelve" | "sm3-256" | "blake2b-8" | "blake2b-16" | "blake2b-24" | "blake2b-32" | "blake2b-40" | "blake2b-48" | "blake2b-56" | "blake2b-64" | "blake2b-72" | "blake2b-80" | "blake2b-88" | "blake2b-96" | "blake2b-104" | "blake2b-112" | "blake2b-120" | "blake2b-128" | "blake2b-136" | "blake2b-144" | "blake2b-152" | "blake2b-160" | "blake2b-168" | "blake2b-176" | "blake2b-184" | "blake2b-192" | "blake2b-200" | "blake2b-208" | "blake2b-216" | "blake2b-224" | "blake2b-232" | "blake2b-240" | "blake2b-248" | "blake2b-256" | "blake2b-264" | "blake2b-272" | "blake2b-280" | "blake2b-288" | "blake2b-296" | "blake2b-304" | "blake2b-312" | "blake2b-320" | "blake2b-328" | "blake2b-336" | "blake2b-344" | "blake2b-352" | "blake2b-360" | "blake2b-368" | "blake2b-376" | "blake2b-384" | "blake2b-392" | "blake2b-400" | "blake2b-408" | "blake2b-416" | "blake2b-424" | "blake2b-432" | "blake2b-440" | "blake2b-448" | "blake2b-456" | "blake2b-464" | "blake2b-472" | "blake2b-480" | "blake2b-488" | "blake2b-496" | "blake2b-504" | "blake2b-512" | "blake2s-8" | "blake2s-16" | "blake2s-24" | "blake2s-32" | "blake2s-40" | "blake2s-48" | "blake2s-56" | "blake2s-64" | "blake2s-72" | "blake2s-80" | "blake2s-88" | "blake2s-96" | "blake2s-104" | "blake2s-112" | "blake2s-120" | "blake2s-128" | "blake2s-136" | "blake2s-144" | "blake2s-152" | "blake2s-160" | "blake2s-168" | "blake2s-176" | "blake2s-184" | "blake2s-192" | "blake2s-200" | "blake2s-208" | "blake2s-216" | "blake2s-224" | "blake2s-232" | "blake2s-240" | "blake2s-248" | "blake2s-256" | "skein256-8" | "skein256-16" | "skein256-24" | "skein256-32" | "skein256-40" | "skein256-48" | "skein256-56" | "skein256-64" | "skein256-72" | "skein256-80" | "skein256-88" | "skein256-96" | "skein256-104" | "skein256-112" | "skein256-120" | "skein256-128" | "skein256-136" | "skein256-144" | "skein256-152" | "skein256-160" | "skein256-168" | "skein256-176" | "skein256-184" | "skein256-192" | "skein256-200" | "skein256-208" | "skein256-216" | "skein256-224" | "skein256-232" | "skein256-240" | "skein256-248" | "skein256-256" | "skein512-8" | "skein512-16" | "skein512-24" | "skein512-32" | "skein512-40" | "skein512-48" | "skein512-56" | "skein512-64" | "skein512-72" | "skein512-80" | "skein512-88" | "skein512-96" | "skein512-104" | "skein512-112" | "skein512-120" | "skein512-128" | "skein512-136" | "skein512-144" | "skein512-152" | "skein512-160" | "skein512-168" | "skein512-176" | "skein512-184" | "skein512-192" | "skein512-200" | "skein512-208" | "skein512-216" | "skein512-224" | "skein512-232" | "skein512-240" | "skein512-248" | "skein512-256" | "skein512-264" | "skein512-272" | "skein512-280" | "skein512-288" | "skein512-296" | "skein512-304" | "skein512-312" | "skein512-320" | "skein512-328" | "skein512-336" | "skein512-344" | "skein512-352" | "skein512-360" | "skein512-368" | "skein512-376" | "skein512-384" | "skein512-392" | "skein512-400" | "skein512-408" | "skein512-416" | "skein512-424" | "skein512-432" | "skein512-440" | "skein512-448" | "skein512-456" | "skein512-464" | "skein512-472" | "skein512-480" | "skein512-488" | "skein512-496" | "skein512-504" | "skein512-512" | "skein1024-8" | "skein1024-16" | "skein1024-24" | "skein1024-32" | "skein1024-40" | "skein1024-48" | "skein1024-56" | "skein1024-64" | "skein1024-72" | "skein1024-80" | "skein1024-88" | "skein1024-96" | "skein1024-104" | "skein1024-112" | "skein1024-120" | "skein1024-128" | "skein1024-136" | "skein1024-144" | "skein1024-152" | "skein1024-160" | "skein1024-168" | "skein1024-176" | "skein1024-184" | "skein1024-192" | "skein1024-200" | "skein1024-208" | "skein1024-216" | "skein1024-224" | "skein1024-232" | "skein1024-240" | "skein1024-248" | "skein1024-256" | "skein1024-264" | "skein1024-272" | "skein1024-280" | "skein1024-288" | "skein1024-296" | "skein1024-304" | "skein1024-312" | "skein1024-320" | "skein1024-328" | "skein1024-336" | "skein1024-344" | "skein1024-352" | "skein1024-360" | "skein1024-368" | "skein1024-376" | "skein1024-384" | "skein1024-392" | "skein1024-400" | "skein1024-408" | "skein1024-416" | "skein1024-424" | "skein1024-432" | "skein1024-440" | "skein1024-448" | "skein1024-456" | "skein1024-464" | "skein1024-472" | "skein1024-480" | "skein1024-488" | "skein1024-496" | "skein1024-504" | "skein1024-512" | "skein1024-520" | "skein1024-528" | "skein1024-536" | "skein1024-544" | "skein1024-552" | "skein1024-560" | "skein1024-568" | "skein1024-576" | "skein1024-584" | "skein1024-592" | "skein1024-600" | "skein1024-608" | "skein1024-616" | "skein1024-624" | "skein1024-632" | "skein1024-640" | "skein1024-648" | "skein1024-656" | "skein1024-664" | "skein1024-672" | "skein1024-680" | "skein1024-688" | "skein1024-696" | "skein1024-704" | "skein1024-712" | "skein1024-720" | "skein1024-728" | "skein1024-736" | "skein1024-744" | "skein1024-752" | "skein1024-760" | "skein1024-768" | "skein1024-776" | "skein1024-784" | "skein1024-792" | "skein1024-800" | "skein1024-808" | "skein1024-816" | "skein1024-824" | "skein1024-832" | "skein1024-840" | "skein1024-848" | "skein1024-856" | "skein1024-864" | "skein1024-872" | "skein1024-880" | "skein1024-888" | "skein1024-896" | "skein1024-904" | "skein1024-912" | "skein1024-920" | "skein1024-928" | "skein1024-936" | "skein1024-944" | "skein1024-952" | "skein1024-960" | "skein1024-968" | "skein1024-976" | "skein1024-984" | "skein1024-992" | "skein1024-1000" | "skein1024-1008" | "skein1024-1016" | "skein1024-1024" | "poseidon-bls12_381-a2-fc1" | "poseidon-bls12_381-a2-fc1-sc" } HashName
 */
/**
 * Codes for all available hashes
 *
 * @typedef { 0x00 | 0x11 | 0x12 | 0x13 | 0x14 | 0x15 | 0x16 | 0x17 | 0x18 | 0x19 | 0x1a | 0x1b | 0x1c | 0x1d | 0x1e | 0x22 | 0x23 | 0x56 | 0xd4 | 0xd5 | 0xd6 | 0x1012 | 0x1052 | 0x1053 | 0x1054 | 0x1055 | 0x1100 | 0x1d01 | 0x534d | 0xb201 | 0xb202 | 0xb203 | 0xb204 | 0xb205 | 0xb206 | 0xb207 | 0xb208 | 0xb209 | 0xb20a | 0xb20b | 0xb20c | 0xb20d | 0xb20e | 0xb20f | 0xb210 | 0xb211 | 0xb212 | 0xb213 | 0xb214 | 0xb215 | 0xb216 | 0xb217 | 0xb218 | 0xb219 | 0xb21a | 0xb21b | 0xb21c | 0xb21d | 0xb21e | 0xb21f | 0xb220 | 0xb221 | 0xb222 | 0xb223 | 0xb224 | 0xb225 | 0xb226 | 0xb227 | 0xb228 | 0xb229 | 0xb22a | 0xb22b | 0xb22c | 0xb22d | 0xb22e | 0xb22f | 0xb230 | 0xb231 | 0xb232 | 0xb233 | 0xb234 | 0xb235 | 0xb236 | 0xb237 | 0xb238 | 0xb239 | 0xb23a | 0xb23b | 0xb23c | 0xb23d | 0xb23e | 0xb23f | 0xb240 | 0xb241 | 0xb242 | 0xb243 | 0xb244 | 0xb245 | 0xb246 | 0xb247 | 0xb248 | 0xb249 | 0xb24a | 0xb24b | 0xb24c | 0xb24d | 0xb24e | 0xb24f | 0xb250 | 0xb251 | 0xb252 | 0xb253 | 0xb254 | 0xb255 | 0xb256 | 0xb257 | 0xb258 | 0xb259 | 0xb25a | 0xb25b | 0xb25c | 0xb25d | 0xb25e | 0xb25f | 0xb260 | 0xb301 | 0xb302 | 0xb303 | 0xb304 | 0xb305 | 0xb306 | 0xb307 | 0xb308 | 0xb309 | 0xb30a | 0xb30b | 0xb30c | 0xb30d | 0xb30e | 0xb30f | 0xb310 | 0xb311 | 0xb312 | 0xb313 | 0xb314 | 0xb315 | 0xb316 | 0xb317 | 0xb318 | 0xb319 | 0xb31a | 0xb31b | 0xb31c | 0xb31d | 0xb31e | 0xb31f | 0xb320 | 0xb321 | 0xb322 | 0xb323 | 0xb324 | 0xb325 | 0xb326 | 0xb327 | 0xb328 | 0xb329 | 0xb32a | 0xb32b | 0xb32c | 0xb32d | 0xb32e | 0xb32f | 0xb330 | 0xb331 | 0xb332 | 0xb333 | 0xb334 | 0xb335 | 0xb336 | 0xb337 | 0xb338 | 0xb339 | 0xb33a | 0xb33b | 0xb33c | 0xb33d | 0xb33e | 0xb33f | 0xb340 | 0xb341 | 0xb342 | 0xb343 | 0xb344 | 0xb345 | 0xb346 | 0xb347 | 0xb348 | 0xb349 | 0xb34a | 0xb34b | 0xb34c | 0xb34d | 0xb34e | 0xb34f | 0xb350 | 0xb351 | 0xb352 | 0xb353 | 0xb354 | 0xb355 | 0xb356 | 0xb357 | 0xb358 | 0xb359 | 0xb35a | 0xb35b | 0xb35c | 0xb35d | 0xb35e | 0xb35f | 0xb360 | 0xb361 | 0xb362 | 0xb363 | 0xb364 | 0xb365 | 0xb366 | 0xb367 | 0xb368 | 0xb369 | 0xb36a | 0xb36b | 0xb36c | 0xb36d | 0xb36e | 0xb36f | 0xb370 | 0xb371 | 0xb372 | 0xb373 | 0xb374 | 0xb375 | 0xb376 | 0xb377 | 0xb378 | 0xb379 | 0xb37a | 0xb37b | 0xb37c | 0xb37d | 0xb37e | 0xb37f | 0xb380 | 0xb381 | 0xb382 | 0xb383 | 0xb384 | 0xb385 | 0xb386 | 0xb387 | 0xb388 | 0xb389 | 0xb38a | 0xb38b | 0xb38c | 0xb38d | 0xb38e | 0xb38f | 0xb390 | 0xb391 | 0xb392 | 0xb393 | 0xb394 | 0xb395 | 0xb396 | 0xb397 | 0xb398 | 0xb399 | 0xb39a | 0xb39b | 0xb39c | 0xb39d | 0xb39e | 0xb39f | 0xb3a0 | 0xb3a1 | 0xb3a2 | 0xb3a3 | 0xb3a4 | 0xb3a5 | 0xb3a6 | 0xb3a7 | 0xb3a8 | 0xb3a9 | 0xb3aa | 0xb3ab | 0xb3ac | 0xb3ad | 0xb3ae | 0xb3af | 0xb3b0 | 0xb3b1 | 0xb3b2 | 0xb3b3 | 0xb3b4 | 0xb3b5 | 0xb3b6 | 0xb3b7 | 0xb3b8 | 0xb3b9 | 0xb3ba | 0xb3bb | 0xb3bc | 0xb3bd | 0xb3be | 0xb3bf | 0xb3c0 | 0xb3c1 | 0xb3c2 | 0xb3c3 | 0xb3c4 | 0xb3c5 | 0xb3c6 | 0xb3c7 | 0xb3c8 | 0xb3c9 | 0xb3ca | 0xb3cb | 0xb3cc | 0xb3cd | 0xb3ce | 0xb3cf | 0xb3d0 | 0xb3d1 | 0xb3d2 | 0xb3d3 | 0xb3d4 | 0xb3d5 | 0xb3d6 | 0xb3d7 | 0xb3d8 | 0xb3d9 | 0xb3da | 0xb3db | 0xb3dc | 0xb3dd | 0xb3de | 0xb3df | 0xb3e0 | 0xb401 | 0xb402 } HashCode
 */

/**
 * @type { Record<HashName,HashCode> }
 */
const names = Object.freeze({
  'identity': 0x00,
  'sha1': 0x11,
  'sha2-256': 0x12,
  'sha2-512': 0x13,
  'sha3-512': 0x14,
  'sha3-384': 0x15,
  'sha3-256': 0x16,
  'sha3-224': 0x17,
  'shake-128': 0x18,
  'shake-256': 0x19,
  'keccak-224': 0x1a,
  'keccak-256': 0x1b,
  'keccak-384': 0x1c,
  'keccak-512': 0x1d,
  'blake3': 0x1e,
  'murmur3-128': 0x22,
  'murmur3-32': 0x23,
  'dbl-sha2-256': 0x56,
  'md4': 0xd4,
  'md5': 0xd5,
  'bmt': 0xd6,
  'sha2-256-trunc254-padded': 0x1012,
  'ripemd-128': 0x1052,
  'ripemd-160': 0x1053,
  'ripemd-256': 0x1054,
  'ripemd-320': 0x1055,
  'x11': 0x1100,
  'kangarootwelve': 0x1d01,
  'sm3-256': 0x534d,
  'blake2b-8': 0xb201,
  'blake2b-16': 0xb202,
  'blake2b-24': 0xb203,
  'blake2b-32': 0xb204,
  'blake2b-40': 0xb205,
  'blake2b-48': 0xb206,
  'blake2b-56': 0xb207,
  'blake2b-64': 0xb208,
  'blake2b-72': 0xb209,
  'blake2b-80': 0xb20a,
  'blake2b-88': 0xb20b,
  'blake2b-96': 0xb20c,
  'blake2b-104': 0xb20d,
  'blake2b-112': 0xb20e,
  'blake2b-120': 0xb20f,
  'blake2b-128': 0xb210,
  'blake2b-136': 0xb211,
  'blake2b-144': 0xb212,
  'blake2b-152': 0xb213,
  'blake2b-160': 0xb214,
  'blake2b-168': 0xb215,
  'blake2b-176': 0xb216,
  'blake2b-184': 0xb217,
  'blake2b-192': 0xb218,
  'blake2b-200': 0xb219,
  'blake2b-208': 0xb21a,
  'blake2b-216': 0xb21b,
  'blake2b-224': 0xb21c,
  'blake2b-232': 0xb21d,
  'blake2b-240': 0xb21e,
  'blake2b-248': 0xb21f,
  'blake2b-256': 0xb220,
  'blake2b-264': 0xb221,
  'blake2b-272': 0xb222,
  'blake2b-280': 0xb223,
  'blake2b-288': 0xb224,
  'blake2b-296': 0xb225,
  'blake2b-304': 0xb226,
  'blake2b-312': 0xb227,
  'blake2b-320': 0xb228,
  'blake2b-328': 0xb229,
  'blake2b-336': 0xb22a,
  'blake2b-344': 0xb22b,
  'blake2b-352': 0xb22c,
  'blake2b-360': 0xb22d,
  'blake2b-368': 0xb22e,
  'blake2b-376': 0xb22f,
  'blake2b-384': 0xb230,
  'blake2b-392': 0xb231,
  'blake2b-400': 0xb232,
  'blake2b-408': 0xb233,
  'blake2b-416': 0xb234,
  'blake2b-424': 0xb235,
  'blake2b-432': 0xb236,
  'blake2b-440': 0xb237,
  'blake2b-448': 0xb238,
  'blake2b-456': 0xb239,
  'blake2b-464': 0xb23a,
  'blake2b-472': 0xb23b,
  'blake2b-480': 0xb23c,
  'blake2b-488': 0xb23d,
  'blake2b-496': 0xb23e,
  'blake2b-504': 0xb23f,
  'blake2b-512': 0xb240,
  'blake2s-8': 0xb241,
  'blake2s-16': 0xb242,
  'blake2s-24': 0xb243,
  'blake2s-32': 0xb244,
  'blake2s-40': 0xb245,
  'blake2s-48': 0xb246,
  'blake2s-56': 0xb247,
  'blake2s-64': 0xb248,
  'blake2s-72': 0xb249,
  'blake2s-80': 0xb24a,
  'blake2s-88': 0xb24b,
  'blake2s-96': 0xb24c,
  'blake2s-104': 0xb24d,
  'blake2s-112': 0xb24e,
  'blake2s-120': 0xb24f,
  'blake2s-128': 0xb250,
  'blake2s-136': 0xb251,
  'blake2s-144': 0xb252,
  'blake2s-152': 0xb253,
  'blake2s-160': 0xb254,
  'blake2s-168': 0xb255,
  'blake2s-176': 0xb256,
  'blake2s-184': 0xb257,
  'blake2s-192': 0xb258,
  'blake2s-200': 0xb259,
  'blake2s-208': 0xb25a,
  'blake2s-216': 0xb25b,
  'blake2s-224': 0xb25c,
  'blake2s-232': 0xb25d,
  'blake2s-240': 0xb25e,
  'blake2s-248': 0xb25f,
  'blake2s-256': 0xb260,
  'skein256-8': 0xb301,
  'skein256-16': 0xb302,
  'skein256-24': 0xb303,
  'skein256-32': 0xb304,
  'skein256-40': 0xb305,
  'skein256-48': 0xb306,
  'skein256-56': 0xb307,
  'skein256-64': 0xb308,
  'skein256-72': 0xb309,
  'skein256-80': 0xb30a,
  'skein256-88': 0xb30b,
  'skein256-96': 0xb30c,
  'skein256-104': 0xb30d,
  'skein256-112': 0xb30e,
  'skein256-120': 0xb30f,
  'skein256-128': 0xb310,
  'skein256-136': 0xb311,
  'skein256-144': 0xb312,
  'skein256-152': 0xb313,
  'skein256-160': 0xb314,
  'skein256-168': 0xb315,
  'skein256-176': 0xb316,
  'skein256-184': 0xb317,
  'skein256-192': 0xb318,
  'skein256-200': 0xb319,
  'skein256-208': 0xb31a,
  'skein256-216': 0xb31b,
  'skein256-224': 0xb31c,
  'skein256-232': 0xb31d,
  'skein256-240': 0xb31e,
  'skein256-248': 0xb31f,
  'skein256-256': 0xb320,
  'skein512-8': 0xb321,
  'skein512-16': 0xb322,
  'skein512-24': 0xb323,
  'skein512-32': 0xb324,
  'skein512-40': 0xb325,
  'skein512-48': 0xb326,
  'skein512-56': 0xb327,
  'skein512-64': 0xb328,
  'skein512-72': 0xb329,
  'skein512-80': 0xb32a,
  'skein512-88': 0xb32b,
  'skein512-96': 0xb32c,
  'skein512-104': 0xb32d,
  'skein512-112': 0xb32e,
  'skein512-120': 0xb32f,
  'skein512-128': 0xb330,
  'skein512-136': 0xb331,
  'skein512-144': 0xb332,
  'skein512-152': 0xb333,
  'skein512-160': 0xb334,
  'skein512-168': 0xb335,
  'skein512-176': 0xb336,
  'skein512-184': 0xb337,
  'skein512-192': 0xb338,
  'skein512-200': 0xb339,
  'skein512-208': 0xb33a,
  'skein512-216': 0xb33b,
  'skein512-224': 0xb33c,
  'skein512-232': 0xb33d,
  'skein512-240': 0xb33e,
  'skein512-248': 0xb33f,
  'skein512-256': 0xb340,
  'skein512-264': 0xb341,
  'skein512-272': 0xb342,
  'skein512-280': 0xb343,
  'skein512-288': 0xb344,
  'skein512-296': 0xb345,
  'skein512-304': 0xb346,
  'skein512-312': 0xb347,
  'skein512-320': 0xb348,
  'skein512-328': 0xb349,
  'skein512-336': 0xb34a,
  'skein512-344': 0xb34b,
  'skein512-352': 0xb34c,
  'skein512-360': 0xb34d,
  'skein512-368': 0xb34e,
  'skein512-376': 0xb34f,
  'skein512-384': 0xb350,
  'skein512-392': 0xb351,
  'skein512-400': 0xb352,
  'skein512-408': 0xb353,
  'skein512-416': 0xb354,
  'skein512-424': 0xb355,
  'skein512-432': 0xb356,
  'skein512-440': 0xb357,
  'skein512-448': 0xb358,
  'skein512-456': 0xb359,
  'skein512-464': 0xb35a,
  'skein512-472': 0xb35b,
  'skein512-480': 0xb35c,
  'skein512-488': 0xb35d,
  'skein512-496': 0xb35e,
  'skein512-504': 0xb35f,
  'skein512-512': 0xb360,
  'skein1024-8': 0xb361,
  'skein1024-16': 0xb362,
  'skein1024-24': 0xb363,
  'skein1024-32': 0xb364,
  'skein1024-40': 0xb365,
  'skein1024-48': 0xb366,
  'skein1024-56': 0xb367,
  'skein1024-64': 0xb368,
  'skein1024-72': 0xb369,
  'skein1024-80': 0xb36a,
  'skein1024-88': 0xb36b,
  'skein1024-96': 0xb36c,
  'skein1024-104': 0xb36d,
  'skein1024-112': 0xb36e,
  'skein1024-120': 0xb36f,
  'skein1024-128': 0xb370,
  'skein1024-136': 0xb371,
  'skein1024-144': 0xb372,
  'skein1024-152': 0xb373,
  'skein1024-160': 0xb374,
  'skein1024-168': 0xb375,
  'skein1024-176': 0xb376,
  'skein1024-184': 0xb377,
  'skein1024-192': 0xb378,
  'skein1024-200': 0xb379,
  'skein1024-208': 0xb37a,
  'skein1024-216': 0xb37b,
  'skein1024-224': 0xb37c,
  'skein1024-232': 0xb37d,
  'skein1024-240': 0xb37e,
  'skein1024-248': 0xb37f,
  'skein1024-256': 0xb380,
  'skein1024-264': 0xb381,
  'skein1024-272': 0xb382,
  'skein1024-280': 0xb383,
  'skein1024-288': 0xb384,
  'skein1024-296': 0xb385,
  'skein1024-304': 0xb386,
  'skein1024-312': 0xb387,
  'skein1024-320': 0xb388,
  'skein1024-328': 0xb389,
  'skein1024-336': 0xb38a,
  'skein1024-344': 0xb38b,
  'skein1024-352': 0xb38c,
  'skein1024-360': 0xb38d,
  'skein1024-368': 0xb38e,
  'skein1024-376': 0xb38f,
  'skein1024-384': 0xb390,
  'skein1024-392': 0xb391,
  'skein1024-400': 0xb392,
  'skein1024-408': 0xb393,
  'skein1024-416': 0xb394,
  'skein1024-424': 0xb395,
  'skein1024-432': 0xb396,
  'skein1024-440': 0xb397,
  'skein1024-448': 0xb398,
  'skein1024-456': 0xb399,
  'skein1024-464': 0xb39a,
  'skein1024-472': 0xb39b,
  'skein1024-480': 0xb39c,
  'skein1024-488': 0xb39d,
  'skein1024-496': 0xb39e,
  'skein1024-504': 0xb39f,
  'skein1024-512': 0xb3a0,
  'skein1024-520': 0xb3a1,
  'skein1024-528': 0xb3a2,
  'skein1024-536': 0xb3a3,
  'skein1024-544': 0xb3a4,
  'skein1024-552': 0xb3a5,
  'skein1024-560': 0xb3a6,
  'skein1024-568': 0xb3a7,
  'skein1024-576': 0xb3a8,
  'skein1024-584': 0xb3a9,
  'skein1024-592': 0xb3aa,
  'skein1024-600': 0xb3ab,
  'skein1024-608': 0xb3ac,
  'skein1024-616': 0xb3ad,
  'skein1024-624': 0xb3ae,
  'skein1024-632': 0xb3af,
  'skein1024-640': 0xb3b0,
  'skein1024-648': 0xb3b1,
  'skein1024-656': 0xb3b2,
  'skein1024-664': 0xb3b3,
  'skein1024-672': 0xb3b4,
  'skein1024-680': 0xb3b5,
  'skein1024-688': 0xb3b6,
  'skein1024-696': 0xb3b7,
  'skein1024-704': 0xb3b8,
  'skein1024-712': 0xb3b9,
  'skein1024-720': 0xb3ba,
  'skein1024-728': 0xb3bb,
  'skein1024-736': 0xb3bc,
  'skein1024-744': 0xb3bd,
  'skein1024-752': 0xb3be,
  'skein1024-760': 0xb3bf,
  'skein1024-768': 0xb3c0,
  'skein1024-776': 0xb3c1,
  'skein1024-784': 0xb3c2,
  'skein1024-792': 0xb3c3,
  'skein1024-800': 0xb3c4,
  'skein1024-808': 0xb3c5,
  'skein1024-816': 0xb3c6,
  'skein1024-824': 0xb3c7,
  'skein1024-832': 0xb3c8,
  'skein1024-840': 0xb3c9,
  'skein1024-848': 0xb3ca,
  'skein1024-856': 0xb3cb,
  'skein1024-864': 0xb3cc,
  'skein1024-872': 0xb3cd,
  'skein1024-880': 0xb3ce,
  'skein1024-888': 0xb3cf,
  'skein1024-896': 0xb3d0,
  'skein1024-904': 0xb3d1,
  'skein1024-912': 0xb3d2,
  'skein1024-920': 0xb3d3,
  'skein1024-928': 0xb3d4,
  'skein1024-936': 0xb3d5,
  'skein1024-944': 0xb3d6,
  'skein1024-952': 0xb3d7,
  'skein1024-960': 0xb3d8,
  'skein1024-968': 0xb3d9,
  'skein1024-976': 0xb3da,
  'skein1024-984': 0xb3db,
  'skein1024-992': 0xb3dc,
  'skein1024-1000': 0xb3dd,
  'skein1024-1008': 0xb3de,
  'skein1024-1016': 0xb3df,
  'skein1024-1024': 0xb3e0,
  'poseidon-bls12_381-a2-fc1': 0xb401,
  'poseidon-bls12_381-a2-fc1-sc': 0xb402
})

module.exports = { names }


/***/ }),

/***/ 4035:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var callBound = __webpack_require__(6556);
var hasToStringTag = __webpack_require__(9092)();
var hasOwn = __webpack_require__(9957);
var gOPD = __webpack_require__(5795);

/** @type {import('.')} */
var fn;

if (hasToStringTag) {
	/** @type {(receiver: ThisParameterType<typeof RegExp.prototype.exec>, ...args: Parameters<typeof RegExp.prototype.exec>) => ReturnType<typeof RegExp.prototype.exec>} */
	var $exec = callBound('RegExp.prototype.exec');
	/** @type {object} */
	var isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	/** @type {{ toString(): never, valueOf(): never, [Symbol.toPrimitive]?(): never }} */
	var badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}

	/** @type {import('.')} */
	// @ts-expect-error TS can't figure out that the $exec call always throws
	// eslint-disable-next-line consistent-return
	fn = function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		// eslint-disable-next-line no-extra-parens
		var descriptor = /** @type {NonNullable<typeof gOPD>} */ (gOPD)(/** @type {{ lastIndex?: unknown }} */ (value), 'lastIndex');
		var hasLastIndexDataProperty = descriptor && hasOwn(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			// eslint-disable-next-line no-extra-parens
			$exec(value, /** @type {string} */ (/** @type {unknown} */ (badStringifier)));
		} catch (e) {
			return e === isRegexMarker;
		}
	};
} else {
	/** @type {(receiver: ThisParameterType<typeof Object.prototype.toString>, ...args: Parameters<typeof Object.prototype.toString>) => ReturnType<typeof Object.prototype.toString>} */
	var $toString = callBound('Object.prototype.toString');
	/** @const @type {'[object RegExp]'} */
	var regexClass = '[object RegExp]';

	/** @type {import('.')} */
	fn = function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return $toString(value) === regexClass;
	};
}

module.exports = fn;


/***/ }),

/***/ 4039:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(1333);

/** @type {import('.')} */
module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ 4084:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// @ts-ignore
const { TextEncoder, TextDecoder } = __webpack_require__(7019)

const textDecoder = new TextDecoder()
/**
 * @param {ArrayBufferView|ArrayBuffer} bytes
 * @returns {string}
 */
const decodeText = (bytes) => textDecoder.decode(bytes)

const textEncoder = new TextEncoder()
/**
 * @param {string} text
 * @returns {Uint8Array}
 */
const encodeText = (text) => textEncoder.encode(text)

/**
 * Returns a new Uint8Array created by concatenating the passed Arrays
 *
 * @param {Array<ArrayLike<number>>} arrs
 * @param {number} length
 * @returns {Uint8Array}
 */
function concat (arrs, length) {
  const output = new Uint8Array(length)
  let offset = 0

  for (const arr of arrs) {
    output.set(arr, offset)
    offset += arr.length
  }

  return output
}

module.exports = { decodeText, encodeText, concat }


/***/ }),

/***/ 4243:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Multihash implementation in JavaScript.
 *
 * @module multihash
 */


const multibase = __webpack_require__(1466)
const varint = __webpack_require__(1203)
const { names } = __webpack_require__(3702)
const uint8ArrayToString = __webpack_require__(2220)
const uint8ArrayFromString = __webpack_require__(5483)
const uint8ArrayConcat = __webpack_require__(2165)

const codes = /** @type {import('./types').CodeNameMap} */({})

// eslint-disable-next-line guard-for-in
for (const key in names) {
  const name = /** @type {HashName} */(key)
  codes[names[name]] = name
}

/**
 * Convert the given multihash to a hex encoded string.
 *
 * @param {Uint8Array} hash
 * @returns {string}
 */
function toHexString (hash) {
  if (!(hash instanceof Uint8Array)) {
    throw new Error('must be passed a Uint8Array')
  }

  return uint8ArrayToString(hash, 'base16')
}

/**
 * Convert the given hex encoded string to a multihash.
 *
 * @param {string} hash
 * @returns {Uint8Array}
 */
function fromHexString (hash) {
  return uint8ArrayFromString(hash, 'base16')
}

/**
 * Convert the given multihash to a base58 encoded string.
 *
 * @param {Uint8Array} hash
 * @returns {string}
 */
function toB58String (hash) {
  if (!(hash instanceof Uint8Array)) {
    throw new Error('must be passed a Uint8Array')
  }

  return uint8ArrayToString(multibase.encode('base58btc', hash)).slice(1)
}

/**
 * Convert the given base58 encoded string to a multihash.
 *
 * @param {string|Uint8Array} hash
 * @returns {Uint8Array}
 */
function fromB58String (hash) {
  const encoded = hash instanceof Uint8Array
    ? uint8ArrayToString(hash)
    : hash

  return multibase.decode('z' + encoded)
}

/**
 * Decode a hash from the given multihash.
 *
 * @param {Uint8Array} bytes
 * @returns {{code: HashCode, name: HashName, length: number, digest: Uint8Array}} result
 */
function decode (bytes) {
  if (!(bytes instanceof Uint8Array)) {
    throw new Error('multihash must be a Uint8Array')
  }

  if (bytes.length < 2) {
    throw new Error('multihash too short. must be > 2 bytes.')
  }

  const code = /** @type {HashCode} */(varint.decode(bytes))
  if (!isValidCode(code)) {
    throw new Error(`multihash unknown function code: 0x${code.toString(16)}`)
  }
  bytes = bytes.slice(varint.decode.bytes)

  const len = varint.decode(bytes)
  if (len < 0) {
    throw new Error(`multihash invalid length: ${len}`)
  }
  bytes = bytes.slice(varint.decode.bytes)

  if (bytes.length !== len) {
    throw new Error(`multihash length inconsistent: 0x${uint8ArrayToString(bytes, 'base16')}`)
  }

  return {
    code,
    name: codes[code],
    length: len,
    digest: bytes
  }
}

/**
 * Encode a hash digest along with the specified function code.
 *
 * > **Note:** the length is derived from the length of the digest itself.
 *
 * @param {Uint8Array} digest
 * @param {HashName | HashCode} code
 * @param {number} [length]
 * @returns {Uint8Array}
 */
function encode (digest, code, length) {
  if (!digest || code === undefined) {
    throw new Error('multihash encode requires at least two args: digest, code')
  }

  // ensure it's a hashfunction code.
  const hashfn = coerceCode(code)

  if (!(digest instanceof Uint8Array)) {
    throw new Error('digest should be a Uint8Array')
  }

  if (length == null) {
    length = digest.length
  }

  if (length && digest.length !== length) {
    throw new Error('digest length should be equal to specified length.')
  }

  const hash = varint.encode(hashfn)
  const len = varint.encode(length)
  return uint8ArrayConcat([hash, len, digest], hash.length + len.length + digest.length)
}

/**
 * Converts a hash function name into the matching code.
 * If passed a number it will return the number if it's a valid code.
 *
 * @param {HashName | number} name
 * @returns {number}
 */
function coerceCode (name) {
  let code = name

  if (typeof name === 'string') {
    if (names[name] === undefined) {
      throw new Error(`Unrecognized hash function named: ${name}`)
    }
    code = names[name]
  }

  if (typeof code !== 'number') {
    throw new Error(`Hash function code should be a number. Got: ${code}`)
  }

  // @ts-ignore
  if (codes[code] === undefined && !isAppCode(code)) {
    throw new Error(`Unrecognized function code: ${code}`)
  }

  return code
}

/**
 * Checks if a code is part of the app range
 *
 * @param {number} code
 * @returns {boolean}
 */
function isAppCode (code) {
  return code > 0 && code < 0x10
}

/**
 * Checks whether a multihash code is valid.
 *
 * @param {HashCode} code
 * @returns {boolean}
 */
function isValidCode (code) {
  if (isAppCode(code)) {
    return true
  }

  if (codes[code]) {
    return true
  }

  return false
}

/**
 * Check if the given buffer is a valid multihash. Throws an error if it is not valid.
 *
 * @param {Uint8Array} multihash
 * @returns {void}
 * @throws {Error}
 */
function validate (multihash) {
  decode(multihash) // throws if bad.
}

/**
 * Returns a prefix from a valid multihash. Throws an error if it is not valid.
 *
 * @param {Uint8Array} multihash
 * @returns {Uint8Array}
 * @throws {Error}
 */
function prefix (multihash) {
  validate(multihash)

  return multihash.subarray(0, 2)
}

module.exports = {
  names,
  codes: Object.freeze(codes),
  toHexString,
  fromHexString,
  toB58String,
  fromB58String,
  decode,
  encode,
  coerceCode,
  isAppCode,
  validate,
  prefix,
  isValidCode
}

/**
 * @typedef { import("./constants").HashCode } HashCode
 * @typedef { import("./constants").HashName } HashName
 */


/***/ }),

/***/ 4459:
/***/ ((module) => {

"use strict";


/** @type {import('./isNaN')} */
module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),

/***/ 4540:
/***/ ((module) => {

const Defaults = {
	collatorOptions: {},
	numberFormatterOptions: {
		maximumFractionDigits: 10
	},
	dateFormatterOptions: {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric'
	},
	dateTimeFormatterOptions: {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		timeZone: "UTC",
		timeZoneName: "short"
	}
};

const I18N = {

	locales: [],
	collator: new Intl.Collator([], Defaults.collatorOptions),
	dateFormatter: new Intl.DateTimeFormat([], Defaults.dateFormatterOptions),
	dateTimeFormatter: new Intl.DateTimeFormat([], Defaults.dateTimeFormatterOptions),
	numberFormatter: new Intl.NumberFormat([], Defaults.numberFormatterOptions),
	translate: null, // function(value: string, vars: array|object = null) : string

	getDefaults() {
		return Defaults;
	},

	setLocales(locales, dateFormatterOptions = {}, dateTimeFormatterOptions = {}, numberFormatterOptions = {}, collatorOptions = {}) {
		this.locales = locales;

		collatorOptions = Object.assign({}, Defaults.collatorOptions, collatorOptions);
		this.collator = new Intl.Collator(locales, collatorOptions);

		dateFormatterOptions = Object.assign({}, Defaults.dateFormatterOptions, dateFormatterOptions);
		this.dateFormatter = new Intl.DateTimeFormat(locales, dateFormatterOptions);

		dateTimeFormatterOptions = Object.assign({}, Defaults.dateTimeFormatterOptions, dateTimeFormatterOptions);
		this.dateTimeFormatter = new Intl.DateTimeFormat(locales, dateTimeFormatterOptions);

		numberFormatterOptions = Object.assign({}, Defaults.numberFormatterOptions, numberFormatterOptions);
		this.numberFormatter = new Intl.NumberFormat(locales, numberFormatterOptions);
	},

	setTranslator(fn) {
		this.translate = fn;
	},

	format(value, vars = null) {
		if (vars) {
			for(let key in vars) {
				value = value.replaceAll(`{${key}}`, vars[key]);
			}
		}
		return value;
	}

};

module.exports = I18N;

/***/ }),

/***/ 4870:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Registry = __webpack_require__(9087);

Registry.importFields(__webpack_require__(2410));
Registry.addDependency('@musement/iso-duration', __webpack_require__(9710));
Registry.addDependency('content-type', __webpack_require__(8597));
Registry.addDependency('commonmark', __webpack_require__(8066));
Registry.addDependency('multihashes', __webpack_require__(4243));

module.exports = {
	...__webpack_require__(697),
	Fields: Registry.exportFields(),
	Registry,
	Helper: __webpack_require__(5288),
	DataTypes: __webpack_require__(8995),
	Formatters: __webpack_require__(735),
	I18N: __webpack_require__(4540)
};

/***/ }),

/***/ 5084:
/***/ ((module) => {

"use strict";

// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
function base (ALPHABET) {
  if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }
  var BASE_MAP = new Uint8Array(256)
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i)
    var xc = x.charCodeAt(0)
    if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }
    BASE_MAP[xc] = i
  }
  var BASE = ALPHABET.length
  var LEADER = ALPHABET.charAt(0)
  var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
  var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
  function encode (source) {
    if (source instanceof Uint8Array) {
    } else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength)
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source)
    }
    if (!(source instanceof Uint8Array)) { throw new TypeError('Expected Uint8Array') }
    if (source.length === 0) { return '' }
        // Skip & count leading zeroes.
    var zeroes = 0
    var length = 0
    var pbegin = 0
    var pend = source.length
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++
      zeroes++
    }
        // Allocate enough space in big-endian base58 representation.
    var size = ((pend - pbegin) * iFACTOR + 1) >>> 0
    var b58 = new Uint8Array(size)
        // Process the bytes.
    while (pbegin !== pend) {
      var carry = source[pbegin]
            // Apply "b58 = b58 * 256 + ch".
      var i = 0
      for (var it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {
        carry += (256 * b58[it1]) >>> 0
        b58[it1] = (carry % BASE) >>> 0
        carry = (carry / BASE) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      pbegin++
    }
        // Skip leading zeroes in base58 result.
    var it2 = size - length
    while (it2 !== size && b58[it2] === 0) {
      it2++
    }
        // Translate the result into a string.
    var str = LEADER.repeat(zeroes)
    for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]) }
    return str
  }
  function decodeUnsafe (source) {
    if (typeof source !== 'string') { throw new TypeError('Expected String') }
    if (source.length === 0) { return new Uint8Array() }
    var psz = 0
        // Skip leading spaces.
    if (source[psz] === ' ') { return }
        // Skip and count leading '1's.
    var zeroes = 0
    var length = 0
    while (source[psz] === LEADER) {
      zeroes++
      psz++
    }
        // Allocate enough space in big-endian base256 representation.
    var size = (((source.length - psz) * FACTOR) + 1) >>> 0 // log(58) / log(256), rounded up.
    var b256 = new Uint8Array(size)
        // Process the characters.
    while (source[psz]) {
            // Decode character
      var carry = BASE_MAP[source.charCodeAt(psz)]
            // Invalid character
      if (carry === 255) { return }
      var i = 0
      for (var it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {
        carry += (BASE * b256[it3]) >>> 0
        b256[it3] = (carry % 256) >>> 0
        carry = (carry / 256) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      psz++
    }
        // Skip trailing spaces.
    if (source[psz] === ' ') { return }
        // Skip leading zeroes in b256.
    var it4 = size - length
    while (it4 !== size && b256[it4] === 0) {
      it4++
    }
    var vch = new Uint8Array(zeroes + (size - it4))
    var j = zeroes
    while (it4 !== size) {
      vch[j++] = b256[it4++]
    }
    return vch
  }
  function decode (string) {
    var buffer = decodeUnsafe(string)
    if (buffer) { return buffer }
    throw new Error('Non-base' + BASE + ' character')
  }
  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  }
}
module.exports = base


/***/ }),

/***/ 5288:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const I18N = __webpack_require__(4540);

const _ = {

	e(str) {
		if (typeof str !== 'string') {
			str = String(str);
		}
		return str.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, '&apos;');
	},

	t(value, vars = null) {
		if (typeof I18N.translate === 'function') {
			return I18N.translate(value, vars);
		}
		else {
			return I18N.format(value, vars);
		}
	},
	
	toNothing(label = null) {
		if (label === null) {
			label = _.t('n/a');
		}
		return `<i class="null">${label}</i>`;
	},

	toList(list, sort = false, formatter = null, ordered = null) {
		let tag = ordered === true ? 'ol' : 'ul';
		if (!Array.isArray(list)) {
			list = [list];
		}
		if (sort) {
			list = list.slice(0);
			if (typeof sort === 'function') {
				list.sort(sort);
			}
			else {
				list.sort();
			}
			if (ordered === null) {
				tag = 'ol';
			}
		}
		if (typeof formatter === 'function') {
			list = list.map(formatter);
		}
		if (list.length === 0) {
			return _.toNothing();
		}
		else if (list.length === 1) {
			return list[0];
		}
		else {
			return `<${tag}><li>${list.join("</li><li>")}</li></${tag}>`;
		}
	},

	toLink(url, title = "", rel = "", target = "_blank") {
		if (!title) {
			if (url.length > 50) {
				title = url.replace(/^\w+:\/\/([^\/]+)((\/[^\/\?]+)*\/([^\/\?]+)(\?.*)?)?$/i, function(...x) {
					if (x[4]) {
						return x[1] + '​/[…]/​' + x[4]; // There are invisible zero-width whitespaces after and before the slashes. It allows breaking the link in the browser. Be careful when editing.
					}
					return x[1];
				});
			}
			else {
				title = url.replace(/^\w+:\/\//i, '');
			}
		}
		return `<a href="${_.e(url)}" rel="${_.e(rel)}" target="${_.e(target)}">${_.e(title)}</a>`;
	},

	toObject(obj, formatter = null, keyFormatter = null, keyOrder = [], filter = null, path = []) {
		let html = '<dl>';
		let keys = Array.isArray(keyOrder) && keyOrder.length >= 2 ? keyOrder : Object.keys(obj);
		for(let key of keys) {
			if (!(key in obj) || (typeof filter === 'function' && path.length > 0 && !filter(path[0], path.concat([key]))) ) {
				continue;
			}
			let label;
			if (typeof keyFormatter === 'function') {
				label = keyFormatter(key, obj);
			}
			else {
				label = _.formatKey(key, true);
			}
			let value = obj[key];
			if (typeof formatter === 'function') {
				value = formatter(value, key, obj);
			}
			html += `<dt>${label}</dt><dd>${value}</dd>`;
		}
		html += `</dl>`;
		return html;
	},

	abbrev(short, long) {
		return `<abbr title="${_.e(long)}">${_.e(short)}</abbr>`;
	},

	isObject(obj) {
		return (typeof obj === 'object' && obj === Object(obj) && !Array.isArray(obj));
	},

	formatKey(key, prefix = false) {
		if (key.includes('/')) {
			// Slashes are strong indicators for URIs or media types, don't format
			return _.e(_.t(key));
		}
		if (prefix === false) {
			key = key.replace(/^[\w-]+:/i, '');
		}
		let formatted = key.split(/[:_\-\s]/g).map(part => part.substr(0, 1).toUpperCase() + part.substr(1)).join(' ');
		return _.e(_.t(formatted));
	},

	hexToUint8(hexString) {
		if(hexString.length === 0 || hexString.length % 2 !== 0){
			throw new Error(`The string "${hexString}" is not valid hex.`);
		}
		return new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
	},

	uint8ToHex(bytes) {
		return bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
	},

	keysFromListOfObjects(objectList) {
		return objectList.reduce(
			(arr, o) => Object.keys(o).reduce(
				(a, k) => {
					if (a.indexOf(k) == -1) {
						a.push(k);
					}
					return a;
				},
				arr
			),
			[]
		);
	},

	unit(value, unit = '') {
		if (typeof unit === 'string' && unit.length > 0) {
			unit = _.t(unit);
			return `${value}&nbsp;<span class="unit">${unit}</unit>`;
		}
		return value;
	}

};

module.exports = _;

/***/ }),

/***/ 5345:
/***/ ((module) => {

"use strict";


/** @type {import('./uri')} */
module.exports = URIError;


/***/ }),

/***/ 5483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const bases = __webpack_require__(7980)

/**
 * @typedef {import('./util/bases').SupportedEncodings} SupportedEncodings
 */

/**
 * Create a `Uint8Array` from the passed string
 *
 * Supports `utf8`, `utf-8`, `hex`, and any encoding supported by the multiformats module.
 *
 * Also `ascii` which is similar to node's 'binary' encoding.
 *
 * @param {string} string
 * @param {SupportedEncodings} [encoding=utf8] - utf8, base16, base64, base64urlpad, etc
 * @returns {Uint8Array}
 */
function fromString (string, encoding = 'utf8') {
  const base = bases[encoding]

  if (!base) {
    throw new Error(`Unsupported encoding "${encoding}"`)
  }

  // add multibase prefix
  return base.decoder.decode(`${base.prefix}${string}`)
}

module.exports = fromString


/***/ }),

/***/ 5680:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var whichTypedArray = __webpack_require__(5767);

/** @type {import('.')} */
module.exports = function isTypedArray(value) {
	return !!whichTypedArray(value);
};


/***/ }),

/***/ 5767:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var forEach = __webpack_require__(2682);
var availableTypedArrays = __webpack_require__(9209);
var callBind = __webpack_require__(487);
var callBound = __webpack_require__(6556);
var gOPD = __webpack_require__(5795);
var getProto = __webpack_require__(3628);

var $toString = callBound('Object.prototype.toString');
var hasToStringTag = __webpack_require__(9092)();

var g = typeof globalThis === 'undefined' ? __webpack_require__.g : globalThis;
var typedArrays = availableTypedArrays();

var $slice = callBound('String.prototype.slice');

/** @type {<T = unknown>(array: readonly T[], value: unknown) => number} */
var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
	for (var i = 0; i < array.length; i += 1) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
};

/** @typedef {import('./types').Getter} Getter */
/** @type {import('./types').Cache} */
var cache = { __proto__: null };
if (hasToStringTag && gOPD && getProto) {
	forEach(typedArrays, function (typedArray) {
		var arr = new g[typedArray]();
		if (Symbol.toStringTag in arr && getProto) {
			var proto = getProto(arr);
			// @ts-expect-error TS won't narrow inside a closure
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor && proto) {
				var superProto = getProto(proto);
				// @ts-expect-error TS won't narrow inside a closure
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			// @ts-expect-error TODO: fix
			cache['$' + typedArray] = callBind(descriptor.get);
		}
	});
} else {
	forEach(typedArrays, function (typedArray) {
		var arr = new g[typedArray]();
		var fn = arr.slice || arr.set;
		if (fn) {
			cache[
				/** @type {`$${import('.').TypedArrayName}`} */ ('$' + typedArray)
			] = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */ (
				// @ts-expect-error TODO FIXME
				callBind(fn)
			);
		}
	});
}

/** @type {(value: object) => false | import('.').TypedArrayName} */
var tryTypedArrays = function tryAllTypedArrays(value) {
	/** @type {ReturnType<typeof tryAllTypedArrays>} */ var found = false;
	forEach(
		/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */ (cache),
		/** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
		function (getter, typedArray) {
			if (!found) {
				try {
					// @ts-expect-error a throw is fine here
					if ('$' + getter(value) === typedArray) {
						found = /** @type {import('.').TypedArrayName} */ ($slice(typedArray, 1));
					}
				} catch (e) { /**/ }
			}
		}
	);
	return found;
};

/** @type {(value: object) => false | import('.').TypedArrayName} */
var trySlices = function tryAllSlices(value) {
	/** @type {ReturnType<typeof tryAllSlices>} */ var found = false;
	forEach(
		/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */(cache),
		/** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */ function (getter, name) {
			if (!found) {
				try {
					// @ts-expect-error a throw is fine here
					getter(value);
					found = /** @type {import('.').TypedArrayName} */ ($slice(name, 1));
				} catch (e) { /**/ }
			}
		}
	);
	return found;
};

/** @type {import('.')} */
module.exports = function whichTypedArray(value) {
	if (!value || typeof value !== 'object') { return false; }
	if (!hasToStringTag) {
		/** @type {string} */
		var tag = $slice($toString(value), 8, -1);
		if ($indexOf(typedArrays, tag) > -1) {
			return tag;
		}
		if (tag !== 'Object') {
			return false;
		}
		// node < 0.6 hits here on real Typed Arrays
		return trySlices(value);
	}
	if (!gOPD) { return null; } // unknown engine
	return tryTypedArrays(value);
};


/***/ }),

/***/ 5795:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/** @type {import('.')} */
var $gOPD = __webpack_require__(6549);

if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


/***/ }),

/***/ 5880:
/***/ ((module) => {

"use strict";


/** @type {import('./pow')} */
module.exports = Math.pow;


/***/ }),

/***/ 6188:
/***/ ((module) => {

"use strict";


/** @type {import('./max')} */
module.exports = Math.max;


/***/ }),

/***/ 6549:
/***/ ((module) => {

"use strict";


/** @type {import('./gOPD')} */
module.exports = Object.getOwnPropertyDescriptor;


/***/ }),

/***/ 6556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(453);

var callBindBasic = __webpack_require__(3126);

/** @type {(thisArg: string, searchString: string, position?: number) => number} */
var $indexOf = callBindBasic([GetIntrinsic('%String.prototype.indexOf%')]);

/** @type {import('.')} */
module.exports = function callBoundIntrinsic(name, allowMissing) {
	/* eslint no-extra-parens: 0 */

	var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */ (GetIntrinsic(name, !!allowMissing));
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBindBasic(/** @type {const} */ ([intrinsic]));
	}
	return intrinsic;
};


/***/ }),

/***/ 6578:
/***/ ((module) => {

"use strict";


/** @type {import('.')} */
module.exports = [
	'Float16Array',
	'Float32Array',
	'Float64Array',
	'Int8Array',
	'Int16Array',
	'Int32Array',
	'Uint8Array',
	'Uint8ClampedArray',
	'Uint16Array',
	'Uint32Array',
	'BigInt64Array',
	'BigUint64Array'
];


/***/ }),

/***/ 6698:
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ 6743:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(9353);

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ 6797:
/***/ ((module) => {

module.exports = read

var MSB = 0x80
  , REST = 0x7F

function read(buf, offset) {
  var res    = 0
    , offset = offset || 0
    , shift  = 0
    , counter = offset
    , b
    , l = buf.length

  do {
    if (counter >= l || shift > 49) {
      read.bytes = 0
      throw new RangeError('Could not decode varint')
    }
    b = buf[counter++]
    res += shift < 28
      ? (b & REST) << shift
      : (b & REST) * Math.pow(2, shift)
    shift += 7
  } while (b >= MSB)

  read.bytes = counter - offset

  return res
}


/***/ }),

/***/ 6897:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(453);
var define = __webpack_require__(41);
var hasDescriptors = __webpack_require__(592)();
var gOPD = __webpack_require__(5795);

var $TypeError = __webpack_require__(9675);
var $floor = GetIntrinsic('%Math.floor%');

/** @type {import('.')} */
module.exports = function setFunctionLength(fn, length) {
	if (typeof fn !== 'function') {
		throw new $TypeError('`fn` is not a function');
	}
	if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {
		throw new $TypeError('`length` must be a positive 32-bit integer');
	}

	var loose = arguments.length > 2 && !!arguments[2];

	var functionLengthIsConfigurable = true;
	var functionLengthIsWritable = true;
	if ('length' in fn && gOPD) {
		var desc = gOPD(fn, 'length');
		if (desc && !desc.configurable) {
			functionLengthIsConfigurable = false;
		}
		if (desc && !desc.writable) {
			functionLengthIsWritable = false;
		}
	}

	if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
		if (hasDescriptors) {
			define(/** @type {Parameters<define>[0]} */ (fn), 'length', length, true, true);
		} else {
			define(/** @type {Parameters<define>[0]} */ (fn), 'length', length);
		}
	}
	return fn;
};


/***/ }),

/***/ 7019:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.TextEncoder =
  typeof TextEncoder !== "undefined" ? TextEncoder : (__webpack_require__(537).TextEncoder)

exports.TextDecoder =
  typeof TextDecoder !== "undefined" ? TextDecoder : (__webpack_require__(537).TextDecoder)


/***/ }),

/***/ 7119:
/***/ ((module) => {

"use strict";


/** @type {import('./reflectApply')} */
module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;


/***/ }),

/***/ 7176:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var callBind = __webpack_require__(3126);
var gOPD = __webpack_require__(5795);

var hasProtoAccessor;
try {
	// eslint-disable-next-line no-extra-parens, no-proto
	hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ ([]).__proto__ === Array.prototype;
} catch (e) {
	if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
		throw e;
	}
}

// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ ('__proto__'));

var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;

/** @type {import('./get')} */
module.exports = desc && typeof desc.get === 'function'
	? callBind([desc.get])
	: typeof $getPrototypeOf === 'function'
		? /** @type {import('./get')} */ function getDunder(value) {
			// eslint-disable-next-line eqeqeq
			return $getPrototypeOf(value == null ? value : $Object(value));
		}
		: false;


/***/ }),

/***/ 7244:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hasToStringTag = __webpack_require__(9092)();
var callBound = __webpack_require__(6556);

var $toString = callBound('Object.prototype.toString');

/** @type {import('.')} */
var isStandardArguments = function isArguments(value) {
	if (
		hasToStringTag
		&& value
		&& typeof value === 'object'
		&& Symbol.toStringTag in value
	) {
		return false;
	}
	return $toString(value) === '[object Arguments]';
};

/** @type {import('.')} */
var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null
		&& typeof value === 'object'
		&& 'length' in value
		&& typeof value.length === 'number'
		&& value.length >= 0
		&& $toString(value) !== '[object Array]'
		&& 'callee' in value
		&& $toString(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

// @ts-expect-error TODO make this not error
isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

/** @type {import('.')} */
module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),

/***/ 7579:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const baseX = __webpack_require__(5084)
const Base = __webpack_require__(8633)
const { rfc4648 } = __webpack_require__(9417)
const { decodeText, encodeText } = __webpack_require__(4084)

/** @typedef {import('./types').CodecFactory} CodecFactory */
/** @typedef {import('./types').Codec} Codec */
/** @typedef {import('./types').BaseName} BaseName */
/** @typedef {import('./types').BaseCode} BaseCode */

/** @type {CodecFactory} */
const identity = () => {
  return {
    encode: decodeText,
    decode: encodeText
  }
}

/**
 *
 * name, code, implementation, alphabet
 *
 * @type {Array<[BaseName, BaseCode, CodecFactory, string]>}
 */
const constants = [
  ['identity', '\x00', identity, ''],
  ['base2', '0', rfc4648(1), '01'],
  ['base8', '7', rfc4648(3), '01234567'],
  ['base10', '9', baseX, '0123456789'],
  ['base16', 'f', rfc4648(4), '0123456789abcdef'],
  ['base16upper', 'F', rfc4648(4), '0123456789ABCDEF'],
  ['base32hex', 'v', rfc4648(5), '0123456789abcdefghijklmnopqrstuv'],
  ['base32hexupper', 'V', rfc4648(5), '0123456789ABCDEFGHIJKLMNOPQRSTUV'],
  ['base32hexpad', 't', rfc4648(5), '0123456789abcdefghijklmnopqrstuv='],
  ['base32hexpadupper', 'T', rfc4648(5), '0123456789ABCDEFGHIJKLMNOPQRSTUV='],
  ['base32', 'b', rfc4648(5), 'abcdefghijklmnopqrstuvwxyz234567'],
  ['base32upper', 'B', rfc4648(5), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'],
  ['base32pad', 'c', rfc4648(5), 'abcdefghijklmnopqrstuvwxyz234567='],
  ['base32padupper', 'C', rfc4648(5), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567='],
  ['base32z', 'h', rfc4648(5), 'ybndrfg8ejkmcpqxot1uwisza345h769'],
  ['base36', 'k', baseX, '0123456789abcdefghijklmnopqrstuvwxyz'],
  ['base36upper', 'K', baseX, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
  ['base58btc', 'z', baseX, '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'],
  ['base58flickr', 'Z', baseX, '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'],
  ['base64', 'm', rfc4648(6), 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'],
  ['base64pad', 'M', rfc4648(6), 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='],
  ['base64url', 'u', rfc4648(6), 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'],
  ['base64urlpad', 'U', rfc4648(6), 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=']
]

/** @type {Record<BaseName,Base>} */
const names = constants.reduce((prev, tupple) => {
  prev[tupple[0]] = new Base(tupple[0], tupple[1], tupple[2], tupple[3])
  return prev
}, /** @type {Record<BaseName,Base>} */({}))

/** @type {Record<BaseCode,Base>} */
const codes = constants.reduce((prev, tupple) => {
  prev[tupple[1]] = names[tupple[0]]
  return prev
}, /** @type {Record<BaseCode,Base>} */({}))

module.exports = {
  names,
  codes
}


/***/ }),

/***/ 7867:
/***/ ((module) => {


var N1 = Math.pow(2,  7)
var N2 = Math.pow(2, 14)
var N3 = Math.pow(2, 21)
var N4 = Math.pow(2, 28)
var N5 = Math.pow(2, 35)
var N6 = Math.pow(2, 42)
var N7 = Math.pow(2, 49)
var N8 = Math.pow(2, 56)
var N9 = Math.pow(2, 63)

module.exports = function (value) {
  return (
    value < N1 ? 1
  : value < N2 ? 2
  : value < N3 ? 3
  : value < N4 ? 4
  : value < N5 ? 5
  : value < N6 ? 6
  : value < N7 ? 7
  : value < N8 ? 8
  : value < N9 ? 9
  :              10
  )
}


/***/ }),

/***/ 7980:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
  

const { bases } = __webpack_require__(9080)

/**
 * @typedef {import('multiformats/bases/interface').MultibaseCodec<any>} MultibaseCodec
 */

/**
 * @param {string} name
 * @param {string} prefix
 * @param {(buf: Uint8Array) => string} encode
 * @param {(str: string) => Uint8Array} decode
 * @returns {MultibaseCodec}
 */
function createCodec (name, prefix, encode, decode) {
  return {
    name,
    prefix,
    encoder: {
      name,
      prefix,
      encode
    },
    decoder: {
      decode
    }
  }
}

const string = createCodec('utf8', 'u', (buf) => {
  const decoder = new TextDecoder('utf8')
  return 'u' + decoder.decode(buf)
}, (str) => {
  const encoder = new TextEncoder()
  return encoder.encode(str.substring(1))
})

const ascii = createCodec('ascii', 'a', (buf) => {
  let string = 'a'

  for (let i = 0; i < buf.length; i++) {
    string += String.fromCharCode(buf[i])
  }
  return string
}, (str) => {
  str = str.substring(1)
  const buf = new Uint8Array(str.length)

  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i)
  }

  return buf
})

/**
 * @typedef {'utf8' | 'utf-8' | 'hex' | 'latin1' | 'ascii' | 'binary' | keyof bases } SupportedEncodings
 */

/**
 * @type {Record<SupportedEncodings, MultibaseCodec>}
 */
const BASES = {
  'utf8': string,
  'utf-8': string,
  'hex': bases.base16,
  'latin1': ascii,
  'ascii': ascii,
  'binary': ascii,

  ...bases
}

module.exports = BASES


/***/ }),

/***/ 8002:
/***/ ((module) => {

"use strict";


/** @type {import('./min')} */
module.exports = Math.min;


/***/ }),

/***/ 8066:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* commonmark 0.29 https://github.com/commonmark/commonmark.js @license BSD3 */
(function (global, factory) {
     true ? factory(exports) :
    0;
}(this, (function (exports) { 'use strict';

    function isContainer(node) {
        switch (node._type) {
            case "document":
            case "block_quote":
            case "list":
            case "item":
            case "paragraph":
            case "heading":
            case "emph":
            case "strong":
            case "link":
            case "image":
            case "custom_inline":
            case "custom_block":
                return true;
            default:
                return false;
        }
    }

    var resumeAt = function(node, entering) {
        this.current = node;
        this.entering = entering === true;
    };

    var next = function() {
        var cur = this.current;
        var entering = this.entering;

        if (cur === null) {
            return null;
        }

        var container = isContainer(cur);

        if (entering && container) {
            if (cur._firstChild) {
                this.current = cur._firstChild;
                this.entering = true;
            } else {
                // stay on node but exit
                this.entering = false;
            }
        } else if (cur === this.root) {
            this.current = null;
        } else if (cur._next === null) {
            this.current = cur._parent;
            this.entering = false;
        } else {
            this.current = cur._next;
            this.entering = true;
        }

        return { entering: entering, node: cur };
    };

    var NodeWalker = function(root) {
        return {
            current: root,
            root: root,
            entering: true,
            next: next,
            resumeAt: resumeAt
        };
    };

    var Node = function(nodeType, sourcepos) {
        this._type = nodeType;
        this._parent = null;
        this._firstChild = null;
        this._lastChild = null;
        this._prev = null;
        this._next = null;
        this._sourcepos = sourcepos;
        this._lastLineBlank = false;
        this._lastLineChecked = false;
        this._open = true;
        this._string_content = null;
        this._literal = null;
        this._listData = {};
        this._info = null;
        this._destination = null;
        this._title = null;
        this._isFenced = false;
        this._fenceChar = null;
        this._fenceLength = 0;
        this._fenceOffset = null;
        this._level = null;
        this._onEnter = null;
        this._onExit = null;
    };

    var proto = Node.prototype;

    Object.defineProperty(proto, "isContainer", {
        get: function() {
            return isContainer(this);
        }
    });

    Object.defineProperty(proto, "type", {
        get: function() {
            return this._type;
        }
    });

    Object.defineProperty(proto, "firstChild", {
        get: function() {
            return this._firstChild;
        }
    });

    Object.defineProperty(proto, "lastChild", {
        get: function() {
            return this._lastChild;
        }
    });

    Object.defineProperty(proto, "next", {
        get: function() {
            return this._next;
        }
    });

    Object.defineProperty(proto, "prev", {
        get: function() {
            return this._prev;
        }
    });

    Object.defineProperty(proto, "parent", {
        get: function() {
            return this._parent;
        }
    });

    Object.defineProperty(proto, "sourcepos", {
        get: function() {
            return this._sourcepos;
        }
    });

    Object.defineProperty(proto, "literal", {
        get: function() {
            return this._literal;
        },
        set: function(s) {
            this._literal = s;
        }
    });

    Object.defineProperty(proto, "destination", {
        get: function() {
            return this._destination;
        },
        set: function(s) {
            this._destination = s;
        }
    });

    Object.defineProperty(proto, "title", {
        get: function() {
            return this._title;
        },
        set: function(s) {
            this._title = s;
        }
    });

    Object.defineProperty(proto, "info", {
        get: function() {
            return this._info;
        },
        set: function(s) {
            this._info = s;
        }
    });

    Object.defineProperty(proto, "level", {
        get: function() {
            return this._level;
        },
        set: function(s) {
            this._level = s;
        }
    });

    Object.defineProperty(proto, "listType", {
        get: function() {
            return this._listData.type;
        },
        set: function(t) {
            this._listData.type = t;
        }
    });

    Object.defineProperty(proto, "listTight", {
        get: function() {
            return this._listData.tight;
        },
        set: function(t) {
            this._listData.tight = t;
        }
    });

    Object.defineProperty(proto, "listStart", {
        get: function() {
            return this._listData.start;
        },
        set: function(n) {
            this._listData.start = n;
        }
    });

    Object.defineProperty(proto, "listDelimiter", {
        get: function() {
            return this._listData.delimiter;
        },
        set: function(delim) {
            this._listData.delimiter = delim;
        }
    });

    Object.defineProperty(proto, "onEnter", {
        get: function() {
            return this._onEnter;
        },
        set: function(s) {
            this._onEnter = s;
        }
    });

    Object.defineProperty(proto, "onExit", {
        get: function() {
            return this._onExit;
        },
        set: function(s) {
            this._onExit = s;
        }
    });

    Node.prototype.appendChild = function(child) {
        child.unlink();
        child._parent = this;
        if (this._lastChild) {
            this._lastChild._next = child;
            child._prev = this._lastChild;
            this._lastChild = child;
        } else {
            this._firstChild = child;
            this._lastChild = child;
        }
    };

    Node.prototype.prependChild = function(child) {
        child.unlink();
        child._parent = this;
        if (this._firstChild) {
            this._firstChild._prev = child;
            child._next = this._firstChild;
            this._firstChild = child;
        } else {
            this._firstChild = child;
            this._lastChild = child;
        }
    };

    Node.prototype.unlink = function() {
        if (this._prev) {
            this._prev._next = this._next;
        } else if (this._parent) {
            this._parent._firstChild = this._next;
        }
        if (this._next) {
            this._next._prev = this._prev;
        } else if (this._parent) {
            this._parent._lastChild = this._prev;
        }
        this._parent = null;
        this._next = null;
        this._prev = null;
    };

    Node.prototype.insertAfter = function(sibling) {
        sibling.unlink();
        sibling._next = this._next;
        if (sibling._next) {
            sibling._next._prev = sibling;
        }
        sibling._prev = this;
        this._next = sibling;
        sibling._parent = this._parent;
        if (!sibling._next) {
            sibling._parent._lastChild = sibling;
        }
    };

    Node.prototype.insertBefore = function(sibling) {
        sibling.unlink();
        sibling._prev = this._prev;
        if (sibling._prev) {
            sibling._prev._next = sibling;
        }
        sibling._next = this;
        this._prev = sibling;
        sibling._parent = this._parent;
        if (!sibling._prev) {
            sibling._parent._firstChild = sibling;
        }
    };

    Node.prototype.walker = function() {
        var walker = new NodeWalker(this);
        return walker;
    };

    /* Example of use of walker:

     var walker = w.walker();
     var event;

     while (event = walker.next()) {
     console.log(event.entering, event.node.type);
     }

     */

    var encodeCache = {};


    // Create a lookup array where anything but characters in `chars` string
    // and alphanumeric chars is percent-encoded.
    //
    function getEncodeCache(exclude) {
      var i, ch, cache = encodeCache[exclude];
      if (cache) { return cache; }

      cache = encodeCache[exclude] = [];

      for (i = 0; i < 128; i++) {
        ch = String.fromCharCode(i);

        if (/^[0-9a-z]$/i.test(ch)) {
          // always allow unencoded alphanumeric characters
          cache.push(ch);
        } else {
          cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
        }
      }

      for (i = 0; i < exclude.length; i++) {
        cache[exclude.charCodeAt(i)] = exclude[i];
      }

      return cache;
    }


    // Encode unsafe characters with percent-encoding, skipping already
    // encoded sequences.
    //
    //  - string       - string to encode
    //  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
    //  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
    //
    function encode(string, exclude, keepEscaped) {
      var i, l, code, nextCode, cache,
          result = '';

      if (typeof exclude !== 'string') {
        // encode(string, keepEscaped)
        keepEscaped  = exclude;
        exclude = encode.defaultChars;
      }

      if (typeof keepEscaped === 'undefined') {
        keepEscaped = true;
      }

      cache = getEncodeCache(exclude);

      for (i = 0, l = string.length; i < l; i++) {
        code = string.charCodeAt(i);

        if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
          if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
            result += string.slice(i, i + 3);
            i += 2;
            continue;
          }
        }

        if (code < 128) {
          result += cache[code];
          continue;
        }

        if (code >= 0xD800 && code <= 0xDFFF) {
          if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
            nextCode = string.charCodeAt(i + 1);
            if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
              result += encodeURIComponent(string[i] + string[i + 1]);
              i++;
              continue;
            }
          }
          result += '%EF%BF%BD';
          continue;
        }

        result += encodeURIComponent(string[i]);
      }

      return result;
    }

    encode.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
    encode.componentChars = "-_.!~*'()";


    var encode_1 = encode;

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    function getCjsExportFromNamespace (n) {
    	return n && n['default'] || n;
    }

    var Aacute = "Á";
    var aacute = "á";
    var Abreve = "Ă";
    var abreve = "ă";
    var ac = "∾";
    var acd = "∿";
    var acE = "∾̳";
    var Acirc = "Â";
    var acirc = "â";
    var acute = "´";
    var Acy = "А";
    var acy = "а";
    var AElig = "Æ";
    var aelig = "æ";
    var af = "⁡";
    var Afr = "𝔄";
    var afr = "𝔞";
    var Agrave = "À";
    var agrave = "à";
    var alefsym = "ℵ";
    var aleph = "ℵ";
    var Alpha = "Α";
    var alpha = "α";
    var Amacr = "Ā";
    var amacr = "ā";
    var amalg = "⨿";
    var amp = "&";
    var AMP = "&";
    var andand = "⩕";
    var And = "⩓";
    var and = "∧";
    var andd = "⩜";
    var andslope = "⩘";
    var andv = "⩚";
    var ang = "∠";
    var ange = "⦤";
    var angle = "∠";
    var angmsdaa = "⦨";
    var angmsdab = "⦩";
    var angmsdac = "⦪";
    var angmsdad = "⦫";
    var angmsdae = "⦬";
    var angmsdaf = "⦭";
    var angmsdag = "⦮";
    var angmsdah = "⦯";
    var angmsd = "∡";
    var angrt = "∟";
    var angrtvb = "⊾";
    var angrtvbd = "⦝";
    var angsph = "∢";
    var angst = "Å";
    var angzarr = "⍼";
    var Aogon = "Ą";
    var aogon = "ą";
    var Aopf = "𝔸";
    var aopf = "𝕒";
    var apacir = "⩯";
    var ap = "≈";
    var apE = "⩰";
    var ape = "≊";
    var apid = "≋";
    var apos = "'";
    var ApplyFunction = "⁡";
    var approx = "≈";
    var approxeq = "≊";
    var Aring = "Å";
    var aring = "å";
    var Ascr = "𝒜";
    var ascr = "𝒶";
    var Assign = "≔";
    var ast = "*";
    var asymp = "≈";
    var asympeq = "≍";
    var Atilde = "Ã";
    var atilde = "ã";
    var Auml = "Ä";
    var auml = "ä";
    var awconint = "∳";
    var awint = "⨑";
    var backcong = "≌";
    var backepsilon = "϶";
    var backprime = "‵";
    var backsim = "∽";
    var backsimeq = "⋍";
    var Backslash = "∖";
    var Barv = "⫧";
    var barvee = "⊽";
    var barwed = "⌅";
    var Barwed = "⌆";
    var barwedge = "⌅";
    var bbrk = "⎵";
    var bbrktbrk = "⎶";
    var bcong = "≌";
    var Bcy = "Б";
    var bcy = "б";
    var bdquo = "„";
    var becaus = "∵";
    var because = "∵";
    var Because = "∵";
    var bemptyv = "⦰";
    var bepsi = "϶";
    var bernou = "ℬ";
    var Bernoullis = "ℬ";
    var Beta = "Β";
    var beta = "β";
    var beth = "ℶ";
    var between = "≬";
    var Bfr = "𝔅";
    var bfr = "𝔟";
    var bigcap = "⋂";
    var bigcirc = "◯";
    var bigcup = "⋃";
    var bigodot = "⨀";
    var bigoplus = "⨁";
    var bigotimes = "⨂";
    var bigsqcup = "⨆";
    var bigstar = "★";
    var bigtriangledown = "▽";
    var bigtriangleup = "△";
    var biguplus = "⨄";
    var bigvee = "⋁";
    var bigwedge = "⋀";
    var bkarow = "⤍";
    var blacklozenge = "⧫";
    var blacksquare = "▪";
    var blacktriangle = "▴";
    var blacktriangledown = "▾";
    var blacktriangleleft = "◂";
    var blacktriangleright = "▸";
    var blank = "␣";
    var blk12 = "▒";
    var blk14 = "░";
    var blk34 = "▓";
    var block = "█";
    var bne = "=⃥";
    var bnequiv = "≡⃥";
    var bNot = "⫭";
    var bnot = "⌐";
    var Bopf = "𝔹";
    var bopf = "𝕓";
    var bot = "⊥";
    var bottom = "⊥";
    var bowtie = "⋈";
    var boxbox = "⧉";
    var boxdl = "┐";
    var boxdL = "╕";
    var boxDl = "╖";
    var boxDL = "╗";
    var boxdr = "┌";
    var boxdR = "╒";
    var boxDr = "╓";
    var boxDR = "╔";
    var boxh = "─";
    var boxH = "═";
    var boxhd = "┬";
    var boxHd = "╤";
    var boxhD = "╥";
    var boxHD = "╦";
    var boxhu = "┴";
    var boxHu = "╧";
    var boxhU = "╨";
    var boxHU = "╩";
    var boxminus = "⊟";
    var boxplus = "⊞";
    var boxtimes = "⊠";
    var boxul = "┘";
    var boxuL = "╛";
    var boxUl = "╜";
    var boxUL = "╝";
    var boxur = "└";
    var boxuR = "╘";
    var boxUr = "╙";
    var boxUR = "╚";
    var boxv = "│";
    var boxV = "║";
    var boxvh = "┼";
    var boxvH = "╪";
    var boxVh = "╫";
    var boxVH = "╬";
    var boxvl = "┤";
    var boxvL = "╡";
    var boxVl = "╢";
    var boxVL = "╣";
    var boxvr = "├";
    var boxvR = "╞";
    var boxVr = "╟";
    var boxVR = "╠";
    var bprime = "‵";
    var breve = "˘";
    var Breve = "˘";
    var brvbar = "¦";
    var bscr = "𝒷";
    var Bscr = "ℬ";
    var bsemi = "⁏";
    var bsim = "∽";
    var bsime = "⋍";
    var bsolb = "⧅";
    var bsol = "\\";
    var bsolhsub = "⟈";
    var bull = "•";
    var bullet = "•";
    var bump = "≎";
    var bumpE = "⪮";
    var bumpe = "≏";
    var Bumpeq = "≎";
    var bumpeq = "≏";
    var Cacute = "Ć";
    var cacute = "ć";
    var capand = "⩄";
    var capbrcup = "⩉";
    var capcap = "⩋";
    var cap = "∩";
    var Cap = "⋒";
    var capcup = "⩇";
    var capdot = "⩀";
    var CapitalDifferentialD = "ⅅ";
    var caps = "∩︀";
    var caret = "⁁";
    var caron = "ˇ";
    var Cayleys = "ℭ";
    var ccaps = "⩍";
    var Ccaron = "Č";
    var ccaron = "č";
    var Ccedil = "Ç";
    var ccedil = "ç";
    var Ccirc = "Ĉ";
    var ccirc = "ĉ";
    var Cconint = "∰";
    var ccups = "⩌";
    var ccupssm = "⩐";
    var Cdot = "Ċ";
    var cdot = "ċ";
    var cedil = "¸";
    var Cedilla = "¸";
    var cemptyv = "⦲";
    var cent = "¢";
    var centerdot = "·";
    var CenterDot = "·";
    var cfr = "𝔠";
    var Cfr = "ℭ";
    var CHcy = "Ч";
    var chcy = "ч";
    var check = "✓";
    var checkmark = "✓";
    var Chi = "Χ";
    var chi = "χ";
    var circ = "ˆ";
    var circeq = "≗";
    var circlearrowleft = "↺";
    var circlearrowright = "↻";
    var circledast = "⊛";
    var circledcirc = "⊚";
    var circleddash = "⊝";
    var CircleDot = "⊙";
    var circledR = "®";
    var circledS = "Ⓢ";
    var CircleMinus = "⊖";
    var CirclePlus = "⊕";
    var CircleTimes = "⊗";
    var cir = "○";
    var cirE = "⧃";
    var cire = "≗";
    var cirfnint = "⨐";
    var cirmid = "⫯";
    var cirscir = "⧂";
    var ClockwiseContourIntegral = "∲";
    var CloseCurlyDoubleQuote = "”";
    var CloseCurlyQuote = "’";
    var clubs = "♣";
    var clubsuit = "♣";
    var colon = ":";
    var Colon = "∷";
    var Colone = "⩴";
    var colone = "≔";
    var coloneq = "≔";
    var comma = ",";
    var commat = "@";
    var comp = "∁";
    var compfn = "∘";
    var complement = "∁";
    var complexes = "ℂ";
    var cong = "≅";
    var congdot = "⩭";
    var Congruent = "≡";
    var conint = "∮";
    var Conint = "∯";
    var ContourIntegral = "∮";
    var copf = "𝕔";
    var Copf = "ℂ";
    var coprod = "∐";
    var Coproduct = "∐";
    var copy = "©";
    var COPY = "©";
    var copysr = "℗";
    var CounterClockwiseContourIntegral = "∳";
    var crarr = "↵";
    var cross = "✗";
    var Cross = "⨯";
    var Cscr = "𝒞";
    var cscr = "𝒸";
    var csub = "⫏";
    var csube = "⫑";
    var csup = "⫐";
    var csupe = "⫒";
    var ctdot = "⋯";
    var cudarrl = "⤸";
    var cudarrr = "⤵";
    var cuepr = "⋞";
    var cuesc = "⋟";
    var cularr = "↶";
    var cularrp = "⤽";
    var cupbrcap = "⩈";
    var cupcap = "⩆";
    var CupCap = "≍";
    var cup = "∪";
    var Cup = "⋓";
    var cupcup = "⩊";
    var cupdot = "⊍";
    var cupor = "⩅";
    var cups = "∪︀";
    var curarr = "↷";
    var curarrm = "⤼";
    var curlyeqprec = "⋞";
    var curlyeqsucc = "⋟";
    var curlyvee = "⋎";
    var curlywedge = "⋏";
    var curren = "¤";
    var curvearrowleft = "↶";
    var curvearrowright = "↷";
    var cuvee = "⋎";
    var cuwed = "⋏";
    var cwconint = "∲";
    var cwint = "∱";
    var cylcty = "⌭";
    var dagger = "†";
    var Dagger = "‡";
    var daleth = "ℸ";
    var darr = "↓";
    var Darr = "↡";
    var dArr = "⇓";
    var dash = "‐";
    var Dashv = "⫤";
    var dashv = "⊣";
    var dbkarow = "⤏";
    var dblac = "˝";
    var Dcaron = "Ď";
    var dcaron = "ď";
    var Dcy = "Д";
    var dcy = "д";
    var ddagger = "‡";
    var ddarr = "⇊";
    var DD = "ⅅ";
    var dd = "ⅆ";
    var DDotrahd = "⤑";
    var ddotseq = "⩷";
    var deg = "°";
    var Del = "∇";
    var Delta = "Δ";
    var delta = "δ";
    var demptyv = "⦱";
    var dfisht = "⥿";
    var Dfr = "𝔇";
    var dfr = "𝔡";
    var dHar = "⥥";
    var dharl = "⇃";
    var dharr = "⇂";
    var DiacriticalAcute = "´";
    var DiacriticalDot = "˙";
    var DiacriticalDoubleAcute = "˝";
    var DiacriticalGrave = "`";
    var DiacriticalTilde = "˜";
    var diam = "⋄";
    var diamond = "⋄";
    var Diamond = "⋄";
    var diamondsuit = "♦";
    var diams = "♦";
    var die = "¨";
    var DifferentialD = "ⅆ";
    var digamma = "ϝ";
    var disin = "⋲";
    var div = "÷";
    var divide = "÷";
    var divideontimes = "⋇";
    var divonx = "⋇";
    var DJcy = "Ђ";
    var djcy = "ђ";
    var dlcorn = "⌞";
    var dlcrop = "⌍";
    var dollar = "$";
    var Dopf = "𝔻";
    var dopf = "𝕕";
    var Dot = "¨";
    var dot = "˙";
    var DotDot = "⃜";
    var doteq = "≐";
    var doteqdot = "≑";
    var DotEqual = "≐";
    var dotminus = "∸";
    var dotplus = "∔";
    var dotsquare = "⊡";
    var doublebarwedge = "⌆";
    var DoubleContourIntegral = "∯";
    var DoubleDot = "¨";
    var DoubleDownArrow = "⇓";
    var DoubleLeftArrow = "⇐";
    var DoubleLeftRightArrow = "⇔";
    var DoubleLeftTee = "⫤";
    var DoubleLongLeftArrow = "⟸";
    var DoubleLongLeftRightArrow = "⟺";
    var DoubleLongRightArrow = "⟹";
    var DoubleRightArrow = "⇒";
    var DoubleRightTee = "⊨";
    var DoubleUpArrow = "⇑";
    var DoubleUpDownArrow = "⇕";
    var DoubleVerticalBar = "∥";
    var DownArrowBar = "⤓";
    var downarrow = "↓";
    var DownArrow = "↓";
    var Downarrow = "⇓";
    var DownArrowUpArrow = "⇵";
    var DownBreve = "̑";
    var downdownarrows = "⇊";
    var downharpoonleft = "⇃";
    var downharpoonright = "⇂";
    var DownLeftRightVector = "⥐";
    var DownLeftTeeVector = "⥞";
    var DownLeftVectorBar = "⥖";
    var DownLeftVector = "↽";
    var DownRightTeeVector = "⥟";
    var DownRightVectorBar = "⥗";
    var DownRightVector = "⇁";
    var DownTeeArrow = "↧";
    var DownTee = "⊤";
    var drbkarow = "⤐";
    var drcorn = "⌟";
    var drcrop = "⌌";
    var Dscr = "𝒟";
    var dscr = "𝒹";
    var DScy = "Ѕ";
    var dscy = "ѕ";
    var dsol = "⧶";
    var Dstrok = "Đ";
    var dstrok = "đ";
    var dtdot = "⋱";
    var dtri = "▿";
    var dtrif = "▾";
    var duarr = "⇵";
    var duhar = "⥯";
    var dwangle = "⦦";
    var DZcy = "Џ";
    var dzcy = "џ";
    var dzigrarr = "⟿";
    var Eacute = "É";
    var eacute = "é";
    var easter = "⩮";
    var Ecaron = "Ě";
    var ecaron = "ě";
    var Ecirc = "Ê";
    var ecirc = "ê";
    var ecir = "≖";
    var ecolon = "≕";
    var Ecy = "Э";
    var ecy = "э";
    var eDDot = "⩷";
    var Edot = "Ė";
    var edot = "ė";
    var eDot = "≑";
    var ee = "ⅇ";
    var efDot = "≒";
    var Efr = "𝔈";
    var efr = "𝔢";
    var eg = "⪚";
    var Egrave = "È";
    var egrave = "è";
    var egs = "⪖";
    var egsdot = "⪘";
    var el = "⪙";
    var Element = "∈";
    var elinters = "⏧";
    var ell = "ℓ";
    var els = "⪕";
    var elsdot = "⪗";
    var Emacr = "Ē";
    var emacr = "ē";
    var empty = "∅";
    var emptyset = "∅";
    var EmptySmallSquare = "◻";
    var emptyv = "∅";
    var EmptyVerySmallSquare = "▫";
    var emsp13 = " ";
    var emsp14 = " ";
    var emsp = " ";
    var ENG = "Ŋ";
    var eng = "ŋ";
    var ensp = " ";
    var Eogon = "Ę";
    var eogon = "ę";
    var Eopf = "𝔼";
    var eopf = "𝕖";
    var epar = "⋕";
    var eparsl = "⧣";
    var eplus = "⩱";
    var epsi = "ε";
    var Epsilon = "Ε";
    var epsilon = "ε";
    var epsiv = "ϵ";
    var eqcirc = "≖";
    var eqcolon = "≕";
    var eqsim = "≂";
    var eqslantgtr = "⪖";
    var eqslantless = "⪕";
    var Equal = "⩵";
    var equals = "=";
    var EqualTilde = "≂";
    var equest = "≟";
    var Equilibrium = "⇌";
    var equiv = "≡";
    var equivDD = "⩸";
    var eqvparsl = "⧥";
    var erarr = "⥱";
    var erDot = "≓";
    var escr = "ℯ";
    var Escr = "ℰ";
    var esdot = "≐";
    var Esim = "⩳";
    var esim = "≂";
    var Eta = "Η";
    var eta = "η";
    var ETH = "Ð";
    var eth = "ð";
    var Euml = "Ë";
    var euml = "ë";
    var euro = "€";
    var excl = "!";
    var exist = "∃";
    var Exists = "∃";
    var expectation = "ℰ";
    var exponentiale = "ⅇ";
    var ExponentialE = "ⅇ";
    var fallingdotseq = "≒";
    var Fcy = "Ф";
    var fcy = "ф";
    var female = "♀";
    var ffilig = "ﬃ";
    var fflig = "ﬀ";
    var ffllig = "ﬄ";
    var Ffr = "𝔉";
    var ffr = "𝔣";
    var filig = "ﬁ";
    var FilledSmallSquare = "◼";
    var FilledVerySmallSquare = "▪";
    var fjlig = "fj";
    var flat = "♭";
    var fllig = "ﬂ";
    var fltns = "▱";
    var fnof = "ƒ";
    var Fopf = "𝔽";
    var fopf = "𝕗";
    var forall = "∀";
    var ForAll = "∀";
    var fork = "⋔";
    var forkv = "⫙";
    var Fouriertrf = "ℱ";
    var fpartint = "⨍";
    var frac12 = "½";
    var frac13 = "⅓";
    var frac14 = "¼";
    var frac15 = "⅕";
    var frac16 = "⅙";
    var frac18 = "⅛";
    var frac23 = "⅔";
    var frac25 = "⅖";
    var frac34 = "¾";
    var frac35 = "⅗";
    var frac38 = "⅜";
    var frac45 = "⅘";
    var frac56 = "⅚";
    var frac58 = "⅝";
    var frac78 = "⅞";
    var frasl = "⁄";
    var frown = "⌢";
    var fscr = "𝒻";
    var Fscr = "ℱ";
    var gacute = "ǵ";
    var Gamma = "Γ";
    var gamma = "γ";
    var Gammad = "Ϝ";
    var gammad = "ϝ";
    var gap = "⪆";
    var Gbreve = "Ğ";
    var gbreve = "ğ";
    var Gcedil = "Ģ";
    var Gcirc = "Ĝ";
    var gcirc = "ĝ";
    var Gcy = "Г";
    var gcy = "г";
    var Gdot = "Ġ";
    var gdot = "ġ";
    var ge = "≥";
    var gE = "≧";
    var gEl = "⪌";
    var gel = "⋛";
    var geq = "≥";
    var geqq = "≧";
    var geqslant = "⩾";
    var gescc = "⪩";
    var ges = "⩾";
    var gesdot = "⪀";
    var gesdoto = "⪂";
    var gesdotol = "⪄";
    var gesl = "⋛︀";
    var gesles = "⪔";
    var Gfr = "𝔊";
    var gfr = "𝔤";
    var gg = "≫";
    var Gg = "⋙";
    var ggg = "⋙";
    var gimel = "ℷ";
    var GJcy = "Ѓ";
    var gjcy = "ѓ";
    var gla = "⪥";
    var gl = "≷";
    var glE = "⪒";
    var glj = "⪤";
    var gnap = "⪊";
    var gnapprox = "⪊";
    var gne = "⪈";
    var gnE = "≩";
    var gneq = "⪈";
    var gneqq = "≩";
    var gnsim = "⋧";
    var Gopf = "𝔾";
    var gopf = "𝕘";
    var grave = "`";
    var GreaterEqual = "≥";
    var GreaterEqualLess = "⋛";
    var GreaterFullEqual = "≧";
    var GreaterGreater = "⪢";
    var GreaterLess = "≷";
    var GreaterSlantEqual = "⩾";
    var GreaterTilde = "≳";
    var Gscr = "𝒢";
    var gscr = "ℊ";
    var gsim = "≳";
    var gsime = "⪎";
    var gsiml = "⪐";
    var gtcc = "⪧";
    var gtcir = "⩺";
    var gt = ">";
    var GT = ">";
    var Gt = "≫";
    var gtdot = "⋗";
    var gtlPar = "⦕";
    var gtquest = "⩼";
    var gtrapprox = "⪆";
    var gtrarr = "⥸";
    var gtrdot = "⋗";
    var gtreqless = "⋛";
    var gtreqqless = "⪌";
    var gtrless = "≷";
    var gtrsim = "≳";
    var gvertneqq = "≩︀";
    var gvnE = "≩︀";
    var Hacek = "ˇ";
    var hairsp = " ";
    var half = "½";
    var hamilt = "ℋ";
    var HARDcy = "Ъ";
    var hardcy = "ъ";
    var harrcir = "⥈";
    var harr = "↔";
    var hArr = "⇔";
    var harrw = "↭";
    var Hat = "^";
    var hbar = "ℏ";
    var Hcirc = "Ĥ";
    var hcirc = "ĥ";
    var hearts = "♥";
    var heartsuit = "♥";
    var hellip = "…";
    var hercon = "⊹";
    var hfr = "𝔥";
    var Hfr = "ℌ";
    var HilbertSpace = "ℋ";
    var hksearow = "⤥";
    var hkswarow = "⤦";
    var hoarr = "⇿";
    var homtht = "∻";
    var hookleftarrow = "↩";
    var hookrightarrow = "↪";
    var hopf = "𝕙";
    var Hopf = "ℍ";
    var horbar = "―";
    var HorizontalLine = "─";
    var hscr = "𝒽";
    var Hscr = "ℋ";
    var hslash = "ℏ";
    var Hstrok = "Ħ";
    var hstrok = "ħ";
    var HumpDownHump = "≎";
    var HumpEqual = "≏";
    var hybull = "⁃";
    var hyphen = "‐";
    var Iacute = "Í";
    var iacute = "í";
    var ic = "⁣";
    var Icirc = "Î";
    var icirc = "î";
    var Icy = "И";
    var icy = "и";
    var Idot = "İ";
    var IEcy = "Е";
    var iecy = "е";
    var iexcl = "¡";
    var iff = "⇔";
    var ifr = "𝔦";
    var Ifr = "ℑ";
    var Igrave = "Ì";
    var igrave = "ì";
    var ii = "ⅈ";
    var iiiint = "⨌";
    var iiint = "∭";
    var iinfin = "⧜";
    var iiota = "℩";
    var IJlig = "Ĳ";
    var ijlig = "ĳ";
    var Imacr = "Ī";
    var imacr = "ī";
    var image = "ℑ";
    var ImaginaryI = "ⅈ";
    var imagline = "ℐ";
    var imagpart = "ℑ";
    var imath = "ı";
    var Im = "ℑ";
    var imof = "⊷";
    var imped = "Ƶ";
    var Implies = "⇒";
    var incare = "℅";
    var infin = "∞";
    var infintie = "⧝";
    var inodot = "ı";
    var intcal = "⊺";
    var int = "∫";
    var Int = "∬";
    var integers = "ℤ";
    var Integral = "∫";
    var intercal = "⊺";
    var Intersection = "⋂";
    var intlarhk = "⨗";
    var intprod = "⨼";
    var InvisibleComma = "⁣";
    var InvisibleTimes = "⁢";
    var IOcy = "Ё";
    var iocy = "ё";
    var Iogon = "Į";
    var iogon = "į";
    var Iopf = "𝕀";
    var iopf = "𝕚";
    var Iota = "Ι";
    var iota = "ι";
    var iprod = "⨼";
    var iquest = "¿";
    var iscr = "𝒾";
    var Iscr = "ℐ";
    var isin = "∈";
    var isindot = "⋵";
    var isinE = "⋹";
    var isins = "⋴";
    var isinsv = "⋳";
    var isinv = "∈";
    var it = "⁢";
    var Itilde = "Ĩ";
    var itilde = "ĩ";
    var Iukcy = "І";
    var iukcy = "і";
    var Iuml = "Ï";
    var iuml = "ï";
    var Jcirc = "Ĵ";
    var jcirc = "ĵ";
    var Jcy = "Й";
    var jcy = "й";
    var Jfr = "𝔍";
    var jfr = "𝔧";
    var jmath = "ȷ";
    var Jopf = "𝕁";
    var jopf = "𝕛";
    var Jscr = "𝒥";
    var jscr = "𝒿";
    var Jsercy = "Ј";
    var jsercy = "ј";
    var Jukcy = "Є";
    var jukcy = "є";
    var Kappa = "Κ";
    var kappa = "κ";
    var kappav = "ϰ";
    var Kcedil = "Ķ";
    var kcedil = "ķ";
    var Kcy = "К";
    var kcy = "к";
    var Kfr = "𝔎";
    var kfr = "𝔨";
    var kgreen = "ĸ";
    var KHcy = "Х";
    var khcy = "х";
    var KJcy = "Ќ";
    var kjcy = "ќ";
    var Kopf = "𝕂";
    var kopf = "𝕜";
    var Kscr = "𝒦";
    var kscr = "𝓀";
    var lAarr = "⇚";
    var Lacute = "Ĺ";
    var lacute = "ĺ";
    var laemptyv = "⦴";
    var lagran = "ℒ";
    var Lambda = "Λ";
    var lambda = "λ";
    var lang = "⟨";
    var Lang = "⟪";
    var langd = "⦑";
    var langle = "⟨";
    var lap = "⪅";
    var Laplacetrf = "ℒ";
    var laquo = "«";
    var larrb = "⇤";
    var larrbfs = "⤟";
    var larr = "←";
    var Larr = "↞";
    var lArr = "⇐";
    var larrfs = "⤝";
    var larrhk = "↩";
    var larrlp = "↫";
    var larrpl = "⤹";
    var larrsim = "⥳";
    var larrtl = "↢";
    var latail = "⤙";
    var lAtail = "⤛";
    var lat = "⪫";
    var late = "⪭";
    var lates = "⪭︀";
    var lbarr = "⤌";
    var lBarr = "⤎";
    var lbbrk = "❲";
    var lbrace = "{";
    var lbrack = "[";
    var lbrke = "⦋";
    var lbrksld = "⦏";
    var lbrkslu = "⦍";
    var Lcaron = "Ľ";
    var lcaron = "ľ";
    var Lcedil = "Ļ";
    var lcedil = "ļ";
    var lceil = "⌈";
    var lcub = "{";
    var Lcy = "Л";
    var lcy = "л";
    var ldca = "⤶";
    var ldquo = "“";
    var ldquor = "„";
    var ldrdhar = "⥧";
    var ldrushar = "⥋";
    var ldsh = "↲";
    var le = "≤";
    var lE = "≦";
    var LeftAngleBracket = "⟨";
    var LeftArrowBar = "⇤";
    var leftarrow = "←";
    var LeftArrow = "←";
    var Leftarrow = "⇐";
    var LeftArrowRightArrow = "⇆";
    var leftarrowtail = "↢";
    var LeftCeiling = "⌈";
    var LeftDoubleBracket = "⟦";
    var LeftDownTeeVector = "⥡";
    var LeftDownVectorBar = "⥙";
    var LeftDownVector = "⇃";
    var LeftFloor = "⌊";
    var leftharpoondown = "↽";
    var leftharpoonup = "↼";
    var leftleftarrows = "⇇";
    var leftrightarrow = "↔";
    var LeftRightArrow = "↔";
    var Leftrightarrow = "⇔";
    var leftrightarrows = "⇆";
    var leftrightharpoons = "⇋";
    var leftrightsquigarrow = "↭";
    var LeftRightVector = "⥎";
    var LeftTeeArrow = "↤";
    var LeftTee = "⊣";
    var LeftTeeVector = "⥚";
    var leftthreetimes = "⋋";
    var LeftTriangleBar = "⧏";
    var LeftTriangle = "⊲";
    var LeftTriangleEqual = "⊴";
    var LeftUpDownVector = "⥑";
    var LeftUpTeeVector = "⥠";
    var LeftUpVectorBar = "⥘";
    var LeftUpVector = "↿";
    var LeftVectorBar = "⥒";
    var LeftVector = "↼";
    var lEg = "⪋";
    var leg = "⋚";
    var leq = "≤";
    var leqq = "≦";
    var leqslant = "⩽";
    var lescc = "⪨";
    var les = "⩽";
    var lesdot = "⩿";
    var lesdoto = "⪁";
    var lesdotor = "⪃";
    var lesg = "⋚︀";
    var lesges = "⪓";
    var lessapprox = "⪅";
    var lessdot = "⋖";
    var lesseqgtr = "⋚";
    var lesseqqgtr = "⪋";
    var LessEqualGreater = "⋚";
    var LessFullEqual = "≦";
    var LessGreater = "≶";
    var lessgtr = "≶";
    var LessLess = "⪡";
    var lesssim = "≲";
    var LessSlantEqual = "⩽";
    var LessTilde = "≲";
    var lfisht = "⥼";
    var lfloor = "⌊";
    var Lfr = "𝔏";
    var lfr = "𝔩";
    var lg = "≶";
    var lgE = "⪑";
    var lHar = "⥢";
    var lhard = "↽";
    var lharu = "↼";
    var lharul = "⥪";
    var lhblk = "▄";
    var LJcy = "Љ";
    var ljcy = "љ";
    var llarr = "⇇";
    var ll = "≪";
    var Ll = "⋘";
    var llcorner = "⌞";
    var Lleftarrow = "⇚";
    var llhard = "⥫";
    var lltri = "◺";
    var Lmidot = "Ŀ";
    var lmidot = "ŀ";
    var lmoustache = "⎰";
    var lmoust = "⎰";
    var lnap = "⪉";
    var lnapprox = "⪉";
    var lne = "⪇";
    var lnE = "≨";
    var lneq = "⪇";
    var lneqq = "≨";
    var lnsim = "⋦";
    var loang = "⟬";
    var loarr = "⇽";
    var lobrk = "⟦";
    var longleftarrow = "⟵";
    var LongLeftArrow = "⟵";
    var Longleftarrow = "⟸";
    var longleftrightarrow = "⟷";
    var LongLeftRightArrow = "⟷";
    var Longleftrightarrow = "⟺";
    var longmapsto = "⟼";
    var longrightarrow = "⟶";
    var LongRightArrow = "⟶";
    var Longrightarrow = "⟹";
    var looparrowleft = "↫";
    var looparrowright = "↬";
    var lopar = "⦅";
    var Lopf = "𝕃";
    var lopf = "𝕝";
    var loplus = "⨭";
    var lotimes = "⨴";
    var lowast = "∗";
    var lowbar = "_";
    var LowerLeftArrow = "↙";
    var LowerRightArrow = "↘";
    var loz = "◊";
    var lozenge = "◊";
    var lozf = "⧫";
    var lpar = "(";
    var lparlt = "⦓";
    var lrarr = "⇆";
    var lrcorner = "⌟";
    var lrhar = "⇋";
    var lrhard = "⥭";
    var lrm = "‎";
    var lrtri = "⊿";
    var lsaquo = "‹";
    var lscr = "𝓁";
    var Lscr = "ℒ";
    var lsh = "↰";
    var Lsh = "↰";
    var lsim = "≲";
    var lsime = "⪍";
    var lsimg = "⪏";
    var lsqb = "[";
    var lsquo = "‘";
    var lsquor = "‚";
    var Lstrok = "Ł";
    var lstrok = "ł";
    var ltcc = "⪦";
    var ltcir = "⩹";
    var lt = "<";
    var LT = "<";
    var Lt = "≪";
    var ltdot = "⋖";
    var lthree = "⋋";
    var ltimes = "⋉";
    var ltlarr = "⥶";
    var ltquest = "⩻";
    var ltri = "◃";
    var ltrie = "⊴";
    var ltrif = "◂";
    var ltrPar = "⦖";
    var lurdshar = "⥊";
    var luruhar = "⥦";
    var lvertneqq = "≨︀";
    var lvnE = "≨︀";
    var macr = "¯";
    var male = "♂";
    var malt = "✠";
    var maltese = "✠";
    var map = "↦";
    var mapsto = "↦";
    var mapstodown = "↧";
    var mapstoleft = "↤";
    var mapstoup = "↥";
    var marker = "▮";
    var mcomma = "⨩";
    var Mcy = "М";
    var mcy = "м";
    var mdash = "—";
    var mDDot = "∺";
    var measuredangle = "∡";
    var MediumSpace = " ";
    var Mellintrf = "ℳ";
    var Mfr = "𝔐";
    var mfr = "𝔪";
    var mho = "℧";
    var micro = "µ";
    var midast = "*";
    var midcir = "⫰";
    var mid = "∣";
    var middot = "·";
    var minusb = "⊟";
    var minus = "−";
    var minusd = "∸";
    var minusdu = "⨪";
    var MinusPlus = "∓";
    var mlcp = "⫛";
    var mldr = "…";
    var mnplus = "∓";
    var models = "⊧";
    var Mopf = "𝕄";
    var mopf = "𝕞";
    var mp = "∓";
    var mscr = "𝓂";
    var Mscr = "ℳ";
    var mstpos = "∾";
    var Mu = "Μ";
    var mu = "μ";
    var multimap = "⊸";
    var mumap = "⊸";
    var nabla = "∇";
    var Nacute = "Ń";
    var nacute = "ń";
    var nang = "∠⃒";
    var nap = "≉";
    var napE = "⩰̸";
    var napid = "≋̸";
    var napos = "ŉ";
    var napprox = "≉";
    var natural = "♮";
    var naturals = "ℕ";
    var natur = "♮";
    var nbsp = " ";
    var nbump = "≎̸";
    var nbumpe = "≏̸";
    var ncap = "⩃";
    var Ncaron = "Ň";
    var ncaron = "ň";
    var Ncedil = "Ņ";
    var ncedil = "ņ";
    var ncong = "≇";
    var ncongdot = "⩭̸";
    var ncup = "⩂";
    var Ncy = "Н";
    var ncy = "н";
    var ndash = "–";
    var nearhk = "⤤";
    var nearr = "↗";
    var neArr = "⇗";
    var nearrow = "↗";
    var ne = "≠";
    var nedot = "≐̸";
    var NegativeMediumSpace = "​";
    var NegativeThickSpace = "​";
    var NegativeThinSpace = "​";
    var NegativeVeryThinSpace = "​";
    var nequiv = "≢";
    var nesear = "⤨";
    var nesim = "≂̸";
    var NestedGreaterGreater = "≫";
    var NestedLessLess = "≪";
    var NewLine = "\n";
    var nexist = "∄";
    var nexists = "∄";
    var Nfr = "𝔑";
    var nfr = "𝔫";
    var ngE = "≧̸";
    var nge = "≱";
    var ngeq = "≱";
    var ngeqq = "≧̸";
    var ngeqslant = "⩾̸";
    var nges = "⩾̸";
    var nGg = "⋙̸";
    var ngsim = "≵";
    var nGt = "≫⃒";
    var ngt = "≯";
    var ngtr = "≯";
    var nGtv = "≫̸";
    var nharr = "↮";
    var nhArr = "⇎";
    var nhpar = "⫲";
    var ni = "∋";
    var nis = "⋼";
    var nisd = "⋺";
    var niv = "∋";
    var NJcy = "Њ";
    var njcy = "њ";
    var nlarr = "↚";
    var nlArr = "⇍";
    var nldr = "‥";
    var nlE = "≦̸";
    var nle = "≰";
    var nleftarrow = "↚";
    var nLeftarrow = "⇍";
    var nleftrightarrow = "↮";
    var nLeftrightarrow = "⇎";
    var nleq = "≰";
    var nleqq = "≦̸";
    var nleqslant = "⩽̸";
    var nles = "⩽̸";
    var nless = "≮";
    var nLl = "⋘̸";
    var nlsim = "≴";
    var nLt = "≪⃒";
    var nlt = "≮";
    var nltri = "⋪";
    var nltrie = "⋬";
    var nLtv = "≪̸";
    var nmid = "∤";
    var NoBreak = "⁠";
    var NonBreakingSpace = " ";
    var nopf = "𝕟";
    var Nopf = "ℕ";
    var Not = "⫬";
    var not = "¬";
    var NotCongruent = "≢";
    var NotCupCap = "≭";
    var NotDoubleVerticalBar = "∦";
    var NotElement = "∉";
    var NotEqual = "≠";
    var NotEqualTilde = "≂̸";
    var NotExists = "∄";
    var NotGreater = "≯";
    var NotGreaterEqual = "≱";
    var NotGreaterFullEqual = "≧̸";
    var NotGreaterGreater = "≫̸";
    var NotGreaterLess = "≹";
    var NotGreaterSlantEqual = "⩾̸";
    var NotGreaterTilde = "≵";
    var NotHumpDownHump = "≎̸";
    var NotHumpEqual = "≏̸";
    var notin = "∉";
    var notindot = "⋵̸";
    var notinE = "⋹̸";
    var notinva = "∉";
    var notinvb = "⋷";
    var notinvc = "⋶";
    var NotLeftTriangleBar = "⧏̸";
    var NotLeftTriangle = "⋪";
    var NotLeftTriangleEqual = "⋬";
    var NotLess = "≮";
    var NotLessEqual = "≰";
    var NotLessGreater = "≸";
    var NotLessLess = "≪̸";
    var NotLessSlantEqual = "⩽̸";
    var NotLessTilde = "≴";
    var NotNestedGreaterGreater = "⪢̸";
    var NotNestedLessLess = "⪡̸";
    var notni = "∌";
    var notniva = "∌";
    var notnivb = "⋾";
    var notnivc = "⋽";
    var NotPrecedes = "⊀";
    var NotPrecedesEqual = "⪯̸";
    var NotPrecedesSlantEqual = "⋠";
    var NotReverseElement = "∌";
    var NotRightTriangleBar = "⧐̸";
    var NotRightTriangle = "⋫";
    var NotRightTriangleEqual = "⋭";
    var NotSquareSubset = "⊏̸";
    var NotSquareSubsetEqual = "⋢";
    var NotSquareSuperset = "⊐̸";
    var NotSquareSupersetEqual = "⋣";
    var NotSubset = "⊂⃒";
    var NotSubsetEqual = "⊈";
    var NotSucceeds = "⊁";
    var NotSucceedsEqual = "⪰̸";
    var NotSucceedsSlantEqual = "⋡";
    var NotSucceedsTilde = "≿̸";
    var NotSuperset = "⊃⃒";
    var NotSupersetEqual = "⊉";
    var NotTilde = "≁";
    var NotTildeEqual = "≄";
    var NotTildeFullEqual = "≇";
    var NotTildeTilde = "≉";
    var NotVerticalBar = "∤";
    var nparallel = "∦";
    var npar = "∦";
    var nparsl = "⫽⃥";
    var npart = "∂̸";
    var npolint = "⨔";
    var npr = "⊀";
    var nprcue = "⋠";
    var nprec = "⊀";
    var npreceq = "⪯̸";
    var npre = "⪯̸";
    var nrarrc = "⤳̸";
    var nrarr = "↛";
    var nrArr = "⇏";
    var nrarrw = "↝̸";
    var nrightarrow = "↛";
    var nRightarrow = "⇏";
    var nrtri = "⋫";
    var nrtrie = "⋭";
    var nsc = "⊁";
    var nsccue = "⋡";
    var nsce = "⪰̸";
    var Nscr = "𝒩";
    var nscr = "𝓃";
    var nshortmid = "∤";
    var nshortparallel = "∦";
    var nsim = "≁";
    var nsime = "≄";
    var nsimeq = "≄";
    var nsmid = "∤";
    var nspar = "∦";
    var nsqsube = "⋢";
    var nsqsupe = "⋣";
    var nsub = "⊄";
    var nsubE = "⫅̸";
    var nsube = "⊈";
    var nsubset = "⊂⃒";
    var nsubseteq = "⊈";
    var nsubseteqq = "⫅̸";
    var nsucc = "⊁";
    var nsucceq = "⪰̸";
    var nsup = "⊅";
    var nsupE = "⫆̸";
    var nsupe = "⊉";
    var nsupset = "⊃⃒";
    var nsupseteq = "⊉";
    var nsupseteqq = "⫆̸";
    var ntgl = "≹";
    var Ntilde = "Ñ";
    var ntilde = "ñ";
    var ntlg = "≸";
    var ntriangleleft = "⋪";
    var ntrianglelefteq = "⋬";
    var ntriangleright = "⋫";
    var ntrianglerighteq = "⋭";
    var Nu = "Ν";
    var nu = "ν";
    var num = "#";
    var numero = "№";
    var numsp = " ";
    var nvap = "≍⃒";
    var nvdash = "⊬";
    var nvDash = "⊭";
    var nVdash = "⊮";
    var nVDash = "⊯";
    var nvge = "≥⃒";
    var nvgt = ">⃒";
    var nvHarr = "⤄";
    var nvinfin = "⧞";
    var nvlArr = "⤂";
    var nvle = "≤⃒";
    var nvlt = "<⃒";
    var nvltrie = "⊴⃒";
    var nvrArr = "⤃";
    var nvrtrie = "⊵⃒";
    var nvsim = "∼⃒";
    var nwarhk = "⤣";
    var nwarr = "↖";
    var nwArr = "⇖";
    var nwarrow = "↖";
    var nwnear = "⤧";
    var Oacute = "Ó";
    var oacute = "ó";
    var oast = "⊛";
    var Ocirc = "Ô";
    var ocirc = "ô";
    var ocir = "⊚";
    var Ocy = "О";
    var ocy = "о";
    var odash = "⊝";
    var Odblac = "Ő";
    var odblac = "ő";
    var odiv = "⨸";
    var odot = "⊙";
    var odsold = "⦼";
    var OElig = "Œ";
    var oelig = "œ";
    var ofcir = "⦿";
    var Ofr = "𝔒";
    var ofr = "𝔬";
    var ogon = "˛";
    var Ograve = "Ò";
    var ograve = "ò";
    var ogt = "⧁";
    var ohbar = "⦵";
    var ohm = "Ω";
    var oint = "∮";
    var olarr = "↺";
    var olcir = "⦾";
    var olcross = "⦻";
    var oline = "‾";
    var olt = "⧀";
    var Omacr = "Ō";
    var omacr = "ō";
    var Omega = "Ω";
    var omega = "ω";
    var Omicron = "Ο";
    var omicron = "ο";
    var omid = "⦶";
    var ominus = "⊖";
    var Oopf = "𝕆";
    var oopf = "𝕠";
    var opar = "⦷";
    var OpenCurlyDoubleQuote = "“";
    var OpenCurlyQuote = "‘";
    var operp = "⦹";
    var oplus = "⊕";
    var orarr = "↻";
    var Or = "⩔";
    var or = "∨";
    var ord = "⩝";
    var order = "ℴ";
    var orderof = "ℴ";
    var ordf = "ª";
    var ordm = "º";
    var origof = "⊶";
    var oror = "⩖";
    var orslope = "⩗";
    var orv = "⩛";
    var oS = "Ⓢ";
    var Oscr = "𝒪";
    var oscr = "ℴ";
    var Oslash = "Ø";
    var oslash = "ø";
    var osol = "⊘";
    var Otilde = "Õ";
    var otilde = "õ";
    var otimesas = "⨶";
    var Otimes = "⨷";
    var otimes = "⊗";
    var Ouml = "Ö";
    var ouml = "ö";
    var ovbar = "⌽";
    var OverBar = "‾";
    var OverBrace = "⏞";
    var OverBracket = "⎴";
    var OverParenthesis = "⏜";
    var para = "¶";
    var parallel = "∥";
    var par = "∥";
    var parsim = "⫳";
    var parsl = "⫽";
    var part = "∂";
    var PartialD = "∂";
    var Pcy = "П";
    var pcy = "п";
    var percnt = "%";
    var period = ".";
    var permil = "‰";
    var perp = "⊥";
    var pertenk = "‱";
    var Pfr = "𝔓";
    var pfr = "𝔭";
    var Phi = "Φ";
    var phi = "φ";
    var phiv = "ϕ";
    var phmmat = "ℳ";
    var phone = "☎";
    var Pi = "Π";
    var pi = "π";
    var pitchfork = "⋔";
    var piv = "ϖ";
    var planck = "ℏ";
    var planckh = "ℎ";
    var plankv = "ℏ";
    var plusacir = "⨣";
    var plusb = "⊞";
    var pluscir = "⨢";
    var plus = "+";
    var plusdo = "∔";
    var plusdu = "⨥";
    var pluse = "⩲";
    var PlusMinus = "±";
    var plusmn = "±";
    var plussim = "⨦";
    var plustwo = "⨧";
    var pm = "±";
    var Poincareplane = "ℌ";
    var pointint = "⨕";
    var popf = "𝕡";
    var Popf = "ℙ";
    var pound = "£";
    var prap = "⪷";
    var Pr = "⪻";
    var pr = "≺";
    var prcue = "≼";
    var precapprox = "⪷";
    var prec = "≺";
    var preccurlyeq = "≼";
    var Precedes = "≺";
    var PrecedesEqual = "⪯";
    var PrecedesSlantEqual = "≼";
    var PrecedesTilde = "≾";
    var preceq = "⪯";
    var precnapprox = "⪹";
    var precneqq = "⪵";
    var precnsim = "⋨";
    var pre = "⪯";
    var prE = "⪳";
    var precsim = "≾";
    var prime = "′";
    var Prime = "″";
    var primes = "ℙ";
    var prnap = "⪹";
    var prnE = "⪵";
    var prnsim = "⋨";
    var prod = "∏";
    var Product = "∏";
    var profalar = "⌮";
    var profline = "⌒";
    var profsurf = "⌓";
    var prop = "∝";
    var Proportional = "∝";
    var Proportion = "∷";
    var propto = "∝";
    var prsim = "≾";
    var prurel = "⊰";
    var Pscr = "𝒫";
    var pscr = "𝓅";
    var Psi = "Ψ";
    var psi = "ψ";
    var puncsp = " ";
    var Qfr = "𝔔";
    var qfr = "𝔮";
    var qint = "⨌";
    var qopf = "𝕢";
    var Qopf = "ℚ";
    var qprime = "⁗";
    var Qscr = "𝒬";
    var qscr = "𝓆";
    var quaternions = "ℍ";
    var quatint = "⨖";
    var quest = "?";
    var questeq = "≟";
    var quot = "\"";
    var QUOT = "\"";
    var rAarr = "⇛";
    var race = "∽̱";
    var Racute = "Ŕ";
    var racute = "ŕ";
    var radic = "√";
    var raemptyv = "⦳";
    var rang = "⟩";
    var Rang = "⟫";
    var rangd = "⦒";
    var range = "⦥";
    var rangle = "⟩";
    var raquo = "»";
    var rarrap = "⥵";
    var rarrb = "⇥";
    var rarrbfs = "⤠";
    var rarrc = "⤳";
    var rarr = "→";
    var Rarr = "↠";
    var rArr = "⇒";
    var rarrfs = "⤞";
    var rarrhk = "↪";
    var rarrlp = "↬";
    var rarrpl = "⥅";
    var rarrsim = "⥴";
    var Rarrtl = "⤖";
    var rarrtl = "↣";
    var rarrw = "↝";
    var ratail = "⤚";
    var rAtail = "⤜";
    var ratio = "∶";
    var rationals = "ℚ";
    var rbarr = "⤍";
    var rBarr = "⤏";
    var RBarr = "⤐";
    var rbbrk = "❳";
    var rbrace = "}";
    var rbrack = "]";
    var rbrke = "⦌";
    var rbrksld = "⦎";
    var rbrkslu = "⦐";
    var Rcaron = "Ř";
    var rcaron = "ř";
    var Rcedil = "Ŗ";
    var rcedil = "ŗ";
    var rceil = "⌉";
    var rcub = "}";
    var Rcy = "Р";
    var rcy = "р";
    var rdca = "⤷";
    var rdldhar = "⥩";
    var rdquo = "”";
    var rdquor = "”";
    var rdsh = "↳";
    var real = "ℜ";
    var realine = "ℛ";
    var realpart = "ℜ";
    var reals = "ℝ";
    var Re = "ℜ";
    var rect = "▭";
    var reg = "®";
    var REG = "®";
    var ReverseElement = "∋";
    var ReverseEquilibrium = "⇋";
    var ReverseUpEquilibrium = "⥯";
    var rfisht = "⥽";
    var rfloor = "⌋";
    var rfr = "𝔯";
    var Rfr = "ℜ";
    var rHar = "⥤";
    var rhard = "⇁";
    var rharu = "⇀";
    var rharul = "⥬";
    var Rho = "Ρ";
    var rho = "ρ";
    var rhov = "ϱ";
    var RightAngleBracket = "⟩";
    var RightArrowBar = "⇥";
    var rightarrow = "→";
    var RightArrow = "→";
    var Rightarrow = "⇒";
    var RightArrowLeftArrow = "⇄";
    var rightarrowtail = "↣";
    var RightCeiling = "⌉";
    var RightDoubleBracket = "⟧";
    var RightDownTeeVector = "⥝";
    var RightDownVectorBar = "⥕";
    var RightDownVector = "⇂";
    var RightFloor = "⌋";
    var rightharpoondown = "⇁";
    var rightharpoonup = "⇀";
    var rightleftarrows = "⇄";
    var rightleftharpoons = "⇌";
    var rightrightarrows = "⇉";
    var rightsquigarrow = "↝";
    var RightTeeArrow = "↦";
    var RightTee = "⊢";
    var RightTeeVector = "⥛";
    var rightthreetimes = "⋌";
    var RightTriangleBar = "⧐";
    var RightTriangle = "⊳";
    var RightTriangleEqual = "⊵";
    var RightUpDownVector = "⥏";
    var RightUpTeeVector = "⥜";
    var RightUpVectorBar = "⥔";
    var RightUpVector = "↾";
    var RightVectorBar = "⥓";
    var RightVector = "⇀";
    var ring = "˚";
    var risingdotseq = "≓";
    var rlarr = "⇄";
    var rlhar = "⇌";
    var rlm = "‏";
    var rmoustache = "⎱";
    var rmoust = "⎱";
    var rnmid = "⫮";
    var roang = "⟭";
    var roarr = "⇾";
    var robrk = "⟧";
    var ropar = "⦆";
    var ropf = "𝕣";
    var Ropf = "ℝ";
    var roplus = "⨮";
    var rotimes = "⨵";
    var RoundImplies = "⥰";
    var rpar = ")";
    var rpargt = "⦔";
    var rppolint = "⨒";
    var rrarr = "⇉";
    var Rrightarrow = "⇛";
    var rsaquo = "›";
    var rscr = "𝓇";
    var Rscr = "ℛ";
    var rsh = "↱";
    var Rsh = "↱";
    var rsqb = "]";
    var rsquo = "’";
    var rsquor = "’";
    var rthree = "⋌";
    var rtimes = "⋊";
    var rtri = "▹";
    var rtrie = "⊵";
    var rtrif = "▸";
    var rtriltri = "⧎";
    var RuleDelayed = "⧴";
    var ruluhar = "⥨";
    var rx = "℞";
    var Sacute = "Ś";
    var sacute = "ś";
    var sbquo = "‚";
    var scap = "⪸";
    var Scaron = "Š";
    var scaron = "š";
    var Sc = "⪼";
    var sc = "≻";
    var sccue = "≽";
    var sce = "⪰";
    var scE = "⪴";
    var Scedil = "Ş";
    var scedil = "ş";
    var Scirc = "Ŝ";
    var scirc = "ŝ";
    var scnap = "⪺";
    var scnE = "⪶";
    var scnsim = "⋩";
    var scpolint = "⨓";
    var scsim = "≿";
    var Scy = "С";
    var scy = "с";
    var sdotb = "⊡";
    var sdot = "⋅";
    var sdote = "⩦";
    var searhk = "⤥";
    var searr = "↘";
    var seArr = "⇘";
    var searrow = "↘";
    var sect = "§";
    var semi = ";";
    var seswar = "⤩";
    var setminus = "∖";
    var setmn = "∖";
    var sext = "✶";
    var Sfr = "𝔖";
    var sfr = "𝔰";
    var sfrown = "⌢";
    var sharp = "♯";
    var SHCHcy = "Щ";
    var shchcy = "щ";
    var SHcy = "Ш";
    var shcy = "ш";
    var ShortDownArrow = "↓";
    var ShortLeftArrow = "←";
    var shortmid = "∣";
    var shortparallel = "∥";
    var ShortRightArrow = "→";
    var ShortUpArrow = "↑";
    var shy = "­";
    var Sigma = "Σ";
    var sigma = "σ";
    var sigmaf = "ς";
    var sigmav = "ς";
    var sim = "∼";
    var simdot = "⩪";
    var sime = "≃";
    var simeq = "≃";
    var simg = "⪞";
    var simgE = "⪠";
    var siml = "⪝";
    var simlE = "⪟";
    var simne = "≆";
    var simplus = "⨤";
    var simrarr = "⥲";
    var slarr = "←";
    var SmallCircle = "∘";
    var smallsetminus = "∖";
    var smashp = "⨳";
    var smeparsl = "⧤";
    var smid = "∣";
    var smile = "⌣";
    var smt = "⪪";
    var smte = "⪬";
    var smtes = "⪬︀";
    var SOFTcy = "Ь";
    var softcy = "ь";
    var solbar = "⌿";
    var solb = "⧄";
    var sol = "/";
    var Sopf = "𝕊";
    var sopf = "𝕤";
    var spades = "♠";
    var spadesuit = "♠";
    var spar = "∥";
    var sqcap = "⊓";
    var sqcaps = "⊓︀";
    var sqcup = "⊔";
    var sqcups = "⊔︀";
    var Sqrt = "√";
    var sqsub = "⊏";
    var sqsube = "⊑";
    var sqsubset = "⊏";
    var sqsubseteq = "⊑";
    var sqsup = "⊐";
    var sqsupe = "⊒";
    var sqsupset = "⊐";
    var sqsupseteq = "⊒";
    var square = "□";
    var Square = "□";
    var SquareIntersection = "⊓";
    var SquareSubset = "⊏";
    var SquareSubsetEqual = "⊑";
    var SquareSuperset = "⊐";
    var SquareSupersetEqual = "⊒";
    var SquareUnion = "⊔";
    var squarf = "▪";
    var squ = "□";
    var squf = "▪";
    var srarr = "→";
    var Sscr = "𝒮";
    var sscr = "𝓈";
    var ssetmn = "∖";
    var ssmile = "⌣";
    var sstarf = "⋆";
    var Star = "⋆";
    var star = "☆";
    var starf = "★";
    var straightepsilon = "ϵ";
    var straightphi = "ϕ";
    var strns = "¯";
    var sub = "⊂";
    var Sub = "⋐";
    var subdot = "⪽";
    var subE = "⫅";
    var sube = "⊆";
    var subedot = "⫃";
    var submult = "⫁";
    var subnE = "⫋";
    var subne = "⊊";
    var subplus = "⪿";
    var subrarr = "⥹";
    var subset = "⊂";
    var Subset = "⋐";
    var subseteq = "⊆";
    var subseteqq = "⫅";
    var SubsetEqual = "⊆";
    var subsetneq = "⊊";
    var subsetneqq = "⫋";
    var subsim = "⫇";
    var subsub = "⫕";
    var subsup = "⫓";
    var succapprox = "⪸";
    var succ = "≻";
    var succcurlyeq = "≽";
    var Succeeds = "≻";
    var SucceedsEqual = "⪰";
    var SucceedsSlantEqual = "≽";
    var SucceedsTilde = "≿";
    var succeq = "⪰";
    var succnapprox = "⪺";
    var succneqq = "⪶";
    var succnsim = "⋩";
    var succsim = "≿";
    var SuchThat = "∋";
    var sum = "∑";
    var Sum = "∑";
    var sung = "♪";
    var sup1 = "¹";
    var sup2 = "²";
    var sup3 = "³";
    var sup = "⊃";
    var Sup = "⋑";
    var supdot = "⪾";
    var supdsub = "⫘";
    var supE = "⫆";
    var supe = "⊇";
    var supedot = "⫄";
    var Superset = "⊃";
    var SupersetEqual = "⊇";
    var suphsol = "⟉";
    var suphsub = "⫗";
    var suplarr = "⥻";
    var supmult = "⫂";
    var supnE = "⫌";
    var supne = "⊋";
    var supplus = "⫀";
    var supset = "⊃";
    var Supset = "⋑";
    var supseteq = "⊇";
    var supseteqq = "⫆";
    var supsetneq = "⊋";
    var supsetneqq = "⫌";
    var supsim = "⫈";
    var supsub = "⫔";
    var supsup = "⫖";
    var swarhk = "⤦";
    var swarr = "↙";
    var swArr = "⇙";
    var swarrow = "↙";
    var swnwar = "⤪";
    var szlig = "ß";
    var Tab = "\t";
    var target = "⌖";
    var Tau = "Τ";
    var tau = "τ";
    var tbrk = "⎴";
    var Tcaron = "Ť";
    var tcaron = "ť";
    var Tcedil = "Ţ";
    var tcedil = "ţ";
    var Tcy = "Т";
    var tcy = "т";
    var tdot = "⃛";
    var telrec = "⌕";
    var Tfr = "𝔗";
    var tfr = "𝔱";
    var there4 = "∴";
    var therefore = "∴";
    var Therefore = "∴";
    var Theta = "Θ";
    var theta = "θ";
    var thetasym = "ϑ";
    var thetav = "ϑ";
    var thickapprox = "≈";
    var thicksim = "∼";
    var ThickSpace = "  ";
    var ThinSpace = " ";
    var thinsp = " ";
    var thkap = "≈";
    var thksim = "∼";
    var THORN = "Þ";
    var thorn = "þ";
    var tilde = "˜";
    var Tilde = "∼";
    var TildeEqual = "≃";
    var TildeFullEqual = "≅";
    var TildeTilde = "≈";
    var timesbar = "⨱";
    var timesb = "⊠";
    var times = "×";
    var timesd = "⨰";
    var tint = "∭";
    var toea = "⤨";
    var topbot = "⌶";
    var topcir = "⫱";
    var top = "⊤";
    var Topf = "𝕋";
    var topf = "𝕥";
    var topfork = "⫚";
    var tosa = "⤩";
    var tprime = "‴";
    var trade = "™";
    var TRADE = "™";
    var triangle = "▵";
    var triangledown = "▿";
    var triangleleft = "◃";
    var trianglelefteq = "⊴";
    var triangleq = "≜";
    var triangleright = "▹";
    var trianglerighteq = "⊵";
    var tridot = "◬";
    var trie = "≜";
    var triminus = "⨺";
    var TripleDot = "⃛";
    var triplus = "⨹";
    var trisb = "⧍";
    var tritime = "⨻";
    var trpezium = "⏢";
    var Tscr = "𝒯";
    var tscr = "𝓉";
    var TScy = "Ц";
    var tscy = "ц";
    var TSHcy = "Ћ";
    var tshcy = "ћ";
    var Tstrok = "Ŧ";
    var tstrok = "ŧ";
    var twixt = "≬";
    var twoheadleftarrow = "↞";
    var twoheadrightarrow = "↠";
    var Uacute = "Ú";
    var uacute = "ú";
    var uarr = "↑";
    var Uarr = "↟";
    var uArr = "⇑";
    var Uarrocir = "⥉";
    var Ubrcy = "Ў";
    var ubrcy = "ў";
    var Ubreve = "Ŭ";
    var ubreve = "ŭ";
    var Ucirc = "Û";
    var ucirc = "û";
    var Ucy = "У";
    var ucy = "у";
    var udarr = "⇅";
    var Udblac = "Ű";
    var udblac = "ű";
    var udhar = "⥮";
    var ufisht = "⥾";
    var Ufr = "𝔘";
    var ufr = "𝔲";
    var Ugrave = "Ù";
    var ugrave = "ù";
    var uHar = "⥣";
    var uharl = "↿";
    var uharr = "↾";
    var uhblk = "▀";
    var ulcorn = "⌜";
    var ulcorner = "⌜";
    var ulcrop = "⌏";
    var ultri = "◸";
    var Umacr = "Ū";
    var umacr = "ū";
    var uml = "¨";
    var UnderBar = "_";
    var UnderBrace = "⏟";
    var UnderBracket = "⎵";
    var UnderParenthesis = "⏝";
    var Union = "⋃";
    var UnionPlus = "⊎";
    var Uogon = "Ų";
    var uogon = "ų";
    var Uopf = "𝕌";
    var uopf = "𝕦";
    var UpArrowBar = "⤒";
    var uparrow = "↑";
    var UpArrow = "↑";
    var Uparrow = "⇑";
    var UpArrowDownArrow = "⇅";
    var updownarrow = "↕";
    var UpDownArrow = "↕";
    var Updownarrow = "⇕";
    var UpEquilibrium = "⥮";
    var upharpoonleft = "↿";
    var upharpoonright = "↾";
    var uplus = "⊎";
    var UpperLeftArrow = "↖";
    var UpperRightArrow = "↗";
    var upsi = "υ";
    var Upsi = "ϒ";
    var upsih = "ϒ";
    var Upsilon = "Υ";
    var upsilon = "υ";
    var UpTeeArrow = "↥";
    var UpTee = "⊥";
    var upuparrows = "⇈";
    var urcorn = "⌝";
    var urcorner = "⌝";
    var urcrop = "⌎";
    var Uring = "Ů";
    var uring = "ů";
    var urtri = "◹";
    var Uscr = "𝒰";
    var uscr = "𝓊";
    var utdot = "⋰";
    var Utilde = "Ũ";
    var utilde = "ũ";
    var utri = "▵";
    var utrif = "▴";
    var uuarr = "⇈";
    var Uuml = "Ü";
    var uuml = "ü";
    var uwangle = "⦧";
    var vangrt = "⦜";
    var varepsilon = "ϵ";
    var varkappa = "ϰ";
    var varnothing = "∅";
    var varphi = "ϕ";
    var varpi = "ϖ";
    var varpropto = "∝";
    var varr = "↕";
    var vArr = "⇕";
    var varrho = "ϱ";
    var varsigma = "ς";
    var varsubsetneq = "⊊︀";
    var varsubsetneqq = "⫋︀";
    var varsupsetneq = "⊋︀";
    var varsupsetneqq = "⫌︀";
    var vartheta = "ϑ";
    var vartriangleleft = "⊲";
    var vartriangleright = "⊳";
    var vBar = "⫨";
    var Vbar = "⫫";
    var vBarv = "⫩";
    var Vcy = "В";
    var vcy = "в";
    var vdash = "⊢";
    var vDash = "⊨";
    var Vdash = "⊩";
    var VDash = "⊫";
    var Vdashl = "⫦";
    var veebar = "⊻";
    var vee = "∨";
    var Vee = "⋁";
    var veeeq = "≚";
    var vellip = "⋮";
    var verbar = "|";
    var Verbar = "‖";
    var vert = "|";
    var Vert = "‖";
    var VerticalBar = "∣";
    var VerticalLine = "|";
    var VerticalSeparator = "❘";
    var VerticalTilde = "≀";
    var VeryThinSpace = " ";
    var Vfr = "𝔙";
    var vfr = "𝔳";
    var vltri = "⊲";
    var vnsub = "⊂⃒";
    var vnsup = "⊃⃒";
    var Vopf = "𝕍";
    var vopf = "𝕧";
    var vprop = "∝";
    var vrtri = "⊳";
    var Vscr = "𝒱";
    var vscr = "𝓋";
    var vsubnE = "⫋︀";
    var vsubne = "⊊︀";
    var vsupnE = "⫌︀";
    var vsupne = "⊋︀";
    var Vvdash = "⊪";
    var vzigzag = "⦚";
    var Wcirc = "Ŵ";
    var wcirc = "ŵ";
    var wedbar = "⩟";
    var wedge = "∧";
    var Wedge = "⋀";
    var wedgeq = "≙";
    var weierp = "℘";
    var Wfr = "𝔚";
    var wfr = "𝔴";
    var Wopf = "𝕎";
    var wopf = "𝕨";
    var wp = "℘";
    var wr = "≀";
    var wreath = "≀";
    var Wscr = "𝒲";
    var wscr = "𝓌";
    var xcap = "⋂";
    var xcirc = "◯";
    var xcup = "⋃";
    var xdtri = "▽";
    var Xfr = "𝔛";
    var xfr = "𝔵";
    var xharr = "⟷";
    var xhArr = "⟺";
    var Xi = "Ξ";
    var xi = "ξ";
    var xlarr = "⟵";
    var xlArr = "⟸";
    var xmap = "⟼";
    var xnis = "⋻";
    var xodot = "⨀";
    var Xopf = "𝕏";
    var xopf = "𝕩";
    var xoplus = "⨁";
    var xotime = "⨂";
    var xrarr = "⟶";
    var xrArr = "⟹";
    var Xscr = "𝒳";
    var xscr = "𝓍";
    var xsqcup = "⨆";
    var xuplus = "⨄";
    var xutri = "△";
    var xvee = "⋁";
    var xwedge = "⋀";
    var Yacute = "Ý";
    var yacute = "ý";
    var YAcy = "Я";
    var yacy = "я";
    var Ycirc = "Ŷ";
    var ycirc = "ŷ";
    var Ycy = "Ы";
    var ycy = "ы";
    var yen = "¥";
    var Yfr = "𝔜";
    var yfr = "𝔶";
    var YIcy = "Ї";
    var yicy = "ї";
    var Yopf = "𝕐";
    var yopf = "𝕪";
    var Yscr = "𝒴";
    var yscr = "𝓎";
    var YUcy = "Ю";
    var yucy = "ю";
    var yuml = "ÿ";
    var Yuml = "Ÿ";
    var Zacute = "Ź";
    var zacute = "ź";
    var Zcaron = "Ž";
    var zcaron = "ž";
    var Zcy = "З";
    var zcy = "з";
    var Zdot = "Ż";
    var zdot = "ż";
    var zeetrf = "ℨ";
    var ZeroWidthSpace = "​";
    var Zeta = "Ζ";
    var zeta = "ζ";
    var zfr = "𝔷";
    var Zfr = "ℨ";
    var ZHcy = "Ж";
    var zhcy = "ж";
    var zigrarr = "⇝";
    var zopf = "𝕫";
    var Zopf = "ℤ";
    var Zscr = "𝒵";
    var zscr = "𝓏";
    var zwj = "‍";
    var zwnj = "‌";
    var entities = {
    	Aacute: Aacute,
    	aacute: aacute,
    	Abreve: Abreve,
    	abreve: abreve,
    	ac: ac,
    	acd: acd,
    	acE: acE,
    	Acirc: Acirc,
    	acirc: acirc,
    	acute: acute,
    	Acy: Acy,
    	acy: acy,
    	AElig: AElig,
    	aelig: aelig,
    	af: af,
    	Afr: Afr,
    	afr: afr,
    	Agrave: Agrave,
    	agrave: agrave,
    	alefsym: alefsym,
    	aleph: aleph,
    	Alpha: Alpha,
    	alpha: alpha,
    	Amacr: Amacr,
    	amacr: amacr,
    	amalg: amalg,
    	amp: amp,
    	AMP: AMP,
    	andand: andand,
    	And: And,
    	and: and,
    	andd: andd,
    	andslope: andslope,
    	andv: andv,
    	ang: ang,
    	ange: ange,
    	angle: angle,
    	angmsdaa: angmsdaa,
    	angmsdab: angmsdab,
    	angmsdac: angmsdac,
    	angmsdad: angmsdad,
    	angmsdae: angmsdae,
    	angmsdaf: angmsdaf,
    	angmsdag: angmsdag,
    	angmsdah: angmsdah,
    	angmsd: angmsd,
    	angrt: angrt,
    	angrtvb: angrtvb,
    	angrtvbd: angrtvbd,
    	angsph: angsph,
    	angst: angst,
    	angzarr: angzarr,
    	Aogon: Aogon,
    	aogon: aogon,
    	Aopf: Aopf,
    	aopf: aopf,
    	apacir: apacir,
    	ap: ap,
    	apE: apE,
    	ape: ape,
    	apid: apid,
    	apos: apos,
    	ApplyFunction: ApplyFunction,
    	approx: approx,
    	approxeq: approxeq,
    	Aring: Aring,
    	aring: aring,
    	Ascr: Ascr,
    	ascr: ascr,
    	Assign: Assign,
    	ast: ast,
    	asymp: asymp,
    	asympeq: asympeq,
    	Atilde: Atilde,
    	atilde: atilde,
    	Auml: Auml,
    	auml: auml,
    	awconint: awconint,
    	awint: awint,
    	backcong: backcong,
    	backepsilon: backepsilon,
    	backprime: backprime,
    	backsim: backsim,
    	backsimeq: backsimeq,
    	Backslash: Backslash,
    	Barv: Barv,
    	barvee: barvee,
    	barwed: barwed,
    	Barwed: Barwed,
    	barwedge: barwedge,
    	bbrk: bbrk,
    	bbrktbrk: bbrktbrk,
    	bcong: bcong,
    	Bcy: Bcy,
    	bcy: bcy,
    	bdquo: bdquo,
    	becaus: becaus,
    	because: because,
    	Because: Because,
    	bemptyv: bemptyv,
    	bepsi: bepsi,
    	bernou: bernou,
    	Bernoullis: Bernoullis,
    	Beta: Beta,
    	beta: beta,
    	beth: beth,
    	between: between,
    	Bfr: Bfr,
    	bfr: bfr,
    	bigcap: bigcap,
    	bigcirc: bigcirc,
    	bigcup: bigcup,
    	bigodot: bigodot,
    	bigoplus: bigoplus,
    	bigotimes: bigotimes,
    	bigsqcup: bigsqcup,
    	bigstar: bigstar,
    	bigtriangledown: bigtriangledown,
    	bigtriangleup: bigtriangleup,
    	biguplus: biguplus,
    	bigvee: bigvee,
    	bigwedge: bigwedge,
    	bkarow: bkarow,
    	blacklozenge: blacklozenge,
    	blacksquare: blacksquare,
    	blacktriangle: blacktriangle,
    	blacktriangledown: blacktriangledown,
    	blacktriangleleft: blacktriangleleft,
    	blacktriangleright: blacktriangleright,
    	blank: blank,
    	blk12: blk12,
    	blk14: blk14,
    	blk34: blk34,
    	block: block,
    	bne: bne,
    	bnequiv: bnequiv,
    	bNot: bNot,
    	bnot: bnot,
    	Bopf: Bopf,
    	bopf: bopf,
    	bot: bot,
    	bottom: bottom,
    	bowtie: bowtie,
    	boxbox: boxbox,
    	boxdl: boxdl,
    	boxdL: boxdL,
    	boxDl: boxDl,
    	boxDL: boxDL,
    	boxdr: boxdr,
    	boxdR: boxdR,
    	boxDr: boxDr,
    	boxDR: boxDR,
    	boxh: boxh,
    	boxH: boxH,
    	boxhd: boxhd,
    	boxHd: boxHd,
    	boxhD: boxhD,
    	boxHD: boxHD,
    	boxhu: boxhu,
    	boxHu: boxHu,
    	boxhU: boxhU,
    	boxHU: boxHU,
    	boxminus: boxminus,
    	boxplus: boxplus,
    	boxtimes: boxtimes,
    	boxul: boxul,
    	boxuL: boxuL,
    	boxUl: boxUl,
    	boxUL: boxUL,
    	boxur: boxur,
    	boxuR: boxuR,
    	boxUr: boxUr,
    	boxUR: boxUR,
    	boxv: boxv,
    	boxV: boxV,
    	boxvh: boxvh,
    	boxvH: boxvH,
    	boxVh: boxVh,
    	boxVH: boxVH,
    	boxvl: boxvl,
    	boxvL: boxvL,
    	boxVl: boxVl,
    	boxVL: boxVL,
    	boxvr: boxvr,
    	boxvR: boxvR,
    	boxVr: boxVr,
    	boxVR: boxVR,
    	bprime: bprime,
    	breve: breve,
    	Breve: Breve,
    	brvbar: brvbar,
    	bscr: bscr,
    	Bscr: Bscr,
    	bsemi: bsemi,
    	bsim: bsim,
    	bsime: bsime,
    	bsolb: bsolb,
    	bsol: bsol,
    	bsolhsub: bsolhsub,
    	bull: bull,
    	bullet: bullet,
    	bump: bump,
    	bumpE: bumpE,
    	bumpe: bumpe,
    	Bumpeq: Bumpeq,
    	bumpeq: bumpeq,
    	Cacute: Cacute,
    	cacute: cacute,
    	capand: capand,
    	capbrcup: capbrcup,
    	capcap: capcap,
    	cap: cap,
    	Cap: Cap,
    	capcup: capcup,
    	capdot: capdot,
    	CapitalDifferentialD: CapitalDifferentialD,
    	caps: caps,
    	caret: caret,
    	caron: caron,
    	Cayleys: Cayleys,
    	ccaps: ccaps,
    	Ccaron: Ccaron,
    	ccaron: ccaron,
    	Ccedil: Ccedil,
    	ccedil: ccedil,
    	Ccirc: Ccirc,
    	ccirc: ccirc,
    	Cconint: Cconint,
    	ccups: ccups,
    	ccupssm: ccupssm,
    	Cdot: Cdot,
    	cdot: cdot,
    	cedil: cedil,
    	Cedilla: Cedilla,
    	cemptyv: cemptyv,
    	cent: cent,
    	centerdot: centerdot,
    	CenterDot: CenterDot,
    	cfr: cfr,
    	Cfr: Cfr,
    	CHcy: CHcy,
    	chcy: chcy,
    	check: check,
    	checkmark: checkmark,
    	Chi: Chi,
    	chi: chi,
    	circ: circ,
    	circeq: circeq,
    	circlearrowleft: circlearrowleft,
    	circlearrowright: circlearrowright,
    	circledast: circledast,
    	circledcirc: circledcirc,
    	circleddash: circleddash,
    	CircleDot: CircleDot,
    	circledR: circledR,
    	circledS: circledS,
    	CircleMinus: CircleMinus,
    	CirclePlus: CirclePlus,
    	CircleTimes: CircleTimes,
    	cir: cir,
    	cirE: cirE,
    	cire: cire,
    	cirfnint: cirfnint,
    	cirmid: cirmid,
    	cirscir: cirscir,
    	ClockwiseContourIntegral: ClockwiseContourIntegral,
    	CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
    	CloseCurlyQuote: CloseCurlyQuote,
    	clubs: clubs,
    	clubsuit: clubsuit,
    	colon: colon,
    	Colon: Colon,
    	Colone: Colone,
    	colone: colone,
    	coloneq: coloneq,
    	comma: comma,
    	commat: commat,
    	comp: comp,
    	compfn: compfn,
    	complement: complement,
    	complexes: complexes,
    	cong: cong,
    	congdot: congdot,
    	Congruent: Congruent,
    	conint: conint,
    	Conint: Conint,
    	ContourIntegral: ContourIntegral,
    	copf: copf,
    	Copf: Copf,
    	coprod: coprod,
    	Coproduct: Coproduct,
    	copy: copy,
    	COPY: COPY,
    	copysr: copysr,
    	CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
    	crarr: crarr,
    	cross: cross,
    	Cross: Cross,
    	Cscr: Cscr,
    	cscr: cscr,
    	csub: csub,
    	csube: csube,
    	csup: csup,
    	csupe: csupe,
    	ctdot: ctdot,
    	cudarrl: cudarrl,
    	cudarrr: cudarrr,
    	cuepr: cuepr,
    	cuesc: cuesc,
    	cularr: cularr,
    	cularrp: cularrp,
    	cupbrcap: cupbrcap,
    	cupcap: cupcap,
    	CupCap: CupCap,
    	cup: cup,
    	Cup: Cup,
    	cupcup: cupcup,
    	cupdot: cupdot,
    	cupor: cupor,
    	cups: cups,
    	curarr: curarr,
    	curarrm: curarrm,
    	curlyeqprec: curlyeqprec,
    	curlyeqsucc: curlyeqsucc,
    	curlyvee: curlyvee,
    	curlywedge: curlywedge,
    	curren: curren,
    	curvearrowleft: curvearrowleft,
    	curvearrowright: curvearrowright,
    	cuvee: cuvee,
    	cuwed: cuwed,
    	cwconint: cwconint,
    	cwint: cwint,
    	cylcty: cylcty,
    	dagger: dagger,
    	Dagger: Dagger,
    	daleth: daleth,
    	darr: darr,
    	Darr: Darr,
    	dArr: dArr,
    	dash: dash,
    	Dashv: Dashv,
    	dashv: dashv,
    	dbkarow: dbkarow,
    	dblac: dblac,
    	Dcaron: Dcaron,
    	dcaron: dcaron,
    	Dcy: Dcy,
    	dcy: dcy,
    	ddagger: ddagger,
    	ddarr: ddarr,
    	DD: DD,
    	dd: dd,
    	DDotrahd: DDotrahd,
    	ddotseq: ddotseq,
    	deg: deg,
    	Del: Del,
    	Delta: Delta,
    	delta: delta,
    	demptyv: demptyv,
    	dfisht: dfisht,
    	Dfr: Dfr,
    	dfr: dfr,
    	dHar: dHar,
    	dharl: dharl,
    	dharr: dharr,
    	DiacriticalAcute: DiacriticalAcute,
    	DiacriticalDot: DiacriticalDot,
    	DiacriticalDoubleAcute: DiacriticalDoubleAcute,
    	DiacriticalGrave: DiacriticalGrave,
    	DiacriticalTilde: DiacriticalTilde,
    	diam: diam,
    	diamond: diamond,
    	Diamond: Diamond,
    	diamondsuit: diamondsuit,
    	diams: diams,
    	die: die,
    	DifferentialD: DifferentialD,
    	digamma: digamma,
    	disin: disin,
    	div: div,
    	divide: divide,
    	divideontimes: divideontimes,
    	divonx: divonx,
    	DJcy: DJcy,
    	djcy: djcy,
    	dlcorn: dlcorn,
    	dlcrop: dlcrop,
    	dollar: dollar,
    	Dopf: Dopf,
    	dopf: dopf,
    	Dot: Dot,
    	dot: dot,
    	DotDot: DotDot,
    	doteq: doteq,
    	doteqdot: doteqdot,
    	DotEqual: DotEqual,
    	dotminus: dotminus,
    	dotplus: dotplus,
    	dotsquare: dotsquare,
    	doublebarwedge: doublebarwedge,
    	DoubleContourIntegral: DoubleContourIntegral,
    	DoubleDot: DoubleDot,
    	DoubleDownArrow: DoubleDownArrow,
    	DoubleLeftArrow: DoubleLeftArrow,
    	DoubleLeftRightArrow: DoubleLeftRightArrow,
    	DoubleLeftTee: DoubleLeftTee,
    	DoubleLongLeftArrow: DoubleLongLeftArrow,
    	DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
    	DoubleLongRightArrow: DoubleLongRightArrow,
    	DoubleRightArrow: DoubleRightArrow,
    	DoubleRightTee: DoubleRightTee,
    	DoubleUpArrow: DoubleUpArrow,
    	DoubleUpDownArrow: DoubleUpDownArrow,
    	DoubleVerticalBar: DoubleVerticalBar,
    	DownArrowBar: DownArrowBar,
    	downarrow: downarrow,
    	DownArrow: DownArrow,
    	Downarrow: Downarrow,
    	DownArrowUpArrow: DownArrowUpArrow,
    	DownBreve: DownBreve,
    	downdownarrows: downdownarrows,
    	downharpoonleft: downharpoonleft,
    	downharpoonright: downharpoonright,
    	DownLeftRightVector: DownLeftRightVector,
    	DownLeftTeeVector: DownLeftTeeVector,
    	DownLeftVectorBar: DownLeftVectorBar,
    	DownLeftVector: DownLeftVector,
    	DownRightTeeVector: DownRightTeeVector,
    	DownRightVectorBar: DownRightVectorBar,
    	DownRightVector: DownRightVector,
    	DownTeeArrow: DownTeeArrow,
    	DownTee: DownTee,
    	drbkarow: drbkarow,
    	drcorn: drcorn,
    	drcrop: drcrop,
    	Dscr: Dscr,
    	dscr: dscr,
    	DScy: DScy,
    	dscy: dscy,
    	dsol: dsol,
    	Dstrok: Dstrok,
    	dstrok: dstrok,
    	dtdot: dtdot,
    	dtri: dtri,
    	dtrif: dtrif,
    	duarr: duarr,
    	duhar: duhar,
    	dwangle: dwangle,
    	DZcy: DZcy,
    	dzcy: dzcy,
    	dzigrarr: dzigrarr,
    	Eacute: Eacute,
    	eacute: eacute,
    	easter: easter,
    	Ecaron: Ecaron,
    	ecaron: ecaron,
    	Ecirc: Ecirc,
    	ecirc: ecirc,
    	ecir: ecir,
    	ecolon: ecolon,
    	Ecy: Ecy,
    	ecy: ecy,
    	eDDot: eDDot,
    	Edot: Edot,
    	edot: edot,
    	eDot: eDot,
    	ee: ee,
    	efDot: efDot,
    	Efr: Efr,
    	efr: efr,
    	eg: eg,
    	Egrave: Egrave,
    	egrave: egrave,
    	egs: egs,
    	egsdot: egsdot,
    	el: el,
    	Element: Element,
    	elinters: elinters,
    	ell: ell,
    	els: els,
    	elsdot: elsdot,
    	Emacr: Emacr,
    	emacr: emacr,
    	empty: empty,
    	emptyset: emptyset,
    	EmptySmallSquare: EmptySmallSquare,
    	emptyv: emptyv,
    	EmptyVerySmallSquare: EmptyVerySmallSquare,
    	emsp13: emsp13,
    	emsp14: emsp14,
    	emsp: emsp,
    	ENG: ENG,
    	eng: eng,
    	ensp: ensp,
    	Eogon: Eogon,
    	eogon: eogon,
    	Eopf: Eopf,
    	eopf: eopf,
    	epar: epar,
    	eparsl: eparsl,
    	eplus: eplus,
    	epsi: epsi,
    	Epsilon: Epsilon,
    	epsilon: epsilon,
    	epsiv: epsiv,
    	eqcirc: eqcirc,
    	eqcolon: eqcolon,
    	eqsim: eqsim,
    	eqslantgtr: eqslantgtr,
    	eqslantless: eqslantless,
    	Equal: Equal,
    	equals: equals,
    	EqualTilde: EqualTilde,
    	equest: equest,
    	Equilibrium: Equilibrium,
    	equiv: equiv,
    	equivDD: equivDD,
    	eqvparsl: eqvparsl,
    	erarr: erarr,
    	erDot: erDot,
    	escr: escr,
    	Escr: Escr,
    	esdot: esdot,
    	Esim: Esim,
    	esim: esim,
    	Eta: Eta,
    	eta: eta,
    	ETH: ETH,
    	eth: eth,
    	Euml: Euml,
    	euml: euml,
    	euro: euro,
    	excl: excl,
    	exist: exist,
    	Exists: Exists,
    	expectation: expectation,
    	exponentiale: exponentiale,
    	ExponentialE: ExponentialE,
    	fallingdotseq: fallingdotseq,
    	Fcy: Fcy,
    	fcy: fcy,
    	female: female,
    	ffilig: ffilig,
    	fflig: fflig,
    	ffllig: ffllig,
    	Ffr: Ffr,
    	ffr: ffr,
    	filig: filig,
    	FilledSmallSquare: FilledSmallSquare,
    	FilledVerySmallSquare: FilledVerySmallSquare,
    	fjlig: fjlig,
    	flat: flat,
    	fllig: fllig,
    	fltns: fltns,
    	fnof: fnof,
    	Fopf: Fopf,
    	fopf: fopf,
    	forall: forall,
    	ForAll: ForAll,
    	fork: fork,
    	forkv: forkv,
    	Fouriertrf: Fouriertrf,
    	fpartint: fpartint,
    	frac12: frac12,
    	frac13: frac13,
    	frac14: frac14,
    	frac15: frac15,
    	frac16: frac16,
    	frac18: frac18,
    	frac23: frac23,
    	frac25: frac25,
    	frac34: frac34,
    	frac35: frac35,
    	frac38: frac38,
    	frac45: frac45,
    	frac56: frac56,
    	frac58: frac58,
    	frac78: frac78,
    	frasl: frasl,
    	frown: frown,
    	fscr: fscr,
    	Fscr: Fscr,
    	gacute: gacute,
    	Gamma: Gamma,
    	gamma: gamma,
    	Gammad: Gammad,
    	gammad: gammad,
    	gap: gap,
    	Gbreve: Gbreve,
    	gbreve: gbreve,
    	Gcedil: Gcedil,
    	Gcirc: Gcirc,
    	gcirc: gcirc,
    	Gcy: Gcy,
    	gcy: gcy,
    	Gdot: Gdot,
    	gdot: gdot,
    	ge: ge,
    	gE: gE,
    	gEl: gEl,
    	gel: gel,
    	geq: geq,
    	geqq: geqq,
    	geqslant: geqslant,
    	gescc: gescc,
    	ges: ges,
    	gesdot: gesdot,
    	gesdoto: gesdoto,
    	gesdotol: gesdotol,
    	gesl: gesl,
    	gesles: gesles,
    	Gfr: Gfr,
    	gfr: gfr,
    	gg: gg,
    	Gg: Gg,
    	ggg: ggg,
    	gimel: gimel,
    	GJcy: GJcy,
    	gjcy: gjcy,
    	gla: gla,
    	gl: gl,
    	glE: glE,
    	glj: glj,
    	gnap: gnap,
    	gnapprox: gnapprox,
    	gne: gne,
    	gnE: gnE,
    	gneq: gneq,
    	gneqq: gneqq,
    	gnsim: gnsim,
    	Gopf: Gopf,
    	gopf: gopf,
    	grave: grave,
    	GreaterEqual: GreaterEqual,
    	GreaterEqualLess: GreaterEqualLess,
    	GreaterFullEqual: GreaterFullEqual,
    	GreaterGreater: GreaterGreater,
    	GreaterLess: GreaterLess,
    	GreaterSlantEqual: GreaterSlantEqual,
    	GreaterTilde: GreaterTilde,
    	Gscr: Gscr,
    	gscr: gscr,
    	gsim: gsim,
    	gsime: gsime,
    	gsiml: gsiml,
    	gtcc: gtcc,
    	gtcir: gtcir,
    	gt: gt,
    	GT: GT,
    	Gt: Gt,
    	gtdot: gtdot,
    	gtlPar: gtlPar,
    	gtquest: gtquest,
    	gtrapprox: gtrapprox,
    	gtrarr: gtrarr,
    	gtrdot: gtrdot,
    	gtreqless: gtreqless,
    	gtreqqless: gtreqqless,
    	gtrless: gtrless,
    	gtrsim: gtrsim,
    	gvertneqq: gvertneqq,
    	gvnE: gvnE,
    	Hacek: Hacek,
    	hairsp: hairsp,
    	half: half,
    	hamilt: hamilt,
    	HARDcy: HARDcy,
    	hardcy: hardcy,
    	harrcir: harrcir,
    	harr: harr,
    	hArr: hArr,
    	harrw: harrw,
    	Hat: Hat,
    	hbar: hbar,
    	Hcirc: Hcirc,
    	hcirc: hcirc,
    	hearts: hearts,
    	heartsuit: heartsuit,
    	hellip: hellip,
    	hercon: hercon,
    	hfr: hfr,
    	Hfr: Hfr,
    	HilbertSpace: HilbertSpace,
    	hksearow: hksearow,
    	hkswarow: hkswarow,
    	hoarr: hoarr,
    	homtht: homtht,
    	hookleftarrow: hookleftarrow,
    	hookrightarrow: hookrightarrow,
    	hopf: hopf,
    	Hopf: Hopf,
    	horbar: horbar,
    	HorizontalLine: HorizontalLine,
    	hscr: hscr,
    	Hscr: Hscr,
    	hslash: hslash,
    	Hstrok: Hstrok,
    	hstrok: hstrok,
    	HumpDownHump: HumpDownHump,
    	HumpEqual: HumpEqual,
    	hybull: hybull,
    	hyphen: hyphen,
    	Iacute: Iacute,
    	iacute: iacute,
    	ic: ic,
    	Icirc: Icirc,
    	icirc: icirc,
    	Icy: Icy,
    	icy: icy,
    	Idot: Idot,
    	IEcy: IEcy,
    	iecy: iecy,
    	iexcl: iexcl,
    	iff: iff,
    	ifr: ifr,
    	Ifr: Ifr,
    	Igrave: Igrave,
    	igrave: igrave,
    	ii: ii,
    	iiiint: iiiint,
    	iiint: iiint,
    	iinfin: iinfin,
    	iiota: iiota,
    	IJlig: IJlig,
    	ijlig: ijlig,
    	Imacr: Imacr,
    	imacr: imacr,
    	image: image,
    	ImaginaryI: ImaginaryI,
    	imagline: imagline,
    	imagpart: imagpart,
    	imath: imath,
    	Im: Im,
    	imof: imof,
    	imped: imped,
    	Implies: Implies,
    	incare: incare,
    	"in": "∈",
    	infin: infin,
    	infintie: infintie,
    	inodot: inodot,
    	intcal: intcal,
    	int: int,
    	Int: Int,
    	integers: integers,
    	Integral: Integral,
    	intercal: intercal,
    	Intersection: Intersection,
    	intlarhk: intlarhk,
    	intprod: intprod,
    	InvisibleComma: InvisibleComma,
    	InvisibleTimes: InvisibleTimes,
    	IOcy: IOcy,
    	iocy: iocy,
    	Iogon: Iogon,
    	iogon: iogon,
    	Iopf: Iopf,
    	iopf: iopf,
    	Iota: Iota,
    	iota: iota,
    	iprod: iprod,
    	iquest: iquest,
    	iscr: iscr,
    	Iscr: Iscr,
    	isin: isin,
    	isindot: isindot,
    	isinE: isinE,
    	isins: isins,
    	isinsv: isinsv,
    	isinv: isinv,
    	it: it,
    	Itilde: Itilde,
    	itilde: itilde,
    	Iukcy: Iukcy,
    	iukcy: iukcy,
    	Iuml: Iuml,
    	iuml: iuml,
    	Jcirc: Jcirc,
    	jcirc: jcirc,
    	Jcy: Jcy,
    	jcy: jcy,
    	Jfr: Jfr,
    	jfr: jfr,
    	jmath: jmath,
    	Jopf: Jopf,
    	jopf: jopf,
    	Jscr: Jscr,
    	jscr: jscr,
    	Jsercy: Jsercy,
    	jsercy: jsercy,
    	Jukcy: Jukcy,
    	jukcy: jukcy,
    	Kappa: Kappa,
    	kappa: kappa,
    	kappav: kappav,
    	Kcedil: Kcedil,
    	kcedil: kcedil,
    	Kcy: Kcy,
    	kcy: kcy,
    	Kfr: Kfr,
    	kfr: kfr,
    	kgreen: kgreen,
    	KHcy: KHcy,
    	khcy: khcy,
    	KJcy: KJcy,
    	kjcy: kjcy,
    	Kopf: Kopf,
    	kopf: kopf,
    	Kscr: Kscr,
    	kscr: kscr,
    	lAarr: lAarr,
    	Lacute: Lacute,
    	lacute: lacute,
    	laemptyv: laemptyv,
    	lagran: lagran,
    	Lambda: Lambda,
    	lambda: lambda,
    	lang: lang,
    	Lang: Lang,
    	langd: langd,
    	langle: langle,
    	lap: lap,
    	Laplacetrf: Laplacetrf,
    	laquo: laquo,
    	larrb: larrb,
    	larrbfs: larrbfs,
    	larr: larr,
    	Larr: Larr,
    	lArr: lArr,
    	larrfs: larrfs,
    	larrhk: larrhk,
    	larrlp: larrlp,
    	larrpl: larrpl,
    	larrsim: larrsim,
    	larrtl: larrtl,
    	latail: latail,
    	lAtail: lAtail,
    	lat: lat,
    	late: late,
    	lates: lates,
    	lbarr: lbarr,
    	lBarr: lBarr,
    	lbbrk: lbbrk,
    	lbrace: lbrace,
    	lbrack: lbrack,
    	lbrke: lbrke,
    	lbrksld: lbrksld,
    	lbrkslu: lbrkslu,
    	Lcaron: Lcaron,
    	lcaron: lcaron,
    	Lcedil: Lcedil,
    	lcedil: lcedil,
    	lceil: lceil,
    	lcub: lcub,
    	Lcy: Lcy,
    	lcy: lcy,
    	ldca: ldca,
    	ldquo: ldquo,
    	ldquor: ldquor,
    	ldrdhar: ldrdhar,
    	ldrushar: ldrushar,
    	ldsh: ldsh,
    	le: le,
    	lE: lE,
    	LeftAngleBracket: LeftAngleBracket,
    	LeftArrowBar: LeftArrowBar,
    	leftarrow: leftarrow,
    	LeftArrow: LeftArrow,
    	Leftarrow: Leftarrow,
    	LeftArrowRightArrow: LeftArrowRightArrow,
    	leftarrowtail: leftarrowtail,
    	LeftCeiling: LeftCeiling,
    	LeftDoubleBracket: LeftDoubleBracket,
    	LeftDownTeeVector: LeftDownTeeVector,
    	LeftDownVectorBar: LeftDownVectorBar,
    	LeftDownVector: LeftDownVector,
    	LeftFloor: LeftFloor,
    	leftharpoondown: leftharpoondown,
    	leftharpoonup: leftharpoonup,
    	leftleftarrows: leftleftarrows,
    	leftrightarrow: leftrightarrow,
    	LeftRightArrow: LeftRightArrow,
    	Leftrightarrow: Leftrightarrow,
    	leftrightarrows: leftrightarrows,
    	leftrightharpoons: leftrightharpoons,
    	leftrightsquigarrow: leftrightsquigarrow,
    	LeftRightVector: LeftRightVector,
    	LeftTeeArrow: LeftTeeArrow,
    	LeftTee: LeftTee,
    	LeftTeeVector: LeftTeeVector,
    	leftthreetimes: leftthreetimes,
    	LeftTriangleBar: LeftTriangleBar,
    	LeftTriangle: LeftTriangle,
    	LeftTriangleEqual: LeftTriangleEqual,
    	LeftUpDownVector: LeftUpDownVector,
    	LeftUpTeeVector: LeftUpTeeVector,
    	LeftUpVectorBar: LeftUpVectorBar,
    	LeftUpVector: LeftUpVector,
    	LeftVectorBar: LeftVectorBar,
    	LeftVector: LeftVector,
    	lEg: lEg,
    	leg: leg,
    	leq: leq,
    	leqq: leqq,
    	leqslant: leqslant,
    	lescc: lescc,
    	les: les,
    	lesdot: lesdot,
    	lesdoto: lesdoto,
    	lesdotor: lesdotor,
    	lesg: lesg,
    	lesges: lesges,
    	lessapprox: lessapprox,
    	lessdot: lessdot,
    	lesseqgtr: lesseqgtr,
    	lesseqqgtr: lesseqqgtr,
    	LessEqualGreater: LessEqualGreater,
    	LessFullEqual: LessFullEqual,
    	LessGreater: LessGreater,
    	lessgtr: lessgtr,
    	LessLess: LessLess,
    	lesssim: lesssim,
    	LessSlantEqual: LessSlantEqual,
    	LessTilde: LessTilde,
    	lfisht: lfisht,
    	lfloor: lfloor,
    	Lfr: Lfr,
    	lfr: lfr,
    	lg: lg,
    	lgE: lgE,
    	lHar: lHar,
    	lhard: lhard,
    	lharu: lharu,
    	lharul: lharul,
    	lhblk: lhblk,
    	LJcy: LJcy,
    	ljcy: ljcy,
    	llarr: llarr,
    	ll: ll,
    	Ll: Ll,
    	llcorner: llcorner,
    	Lleftarrow: Lleftarrow,
    	llhard: llhard,
    	lltri: lltri,
    	Lmidot: Lmidot,
    	lmidot: lmidot,
    	lmoustache: lmoustache,
    	lmoust: lmoust,
    	lnap: lnap,
    	lnapprox: lnapprox,
    	lne: lne,
    	lnE: lnE,
    	lneq: lneq,
    	lneqq: lneqq,
    	lnsim: lnsim,
    	loang: loang,
    	loarr: loarr,
    	lobrk: lobrk,
    	longleftarrow: longleftarrow,
    	LongLeftArrow: LongLeftArrow,
    	Longleftarrow: Longleftarrow,
    	longleftrightarrow: longleftrightarrow,
    	LongLeftRightArrow: LongLeftRightArrow,
    	Longleftrightarrow: Longleftrightarrow,
    	longmapsto: longmapsto,
    	longrightarrow: longrightarrow,
    	LongRightArrow: LongRightArrow,
    	Longrightarrow: Longrightarrow,
    	looparrowleft: looparrowleft,
    	looparrowright: looparrowright,
    	lopar: lopar,
    	Lopf: Lopf,
    	lopf: lopf,
    	loplus: loplus,
    	lotimes: lotimes,
    	lowast: lowast,
    	lowbar: lowbar,
    	LowerLeftArrow: LowerLeftArrow,
    	LowerRightArrow: LowerRightArrow,
    	loz: loz,
    	lozenge: lozenge,
    	lozf: lozf,
    	lpar: lpar,
    	lparlt: lparlt,
    	lrarr: lrarr,
    	lrcorner: lrcorner,
    	lrhar: lrhar,
    	lrhard: lrhard,
    	lrm: lrm,
    	lrtri: lrtri,
    	lsaquo: lsaquo,
    	lscr: lscr,
    	Lscr: Lscr,
    	lsh: lsh,
    	Lsh: Lsh,
    	lsim: lsim,
    	lsime: lsime,
    	lsimg: lsimg,
    	lsqb: lsqb,
    	lsquo: lsquo,
    	lsquor: lsquor,
    	Lstrok: Lstrok,
    	lstrok: lstrok,
    	ltcc: ltcc,
    	ltcir: ltcir,
    	lt: lt,
    	LT: LT,
    	Lt: Lt,
    	ltdot: ltdot,
    	lthree: lthree,
    	ltimes: ltimes,
    	ltlarr: ltlarr,
    	ltquest: ltquest,
    	ltri: ltri,
    	ltrie: ltrie,
    	ltrif: ltrif,
    	ltrPar: ltrPar,
    	lurdshar: lurdshar,
    	luruhar: luruhar,
    	lvertneqq: lvertneqq,
    	lvnE: lvnE,
    	macr: macr,
    	male: male,
    	malt: malt,
    	maltese: maltese,
    	"Map": "⤅",
    	map: map,
    	mapsto: mapsto,
    	mapstodown: mapstodown,
    	mapstoleft: mapstoleft,
    	mapstoup: mapstoup,
    	marker: marker,
    	mcomma: mcomma,
    	Mcy: Mcy,
    	mcy: mcy,
    	mdash: mdash,
    	mDDot: mDDot,
    	measuredangle: measuredangle,
    	MediumSpace: MediumSpace,
    	Mellintrf: Mellintrf,
    	Mfr: Mfr,
    	mfr: mfr,
    	mho: mho,
    	micro: micro,
    	midast: midast,
    	midcir: midcir,
    	mid: mid,
    	middot: middot,
    	minusb: minusb,
    	minus: minus,
    	minusd: minusd,
    	minusdu: minusdu,
    	MinusPlus: MinusPlus,
    	mlcp: mlcp,
    	mldr: mldr,
    	mnplus: mnplus,
    	models: models,
    	Mopf: Mopf,
    	mopf: mopf,
    	mp: mp,
    	mscr: mscr,
    	Mscr: Mscr,
    	mstpos: mstpos,
    	Mu: Mu,
    	mu: mu,
    	multimap: multimap,
    	mumap: mumap,
    	nabla: nabla,
    	Nacute: Nacute,
    	nacute: nacute,
    	nang: nang,
    	nap: nap,
    	napE: napE,
    	napid: napid,
    	napos: napos,
    	napprox: napprox,
    	natural: natural,
    	naturals: naturals,
    	natur: natur,
    	nbsp: nbsp,
    	nbump: nbump,
    	nbumpe: nbumpe,
    	ncap: ncap,
    	Ncaron: Ncaron,
    	ncaron: ncaron,
    	Ncedil: Ncedil,
    	ncedil: ncedil,
    	ncong: ncong,
    	ncongdot: ncongdot,
    	ncup: ncup,
    	Ncy: Ncy,
    	ncy: ncy,
    	ndash: ndash,
    	nearhk: nearhk,
    	nearr: nearr,
    	neArr: neArr,
    	nearrow: nearrow,
    	ne: ne,
    	nedot: nedot,
    	NegativeMediumSpace: NegativeMediumSpace,
    	NegativeThickSpace: NegativeThickSpace,
    	NegativeThinSpace: NegativeThinSpace,
    	NegativeVeryThinSpace: NegativeVeryThinSpace,
    	nequiv: nequiv,
    	nesear: nesear,
    	nesim: nesim,
    	NestedGreaterGreater: NestedGreaterGreater,
    	NestedLessLess: NestedLessLess,
    	NewLine: NewLine,
    	nexist: nexist,
    	nexists: nexists,
    	Nfr: Nfr,
    	nfr: nfr,
    	ngE: ngE,
    	nge: nge,
    	ngeq: ngeq,
    	ngeqq: ngeqq,
    	ngeqslant: ngeqslant,
    	nges: nges,
    	nGg: nGg,
    	ngsim: ngsim,
    	nGt: nGt,
    	ngt: ngt,
    	ngtr: ngtr,
    	nGtv: nGtv,
    	nharr: nharr,
    	nhArr: nhArr,
    	nhpar: nhpar,
    	ni: ni,
    	nis: nis,
    	nisd: nisd,
    	niv: niv,
    	NJcy: NJcy,
    	njcy: njcy,
    	nlarr: nlarr,
    	nlArr: nlArr,
    	nldr: nldr,
    	nlE: nlE,
    	nle: nle,
    	nleftarrow: nleftarrow,
    	nLeftarrow: nLeftarrow,
    	nleftrightarrow: nleftrightarrow,
    	nLeftrightarrow: nLeftrightarrow,
    	nleq: nleq,
    	nleqq: nleqq,
    	nleqslant: nleqslant,
    	nles: nles,
    	nless: nless,
    	nLl: nLl,
    	nlsim: nlsim,
    	nLt: nLt,
    	nlt: nlt,
    	nltri: nltri,
    	nltrie: nltrie,
    	nLtv: nLtv,
    	nmid: nmid,
    	NoBreak: NoBreak,
    	NonBreakingSpace: NonBreakingSpace,
    	nopf: nopf,
    	Nopf: Nopf,
    	Not: Not,
    	not: not,
    	NotCongruent: NotCongruent,
    	NotCupCap: NotCupCap,
    	NotDoubleVerticalBar: NotDoubleVerticalBar,
    	NotElement: NotElement,
    	NotEqual: NotEqual,
    	NotEqualTilde: NotEqualTilde,
    	NotExists: NotExists,
    	NotGreater: NotGreater,
    	NotGreaterEqual: NotGreaterEqual,
    	NotGreaterFullEqual: NotGreaterFullEqual,
    	NotGreaterGreater: NotGreaterGreater,
    	NotGreaterLess: NotGreaterLess,
    	NotGreaterSlantEqual: NotGreaterSlantEqual,
    	NotGreaterTilde: NotGreaterTilde,
    	NotHumpDownHump: NotHumpDownHump,
    	NotHumpEqual: NotHumpEqual,
    	notin: notin,
    	notindot: notindot,
    	notinE: notinE,
    	notinva: notinva,
    	notinvb: notinvb,
    	notinvc: notinvc,
    	NotLeftTriangleBar: NotLeftTriangleBar,
    	NotLeftTriangle: NotLeftTriangle,
    	NotLeftTriangleEqual: NotLeftTriangleEqual,
    	NotLess: NotLess,
    	NotLessEqual: NotLessEqual,
    	NotLessGreater: NotLessGreater,
    	NotLessLess: NotLessLess,
    	NotLessSlantEqual: NotLessSlantEqual,
    	NotLessTilde: NotLessTilde,
    	NotNestedGreaterGreater: NotNestedGreaterGreater,
    	NotNestedLessLess: NotNestedLessLess,
    	notni: notni,
    	notniva: notniva,
    	notnivb: notnivb,
    	notnivc: notnivc,
    	NotPrecedes: NotPrecedes,
    	NotPrecedesEqual: NotPrecedesEqual,
    	NotPrecedesSlantEqual: NotPrecedesSlantEqual,
    	NotReverseElement: NotReverseElement,
    	NotRightTriangleBar: NotRightTriangleBar,
    	NotRightTriangle: NotRightTriangle,
    	NotRightTriangleEqual: NotRightTriangleEqual,
    	NotSquareSubset: NotSquareSubset,
    	NotSquareSubsetEqual: NotSquareSubsetEqual,
    	NotSquareSuperset: NotSquareSuperset,
    	NotSquareSupersetEqual: NotSquareSupersetEqual,
    	NotSubset: NotSubset,
    	NotSubsetEqual: NotSubsetEqual,
    	NotSucceeds: NotSucceeds,
    	NotSucceedsEqual: NotSucceedsEqual,
    	NotSucceedsSlantEqual: NotSucceedsSlantEqual,
    	NotSucceedsTilde: NotSucceedsTilde,
    	NotSuperset: NotSuperset,
    	NotSupersetEqual: NotSupersetEqual,
    	NotTilde: NotTilde,
    	NotTildeEqual: NotTildeEqual,
    	NotTildeFullEqual: NotTildeFullEqual,
    	NotTildeTilde: NotTildeTilde,
    	NotVerticalBar: NotVerticalBar,
    	nparallel: nparallel,
    	npar: npar,
    	nparsl: nparsl,
    	npart: npart,
    	npolint: npolint,
    	npr: npr,
    	nprcue: nprcue,
    	nprec: nprec,
    	npreceq: npreceq,
    	npre: npre,
    	nrarrc: nrarrc,
    	nrarr: nrarr,
    	nrArr: nrArr,
    	nrarrw: nrarrw,
    	nrightarrow: nrightarrow,
    	nRightarrow: nRightarrow,
    	nrtri: nrtri,
    	nrtrie: nrtrie,
    	nsc: nsc,
    	nsccue: nsccue,
    	nsce: nsce,
    	Nscr: Nscr,
    	nscr: nscr,
    	nshortmid: nshortmid,
    	nshortparallel: nshortparallel,
    	nsim: nsim,
    	nsime: nsime,
    	nsimeq: nsimeq,
    	nsmid: nsmid,
    	nspar: nspar,
    	nsqsube: nsqsube,
    	nsqsupe: nsqsupe,
    	nsub: nsub,
    	nsubE: nsubE,
    	nsube: nsube,
    	nsubset: nsubset,
    	nsubseteq: nsubseteq,
    	nsubseteqq: nsubseteqq,
    	nsucc: nsucc,
    	nsucceq: nsucceq,
    	nsup: nsup,
    	nsupE: nsupE,
    	nsupe: nsupe,
    	nsupset: nsupset,
    	nsupseteq: nsupseteq,
    	nsupseteqq: nsupseteqq,
    	ntgl: ntgl,
    	Ntilde: Ntilde,
    	ntilde: ntilde,
    	ntlg: ntlg,
    	ntriangleleft: ntriangleleft,
    	ntrianglelefteq: ntrianglelefteq,
    	ntriangleright: ntriangleright,
    	ntrianglerighteq: ntrianglerighteq,
    	Nu: Nu,
    	nu: nu,
    	num: num,
    	numero: numero,
    	numsp: numsp,
    	nvap: nvap,
    	nvdash: nvdash,
    	nvDash: nvDash,
    	nVdash: nVdash,
    	nVDash: nVDash,
    	nvge: nvge,
    	nvgt: nvgt,
    	nvHarr: nvHarr,
    	nvinfin: nvinfin,
    	nvlArr: nvlArr,
    	nvle: nvle,
    	nvlt: nvlt,
    	nvltrie: nvltrie,
    	nvrArr: nvrArr,
    	nvrtrie: nvrtrie,
    	nvsim: nvsim,
    	nwarhk: nwarhk,
    	nwarr: nwarr,
    	nwArr: nwArr,
    	nwarrow: nwarrow,
    	nwnear: nwnear,
    	Oacute: Oacute,
    	oacute: oacute,
    	oast: oast,
    	Ocirc: Ocirc,
    	ocirc: ocirc,
    	ocir: ocir,
    	Ocy: Ocy,
    	ocy: ocy,
    	odash: odash,
    	Odblac: Odblac,
    	odblac: odblac,
    	odiv: odiv,
    	odot: odot,
    	odsold: odsold,
    	OElig: OElig,
    	oelig: oelig,
    	ofcir: ofcir,
    	Ofr: Ofr,
    	ofr: ofr,
    	ogon: ogon,
    	Ograve: Ograve,
    	ograve: ograve,
    	ogt: ogt,
    	ohbar: ohbar,
    	ohm: ohm,
    	oint: oint,
    	olarr: olarr,
    	olcir: olcir,
    	olcross: olcross,
    	oline: oline,
    	olt: olt,
    	Omacr: Omacr,
    	omacr: omacr,
    	Omega: Omega,
    	omega: omega,
    	Omicron: Omicron,
    	omicron: omicron,
    	omid: omid,
    	ominus: ominus,
    	Oopf: Oopf,
    	oopf: oopf,
    	opar: opar,
    	OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
    	OpenCurlyQuote: OpenCurlyQuote,
    	operp: operp,
    	oplus: oplus,
    	orarr: orarr,
    	Or: Or,
    	or: or,
    	ord: ord,
    	order: order,
    	orderof: orderof,
    	ordf: ordf,
    	ordm: ordm,
    	origof: origof,
    	oror: oror,
    	orslope: orslope,
    	orv: orv,
    	oS: oS,
    	Oscr: Oscr,
    	oscr: oscr,
    	Oslash: Oslash,
    	oslash: oslash,
    	osol: osol,
    	Otilde: Otilde,
    	otilde: otilde,
    	otimesas: otimesas,
    	Otimes: Otimes,
    	otimes: otimes,
    	Ouml: Ouml,
    	ouml: ouml,
    	ovbar: ovbar,
    	OverBar: OverBar,
    	OverBrace: OverBrace,
    	OverBracket: OverBracket,
    	OverParenthesis: OverParenthesis,
    	para: para,
    	parallel: parallel,
    	par: par,
    	parsim: parsim,
    	parsl: parsl,
    	part: part,
    	PartialD: PartialD,
    	Pcy: Pcy,
    	pcy: pcy,
    	percnt: percnt,
    	period: period,
    	permil: permil,
    	perp: perp,
    	pertenk: pertenk,
    	Pfr: Pfr,
    	pfr: pfr,
    	Phi: Phi,
    	phi: phi,
    	phiv: phiv,
    	phmmat: phmmat,
    	phone: phone,
    	Pi: Pi,
    	pi: pi,
    	pitchfork: pitchfork,
    	piv: piv,
    	planck: planck,
    	planckh: planckh,
    	plankv: plankv,
    	plusacir: plusacir,
    	plusb: plusb,
    	pluscir: pluscir,
    	plus: plus,
    	plusdo: plusdo,
    	plusdu: plusdu,
    	pluse: pluse,
    	PlusMinus: PlusMinus,
    	plusmn: plusmn,
    	plussim: plussim,
    	plustwo: plustwo,
    	pm: pm,
    	Poincareplane: Poincareplane,
    	pointint: pointint,
    	popf: popf,
    	Popf: Popf,
    	pound: pound,
    	prap: prap,
    	Pr: Pr,
    	pr: pr,
    	prcue: prcue,
    	precapprox: precapprox,
    	prec: prec,
    	preccurlyeq: preccurlyeq,
    	Precedes: Precedes,
    	PrecedesEqual: PrecedesEqual,
    	PrecedesSlantEqual: PrecedesSlantEqual,
    	PrecedesTilde: PrecedesTilde,
    	preceq: preceq,
    	precnapprox: precnapprox,
    	precneqq: precneqq,
    	precnsim: precnsim,
    	pre: pre,
    	prE: prE,
    	precsim: precsim,
    	prime: prime,
    	Prime: Prime,
    	primes: primes,
    	prnap: prnap,
    	prnE: prnE,
    	prnsim: prnsim,
    	prod: prod,
    	Product: Product,
    	profalar: profalar,
    	profline: profline,
    	profsurf: profsurf,
    	prop: prop,
    	Proportional: Proportional,
    	Proportion: Proportion,
    	propto: propto,
    	prsim: prsim,
    	prurel: prurel,
    	Pscr: Pscr,
    	pscr: pscr,
    	Psi: Psi,
    	psi: psi,
    	puncsp: puncsp,
    	Qfr: Qfr,
    	qfr: qfr,
    	qint: qint,
    	qopf: qopf,
    	Qopf: Qopf,
    	qprime: qprime,
    	Qscr: Qscr,
    	qscr: qscr,
    	quaternions: quaternions,
    	quatint: quatint,
    	quest: quest,
    	questeq: questeq,
    	quot: quot,
    	QUOT: QUOT,
    	rAarr: rAarr,
    	race: race,
    	Racute: Racute,
    	racute: racute,
    	radic: radic,
    	raemptyv: raemptyv,
    	rang: rang,
    	Rang: Rang,
    	rangd: rangd,
    	range: range,
    	rangle: rangle,
    	raquo: raquo,
    	rarrap: rarrap,
    	rarrb: rarrb,
    	rarrbfs: rarrbfs,
    	rarrc: rarrc,
    	rarr: rarr,
    	Rarr: Rarr,
    	rArr: rArr,
    	rarrfs: rarrfs,
    	rarrhk: rarrhk,
    	rarrlp: rarrlp,
    	rarrpl: rarrpl,
    	rarrsim: rarrsim,
    	Rarrtl: Rarrtl,
    	rarrtl: rarrtl,
    	rarrw: rarrw,
    	ratail: ratail,
    	rAtail: rAtail,
    	ratio: ratio,
    	rationals: rationals,
    	rbarr: rbarr,
    	rBarr: rBarr,
    	RBarr: RBarr,
    	rbbrk: rbbrk,
    	rbrace: rbrace,
    	rbrack: rbrack,
    	rbrke: rbrke,
    	rbrksld: rbrksld,
    	rbrkslu: rbrkslu,
    	Rcaron: Rcaron,
    	rcaron: rcaron,
    	Rcedil: Rcedil,
    	rcedil: rcedil,
    	rceil: rceil,
    	rcub: rcub,
    	Rcy: Rcy,
    	rcy: rcy,
    	rdca: rdca,
    	rdldhar: rdldhar,
    	rdquo: rdquo,
    	rdquor: rdquor,
    	rdsh: rdsh,
    	real: real,
    	realine: realine,
    	realpart: realpart,
    	reals: reals,
    	Re: Re,
    	rect: rect,
    	reg: reg,
    	REG: REG,
    	ReverseElement: ReverseElement,
    	ReverseEquilibrium: ReverseEquilibrium,
    	ReverseUpEquilibrium: ReverseUpEquilibrium,
    	rfisht: rfisht,
    	rfloor: rfloor,
    	rfr: rfr,
    	Rfr: Rfr,
    	rHar: rHar,
    	rhard: rhard,
    	rharu: rharu,
    	rharul: rharul,
    	Rho: Rho,
    	rho: rho,
    	rhov: rhov,
    	RightAngleBracket: RightAngleBracket,
    	RightArrowBar: RightArrowBar,
    	rightarrow: rightarrow,
    	RightArrow: RightArrow,
    	Rightarrow: Rightarrow,
    	RightArrowLeftArrow: RightArrowLeftArrow,
    	rightarrowtail: rightarrowtail,
    	RightCeiling: RightCeiling,
    	RightDoubleBracket: RightDoubleBracket,
    	RightDownTeeVector: RightDownTeeVector,
    	RightDownVectorBar: RightDownVectorBar,
    	RightDownVector: RightDownVector,
    	RightFloor: RightFloor,
    	rightharpoondown: rightharpoondown,
    	rightharpoonup: rightharpoonup,
    	rightleftarrows: rightleftarrows,
    	rightleftharpoons: rightleftharpoons,
    	rightrightarrows: rightrightarrows,
    	rightsquigarrow: rightsquigarrow,
    	RightTeeArrow: RightTeeArrow,
    	RightTee: RightTee,
    	RightTeeVector: RightTeeVector,
    	rightthreetimes: rightthreetimes,
    	RightTriangleBar: RightTriangleBar,
    	RightTriangle: RightTriangle,
    	RightTriangleEqual: RightTriangleEqual,
    	RightUpDownVector: RightUpDownVector,
    	RightUpTeeVector: RightUpTeeVector,
    	RightUpVectorBar: RightUpVectorBar,
    	RightUpVector: RightUpVector,
    	RightVectorBar: RightVectorBar,
    	RightVector: RightVector,
    	ring: ring,
    	risingdotseq: risingdotseq,
    	rlarr: rlarr,
    	rlhar: rlhar,
    	rlm: rlm,
    	rmoustache: rmoustache,
    	rmoust: rmoust,
    	rnmid: rnmid,
    	roang: roang,
    	roarr: roarr,
    	robrk: robrk,
    	ropar: ropar,
    	ropf: ropf,
    	Ropf: Ropf,
    	roplus: roplus,
    	rotimes: rotimes,
    	RoundImplies: RoundImplies,
    	rpar: rpar,
    	rpargt: rpargt,
    	rppolint: rppolint,
    	rrarr: rrarr,
    	Rrightarrow: Rrightarrow,
    	rsaquo: rsaquo,
    	rscr: rscr,
    	Rscr: Rscr,
    	rsh: rsh,
    	Rsh: Rsh,
    	rsqb: rsqb,
    	rsquo: rsquo,
    	rsquor: rsquor,
    	rthree: rthree,
    	rtimes: rtimes,
    	rtri: rtri,
    	rtrie: rtrie,
    	rtrif: rtrif,
    	rtriltri: rtriltri,
    	RuleDelayed: RuleDelayed,
    	ruluhar: ruluhar,
    	rx: rx,
    	Sacute: Sacute,
    	sacute: sacute,
    	sbquo: sbquo,
    	scap: scap,
    	Scaron: Scaron,
    	scaron: scaron,
    	Sc: Sc,
    	sc: sc,
    	sccue: sccue,
    	sce: sce,
    	scE: scE,
    	Scedil: Scedil,
    	scedil: scedil,
    	Scirc: Scirc,
    	scirc: scirc,
    	scnap: scnap,
    	scnE: scnE,
    	scnsim: scnsim,
    	scpolint: scpolint,
    	scsim: scsim,
    	Scy: Scy,
    	scy: scy,
    	sdotb: sdotb,
    	sdot: sdot,
    	sdote: sdote,
    	searhk: searhk,
    	searr: searr,
    	seArr: seArr,
    	searrow: searrow,
    	sect: sect,
    	semi: semi,
    	seswar: seswar,
    	setminus: setminus,
    	setmn: setmn,
    	sext: sext,
    	Sfr: Sfr,
    	sfr: sfr,
    	sfrown: sfrown,
    	sharp: sharp,
    	SHCHcy: SHCHcy,
    	shchcy: shchcy,
    	SHcy: SHcy,
    	shcy: shcy,
    	ShortDownArrow: ShortDownArrow,
    	ShortLeftArrow: ShortLeftArrow,
    	shortmid: shortmid,
    	shortparallel: shortparallel,
    	ShortRightArrow: ShortRightArrow,
    	ShortUpArrow: ShortUpArrow,
    	shy: shy,
    	Sigma: Sigma,
    	sigma: sigma,
    	sigmaf: sigmaf,
    	sigmav: sigmav,
    	sim: sim,
    	simdot: simdot,
    	sime: sime,
    	simeq: simeq,
    	simg: simg,
    	simgE: simgE,
    	siml: siml,
    	simlE: simlE,
    	simne: simne,
    	simplus: simplus,
    	simrarr: simrarr,
    	slarr: slarr,
    	SmallCircle: SmallCircle,
    	smallsetminus: smallsetminus,
    	smashp: smashp,
    	smeparsl: smeparsl,
    	smid: smid,
    	smile: smile,
    	smt: smt,
    	smte: smte,
    	smtes: smtes,
    	SOFTcy: SOFTcy,
    	softcy: softcy,
    	solbar: solbar,
    	solb: solb,
    	sol: sol,
    	Sopf: Sopf,
    	sopf: sopf,
    	spades: spades,
    	spadesuit: spadesuit,
    	spar: spar,
    	sqcap: sqcap,
    	sqcaps: sqcaps,
    	sqcup: sqcup,
    	sqcups: sqcups,
    	Sqrt: Sqrt,
    	sqsub: sqsub,
    	sqsube: sqsube,
    	sqsubset: sqsubset,
    	sqsubseteq: sqsubseteq,
    	sqsup: sqsup,
    	sqsupe: sqsupe,
    	sqsupset: sqsupset,
    	sqsupseteq: sqsupseteq,
    	square: square,
    	Square: Square,
    	SquareIntersection: SquareIntersection,
    	SquareSubset: SquareSubset,
    	SquareSubsetEqual: SquareSubsetEqual,
    	SquareSuperset: SquareSuperset,
    	SquareSupersetEqual: SquareSupersetEqual,
    	SquareUnion: SquareUnion,
    	squarf: squarf,
    	squ: squ,
    	squf: squf,
    	srarr: srarr,
    	Sscr: Sscr,
    	sscr: sscr,
    	ssetmn: ssetmn,
    	ssmile: ssmile,
    	sstarf: sstarf,
    	Star: Star,
    	star: star,
    	starf: starf,
    	straightepsilon: straightepsilon,
    	straightphi: straightphi,
    	strns: strns,
    	sub: sub,
    	Sub: Sub,
    	subdot: subdot,
    	subE: subE,
    	sube: sube,
    	subedot: subedot,
    	submult: submult,
    	subnE: subnE,
    	subne: subne,
    	subplus: subplus,
    	subrarr: subrarr,
    	subset: subset,
    	Subset: Subset,
    	subseteq: subseteq,
    	subseteqq: subseteqq,
    	SubsetEqual: SubsetEqual,
    	subsetneq: subsetneq,
    	subsetneqq: subsetneqq,
    	subsim: subsim,
    	subsub: subsub,
    	subsup: subsup,
    	succapprox: succapprox,
    	succ: succ,
    	succcurlyeq: succcurlyeq,
    	Succeeds: Succeeds,
    	SucceedsEqual: SucceedsEqual,
    	SucceedsSlantEqual: SucceedsSlantEqual,
    	SucceedsTilde: SucceedsTilde,
    	succeq: succeq,
    	succnapprox: succnapprox,
    	succneqq: succneqq,
    	succnsim: succnsim,
    	succsim: succsim,
    	SuchThat: SuchThat,
    	sum: sum,
    	Sum: Sum,
    	sung: sung,
    	sup1: sup1,
    	sup2: sup2,
    	sup3: sup3,
    	sup: sup,
    	Sup: Sup,
    	supdot: supdot,
    	supdsub: supdsub,
    	supE: supE,
    	supe: supe,
    	supedot: supedot,
    	Superset: Superset,
    	SupersetEqual: SupersetEqual,
    	suphsol: suphsol,
    	suphsub: suphsub,
    	suplarr: suplarr,
    	supmult: supmult,
    	supnE: supnE,
    	supne: supne,
    	supplus: supplus,
    	supset: supset,
    	Supset: Supset,
    	supseteq: supseteq,
    	supseteqq: supseteqq,
    	supsetneq: supsetneq,
    	supsetneqq: supsetneqq,
    	supsim: supsim,
    	supsub: supsub,
    	supsup: supsup,
    	swarhk: swarhk,
    	swarr: swarr,
    	swArr: swArr,
    	swarrow: swarrow,
    	swnwar: swnwar,
    	szlig: szlig,
    	Tab: Tab,
    	target: target,
    	Tau: Tau,
    	tau: tau,
    	tbrk: tbrk,
    	Tcaron: Tcaron,
    	tcaron: tcaron,
    	Tcedil: Tcedil,
    	tcedil: tcedil,
    	Tcy: Tcy,
    	tcy: tcy,
    	tdot: tdot,
    	telrec: telrec,
    	Tfr: Tfr,
    	tfr: tfr,
    	there4: there4,
    	therefore: therefore,
    	Therefore: Therefore,
    	Theta: Theta,
    	theta: theta,
    	thetasym: thetasym,
    	thetav: thetav,
    	thickapprox: thickapprox,
    	thicksim: thicksim,
    	ThickSpace: ThickSpace,
    	ThinSpace: ThinSpace,
    	thinsp: thinsp,
    	thkap: thkap,
    	thksim: thksim,
    	THORN: THORN,
    	thorn: thorn,
    	tilde: tilde,
    	Tilde: Tilde,
    	TildeEqual: TildeEqual,
    	TildeFullEqual: TildeFullEqual,
    	TildeTilde: TildeTilde,
    	timesbar: timesbar,
    	timesb: timesb,
    	times: times,
    	timesd: timesd,
    	tint: tint,
    	toea: toea,
    	topbot: topbot,
    	topcir: topcir,
    	top: top,
    	Topf: Topf,
    	topf: topf,
    	topfork: topfork,
    	tosa: tosa,
    	tprime: tprime,
    	trade: trade,
    	TRADE: TRADE,
    	triangle: triangle,
    	triangledown: triangledown,
    	triangleleft: triangleleft,
    	trianglelefteq: trianglelefteq,
    	triangleq: triangleq,
    	triangleright: triangleright,
    	trianglerighteq: trianglerighteq,
    	tridot: tridot,
    	trie: trie,
    	triminus: triminus,
    	TripleDot: TripleDot,
    	triplus: triplus,
    	trisb: trisb,
    	tritime: tritime,
    	trpezium: trpezium,
    	Tscr: Tscr,
    	tscr: tscr,
    	TScy: TScy,
    	tscy: tscy,
    	TSHcy: TSHcy,
    	tshcy: tshcy,
    	Tstrok: Tstrok,
    	tstrok: tstrok,
    	twixt: twixt,
    	twoheadleftarrow: twoheadleftarrow,
    	twoheadrightarrow: twoheadrightarrow,
    	Uacute: Uacute,
    	uacute: uacute,
    	uarr: uarr,
    	Uarr: Uarr,
    	uArr: uArr,
    	Uarrocir: Uarrocir,
    	Ubrcy: Ubrcy,
    	ubrcy: ubrcy,
    	Ubreve: Ubreve,
    	ubreve: ubreve,
    	Ucirc: Ucirc,
    	ucirc: ucirc,
    	Ucy: Ucy,
    	ucy: ucy,
    	udarr: udarr,
    	Udblac: Udblac,
    	udblac: udblac,
    	udhar: udhar,
    	ufisht: ufisht,
    	Ufr: Ufr,
    	ufr: ufr,
    	Ugrave: Ugrave,
    	ugrave: ugrave,
    	uHar: uHar,
    	uharl: uharl,
    	uharr: uharr,
    	uhblk: uhblk,
    	ulcorn: ulcorn,
    	ulcorner: ulcorner,
    	ulcrop: ulcrop,
    	ultri: ultri,
    	Umacr: Umacr,
    	umacr: umacr,
    	uml: uml,
    	UnderBar: UnderBar,
    	UnderBrace: UnderBrace,
    	UnderBracket: UnderBracket,
    	UnderParenthesis: UnderParenthesis,
    	Union: Union,
    	UnionPlus: UnionPlus,
    	Uogon: Uogon,
    	uogon: uogon,
    	Uopf: Uopf,
    	uopf: uopf,
    	UpArrowBar: UpArrowBar,
    	uparrow: uparrow,
    	UpArrow: UpArrow,
    	Uparrow: Uparrow,
    	UpArrowDownArrow: UpArrowDownArrow,
    	updownarrow: updownarrow,
    	UpDownArrow: UpDownArrow,
    	Updownarrow: Updownarrow,
    	UpEquilibrium: UpEquilibrium,
    	upharpoonleft: upharpoonleft,
    	upharpoonright: upharpoonright,
    	uplus: uplus,
    	UpperLeftArrow: UpperLeftArrow,
    	UpperRightArrow: UpperRightArrow,
    	upsi: upsi,
    	Upsi: Upsi,
    	upsih: upsih,
    	Upsilon: Upsilon,
    	upsilon: upsilon,
    	UpTeeArrow: UpTeeArrow,
    	UpTee: UpTee,
    	upuparrows: upuparrows,
    	urcorn: urcorn,
    	urcorner: urcorner,
    	urcrop: urcrop,
    	Uring: Uring,
    	uring: uring,
    	urtri: urtri,
    	Uscr: Uscr,
    	uscr: uscr,
    	utdot: utdot,
    	Utilde: Utilde,
    	utilde: utilde,
    	utri: utri,
    	utrif: utrif,
    	uuarr: uuarr,
    	Uuml: Uuml,
    	uuml: uuml,
    	uwangle: uwangle,
    	vangrt: vangrt,
    	varepsilon: varepsilon,
    	varkappa: varkappa,
    	varnothing: varnothing,
    	varphi: varphi,
    	varpi: varpi,
    	varpropto: varpropto,
    	varr: varr,
    	vArr: vArr,
    	varrho: varrho,
    	varsigma: varsigma,
    	varsubsetneq: varsubsetneq,
    	varsubsetneqq: varsubsetneqq,
    	varsupsetneq: varsupsetneq,
    	varsupsetneqq: varsupsetneqq,
    	vartheta: vartheta,
    	vartriangleleft: vartriangleleft,
    	vartriangleright: vartriangleright,
    	vBar: vBar,
    	Vbar: Vbar,
    	vBarv: vBarv,
    	Vcy: Vcy,
    	vcy: vcy,
    	vdash: vdash,
    	vDash: vDash,
    	Vdash: Vdash,
    	VDash: VDash,
    	Vdashl: Vdashl,
    	veebar: veebar,
    	vee: vee,
    	Vee: Vee,
    	veeeq: veeeq,
    	vellip: vellip,
    	verbar: verbar,
    	Verbar: Verbar,
    	vert: vert,
    	Vert: Vert,
    	VerticalBar: VerticalBar,
    	VerticalLine: VerticalLine,
    	VerticalSeparator: VerticalSeparator,
    	VerticalTilde: VerticalTilde,
    	VeryThinSpace: VeryThinSpace,
    	Vfr: Vfr,
    	vfr: vfr,
    	vltri: vltri,
    	vnsub: vnsub,
    	vnsup: vnsup,
    	Vopf: Vopf,
    	vopf: vopf,
    	vprop: vprop,
    	vrtri: vrtri,
    	Vscr: Vscr,
    	vscr: vscr,
    	vsubnE: vsubnE,
    	vsubne: vsubne,
    	vsupnE: vsupnE,
    	vsupne: vsupne,
    	Vvdash: Vvdash,
    	vzigzag: vzigzag,
    	Wcirc: Wcirc,
    	wcirc: wcirc,
    	wedbar: wedbar,
    	wedge: wedge,
    	Wedge: Wedge,
    	wedgeq: wedgeq,
    	weierp: weierp,
    	Wfr: Wfr,
    	wfr: wfr,
    	Wopf: Wopf,
    	wopf: wopf,
    	wp: wp,
    	wr: wr,
    	wreath: wreath,
    	Wscr: Wscr,
    	wscr: wscr,
    	xcap: xcap,
    	xcirc: xcirc,
    	xcup: xcup,
    	xdtri: xdtri,
    	Xfr: Xfr,
    	xfr: xfr,
    	xharr: xharr,
    	xhArr: xhArr,
    	Xi: Xi,
    	xi: xi,
    	xlarr: xlarr,
    	xlArr: xlArr,
    	xmap: xmap,
    	xnis: xnis,
    	xodot: xodot,
    	Xopf: Xopf,
    	xopf: xopf,
    	xoplus: xoplus,
    	xotime: xotime,
    	xrarr: xrarr,
    	xrArr: xrArr,
    	Xscr: Xscr,
    	xscr: xscr,
    	xsqcup: xsqcup,
    	xuplus: xuplus,
    	xutri: xutri,
    	xvee: xvee,
    	xwedge: xwedge,
    	Yacute: Yacute,
    	yacute: yacute,
    	YAcy: YAcy,
    	yacy: yacy,
    	Ycirc: Ycirc,
    	ycirc: ycirc,
    	Ycy: Ycy,
    	ycy: ycy,
    	yen: yen,
    	Yfr: Yfr,
    	yfr: yfr,
    	YIcy: YIcy,
    	yicy: yicy,
    	Yopf: Yopf,
    	yopf: yopf,
    	Yscr: Yscr,
    	yscr: yscr,
    	YUcy: YUcy,
    	yucy: yucy,
    	yuml: yuml,
    	Yuml: Yuml,
    	Zacute: Zacute,
    	zacute: zacute,
    	Zcaron: Zcaron,
    	zcaron: zcaron,
    	Zcy: Zcy,
    	zcy: zcy,
    	Zdot: Zdot,
    	zdot: zdot,
    	zeetrf: zeetrf,
    	ZeroWidthSpace: ZeroWidthSpace,
    	Zeta: Zeta,
    	zeta: zeta,
    	zfr: zfr,
    	Zfr: Zfr,
    	ZHcy: ZHcy,
    	zhcy: zhcy,
    	zigrarr: zigrarr,
    	zopf: zopf,
    	Zopf: Zopf,
    	Zscr: Zscr,
    	zscr: zscr,
    	zwj: zwj,
    	zwnj: zwnj
    };

    var entities$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Aacute: Aacute,
        aacute: aacute,
        Abreve: Abreve,
        abreve: abreve,
        ac: ac,
        acd: acd,
        acE: acE,
        Acirc: Acirc,
        acirc: acirc,
        acute: acute,
        Acy: Acy,
        acy: acy,
        AElig: AElig,
        aelig: aelig,
        af: af,
        Afr: Afr,
        afr: afr,
        Agrave: Agrave,
        agrave: agrave,
        alefsym: alefsym,
        aleph: aleph,
        Alpha: Alpha,
        alpha: alpha,
        Amacr: Amacr,
        amacr: amacr,
        amalg: amalg,
        amp: amp,
        AMP: AMP,
        andand: andand,
        And: And,
        and: and,
        andd: andd,
        andslope: andslope,
        andv: andv,
        ang: ang,
        ange: ange,
        angle: angle,
        angmsdaa: angmsdaa,
        angmsdab: angmsdab,
        angmsdac: angmsdac,
        angmsdad: angmsdad,
        angmsdae: angmsdae,
        angmsdaf: angmsdaf,
        angmsdag: angmsdag,
        angmsdah: angmsdah,
        angmsd: angmsd,
        angrt: angrt,
        angrtvb: angrtvb,
        angrtvbd: angrtvbd,
        angsph: angsph,
        angst: angst,
        angzarr: angzarr,
        Aogon: Aogon,
        aogon: aogon,
        Aopf: Aopf,
        aopf: aopf,
        apacir: apacir,
        ap: ap,
        apE: apE,
        ape: ape,
        apid: apid,
        apos: apos,
        ApplyFunction: ApplyFunction,
        approx: approx,
        approxeq: approxeq,
        Aring: Aring,
        aring: aring,
        Ascr: Ascr,
        ascr: ascr,
        Assign: Assign,
        ast: ast,
        asymp: asymp,
        asympeq: asympeq,
        Atilde: Atilde,
        atilde: atilde,
        Auml: Auml,
        auml: auml,
        awconint: awconint,
        awint: awint,
        backcong: backcong,
        backepsilon: backepsilon,
        backprime: backprime,
        backsim: backsim,
        backsimeq: backsimeq,
        Backslash: Backslash,
        Barv: Barv,
        barvee: barvee,
        barwed: barwed,
        Barwed: Barwed,
        barwedge: barwedge,
        bbrk: bbrk,
        bbrktbrk: bbrktbrk,
        bcong: bcong,
        Bcy: Bcy,
        bcy: bcy,
        bdquo: bdquo,
        becaus: becaus,
        because: because,
        Because: Because,
        bemptyv: bemptyv,
        bepsi: bepsi,
        bernou: bernou,
        Bernoullis: Bernoullis,
        Beta: Beta,
        beta: beta,
        beth: beth,
        between: between,
        Bfr: Bfr,
        bfr: bfr,
        bigcap: bigcap,
        bigcirc: bigcirc,
        bigcup: bigcup,
        bigodot: bigodot,
        bigoplus: bigoplus,
        bigotimes: bigotimes,
        bigsqcup: bigsqcup,
        bigstar: bigstar,
        bigtriangledown: bigtriangledown,
        bigtriangleup: bigtriangleup,
        biguplus: biguplus,
        bigvee: bigvee,
        bigwedge: bigwedge,
        bkarow: bkarow,
        blacklozenge: blacklozenge,
        blacksquare: blacksquare,
        blacktriangle: blacktriangle,
        blacktriangledown: blacktriangledown,
        blacktriangleleft: blacktriangleleft,
        blacktriangleright: blacktriangleright,
        blank: blank,
        blk12: blk12,
        blk14: blk14,
        blk34: blk34,
        block: block,
        bne: bne,
        bnequiv: bnequiv,
        bNot: bNot,
        bnot: bnot,
        Bopf: Bopf,
        bopf: bopf,
        bot: bot,
        bottom: bottom,
        bowtie: bowtie,
        boxbox: boxbox,
        boxdl: boxdl,
        boxdL: boxdL,
        boxDl: boxDl,
        boxDL: boxDL,
        boxdr: boxdr,
        boxdR: boxdR,
        boxDr: boxDr,
        boxDR: boxDR,
        boxh: boxh,
        boxH: boxH,
        boxhd: boxhd,
        boxHd: boxHd,
        boxhD: boxhD,
        boxHD: boxHD,
        boxhu: boxhu,
        boxHu: boxHu,
        boxhU: boxhU,
        boxHU: boxHU,
        boxminus: boxminus,
        boxplus: boxplus,
        boxtimes: boxtimes,
        boxul: boxul,
        boxuL: boxuL,
        boxUl: boxUl,
        boxUL: boxUL,
        boxur: boxur,
        boxuR: boxuR,
        boxUr: boxUr,
        boxUR: boxUR,
        boxv: boxv,
        boxV: boxV,
        boxvh: boxvh,
        boxvH: boxvH,
        boxVh: boxVh,
        boxVH: boxVH,
        boxvl: boxvl,
        boxvL: boxvL,
        boxVl: boxVl,
        boxVL: boxVL,
        boxvr: boxvr,
        boxvR: boxvR,
        boxVr: boxVr,
        boxVR: boxVR,
        bprime: bprime,
        breve: breve,
        Breve: Breve,
        brvbar: brvbar,
        bscr: bscr,
        Bscr: Bscr,
        bsemi: bsemi,
        bsim: bsim,
        bsime: bsime,
        bsolb: bsolb,
        bsol: bsol,
        bsolhsub: bsolhsub,
        bull: bull,
        bullet: bullet,
        bump: bump,
        bumpE: bumpE,
        bumpe: bumpe,
        Bumpeq: Bumpeq,
        bumpeq: bumpeq,
        Cacute: Cacute,
        cacute: cacute,
        capand: capand,
        capbrcup: capbrcup,
        capcap: capcap,
        cap: cap,
        Cap: Cap,
        capcup: capcup,
        capdot: capdot,
        CapitalDifferentialD: CapitalDifferentialD,
        caps: caps,
        caret: caret,
        caron: caron,
        Cayleys: Cayleys,
        ccaps: ccaps,
        Ccaron: Ccaron,
        ccaron: ccaron,
        Ccedil: Ccedil,
        ccedil: ccedil,
        Ccirc: Ccirc,
        ccirc: ccirc,
        Cconint: Cconint,
        ccups: ccups,
        ccupssm: ccupssm,
        Cdot: Cdot,
        cdot: cdot,
        cedil: cedil,
        Cedilla: Cedilla,
        cemptyv: cemptyv,
        cent: cent,
        centerdot: centerdot,
        CenterDot: CenterDot,
        cfr: cfr,
        Cfr: Cfr,
        CHcy: CHcy,
        chcy: chcy,
        check: check,
        checkmark: checkmark,
        Chi: Chi,
        chi: chi,
        circ: circ,
        circeq: circeq,
        circlearrowleft: circlearrowleft,
        circlearrowright: circlearrowright,
        circledast: circledast,
        circledcirc: circledcirc,
        circleddash: circleddash,
        CircleDot: CircleDot,
        circledR: circledR,
        circledS: circledS,
        CircleMinus: CircleMinus,
        CirclePlus: CirclePlus,
        CircleTimes: CircleTimes,
        cir: cir,
        cirE: cirE,
        cire: cire,
        cirfnint: cirfnint,
        cirmid: cirmid,
        cirscir: cirscir,
        ClockwiseContourIntegral: ClockwiseContourIntegral,
        CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
        CloseCurlyQuote: CloseCurlyQuote,
        clubs: clubs,
        clubsuit: clubsuit,
        colon: colon,
        Colon: Colon,
        Colone: Colone,
        colone: colone,
        coloneq: coloneq,
        comma: comma,
        commat: commat,
        comp: comp,
        compfn: compfn,
        complement: complement,
        complexes: complexes,
        cong: cong,
        congdot: congdot,
        Congruent: Congruent,
        conint: conint,
        Conint: Conint,
        ContourIntegral: ContourIntegral,
        copf: copf,
        Copf: Copf,
        coprod: coprod,
        Coproduct: Coproduct,
        copy: copy,
        COPY: COPY,
        copysr: copysr,
        CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
        crarr: crarr,
        cross: cross,
        Cross: Cross,
        Cscr: Cscr,
        cscr: cscr,
        csub: csub,
        csube: csube,
        csup: csup,
        csupe: csupe,
        ctdot: ctdot,
        cudarrl: cudarrl,
        cudarrr: cudarrr,
        cuepr: cuepr,
        cuesc: cuesc,
        cularr: cularr,
        cularrp: cularrp,
        cupbrcap: cupbrcap,
        cupcap: cupcap,
        CupCap: CupCap,
        cup: cup,
        Cup: Cup,
        cupcup: cupcup,
        cupdot: cupdot,
        cupor: cupor,
        cups: cups,
        curarr: curarr,
        curarrm: curarrm,
        curlyeqprec: curlyeqprec,
        curlyeqsucc: curlyeqsucc,
        curlyvee: curlyvee,
        curlywedge: curlywedge,
        curren: curren,
        curvearrowleft: curvearrowleft,
        curvearrowright: curvearrowright,
        cuvee: cuvee,
        cuwed: cuwed,
        cwconint: cwconint,
        cwint: cwint,
        cylcty: cylcty,
        dagger: dagger,
        Dagger: Dagger,
        daleth: daleth,
        darr: darr,
        Darr: Darr,
        dArr: dArr,
        dash: dash,
        Dashv: Dashv,
        dashv: dashv,
        dbkarow: dbkarow,
        dblac: dblac,
        Dcaron: Dcaron,
        dcaron: dcaron,
        Dcy: Dcy,
        dcy: dcy,
        ddagger: ddagger,
        ddarr: ddarr,
        DD: DD,
        dd: dd,
        DDotrahd: DDotrahd,
        ddotseq: ddotseq,
        deg: deg,
        Del: Del,
        Delta: Delta,
        delta: delta,
        demptyv: demptyv,
        dfisht: dfisht,
        Dfr: Dfr,
        dfr: dfr,
        dHar: dHar,
        dharl: dharl,
        dharr: dharr,
        DiacriticalAcute: DiacriticalAcute,
        DiacriticalDot: DiacriticalDot,
        DiacriticalDoubleAcute: DiacriticalDoubleAcute,
        DiacriticalGrave: DiacriticalGrave,
        DiacriticalTilde: DiacriticalTilde,
        diam: diam,
        diamond: diamond,
        Diamond: Diamond,
        diamondsuit: diamondsuit,
        diams: diams,
        die: die,
        DifferentialD: DifferentialD,
        digamma: digamma,
        disin: disin,
        div: div,
        divide: divide,
        divideontimes: divideontimes,
        divonx: divonx,
        DJcy: DJcy,
        djcy: djcy,
        dlcorn: dlcorn,
        dlcrop: dlcrop,
        dollar: dollar,
        Dopf: Dopf,
        dopf: dopf,
        Dot: Dot,
        dot: dot,
        DotDot: DotDot,
        doteq: doteq,
        doteqdot: doteqdot,
        DotEqual: DotEqual,
        dotminus: dotminus,
        dotplus: dotplus,
        dotsquare: dotsquare,
        doublebarwedge: doublebarwedge,
        DoubleContourIntegral: DoubleContourIntegral,
        DoubleDot: DoubleDot,
        DoubleDownArrow: DoubleDownArrow,
        DoubleLeftArrow: DoubleLeftArrow,
        DoubleLeftRightArrow: DoubleLeftRightArrow,
        DoubleLeftTee: DoubleLeftTee,
        DoubleLongLeftArrow: DoubleLongLeftArrow,
        DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
        DoubleLongRightArrow: DoubleLongRightArrow,
        DoubleRightArrow: DoubleRightArrow,
        DoubleRightTee: DoubleRightTee,
        DoubleUpArrow: DoubleUpArrow,
        DoubleUpDownArrow: DoubleUpDownArrow,
        DoubleVerticalBar: DoubleVerticalBar,
        DownArrowBar: DownArrowBar,
        downarrow: downarrow,
        DownArrow: DownArrow,
        Downarrow: Downarrow,
        DownArrowUpArrow: DownArrowUpArrow,
        DownBreve: DownBreve,
        downdownarrows: downdownarrows,
        downharpoonleft: downharpoonleft,
        downharpoonright: downharpoonright,
        DownLeftRightVector: DownLeftRightVector,
        DownLeftTeeVector: DownLeftTeeVector,
        DownLeftVectorBar: DownLeftVectorBar,
        DownLeftVector: DownLeftVector,
        DownRightTeeVector: DownRightTeeVector,
        DownRightVectorBar: DownRightVectorBar,
        DownRightVector: DownRightVector,
        DownTeeArrow: DownTeeArrow,
        DownTee: DownTee,
        drbkarow: drbkarow,
        drcorn: drcorn,
        drcrop: drcrop,
        Dscr: Dscr,
        dscr: dscr,
        DScy: DScy,
        dscy: dscy,
        dsol: dsol,
        Dstrok: Dstrok,
        dstrok: dstrok,
        dtdot: dtdot,
        dtri: dtri,
        dtrif: dtrif,
        duarr: duarr,
        duhar: duhar,
        dwangle: dwangle,
        DZcy: DZcy,
        dzcy: dzcy,
        dzigrarr: dzigrarr,
        Eacute: Eacute,
        eacute: eacute,
        easter: easter,
        Ecaron: Ecaron,
        ecaron: ecaron,
        Ecirc: Ecirc,
        ecirc: ecirc,
        ecir: ecir,
        ecolon: ecolon,
        Ecy: Ecy,
        ecy: ecy,
        eDDot: eDDot,
        Edot: Edot,
        edot: edot,
        eDot: eDot,
        ee: ee,
        efDot: efDot,
        Efr: Efr,
        efr: efr,
        eg: eg,
        Egrave: Egrave,
        egrave: egrave,
        egs: egs,
        egsdot: egsdot,
        el: el,
        Element: Element,
        elinters: elinters,
        ell: ell,
        els: els,
        elsdot: elsdot,
        Emacr: Emacr,
        emacr: emacr,
        empty: empty,
        emptyset: emptyset,
        EmptySmallSquare: EmptySmallSquare,
        emptyv: emptyv,
        EmptyVerySmallSquare: EmptyVerySmallSquare,
        emsp13: emsp13,
        emsp14: emsp14,
        emsp: emsp,
        ENG: ENG,
        eng: eng,
        ensp: ensp,
        Eogon: Eogon,
        eogon: eogon,
        Eopf: Eopf,
        eopf: eopf,
        epar: epar,
        eparsl: eparsl,
        eplus: eplus,
        epsi: epsi,
        Epsilon: Epsilon,
        epsilon: epsilon,
        epsiv: epsiv,
        eqcirc: eqcirc,
        eqcolon: eqcolon,
        eqsim: eqsim,
        eqslantgtr: eqslantgtr,
        eqslantless: eqslantless,
        Equal: Equal,
        equals: equals,
        EqualTilde: EqualTilde,
        equest: equest,
        Equilibrium: Equilibrium,
        equiv: equiv,
        equivDD: equivDD,
        eqvparsl: eqvparsl,
        erarr: erarr,
        erDot: erDot,
        escr: escr,
        Escr: Escr,
        esdot: esdot,
        Esim: Esim,
        esim: esim,
        Eta: Eta,
        eta: eta,
        ETH: ETH,
        eth: eth,
        Euml: Euml,
        euml: euml,
        euro: euro,
        excl: excl,
        exist: exist,
        Exists: Exists,
        expectation: expectation,
        exponentiale: exponentiale,
        ExponentialE: ExponentialE,
        fallingdotseq: fallingdotseq,
        Fcy: Fcy,
        fcy: fcy,
        female: female,
        ffilig: ffilig,
        fflig: fflig,
        ffllig: ffllig,
        Ffr: Ffr,
        ffr: ffr,
        filig: filig,
        FilledSmallSquare: FilledSmallSquare,
        FilledVerySmallSquare: FilledVerySmallSquare,
        fjlig: fjlig,
        flat: flat,
        fllig: fllig,
        fltns: fltns,
        fnof: fnof,
        Fopf: Fopf,
        fopf: fopf,
        forall: forall,
        ForAll: ForAll,
        fork: fork,
        forkv: forkv,
        Fouriertrf: Fouriertrf,
        fpartint: fpartint,
        frac12: frac12,
        frac13: frac13,
        frac14: frac14,
        frac15: frac15,
        frac16: frac16,
        frac18: frac18,
        frac23: frac23,
        frac25: frac25,
        frac34: frac34,
        frac35: frac35,
        frac38: frac38,
        frac45: frac45,
        frac56: frac56,
        frac58: frac58,
        frac78: frac78,
        frasl: frasl,
        frown: frown,
        fscr: fscr,
        Fscr: Fscr,
        gacute: gacute,
        Gamma: Gamma,
        gamma: gamma,
        Gammad: Gammad,
        gammad: gammad,
        gap: gap,
        Gbreve: Gbreve,
        gbreve: gbreve,
        Gcedil: Gcedil,
        Gcirc: Gcirc,
        gcirc: gcirc,
        Gcy: Gcy,
        gcy: gcy,
        Gdot: Gdot,
        gdot: gdot,
        ge: ge,
        gE: gE,
        gEl: gEl,
        gel: gel,
        geq: geq,
        geqq: geqq,
        geqslant: geqslant,
        gescc: gescc,
        ges: ges,
        gesdot: gesdot,
        gesdoto: gesdoto,
        gesdotol: gesdotol,
        gesl: gesl,
        gesles: gesles,
        Gfr: Gfr,
        gfr: gfr,
        gg: gg,
        Gg: Gg,
        ggg: ggg,
        gimel: gimel,
        GJcy: GJcy,
        gjcy: gjcy,
        gla: gla,
        gl: gl,
        glE: glE,
        glj: glj,
        gnap: gnap,
        gnapprox: gnapprox,
        gne: gne,
        gnE: gnE,
        gneq: gneq,
        gneqq: gneqq,
        gnsim: gnsim,
        Gopf: Gopf,
        gopf: gopf,
        grave: grave,
        GreaterEqual: GreaterEqual,
        GreaterEqualLess: GreaterEqualLess,
        GreaterFullEqual: GreaterFullEqual,
        GreaterGreater: GreaterGreater,
        GreaterLess: GreaterLess,
        GreaterSlantEqual: GreaterSlantEqual,
        GreaterTilde: GreaterTilde,
        Gscr: Gscr,
        gscr: gscr,
        gsim: gsim,
        gsime: gsime,
        gsiml: gsiml,
        gtcc: gtcc,
        gtcir: gtcir,
        gt: gt,
        GT: GT,
        Gt: Gt,
        gtdot: gtdot,
        gtlPar: gtlPar,
        gtquest: gtquest,
        gtrapprox: gtrapprox,
        gtrarr: gtrarr,
        gtrdot: gtrdot,
        gtreqless: gtreqless,
        gtreqqless: gtreqqless,
        gtrless: gtrless,
        gtrsim: gtrsim,
        gvertneqq: gvertneqq,
        gvnE: gvnE,
        Hacek: Hacek,
        hairsp: hairsp,
        half: half,
        hamilt: hamilt,
        HARDcy: HARDcy,
        hardcy: hardcy,
        harrcir: harrcir,
        harr: harr,
        hArr: hArr,
        harrw: harrw,
        Hat: Hat,
        hbar: hbar,
        Hcirc: Hcirc,
        hcirc: hcirc,
        hearts: hearts,
        heartsuit: heartsuit,
        hellip: hellip,
        hercon: hercon,
        hfr: hfr,
        Hfr: Hfr,
        HilbertSpace: HilbertSpace,
        hksearow: hksearow,
        hkswarow: hkswarow,
        hoarr: hoarr,
        homtht: homtht,
        hookleftarrow: hookleftarrow,
        hookrightarrow: hookrightarrow,
        hopf: hopf,
        Hopf: Hopf,
        horbar: horbar,
        HorizontalLine: HorizontalLine,
        hscr: hscr,
        Hscr: Hscr,
        hslash: hslash,
        Hstrok: Hstrok,
        hstrok: hstrok,
        HumpDownHump: HumpDownHump,
        HumpEqual: HumpEqual,
        hybull: hybull,
        hyphen: hyphen,
        Iacute: Iacute,
        iacute: iacute,
        ic: ic,
        Icirc: Icirc,
        icirc: icirc,
        Icy: Icy,
        icy: icy,
        Idot: Idot,
        IEcy: IEcy,
        iecy: iecy,
        iexcl: iexcl,
        iff: iff,
        ifr: ifr,
        Ifr: Ifr,
        Igrave: Igrave,
        igrave: igrave,
        ii: ii,
        iiiint: iiiint,
        iiint: iiint,
        iinfin: iinfin,
        iiota: iiota,
        IJlig: IJlig,
        ijlig: ijlig,
        Imacr: Imacr,
        imacr: imacr,
        image: image,
        ImaginaryI: ImaginaryI,
        imagline: imagline,
        imagpart: imagpart,
        imath: imath,
        Im: Im,
        imof: imof,
        imped: imped,
        Implies: Implies,
        incare: incare,
        infin: infin,
        infintie: infintie,
        inodot: inodot,
        intcal: intcal,
        int: int,
        Int: Int,
        integers: integers,
        Integral: Integral,
        intercal: intercal,
        Intersection: Intersection,
        intlarhk: intlarhk,
        intprod: intprod,
        InvisibleComma: InvisibleComma,
        InvisibleTimes: InvisibleTimes,
        IOcy: IOcy,
        iocy: iocy,
        Iogon: Iogon,
        iogon: iogon,
        Iopf: Iopf,
        iopf: iopf,
        Iota: Iota,
        iota: iota,
        iprod: iprod,
        iquest: iquest,
        iscr: iscr,
        Iscr: Iscr,
        isin: isin,
        isindot: isindot,
        isinE: isinE,
        isins: isins,
        isinsv: isinsv,
        isinv: isinv,
        it: it,
        Itilde: Itilde,
        itilde: itilde,
        Iukcy: Iukcy,
        iukcy: iukcy,
        Iuml: Iuml,
        iuml: iuml,
        Jcirc: Jcirc,
        jcirc: jcirc,
        Jcy: Jcy,
        jcy: jcy,
        Jfr: Jfr,
        jfr: jfr,
        jmath: jmath,
        Jopf: Jopf,
        jopf: jopf,
        Jscr: Jscr,
        jscr: jscr,
        Jsercy: Jsercy,
        jsercy: jsercy,
        Jukcy: Jukcy,
        jukcy: jukcy,
        Kappa: Kappa,
        kappa: kappa,
        kappav: kappav,
        Kcedil: Kcedil,
        kcedil: kcedil,
        Kcy: Kcy,
        kcy: kcy,
        Kfr: Kfr,
        kfr: kfr,
        kgreen: kgreen,
        KHcy: KHcy,
        khcy: khcy,
        KJcy: KJcy,
        kjcy: kjcy,
        Kopf: Kopf,
        kopf: kopf,
        Kscr: Kscr,
        kscr: kscr,
        lAarr: lAarr,
        Lacute: Lacute,
        lacute: lacute,
        laemptyv: laemptyv,
        lagran: lagran,
        Lambda: Lambda,
        lambda: lambda,
        lang: lang,
        Lang: Lang,
        langd: langd,
        langle: langle,
        lap: lap,
        Laplacetrf: Laplacetrf,
        laquo: laquo,
        larrb: larrb,
        larrbfs: larrbfs,
        larr: larr,
        Larr: Larr,
        lArr: lArr,
        larrfs: larrfs,
        larrhk: larrhk,
        larrlp: larrlp,
        larrpl: larrpl,
        larrsim: larrsim,
        larrtl: larrtl,
        latail: latail,
        lAtail: lAtail,
        lat: lat,
        late: late,
        lates: lates,
        lbarr: lbarr,
        lBarr: lBarr,
        lbbrk: lbbrk,
        lbrace: lbrace,
        lbrack: lbrack,
        lbrke: lbrke,
        lbrksld: lbrksld,
        lbrkslu: lbrkslu,
        Lcaron: Lcaron,
        lcaron: lcaron,
        Lcedil: Lcedil,
        lcedil: lcedil,
        lceil: lceil,
        lcub: lcub,
        Lcy: Lcy,
        lcy: lcy,
        ldca: ldca,
        ldquo: ldquo,
        ldquor: ldquor,
        ldrdhar: ldrdhar,
        ldrushar: ldrushar,
        ldsh: ldsh,
        le: le,
        lE: lE,
        LeftAngleBracket: LeftAngleBracket,
        LeftArrowBar: LeftArrowBar,
        leftarrow: leftarrow,
        LeftArrow: LeftArrow,
        Leftarrow: Leftarrow,
        LeftArrowRightArrow: LeftArrowRightArrow,
        leftarrowtail: leftarrowtail,
        LeftCeiling: LeftCeiling,
        LeftDoubleBracket: LeftDoubleBracket,
        LeftDownTeeVector: LeftDownTeeVector,
        LeftDownVectorBar: LeftDownVectorBar,
        LeftDownVector: LeftDownVector,
        LeftFloor: LeftFloor,
        leftharpoondown: leftharpoondown,
        leftharpoonup: leftharpoonup,
        leftleftarrows: leftleftarrows,
        leftrightarrow: leftrightarrow,
        LeftRightArrow: LeftRightArrow,
        Leftrightarrow: Leftrightarrow,
        leftrightarrows: leftrightarrows,
        leftrightharpoons: leftrightharpoons,
        leftrightsquigarrow: leftrightsquigarrow,
        LeftRightVector: LeftRightVector,
        LeftTeeArrow: LeftTeeArrow,
        LeftTee: LeftTee,
        LeftTeeVector: LeftTeeVector,
        leftthreetimes: leftthreetimes,
        LeftTriangleBar: LeftTriangleBar,
        LeftTriangle: LeftTriangle,
        LeftTriangleEqual: LeftTriangleEqual,
        LeftUpDownVector: LeftUpDownVector,
        LeftUpTeeVector: LeftUpTeeVector,
        LeftUpVectorBar: LeftUpVectorBar,
        LeftUpVector: LeftUpVector,
        LeftVectorBar: LeftVectorBar,
        LeftVector: LeftVector,
        lEg: lEg,
        leg: leg,
        leq: leq,
        leqq: leqq,
        leqslant: leqslant,
        lescc: lescc,
        les: les,
        lesdot: lesdot,
        lesdoto: lesdoto,
        lesdotor: lesdotor,
        lesg: lesg,
        lesges: lesges,
        lessapprox: lessapprox,
        lessdot: lessdot,
        lesseqgtr: lesseqgtr,
        lesseqqgtr: lesseqqgtr,
        LessEqualGreater: LessEqualGreater,
        LessFullEqual: LessFullEqual,
        LessGreater: LessGreater,
        lessgtr: lessgtr,
        LessLess: LessLess,
        lesssim: lesssim,
        LessSlantEqual: LessSlantEqual,
        LessTilde: LessTilde,
        lfisht: lfisht,
        lfloor: lfloor,
        Lfr: Lfr,
        lfr: lfr,
        lg: lg,
        lgE: lgE,
        lHar: lHar,
        lhard: lhard,
        lharu: lharu,
        lharul: lharul,
        lhblk: lhblk,
        LJcy: LJcy,
        ljcy: ljcy,
        llarr: llarr,
        ll: ll,
        Ll: Ll,
        llcorner: llcorner,
        Lleftarrow: Lleftarrow,
        llhard: llhard,
        lltri: lltri,
        Lmidot: Lmidot,
        lmidot: lmidot,
        lmoustache: lmoustache,
        lmoust: lmoust,
        lnap: lnap,
        lnapprox: lnapprox,
        lne: lne,
        lnE: lnE,
        lneq: lneq,
        lneqq: lneqq,
        lnsim: lnsim,
        loang: loang,
        loarr: loarr,
        lobrk: lobrk,
        longleftarrow: longleftarrow,
        LongLeftArrow: LongLeftArrow,
        Longleftarrow: Longleftarrow,
        longleftrightarrow: longleftrightarrow,
        LongLeftRightArrow: LongLeftRightArrow,
        Longleftrightarrow: Longleftrightarrow,
        longmapsto: longmapsto,
        longrightarrow: longrightarrow,
        LongRightArrow: LongRightArrow,
        Longrightarrow: Longrightarrow,
        looparrowleft: looparrowleft,
        looparrowright: looparrowright,
        lopar: lopar,
        Lopf: Lopf,
        lopf: lopf,
        loplus: loplus,
        lotimes: lotimes,
        lowast: lowast,
        lowbar: lowbar,
        LowerLeftArrow: LowerLeftArrow,
        LowerRightArrow: LowerRightArrow,
        loz: loz,
        lozenge: lozenge,
        lozf: lozf,
        lpar: lpar,
        lparlt: lparlt,
        lrarr: lrarr,
        lrcorner: lrcorner,
        lrhar: lrhar,
        lrhard: lrhard,
        lrm: lrm,
        lrtri: lrtri,
        lsaquo: lsaquo,
        lscr: lscr,
        Lscr: Lscr,
        lsh: lsh,
        Lsh: Lsh,
        lsim: lsim,
        lsime: lsime,
        lsimg: lsimg,
        lsqb: lsqb,
        lsquo: lsquo,
        lsquor: lsquor,
        Lstrok: Lstrok,
        lstrok: lstrok,
        ltcc: ltcc,
        ltcir: ltcir,
        lt: lt,
        LT: LT,
        Lt: Lt,
        ltdot: ltdot,
        lthree: lthree,
        ltimes: ltimes,
        ltlarr: ltlarr,
        ltquest: ltquest,
        ltri: ltri,
        ltrie: ltrie,
        ltrif: ltrif,
        ltrPar: ltrPar,
        lurdshar: lurdshar,
        luruhar: luruhar,
        lvertneqq: lvertneqq,
        lvnE: lvnE,
        macr: macr,
        male: male,
        malt: malt,
        maltese: maltese,
        map: map,
        mapsto: mapsto,
        mapstodown: mapstodown,
        mapstoleft: mapstoleft,
        mapstoup: mapstoup,
        marker: marker,
        mcomma: mcomma,
        Mcy: Mcy,
        mcy: mcy,
        mdash: mdash,
        mDDot: mDDot,
        measuredangle: measuredangle,
        MediumSpace: MediumSpace,
        Mellintrf: Mellintrf,
        Mfr: Mfr,
        mfr: mfr,
        mho: mho,
        micro: micro,
        midast: midast,
        midcir: midcir,
        mid: mid,
        middot: middot,
        minusb: minusb,
        minus: minus,
        minusd: minusd,
        minusdu: minusdu,
        MinusPlus: MinusPlus,
        mlcp: mlcp,
        mldr: mldr,
        mnplus: mnplus,
        models: models,
        Mopf: Mopf,
        mopf: mopf,
        mp: mp,
        mscr: mscr,
        Mscr: Mscr,
        mstpos: mstpos,
        Mu: Mu,
        mu: mu,
        multimap: multimap,
        mumap: mumap,
        nabla: nabla,
        Nacute: Nacute,
        nacute: nacute,
        nang: nang,
        nap: nap,
        napE: napE,
        napid: napid,
        napos: napos,
        napprox: napprox,
        natural: natural,
        naturals: naturals,
        natur: natur,
        nbsp: nbsp,
        nbump: nbump,
        nbumpe: nbumpe,
        ncap: ncap,
        Ncaron: Ncaron,
        ncaron: ncaron,
        Ncedil: Ncedil,
        ncedil: ncedil,
        ncong: ncong,
        ncongdot: ncongdot,
        ncup: ncup,
        Ncy: Ncy,
        ncy: ncy,
        ndash: ndash,
        nearhk: nearhk,
        nearr: nearr,
        neArr: neArr,
        nearrow: nearrow,
        ne: ne,
        nedot: nedot,
        NegativeMediumSpace: NegativeMediumSpace,
        NegativeThickSpace: NegativeThickSpace,
        NegativeThinSpace: NegativeThinSpace,
        NegativeVeryThinSpace: NegativeVeryThinSpace,
        nequiv: nequiv,
        nesear: nesear,
        nesim: nesim,
        NestedGreaterGreater: NestedGreaterGreater,
        NestedLessLess: NestedLessLess,
        NewLine: NewLine,
        nexist: nexist,
        nexists: nexists,
        Nfr: Nfr,
        nfr: nfr,
        ngE: ngE,
        nge: nge,
        ngeq: ngeq,
        ngeqq: ngeqq,
        ngeqslant: ngeqslant,
        nges: nges,
        nGg: nGg,
        ngsim: ngsim,
        nGt: nGt,
        ngt: ngt,
        ngtr: ngtr,
        nGtv: nGtv,
        nharr: nharr,
        nhArr: nhArr,
        nhpar: nhpar,
        ni: ni,
        nis: nis,
        nisd: nisd,
        niv: niv,
        NJcy: NJcy,
        njcy: njcy,
        nlarr: nlarr,
        nlArr: nlArr,
        nldr: nldr,
        nlE: nlE,
        nle: nle,
        nleftarrow: nleftarrow,
        nLeftarrow: nLeftarrow,
        nleftrightarrow: nleftrightarrow,
        nLeftrightarrow: nLeftrightarrow,
        nleq: nleq,
        nleqq: nleqq,
        nleqslant: nleqslant,
        nles: nles,
        nless: nless,
        nLl: nLl,
        nlsim: nlsim,
        nLt: nLt,
        nlt: nlt,
        nltri: nltri,
        nltrie: nltrie,
        nLtv: nLtv,
        nmid: nmid,
        NoBreak: NoBreak,
        NonBreakingSpace: NonBreakingSpace,
        nopf: nopf,
        Nopf: Nopf,
        Not: Not,
        not: not,
        NotCongruent: NotCongruent,
        NotCupCap: NotCupCap,
        NotDoubleVerticalBar: NotDoubleVerticalBar,
        NotElement: NotElement,
        NotEqual: NotEqual,
        NotEqualTilde: NotEqualTilde,
        NotExists: NotExists,
        NotGreater: NotGreater,
        NotGreaterEqual: NotGreaterEqual,
        NotGreaterFullEqual: NotGreaterFullEqual,
        NotGreaterGreater: NotGreaterGreater,
        NotGreaterLess: NotGreaterLess,
        NotGreaterSlantEqual: NotGreaterSlantEqual,
        NotGreaterTilde: NotGreaterTilde,
        NotHumpDownHump: NotHumpDownHump,
        NotHumpEqual: NotHumpEqual,
        notin: notin,
        notindot: notindot,
        notinE: notinE,
        notinva: notinva,
        notinvb: notinvb,
        notinvc: notinvc,
        NotLeftTriangleBar: NotLeftTriangleBar,
        NotLeftTriangle: NotLeftTriangle,
        NotLeftTriangleEqual: NotLeftTriangleEqual,
        NotLess: NotLess,
        NotLessEqual: NotLessEqual,
        NotLessGreater: NotLessGreater,
        NotLessLess: NotLessLess,
        NotLessSlantEqual: NotLessSlantEqual,
        NotLessTilde: NotLessTilde,
        NotNestedGreaterGreater: NotNestedGreaterGreater,
        NotNestedLessLess: NotNestedLessLess,
        notni: notni,
        notniva: notniva,
        notnivb: notnivb,
        notnivc: notnivc,
        NotPrecedes: NotPrecedes,
        NotPrecedesEqual: NotPrecedesEqual,
        NotPrecedesSlantEqual: NotPrecedesSlantEqual,
        NotReverseElement: NotReverseElement,
        NotRightTriangleBar: NotRightTriangleBar,
        NotRightTriangle: NotRightTriangle,
        NotRightTriangleEqual: NotRightTriangleEqual,
        NotSquareSubset: NotSquareSubset,
        NotSquareSubsetEqual: NotSquareSubsetEqual,
        NotSquareSuperset: NotSquareSuperset,
        NotSquareSupersetEqual: NotSquareSupersetEqual,
        NotSubset: NotSubset,
        NotSubsetEqual: NotSubsetEqual,
        NotSucceeds: NotSucceeds,
        NotSucceedsEqual: NotSucceedsEqual,
        NotSucceedsSlantEqual: NotSucceedsSlantEqual,
        NotSucceedsTilde: NotSucceedsTilde,
        NotSuperset: NotSuperset,
        NotSupersetEqual: NotSupersetEqual,
        NotTilde: NotTilde,
        NotTildeEqual: NotTildeEqual,
        NotTildeFullEqual: NotTildeFullEqual,
        NotTildeTilde: NotTildeTilde,
        NotVerticalBar: NotVerticalBar,
        nparallel: nparallel,
        npar: npar,
        nparsl: nparsl,
        npart: npart,
        npolint: npolint,
        npr: npr,
        nprcue: nprcue,
        nprec: nprec,
        npreceq: npreceq,
        npre: npre,
        nrarrc: nrarrc,
        nrarr: nrarr,
        nrArr: nrArr,
        nrarrw: nrarrw,
        nrightarrow: nrightarrow,
        nRightarrow: nRightarrow,
        nrtri: nrtri,
        nrtrie: nrtrie,
        nsc: nsc,
        nsccue: nsccue,
        nsce: nsce,
        Nscr: Nscr,
        nscr: nscr,
        nshortmid: nshortmid,
        nshortparallel: nshortparallel,
        nsim: nsim,
        nsime: nsime,
        nsimeq: nsimeq,
        nsmid: nsmid,
        nspar: nspar,
        nsqsube: nsqsube,
        nsqsupe: nsqsupe,
        nsub: nsub,
        nsubE: nsubE,
        nsube: nsube,
        nsubset: nsubset,
        nsubseteq: nsubseteq,
        nsubseteqq: nsubseteqq,
        nsucc: nsucc,
        nsucceq: nsucceq,
        nsup: nsup,
        nsupE: nsupE,
        nsupe: nsupe,
        nsupset: nsupset,
        nsupseteq: nsupseteq,
        nsupseteqq: nsupseteqq,
        ntgl: ntgl,
        Ntilde: Ntilde,
        ntilde: ntilde,
        ntlg: ntlg,
        ntriangleleft: ntriangleleft,
        ntrianglelefteq: ntrianglelefteq,
        ntriangleright: ntriangleright,
        ntrianglerighteq: ntrianglerighteq,
        Nu: Nu,
        nu: nu,
        num: num,
        numero: numero,
        numsp: numsp,
        nvap: nvap,
        nvdash: nvdash,
        nvDash: nvDash,
        nVdash: nVdash,
        nVDash: nVDash,
        nvge: nvge,
        nvgt: nvgt,
        nvHarr: nvHarr,
        nvinfin: nvinfin,
        nvlArr: nvlArr,
        nvle: nvle,
        nvlt: nvlt,
        nvltrie: nvltrie,
        nvrArr: nvrArr,
        nvrtrie: nvrtrie,
        nvsim: nvsim,
        nwarhk: nwarhk,
        nwarr: nwarr,
        nwArr: nwArr,
        nwarrow: nwarrow,
        nwnear: nwnear,
        Oacute: Oacute,
        oacute: oacute,
        oast: oast,
        Ocirc: Ocirc,
        ocirc: ocirc,
        ocir: ocir,
        Ocy: Ocy,
        ocy: ocy,
        odash: odash,
        Odblac: Odblac,
        odblac: odblac,
        odiv: odiv,
        odot: odot,
        odsold: odsold,
        OElig: OElig,
        oelig: oelig,
        ofcir: ofcir,
        Ofr: Ofr,
        ofr: ofr,
        ogon: ogon,
        Ograve: Ograve,
        ograve: ograve,
        ogt: ogt,
        ohbar: ohbar,
        ohm: ohm,
        oint: oint,
        olarr: olarr,
        olcir: olcir,
        olcross: olcross,
        oline: oline,
        olt: olt,
        Omacr: Omacr,
        omacr: omacr,
        Omega: Omega,
        omega: omega,
        Omicron: Omicron,
        omicron: omicron,
        omid: omid,
        ominus: ominus,
        Oopf: Oopf,
        oopf: oopf,
        opar: opar,
        OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
        OpenCurlyQuote: OpenCurlyQuote,
        operp: operp,
        oplus: oplus,
        orarr: orarr,
        Or: Or,
        or: or,
        ord: ord,
        order: order,
        orderof: orderof,
        ordf: ordf,
        ordm: ordm,
        origof: origof,
        oror: oror,
        orslope: orslope,
        orv: orv,
        oS: oS,
        Oscr: Oscr,
        oscr: oscr,
        Oslash: Oslash,
        oslash: oslash,
        osol: osol,
        Otilde: Otilde,
        otilde: otilde,
        otimesas: otimesas,
        Otimes: Otimes,
        otimes: otimes,
        Ouml: Ouml,
        ouml: ouml,
        ovbar: ovbar,
        OverBar: OverBar,
        OverBrace: OverBrace,
        OverBracket: OverBracket,
        OverParenthesis: OverParenthesis,
        para: para,
        parallel: parallel,
        par: par,
        parsim: parsim,
        parsl: parsl,
        part: part,
        PartialD: PartialD,
        Pcy: Pcy,
        pcy: pcy,
        percnt: percnt,
        period: period,
        permil: permil,
        perp: perp,
        pertenk: pertenk,
        Pfr: Pfr,
        pfr: pfr,
        Phi: Phi,
        phi: phi,
        phiv: phiv,
        phmmat: phmmat,
        phone: phone,
        Pi: Pi,
        pi: pi,
        pitchfork: pitchfork,
        piv: piv,
        planck: planck,
        planckh: planckh,
        plankv: plankv,
        plusacir: plusacir,
        plusb: plusb,
        pluscir: pluscir,
        plus: plus,
        plusdo: plusdo,
        plusdu: plusdu,
        pluse: pluse,
        PlusMinus: PlusMinus,
        plusmn: plusmn,
        plussim: plussim,
        plustwo: plustwo,
        pm: pm,
        Poincareplane: Poincareplane,
        pointint: pointint,
        popf: popf,
        Popf: Popf,
        pound: pound,
        prap: prap,
        Pr: Pr,
        pr: pr,
        prcue: prcue,
        precapprox: precapprox,
        prec: prec,
        preccurlyeq: preccurlyeq,
        Precedes: Precedes,
        PrecedesEqual: PrecedesEqual,
        PrecedesSlantEqual: PrecedesSlantEqual,
        PrecedesTilde: PrecedesTilde,
        preceq: preceq,
        precnapprox: precnapprox,
        precneqq: precneqq,
        precnsim: precnsim,
        pre: pre,
        prE: prE,
        precsim: precsim,
        prime: prime,
        Prime: Prime,
        primes: primes,
        prnap: prnap,
        prnE: prnE,
        prnsim: prnsim,
        prod: prod,
        Product: Product,
        profalar: profalar,
        profline: profline,
        profsurf: profsurf,
        prop: prop,
        Proportional: Proportional,
        Proportion: Proportion,
        propto: propto,
        prsim: prsim,
        prurel: prurel,
        Pscr: Pscr,
        pscr: pscr,
        Psi: Psi,
        psi: psi,
        puncsp: puncsp,
        Qfr: Qfr,
        qfr: qfr,
        qint: qint,
        qopf: qopf,
        Qopf: Qopf,
        qprime: qprime,
        Qscr: Qscr,
        qscr: qscr,
        quaternions: quaternions,
        quatint: quatint,
        quest: quest,
        questeq: questeq,
        quot: quot,
        QUOT: QUOT,
        rAarr: rAarr,
        race: race,
        Racute: Racute,
        racute: racute,
        radic: radic,
        raemptyv: raemptyv,
        rang: rang,
        Rang: Rang,
        rangd: rangd,
        range: range,
        rangle: rangle,
        raquo: raquo,
        rarrap: rarrap,
        rarrb: rarrb,
        rarrbfs: rarrbfs,
        rarrc: rarrc,
        rarr: rarr,
        Rarr: Rarr,
        rArr: rArr,
        rarrfs: rarrfs,
        rarrhk: rarrhk,
        rarrlp: rarrlp,
        rarrpl: rarrpl,
        rarrsim: rarrsim,
        Rarrtl: Rarrtl,
        rarrtl: rarrtl,
        rarrw: rarrw,
        ratail: ratail,
        rAtail: rAtail,
        ratio: ratio,
        rationals: rationals,
        rbarr: rbarr,
        rBarr: rBarr,
        RBarr: RBarr,
        rbbrk: rbbrk,
        rbrace: rbrace,
        rbrack: rbrack,
        rbrke: rbrke,
        rbrksld: rbrksld,
        rbrkslu: rbrkslu,
        Rcaron: Rcaron,
        rcaron: rcaron,
        Rcedil: Rcedil,
        rcedil: rcedil,
        rceil: rceil,
        rcub: rcub,
        Rcy: Rcy,
        rcy: rcy,
        rdca: rdca,
        rdldhar: rdldhar,
        rdquo: rdquo,
        rdquor: rdquor,
        rdsh: rdsh,
        real: real,
        realine: realine,
        realpart: realpart,
        reals: reals,
        Re: Re,
        rect: rect,
        reg: reg,
        REG: REG,
        ReverseElement: ReverseElement,
        ReverseEquilibrium: ReverseEquilibrium,
        ReverseUpEquilibrium: ReverseUpEquilibrium,
        rfisht: rfisht,
        rfloor: rfloor,
        rfr: rfr,
        Rfr: Rfr,
        rHar: rHar,
        rhard: rhard,
        rharu: rharu,
        rharul: rharul,
        Rho: Rho,
        rho: rho,
        rhov: rhov,
        RightAngleBracket: RightAngleBracket,
        RightArrowBar: RightArrowBar,
        rightarrow: rightarrow,
        RightArrow: RightArrow,
        Rightarrow: Rightarrow,
        RightArrowLeftArrow: RightArrowLeftArrow,
        rightarrowtail: rightarrowtail,
        RightCeiling: RightCeiling,
        RightDoubleBracket: RightDoubleBracket,
        RightDownTeeVector: RightDownTeeVector,
        RightDownVectorBar: RightDownVectorBar,
        RightDownVector: RightDownVector,
        RightFloor: RightFloor,
        rightharpoondown: rightharpoondown,
        rightharpoonup: rightharpoonup,
        rightleftarrows: rightleftarrows,
        rightleftharpoons: rightleftharpoons,
        rightrightarrows: rightrightarrows,
        rightsquigarrow: rightsquigarrow,
        RightTeeArrow: RightTeeArrow,
        RightTee: RightTee,
        RightTeeVector: RightTeeVector,
        rightthreetimes: rightthreetimes,
        RightTriangleBar: RightTriangleBar,
        RightTriangle: RightTriangle,
        RightTriangleEqual: RightTriangleEqual,
        RightUpDownVector: RightUpDownVector,
        RightUpTeeVector: RightUpTeeVector,
        RightUpVectorBar: RightUpVectorBar,
        RightUpVector: RightUpVector,
        RightVectorBar: RightVectorBar,
        RightVector: RightVector,
        ring: ring,
        risingdotseq: risingdotseq,
        rlarr: rlarr,
        rlhar: rlhar,
        rlm: rlm,
        rmoustache: rmoustache,
        rmoust: rmoust,
        rnmid: rnmid,
        roang: roang,
        roarr: roarr,
        robrk: robrk,
        ropar: ropar,
        ropf: ropf,
        Ropf: Ropf,
        roplus: roplus,
        rotimes: rotimes,
        RoundImplies: RoundImplies,
        rpar: rpar,
        rpargt: rpargt,
        rppolint: rppolint,
        rrarr: rrarr,
        Rrightarrow: Rrightarrow,
        rsaquo: rsaquo,
        rscr: rscr,
        Rscr: Rscr,
        rsh: rsh,
        Rsh: Rsh,
        rsqb: rsqb,
        rsquo: rsquo,
        rsquor: rsquor,
        rthree: rthree,
        rtimes: rtimes,
        rtri: rtri,
        rtrie: rtrie,
        rtrif: rtrif,
        rtriltri: rtriltri,
        RuleDelayed: RuleDelayed,
        ruluhar: ruluhar,
        rx: rx,
        Sacute: Sacute,
        sacute: sacute,
        sbquo: sbquo,
        scap: scap,
        Scaron: Scaron,
        scaron: scaron,
        Sc: Sc,
        sc: sc,
        sccue: sccue,
        sce: sce,
        scE: scE,
        Scedil: Scedil,
        scedil: scedil,
        Scirc: Scirc,
        scirc: scirc,
        scnap: scnap,
        scnE: scnE,
        scnsim: scnsim,
        scpolint: scpolint,
        scsim: scsim,
        Scy: Scy,
        scy: scy,
        sdotb: sdotb,
        sdot: sdot,
        sdote: sdote,
        searhk: searhk,
        searr: searr,
        seArr: seArr,
        searrow: searrow,
        sect: sect,
        semi: semi,
        seswar: seswar,
        setminus: setminus,
        setmn: setmn,
        sext: sext,
        Sfr: Sfr,
        sfr: sfr,
        sfrown: sfrown,
        sharp: sharp,
        SHCHcy: SHCHcy,
        shchcy: shchcy,
        SHcy: SHcy,
        shcy: shcy,
        ShortDownArrow: ShortDownArrow,
        ShortLeftArrow: ShortLeftArrow,
        shortmid: shortmid,
        shortparallel: shortparallel,
        ShortRightArrow: ShortRightArrow,
        ShortUpArrow: ShortUpArrow,
        shy: shy,
        Sigma: Sigma,
        sigma: sigma,
        sigmaf: sigmaf,
        sigmav: sigmav,
        sim: sim,
        simdot: simdot,
        sime: sime,
        simeq: simeq,
        simg: simg,
        simgE: simgE,
        siml: siml,
        simlE: simlE,
        simne: simne,
        simplus: simplus,
        simrarr: simrarr,
        slarr: slarr,
        SmallCircle: SmallCircle,
        smallsetminus: smallsetminus,
        smashp: smashp,
        smeparsl: smeparsl,
        smid: smid,
        smile: smile,
        smt: smt,
        smte: smte,
        smtes: smtes,
        SOFTcy: SOFTcy,
        softcy: softcy,
        solbar: solbar,
        solb: solb,
        sol: sol,
        Sopf: Sopf,
        sopf: sopf,
        spades: spades,
        spadesuit: spadesuit,
        spar: spar,
        sqcap: sqcap,
        sqcaps: sqcaps,
        sqcup: sqcup,
        sqcups: sqcups,
        Sqrt: Sqrt,
        sqsub: sqsub,
        sqsube: sqsube,
        sqsubset: sqsubset,
        sqsubseteq: sqsubseteq,
        sqsup: sqsup,
        sqsupe: sqsupe,
        sqsupset: sqsupset,
        sqsupseteq: sqsupseteq,
        square: square,
        Square: Square,
        SquareIntersection: SquareIntersection,
        SquareSubset: SquareSubset,
        SquareSubsetEqual: SquareSubsetEqual,
        SquareSuperset: SquareSuperset,
        SquareSupersetEqual: SquareSupersetEqual,
        SquareUnion: SquareUnion,
        squarf: squarf,
        squ: squ,
        squf: squf,
        srarr: srarr,
        Sscr: Sscr,
        sscr: sscr,
        ssetmn: ssetmn,
        ssmile: ssmile,
        sstarf: sstarf,
        Star: Star,
        star: star,
        starf: starf,
        straightepsilon: straightepsilon,
        straightphi: straightphi,
        strns: strns,
        sub: sub,
        Sub: Sub,
        subdot: subdot,
        subE: subE,
        sube: sube,
        subedot: subedot,
        submult: submult,
        subnE: subnE,
        subne: subne,
        subplus: subplus,
        subrarr: subrarr,
        subset: subset,
        Subset: Subset,
        subseteq: subseteq,
        subseteqq: subseteqq,
        SubsetEqual: SubsetEqual,
        subsetneq: subsetneq,
        subsetneqq: subsetneqq,
        subsim: subsim,
        subsub: subsub,
        subsup: subsup,
        succapprox: succapprox,
        succ: succ,
        succcurlyeq: succcurlyeq,
        Succeeds: Succeeds,
        SucceedsEqual: SucceedsEqual,
        SucceedsSlantEqual: SucceedsSlantEqual,
        SucceedsTilde: SucceedsTilde,
        succeq: succeq,
        succnapprox: succnapprox,
        succneqq: succneqq,
        succnsim: succnsim,
        succsim: succsim,
        SuchThat: SuchThat,
        sum: sum,
        Sum: Sum,
        sung: sung,
        sup1: sup1,
        sup2: sup2,
        sup3: sup3,
        sup: sup,
        Sup: Sup,
        supdot: supdot,
        supdsub: supdsub,
        supE: supE,
        supe: supe,
        supedot: supedot,
        Superset: Superset,
        SupersetEqual: SupersetEqual,
        suphsol: suphsol,
        suphsub: suphsub,
        suplarr: suplarr,
        supmult: supmult,
        supnE: supnE,
        supne: supne,
        supplus: supplus,
        supset: supset,
        Supset: Supset,
        supseteq: supseteq,
        supseteqq: supseteqq,
        supsetneq: supsetneq,
        supsetneqq: supsetneqq,
        supsim: supsim,
        supsub: supsub,
        supsup: supsup,
        swarhk: swarhk,
        swarr: swarr,
        swArr: swArr,
        swarrow: swarrow,
        swnwar: swnwar,
        szlig: szlig,
        Tab: Tab,
        target: target,
        Tau: Tau,
        tau: tau,
        tbrk: tbrk,
        Tcaron: Tcaron,
        tcaron: tcaron,
        Tcedil: Tcedil,
        tcedil: tcedil,
        Tcy: Tcy,
        tcy: tcy,
        tdot: tdot,
        telrec: telrec,
        Tfr: Tfr,
        tfr: tfr,
        there4: there4,
        therefore: therefore,
        Therefore: Therefore,
        Theta: Theta,
        theta: theta,
        thetasym: thetasym,
        thetav: thetav,
        thickapprox: thickapprox,
        thicksim: thicksim,
        ThickSpace: ThickSpace,
        ThinSpace: ThinSpace,
        thinsp: thinsp,
        thkap: thkap,
        thksim: thksim,
        THORN: THORN,
        thorn: thorn,
        tilde: tilde,
        Tilde: Tilde,
        TildeEqual: TildeEqual,
        TildeFullEqual: TildeFullEqual,
        TildeTilde: TildeTilde,
        timesbar: timesbar,
        timesb: timesb,
        times: times,
        timesd: timesd,
        tint: tint,
        toea: toea,
        topbot: topbot,
        topcir: topcir,
        top: top,
        Topf: Topf,
        topf: topf,
        topfork: topfork,
        tosa: tosa,
        tprime: tprime,
        trade: trade,
        TRADE: TRADE,
        triangle: triangle,
        triangledown: triangledown,
        triangleleft: triangleleft,
        trianglelefteq: trianglelefteq,
        triangleq: triangleq,
        triangleright: triangleright,
        trianglerighteq: trianglerighteq,
        tridot: tridot,
        trie: trie,
        triminus: triminus,
        TripleDot: TripleDot,
        triplus: triplus,
        trisb: trisb,
        tritime: tritime,
        trpezium: trpezium,
        Tscr: Tscr,
        tscr: tscr,
        TScy: TScy,
        tscy: tscy,
        TSHcy: TSHcy,
        tshcy: tshcy,
        Tstrok: Tstrok,
        tstrok: tstrok,
        twixt: twixt,
        twoheadleftarrow: twoheadleftarrow,
        twoheadrightarrow: twoheadrightarrow,
        Uacute: Uacute,
        uacute: uacute,
        uarr: uarr,
        Uarr: Uarr,
        uArr: uArr,
        Uarrocir: Uarrocir,
        Ubrcy: Ubrcy,
        ubrcy: ubrcy,
        Ubreve: Ubreve,
        ubreve: ubreve,
        Ucirc: Ucirc,
        ucirc: ucirc,
        Ucy: Ucy,
        ucy: ucy,
        udarr: udarr,
        Udblac: Udblac,
        udblac: udblac,
        udhar: udhar,
        ufisht: ufisht,
        Ufr: Ufr,
        ufr: ufr,
        Ugrave: Ugrave,
        ugrave: ugrave,
        uHar: uHar,
        uharl: uharl,
        uharr: uharr,
        uhblk: uhblk,
        ulcorn: ulcorn,
        ulcorner: ulcorner,
        ulcrop: ulcrop,
        ultri: ultri,
        Umacr: Umacr,
        umacr: umacr,
        uml: uml,
        UnderBar: UnderBar,
        UnderBrace: UnderBrace,
        UnderBracket: UnderBracket,
        UnderParenthesis: UnderParenthesis,
        Union: Union,
        UnionPlus: UnionPlus,
        Uogon: Uogon,
        uogon: uogon,
        Uopf: Uopf,
        uopf: uopf,
        UpArrowBar: UpArrowBar,
        uparrow: uparrow,
        UpArrow: UpArrow,
        Uparrow: Uparrow,
        UpArrowDownArrow: UpArrowDownArrow,
        updownarrow: updownarrow,
        UpDownArrow: UpDownArrow,
        Updownarrow: Updownarrow,
        UpEquilibrium: UpEquilibrium,
        upharpoonleft: upharpoonleft,
        upharpoonright: upharpoonright,
        uplus: uplus,
        UpperLeftArrow: UpperLeftArrow,
        UpperRightArrow: UpperRightArrow,
        upsi: upsi,
        Upsi: Upsi,
        upsih: upsih,
        Upsilon: Upsilon,
        upsilon: upsilon,
        UpTeeArrow: UpTeeArrow,
        UpTee: UpTee,
        upuparrows: upuparrows,
        urcorn: urcorn,
        urcorner: urcorner,
        urcrop: urcrop,
        Uring: Uring,
        uring: uring,
        urtri: urtri,
        Uscr: Uscr,
        uscr: uscr,
        utdot: utdot,
        Utilde: Utilde,
        utilde: utilde,
        utri: utri,
        utrif: utrif,
        uuarr: uuarr,
        Uuml: Uuml,
        uuml: uuml,
        uwangle: uwangle,
        vangrt: vangrt,
        varepsilon: varepsilon,
        varkappa: varkappa,
        varnothing: varnothing,
        varphi: varphi,
        varpi: varpi,
        varpropto: varpropto,
        varr: varr,
        vArr: vArr,
        varrho: varrho,
        varsigma: varsigma,
        varsubsetneq: varsubsetneq,
        varsubsetneqq: varsubsetneqq,
        varsupsetneq: varsupsetneq,
        varsupsetneqq: varsupsetneqq,
        vartheta: vartheta,
        vartriangleleft: vartriangleleft,
        vartriangleright: vartriangleright,
        vBar: vBar,
        Vbar: Vbar,
        vBarv: vBarv,
        Vcy: Vcy,
        vcy: vcy,
        vdash: vdash,
        vDash: vDash,
        Vdash: Vdash,
        VDash: VDash,
        Vdashl: Vdashl,
        veebar: veebar,
        vee: vee,
        Vee: Vee,
        veeeq: veeeq,
        vellip: vellip,
        verbar: verbar,
        Verbar: Verbar,
        vert: vert,
        Vert: Vert,
        VerticalBar: VerticalBar,
        VerticalLine: VerticalLine,
        VerticalSeparator: VerticalSeparator,
        VerticalTilde: VerticalTilde,
        VeryThinSpace: VeryThinSpace,
        Vfr: Vfr,
        vfr: vfr,
        vltri: vltri,
        vnsub: vnsub,
        vnsup: vnsup,
        Vopf: Vopf,
        vopf: vopf,
        vprop: vprop,
        vrtri: vrtri,
        Vscr: Vscr,
        vscr: vscr,
        vsubnE: vsubnE,
        vsubne: vsubne,
        vsupnE: vsupnE,
        vsupne: vsupne,
        Vvdash: Vvdash,
        vzigzag: vzigzag,
        Wcirc: Wcirc,
        wcirc: wcirc,
        wedbar: wedbar,
        wedge: wedge,
        Wedge: Wedge,
        wedgeq: wedgeq,
        weierp: weierp,
        Wfr: Wfr,
        wfr: wfr,
        Wopf: Wopf,
        wopf: wopf,
        wp: wp,
        wr: wr,
        wreath: wreath,
        Wscr: Wscr,
        wscr: wscr,
        xcap: xcap,
        xcirc: xcirc,
        xcup: xcup,
        xdtri: xdtri,
        Xfr: Xfr,
        xfr: xfr,
        xharr: xharr,
        xhArr: xhArr,
        Xi: Xi,
        xi: xi,
        xlarr: xlarr,
        xlArr: xlArr,
        xmap: xmap,
        xnis: xnis,
        xodot: xodot,
        Xopf: Xopf,
        xopf: xopf,
        xoplus: xoplus,
        xotime: xotime,
        xrarr: xrarr,
        xrArr: xrArr,
        Xscr: Xscr,
        xscr: xscr,
        xsqcup: xsqcup,
        xuplus: xuplus,
        xutri: xutri,
        xvee: xvee,
        xwedge: xwedge,
        Yacute: Yacute,
        yacute: yacute,
        YAcy: YAcy,
        yacy: yacy,
        Ycirc: Ycirc,
        ycirc: ycirc,
        Ycy: Ycy,
        ycy: ycy,
        yen: yen,
        Yfr: Yfr,
        yfr: yfr,
        YIcy: YIcy,
        yicy: yicy,
        Yopf: Yopf,
        yopf: yopf,
        Yscr: Yscr,
        yscr: yscr,
        YUcy: YUcy,
        yucy: yucy,
        yuml: yuml,
        Yuml: Yuml,
        Zacute: Zacute,
        zacute: zacute,
        Zcaron: Zcaron,
        zcaron: zcaron,
        Zcy: Zcy,
        zcy: zcy,
        Zdot: Zdot,
        zdot: zdot,
        zeetrf: zeetrf,
        ZeroWidthSpace: ZeroWidthSpace,
        Zeta: Zeta,
        zeta: zeta,
        zfr: zfr,
        Zfr: Zfr,
        ZHcy: ZHcy,
        zhcy: zhcy,
        zigrarr: zigrarr,
        zopf: zopf,
        Zopf: Zopf,
        Zscr: Zscr,
        zscr: zscr,
        zwj: zwj,
        zwnj: zwnj,
        'default': entities
    });

    var Aacute$1 = "Á";
    var aacute$1 = "á";
    var Acirc$1 = "Â";
    var acirc$1 = "â";
    var acute$1 = "´";
    var AElig$1 = "Æ";
    var aelig$1 = "æ";
    var Agrave$1 = "À";
    var agrave$1 = "à";
    var amp$1 = "&";
    var AMP$1 = "&";
    var Aring$1 = "Å";
    var aring$1 = "å";
    var Atilde$1 = "Ã";
    var atilde$1 = "ã";
    var Auml$1 = "Ä";
    var auml$1 = "ä";
    var brvbar$1 = "¦";
    var Ccedil$1 = "Ç";
    var ccedil$1 = "ç";
    var cedil$1 = "¸";
    var cent$1 = "¢";
    var copy$1 = "©";
    var COPY$1 = "©";
    var curren$1 = "¤";
    var deg$1 = "°";
    var divide$1 = "÷";
    var Eacute$1 = "É";
    var eacute$1 = "é";
    var Ecirc$1 = "Ê";
    var ecirc$1 = "ê";
    var Egrave$1 = "È";
    var egrave$1 = "è";
    var ETH$1 = "Ð";
    var eth$1 = "ð";
    var Euml$1 = "Ë";
    var euml$1 = "ë";
    var frac12$1 = "½";
    var frac14$1 = "¼";
    var frac34$1 = "¾";
    var gt$1 = ">";
    var GT$1 = ">";
    var Iacute$1 = "Í";
    var iacute$1 = "í";
    var Icirc$1 = "Î";
    var icirc$1 = "î";
    var iexcl$1 = "¡";
    var Igrave$1 = "Ì";
    var igrave$1 = "ì";
    var iquest$1 = "¿";
    var Iuml$1 = "Ï";
    var iuml$1 = "ï";
    var laquo$1 = "«";
    var lt$1 = "<";
    var LT$1 = "<";
    var macr$1 = "¯";
    var micro$1 = "µ";
    var middot$1 = "·";
    var nbsp$1 = " ";
    var not$1 = "¬";
    var Ntilde$1 = "Ñ";
    var ntilde$1 = "ñ";
    var Oacute$1 = "Ó";
    var oacute$1 = "ó";
    var Ocirc$1 = "Ô";
    var ocirc$1 = "ô";
    var Ograve$1 = "Ò";
    var ograve$1 = "ò";
    var ordf$1 = "ª";
    var ordm$1 = "º";
    var Oslash$1 = "Ø";
    var oslash$1 = "ø";
    var Otilde$1 = "Õ";
    var otilde$1 = "õ";
    var Ouml$1 = "Ö";
    var ouml$1 = "ö";
    var para$1 = "¶";
    var plusmn$1 = "±";
    var pound$1 = "£";
    var quot$1 = "\"";
    var QUOT$1 = "\"";
    var raquo$1 = "»";
    var reg$1 = "®";
    var REG$1 = "®";
    var sect$1 = "§";
    var shy$1 = "­";
    var sup1$1 = "¹";
    var sup2$1 = "²";
    var sup3$1 = "³";
    var szlig$1 = "ß";
    var THORN$1 = "Þ";
    var thorn$1 = "þ";
    var times$1 = "×";
    var Uacute$1 = "Ú";
    var uacute$1 = "ú";
    var Ucirc$1 = "Û";
    var ucirc$1 = "û";
    var Ugrave$1 = "Ù";
    var ugrave$1 = "ù";
    var uml$1 = "¨";
    var Uuml$1 = "Ü";
    var uuml$1 = "ü";
    var Yacute$1 = "Ý";
    var yacute$1 = "ý";
    var yen$1 = "¥";
    var yuml$1 = "ÿ";
    var legacy = {
    	Aacute: Aacute$1,
    	aacute: aacute$1,
    	Acirc: Acirc$1,
    	acirc: acirc$1,
    	acute: acute$1,
    	AElig: AElig$1,
    	aelig: aelig$1,
    	Agrave: Agrave$1,
    	agrave: agrave$1,
    	amp: amp$1,
    	AMP: AMP$1,
    	Aring: Aring$1,
    	aring: aring$1,
    	Atilde: Atilde$1,
    	atilde: atilde$1,
    	Auml: Auml$1,
    	auml: auml$1,
    	brvbar: brvbar$1,
    	Ccedil: Ccedil$1,
    	ccedil: ccedil$1,
    	cedil: cedil$1,
    	cent: cent$1,
    	copy: copy$1,
    	COPY: COPY$1,
    	curren: curren$1,
    	deg: deg$1,
    	divide: divide$1,
    	Eacute: Eacute$1,
    	eacute: eacute$1,
    	Ecirc: Ecirc$1,
    	ecirc: ecirc$1,
    	Egrave: Egrave$1,
    	egrave: egrave$1,
    	ETH: ETH$1,
    	eth: eth$1,
    	Euml: Euml$1,
    	euml: euml$1,
    	frac12: frac12$1,
    	frac14: frac14$1,
    	frac34: frac34$1,
    	gt: gt$1,
    	GT: GT$1,
    	Iacute: Iacute$1,
    	iacute: iacute$1,
    	Icirc: Icirc$1,
    	icirc: icirc$1,
    	iexcl: iexcl$1,
    	Igrave: Igrave$1,
    	igrave: igrave$1,
    	iquest: iquest$1,
    	Iuml: Iuml$1,
    	iuml: iuml$1,
    	laquo: laquo$1,
    	lt: lt$1,
    	LT: LT$1,
    	macr: macr$1,
    	micro: micro$1,
    	middot: middot$1,
    	nbsp: nbsp$1,
    	not: not$1,
    	Ntilde: Ntilde$1,
    	ntilde: ntilde$1,
    	Oacute: Oacute$1,
    	oacute: oacute$1,
    	Ocirc: Ocirc$1,
    	ocirc: ocirc$1,
    	Ograve: Ograve$1,
    	ograve: ograve$1,
    	ordf: ordf$1,
    	ordm: ordm$1,
    	Oslash: Oslash$1,
    	oslash: oslash$1,
    	Otilde: Otilde$1,
    	otilde: otilde$1,
    	Ouml: Ouml$1,
    	ouml: ouml$1,
    	para: para$1,
    	plusmn: plusmn$1,
    	pound: pound$1,
    	quot: quot$1,
    	QUOT: QUOT$1,
    	raquo: raquo$1,
    	reg: reg$1,
    	REG: REG$1,
    	sect: sect$1,
    	shy: shy$1,
    	sup1: sup1$1,
    	sup2: sup2$1,
    	sup3: sup3$1,
    	szlig: szlig$1,
    	THORN: THORN$1,
    	thorn: thorn$1,
    	times: times$1,
    	Uacute: Uacute$1,
    	uacute: uacute$1,
    	Ucirc: Ucirc$1,
    	ucirc: ucirc$1,
    	Ugrave: Ugrave$1,
    	ugrave: ugrave$1,
    	uml: uml$1,
    	Uuml: Uuml$1,
    	uuml: uuml$1,
    	Yacute: Yacute$1,
    	yacute: yacute$1,
    	yen: yen$1,
    	yuml: yuml$1
    };

    var legacy$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Aacute: Aacute$1,
        aacute: aacute$1,
        Acirc: Acirc$1,
        acirc: acirc$1,
        acute: acute$1,
        AElig: AElig$1,
        aelig: aelig$1,
        Agrave: Agrave$1,
        agrave: agrave$1,
        amp: amp$1,
        AMP: AMP$1,
        Aring: Aring$1,
        aring: aring$1,
        Atilde: Atilde$1,
        atilde: atilde$1,
        Auml: Auml$1,
        auml: auml$1,
        brvbar: brvbar$1,
        Ccedil: Ccedil$1,
        ccedil: ccedil$1,
        cedil: cedil$1,
        cent: cent$1,
        copy: copy$1,
        COPY: COPY$1,
        curren: curren$1,
        deg: deg$1,
        divide: divide$1,
        Eacute: Eacute$1,
        eacute: eacute$1,
        Ecirc: Ecirc$1,
        ecirc: ecirc$1,
        Egrave: Egrave$1,
        egrave: egrave$1,
        ETH: ETH$1,
        eth: eth$1,
        Euml: Euml$1,
        euml: euml$1,
        frac12: frac12$1,
        frac14: frac14$1,
        frac34: frac34$1,
        gt: gt$1,
        GT: GT$1,
        Iacute: Iacute$1,
        iacute: iacute$1,
        Icirc: Icirc$1,
        icirc: icirc$1,
        iexcl: iexcl$1,
        Igrave: Igrave$1,
        igrave: igrave$1,
        iquest: iquest$1,
        Iuml: Iuml$1,
        iuml: iuml$1,
        laquo: laquo$1,
        lt: lt$1,
        LT: LT$1,
        macr: macr$1,
        micro: micro$1,
        middot: middot$1,
        nbsp: nbsp$1,
        not: not$1,
        Ntilde: Ntilde$1,
        ntilde: ntilde$1,
        Oacute: Oacute$1,
        oacute: oacute$1,
        Ocirc: Ocirc$1,
        ocirc: ocirc$1,
        Ograve: Ograve$1,
        ograve: ograve$1,
        ordf: ordf$1,
        ordm: ordm$1,
        Oslash: Oslash$1,
        oslash: oslash$1,
        Otilde: Otilde$1,
        otilde: otilde$1,
        Ouml: Ouml$1,
        ouml: ouml$1,
        para: para$1,
        plusmn: plusmn$1,
        pound: pound$1,
        quot: quot$1,
        QUOT: QUOT$1,
        raquo: raquo$1,
        reg: reg$1,
        REG: REG$1,
        sect: sect$1,
        shy: shy$1,
        sup1: sup1$1,
        sup2: sup2$1,
        sup3: sup3$1,
        szlig: szlig$1,
        THORN: THORN$1,
        thorn: thorn$1,
        times: times$1,
        Uacute: Uacute$1,
        uacute: uacute$1,
        Ucirc: Ucirc$1,
        ucirc: ucirc$1,
        Ugrave: Ugrave$1,
        ugrave: ugrave$1,
        uml: uml$1,
        Uuml: Uuml$1,
        uuml: uuml$1,
        Yacute: Yacute$1,
        yacute: yacute$1,
        yen: yen$1,
        yuml: yuml$1,
        'default': legacy
    });

    var amp$2 = "&";
    var apos$1 = "'";
    var gt$2 = ">";
    var lt$2 = "<";
    var quot$2 = "\"";
    var xml = {
    	amp: amp$2,
    	apos: apos$1,
    	gt: gt$2,
    	lt: lt$2,
    	quot: quot$2
    };

    var xml$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        amp: amp$2,
        apos: apos$1,
        gt: gt$2,
        lt: lt$2,
        quot: quot$2,
        'default': xml
    });

    var decode = {
    	"0": 65533,
    	"128": 8364,
    	"130": 8218,
    	"131": 402,
    	"132": 8222,
    	"133": 8230,
    	"134": 8224,
    	"135": 8225,
    	"136": 710,
    	"137": 8240,
    	"138": 352,
    	"139": 8249,
    	"140": 338,
    	"142": 381,
    	"145": 8216,
    	"146": 8217,
    	"147": 8220,
    	"148": 8221,
    	"149": 8226,
    	"150": 8211,
    	"151": 8212,
    	"152": 732,
    	"153": 8482,
    	"154": 353,
    	"155": 8250,
    	"156": 339,
    	"158": 382,
    	"159": 376
    };

    var decode$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        'default': decode
    });

    var require$$0 = getCjsExportFromNamespace(decode$1);

    var decode_codepoint = createCommonjsModule(function (module, exports) {
    var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var decode_json_1 = __importDefault(require$$0);
    // modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
    function decodeCodePoint(codePoint) {
        if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
            return "\uFFFD";
        }
        if (codePoint in decode_json_1.default) {
            // @ts-ignore
            codePoint = decode_json_1.default[codePoint];
        }
        var output = "";
        if (codePoint > 0xffff) {
            codePoint -= 0x10000;
            output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
            codePoint = 0xdc00 | (codePoint & 0x3ff);
        }
        output += String.fromCharCode(codePoint);
        return output;
    }
    exports.default = decodeCodePoint;
    });

    unwrapExports(decode_codepoint);

    var require$$1 = getCjsExportFromNamespace(entities$1);

    var require$$1$1 = getCjsExportFromNamespace(legacy$1);

    var require$$0$1 = getCjsExportFromNamespace(xml$1);

    var decode$2 = createCommonjsModule(function (module, exports) {
    var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var entities_json_1 = __importDefault(require$$1);
    var legacy_json_1 = __importDefault(require$$1$1);
    var xml_json_1 = __importDefault(require$$0$1);
    var decode_codepoint_1 = __importDefault(decode_codepoint);
    exports.decodeXML = getStrictDecoder(xml_json_1.default);
    exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
    function getStrictDecoder(map) {
        var keys = Object.keys(map).join("|");
        var replace = getReplacer(map);
        keys += "|#[xX][\\da-fA-F]+|#\\d+";
        var re = new RegExp("&(?:" + keys + ");", "g");
        return function (str) { return String(str).replace(re, replace); };
    }
    var sorter = function (a, b) { return (a < b ? 1 : -1); };
    exports.decodeHTML = (function () {
        var legacy = Object.keys(legacy_json_1.default).sort(sorter);
        var keys = Object.keys(entities_json_1.default).sort(sorter);
        for (var i = 0, j = 0; i < keys.length; i++) {
            if (legacy[j] === keys[i]) {
                keys[i] += ";?";
                j++;
            }
            else {
                keys[i] += ";";
            }
        }
        var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
        var replace = getReplacer(entities_json_1.default);
        function replacer(str) {
            if (str.substr(-1) !== ";")
                str += ";";
            return replace(str);
        }
        //TODO consider creating a merged map
        return function (str) {
            return String(str).replace(re, replacer);
        };
    })();
    function getReplacer(map) {
        return function replace(str) {
            if (str.charAt(1) === "#") {
                if (str.charAt(2) === "X" || str.charAt(2) === "x") {
                    return decode_codepoint_1.default(parseInt(str.substr(3), 16));
                }
                return decode_codepoint_1.default(parseInt(str.substr(2), 10));
            }
            return map[str.slice(1, -1)];
        };
    }
    });

    unwrapExports(decode$2);
    var decode_1 = decode$2.decodeXML;
    var decode_2 = decode$2.decodeHTMLStrict;
    var decode_3 = decode$2.decodeHTML;

    var encode$1 = createCommonjsModule(function (module, exports) {
    var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var xml_json_1 = __importDefault(require$$0$1);
    var inverseXML = getInverseObj(xml_json_1.default);
    var xmlReplacer = getInverseReplacer(inverseXML);
    exports.encodeXML = getInverse(inverseXML, xmlReplacer);
    var entities_json_1 = __importDefault(require$$1);
    var inverseHTML = getInverseObj(entities_json_1.default);
    var htmlReplacer = getInverseReplacer(inverseHTML);
    exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
    function getInverseObj(obj) {
        return Object.keys(obj)
            .sort()
            .reduce(function (inverse, name) {
            inverse[obj[name]] = "&" + name + ";";
            return inverse;
        }, {});
    }
    function getInverseReplacer(inverse) {
        var single = [];
        var multiple = [];
        Object.keys(inverse).forEach(function (k) {
            return k.length === 1
                ? // Add value to single array
                    single.push("\\" + k)
                : // Add value to multiple array
                    multiple.push(k);
        });
        //TODO add ranges
        multiple.unshift("[" + single.join("") + "]");
        return new RegExp(multiple.join("|"), "g");
    }
    var reNonASCII = /[^\0-\x7F]/g;
    var reAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    function singleCharReplacer(c) {
        return "&#x" + c
            .charCodeAt(0)
            .toString(16)
            .toUpperCase() + ";";
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    function astralReplacer(c, _) {
        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        var high = c.charCodeAt(0);
        var low = c.charCodeAt(1);
        var codePoint = (high - 0xd800) * 0x400 + low - 0xdc00 + 0x10000;
        return "&#x" + codePoint.toString(16).toUpperCase() + ";";
    }
    function getInverse(inverse, re) {
        return function (data) {
            return data
                .replace(re, function (name) { return inverse[name]; })
                .replace(reAstralSymbols, astralReplacer)
                .replace(reNonASCII, singleCharReplacer);
        };
    }
    var reXmlChars = getInverseReplacer(inverseXML);
    function escape(data) {
        return data
            .replace(reXmlChars, singleCharReplacer)
            .replace(reAstralSymbols, astralReplacer)
            .replace(reNonASCII, singleCharReplacer);
    }
    exports.escape = escape;
    });

    unwrapExports(encode$1);
    var encode_1$1 = encode$1.encodeXML;
    var encode_2 = encode$1.encodeHTML;
    var encode_3 = encode$1.escape;

    var lib = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });


    function decode(data, level) {
        return (!level || level <= 0 ? decode$2.decodeXML : decode$2.decodeHTML)(data);
    }
    exports.decode = decode;
    function decodeStrict(data, level) {
        return (!level || level <= 0 ? decode$2.decodeXML : decode$2.decodeHTMLStrict)(data);
    }
    exports.decodeStrict = decodeStrict;
    function encode(data, level) {
        return (!level || level <= 0 ? encode$1.encodeXML : encode$1.encodeHTML)(data);
    }
    exports.encode = encode;
    var encode_2 = encode$1;
    exports.encodeXML = encode_2.encodeXML;
    exports.encodeHTML = encode_2.encodeHTML;
    exports.escape = encode_2.escape;
    // Legacy aliases
    exports.encodeHTML4 = encode_2.encodeHTML;
    exports.encodeHTML5 = encode_2.encodeHTML;
    var decode_2 = decode$2;
    exports.decodeXML = decode_2.decodeXML;
    exports.decodeHTML = decode_2.decodeHTML;
    exports.decodeHTMLStrict = decode_2.decodeHTMLStrict;
    // Legacy aliases
    exports.decodeHTML4 = decode_2.decodeHTML;
    exports.decodeHTML5 = decode_2.decodeHTML;
    exports.decodeHTML4Strict = decode_2.decodeHTMLStrict;
    exports.decodeHTML5Strict = decode_2.decodeHTMLStrict;
    exports.decodeXMLStrict = decode_2.decodeXML;
    });

    unwrapExports(lib);
    var lib_1 = lib.decode;
    var lib_2 = lib.decodeStrict;
    var lib_3 = lib.encode;
    var lib_4 = lib.encodeXML;
    var lib_5 = lib.encodeHTML;
    var lib_6 = lib.escape;
    var lib_7 = lib.encodeHTML4;
    var lib_8 = lib.encodeHTML5;
    var lib_9 = lib.decodeXML;
    var lib_10 = lib.decodeHTML;
    var lib_11 = lib.decodeHTMLStrict;
    var lib_12 = lib.decodeHTML4;
    var lib_13 = lib.decodeHTML5;
    var lib_14 = lib.decodeHTML4Strict;
    var lib_15 = lib.decodeHTML5Strict;
    var lib_16 = lib.decodeXMLStrict;

    var C_BACKSLASH = 92;

    var ENTITY = "&(?:#x[a-f0-9]{1,6}|#[0-9]{1,7}|[a-z][a-z0-9]{1,31});";

    var TAGNAME = "[A-Za-z][A-Za-z0-9-]*";
    var ATTRIBUTENAME = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
    var UNQUOTEDVALUE = "[^\"'=<>`\\x00-\\x20]+";
    var SINGLEQUOTEDVALUE = "'[^']*'";
    var DOUBLEQUOTEDVALUE = '"[^"]*"';
    var ATTRIBUTEVALUE =
        "(?:" +
        UNQUOTEDVALUE +
        "|" +
        SINGLEQUOTEDVALUE +
        "|" +
        DOUBLEQUOTEDVALUE +
        ")";
    var ATTRIBUTEVALUESPEC = "(?:" + "\\s*=" + "\\s*" + ATTRIBUTEVALUE + ")";
    var ATTRIBUTE = "(?:" + "\\s+" + ATTRIBUTENAME + ATTRIBUTEVALUESPEC + "?)";
    var OPENTAG = "<" + TAGNAME + ATTRIBUTE + "*" + "\\s*/?>";
    var CLOSETAG = "</" + TAGNAME + "\\s*[>]";
    var HTMLCOMMENT = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
    var PROCESSINGINSTRUCTION = "[<][?][\\s\\S]*?[?][>]";
    var DECLARATION = "<![A-Z]+" + "\\s+[^>]*>";
    var CDATA = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
    var HTMLTAG =
        "(?:" +
        OPENTAG +
        "|" +
        CLOSETAG +
        "|" +
        HTMLCOMMENT +
        "|" +
        PROCESSINGINSTRUCTION +
        "|" +
        DECLARATION +
        "|" +
        CDATA +
        ")";
    var reHtmlTag = new RegExp("^" + HTMLTAG);

    var reBackslashOrAmp = /[\\&]/;

    var ESCAPABLE = "[!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]";

    var reEntityOrEscapedChar = new RegExp("\\\\" + ESCAPABLE + "|" + ENTITY, "gi");

    var XMLSPECIAL = '[&<>"]';

    var reXmlSpecial = new RegExp(XMLSPECIAL, "g");

    var unescapeChar = function(s) {
        if (s.charCodeAt(0) === C_BACKSLASH) {
            return s.charAt(1);
        } else {
            return lib_10(s);
        }
    };

    // Replace entities and backslash escapes with literal characters.
    var unescapeString = function(s) {
        if (reBackslashOrAmp.test(s)) {
            return s.replace(reEntityOrEscapedChar, unescapeChar);
        } else {
            return s;
        }
    };

    var normalizeURI = function(uri) {
        try {
            return encode_1(uri);
        } catch (err) {
            return uri;
        }
    };

    var replaceUnsafeChar = function(s) {
        switch (s) {
            case "&":
                return "&amp;";
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case '"':
                return "&quot;";
            default:
                return s;
        }
    };

    var escapeXml = function(s) {
        if (reXmlSpecial.test(s)) {
            return s.replace(reXmlSpecial, replaceUnsafeChar);
        } else {
            return s;
        }
    };

    // derived from https://github.com/mathiasbynens/String.fromCodePoint
    /*! http://mths.be/fromcodepoint v0.2.1 by @mathias */

    var _fromCodePoint;

    function fromCodePoint(_) {
        return _fromCodePoint(_);
    }

    if (String.fromCodePoint) {
        _fromCodePoint = function(_) {
            try {
                return String.fromCodePoint(_);
            } catch (e) {
                if (e instanceof RangeError) {
                    return String.fromCharCode(0xfffd);
                }
                throw e;
            }
        };
    } else {
        var stringFromCharCode = String.fromCharCode;
        var floor = Math.floor;
        _fromCodePoint = function() {
            var MAX_SIZE = 0x4000;
            var codeUnits = [];
            var highSurrogate;
            var lowSurrogate;
            var index = -1;
            var length = arguments.length;
            if (!length) {
                return "";
            }
            var result = "";
            while (++index < length) {
                var codePoint = Number(arguments[index]);
                if (
                    !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
                    codePoint < 0 || // not a valid Unicode code point
                    codePoint > 0x10ffff || // not a valid Unicode code point
                    floor(codePoint) !== codePoint // not an integer
                ) {
                    return String.fromCharCode(0xfffd);
                }
                if (codePoint <= 0xffff) {
                    // BMP code point
                    codeUnits.push(codePoint);
                } else {
                    // Astral code point; split in surrogate halves
                    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                    codePoint -= 0x10000;
                    highSurrogate = (codePoint >> 10) + 0xd800;
                    lowSurrogate = (codePoint % 0x400) + 0xdc00;
                    codeUnits.push(highSurrogate, lowSurrogate);
                }
                if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                    result += stringFromCharCode.apply(null, codeUnits);
                    codeUnits.length = 0;
                }
            }
            return result;
        };
    }

    /*! http://mths.be/repeat v0.2.0 by @mathias */
    if (!String.prototype.repeat) {
    	(function() {
    		var defineProperty = (function() {
    			// IE 8 only supports `Object.defineProperty` on DOM elements
    			try {
    				var object = {};
    				var $defineProperty = Object.defineProperty;
    				var result = $defineProperty(object, object, object) && $defineProperty;
    			} catch(error) {}
    			return result;
    		}());
    		var repeat = function(count) {
    			if (this == null) {
    				throw TypeError();
    			}
    			var string = String(this);
    			// `ToInteger`
    			var n = count ? Number(count) : 0;
    			if (n != n) { // better `isNaN`
    				n = 0;
    			}
    			// Account for out-of-bounds indices
    			if (n < 0 || n == Infinity) {
    				throw RangeError();
    			}
    			var result = '';
    			while (n) {
    				if (n % 2 == 1) {
    					result += string;
    				}
    				if (n > 1) {
    					string += string;
    				}
    				n >>= 1;
    			}
    			return result;
    		};
    		if (defineProperty) {
    			defineProperty(String.prototype, 'repeat', {
    				'value': repeat,
    				'configurable': true,
    				'writable': true
    			});
    		} else {
    			String.prototype.repeat = repeat;
    		}
    	}());
    }

    var normalizeURI$1 = normalizeURI;
    var unescapeString$1 = unescapeString;

    // Constants for character codes:

    var C_NEWLINE = 10;
    var C_ASTERISK = 42;
    var C_UNDERSCORE = 95;
    var C_BACKTICK = 96;
    var C_OPEN_BRACKET = 91;
    var C_CLOSE_BRACKET = 93;
    var C_LESSTHAN = 60;
    var C_BANG = 33;
    var C_BACKSLASH$1 = 92;
    var C_AMPERSAND = 38;
    var C_OPEN_PAREN = 40;
    var C_CLOSE_PAREN = 41;
    var C_COLON = 58;
    var C_SINGLEQUOTE = 39;
    var C_DOUBLEQUOTE = 34;

    // Some regexps used in inline parser:

    var ESCAPABLE$1 = ESCAPABLE;
    var ESCAPED_CHAR = "\\\\" + ESCAPABLE$1;

    var ENTITY$1 = ENTITY;
    var reHtmlTag$1 = reHtmlTag;

    var rePunctuation = new RegExp(
        /[!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/
    );

    var reLinkTitle = new RegExp(
        '^(?:"(' +
            ESCAPED_CHAR +
            '|[^"\\x00])*"' +
            "|" +
            "'(" +
            ESCAPED_CHAR +
            "|[^'\\x00])*'" +
            "|" +
            "\\((" +
            ESCAPED_CHAR +
            "|[^()\\x00])*\\))"
    );

    var reLinkDestinationBraces = /^(?:<(?:[^<>\n\\\x00]|\\.)*>)/;

    var reEscapable = new RegExp("^" + ESCAPABLE$1);

    var reEntityHere = new RegExp("^" + ENTITY$1, "i");

    var reTicks = /`+/;

    var reTicksHere = /^`+/;

    var reEllipses = /\.\.\./g;

    var reDash = /--+/g;

    var reEmailAutolink = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;

    var reAutolink = /^<[A-Za-z][A-Za-z0-9.+-]{1,31}:[^<>\x00-\x20]*>/i;

    var reSpnl = /^ *(?:\n *)?/;

    var reWhitespaceChar = /^[ \t\n\x0b\x0c\x0d]/;

    var reUnicodeWhitespaceChar = /^\s/;

    var reFinalSpace = / *$/;

    var reInitialSpace = /^ */;

    var reSpaceAtEndOfLine = /^ *(?:\n|$)/;

    var reLinkLabel = /^\[(?:[^\\\[\]]|\\.){0,1000}\]/;

    // Matches a string of non-special characters.
    var reMain = /^[^\n`\[\]\\!<&*_'"]+/m;

    var text = function(s) {
        var node = new Node("text");
        node._literal = s;
        return node;
    };

    // normalize a reference in reference link (remove []s, trim,
    // collapse internal space, unicode case fold.
    // See commonmark/commonmark.js#168.
    var normalizeReference = function(string) {
        return string
            .slice(1, string.length - 1)
            .trim()
            .replace(/[ \t\r\n]+/, " ")
            .toLowerCase()
            .toUpperCase();
    };

    // INLINE PARSER

    // These are methods of an InlineParser object, defined below.
    // An InlineParser keeps track of a subject (a string to be
    // parsed) and a position in that subject.

    // If re matches at current position in the subject, advance
    // position in subject and return the match; otherwise return null.
    var match = function(re) {
        var m = re.exec(this.subject.slice(this.pos));
        if (m === null) {
            return null;
        } else {
            this.pos += m.index + m[0].length;
            return m[0];
        }
    };

    // Returns the code for the character at the current subject position, or -1
    // there are no more characters.
    var peek = function() {
        if (this.pos < this.subject.length) {
            return this.subject.charCodeAt(this.pos);
        } else {
            return -1;
        }
    };

    // Parse zero or more space characters, including at most one newline
    var spnl = function() {
        this.match(reSpnl);
        return true;
    };

    // All of the parsers below try to match something at the current position
    // in the subject.  If they succeed in matching anything, they
    // return the inline matched, advancing the subject.

    // Attempt to parse backticks, adding either a backtick code span or a
    // literal sequence of backticks.
    var parseBackticks = function(block) {
        var ticks = this.match(reTicksHere);
        if (ticks === null) {
            return false;
        }
        var afterOpenTicks = this.pos;
        var matched;
        var node;
        var contents;
        while ((matched = this.match(reTicks)) !== null) {
            if (matched === ticks) {
                node = new Node("code");
                contents = this.subject
                    .slice(afterOpenTicks, this.pos - ticks.length)
                    .replace(/\n/gm, " ");
                if (
                    contents.length > 0 &&
                    contents.match(/[^ ]/) !== null &&
                    contents[0] == " " &&
                    contents[contents.length - 1] == " "
                ) {
                    node._literal = contents.slice(1, contents.length - 1);
                } else {
                    node._literal = contents;
                }
                block.appendChild(node);
                return true;
            }
        }
        // If we got here, we didn't match a closing backtick sequence.
        this.pos = afterOpenTicks;
        block.appendChild(text(ticks));
        return true;
    };

    // Parse a backslash-escaped special character, adding either the escaped
    // character, a hard line break (if the backslash is followed by a newline),
    // or a literal backslash to the block's children.  Assumes current character
    // is a backslash.
    var parseBackslash = function(block) {
        var subj = this.subject;
        var node;
        this.pos += 1;
        if (this.peek() === C_NEWLINE) {
            this.pos += 1;
            node = new Node("linebreak");
            block.appendChild(node);
        } else if (reEscapable.test(subj.charAt(this.pos))) {
            block.appendChild(text(subj.charAt(this.pos)));
            this.pos += 1;
        } else {
            block.appendChild(text("\\"));
        }
        return true;
    };

    // Attempt to parse an autolink (URL or email in pointy brackets).
    var parseAutolink = function(block) {
        var m;
        var dest;
        var node;
        if ((m = this.match(reEmailAutolink))) {
            dest = m.slice(1, m.length - 1);
            node = new Node("link");
            node._destination = normalizeURI$1("mailto:" + dest);
            node._title = "";
            node.appendChild(text(dest));
            block.appendChild(node);
            return true;
        } else if ((m = this.match(reAutolink))) {
            dest = m.slice(1, m.length - 1);
            node = new Node("link");
            node._destination = normalizeURI$1(dest);
            node._title = "";
            node.appendChild(text(dest));
            block.appendChild(node);
            return true;
        } else {
            return false;
        }
    };

    // Attempt to parse a raw HTML tag.
    var parseHtmlTag = function(block) {
        var m = this.match(reHtmlTag$1);
        if (m === null) {
            return false;
        } else {
            var node = new Node("html_inline");
            node._literal = m;
            block.appendChild(node);
            return true;
        }
    };

    // Scan a sequence of characters with code cc, and return information about
    // the number of delimiters and whether they are positioned such that
    // they can open and/or close emphasis or strong emphasis.  A utility
    // function for strong/emph parsing.
    var scanDelims = function(cc) {
        var numdelims = 0;
        var char_before, char_after, cc_after;
        var startpos = this.pos;
        var left_flanking, right_flanking, can_open, can_close;
        var after_is_whitespace,
            after_is_punctuation,
            before_is_whitespace,
            before_is_punctuation;

        if (cc === C_SINGLEQUOTE || cc === C_DOUBLEQUOTE) {
            numdelims++;
            this.pos++;
        } else {
            while (this.peek() === cc) {
                numdelims++;
                this.pos++;
            }
        }

        if (numdelims === 0) {
            return null;
        }

        char_before = startpos === 0 ? "\n" : this.subject.charAt(startpos - 1);

        cc_after = this.peek();
        if (cc_after === -1) {
            char_after = "\n";
        } else {
            char_after = fromCodePoint(cc_after);
        }

        after_is_whitespace = reUnicodeWhitespaceChar.test(char_after);
        after_is_punctuation = rePunctuation.test(char_after);
        before_is_whitespace = reUnicodeWhitespaceChar.test(char_before);
        before_is_punctuation = rePunctuation.test(char_before);

        left_flanking =
            !after_is_whitespace &&
            (!after_is_punctuation ||
                before_is_whitespace ||
                before_is_punctuation);
        right_flanking =
            !before_is_whitespace &&
            (!before_is_punctuation || after_is_whitespace || after_is_punctuation);
        if (cc === C_UNDERSCORE) {
            can_open = left_flanking && (!right_flanking || before_is_punctuation);
            can_close = right_flanking && (!left_flanking || after_is_punctuation);
        } else if (cc === C_SINGLEQUOTE || cc === C_DOUBLEQUOTE) {
            can_open = left_flanking && !right_flanking;
            can_close = right_flanking;
        } else {
            can_open = left_flanking;
            can_close = right_flanking;
        }
        this.pos = startpos;
        return { numdelims: numdelims, can_open: can_open, can_close: can_close };
    };

    // Handle a delimiter marker for emphasis or a quote.
    var handleDelim = function(cc, block) {
        var res = this.scanDelims(cc);
        if (!res) {
            return false;
        }
        var numdelims = res.numdelims;
        var startpos = this.pos;
        var contents;

        this.pos += numdelims;
        if (cc === C_SINGLEQUOTE) {
            contents = "\u2019";
        } else if (cc === C_DOUBLEQUOTE) {
            contents = "\u201C";
        } else {
            contents = this.subject.slice(startpos, this.pos);
        }
        var node = text(contents);
        block.appendChild(node);

        // Add entry to stack for this opener
        if (
            (res.can_open || res.can_close) &&
            (this.options.smart || (cc !== C_SINGLEQUOTE && cc !== C_DOUBLEQUOTE))
        ) {
            this.delimiters = {
                cc: cc,
                numdelims: numdelims,
                origdelims: numdelims,
                node: node,
                previous: this.delimiters,
                next: null,
                can_open: res.can_open,
                can_close: res.can_close
            };
            if (this.delimiters.previous !== null) {
                this.delimiters.previous.next = this.delimiters;
            }
        }

        return true;
    };

    var removeDelimiter = function(delim) {
        if (delim.previous !== null) {
            delim.previous.next = delim.next;
        }
        if (delim.next === null) {
            // top of stack
            this.delimiters = delim.previous;
        } else {
            delim.next.previous = delim.previous;
        }
    };

    var removeDelimitersBetween = function(bottom, top) {
        if (bottom.next !== top) {
            bottom.next = top;
            top.previous = bottom;
        }
    };

    var processEmphasis = function(stack_bottom) {
        var opener, closer, old_closer;
        var opener_inl, closer_inl;
        var tempstack;
        var use_delims;
        var tmp, next;
        var opener_found;
        var openers_bottom = [[], [], []];
        var odd_match = false;

        for (var i = 0; i < 3; i++) {
            openers_bottom[i][C_UNDERSCORE] = stack_bottom;
            openers_bottom[i][C_ASTERISK] = stack_bottom;
            openers_bottom[i][C_SINGLEQUOTE] = stack_bottom;
            openers_bottom[i][C_DOUBLEQUOTE] = stack_bottom;
        }
        // find first closer above stack_bottom:
        closer = this.delimiters;
        while (closer !== null && closer.previous !== stack_bottom) {
            closer = closer.previous;
        }
        // move forward, looking for closers, and handling each
        while (closer !== null) {
            var closercc = closer.cc;
            if (!closer.can_close) {
                closer = closer.next;
            } else {
                // found emphasis closer. now look back for first matching opener:
                opener = closer.previous;
                opener_found = false;
                while (
                    opener !== null &&
                    opener !== stack_bottom &&
                    opener !== openers_bottom[closer.origdelims % 3][closercc]
                ) {
                    odd_match =
                        (closer.can_open || opener.can_close) &&
                        closer.origdelims % 3 !== 0 &&
                        (opener.origdelims + closer.origdelims) % 3 === 0;
                    if (opener.cc === closer.cc && opener.can_open && !odd_match) {
                        opener_found = true;
                        break;
                    }
                    opener = opener.previous;
                }
                old_closer = closer;

                if (closercc === C_ASTERISK || closercc === C_UNDERSCORE) {
                    if (!opener_found) {
                        closer = closer.next;
                    } else {
                        // calculate actual number of delimiters used from closer
                        use_delims =
                            closer.numdelims >= 2 && opener.numdelims >= 2 ? 2 : 1;

                        opener_inl = opener.node;
                        closer_inl = closer.node;

                        // remove used delimiters from stack elts and inlines
                        opener.numdelims -= use_delims;
                        closer.numdelims -= use_delims;
                        opener_inl._literal = opener_inl._literal.slice(
                            0,
                            opener_inl._literal.length - use_delims
                        );
                        closer_inl._literal = closer_inl._literal.slice(
                            0,
                            closer_inl._literal.length - use_delims
                        );

                        // build contents for new emph element
                        var emph = new Node(use_delims === 1 ? "emph" : "strong");

                        tmp = opener_inl._next;
                        while (tmp && tmp !== closer_inl) {
                            next = tmp._next;
                            tmp.unlink();
                            emph.appendChild(tmp);
                            tmp = next;
                        }

                        opener_inl.insertAfter(emph);

                        // remove elts between opener and closer in delimiters stack
                        removeDelimitersBetween(opener, closer);

                        // if opener has 0 delims, remove it and the inline
                        if (opener.numdelims === 0) {
                            opener_inl.unlink();
                            this.removeDelimiter(opener);
                        }

                        if (closer.numdelims === 0) {
                            closer_inl.unlink();
                            tempstack = closer.next;
                            this.removeDelimiter(closer);
                            closer = tempstack;
                        }
                    }
                } else if (closercc === C_SINGLEQUOTE) {
                    closer.node._literal = "\u2019";
                    if (opener_found) {
                        opener.node._literal = "\u2018";
                    }
                    closer = closer.next;
                } else if (closercc === C_DOUBLEQUOTE) {
                    closer.node._literal = "\u201D";
                    if (opener_found) {
                        opener.node.literal = "\u201C";
                    }
                    closer = closer.next;
                }
                if (!opener_found) {
                    // Set lower bound for future searches for openers:
                    openers_bottom[old_closer.origdelims % 3][closercc] =
                        old_closer.previous;
                    if (!old_closer.can_open) {
                        // We can remove a closer that can't be an opener,
                        // once we've seen there's no matching opener:
                        this.removeDelimiter(old_closer);
                    }
                }
            }
        }

        // remove all delimiters
        while (this.delimiters !== null && this.delimiters !== stack_bottom) {
            this.removeDelimiter(this.delimiters);
        }
    };

    // Attempt to parse link title (sans quotes), returning the string
    // or null if no match.
    var parseLinkTitle = function() {
        var title = this.match(reLinkTitle);
        if (title === null) {
            return null;
        } else {
            // chop off quotes from title and unescape:
            return unescapeString$1(title.substr(1, title.length - 2));
        }
    };

    // Attempt to parse link destination, returning the string or
    // null if no match.
    var parseLinkDestination = function() {
        var res = this.match(reLinkDestinationBraces);
        if (res === null) {
            if (this.peek() === C_LESSTHAN) {
                return null;
            }
            // TODO handrolled parser; res should be null or the string
            var savepos = this.pos;
            var openparens = 0;
            var c;
            while ((c = this.peek()) !== -1) {
                if (
                    c === C_BACKSLASH$1 &&
                    reEscapable.test(this.subject.charAt(this.pos + 1))
                ) {
                    this.pos += 1;
                    if (this.peek() !== -1) {
                        this.pos += 1;
                    }
                } else if (c === C_OPEN_PAREN) {
                    this.pos += 1;
                    openparens += 1;
                } else if (c === C_CLOSE_PAREN) {
                    if (openparens < 1) {
                        break;
                    } else {
                        this.pos += 1;
                        openparens -= 1;
                    }
                } else if (reWhitespaceChar.exec(fromCodePoint(c)) !== null) {
                    break;
                } else {
                    this.pos += 1;
                }
            }
            if (this.pos === savepos && c !== C_CLOSE_PAREN) {
                return null;
            }
            if (openparens !== 0) {
                return null;
            }
            res = this.subject.substr(savepos, this.pos - savepos);
            return normalizeURI$1(unescapeString$1(res));
        } else {
            // chop off surrounding <..>:
            return normalizeURI$1(unescapeString$1(res.substr(1, res.length - 2)));
        }
    };

    // Attempt to parse a link label, returning number of characters parsed.
    var parseLinkLabel = function() {
        var m = this.match(reLinkLabel);
        if (m === null || m.length > 1001) {
            return 0;
        } else {
            return m.length;
        }
    };

    // Add open bracket to delimiter stack and add a text node to block's children.
    var parseOpenBracket = function(block) {
        var startpos = this.pos;
        this.pos += 1;

        var node = text("[");
        block.appendChild(node);

        // Add entry to stack for this opener
        this.addBracket(node, startpos, false);
        return true;
    };

    // IF next character is [, and ! delimiter to delimiter stack and
    // add a text node to block's children.  Otherwise just add a text node.
    var parseBang = function(block) {
        var startpos = this.pos;
        this.pos += 1;
        if (this.peek() === C_OPEN_BRACKET) {
            this.pos += 1;

            var node = text("![");
            block.appendChild(node);

            // Add entry to stack for this opener
            this.addBracket(node, startpos + 1, true);
        } else {
            block.appendChild(text("!"));
        }
        return true;
    };

    // Try to match close bracket against an opening in the delimiter
    // stack.  Add either a link or image, or a plain [ character,
    // to block's children.  If there is a matching delimiter,
    // remove it from the delimiter stack.
    var parseCloseBracket = function(block) {
        var startpos;
        var is_image;
        var dest;
        var title;
        var matched = false;
        var reflabel;
        var opener;

        this.pos += 1;
        startpos = this.pos;

        // get last [ or ![
        opener = this.brackets;

        if (opener === null) {
            // no matched opener, just return a literal
            block.appendChild(text("]"));
            return true;
        }

        if (!opener.active) {
            // no matched opener, just return a literal
            block.appendChild(text("]"));
            // take opener off brackets stack
            this.removeBracket();
            return true;
        }

        // If we got here, open is a potential opener
        is_image = opener.image;

        // Check to see if we have a link/image

        var savepos = this.pos;

        // Inline link?
        if (this.peek() === C_OPEN_PAREN) {
            this.pos++;
            if (
                this.spnl() &&
                (dest = this.parseLinkDestination()) !== null &&
                this.spnl() &&
                // make sure there's a space before the title:
                ((reWhitespaceChar.test(this.subject.charAt(this.pos - 1)) &&
                    (title = this.parseLinkTitle())) ||
                    true) &&
                this.spnl() &&
                this.peek() === C_CLOSE_PAREN
            ) {
                this.pos += 1;
                matched = true;
            } else {
                this.pos = savepos;
            }
        }

        if (!matched) {
            // Next, see if there's a link label
            var beforelabel = this.pos;
            var n = this.parseLinkLabel();
            if (n > 2) {
                reflabel = this.subject.slice(beforelabel, beforelabel + n);
            } else if (!opener.bracketAfter) {
                // Empty or missing second label means to use the first label as the reference.
                // The reference must not contain a bracket. If we know there's a bracket, we don't even bother checking it.
                reflabel = this.subject.slice(opener.index, startpos);
            }
            if (n === 0) {
                // If shortcut reference link, rewind before spaces we skipped.
                this.pos = savepos;
            }

            if (reflabel) {
                // lookup rawlabel in refmap
                var link = this.refmap[normalizeReference(reflabel)];
                if (link) {
                    dest = link.destination;
                    title = link.title;
                    matched = true;
                }
            }
        }

        if (matched) {
            var node = new Node(is_image ? "image" : "link");
            node._destination = dest;
            node._title = title || "";

            var tmp, next;
            tmp = opener.node._next;
            while (tmp) {
                next = tmp._next;
                tmp.unlink();
                node.appendChild(tmp);
                tmp = next;
            }
            block.appendChild(node);
            this.processEmphasis(opener.previousDelimiter);
            this.removeBracket();
            opener.node.unlink();

            // We remove this bracket and processEmphasis will remove later delimiters.
            // Now, for a link, we also deactivate earlier link openers.
            // (no links in links)
            if (!is_image) {
                opener = this.brackets;
                while (opener !== null) {
                    if (!opener.image) {
                        opener.active = false; // deactivate this opener
                    }
                    opener = opener.previous;
                }
            }

            return true;
        } else {
            // no match

            this.removeBracket(); // remove this opener from stack
            this.pos = startpos;
            block.appendChild(text("]"));
            return true;
        }
    };

    var addBracket = function(node, index, image) {
        if (this.brackets !== null) {
            this.brackets.bracketAfter = true;
        }
        this.brackets = {
            node: node,
            previous: this.brackets,
            previousDelimiter: this.delimiters,
            index: index,
            image: image,
            active: true
        };
    };

    var removeBracket = function() {
        this.brackets = this.brackets.previous;
    };

    // Attempt to parse an entity.
    var parseEntity = function(block) {
        var m;
        if ((m = this.match(reEntityHere))) {
            block.appendChild(text(lib_10(m)));
            return true;
        } else {
            return false;
        }
    };

    // Parse a run of ordinary characters, or a single character with
    // a special meaning in markdown, as a plain string.
    var parseString = function(block) {
        var m;
        if ((m = this.match(reMain))) {
            if (this.options.smart) {
                block.appendChild(
                    text(
                        m
                            .replace(reEllipses, "\u2026")
                            .replace(reDash, function(chars) {
                                var enCount = 0;
                                var emCount = 0;
                                if (chars.length % 3 === 0) {
                                    // If divisible by 3, use all em dashes
                                    emCount = chars.length / 3;
                                } else if (chars.length % 2 === 0) {
                                    // If divisible by 2, use all en dashes
                                    enCount = chars.length / 2;
                                } else if (chars.length % 3 === 2) {
                                    // If 2 extra dashes, use en dash for last 2; em dashes for rest
                                    enCount = 1;
                                    emCount = (chars.length - 2) / 3;
                                } else {
                                    // Use en dashes for last 4 hyphens; em dashes for rest
                                    enCount = 2;
                                    emCount = (chars.length - 4) / 3;
                                }
                                return (
                                    "\u2014".repeat(emCount) +
                                    "\u2013".repeat(enCount)
                                );
                            })
                    )
                );
            } else {
                block.appendChild(text(m));
            }
            return true;
        } else {
            return false;
        }
    };

    // Parse a newline.  If it was preceded by two spaces, return a hard
    // line break; otherwise a soft line break.
    var parseNewline = function(block) {
        this.pos += 1; // assume we're at a \n
        // check previous node for trailing spaces
        var lastc = block._lastChild;
        if (
            lastc &&
            lastc.type === "text" &&
            lastc._literal[lastc._literal.length - 1] === " "
        ) {
            var hardbreak = lastc._literal[lastc._literal.length - 2] === " ";
            lastc._literal = lastc._literal.replace(reFinalSpace, "");
            block.appendChild(new Node(hardbreak ? "linebreak" : "softbreak"));
        } else {
            block.appendChild(new Node("softbreak"));
        }
        this.match(reInitialSpace); // gobble leading spaces in next line
        return true;
    };

    // Attempt to parse a link reference, modifying refmap.
    var parseReference = function(s, refmap) {
        this.subject = s;
        this.pos = 0;
        var rawlabel;
        var dest;
        var title;
        var matchChars;
        var startpos = this.pos;

        // label:
        matchChars = this.parseLinkLabel();
        if (matchChars === 0) {
            return 0;
        } else {
            rawlabel = this.subject.substr(0, matchChars);
        }

        // colon:
        if (this.peek() === C_COLON) {
            this.pos++;
        } else {
            this.pos = startpos;
            return 0;
        }

        //  link url
        this.spnl();

        dest = this.parseLinkDestination();
        if (dest === null) {
            this.pos = startpos;
            return 0;
        }

        var beforetitle = this.pos;
        this.spnl();
        if (this.pos !== beforetitle) {
            title = this.parseLinkTitle();
        }
        if (title === null) {
            title = "";
            // rewind before spaces
            this.pos = beforetitle;
        }

        // make sure we're at line end:
        var atLineEnd = true;
        if (this.match(reSpaceAtEndOfLine) === null) {
            if (title === "") {
                atLineEnd = false;
            } else {
                // the potential title we found is not at the line end,
                // but it could still be a legal link reference if we
                // discard the title
                title = "";
                // rewind before spaces
                this.pos = beforetitle;
                // and instead check if the link URL is at the line end
                atLineEnd = this.match(reSpaceAtEndOfLine) !== null;
            }
        }

        if (!atLineEnd) {
            this.pos = startpos;
            return 0;
        }

        var normlabel = normalizeReference(rawlabel);
        if (normlabel === "") {
            // label must contain non-whitespace characters
            this.pos = startpos;
            return 0;
        }

        if (!refmap[normlabel]) {
            refmap[normlabel] = { destination: dest, title: title };
        }
        return this.pos - startpos;
    };

    // Parse the next inline element in subject, advancing subject position.
    // On success, add the result to block's children and return true.
    // On failure, return false.
    var parseInline = function(block) {
        var res = false;
        var c = this.peek();
        if (c === -1) {
            return false;
        }
        switch (c) {
            case C_NEWLINE:
                res = this.parseNewline(block);
                break;
            case C_BACKSLASH$1:
                res = this.parseBackslash(block);
                break;
            case C_BACKTICK:
                res = this.parseBackticks(block);
                break;
            case C_ASTERISK:
            case C_UNDERSCORE:
                res = this.handleDelim(c, block);
                break;
            case C_SINGLEQUOTE:
            case C_DOUBLEQUOTE:
                res = this.options.smart && this.handleDelim(c, block);
                break;
            case C_OPEN_BRACKET:
                res = this.parseOpenBracket(block);
                break;
            case C_BANG:
                res = this.parseBang(block);
                break;
            case C_CLOSE_BRACKET:
                res = this.parseCloseBracket(block);
                break;
            case C_LESSTHAN:
                res = this.parseAutolink(block) || this.parseHtmlTag(block);
                break;
            case C_AMPERSAND:
                res = this.parseEntity(block);
                break;
            default:
                res = this.parseString(block);
                break;
        }
        if (!res) {
            this.pos += 1;
            block.appendChild(text(fromCodePoint(c)));
        }

        return true;
    };

    // Parse string content in block into inline children,
    // using refmap to resolve references.
    var parseInlines = function(block) {
        this.subject = block._string_content.trim();
        this.pos = 0;
        this.delimiters = null;
        this.brackets = null;
        while (this.parseInline(block)) {}
        block._string_content = null; // allow raw string to be garbage collected
        this.processEmphasis(null);
    };

    // The InlineParser object.
    function InlineParser(options) {
        return {
            subject: "",
            delimiters: null, // used by handleDelim method
            brackets: null,
            pos: 0,
            refmap: {},
            match: match,
            peek: peek,
            spnl: spnl,
            parseBackticks: parseBackticks,
            parseBackslash: parseBackslash,
            parseAutolink: parseAutolink,
            parseHtmlTag: parseHtmlTag,
            scanDelims: scanDelims,
            handleDelim: handleDelim,
            parseLinkTitle: parseLinkTitle,
            parseLinkDestination: parseLinkDestination,
            parseLinkLabel: parseLinkLabel,
            parseOpenBracket: parseOpenBracket,
            parseBang: parseBang,
            parseCloseBracket: parseCloseBracket,
            addBracket: addBracket,
            removeBracket: removeBracket,
            parseEntity: parseEntity,
            parseString: parseString,
            parseNewline: parseNewline,
            parseReference: parseReference,
            parseInline: parseInline,
            processEmphasis: processEmphasis,
            removeDelimiter: removeDelimiter,
            options: options || {},
            parse: parseInlines
        };
    }

    var CODE_INDENT = 4;

    var C_TAB = 9;
    var C_NEWLINE$1 = 10;
    var C_GREATERTHAN = 62;
    var C_LESSTHAN$1 = 60;
    var C_SPACE = 32;
    var C_OPEN_BRACKET$1 = 91;

    var reHtmlBlockOpen = [
        /./, // dummy for 0
        /^<(?:script|pre|textarea|style)(?:\s|>|$)/i,
        /^<!--/,
        /^<[?]/,
        /^<![A-Z]/,
        /^<!\[CDATA\[/,
        /^<[/]?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[123456]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|[/]?[>]|$)/i,
        new RegExp("^(?:" + OPENTAG + "|" + CLOSETAG + ")\\s*$", "i")
    ];

    var reHtmlBlockClose = [
        /./, // dummy for 0
        /<\/(?:script|pre|textarea|style)>/i,
        /-->/,
        /\?>/,
        />/,
        /\]\]>/
    ];

    var reThematicBreak = /^(?:(?:\*[ \t]*){3,}|(?:_[ \t]*){3,}|(?:-[ \t]*){3,})[ \t]*$/;

    var reMaybeSpecial = /^[#`~*+_=<>0-9-]/;

    var reNonSpace = /[^ \t\f\v\r\n]/;

    var reBulletListMarker = /^[*+-]/;

    var reOrderedListMarker = /^(\d{1,9})([.)])/;

    var reATXHeadingMarker = /^#{1,6}(?:[ \t]+|$)/;

    var reCodeFence = /^`{3,}(?!.*`)|^~{3,}/;

    var reClosingCodeFence = /^(?:`{3,}|~{3,})(?= *$)/;

    var reSetextHeadingLine = /^(?:=+|-+)[ \t]*$/;

    var reLineEnding = /\r\n|\n|\r/;

    // Returns true if string contains only space characters.
    var isBlank = function(s) {
        return !reNonSpace.test(s);
    };

    var isSpaceOrTab = function(c) {
        return c === C_SPACE || c === C_TAB;
    };

    var peek$1 = function(ln, pos) {
        if (pos < ln.length) {
            return ln.charCodeAt(pos);
        } else {
            return -1;
        }
    };

    // DOC PARSER

    // These are methods of a Parser object, defined below.

    // Returns true if block ends with a blank line, descending if needed
    // into lists and sublists.
    var endsWithBlankLine = function(block) {
        while (block) {
            if (block._lastLineBlank) {
                return true;
            }
            var t = block.type;
            if (!block._lastLineChecked && (t === "list" || t === "item")) {
                block._lastLineChecked = true;
                block = block._lastChild;
            } else {
                block._lastLineChecked = true;
                break;
            }
        }
        return false;
    };

    // Add a line to the block at the tip.  We assume the tip
    // can accept lines -- that check should be done before calling this.
    var addLine = function() {
        if (this.partiallyConsumedTab) {
            this.offset += 1; // skip over tab
            // add space characters:
            var charsToTab = 4 - (this.column % 4);
            this.tip._string_content += " ".repeat(charsToTab);
        }
        this.tip._string_content += this.currentLine.slice(this.offset) + "\n";
    };

    // Add block of type tag as a child of the tip.  If the tip can't
    // accept children, close and finalize it and try its parent,
    // and so on til we find a block that can accept children.
    var addChild = function(tag, offset) {
        while (!this.blocks[this.tip.type].canContain(tag)) {
            this.finalize(this.tip, this.lineNumber - 1);
        }

        var column_number = offset + 1; // offset 0 = column 1
        var newBlock = new Node(tag, [
            [this.lineNumber, column_number],
            [0, 0]
        ]);
        newBlock._string_content = "";
        this.tip.appendChild(newBlock);
        this.tip = newBlock;
        return newBlock;
    };

    // Parse a list marker and return data on the marker (type,
    // start, delimiter, bullet character, padding) or null.
    var parseListMarker = function(parser, container) {
        var rest = parser.currentLine.slice(parser.nextNonspace);
        var match;
        var nextc;
        var spacesStartCol;
        var spacesStartOffset;
        var data = {
            type: null,
            tight: true, // lists are tight by default
            bulletChar: null,
            start: null,
            delimiter: null,
            padding: null,
            markerOffset: parser.indent
        };
        if (parser.indent >= 4) {
            return null;
        }
        if ((match = rest.match(reBulletListMarker))) {
            data.type = "bullet";
            data.bulletChar = match[0][0];
        } else if (
            (match = rest.match(reOrderedListMarker)) &&
            (container.type !== "paragraph" || match[1] === "1")
        ) {
            data.type = "ordered";
            data.start = parseInt(match[1]);
            data.delimiter = match[2];
        } else {
            return null;
        }
        // make sure we have spaces after
        nextc = peek$1(parser.currentLine, parser.nextNonspace + match[0].length);
        if (!(nextc === -1 || nextc === C_TAB || nextc === C_SPACE)) {
            return null;
        }

        // if it interrupts paragraph, make sure first line isn't blank
        if (
            container.type === "paragraph" &&
            !parser.currentLine
                .slice(parser.nextNonspace + match[0].length)
                .match(reNonSpace)
        ) {
            return null;
        }

        // we've got a match! advance offset and calculate padding
        parser.advanceNextNonspace(); // to start of marker
        parser.advanceOffset(match[0].length, true); // to end of marker
        spacesStartCol = parser.column;
        spacesStartOffset = parser.offset;
        do {
            parser.advanceOffset(1, true);
            nextc = peek$1(parser.currentLine, parser.offset);
        } while (parser.column - spacesStartCol < 5 && isSpaceOrTab(nextc));
        var blank_item = peek$1(parser.currentLine, parser.offset) === -1;
        var spaces_after_marker = parser.column - spacesStartCol;
        if (spaces_after_marker >= 5 || spaces_after_marker < 1 || blank_item) {
            data.padding = match[0].length + 1;
            parser.column = spacesStartCol;
            parser.offset = spacesStartOffset;
            if (isSpaceOrTab(peek$1(parser.currentLine, parser.offset))) {
                parser.advanceOffset(1, true);
            }
        } else {
            data.padding = match[0].length + spaces_after_marker;
        }
        return data;
    };

    // Returns true if the two list items are of the same type,
    // with the same delimiter and bullet character.  This is used
    // in agglomerating list items into lists.
    var listsMatch = function(list_data, item_data) {
        return (
            list_data.type === item_data.type &&
            list_data.delimiter === item_data.delimiter &&
            list_data.bulletChar === item_data.bulletChar
        );
    };

    // Finalize and close any unmatched blocks.
    var closeUnmatchedBlocks = function() {
        if (!this.allClosed) {
            // finalize any blocks not matched
            while (this.oldtip !== this.lastMatchedContainer) {
                var parent = this.oldtip._parent;
                this.finalize(this.oldtip, this.lineNumber - 1);
                this.oldtip = parent;
            }
            this.allClosed = true;
        }
    };

    // 'finalize' is run when the block is closed.
    // 'continue' is run to check whether the block is continuing
    // at a certain line and offset (e.g. whether a block quote
    // contains a `>`.  It returns 0 for matched, 1 for not matched,
    // and 2 for "we've dealt with this line completely, go to next."
    var blocks = {
        document: {
            continue: function() {
                return 0;
            },
            finalize: function() {
                return;
            },
            canContain: function(t) {
                return t !== "item";
            },
            acceptsLines: false
        },
        list: {
            continue: function() {
                return 0;
            },
            finalize: function(parser, block) {
                var item = block._firstChild;
                while (item) {
                    // check for non-final list item ending with blank line:
                    if (endsWithBlankLine(item) && item._next) {
                        block._listData.tight = false;
                        break;
                    }
                    // recurse into children of list item, to see if there are
                    // spaces between any of them:
                    var subitem = item._firstChild;
                    while (subitem) {
                        if (
                            endsWithBlankLine(subitem) &&
                            (item._next || subitem._next)
                        ) {
                            block._listData.tight = false;
                            break;
                        }
                        subitem = subitem._next;
                    }
                    item = item._next;
                }
            },
            canContain: function(t) {
                return t === "item";
            },
            acceptsLines: false
        },
        block_quote: {
            continue: function(parser) {
                var ln = parser.currentLine;
                if (
                    !parser.indented &&
                    peek$1(ln, parser.nextNonspace) === C_GREATERTHAN
                ) {
                    parser.advanceNextNonspace();
                    parser.advanceOffset(1, false);
                    if (isSpaceOrTab(peek$1(ln, parser.offset))) {
                        parser.advanceOffset(1, true);
                    }
                } else {
                    return 1;
                }
                return 0;
            },
            finalize: function() {
                return;
            },
            canContain: function(t) {
                return t !== "item";
            },
            acceptsLines: false
        },
        item: {
            continue: function(parser, container) {
                if (parser.blank) {
                    if (container._firstChild == null) {
                        // Blank line after empty list item
                        return 1;
                    } else {
                        parser.advanceNextNonspace();
                    }
                } else if (
                    parser.indent >=
                    container._listData.markerOffset + container._listData.padding
                ) {
                    parser.advanceOffset(
                        container._listData.markerOffset +
                            container._listData.padding,
                        true
                    );
                } else {
                    return 1;
                }
                return 0;
            },
            finalize: function() {
                return;
            },
            canContain: function(t) {
                return t !== "item";
            },
            acceptsLines: false
        },
        heading: {
            continue: function() {
                // a heading can never container > 1 line, so fail to match:
                return 1;
            },
            finalize: function() {
                return;
            },
            canContain: function() {
                return false;
            },
            acceptsLines: false
        },
        thematic_break: {
            continue: function() {
                // a thematic break can never container > 1 line, so fail to match:
                return 1;
            },
            finalize: function() {
                return;
            },
            canContain: function() {
                return false;
            },
            acceptsLines: false
        },
        code_block: {
            continue: function(parser, container) {
                var ln = parser.currentLine;
                var indent = parser.indent;
                if (container._isFenced) {
                    // fenced
                    var match =
                        indent <= 3 &&
                        ln.charAt(parser.nextNonspace) === container._fenceChar &&
                        ln.slice(parser.nextNonspace).match(reClosingCodeFence);
                    if (match && match[0].length >= container._fenceLength) {
                        // closing fence - we're at end of line, so we can return
                        parser.lastLineLength =
                            parser.offset + indent + match[0].length;
                        parser.finalize(container, parser.lineNumber);
                        return 2;
                    } else {
                        // skip optional spaces of fence offset
                        var i = container._fenceOffset;
                        while (i > 0 && isSpaceOrTab(peek$1(ln, parser.offset))) {
                            parser.advanceOffset(1, true);
                            i--;
                        }
                    }
                } else {
                    // indented
                    if (indent >= CODE_INDENT) {
                        parser.advanceOffset(CODE_INDENT, true);
                    } else if (parser.blank) {
                        parser.advanceNextNonspace();
                    } else {
                        return 1;
                    }
                }
                return 0;
            },
            finalize: function(parser, block) {
                if (block._isFenced) {
                    // fenced
                    // first line becomes info string
                    var content = block._string_content;
                    var newlinePos = content.indexOf("\n");
                    var firstLine = content.slice(0, newlinePos);
                    var rest = content.slice(newlinePos + 1);
                    block.info = unescapeString(firstLine.trim());
                    block._literal = rest;
                } else {
                    // indented
                    block._literal = block._string_content.replace(
                        /(\n *)+$/,
                        "\n"
                    );
                }
                block._string_content = null; // allow GC
            },
            canContain: function() {
                return false;
            },
            acceptsLines: true
        },
        html_block: {
            continue: function(parser, container) {
                return parser.blank &&
                    (container._htmlBlockType === 6 ||
                        container._htmlBlockType === 7)
                    ? 1
                    : 0;
            },
            finalize: function(parser, block) {
                block._literal = block._string_content.replace(/(\n *)+$/, "");
                block._string_content = null; // allow GC
            },
            canContain: function() {
                return false;
            },
            acceptsLines: true
        },
        paragraph: {
            continue: function(parser) {
                return parser.blank ? 1 : 0;
            },
            finalize: function(parser, block) {
                var pos;
                var hasReferenceDefs = false;

                // try parsing the beginning as link reference definitions:
                while (
                    peek$1(block._string_content, 0) === C_OPEN_BRACKET$1 &&
                    (pos = parser.inlineParser.parseReference(
                        block._string_content,
                        parser.refmap
                    ))
                ) {
                    block._string_content = block._string_content.slice(pos);
                    hasReferenceDefs = true;
                }
                if (hasReferenceDefs && isBlank(block._string_content)) {
                    block.unlink();
                }
            },
            canContain: function() {
                return false;
            },
            acceptsLines: true
        }
    };

    // block start functions.  Return values:
    // 0 = no match
    // 1 = matched container, keep going
    // 2 = matched leaf, no more block starts
    var blockStarts = [
        // block quote
        function(parser) {
            if (
                !parser.indented &&
                peek$1(parser.currentLine, parser.nextNonspace) === C_GREATERTHAN
            ) {
                parser.advanceNextNonspace();
                parser.advanceOffset(1, false);
                // optional following space
                if (isSpaceOrTab(peek$1(parser.currentLine, parser.offset))) {
                    parser.advanceOffset(1, true);
                }
                parser.closeUnmatchedBlocks();
                parser.addChild("block_quote", parser.nextNonspace);
                return 1;
            } else {
                return 0;
            }
        },

        // ATX heading
        function(parser) {
            var match;
            if (
                !parser.indented &&
                (match = parser.currentLine
                    .slice(parser.nextNonspace)
                    .match(reATXHeadingMarker))
            ) {
                parser.advanceNextNonspace();
                parser.advanceOffset(match[0].length, false);
                parser.closeUnmatchedBlocks();
                var container = parser.addChild("heading", parser.nextNonspace);
                container.level = match[0].trim().length; // number of #s
                // remove trailing ###s:
                container._string_content = parser.currentLine
                    .slice(parser.offset)
                    .replace(/^[ \t]*#+[ \t]*$/, "")
                    .replace(/[ \t]+#+[ \t]*$/, "");
                parser.advanceOffset(parser.currentLine.length - parser.offset);
                return 2;
            } else {
                return 0;
            }
        },

        // Fenced code block
        function(parser) {
            var match;
            if (
                !parser.indented &&
                (match = parser.currentLine
                    .slice(parser.nextNonspace)
                    .match(reCodeFence))
            ) {
                var fenceLength = match[0].length;
                parser.closeUnmatchedBlocks();
                var container = parser.addChild("code_block", parser.nextNonspace);
                container._isFenced = true;
                container._fenceLength = fenceLength;
                container._fenceChar = match[0][0];
                container._fenceOffset = parser.indent;
                parser.advanceNextNonspace();
                parser.advanceOffset(fenceLength, false);
                return 2;
            } else {
                return 0;
            }
        },

        // HTML block
        function(parser, container) {
            if (
                !parser.indented &&
                peek$1(parser.currentLine, parser.nextNonspace) === C_LESSTHAN$1
            ) {
                var s = parser.currentLine.slice(parser.nextNonspace);
                var blockType;

                for (blockType = 1; blockType <= 7; blockType++) {
                    if (
                        reHtmlBlockOpen[blockType].test(s) &&
                        (blockType < 7 || container.type !== "paragraph")
                    ) {
                        parser.closeUnmatchedBlocks();
                        // We don't adjust parser.offset;
                        // spaces are part of the HTML block:
                        var b = parser.addChild("html_block", parser.offset);
                        b._htmlBlockType = blockType;
                        return 2;
                    }
                }
            }

            return 0;
        },

        // Setext heading
        function(parser, container) {
            var match;
            if (
                !parser.indented &&
                container.type === "paragraph" &&
                (match = parser.currentLine
                    .slice(parser.nextNonspace)
                    .match(reSetextHeadingLine))
            ) {
                parser.closeUnmatchedBlocks();
                // resolve reference link definitiosn
                var pos;
                while (
                    peek$1(container._string_content, 0) === C_OPEN_BRACKET$1 &&
                    (pos = parser.inlineParser.parseReference(
                        container._string_content,
                        parser.refmap
                    ))
                ) {
                    container._string_content = container._string_content.slice(
                        pos
                    );
                }
                if (container._string_content.length > 0) {
                    var heading = new Node("heading", container.sourcepos);
                    heading.level = match[0][0] === "=" ? 1 : 2;
                    heading._string_content = container._string_content;
                    container.insertAfter(heading);
                    container.unlink();
                    parser.tip = heading;
                    parser.advanceOffset(
                        parser.currentLine.length - parser.offset,
                        false
                    );
                    return 2;
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        },

        // thematic break
        function(parser) {
            if (
                !parser.indented &&
                reThematicBreak.test(parser.currentLine.slice(parser.nextNonspace))
            ) {
                parser.closeUnmatchedBlocks();
                parser.addChild("thematic_break", parser.nextNonspace);
                parser.advanceOffset(
                    parser.currentLine.length - parser.offset,
                    false
                );
                return 2;
            } else {
                return 0;
            }
        },

        // list item
        function(parser, container) {
            var data;

            if (
                (!parser.indented || container.type === "list") &&
                (data = parseListMarker(parser, container))
            ) {
                parser.closeUnmatchedBlocks();

                // add the list if needed
                if (
                    parser.tip.type !== "list" ||
                    !listsMatch(container._listData, data)
                ) {
                    container = parser.addChild("list", parser.nextNonspace);
                    container._listData = data;
                }

                // add the list item
                container = parser.addChild("item", parser.nextNonspace);
                container._listData = data;
                return 1;
            } else {
                return 0;
            }
        },

        // indented code block
        function(parser) {
            if (
                parser.indented &&
                parser.tip.type !== "paragraph" &&
                !parser.blank
            ) {
                // indented code
                parser.advanceOffset(CODE_INDENT, true);
                parser.closeUnmatchedBlocks();
                parser.addChild("code_block", parser.offset);
                return 2;
            } else {
                return 0;
            }
        }
    ];

    var advanceOffset = function(count, columns) {
        var currentLine = this.currentLine;
        var charsToTab, charsToAdvance;
        var c;
        while (count > 0 && (c = currentLine[this.offset])) {
            if (c === "\t") {
                charsToTab = 4 - (this.column % 4);
                if (columns) {
                    this.partiallyConsumedTab = charsToTab > count;
                    charsToAdvance = charsToTab > count ? count : charsToTab;
                    this.column += charsToAdvance;
                    this.offset += this.partiallyConsumedTab ? 0 : 1;
                    count -= charsToAdvance;
                } else {
                    this.partiallyConsumedTab = false;
                    this.column += charsToTab;
                    this.offset += 1;
                    count -= 1;
                }
            } else {
                this.partiallyConsumedTab = false;
                this.offset += 1;
                this.column += 1; // assume ascii; block starts are ascii
                count -= 1;
            }
        }
    };

    var advanceNextNonspace = function() {
        this.offset = this.nextNonspace;
        this.column = this.nextNonspaceColumn;
        this.partiallyConsumedTab = false;
    };

    var findNextNonspace = function() {
        var currentLine = this.currentLine;
        var i = this.offset;
        var cols = this.column;
        var c;

        while ((c = currentLine.charAt(i)) !== "") {
            if (c === " ") {
                i++;
                cols++;
            } else if (c === "\t") {
                i++;
                cols += 4 - (cols % 4);
            } else {
                break;
            }
        }
        this.blank = c === "\n" || c === "\r" || c === "";
        this.nextNonspace = i;
        this.nextNonspaceColumn = cols;
        this.indent = this.nextNonspaceColumn - this.column;
        this.indented = this.indent >= CODE_INDENT;
    };

    // Analyze a line of text and update the document appropriately.
    // We parse markdown text by calling this on each line of input,
    // then finalizing the document.
    var incorporateLine = function(ln) {
        var all_matched = true;
        var t;

        var container = this.doc;
        this.oldtip = this.tip;
        this.offset = 0;
        this.column = 0;
        this.blank = false;
        this.partiallyConsumedTab = false;
        this.lineNumber += 1;

        // replace NUL characters for security
        if (ln.indexOf("\u0000") !== -1) {
            ln = ln.replace(/\0/g, "\uFFFD");
        }

        this.currentLine = ln;

        // For each containing block, try to parse the associated line start.
        // Bail out on failure: container will point to the last matching block.
        // Set all_matched to false if not all containers match.
        var lastChild;
        while ((lastChild = container._lastChild) && lastChild._open) {
            container = lastChild;

            this.findNextNonspace();

            switch (this.blocks[container.type].continue(this, container)) {
                case 0: // we've matched, keep going
                    break;
                case 1: // we've failed to match a block
                    all_matched = false;
                    break;
                case 2: // we've hit end of line for fenced code close and can return
                    return;
                default:
                    throw "continue returned illegal value, must be 0, 1, or 2";
            }
            if (!all_matched) {
                container = container._parent; // back up to last matching block
                break;
            }
        }

        this.allClosed = container === this.oldtip;
        this.lastMatchedContainer = container;

        var matchedLeaf =
            container.type !== "paragraph" && blocks[container.type].acceptsLines;
        var starts = this.blockStarts;
        var startsLen = starts.length;
        // Unless last matched container is a code block, try new container starts,
        // adding children to the last matched container:
        while (!matchedLeaf) {
            this.findNextNonspace();

            // this is a little performance optimization:
            if (
                !this.indented &&
                !reMaybeSpecial.test(ln.slice(this.nextNonspace))
            ) {
                this.advanceNextNonspace();
                break;
            }

            var i = 0;
            while (i < startsLen) {
                var res = starts[i](this, container);
                if (res === 1) {
                    container = this.tip;
                    break;
                } else if (res === 2) {
                    container = this.tip;
                    matchedLeaf = true;
                    break;
                } else {
                    i++;
                }
            }

            if (i === startsLen) {
                // nothing matched
                this.advanceNextNonspace();
                break;
            }
        }

        // What remains at the offset is a text line.  Add the text to the
        // appropriate container.

        // First check for a lazy paragraph continuation:
        if (!this.allClosed && !this.blank && this.tip.type === "paragraph") {
            // lazy paragraph continuation
            this.addLine();
        } else {
            // not a lazy continuation

            // finalize any blocks not matched
            this.closeUnmatchedBlocks();
            if (this.blank && container.lastChild) {
                container.lastChild._lastLineBlank = true;
            }

            t = container.type;

            // Block quote lines are never blank as they start with >
            // and we don't count blanks in fenced code for purposes of tight/loose
            // lists or breaking out of lists.  We also don't set _lastLineBlank
            // on an empty list item, or if we just closed a fenced block.
            var lastLineBlank =
                this.blank &&
                !(
                    t === "block_quote" ||
                    (t === "code_block" && container._isFenced) ||
                    (t === "item" &&
                        !container._firstChild &&
                        container.sourcepos[0][0] === this.lineNumber)
                );

            // propagate lastLineBlank up through parents:
            var cont = container;
            while (cont) {
                cont._lastLineBlank = lastLineBlank;
                cont = cont._parent;
            }

            if (this.blocks[t].acceptsLines) {
                this.addLine();
                // if HtmlBlock, check for end condition
                if (
                    t === "html_block" &&
                    container._htmlBlockType >= 1 &&
                    container._htmlBlockType <= 5 &&
                    reHtmlBlockClose[container._htmlBlockType].test(
                        this.currentLine.slice(this.offset)
                    )
                ) {
                    this.lastLineLength = ln.length;
                    this.finalize(container, this.lineNumber);
                }
            } else if (this.offset < ln.length && !this.blank) {
                // create paragraph container for line
                container = this.addChild("paragraph", this.offset);
                this.advanceNextNonspace();
                this.addLine();
            }
        }
        this.lastLineLength = ln.length;
    };

    // Finalize a block.  Close it and do any necessary postprocessing,
    // e.g. creating string_content from strings, setting the 'tight'
    // or 'loose' status of a list, and parsing the beginnings
    // of paragraphs for reference definitions.  Reset the tip to the
    // parent of the closed block.
    var finalize = function(block, lineNumber) {
        var above = block._parent;
        block._open = false;
        block.sourcepos[1] = [lineNumber, this.lastLineLength];

        this.blocks[block.type].finalize(this, block);

        this.tip = above;
    };

    // Walk through a block & children recursively, parsing string content
    // into inline content where appropriate.
    var processInlines = function(block) {
        var node, event, t;
        var walker = block.walker();
        this.inlineParser.refmap = this.refmap;
        this.inlineParser.options = this.options;
        while ((event = walker.next())) {
            node = event.node;
            t = node.type;
            if (!event.entering && (t === "paragraph" || t === "heading")) {
                this.inlineParser.parse(node);
            }
        }
    };

    var Document = function() {
        var doc = new Node("document", [
            [1, 1],
            [0, 0]
        ]);
        return doc;
    };

    // The main parsing function.  Returns a parsed document AST.
    var parse = function(input) {
        this.doc = new Document();
        this.tip = this.doc;
        this.refmap = {};
        this.lineNumber = 0;
        this.lastLineLength = 0;
        this.offset = 0;
        this.column = 0;
        this.lastMatchedContainer = this.doc;
        this.currentLine = "";
        if (this.options.time) {
            console.time("preparing input");
        }
        var lines = input.split(reLineEnding);
        var len = lines.length;
        if (input.charCodeAt(input.length - 1) === C_NEWLINE$1) {
            // ignore last blank line created by final newline
            len -= 1;
        }
        if (this.options.time) {
            console.timeEnd("preparing input");
        }
        if (this.options.time) {
            console.time("block parsing");
        }
        for (var i = 0; i < len; i++) {
            this.incorporateLine(lines[i]);
        }
        while (this.tip) {
            this.finalize(this.tip, len);
        }
        if (this.options.time) {
            console.timeEnd("block parsing");
        }
        if (this.options.time) {
            console.time("inline parsing");
        }
        this.processInlines(this.doc);
        if (this.options.time) {
            console.timeEnd("inline parsing");
        }
        return this.doc;
    };

    // The Parser object.
    function Parser(options) {
        return {
            doc: new Document(),
            blocks: blocks,
            blockStarts: blockStarts,
            tip: this.doc,
            oldtip: this.doc,
            currentLine: "",
            lineNumber: 0,
            offset: 0,
            column: 0,
            nextNonspace: 0,
            nextNonspaceColumn: 0,
            indent: 0,
            indented: false,
            blank: false,
            partiallyConsumedTab: false,
            allClosed: true,
            lastMatchedContainer: this.doc,
            refmap: {},
            lastLineLength: 0,
            inlineParser: new InlineParser(options),
            findNextNonspace: findNextNonspace,
            advanceOffset: advanceOffset,
            advanceNextNonspace: advanceNextNonspace,
            addLine: addLine,
            addChild: addChild,
            incorporateLine: incorporateLine,
            finalize: finalize,
            processInlines: processInlines,
            closeUnmatchedBlocks: closeUnmatchedBlocks,
            parse: parse,
            options: options || {}
        };
    }

    function Renderer() {}

    /**
     *  Walks the AST and calls member methods for each Node type.
     *
     *  @param ast {Node} The root of the abstract syntax tree.
     */
    function render(ast) {
        var walker = ast.walker(),
            event,
            type;

        this.buffer = "";
        this.lastOut = "\n";

        while ((event = walker.next())) {
            type = event.node.type;
            if (this[type]) {
                this[type](event.node, event.entering);
            }
        }
        return this.buffer;
    }

    /**
     *  Concatenate a literal string to the buffer.
     *
     *  @param str {String} The string to concatenate.
     */
    function lit(str) {
        this.buffer += str;
        this.lastOut = str;
    }

    /**
     *  Output a newline to the buffer.
     */
    function cr() {
        if (this.lastOut !== "\n") {
            this.lit("\n");
        }
    }

    /**
     *  Concatenate a string to the buffer possibly escaping the content.
     *
     *  Concrete renderer implementations should override this method.
     *
     *  @param str {String} The string to concatenate.
     */
    function out(str) {
        this.lit(str);
    }

    /**
     *  Escape a string for the target renderer.
     *
     *  Abstract function that should be implemented by concrete
     *  renderer implementations.
     *
     *  @param str {String} The string to escape.
     */
    function esc(str) {
        return str;
    }

    Renderer.prototype.render = render;
    Renderer.prototype.out = out;
    Renderer.prototype.lit = lit;
    Renderer.prototype.cr = cr;
    Renderer.prototype.esc = esc;

    var reUnsafeProtocol = /^javascript:|vbscript:|file:|data:/i;
    var reSafeDataProtocol = /^data:image\/(?:png|gif|jpeg|webp)/i;

    var potentiallyUnsafe = function(url) {
        return reUnsafeProtocol.test(url) && !reSafeDataProtocol.test(url);
    };

    // Helper function to produce an HTML tag.
    function tag(name, attrs, selfclosing) {
        if (this.disableTags > 0) {
            return;
        }
        this.buffer += "<" + name;
        if (attrs && attrs.length > 0) {
            var i = 0;
            var attrib;
            while ((attrib = attrs[i]) !== undefined) {
                this.buffer += " " + attrib[0] + '="' + attrib[1] + '"';
                i++;
            }
        }
        if (selfclosing) {
            this.buffer += " /";
        }
        this.buffer += ">";
        this.lastOut = ">";
    }

    function HtmlRenderer(options) {
        options = options || {};
        // by default, soft breaks are rendered as newlines in HTML
        options.softbreak = options.softbreak || "\n";
        // set to "<br />" to make them hard breaks
        // set to " " if you want to ignore line wrapping in source

        this.disableTags = 0;
        this.lastOut = "\n";
        this.options = options;
    }

    /* Node methods */

    function text$1(node) {
        this.out(node.literal);
    }

    function softbreak() {
        this.lit(this.options.softbreak);
    }

    function linebreak() {
        this.tag("br", [], true);
        this.cr();
    }

    function link(node, entering) {
        var attrs = this.attrs(node);
        if (entering) {
            if (!(this.options.safe && potentiallyUnsafe(node.destination))) {
                attrs.push(["href", this.esc(node.destination)]);
            }
            if (node.title) {
                attrs.push(["title", this.esc(node.title)]);
            }
            this.tag("a", attrs);
        } else {
            this.tag("/a");
        }
    }

    function image$1(node, entering) {
        if (entering) {
            if (this.disableTags === 0) {
                if (this.options.safe && potentiallyUnsafe(node.destination)) {
                    this.lit('<img src="" alt="');
                } else {
                    this.lit('<img src="' + this.esc(node.destination) + '" alt="');
                }
            }
            this.disableTags += 1;
        } else {
            this.disableTags -= 1;
            if (this.disableTags === 0) {
                if (node.title) {
                    this.lit('" title="' + this.esc(node.title));
                }
                this.lit('" />');
            }
        }
    }

    function emph(node, entering) {
        this.tag(entering ? "em" : "/em");
    }

    function strong(node, entering) {
        this.tag(entering ? "strong" : "/strong");
    }

    function paragraph(node, entering) {
        var grandparent = node.parent.parent,
            attrs = this.attrs(node);
        if (grandparent !== null && grandparent.type === "list") {
            if (grandparent.listTight) {
                return;
            }
        }
        if (entering) {
            this.cr();
            this.tag("p", attrs);
        } else {
            this.tag("/p");
            this.cr();
        }
    }

    function heading(node, entering) {
        var tagname = "h" + node.level,
            attrs = this.attrs(node);
        if (entering) {
            this.cr();
            this.tag(tagname, attrs);
        } else {
            this.tag("/" + tagname);
            this.cr();
        }
    }

    function code(node) {
        this.tag("code");
        this.out(node.literal);
        this.tag("/code");
    }

    function code_block(node) {
        var info_words = node.info ? node.info.split(/\s+/) : [],
            attrs = this.attrs(node);
        if (info_words.length > 0 && info_words[0].length > 0) {
            attrs.push(["class", "language-" + this.esc(info_words[0])]);
        }
        this.cr();
        this.tag("pre");
        this.tag("code", attrs);
        this.out(node.literal);
        this.tag("/code");
        this.tag("/pre");
        this.cr();
    }

    function thematic_break(node) {
        var attrs = this.attrs(node);
        this.cr();
        this.tag("hr", attrs, true);
        this.cr();
    }

    function block_quote(node, entering) {
        var attrs = this.attrs(node);
        if (entering) {
            this.cr();
            this.tag("blockquote", attrs);
            this.cr();
        } else {
            this.cr();
            this.tag("/blockquote");
            this.cr();
        }
    }

    function list(node, entering) {
        var tagname = node.listType === "bullet" ? "ul" : "ol",
            attrs = this.attrs(node);

        if (entering) {
            var start = node.listStart;
            if (start !== null && start !== 1) {
                attrs.push(["start", start.toString()]);
            }
            this.cr();
            this.tag(tagname, attrs);
            this.cr();
        } else {
            this.cr();
            this.tag("/" + tagname);
            this.cr();
        }
    }

    function item(node, entering) {
        var attrs = this.attrs(node);
        if (entering) {
            this.tag("li", attrs);
        } else {
            this.tag("/li");
            this.cr();
        }
    }

    function html_inline(node) {
        if (this.options.safe) {
            this.lit("<!-- raw HTML omitted -->");
        } else {
            this.lit(node.literal);
        }
    }

    function html_block(node) {
        this.cr();
        if (this.options.safe) {
            this.lit("<!-- raw HTML omitted -->");
        } else {
            this.lit(node.literal);
        }
        this.cr();
    }

    function custom_inline(node, entering) {
        if (entering && node.onEnter) {
            this.lit(node.onEnter);
        } else if (!entering && node.onExit) {
            this.lit(node.onExit);
        }
    }

    function custom_block(node, entering) {
        this.cr();
        if (entering && node.onEnter) {
            this.lit(node.onEnter);
        } else if (!entering && node.onExit) {
            this.lit(node.onExit);
        }
        this.cr();
    }

    /* Helper methods */

    function out$1(s) {
        this.lit(this.esc(s));
    }

    function attrs(node) {
        var att = [];
        if (this.options.sourcepos) {
            var pos = node.sourcepos;
            if (pos) {
                att.push([
                    "data-sourcepos",
                    String(pos[0][0]) +
                        ":" +
                        String(pos[0][1]) +
                        "-" +
                        String(pos[1][0]) +
                        ":" +
                        String(pos[1][1])
                ]);
            }
        }
        return att;
    }

    // quick browser-compatible inheritance
    HtmlRenderer.prototype = Object.create(Renderer.prototype);

    HtmlRenderer.prototype.text = text$1;
    HtmlRenderer.prototype.html_inline = html_inline;
    HtmlRenderer.prototype.html_block = html_block;
    HtmlRenderer.prototype.softbreak = softbreak;
    HtmlRenderer.prototype.linebreak = linebreak;
    HtmlRenderer.prototype.link = link;
    HtmlRenderer.prototype.image = image$1;
    HtmlRenderer.prototype.emph = emph;
    HtmlRenderer.prototype.strong = strong;
    HtmlRenderer.prototype.paragraph = paragraph;
    HtmlRenderer.prototype.heading = heading;
    HtmlRenderer.prototype.code = code;
    HtmlRenderer.prototype.code_block = code_block;
    HtmlRenderer.prototype.thematic_break = thematic_break;
    HtmlRenderer.prototype.block_quote = block_quote;
    HtmlRenderer.prototype.list = list;
    HtmlRenderer.prototype.item = item;
    HtmlRenderer.prototype.custom_inline = custom_inline;
    HtmlRenderer.prototype.custom_block = custom_block;

    HtmlRenderer.prototype.esc = escapeXml;

    HtmlRenderer.prototype.out = out$1;
    HtmlRenderer.prototype.tag = tag;
    HtmlRenderer.prototype.attrs = attrs;

    var reXMLTag = /\<[^>]*\>/;

    function toTagName(s) {
        return s.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
    }

    function XmlRenderer(options) {
        options = options || {};

        this.disableTags = 0;
        this.lastOut = "\n";

        this.indentLevel = 0;
        this.indent = "  ";

        this.options = options;
    }

    function render$1(ast) {
        this.buffer = "";

        var attrs;
        var tagname;
        var walker = ast.walker();
        var event, node, entering;
        var container;
        var selfClosing;
        var nodetype;

        var options = this.options;

        if (options.time) {
            console.time("rendering");
        }

        this.buffer += '<?xml version="1.0" encoding="UTF-8"?>\n';
        this.buffer += '<!DOCTYPE document SYSTEM "CommonMark.dtd">\n';

        while ((event = walker.next())) {
            entering = event.entering;
            node = event.node;
            nodetype = node.type;

            container = node.isContainer;

            selfClosing =
                nodetype === "thematic_break" ||
                nodetype === "linebreak" ||
                nodetype === "softbreak";

            tagname = toTagName(nodetype);

            if (entering) {
                attrs = [];

                switch (nodetype) {
                    case "document":
                        attrs.push(["xmlns", "http://commonmark.org/xml/1.0"]);
                        break;
                    case "list":
                        if (node.listType !== null) {
                            attrs.push(["type", node.listType.toLowerCase()]);
                        }
                        if (node.listStart !== null) {
                            attrs.push(["start", String(node.listStart)]);
                        }
                        if (node.listTight !== null) {
                            attrs.push([
                                "tight",
                                node.listTight ? "true" : "false"
                            ]);
                        }
                        var delim = node.listDelimiter;
                        if (delim !== null) {
                            var delimword = "";
                            if (delim === ".") {
                                delimword = "period";
                            } else {
                                delimword = "paren";
                            }
                            attrs.push(["delimiter", delimword]);
                        }
                        break;
                    case "code_block":
                        if (node.info) {
                            attrs.push(["info", node.info]);
                        }
                        break;
                    case "heading":
                        attrs.push(["level", String(node.level)]);
                        break;
                    case "link":
                    case "image":
                        attrs.push(["destination", node.destination]);
                        attrs.push(["title", node.title]);
                        break;
                    case "custom_inline":
                    case "custom_block":
                        attrs.push(["on_enter", node.onEnter]);
                        attrs.push(["on_exit", node.onExit]);
                        break;
                }
                if (options.sourcepos) {
                    var pos = node.sourcepos;
                    if (pos) {
                        attrs.push([
                            "sourcepos",
                            String(pos[0][0]) +
                                ":" +
                                String(pos[0][1]) +
                                "-" +
                                String(pos[1][0]) +
                                ":" +
                                String(pos[1][1])
                        ]);
                    }
                }

                this.cr();
                this.out(this.tag(tagname, attrs, selfClosing));
                if (container) {
                    this.indentLevel += 1;
                } else if (!container && !selfClosing) {
                    var lit = node.literal;
                    if (lit) {
                        this.out(this.esc(lit));
                    }
                    this.out(this.tag("/" + tagname));
                }
            } else {
                this.indentLevel -= 1;
                this.cr();
                this.out(this.tag("/" + tagname));
            }
        }
        if (options.time) {
            console.timeEnd("rendering");
        }
        this.buffer += "\n";
        return this.buffer;
    }

    function out$2(s) {
        if (this.disableTags > 0) {
            this.buffer += s.replace(reXMLTag, "");
        } else {
            this.buffer += s;
        }
        this.lastOut = s;
    }

    function cr$1() {
        if (this.lastOut !== "\n") {
            this.buffer += "\n";
            this.lastOut = "\n";
            for (var i = this.indentLevel; i > 0; i--) {
                this.buffer += this.indent;
            }
        }
    }

    // Helper function to produce an XML tag.
    function tag$1(name, attrs, selfclosing) {
        var result = "<" + name;
        if (attrs && attrs.length > 0) {
            var i = 0;
            var attrib;
            while ((attrib = attrs[i]) !== undefined) {
                result += " " + attrib[0] + '="' + this.esc(attrib[1]) + '"';
                i++;
            }
        }
        if (selfclosing) {
            result += " /";
        }
        result += ">";
        return result;
    }

    // quick browser-compatible inheritance
    XmlRenderer.prototype = Object.create(Renderer.prototype);

    XmlRenderer.prototype.render = render$1;
    XmlRenderer.prototype.out = out$2;
    XmlRenderer.prototype.cr = cr$1;
    XmlRenderer.prototype.tag = tag$1;
    XmlRenderer.prototype.esc = escapeXml;

    exports.HtmlRenderer = HtmlRenderer;
    exports.Node = Node;
    exports.Parser = Parser;
    exports.Renderer = Renderer;
    exports.XmlRenderer = XmlRenderer;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ 8068:
/***/ ((module) => {

"use strict";


/** @type {import('./syntax')} */
module.exports = SyntaxError;


/***/ }),

/***/ 8184:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var callBound = __webpack_require__(6556);
var safeRegexTest = __webpack_require__(9721);
var isFnRegex = safeRegexTest(/^\s*(?:function)?\*/);
var hasToStringTag = __webpack_require__(9092)();
var getProto = __webpack_require__(3628);

var toStr = callBound('Object.prototype.toString');
var fnToStr = callBound('Function.prototype.toString');

var getGeneratorFunc = function () { // eslint-disable-line consistent-return
	if (!hasToStringTag) {
		return false;
	}
	try {
		return Function('return function*() {}')();
	} catch (e) {
	}
};
/** @type {undefined | false | null | GeneratorFunctionConstructor} */
var GeneratorFunction;

/** @type {import('.')} */
module.exports = function isGeneratorFunction(fn) {
	if (typeof fn !== 'function') {
		return false;
	}
	if (isFnRegex(fnToStr(fn))) {
		return true;
	}
	if (!hasToStringTag) {
		var str = toStr(fn);
		return str === '[object GeneratorFunction]';
	}
	if (!getProto) {
		return false;
	}
	if (typeof GeneratorFunction === 'undefined') {
		var generatorFunc = getGeneratorFunc();
		GeneratorFunction = generatorFunc
			// eslint-disable-next-line no-extra-parens
			? /** @type {GeneratorFunctionConstructor} */ (getProto(generatorFunc))
			: false;
	}
	return getProto(fn) === GeneratorFunction;
};


/***/ }),

/***/ 8597:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * RegExp to match *( ";" parameter ) in RFC 7231 sec 3.1.1.1
 *
 * parameter     = token "=" ( token / quoted-string )
 * token         = 1*tchar
 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
 *               / DIGIT / ALPHA
 *               ; any VCHAR, except delimiters
 * quoted-string = DQUOTE *( qdtext / quoted-pair ) DQUOTE
 * qdtext        = HTAB / SP / %x21 / %x23-5B / %x5D-7E / obs-text
 * obs-text      = %x80-FF
 * quoted-pair   = "\" ( HTAB / SP / VCHAR / obs-text )
 */
var PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g // eslint-disable-line no-control-regex
var TEXT_REGEXP = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/ // eslint-disable-line no-control-regex
var TOKEN_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/

/**
 * RegExp to match quoted-pair in RFC 7230 sec 3.2.6
 *
 * quoted-pair = "\" ( HTAB / SP / VCHAR / obs-text )
 * obs-text    = %x80-FF
 */
var QESC_REGEXP = /\\([\u000b\u0020-\u00ff])/g // eslint-disable-line no-control-regex

/**
 * RegExp to match chars that must be quoted-pair in RFC 7230 sec 3.2.6
 */
var QUOTE_REGEXP = /([\\"])/g

/**
 * RegExp to match type in RFC 7231 sec 3.1.1.1
 *
 * media-type = type "/" subtype
 * type       = token
 * subtype    = token
 */
var TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/

/**
 * Module exports.
 * @public
 */

exports.format = format
exports.parse = parse

/**
 * Format object to media type.
 *
 * @param {object} obj
 * @return {string}
 * @public
 */

function format (obj) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('argument obj is required')
  }

  var parameters = obj.parameters
  var type = obj.type

  if (!type || !TYPE_REGEXP.test(type)) {
    throw new TypeError('invalid type')
  }

  var string = type

  // append parameters
  if (parameters && typeof parameters === 'object') {
    var param
    var params = Object.keys(parameters).sort()

    for (var i = 0; i < params.length; i++) {
      param = params[i]

      if (!TOKEN_REGEXP.test(param)) {
        throw new TypeError('invalid parameter name')
      }

      string += '; ' + param + '=' + qstring(parameters[param])
    }
  }

  return string
}

/**
 * Parse media type to object.
 *
 * @param {string|object} string
 * @return {Object}
 * @public
 */

function parse (string) {
  if (!string) {
    throw new TypeError('argument string is required')
  }

  // support req/res-like objects as argument
  var header = typeof string === 'object'
    ? getcontenttype(string)
    : string

  if (typeof header !== 'string') {
    throw new TypeError('argument string is required to be a string')
  }

  var index = header.indexOf(';')
  var type = index !== -1
    ? header.slice(0, index).trim()
    : header.trim()

  if (!TYPE_REGEXP.test(type)) {
    throw new TypeError('invalid media type')
  }

  var obj = new ContentType(type.toLowerCase())

  // parse parameters
  if (index !== -1) {
    var key
    var match
    var value

    PARAM_REGEXP.lastIndex = index

    while ((match = PARAM_REGEXP.exec(header))) {
      if (match.index !== index) {
        throw new TypeError('invalid parameter format')
      }

      index += match[0].length
      key = match[1].toLowerCase()
      value = match[2]

      if (value.charCodeAt(0) === 0x22 /* " */) {
        // remove quotes
        value = value.slice(1, -1)

        // remove escapes
        if (value.indexOf('\\') !== -1) {
          value = value.replace(QESC_REGEXP, '$1')
        }
      }

      obj.parameters[key] = value
    }

    if (index !== header.length) {
      throw new TypeError('invalid parameter format')
    }
  }

  return obj
}

/**
 * Get content-type from req/res objects.
 *
 * @param {object}
 * @return {Object}
 * @private
 */

function getcontenttype (obj) {
  var header

  if (typeof obj.getHeader === 'function') {
    // res-like
    header = obj.getHeader('content-type')
  } else if (typeof obj.headers === 'object') {
    // req-like
    header = obj.headers && obj.headers['content-type']
  }

  if (typeof header !== 'string') {
    throw new TypeError('content-type header is missing from object')
  }

  return header
}

/**
 * Quote a string if necessary.
 *
 * @param {string} val
 * @return {string}
 * @private
 */

function qstring (val) {
  var str = String(val)

  // no need to quote tokens
  if (TOKEN_REGEXP.test(str)) {
    return str
  }

  if (str.length > 0 && !TEXT_REGEXP.test(str)) {
    throw new TypeError('invalid parameter value')
  }

  return '"' + str.replace(QUOTE_REGEXP, '\\$1') + '"'
}

/**
 * Class to represent a content type.
 * @private
 */
function ContentType (type) {
  this.parameters = Object.create(null)
  this.type = type
}


/***/ }),

/***/ 8633:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { encodeText } = __webpack_require__(4084)

/** @typedef {import('./types').CodecFactory} CodecFactory */
/** @typedef {import("./types").BaseName} BaseName */
/** @typedef {import("./types").BaseCode} BaseCode */

/**
 * Class to encode/decode in the supported Bases
 *
 */
class Base {
  /**
   * @param {BaseName} name
   * @param {BaseCode} code
   * @param {CodecFactory} factory
   * @param {string} alphabet
   */
  constructor (name, code, factory, alphabet) {
    this.name = name
    this.code = code
    this.codeBuf = encodeText(this.code)
    this.alphabet = alphabet
    this.codec = factory(alphabet)
  }

  /**
   * @param {Uint8Array} buf
   * @returns {string}
   */
  encode (buf) {
    return this.codec.encode(buf)
  }

  /**
   * @param {string} string
   * @returns {Uint8Array}
   */
  decode (string) {
    for (const char of string) {
      if (this.alphabet && this.alphabet.indexOf(char) < 0) {
        throw new Error(`invalid character '${char}' in '${string}'`)
      }
    }
    return this.codec.decode(string)
  }
}

module.exports = Base


/***/ }),

/***/ 8648:
/***/ ((module) => {

"use strict";


/** @type {import('./Reflect.getPrototypeOf')} */
module.exports = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;


/***/ }),

/***/ 8968:
/***/ ((module) => {

"use strict";


/** @type {import('./floor')} */
module.exports = Math.floor;


/***/ }),

/***/ 8995:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const _ = __webpack_require__(5288);
const I18N = __webpack_require__(4540);

const DataTypes = {

	array(arr, sort = false, unit = '') {
		return _.toList(arr, sort, v => DataTypes.format(v, unit));
	},
	
	object(obj) {
		return _.toObject(obj, v => DataTypes.format(v));
	},
	
	null(label = null) {
		if (label === null) {
			label = _.t('n/a');
		}
		return _.toNothing(label);
	},
	
	number(num, unit = '') {
		if (typeof num !== 'number') {
			num = parseFloat(num);
		}
		return _.unit(I18N.numberFormatter.format(num), unit);
	},

	string(str, unit = '') {
		return _.unit(_.e(str).replace(/(\r\n|\r|\n){2,}/g, '<br>'), unit);
	},
	
	boolean(bool) {
		return bool ? '✔️' : '❌';
	},
	
	format(value, unit = '') {
		if (typeof value === 'boolean') {
			return DataTypes.boolean(value);
		}
		else if (typeof value === 'number') {
			return DataTypes.number(value, unit);
		}
		else if (typeof value === 'string') {
			return DataTypes.string(value, unit);
		}
		else if (Array.isArray(value)) {
			return DataTypes.array(value, unit);
		}
		else if (_.isObject(value)) {
			return DataTypes.object(value);
		}
		else {
			return DataTypes.null();
		}
	}

};

module.exports = DataTypes;

/***/ }),

/***/ 9032:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9



var isArgumentsObject = __webpack_require__(7244);
var isGeneratorFunction = __webpack_require__(8184);
var whichTypedArray = __webpack_require__(5767);
var isTypedArray = __webpack_require__(5680);

function uncurryThis(f) {
  return f.call.bind(f);
}

var BigIntSupported = typeof BigInt !== 'undefined';
var SymbolSupported = typeof Symbol !== 'undefined';

var ObjectToString = uncurryThis(Object.prototype.toString);

var numberValue = uncurryThis(Number.prototype.valueOf);
var stringValue = uncurryThis(String.prototype.valueOf);
var booleanValue = uncurryThis(Boolean.prototype.valueOf);

if (BigIntSupported) {
  var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
}

if (SymbolSupported) {
  var symbolValue = uncurryThis(Symbol.prototype.valueOf);
}

function checkBoxedPrimitive(value, prototypeValueOf) {
  if (typeof value !== 'object') {
    return false;
  }
  try {
    prototypeValueOf(value);
    return true;
  } catch(e) {
    return false;
  }
}

exports.isArgumentsObject = isArgumentsObject;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isTypedArray = isTypedArray;

// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function isPromise(input) {
	return (
		(
			typeof Promise !== 'undefined' &&
			input instanceof Promise
		) ||
		(
			input !== null &&
			typeof input === 'object' &&
			typeof input.then === 'function' &&
			typeof input.catch === 'function'
		)
	);
}
exports.isPromise = isPromise;

function isArrayBufferView(value) {
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    return ArrayBuffer.isView(value);
  }

  return (
    isTypedArray(value) ||
    isDataView(value)
  );
}
exports.isArrayBufferView = isArrayBufferView;


function isUint8Array(value) {
  return whichTypedArray(value) === 'Uint8Array';
}
exports.isUint8Array = isUint8Array;

function isUint8ClampedArray(value) {
  return whichTypedArray(value) === 'Uint8ClampedArray';
}
exports.isUint8ClampedArray = isUint8ClampedArray;

function isUint16Array(value) {
  return whichTypedArray(value) === 'Uint16Array';
}
exports.isUint16Array = isUint16Array;

function isUint32Array(value) {
  return whichTypedArray(value) === 'Uint32Array';
}
exports.isUint32Array = isUint32Array;

function isInt8Array(value) {
  return whichTypedArray(value) === 'Int8Array';
}
exports.isInt8Array = isInt8Array;

function isInt16Array(value) {
  return whichTypedArray(value) === 'Int16Array';
}
exports.isInt16Array = isInt16Array;

function isInt32Array(value) {
  return whichTypedArray(value) === 'Int32Array';
}
exports.isInt32Array = isInt32Array;

function isFloat32Array(value) {
  return whichTypedArray(value) === 'Float32Array';
}
exports.isFloat32Array = isFloat32Array;

function isFloat64Array(value) {
  return whichTypedArray(value) === 'Float64Array';
}
exports.isFloat64Array = isFloat64Array;

function isBigInt64Array(value) {
  return whichTypedArray(value) === 'BigInt64Array';
}
exports.isBigInt64Array = isBigInt64Array;

function isBigUint64Array(value) {
  return whichTypedArray(value) === 'BigUint64Array';
}
exports.isBigUint64Array = isBigUint64Array;

function isMapToString(value) {
  return ObjectToString(value) === '[object Map]';
}
isMapToString.working = (
  typeof Map !== 'undefined' &&
  isMapToString(new Map())
);

function isMap(value) {
  if (typeof Map === 'undefined') {
    return false;
  }

  return isMapToString.working
    ? isMapToString(value)
    : value instanceof Map;
}
exports.isMap = isMap;

function isSetToString(value) {
  return ObjectToString(value) === '[object Set]';
}
isSetToString.working = (
  typeof Set !== 'undefined' &&
  isSetToString(new Set())
);
function isSet(value) {
  if (typeof Set === 'undefined') {
    return false;
  }

  return isSetToString.working
    ? isSetToString(value)
    : value instanceof Set;
}
exports.isSet = isSet;

function isWeakMapToString(value) {
  return ObjectToString(value) === '[object WeakMap]';
}
isWeakMapToString.working = (
  typeof WeakMap !== 'undefined' &&
  isWeakMapToString(new WeakMap())
);
function isWeakMap(value) {
  if (typeof WeakMap === 'undefined') {
    return false;
  }

  return isWeakMapToString.working
    ? isWeakMapToString(value)
    : value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;

function isWeakSetToString(value) {
  return ObjectToString(value) === '[object WeakSet]';
}
isWeakSetToString.working = (
  typeof WeakSet !== 'undefined' &&
  isWeakSetToString(new WeakSet())
);
function isWeakSet(value) {
  return isWeakSetToString(value);
}
exports.isWeakSet = isWeakSet;

function isArrayBufferToString(value) {
  return ObjectToString(value) === '[object ArrayBuffer]';
}
isArrayBufferToString.working = (
  typeof ArrayBuffer !== 'undefined' &&
  isArrayBufferToString(new ArrayBuffer())
);
function isArrayBuffer(value) {
  if (typeof ArrayBuffer === 'undefined') {
    return false;
  }

  return isArrayBufferToString.working
    ? isArrayBufferToString(value)
    : value instanceof ArrayBuffer;
}
exports.isArrayBuffer = isArrayBuffer;

function isDataViewToString(value) {
  return ObjectToString(value) === '[object DataView]';
}
isDataViewToString.working = (
  typeof ArrayBuffer !== 'undefined' &&
  typeof DataView !== 'undefined' &&
  isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1))
);
function isDataView(value) {
  if (typeof DataView === 'undefined') {
    return false;
  }

  return isDataViewToString.working
    ? isDataViewToString(value)
    : value instanceof DataView;
}
exports.isDataView = isDataView;

// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function isSharedArrayBufferToString(value) {
  return ObjectToString(value) === '[object SharedArrayBuffer]';
}
function isSharedArrayBuffer(value) {
  if (typeof SharedArrayBufferCopy === 'undefined') {
    return false;
  }

  if (typeof isSharedArrayBufferToString.working === 'undefined') {
    isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
  }

  return isSharedArrayBufferToString.working
    ? isSharedArrayBufferToString(value)
    : value instanceof SharedArrayBufferCopy;
}
exports.isSharedArrayBuffer = isSharedArrayBuffer;

function isAsyncFunction(value) {
  return ObjectToString(value) === '[object AsyncFunction]';
}
exports.isAsyncFunction = isAsyncFunction;

function isMapIterator(value) {
  return ObjectToString(value) === '[object Map Iterator]';
}
exports.isMapIterator = isMapIterator;

function isSetIterator(value) {
  return ObjectToString(value) === '[object Set Iterator]';
}
exports.isSetIterator = isSetIterator;

function isGeneratorObject(value) {
  return ObjectToString(value) === '[object Generator]';
}
exports.isGeneratorObject = isGeneratorObject;

function isWebAssemblyCompiledModule(value) {
  return ObjectToString(value) === '[object WebAssembly.Module]';
}
exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;

function isNumberObject(value) {
  return checkBoxedPrimitive(value, numberValue);
}
exports.isNumberObject = isNumberObject;

function isStringObject(value) {
  return checkBoxedPrimitive(value, stringValue);
}
exports.isStringObject = isStringObject;

function isBooleanObject(value) {
  return checkBoxedPrimitive(value, booleanValue);
}
exports.isBooleanObject = isBooleanObject;

function isBigIntObject(value) {
  return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}
exports.isBigIntObject = isBigIntObject;

function isSymbolObject(value) {
  return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}
exports.isSymbolObject = isSymbolObject;

function isBoxedPrimitive(value) {
  return (
    isNumberObject(value) ||
    isStringObject(value) ||
    isBooleanObject(value) ||
    isBigIntObject(value) ||
    isSymbolObject(value)
  );
}
exports.isBoxedPrimitive = isBoxedPrimitive;

function isAnyArrayBuffer(value) {
  return typeof Uint8Array !== 'undefined' && (
    isArrayBuffer(value) ||
    isSharedArrayBuffer(value)
  );
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;

['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function(method) {
  Object.defineProperty(exports, method, {
    enumerable: false,
    value: function() {
      throw new Error(method + ' is not supported in userland');
    }
  });
});


/***/ }),

/***/ 9053:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const _ = __webpack_require__(5288);
const I18N = __webpack_require__(4540);

const Normalize = {

  fields(fields) {
    let parts = ['extensions', 'metadata', 'links', 'assets'];
    for (let part of parts) {
      for(let key in fields[part]) {
        fields[part][key] = Normalize.field(fields[part][key], fields[part], fields);
      }
    }
    return fields;
  },

  field(spec, fields = {}, allFields = {}) {
    // If just a string label is given, make a normal object with a label from it
    if (typeof spec === 'string') {
      return {
        label: spec
      };
    }
    // Resolve alias
    if (typeof spec.alias === 'string') {
      // As we don't know whether the alias has been resolved so far, resolve it here, too.
      let aliasedSpec = fields[spec.alias] || allFields.metadata[spec.alias];
      if (!aliasedSpec) {
        throw new Error('Alias is invalid: ' + spec.alias);
      }
      return Object.assign(spec, Normalize.field(aliasedSpec, fields, allFields));
    }

    // Normalize items
    if (_.isObject(spec.items)) {
    let itemOrder = [];
      for(let key in spec.items) {
        spec.items[key] = Normalize.field(spec.items[key], fields, allFields);
        itemOrder.push(Object.assign({key}, spec.items[key]));
      }

      spec.itemOrder = itemOrder
        .sort((i1, i2) => {
          if (i1.id === true) {
            return -1;
          }
          else if (i2.id === true) {
            return 1;
          }
          else if (typeof i1.order === 'number' && typeof i2.order === 'number') {
            return i1.order - i2.order;
          }
          else {
            return I18N.collator.compare(_.t(i1.label), _.t(i2.label));
          }
        })
        .map(item => item.key);
    }

    // Normalize properties
    if (_.isObject(spec.properties)) {
      for(let key in spec.properties) {
        spec.properties[key] = Normalize.field(spec.properties[key], fields, allFields);
      }
    }

    return spec;
  }

};

module.exports = Normalize;

/***/ }),

/***/ 9080:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CID: () => (/* reexport */ CID),
  bases: () => (/* binding */ bases),
  bytes: () => (/* reexport */ bytes_namespaceObject),
  codecs: () => (/* binding */ codecs),
  digest: () => (/* reexport */ digest_namespaceObject),
  hasher: () => (/* reexport */ hasher_namespaceObject),
  hashes: () => (/* binding */ hashes),
  varint: () => (/* reexport */ src_varint_namespaceObject)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bytes.js
var bytes_namespaceObject = {};
__webpack_require__.r(bytes_namespaceObject);
__webpack_require__.d(bytes_namespaceObject, {
  coerce: () => (coerce),
  empty: () => (empty),
  equals: () => (equals),
  fromHex: () => (fromHex),
  fromString: () => (fromString),
  isBinary: () => (isBinary),
  toHex: () => (toHex),
  toString: () => (bytes_toString)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/identity.js
var identity_namespaceObject = {};
__webpack_require__.r(identity_namespaceObject);
__webpack_require__.d(identity_namespaceObject, {
  identity: () => (identity)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base2.js
var base2_namespaceObject = {};
__webpack_require__.r(base2_namespaceObject);
__webpack_require__.d(base2_namespaceObject, {
  base2: () => (base2)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base8.js
var base8_namespaceObject = {};
__webpack_require__.r(base8_namespaceObject);
__webpack_require__.d(base8_namespaceObject, {
  base8: () => (base8)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base10.js
var base10_namespaceObject = {};
__webpack_require__.r(base10_namespaceObject);
__webpack_require__.d(base10_namespaceObject, {
  base10: () => (base10)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base16.js
var base16_namespaceObject = {};
__webpack_require__.r(base16_namespaceObject);
__webpack_require__.d(base16_namespaceObject, {
  base16: () => (base16),
  base16upper: () => (base16upper)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base32.js
var base32_namespaceObject = {};
__webpack_require__.r(base32_namespaceObject);
__webpack_require__.d(base32_namespaceObject, {
  base32: () => (base32),
  base32hex: () => (base32hex),
  base32hexpad: () => (base32hexpad),
  base32hexpadupper: () => (base32hexpadupper),
  base32hexupper: () => (base32hexupper),
  base32pad: () => (base32pad),
  base32padupper: () => (base32padupper),
  base32upper: () => (base32upper),
  base32z: () => (base32z)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base36.js
var base36_namespaceObject = {};
__webpack_require__.r(base36_namespaceObject);
__webpack_require__.d(base36_namespaceObject, {
  base36: () => (base36),
  base36upper: () => (base36upper)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base58.js
var base58_namespaceObject = {};
__webpack_require__.r(base58_namespaceObject);
__webpack_require__.d(base58_namespaceObject, {
  base58btc: () => (base58btc),
  base58flickr: () => (base58flickr)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base64.js
var base64_namespaceObject = {};
__webpack_require__.r(base64_namespaceObject);
__webpack_require__.d(base64_namespaceObject, {
  base64: () => (base64),
  base64pad: () => (base64pad),
  base64url: () => (base64url),
  base64urlpad: () => (base64urlpad)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base256emoji.js
var base256emoji_namespaceObject = {};
__webpack_require__.r(base256emoji_namespaceObject);
__webpack_require__.d(base256emoji_namespaceObject, {
  base256emoji: () => (base256emoji)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/varint.js
var src_varint_namespaceObject = {};
__webpack_require__.r(src_varint_namespaceObject);
__webpack_require__.d(src_varint_namespaceObject, {
  decode: () => (src_varint_decode),
  encodeTo: () => (encodeTo),
  encodingLength: () => (encodingLength)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/hashes/digest.js
var digest_namespaceObject = {};
__webpack_require__.r(digest_namespaceObject);
__webpack_require__.d(digest_namespaceObject, {
  Digest: () => (Digest),
  create: () => (create),
  decode: () => (digest_decode),
  equals: () => (digest_equals)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/hashes/hasher.js
var hasher_namespaceObject = {};
__webpack_require__.r(hasher_namespaceObject);
__webpack_require__.d(hasher_namespaceObject, {
  Hasher: () => (Hasher),
  from: () => (hasher_from)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha2_browser_namespaceObject = {};
__webpack_require__.r(sha2_browser_namespaceObject);
__webpack_require__.d(sha2_browser_namespaceObject, {
  sha256: () => (sha256),
  sha512: () => (sha512)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/hashes/identity.js
var hashes_identity_namespaceObject = {};
__webpack_require__.r(hashes_identity_namespaceObject);
__webpack_require__.d(hashes_identity_namespaceObject, {
  identity: () => (identity_identity)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/codecs/raw.js
var raw_namespaceObject = {};
__webpack_require__.r(raw_namespaceObject);
__webpack_require__.d(raw_namespaceObject, {
  code: () => (raw_code),
  decode: () => (raw_decode),
  encode: () => (raw_encode),
  name: () => (raw_name)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/codecs/json.js
var json_namespaceObject = {};
__webpack_require__.r(json_namespaceObject);
__webpack_require__.d(json_namespaceObject, {
  code: () => (json_code),
  decode: () => (json_decode),
  encode: () => (json_encode),
  name: () => (json_name)
});

;// ./node_modules/multiformats/esm/vendor/base-x.js
function base(ALPHABET, name) {
  if (ALPHABET.length >= 255) {
    throw new TypeError('Alphabet too long');
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + ' is ambiguous');
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode(source) {
    if (source instanceof Uint8Array);
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError('Expected Uint8Array');
    }
    if (source.length === 0) {
      return '';
    }
    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i = 0;
      for (var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error('Non-zero carry');
      }
      length = i;
      pbegin++;
    }
    var it2 = size - length;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== 'string') {
      throw new TypeError('Expected String');
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === ' ') {
      return;
    }
    var zeroes = 0;
    var length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i = 0;
      for (var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error('Non-zero carry');
      }
      length = i;
      psz++;
    }
    if (source[psz] === ' ') {
      return;
    }
    var it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j = zeroes;
    while (it4 !== size) {
      vch[j++] = b256[it4++];
    }
    return vch;
  }
  function decode(string) {
    var buffer = decodeUnsafe(string);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${ name } character`);
  }
  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
/* harmony default export */ const base_x = (_brrp__multiformats_scope_baseX);
;// ./node_modules/multiformats/esm/src/bytes.js
const empty = new Uint8Array(0);
const toHex = d => d.reduce((hex, byte) => hex + byte.toString(16).padStart(2, '0'), '');
const fromHex = hex => {
  const hexes = hex.match(/../g);
  return hexes ? new Uint8Array(hexes.map(b => parseInt(b, 16))) : empty;
};
const equals = (aa, bb) => {
  if (aa === bb)
    return true;
  if (aa.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false;
    }
  }
  return true;
};
const coerce = o => {
  if (o instanceof Uint8Array && o.constructor.name === 'Uint8Array')
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error('Unknown type, must be binary type');
};
const isBinary = o => o instanceof ArrayBuffer || ArrayBuffer.isView(o);
const fromString = str => new TextEncoder().encode(str);
const bytes_toString = b => new TextDecoder().decode(b);

;// ./node_modules/multiformats/esm/src/bases/base.js


class Encoder {
  constructor(name, prefix, baseEncode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${ this.prefix }${ this.baseEncode(bytes) }`;
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }
}
class Decoder {
  constructor(name, prefix, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === undefined) {
      throw new Error('Invalid prefix character');
    }
    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === 'string') {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${ JSON.stringify(text) }, ${ this.name } decoder only supports inputs prefixed with ${ this.prefix }`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error('Can only multibase decode strings');
    }
  }
  or(decoder) {
    return or(this, decoder);
  }
}
class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${ JSON.stringify(input) }, only inputs prefixed with ${ Object.keys(this.decoders) } are supported`);
    }
  }
}
const or = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
class Codec {
  constructor(name, prefix, baseEncode, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name, prefix, baseEncode);
    this.decoder = new Decoder(name, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const from = ({name, prefix, encode, decode}) => new Codec(name, prefix, encode, decode);
const baseX = ({prefix, name, alphabet}) => {
  const {encode, decode} = base_x(alphabet, name);
  return from({
    prefix,
    name,
    encode,
    decode: text => coerce(decode(text))
  });
};
const decode = (string, alphabet, bitsPerChar, name) => {
  const codes = {};
  for (let i = 0; i < alphabet.length; ++i) {
    codes[alphabet[i]] = i;
  }
  let end = string.length;
  while (string[end - 1] === '=') {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = codes[string[i]];
    if (value === undefined) {
      throw new SyntaxError(`Non-${ name } character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError('Unexpected end of data');
  }
  return out;
};
const encode = (data, alphabet, bitsPerChar) => {
  const pad = alphabet[alphabet.length - 1] === '=';
  const mask = (1 << bitsPerChar) - 1;
  let out = '';
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | data[i];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += '=';
    }
  }
  return out;
};
const rfc4648 = ({name, prefix, bitsPerChar, alphabet}) => {
  return from({
    prefix,
    name,
    encode(input) {
      return encode(input, alphabet, bitsPerChar);
    },
    decode(input) {
      return decode(input, alphabet, bitsPerChar, name);
    }
  });
};
;// ./node_modules/multiformats/esm/src/bases/identity.js


const identity = from({
  prefix: '\0',
  name: 'identity',
  encode: buf => bytes_toString(buf),
  decode: str => fromString(str)
});
;// ./node_modules/multiformats/esm/src/bases/base2.js

const base2 = rfc4648({
  prefix: '0',
  name: 'base2',
  alphabet: '01',
  bitsPerChar: 1
});
;// ./node_modules/multiformats/esm/src/bases/base8.js

const base8 = rfc4648({
  prefix: '7',
  name: 'base8',
  alphabet: '01234567',
  bitsPerChar: 3
});
;// ./node_modules/multiformats/esm/src/bases/base10.js

const base10 = baseX({
  prefix: '9',
  name: 'base10',
  alphabet: '0123456789'
});
;// ./node_modules/multiformats/esm/src/bases/base16.js

const base16 = rfc4648({
  prefix: 'f',
  name: 'base16',
  alphabet: '0123456789abcdef',
  bitsPerChar: 4
});
const base16upper = rfc4648({
  prefix: 'F',
  name: 'base16upper',
  alphabet: '0123456789ABCDEF',
  bitsPerChar: 4
});
;// ./node_modules/multiformats/esm/src/bases/base32.js

const base32 = rfc4648({
  prefix: 'b',
  name: 'base32',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
  bitsPerChar: 5
});
const base32upper = rfc4648({
  prefix: 'B',
  name: 'base32upper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
  bitsPerChar: 5
});
const base32pad = rfc4648({
  prefix: 'c',
  name: 'base32pad',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
  bitsPerChar: 5
});
const base32padupper = rfc4648({
  prefix: 'C',
  name: 'base32padupper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
  bitsPerChar: 5
});
const base32hex = rfc4648({
  prefix: 'v',
  name: 'base32hex',
  alphabet: '0123456789abcdefghijklmnopqrstuv',
  bitsPerChar: 5
});
const base32hexupper = rfc4648({
  prefix: 'V',
  name: 'base32hexupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
  bitsPerChar: 5
});
const base32hexpad = rfc4648({
  prefix: 't',
  name: 'base32hexpad',
  alphabet: '0123456789abcdefghijklmnopqrstuv=',
  bitsPerChar: 5
});
const base32hexpadupper = rfc4648({
  prefix: 'T',
  name: 'base32hexpadupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
  bitsPerChar: 5
});
const base32z = rfc4648({
  prefix: 'h',
  name: 'base32z',
  alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
  bitsPerChar: 5
});
;// ./node_modules/multiformats/esm/src/bases/base36.js

const base36 = baseX({
  prefix: 'k',
  name: 'base36',
  alphabet: '0123456789abcdefghijklmnopqrstuvwxyz'
});
const base36upper = baseX({
  prefix: 'K',
  name: 'base36upper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
});
;// ./node_modules/multiformats/esm/src/bases/base58.js

const base58btc = baseX({
  name: 'base58btc',
  prefix: 'z',
  alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
});
const base58flickr = baseX({
  name: 'base58flickr',
  prefix: 'Z',
  alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
});
;// ./node_modules/multiformats/esm/src/bases/base64.js

const base64 = rfc4648({
  prefix: 'm',
  name: 'base64',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  bitsPerChar: 6
});
const base64pad = rfc4648({
  prefix: 'M',
  name: 'base64pad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  bitsPerChar: 6
});
const base64url = rfc4648({
  prefix: 'u',
  name: 'base64url',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
  bitsPerChar: 6
});
const base64urlpad = rfc4648({
  prefix: 'U',
  name: 'base64urlpad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
  bitsPerChar: 6
});
;// ./node_modules/multiformats/esm/src/bases/base256emoji.js

const alphabet = Array.from('\uD83D\uDE80\uD83E\uDE90\u2604\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09\u2600\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02\u2764\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09\u263A\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E\u270C\u2728\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D\u2763\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33\u270B\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13\u2B50\u2705\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6\u2714\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90\u2639\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20\u261D\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B\u26BD\uD83E\uDD19\u2615\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81\u26A1\uD83C\uDF1E\uD83C\uDF88\u274C\u270A\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C\u2708\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74\u25B6\u27A1\u2753\uD83D\uDC8E\uD83D\uDCB8\u2B07\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A\u26A0\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37\u260E\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51\u2744\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42');
const alphabetBytesToChars = alphabet.reduce((p, c, i) => {
  p[i] = c;
  return p;
}, []);
const alphabetCharsToBytes = alphabet.reduce((p, c, i) => {
  p[c.codePointAt(0)] = i;
  return p;
}, []);
function base256emoji_encode(data) {
  return data.reduce((p, c) => {
    p += alphabetBytesToChars[c];
    return p;
  }, '');
}
function base256emoji_decode(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];
    if (byt === undefined) {
      throw new Error(`Non-base256emoji character: ${ char }`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
const base256emoji = from({
  prefix: '\uD83D\uDE80',
  name: 'base256emoji',
  encode: base256emoji_encode,
  decode: base256emoji_decode
});
;// ./node_modules/multiformats/esm/vendor/varint.js
var encode_1 = varint_encode;
var MSB = 128, REST = 127, MSBALL = ~REST, INT = Math.pow(2, 31);
function varint_encode(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  varint_encode.bytes = offset - oldOffset + 1;
  return out;
}
var varint_decode = read;
var MSB$1 = 128, REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
  do {
    if (counter >= l) {
      read.bytes = 0;
      throw new RangeError('Could not decode varint');
    }
    b = buf[counter++];
    res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var varint_length = function (value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: varint_decode,
  encodingLength: varint_length
};
var _brrp_varint = varint;
/* harmony default export */ const vendor_varint = (_brrp_varint);
;// ./node_modules/multiformats/esm/src/varint.js

const src_varint_decode = (data, offset = 0) => {
  const code = vendor_varint.decode(data, offset);
  return [
    code,
    vendor_varint.decode.bytes
  ];
};
const encodeTo = (int, target, offset = 0) => {
  vendor_varint.encode(int, target, offset);
  return target;
};
const encodingLength = int => {
  return vendor_varint.encodingLength(int);
};
;// ./node_modules/multiformats/esm/src/hashes/digest.js


const create = (code, digest) => {
  const size = digest.byteLength;
  const sizeOffset = encodingLength(code);
  const digestOffset = sizeOffset + encodingLength(size);
  const bytes = new Uint8Array(digestOffset + size);
  encodeTo(code, bytes, 0);
  encodeTo(size, bytes, sizeOffset);
  bytes.set(digest, digestOffset);
  return new Digest(code, size, digest, bytes);
};
const digest_decode = multihash => {
  const bytes = coerce(multihash);
  const [code, sizeOffset] = src_varint_decode(bytes);
  const [size, digestOffset] = src_varint_decode(bytes.subarray(sizeOffset));
  const digest = bytes.subarray(sizeOffset + digestOffset);
  if (digest.byteLength !== size) {
    throw new Error('Incorrect length');
  }
  return new Digest(code, size, digest, bytes);
};
const digest_equals = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return a.code === b.code && a.size === b.size && equals(a.bytes, b.bytes);
  }
};
class Digest {
  constructor(code, size, digest, bytes) {
    this.code = code;
    this.size = size;
    this.digest = digest;
    this.bytes = bytes;
  }
}
;// ./node_modules/multiformats/esm/src/hashes/hasher.js

const hasher_from = ({name, code, encode}) => new Hasher(name, code, encode);
class Hasher {
  constructor(name, code, encode) {
    this.name = name;
    this.code = code;
    this.encode = encode;
  }
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? create(this.code, result) : result.then(digest => create(this.code, digest));
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }
}
;// ./node_modules/multiformats/esm/src/hashes/sha2-browser.js

const sha = name => async data => new Uint8Array(await crypto.subtle.digest(name, data));
const sha256 = hasher_from({
  name: 'sha2-256',
  code: 18,
  encode: sha('SHA-256')
});
const sha512 = hasher_from({
  name: 'sha2-512',
  code: 19,
  encode: sha('SHA-512')
});
;// ./node_modules/multiformats/esm/src/hashes/identity.js


const code = 0;
const identity_name = 'identity';
const identity_encode = coerce;
const digest = input => create(code, identity_encode(input));
const identity_identity = {
  code,
  name: identity_name,
  encode: identity_encode,
  digest
};
;// ./node_modules/multiformats/esm/src/codecs/raw.js

const raw_name = 'raw';
const raw_code = 85;
const raw_encode = node => coerce(node);
const raw_decode = data => coerce(data);
;// ./node_modules/multiformats/esm/src/codecs/json.js
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const json_name = 'json';
const json_code = 512;
const json_encode = node => textEncoder.encode(JSON.stringify(node));
const json_decode = data => JSON.parse(textDecoder.decode(data));
;// ./node_modules/multiformats/esm/src/cid.js





class CID {
  constructor(version, code, multihash, bytes) {
    this.code = code;
    this.version = version;
    this.multihash = multihash;
    this.bytes = bytes;
    this.byteOffset = bytes.byteOffset;
    this.byteLength = bytes.byteLength;
    this.asCID = this;
    this._baseCache = new Map();
    Object.defineProperties(this, {
      byteOffset: cid_hidden,
      byteLength: cid_hidden,
      code: readonly,
      version: readonly,
      multihash: readonly,
      bytes: readonly,
      _baseCache: cid_hidden,
      asCID: cid_hidden
    });
  }
  toV0() {
    switch (this.version) {
    case 0: {
        return this;
      }
    default: {
        const {code, multihash} = this;
        if (code !== DAG_PB_CODE) {
          throw new Error('Cannot convert a non dag-pb CID to CIDv0');
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error('Cannot convert non sha2-256 multihash CID to CIDv0');
        }
        return CID.createV0(multihash);
      }
    }
  }
  toV1() {
    switch (this.version) {
    case 0: {
        const {code, digest} = this.multihash;
        const multihash = create(code, digest);
        return CID.createV1(this.code, multihash);
      }
    case 1: {
        return this;
      }
    default: {
        throw Error(`Can not convert CID version ${ this.version } to version 0. This is a bug please report`);
      }
    }
  }
  equals(other) {
    return other && this.code === other.code && this.version === other.version && digest_equals(this.multihash, other.multihash);
  }
  toString(base) {
    const {bytes, version, _baseCache} = this;
    switch (version) {
    case 0:
      return toStringV0(bytes, _baseCache, base || base58btc.encoder);
    default:
      return toStringV1(bytes, _baseCache, base || base32.encoder);
    }
  }
  toJSON() {
    return {
      code: this.code,
      version: this.version,
      hash: this.multihash.bytes
    };
  }
  get [Symbol.toStringTag]() {
    return 'CID';
  }
  [Symbol.for('nodejs.util.inspect.custom')]() {
    return 'CID(' + this.toString() + ')';
  }
  static isCID(value) {
    deprecate(/^0\.0/, IS_CID_DEPRECATION);
    return !!(value && (value[cidSymbol] || value.asCID === value));
  }
  get toBaseEncodedString() {
    throw new Error('Deprecated, use .toString()');
  }
  get codec() {
    throw new Error('"codec" property is deprecated, use integer "code" property instead');
  }
  get buffer() {
    throw new Error('Deprecated .buffer property, use .bytes to get Uint8Array instead');
  }
  get multibaseName() {
    throw new Error('"multibaseName" property is deprecated');
  }
  get prefix() {
    throw new Error('"prefix" property is deprecated');
  }
  static asCID(value) {
    if (value instanceof CID) {
      return value;
    } else if (value != null && value.asCID === value) {
      const {version, code, multihash, bytes} = value;
      return new CID(version, code, multihash, bytes || encodeCID(version, code, multihash.bytes));
    } else if (value != null && value[cidSymbol] === true) {
      const {version, multihash, code} = value;
      const digest = digest_decode(multihash);
      return CID.create(version, code, digest);
    } else {
      return null;
    }
  }
  static create(version, code, digest) {
    if (typeof code !== 'number') {
      throw new Error('String codecs are no longer supported');
    }
    switch (version) {
    case 0: {
        if (code !== DAG_PB_CODE) {
          throw new Error(`Version 0 CID must use dag-pb (code: ${ DAG_PB_CODE }) block encoding`);
        } else {
          return new CID(version, code, digest, digest.bytes);
        }
      }
    case 1: {
        const bytes = encodeCID(version, code, digest.bytes);
        return new CID(version, code, digest, bytes);
      }
    default: {
        throw new Error('Invalid version');
      }
    }
  }
  static createV0(digest) {
    return CID.create(0, DAG_PB_CODE, digest);
  }
  static createV1(code, digest) {
    return CID.create(1, code, digest);
  }
  static decode(bytes) {
    const [cid, remainder] = CID.decodeFirst(bytes);
    if (remainder.length) {
      throw new Error('Incorrect length');
    }
    return cid;
  }
  static decodeFirst(bytes) {
    const specs = CID.inspectBytes(bytes);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = coerce(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error('Incorrect length');
    }
    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid = specs.version === 0 ? CID.createV0(digest) : CID.createV1(specs.codec, digest);
    return [
      cid,
      bytes.subarray(specs.size)
    ];
  }
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i, length] = src_varint_decode(initialBytes.subarray(offset));
      offset += length;
      return i;
    };
    let version = next();
    let codec = DAG_PB_CODE;
    if (version === 18) {
      version = 0;
      offset = 0;
    } else if (version === 1) {
      codec = next();
    }
    if (version !== 0 && version !== 1) {
      throw new RangeError(`Invalid CID version ${ version }`);
    }
    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return {
      version,
      codec,
      multihashCode,
      digestSize,
      multihashSize,
      size
    };
  }
  static parse(source, base) {
    const [prefix, bytes] = parseCIDtoBytes(source, base);
    const cid = CID.decode(bytes);
    cid._baseCache.set(prefix, source);
    return cid;
  }
}
const parseCIDtoBytes = (source, base) => {
  switch (source[0]) {
  case 'Q': {
      const decoder = base || base58btc;
      return [
        base58btc.prefix,
        decoder.decode(`${ base58btc.prefix }${ source }`)
      ];
    }
  case base58btc.prefix: {
      const decoder = base || base58btc;
      return [
        base58btc.prefix,
        decoder.decode(source)
      ];
    }
  case base32.prefix: {
      const decoder = base || base32;
      return [
        base32.prefix,
        decoder.decode(source)
      ];
    }
  default: {
      if (base == null) {
        throw Error('To parse non base32 or base58btc encoded CID multibase decoder must be provided');
      }
      return [
        source[0],
        base.decode(source)
      ];
    }
  }
};
const toStringV0 = (bytes, cache, base) => {
  const {prefix} = base;
  if (prefix !== base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${ base.name } encoding`);
  }
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid = base.encode(bytes).slice(1);
    cache.set(prefix, cid);
    return cid;
  } else {
    return cid;
  }
};
const toStringV1 = (bytes, cache, base) => {
  const {prefix} = base;
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid = base.encode(bytes);
    cache.set(prefix, cid);
    return cid;
  } else {
    return cid;
  }
};
const DAG_PB_CODE = 112;
const SHA_256_CODE = 18;
const encodeCID = (version, code, multihash) => {
  const codeOffset = encodingLength(version);
  const hashOffset = codeOffset + encodingLength(code);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  encodeTo(version, bytes, 0);
  encodeTo(code, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
};
const cidSymbol = Symbol.for('@ipld/js-cid/CID');
const readonly = {
  writable: false,
  configurable: false,
  enumerable: true
};
const cid_hidden = {
  writable: false,
  enumerable: false,
  configurable: false
};
const version = '0.0.0-dev';
const deprecate = (range, message) => {
  if (range.test(version)) {
    console.warn(message);
  } else {
    throw new Error(message);
  }
};
const IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;
;// ./node_modules/multiformats/esm/src/index.js






;// ./node_modules/multiformats/esm/src/basics.js















const bases = {
  ...identity_namespaceObject,
  ...base2_namespaceObject,
  ...base8_namespaceObject,
  ...base10_namespaceObject,
  ...base16_namespaceObject,
  ...base32_namespaceObject,
  ...base36_namespaceObject,
  ...base58_namespaceObject,
  ...base64_namespaceObject,
  ...base256emoji_namespaceObject
};
const hashes = {
  ...sha2_browser_namespaceObject,
  ...hashes_identity_namespaceObject
};
const codecs = {
  raw: raw_namespaceObject,
  json: json_namespaceObject
};


/***/ }),

/***/ 9087:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Normalize = __webpack_require__(9053);

const Registry = {

	externalRenderer: false,
	dependencies: {},
	fields: {
		assets: {},
		extensions: {},
		links: {},
		metadata: {}
	},

	exportFields() {
		return this.fields;
	},

	importFields(fields) {
		fields = Normalize.fields(fields);
		for(let key in this.fields) {
			Object.assign(this.fields[key], fields[key]);
		}
	},

	getDependency(name) {
		if (!this.dependencies[name]) {
			console.warn(`Dependency '${name}' not registered.`);
		}
		return this.dependencies[name];
	},

	addDependency(name, library) {
		this.dependencies[name] = library;
	},

	addExtension(prefix, spec) {
		this.fields.extensions[prefix] = Normalize.field(spec, this.fields.extensions);
	},

	addMetadataField(field, spec) {
		this.fields.metadata[field] = Normalize.field(spec, this.fields.metadata);
	},

	addLinkField(field, spec) {
		this.fields.links[field] = Normalize.field(spec, this.fields.links);
	},

	addAssetField(field, spec) {
		this.fields.assets[field] = Normalize.field(spec, this.fields.assets);
	},

	addMetadataFields(specs) {
		for(var key in specs) {
			Registry.addMetadataField(key, specs[key]);
		}
	},

	getExtension(name) {
		if (this.fields.extensions[name]) {
			return this.fields.extensions[name];
		}
		else {
			return {};
		}
	},

	getSpecification(field, type = null) {
		let spec = {};
		if (type === 'assets' && this.fields.assets[field]) {
			spec = this.fields.assets[field];
		}
		else if (type === 'links' && this.fields.links[field]) {
			spec = this.fields.links[field];
		}
		else if (this.fields.metadata[field]) {
			spec = this.fields.metadata[field];
		}
		return spec;
	}

};

module.exports = Registry;

/***/ }),

/***/ 9092:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hasSymbols = __webpack_require__(1333);

/** @type {import('.')} */
module.exports = function hasToStringTagShams() {
	return hasSymbols() && !!Symbol.toStringTag;
};


/***/ }),

/***/ 9209:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var possibleNames = __webpack_require__(6578);

var g = typeof globalThis === 'undefined' ? __webpack_require__.g : globalThis;

/** @type {import('.')} */
module.exports = function availableTypedArrays() {
	var /** @type {ReturnType<typeof availableTypedArrays>} */ out = [];
	for (var i = 0; i < possibleNames.length; i++) {
		if (typeof g[possibleNames[i]] === 'function') {
			// @ts-expect-error
			out[out.length] = possibleNames[i];
		}
	}
	return out;
};


/***/ }),

/***/ 9290:
/***/ ((module) => {

"use strict";


/** @type {import('./range')} */
module.exports = RangeError;


/***/ }),

/***/ 9353:
/***/ ((module) => {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';

var concatty = function concatty(a, b) {
    var arr = [];

    for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
    }

    return arr;
};

var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
    }
    return arr;
};

var joiny = function (arr, joiner) {
    var str = '';
    for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                concatty(args, arguments)
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(
            that,
            concatty(args, arguments)
        );

    };

    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = '$' + i;
    }

    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ 9383:
/***/ ((module) => {

"use strict";


/** @type {import('.')} */
module.exports = Error;


/***/ }),

/***/ 9417:
/***/ ((module) => {

"use strict";


/** @typedef {import('./types').CodecFactory} CodecFactory */

/**
 * @param {string} string
 * @param {string} alphabet
 * @param {number} bitsPerChar
 * @returns {Uint8Array}
 */
const decode = (string, alphabet, bitsPerChar) => {
  // Build the character lookup table:
  /** @type {Record<string, number>} */
  const codes = {}
  for (let i = 0; i < alphabet.length; ++i) {
    codes[alphabet[i]] = i
  }

  // Count the padding bytes:
  let end = string.length
  while (string[end - 1] === '=') {
    --end
  }

  // Allocate the output:
  const out = new Uint8Array((end * bitsPerChar / 8) | 0)

  // Parse the data:
  let bits = 0 // Number of bits currently in the buffer
  let buffer = 0 // Bits waiting to be written out, MSB first
  let written = 0 // Next byte to write
  for (let i = 0; i < end; ++i) {
    // Read one character from the string:
    const value = codes[string[i]]
    if (value === undefined) {
      throw new SyntaxError('Invalid character ' + string[i])
    }

    // Append the bits to the buffer:
    buffer = (buffer << bitsPerChar) | value
    bits += bitsPerChar

    // Write out some bits if the buffer has a byte's worth:
    if (bits >= 8) {
      bits -= 8
      out[written++] = 0xff & (buffer >> bits)
    }
  }

  // Verify that we have received just enough bits:
  if (bits >= bitsPerChar || 0xff & (buffer << (8 - bits))) {
    throw new SyntaxError('Unexpected end of data')
  }

  return out
}

/**
 * @param {Uint8Array} data
 * @param {string} alphabet
 * @param {number} bitsPerChar
 * @returns {string}
 */
const encode = (data, alphabet, bitsPerChar) => {
  const pad = alphabet[alphabet.length - 1] === '='
  const mask = (1 << bitsPerChar) - 1
  let out = ''

  let bits = 0 // Number of bits currently in the buffer
  let buffer = 0 // Bits waiting to be written out, MSB first
  for (let i = 0; i < data.length; ++i) {
    // Slurp data into the buffer:
    buffer = (buffer << 8) | data[i]
    bits += 8

    // Write out as much as we can:
    while (bits > bitsPerChar) {
      bits -= bitsPerChar
      out += alphabet[mask & (buffer >> bits)]
    }
  }

  // Partial character:
  if (bits) {
    out += alphabet[mask & (buffer << (bitsPerChar - bits))]
  }

  // Add padding characters until we hit a byte boundary:
  if (pad) {
    while ((out.length * bitsPerChar) & 7) {
      out += '='
    }
  }

  return out
}

/**
 * RFC4648 Factory
 *
 * @param {number} bitsPerChar
 * @returns {CodecFactory}
 */
const rfc4648 = (bitsPerChar) => (alphabet) => {
  return {
    /**
     * @param {Uint8Array} input
     * @returns {string}
     */
    encode (input) {
      return encode(input, alphabet, bitsPerChar)
    },
    /**
     * @param {string} input
     * @returns {Uint8Array}
     */
    decode (input) {
      return decode(input, alphabet, bitsPerChar)
    }
  }
}

module.exports = { rfc4648 }


/***/ }),

/***/ 9538:
/***/ ((module) => {

"use strict";


/** @type {import('./ref')} */
module.exports = ReferenceError;


/***/ }),

/***/ 9600:
/***/ ((module) => {

"use strict";


var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
		// eslint-disable-next-line no-throw-literal
		reflectApply(function () { throw 42; }, null, badArrayLike);
	} catch (_) {
		if (_ !== isCallableMarker) {
			reflectApply = null;
		}
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var objectClass = '[object Object]';
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var ddaClass = '[object HTMLAllCollection]'; // IE 11
var ddaClass2 = '[object HTML document.all class]';
var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`

var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

var isDDA = function isDocumentDotAll() { return false; };
if (typeof document === 'object') {
	// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
	var all = document.all;
	if (toStr.call(all) === toStr.call(document.all)) {
		isDDA = function isDocumentDotAll(value) {
			/* globals document: false */
			// in IE 6-8, typeof document.all is "object" and it's truthy
			if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
				try {
					var str = toStr.call(value);
					return (
						str === ddaClass
						|| str === ddaClass2
						|| str === ddaClass3 // opera 12.16
						|| str === objectClass // IE 6-8
					) && value('') == null; // eslint-disable-line eqeqeq
				} catch (e) { /**/ }
			}
			return false;
		};
	}
}

module.exports = reflectApply
	? function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value) && tryFunctionObject(value);
	}
	: function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		if (strClass !== fnClass && strClass !== genClass && !(/^\[object HTML/).test(strClass)) { return false; }
		return tryFunctionObject(value);
	};


/***/ }),

/***/ 9612:
/***/ ((module) => {

"use strict";


/** @type {import('.')} */
module.exports = Object;


/***/ }),

/***/ 9675:
/***/ ((module) => {

"use strict";


/** @type {import('./type')} */
module.exports = TypeError;


/***/ }),

/***/ 9721:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var callBound = __webpack_require__(6556);
var isRegex = __webpack_require__(4035);

var $exec = callBound('RegExp.prototype.exec');
var $TypeError = __webpack_require__(9675);

/** @type {import('.')} */
module.exports = function regexTester(regex) {
	if (!isRegex(regex)) {
		throw new $TypeError('`regex` must be a RegExp');
	}
	return function test(s) {
		return $exec(regex, s) !== null;
	};
};


/***/ }),

/***/ 9957:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __webpack_require__(6743);

/** @type {import('.')} */
module.exports = bind.call(call, $hasOwn);


/***/ })

}]);
//# sourceMappingURL=openeo.4870.js.map