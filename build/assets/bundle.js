(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/josephluck/apps/choo/src/components/AddNewTodoForm.js":[function(require,module,exports){
'use strict';
var _templateObject = _taggedTemplateLiteral([
    '\n    <form onsubmit=',
    '>\n      <input\n        value=',
    '\n        onchange=',
    '\n        type="text"\n        placeholder="Add a todo"\n      />\n    </form>\n  '
], [
    '\n    <form onsubmit=',
    '>\n      <input\n        value=',
    '\n        onchange=',
    '\n        type="text"\n        placeholder="Add a todo"\n      />\n    </form>\n  '
]);
function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var html = require('choo/html');
module.exports = function (_ref) {
    var value = _ref.value, onChange = _ref.onChange, onSubmit = _ref.onSubmit;
    var onFormSubmit = function onFormSubmit(e) {
        e.preventDefault();
        onSubmit();
    };
    var onInputChange = function onInputChange(e) {
        return onChange(e.target.value);
    };
    return html(_templateObject, onFormSubmit, value, onInputChange);
};
},{"choo/html":"/Users/josephluck/apps/choo/src/node_modules/choo/html.js"}],"/Users/josephluck/apps/choo/src/components/LoginForm.js":[function(require,module,exports){
'use strict';
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _templateObject = _taggedTemplateLiteral([
        '\n    <form\n      onsubmit=',
        '\n      class=',
        '\n    >\n      <div class="mt3">\n        <label>\n          Username\n        </label>\n        <input\n          type="text"\n          value=',
        '\n          onchange=',
        '\n        />\n        ',
        '\n      </div>\n\n      <div>\n        <label>\n          Password\n        </label>\n        <input\n          type="password"\n          value=',
        '\n          onchange=',
        '\n        />\n        ',
        '\n      </div>\n\n      <button\n        type="submit"\n        disabled=',
        '\n      >\n        Login\n      </button>\n    </form>\n  '
    ], [
        '\n    <form\n      onsubmit=',
        '\n      class=',
        '\n    >\n      <div class="mt3">\n        <label>\n          Username\n        </label>\n        <input\n          type="text"\n          value=',
        '\n          onchange=',
        '\n        />\n        ',
        '\n      </div>\n\n      <div>\n        <label>\n          Password\n        </label>\n        <input\n          type="password"\n          value=',
        '\n          onchange=',
        '\n        />\n        ',
        '\n      </div>\n\n      <button\n        type="submit"\n        disabled=',
        '\n      >\n        Login\n      </button>\n    </form>\n  '
    ]), _templateObject2 = _taggedTemplateLiteral(['\n            <small>\n              Username is required\n            </small>\n          '], ['\n            <small>\n              Username is required\n            </small>\n          ']), _templateObject3 = _taggedTemplateLiteral(['\n            <small>\n              Password is required\n            </small>\n          '], ['\n            <small>\n              Password is required\n            </small>\n          ']);
function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var html = require('choo/html');
var noop = function noop() {
};
var emptyLogin = require('../factories/login').empty;
module.exports = function (_ref) {
    var _ref$onSubmit = _ref.onSubmit, onSubmit = _ref$onSubmit === undefined ? noop : _ref$onSubmit, _ref$values = _ref.values, values = _ref$values === undefined ? emptyLogin() : _ref$values, _ref$onChange = _ref.onChange, onChange = _ref$onChange === undefined ? noop : _ref$onChange, _ref$submitted = _ref.submitted, submitted = _ref$submitted === undefined ? false : _ref$submitted, _ref$submitting = _ref.submitting, submitting = _ref$submitting === undefined ? false : _ref$submitting, _ref$valid = _ref.valid, valid = _ref$valid === undefined ? false : _ref$valid, _ref$validation = _ref.validation, validation = _ref$validation === undefined ? {} : _ref$validation, _ref$styles = _ref.styles, styles = _ref$styles === undefined ? '' : _ref$styles;
    var onUsernameChange = function onUsernameChange(e) {
        return onChange(_extends({}, values, { username: e.target.value }));
    };
    var onPasswordChange = function onPasswordChange(e) {
        return onChange(_extends({}, values, { password: e.target.value }));
    };
    var submit = function submit(e) {
        e.preventDefault();
        onSubmit(values);
    };
    return html(_templateObject, submit, styles, values.username, onUsernameChange, submitted && validation.username ? html(_templateObject2) : null, values.password, onPasswordChange, submitted && validation.password ? html(_templateObject3) : null, submitted && !valid || submitting);
};
},{"../factories/login":"/Users/josephluck/apps/choo/src/factories/login.js","choo/html":"/Users/josephluck/apps/choo/src/node_modules/choo/html.js"}],"/Users/josephluck/apps/choo/src/components/MainNav.js":[function(require,module,exports){
'use strict';
var _templateObject = _taggedTemplateLiteral([
    '\n    <div>\n      Hello ',
    '\n\n      ',
    '\n\n      <br />\n\n      <a\n        onclick=',
    '\n      >\n        Logout\n      </a>\n    </div>\n  '
], [
    '\n    <div>\n      Hello ',
    '\n\n      ',
    '\n\n      <br />\n\n      <a\n        onclick=',
    '\n      >\n        Logout\n      </a>\n    </div>\n  '
]);
function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var html = require('choo/html');
var noop = function noop() {
};
var Tabs = require('./tabs');
module.exports = function (_ref) {
    var _ref$user = _ref.user, user = _ref$user === undefined ? {} : _ref$user, _ref$onLogout = _ref.onLogout, onLogout = _ref$onLogout === undefined ? noop : _ref$onLogout, _ref$currentRoute = _ref.currentRoute, currentRoute = _ref$currentRoute === undefined ? '' : _ref$currentRoute;
    var onLogoutClick = function onLogoutClick(e) {
        e.preventDefault();
        onLogout();
    };
    return html(_templateObject, user.name, Tabs({
        activeRoute: currentRoute,
        activeClass: 'i',
        tabs: [
            {
                label: 'Dashboard',
                href: '/dashboard'
            },
            {
                label: 'Todos',
                href: '/todos'
            }
        ]
    }), onLogoutClick);
};
},{"./tabs":"/Users/josephluck/apps/choo/src/components/tabs.js","choo/html":"/Users/josephluck/apps/choo/src/node_modules/choo/html.js"}],"/Users/josephluck/apps/choo/src/components/TitleBar.js":[function(require,module,exports){
'use strict';
var _templateObject = _taggedTemplateLiteral([
    '\n    <h1>',
    '</h1>\n  '
], [
    '\n    <h1>',
    '</h1>\n  '
]);
function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var html = require('choo/html');
module.exports = function (_ref) {
    var title = _ref.title;
    return html(_templateObject, title);
};
},{"choo/html":"/Users/josephluck/apps/choo/src/node_modules/choo/html.js"}],"/Users/josephluck/apps/choo/src/components/Todo.js":[function(require,module,exports){
'use strict';
var _templateObject = _taggedTemplateLiteral([
    '\n    <div>\n      <input\n        type="checkbox"\n        checked=',
    '\n        onchange=',
    '\n      />\n      <span\n        style="text-decoration\': ',
    '"\n      >\n        ',
    '\n      </span>\n    </div>\n  '
], [
    '\n    <div>\n      <input\n        type="checkbox"\n        checked=',
    '\n        onchange=',
    '\n      />\n      <span\n        style="text-decoration\': ',
    '"\n      >\n        ',
    '\n      </span>\n    </div>\n  '
]);
function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var html = require('choo/html');
module.exports = function (_ref) {
    var todo = _ref.todo, onToggle = _ref.onToggle;
    return html(_templateObject, todo.complete, onToggle, todo.complete ? 'line-through' : 'normal', todo.title);
};
},{"choo/html":"/Users/josephluck/apps/choo/src/node_modules/choo/html.js"}],"/Users/josephluck/apps/choo/src/components/TodosList.js":[function(require,module,exports){
'use strict';
var _templateObject = _taggedTemplateLiteral([
    '\n    <div>\n      ',
    '\n    </div>\n  '
], [
    '\n    <div>\n      ',
    '\n    </div>\n  '
]);
function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var html = require('choo/html');
var Todo = require('./Todo');
module.exports = function (_ref) {
    var todos = _ref.todos, _onToggle = _ref.onToggle;
    return html(_templateObject, todos.map(function (todo, index) {
        return Todo({
            todo: todo,
            onToggle: function onToggle() {
                return _onToggle(todo);
            }
        });
    }));
};
},{"./Todo":"/Users/josephluck/apps/choo/src/components/Todo.js","choo/html":"/Users/josephluck/apps/choo/src/node_modules/choo/html.js"}],"/Users/josephluck/apps/choo/src/components/hoc/ValidateProps.js":[function(require,module,exports){
'use strict';
var validate = function validate() {
    return true;
};
if ('production' !== 'production') {
    validate = function validate(props, propTypes) {
        for (var prop in propTypes) {
            if (propTypes.hasOwnProperty(prop)) {
                var err = propTypes[prop](props, prop, 'name', 'prop');
                if (err) {
                    console.warn(err);
                    return false;
                }
            }
        }
        return true;
    };
}
module.exports = function (comp, types) {
    return function (props) {
        if ('production' !== 'production') {
            return validate(props, types) ? comp(props) : null;
        }
        return comp(props);
    };
};
if ('production' !== 'production') {
    module.exports.PropTypes = require('proptypes');
} else {
    module.exports.PropTypes = {};
}
},{"proptypes":"/Users/josephluck/apps/choo/src/node_modules/proptypes/index.js"}],"/Users/josephluck/apps/choo/src/components/tabs.js":[function(require,module,exports){
'use strict';
var _templateObject = _taggedTemplateLiteral([
    '\n      <div\n        class="di"\n      >\n        <a\n          href=',
    '\n          class=',
    '\n        >\n          ',
    '\n        </a>\n      </div>\n    '
], [
    '\n      <div\n        class="di"\n      >\n        <a\n          href=',
    '\n          class=',
    '\n        >\n          ',
    '\n        </a>\n      </div>\n    '
]);
function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var html = require('choo/html');
var ValidateProps = require('./hoc/ValidateProps');
module.exports = ValidateProps(function (_ref) {
    var _ref$activeRoute = _ref.activeRoute, activeRoute = _ref$activeRoute === undefined ? '' : _ref$activeRoute, _ref$activeClass = _ref.activeClass, activeClass = _ref$activeClass === undefined ? 'b' : _ref$activeClass, _ref$tabs = _ref.tabs, tabs = _ref$tabs === undefined ? [] : _ref$tabs;
    return tabs.map(function (tab) {
        return html(_templateObject, tab.href, activeRoute === tab.href ? activeClass : '', tab.label);
    });
}, {
    activeRoute: ValidateProps.PropTypes.string,
    activeClass: ValidateProps.PropTypes.string,
    tabs: ValidateProps.PropTypes.array
});
},{"./hoc/ValidateProps":"/Users/josephluck/apps/choo/src/components/hoc/ValidateProps.js","choo/html":"/Users/josephluck/apps/choo/src/node_modules/choo/html.js"}],"/Users/josephluck/apps/choo/src/factories/login.js":[function(require,module,exports){
'use strict';
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var rules = function rules() {
    return {
        username: { presence: true },
        password: { presence: true }
    };
};
var empty = function empty() {
    return {
        username: 'wall-e@goodlord.co',
        password: 'CorrectHorseBatteryStaple'
    };
};
var create = function create(data) {
    return _extends({}, empty(), data);
};
module.exports = {
    rules: rules,
    empty: empty,
    create: create
};
},{}],"/Users/josephluck/apps/choo/src/index.js":[function(require,module,exports){
'use strict';
var choo = require('choo');
var promisify = require('./utils/promisify');
var state = require('./utils/state');
var store = require('./utils/store');
var pages = require('./pages');
var models = require('./models');
var app = choo();
app.use(state());
app.use(promisify());
if ('production' !== 'production') {
    var log = require('choo-log');
    app.use(log());
}
models.forEach(function (model) {
    return app.model(model);
});
store.init(app._store._models);
app.router(pages());
document.body.appendChild(app.start());
var css = 0;
(null || true) && '_71de40d3';
module.exports = app;
},{"./models":"/Users/josephluck/apps/choo/src/models/index.js","./pages":"/Users/josephluck/apps/choo/src/pages/index.js","./utils/promisify":"/Users/josephluck/apps/choo/src/utils/promisify.js","./utils/state":"/Users/josephluck/apps/choo/src/utils/state.js","./utils/store":"/Users/josephluck/apps/choo/src/utils/store.js","choo":"/Users/josephluck/apps/choo/src/node_modules/choo/index.js","choo-log":"/Users/josephluck/apps/choo/src/node_modules/choo-log/index.js","sheetify/insert":"/Users/josephluck/apps/choo/src/node_modules/sheetify/insert.js"}],"/Users/josephluck/apps/choo/src/models/auth.js":[function(require,module,exports){
'use strict';
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);
        return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
                        step('next', value);
                    }, function (err) {
                        step('throw', err);
                    });
                }
            }
            return step('next');
        });
    };
}
var jwtDecode = require('jwt-decode');
var sync = require('./middleware/sync');
module.exports = function () {
    var storedTokens = window.localStorage.getItem('tokens');
    var tokens = storedTokens ? JSON.parse(storedTokens) : {};
    var state = {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        expiresIn: tokens.expiresIn
    };
    return {
        namespace: 'auth',
        state: state,
        reducers: {
            receiveTokens: sync('tokens', function (state, _ref) {
                var accessToken = _ref.accessToken, refreshToken = _ref.refreshToken, expiresIn = _ref.expiresIn;
                return _extends({}, state, {
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    expiresIn: expiresIn
                });
            })
        },
        effects: {
            check: function () {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(state, _ref2, send, done) {
                    var _ref2$onError = _ref2.onError, onError = _ref2$onError === undefined ? function () {
                        } : _ref2$onError;
                    var userExists, fetchUser;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                            case 0:
                                if (!state.accessToken) {
                                    _context.next = 6;
                                    break;
                                }
                                userExists = !!state.$root.user.user.id;
                                fetchUser = !userExists ? send('user:fetch', { userId: jwtDecode(state.accessToken).sub }) : Promise.resolve();
                                _context.next = 5;
                                return Promise.all([fetchUser]);
                            case 5:
                                return _context.abrupt('return');
                            case 6:
                                onError('No access token in state');
                            case 7:
                            case 'end':
                                return _context.stop();
                            }
                        }
                    }, _callee, undefined);
                }));
                function check(_x, _x2, _x3, _x4) {
                    return _ref3.apply(this, arguments);
                }
                return check;
            }(),
            clearTokens: function clearTokens(state, payload, send) {
                send('auth:receiveTokens', {
                    accessToken: null,
                    refreshToken: null,
                    expiresIn: null
                });
            }
        }
    };
};
},{"./middleware/sync":"/Users/josephluck/apps/choo/src/models/middleware/sync.js","jwt-decode":"/Users/josephluck/apps/choo/src/node_modules/jwt-decode/lib/index.js"}],"/Users/josephluck/apps/choo/src/models/index.js":[function(require,module,exports){
'use strict';
module.exports = [
    require('./todos')({}),
    require('./login')({}),
    require('./auth')({}),
    require('./user')({})
];
},{"./auth":"/Users/josephluck/apps/choo/src/models/auth.js","./login":"/Users/josephluck/apps/choo/src/models/login.js","./todos":"/Users/josephluck/apps/choo/src/models/todos.js","./user":"/Users/josephluck/apps/choo/src/models/user.js"}],"/Users/josephluck/apps/choo/src/models/login.js":[function(require,module,exports){
'use strict';
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);
        return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
                        step('next', value);
                    }, function (err) {
                        step('throw', err);
                    });
                }
            }
            return step('next');
        });
    };
}
var validate = require('validate.js');
var formRules = require('../factories/login').rules;
module.exports = function (_ref) {
    var _ref$passport = _ref.passport, passport = _ref$passport === undefined ? require('../transport/passport') : _ref$passport, _ref$loginFactory = _ref.loginFactory, loginFactory = _ref$loginFactory === undefined ? require('../factories/login') : _ref$loginFactory;
    return {
        namespace: 'login',
        state: {
            form: loginFactory.empty(),
            valid: true,
            submitting: false,
            submitted: false,
            validation: {}
        },
        reducers: {
            replaceForm: function replaceForm(state, _ref2) {
                var form = _ref2.form;
                return _extends({}, state, { form: _extends({}, state.form, form) });
            },
            validateForm: function validateForm(state) {
                var validation = validate(state.form, formRules()) || {};
                return _extends({}, state, {
                    validation: validation,
                    valid: !Object.keys(validation).length
                });
            },
            setSubmitting: function setSubmitting(state, _ref3) {
                var submitting = _ref3.submitting;
                return _extends({}, state, { submitting: submitting });
            },
            setSubmitted: function setSubmitted(state, _ref4) {
                var submitted = _ref4.submitted;
                return _extends({}, state, { submitted: submitted });
            }
        },
        effects: {
            updateForm: function () {
                var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(state, _ref5, send, done) {
                    var form = _ref5.form;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return send('login:replaceForm', { form: form });
                            case 2:
                                _context.next = 4;
                                return send('login:validateForm');
                            case 4:
                            case 'end':
                                return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));
                function updateForm(_x, _x2, _x3, _x4) {
                    return _ref6.apply(this, arguments);
                }
                return updateForm;
            }(),
            submit: function () {
                var _ref8 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(state, _ref7, send, done) {
                    var form = _ref7.form, cb = _ref7.cb;
                    var response;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return send('login:setSubmitted', { submitted: true });
                            case 2:
                                _context2.next = 4;
                                return send('login:validateForm');
                            case 4:
                                if (state.valid) {
                                    _context2.next = 6;
                                    break;
                                }
                                return _context2.abrupt('return', false);
                            case 6:
                                _context2.next = 8;
                                return send('login:setSubmitting', { submitting: true });
                            case 8:
                                _context2.next = 10;
                                return passport.login({ payload: form });
                            case 10:
                                response = _context2.sent;
                                _context2.next = 13;
                                return send('login:setSubmitting', { submitting: false });
                            case 13:
                                if (!(response.code === 403)) {
                                    _context2.next = 15;
                                    break;
                                }
                                return _context2.abrupt('return', false);
                            case 15:
                                _context2.next = 17;
                                return send('auth:receiveTokens', {
                                    accessToken: response.access_token,
                                    refreshToken: response.refresh_token,
                                    expiresIn: response.expires_in
                                });
                            case 17:
                                return _context2.abrupt('return', cb());
                            case 18:
                            case 'end':
                                return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));
                function submit(_x5, _x6, _x7, _x8) {
                    return _ref8.apply(this, arguments);
                }
                return submit;
            }()
        }
    };
};
},{"../factories/login":"/Users/josephluck/apps/choo/src/factories/login.js","../transport/passport":"/Users/josephluck/apps/choo/src/transport/passport.js","validate.js":"/Users/josephluck/apps/choo/src/node_modules/validate.js/validate.js"}],"/Users/josephluck/apps/choo/src/models/middleware/sync.js":[function(require,module,exports){
'use strict';
module.exports = function (name, fn) {
    return function (state, payload) {
        var res = fn(state, payload);
        window.localStorage.setItem(name, JSON.stringify(res));
        return res;
    };
};
},{}],"/Users/josephluck/apps/choo/src/models/todos.js":[function(require,module,exports){
'use strict';
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}
module.exports = function (_ref) {
    var _ref$store = _ref.store, store = _ref$store === undefined ? require('../utils/store') : _ref$store;
    return {
        namespace: 'todos',
        state: {
            todos: [],
            addNewTodoValue: '',
            loading: false
        },
        reducers: {
            receiveTodos: function receiveTodos(state, _ref2) {
                var todos = _ref2.todos;
                return _extends({}, state, { todos: todos });
            },
            receiveTodo: function receiveTodo(state, _ref3) {
                var todo = _ref3.todo;
                var todos = [].concat(_toConsumableArray(state.todos), [todo]);
                return _extends({}, state, {
                    todos: todos,
                    addNewTodoValue: ''
                });
            },
            receiveTodoUpdate: function receiveTodoUpdate(state, _ref4) {
                var todo = _ref4.todo;
                var todos = state.todos.slice();
                var todoIndex = state.todos.findIndex(function (t) {
                    return t.uuid === todo.uuid;
                });
                todos[todoIndex] = todo;
                return _extends({}, state, { todos: todos });
            },
            setNewTodoValue: function setNewTodoValue(state, _ref5) {
                var value = _ref5.value;
                return _extends({}, state, { addNewTodoValue: value });
            },
            setLoading: function setLoading(state, _ref6) {
                var loading = _ref6.loading;
                return _extends({}, state, { loading: loading });
            }
        },
        effects: {
            requestTodos: function requestTodos(state, payload, send, done) {
                send('todos:setLoading', { loading: true }, done);
                return store.getAll('todos').then(function (todos) {
                    send('todos:setLoading', { loading: false }, done);
                    send('todos:receiveTodos', { todos: todos }, done);
                });
            },
            addTodo: function addTodo(state, payload, send, done) {
                send('todos:setLoading', { loading: true }, done);
                var todo = {
                    complete: false,
                    title: state.addNewTodoValue,
                    uuid: Math.random()
                };
                return store.add('todos', todo).then(function () {
                    send('todos:setLoading', { loading: false }, done);
                    send('todos:receiveTodo', { todo: todo }, done);
                });
            },
            updateTodo: function updateTodo(state, payload, send, done) {
                send('todos:receiveTodoUpdate', { todo: payload.todo }, done);
                var todoIndex = state.todos.findIndex(function (t) {
                    return t.uuid === payload.todo.uuid;
                });
                return store.replace('todos', todoIndex, payload.todo).then(function () {
                    return done();
                });
            }
        }
    };
};
},{"../utils/store":"/Users/josephluck/apps/choo/src/utils/store.js"}],"/Users/josephluck/apps/choo/src/models/user.js":[function(require,module,exports){
'use strict';
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);
        return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
                        step('next', value);
                    }, function (err) {
                        step('throw', err);
                    });
                }
            }
            return step('next');
        });
    };
}
module.exports = function (_ref) {
    var _ref$passport = _ref.passport, passport = _ref$passport === undefined ? require('../transport/passport') : _ref$passport;
    return {
        namespace: 'user',
        state: { user: {} },
        reducers: {
            receiveUser: function receiveUser(state, _ref2) {
                var user = _ref2.user;
                return _extends({}, state, { user: user });
            }
        },
        effects: {
            fetch: function () {
                var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(state, payload, send, done) {
                    var user;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return passport.fetchUser({ userId: payload.userId });
                            case 2:
                                user = _context.sent;
                                _context.next = 5;
                                return send('user:receiveUser', { user: user });
                            case 5:
                            case 'end':
                                return _context.stop();
                            }
                        }
                    }, _callee, undefined);
                }));
                function fetch(_x, _x2, _x3, _x4) {
                    return _ref3.apply(this, arguments);
                }
                return fetch;
            }()
        }
    };
};
},{"../transport/passport":"/Users/josephluck/apps/choo/src/transport/passport.js"}],"/Users/josephluck/apps/choo/src/node_modules/assert/assert.js":[function(require,module,exports){
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// when used in node, this will actually load the util module we depend on
// versus loading the builtin util module as happens otherwise
// this is a bug in node module loading as far as I am concerned
var util = require('util/');

var pSlice = Array.prototype.slice;
var hasOwn = Object.prototype.hasOwnProperty;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
  else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = stackStartFunction.name;
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (util.isUndefined(value)) {
    return '' + value;
  }
  if (util.isNumber(value) && !isFinite(value)) {
    return value.toString();
  }
  if (util.isFunction(value) || util.isRegExp(value)) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (util.isString(s)) {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function getMessage(self) {
  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
         self.operator + ' ' +
         truncate(JSON.stringify(self.expected, replacer), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!util.isObject(actual) && !util.isObject(expected)) {
    return actual == expected;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b)) {
    return a === b;
  }
  var aIsArgs = isArguments(a),
      bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  var ka = objectKeys(a),
      kb = objectKeys(b),
      key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (util.isString(expected)) {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

},{"util/":"/Users/josephluck/apps/choo/src/node_modules/util/util.js"}],"/Users/josephluck/apps/choo/src/node_modules/barracks/apply-hook.js":[function(require,module,exports){
module.exports = applyHook

// apply arguments onto an array of functions, useful for hooks
// (arr, any?, any?, any?, any?, any?) -> null
function applyHook (arr, arg1, arg2, arg3, arg4, arg5) {
  arr.forEach(function (fn) {
    fn(arg1, arg2, arg3, arg4, arg5)
  })
}

},{}],"/Users/josephluck/apps/choo/src/node_modules/barracks/index.js":[function(require,module,exports){
var mutate = require('xtend/mutable')
var nanotick = require('nanotick')
var assert = require('assert')
var xtend = require('xtend')

var applyHook = require('./apply-hook')

module.exports = dispatcher

// initialize a new barracks instance
// obj -> obj
function dispatcher (hooks) {
  hooks = hooks || {}
  assert.equal(typeof hooks, 'object', 'barracks: hooks should be undefined or an object')

  var onStateChangeHooks = []
  var onActionHooks = []
  var onErrorHooks = []

  var subscriptionWraps = []
  var initialStateWraps = []
  var reducerWraps = []
  var effectWraps = []

  use(hooks)

  var reducersCalled = false
  var effectsCalled = false
  var stateCalled = false
  var subsCalled = false
  var stopped = false

  var subscriptions = start._subscriptions = {}
  var reducers = start._reducers = {}
  var effects = start._effects = {}
  var models = start._models = []
  var _state = {}

  var tick = nanotick()

  start.model = setModel
  start.state = getState
  start.start = start
  start.stop = stop
  start.use = use

  return start

  // push an object of hooks onto an array
  // obj -> null
  function use (hooks) {
    assert.equal(typeof hooks, 'object', 'barracks.use: hooks should be an object')
    assert.ok(!hooks.onError || typeof hooks.onError === 'function', 'barracks.use: onError should be undefined or a function')
    assert.ok(!hooks.onAction || typeof hooks.onAction === 'function', 'barracks.use: onAction should be undefined or a function')
    assert.ok(!hooks.onStateChange || typeof hooks.onStateChange === 'function', 'barracks.use: onStateChange should be undefined or a function')

    if (hooks.onStateChange) onStateChangeHooks.push(hooks.onStateChange)
    if (hooks.onError) onErrorHooks.push(wrapOnError(hooks.onError))
    if (hooks.onAction) onActionHooks.push(hooks.onAction)
    if (hooks.wrapSubscriptions) subscriptionWraps.push(hooks.wrapSubscriptions)
    if (hooks.wrapInitialState) initialStateWraps.push(hooks.wrapInitialState)
    if (hooks.wrapReducers) reducerWraps.push(hooks.wrapReducers)
    if (hooks.wrapEffects) effectWraps.push(hooks.wrapEffects)
    if (hooks.models) hooks.models.forEach(setModel)
  }

  // push a model to be initiated
  // obj -> null
  function setModel (model) {
    assert.equal(typeof model, 'object', 'barracks.store.model: model should be an object')
    models.push(model)
  }

  // get the current state from the store
  // obj? -> obj
  function getState (opts) {
    opts = opts || {}
    assert.equal(typeof opts, 'object', 'barracks.store.state: opts should be an object')

    var state = opts.state
    if (!opts.state && opts.freeze === false) return xtend(_state)
    else if (!opts.state) return Object.freeze(xtend(_state))
    assert.equal(typeof state, 'object', 'barracks.store.state: state should be an object')

    var namespaces = []
    var newState = {}

    // apply all fields from the model, and namespaced fields from the passed
    // in state
    models.forEach(function (model) {
      var ns = model.namespace
      namespaces.push(ns)
      var modelState = model.state || {}
      if (ns) {
        newState[ns] = newState[ns] || {}
        apply(ns, modelState, newState)
        newState[ns] = xtend(newState[ns], state[ns])
      } else {
        mutate(newState, modelState)
      }
    })

    // now apply all fields that weren't namespaced from the passed in state
    Object.keys(state).forEach(function (key) {
      if (namespaces.indexOf(key) !== -1) return
      newState[key] = state[key]
    })

    var tmpState = xtend(_state, xtend(state, newState))
    var wrappedState = wrapHook(tmpState, initialStateWraps)

    return (opts.freeze === false)
      ? wrappedState
      : Object.freeze(wrappedState)
  }

  // initialize the store hooks, get the send() function
  // obj? -> fn
  function start (opts) {
    opts = opts || {}
    assert.equal(typeof opts, 'object', 'barracks.store.start: opts should be undefined or an object')

    // register values from the models
    models.forEach(function (model) {
      var ns = model.namespace
      if (!stateCalled && model.state && opts.state !== false) {
        var modelState = model.state || {}
        if (ns) {
          _state[ns] = _state[ns] || {}
          apply(ns, modelState, _state)
        } else {
          mutate(_state, modelState)
        }
      }
      if (!reducersCalled && model.reducers && opts.reducers !== false) {
        apply(ns, model.reducers, reducers, function (cb) {
          return wrapHook(cb, reducerWraps)
        })
      }
      if (!effectsCalled && model.effects && opts.effects !== false) {
        apply(ns, model.effects, effects, function (cb) {
          return wrapHook(cb, effectWraps)
        })
      }
      if (!subsCalled && model.subscriptions && opts.subscriptions !== false) {
        apply(ns, model.subscriptions, subscriptions, function (cb, key) {
          var send = createSend('subscription: ' + (ns ? ns + ':' + key : key))
          cb = wrapHook(cb, subscriptionWraps)
          cb(send, function (err) {
            applyHook(onErrorHooks, err, _state, createSend)
          })
          return cb
        })
      }
    })

    // the state wrap is special because we want to operate on the full
    // state rather than indvidual chunks, so we apply it outside the loop
    if (!stateCalled && opts.state !== false) {
      _state = wrapHook(_state, initialStateWraps)
    }

    if (!opts.noSubscriptions) subsCalled = true
    if (!opts.noReducers) reducersCalled = true
    if (!opts.noEffects) effectsCalled = true
    if (!opts.noState) stateCalled = true

    if (!onErrorHooks.length) onErrorHooks.push(wrapOnError(defaultOnError))

    return createSend

    // call an action from a view
    // (str, bool?) -> (str, any?, fn?) -> null
    function createSend (selfName, callOnError) {
      assert.equal(typeof selfName, 'string', 'barracks.store.start.createSend: selfName should be a string')
      assert.ok(!callOnError || typeof callOnError === 'boolean', 'barracks.store.start.send: callOnError should be undefined or a boolean')

      return function send (name, data, cb) {
        if (!cb && !callOnError) {
          cb = data
          data = null
        }
        data = (typeof data === 'undefined' ? null : data)

        assert.equal(typeof name, 'string', 'barracks.store.start.send: name should be a string')
        assert.ok(!cb || typeof cb === 'function', 'barracks.store.start.send: cb should be a function')

        var done = callOnError ? onErrorCallback : cb
        _send(name, data, selfName, done)

        function onErrorCallback (err) {
          err = err || null
          if (err) {
            applyHook(onErrorHooks, err, _state, function createSend (selfName) {
              return function send (name, data) {
                assert.equal(typeof name, 'string', 'barracks.store.start.send: name should be a string')
                data = (typeof data === 'undefined' ? null : data)
                _send(name, data, selfName, done)
              }
            })
          }
        }
      }
    }

    // call an action
    // (str, str, any, fn) -> null
    function _send (name, data, caller, cb) {
      if (stopped) return

      assert.equal(typeof name, 'string', 'barracks._send: name should be a string')
      assert.equal(typeof caller, 'string', 'barracks._send: caller should be a string')
      assert.equal(typeof cb, 'function', 'barracks._send: cb should be a function')

      ;(tick(function () {
        var reducersCalled = false
        var effectsCalled = false
        var newState = xtend(_state)

        if (onActionHooks.length) {
          applyHook(onActionHooks, _state, data, name, caller, createSend)
        }

        // validate if a namespace exists. Namespaces are delimited by ':'.
        var actionName = name
        if (/:/.test(name)) {
          var arr = name.split(':')
          var ns = arr.shift()
          actionName = arr.join(':')
        }

        var _reducers = ns ? reducers[ns] : reducers
        if (_reducers && _reducers[actionName]) {
          if (ns) {
            var reducedState = _reducers[actionName](_state[ns], data)
            newState[ns] = xtend(_state[ns], reducedState)
          } else {
            mutate(newState, reducers[actionName](_state, data))
          }
          reducersCalled = true
          if (onStateChangeHooks.length) {
            applyHook(onStateChangeHooks, newState, data, _state, actionName, createSend)
          }
          _state = newState
          cb(null, newState)
        }

        var _effects = ns ? effects[ns] : effects
        if (!reducersCalled && _effects && _effects[actionName]) {
          var send = createSend('effect: ' + name)
          if (ns) _effects[actionName](_state[ns], data, send, cb)
          else _effects[actionName](_state, data, send, cb)
          effectsCalled = true
        }

        if (!reducersCalled && !effectsCalled) {
          throw new Error('Could not find action ' + actionName)
        }
      }))()
    }
  }

  // stop an app, essentially turns
  // all send() calls into no-ops.
  // () -> null
  function stop () {
    stopped = true
  }
}

// compose an object conditionally
// optionally contains a namespace
// which is used to nest properties.
// (str, obj, obj, fn?) -> null
function apply (ns, source, target, wrap) {
  if (ns && !target[ns]) target[ns] = {}
  Object.keys(source).forEach(function (key) {
    var cb = wrap ? wrap(source[key], key) : source[key]
    if (ns) target[ns][key] = cb
    else target[key] = cb
  })
}

// handle errors all the way at the top of the trace
// err? -> null
function defaultOnError (err) {
  throw err
}

function wrapOnError (onError) {
  return function onErrorWrap (err, state, createSend) {
    if (err) onError(err, state, createSend)
  }
}

// take a apply an array of transforms onto a value. The new value
// must be returned synchronously from the transform
// (any, [fn]) -> any
function wrapHook (value, transforms) {
  transforms.forEach(function (transform) {
    value = transform(value)
  })
  return value
}

},{"./apply-hook":"/Users/josephluck/apps/choo/src/node_modules/barracks/apply-hook.js","assert":"/Users/josephluck/apps/choo/src/node_modules/assert/assert.js","nanotick":"/Users/josephluck/apps/choo/src/node_modules/nanotick/index.js","xtend":"/Users/josephluck/apps/choo/src/node_modules/xtend/immutable.js","xtend/mutable":"/Users/josephluck/apps/choo/src/node_modules/xtend/mutable.js"}],"/Users/josephluck/apps/choo/src/node_modules/bel/index.js":[function(require,module,exports){
var document = require('global/document')
var hyperx = require('hyperx')
var onload = require('on-load')

var SVGNS = 'http://www.w3.org/2000/svg'
var XLINKNS = 'http://www.w3.org/1999/xlink'

var BOOL_PROPS = {
  autofocus: 1,
  checked: 1,
  defaultchecked: 1,
  disabled: 1,
  formnovalidate: 1,
  indeterminate: 1,
  readonly: 1,
  required: 1,
  selected: 1,
  willvalidate: 1
}
var SVG_TAGS = [
  'svg',
  'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
  'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile',
  'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix',
  'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting',
  'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB',
  'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode',
  'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting',
  'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face',
  'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri',
  'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line',
  'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath',
  'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect',
  'set', 'stop', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref',
  'tspan', 'use', 'view', 'vkern'
]

function belCreateElement (tag, props, children) {
  var el

  // If an svg tag, it needs a namespace
  if (SVG_TAGS.indexOf(tag) !== -1) {
    props.namespace = SVGNS
  }

  // If we are using a namespace
  var ns = false
  if (props.namespace) {
    ns = props.namespace
    delete props.namespace
  }

  // Create the element
  if (ns) {
    el = document.createElementNS(ns, tag)
  } else {
    el = document.createElement(tag)
  }

  // If adding onload events
  if (props.onload || props.onunload) {
    var load = props.onload || function () {}
    var unload = props.onunload || function () {}
    onload(el, function belOnload () {
      load(el)
    }, function belOnunload () {
      unload(el)
    },
    // We have to use non-standard `caller` to find who invokes `belCreateElement`
    belCreateElement.caller.caller.caller)
    delete props.onload
    delete props.onunload
  }

  // Create the properties
  for (var p in props) {
    if (props.hasOwnProperty(p)) {
      var key = p.toLowerCase()
      var val = props[p]
      // Normalize className
      if (key === 'classname') {
        key = 'class'
        p = 'class'
      }
      // The for attribute gets transformed to htmlFor, but we just set as for
      if (p === 'htmlFor') {
        p = 'for'
      }
      // If a property is boolean, set itself to the key
      if (BOOL_PROPS[key]) {
        if (val === 'true') val = key
        else if (val === 'false') continue
      }
      // If a property prefers being set directly vs setAttribute
      if (key.slice(0, 2) === 'on') {
        el[p] = val
      } else {
        if (ns) {
          if (p === 'xlink:href') {
            el.setAttributeNS(XLINKNS, p, val)
          } else if (/^xmlns($|:)/i.test(p)) {
            // skip xmlns definitions
          } else {
            el.setAttributeNS(null, p, val)
          }
        } else {
          el.setAttribute(p, val)
        }
      }
    }
  }

  function appendChild (childs) {
    if (!Array.isArray(childs)) return
    for (var i = 0; i < childs.length; i++) {
      var node = childs[i]
      if (Array.isArray(node)) {
        appendChild(node)
        continue
      }

      if (typeof node === 'number' ||
        typeof node === 'boolean' ||
        node instanceof Date ||
        node instanceof RegExp) {
        node = node.toString()
      }

      if (typeof node === 'string') {
        if (el.lastChild && el.lastChild.nodeName === '#text') {
          el.lastChild.nodeValue += node
          continue
        }
        node = document.createTextNode(node)
      }

      if (node && node.nodeType) {
        el.appendChild(node)
      }
    }
  }
  appendChild(children)

  return el
}

module.exports = hyperx(belCreateElement)
module.exports.default = module.exports
module.exports.createElement = belCreateElement

},{"global/document":"/Users/josephluck/apps/choo/src/node_modules/global/document.js","hyperx":"/Users/josephluck/apps/choo/src/node_modules/hyperx/index.js","on-load":"/Users/josephluck/apps/choo/src/node_modules/on-load/index.js"}],"/Users/josephluck/apps/choo/src/node_modules/browser-resolve/empty.js":[function(require,module,exports){

},{}],"/Users/josephluck/apps/choo/src/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Users/josephluck/apps/choo/src/node_modules/choo-log/index.js":[function(require,module,exports){
const padRight = require('pad-right')
const padLeft = require('pad-left')
const browser = require('detect-browser')

module.exports = chooLog

// colors from http://clrs.cc/
const colors = {
  green: '#2ECC40',
  red: '#FF4136',
  blue: '#7FDBFF',
  lightGray: '#DDDDDD',
  gray: '#AAAAAA',
  yellow: '#FFDC00',
  default: '#293037'
}

const paddings = {
  type: 7,
  actionType: 7
}

// Development logger for choo
// null -> obj
function chooLog () {
  const startTime = Date.now()

  return {
    onAction: onAction,
    onError: onError,
    onStateChange: onStateChange
  }

  // handle onAction() calls
  // (obj, obj, str, str, fn) -> null
  function onAction (state, data, name, trace, createSend) {
    const split = trace.split(':')
    const actionType = split[0].trim()
    const caller = split[1].trim()

    const line = []
    colorify('lightGray', renderTime(startTime) + ' ', line)
    colorify('gray', renderType('action') + ' ', line)
    colorify('gray', renderActionType(actionType) + ' ', line)

    colorify('default', "'" + caller + "'", line)
    colorify('default', '->', line)
    colorify('default', "'" + name + "'", line)

    if (groupCollapseSupported()) {
      logGroup(line)
      logInner(name, data)
      console.groupEnd()
    } else {
      log(line)
      logInner(name, data)
    }

    function logInner (name, action) {
      console.log('action name:', name)
      console.log('data:', data)
    }
  }

  // handle onError() calls
  // (str, obj, fn) -> null
  function onError (err, state, createSend) {
    const line = []
    colorify('lightGray', renderTime(startTime) + ' ', line)
    colorify('red', renderType('error') + ' ', line)
    colorify('default', err.message + ' ', line)

    if (groupCollapseSupported()) {
      logGroup(line)
      logInner(err)
      console.groupEnd()
    } else {
      log(line)
      logInner(err)
    }

    function logInner (err) {
      console.error(err)
    }
  }

  // handle onStateChange() calls
  // (obj, obj, obj, fn) -> null
  function onStateChange (state, data, prev, createSend) {
    const line = []
    colorify('lightGray', renderTime(startTime) + ' ', line)
    colorify('gray', renderType('state') + ' ', line)

    if (groupCollapseSupported()) {
      logGroup(line)
      logInner(prev, state)
      console.groupEnd()
    } else {
      log(line)
      logInner(prev, state)
    }

    function logInner (prev, state) {
      console.log('prev ', prev)
      console.log('state', state)
    }
  }
}

// create a collapsedGroup log from an array
// str -> [str, str]
function logGroup (line) {
  console.groupCollapsed.apply(console, line)
}

// create a console log from an array
// str -> [str, str]
function log (line) {
  console.log.apply(console, line)
}

// indent message types
// str -> str
function renderType (msg) {
  const leftPad = paddings.type
  const rightPad = paddings.actionType + leftPad + 2
  return (msg === 'state' || msg === 'error')
    ? padRight(padLeft(msg, leftPad, ' '), rightPad, ' ')
    : padLeft(msg, leftPad, ' ')
}

// indent action types
// str -> str
function renderActionType (msg) {
  const padding = paddings.actionType
  if (msg === 'subscription') msg = 'subs'
  return padRight(msg, padding, ' ')
}

// toHtml + chalk
// (str, str, [str, ...str]) -> [str, str]
function colorify (color, line, prev) {
  var newLine = '%c' + line
  var newStyle = 'color: ' + colors[color] + ';'

  if (!prev) {
    prev = [ newLine, newStyle ]
    return prev
  }

  if (!prev[0]) prev[0] = ''
  prev[0] += ' ' + newLine

  if (browser.name === 'firefox') {
    if (!prev[1]) prev[1] = ''
    prev[1] += ' ' + newStyle
  } else {
    prev.push(newStyle)
  }
  return prev
}

// render the time
// num -> null
function renderTime (startTime) {
  var offset = String(Math.round((Date.now() - startTime) / 1000) % 10000)
  var msg = '[' + padLeft(offset, 4, '0') + ']'
  return msg
}

function groupCollapseSupported () {
  return console.groupCollapsed && browser.name !== 'firefox'
}

},{"detect-browser":"/Users/josephluck/apps/choo/src/node_modules/detect-browser/browser.js","pad-left":"/Users/josephluck/apps/choo/src/node_modules/pad-left/index.js","pad-right":"/Users/josephluck/apps/choo/src/node_modules/pad-right/index.js"}],"/Users/josephluck/apps/choo/src/node_modules/choo/html.js":[function(require,module,exports){
module.exports = require('yo-yo')

},{"yo-yo":"/Users/josephluck/apps/choo/src/node_modules/yo-yo/index.js"}],"/Users/josephluck/apps/choo/src/node_modules/choo/index.js":[function(require,module,exports){
const createLocation = require('sheet-router/create-location')
const onHistoryChange = require('sheet-router/history')
const sheetRouter = require('sheet-router')
const onHref = require('sheet-router/href')
const walk = require('sheet-router/walk')
const mutate = require('xtend/mutable')
const barracks = require('barracks')
const nanoraf = require('nanoraf')
const assert = require('assert')
const xtend = require('xtend')
const yo = require('yo-yo')

module.exports = choo

// framework for creating sturdy web applications
// null -> fn
function choo (opts) {
  opts = opts || {}

  const _store = start._store = barracks()
  var _router = start._router = null
  var _routerOpts = null
  var _rootNode = null
  var _routes = null
  var _frame = null

  _store.use({ onStateChange: render })
  _store.use(opts)

  start.toString = toString
  start.router = router
  start.model = model
  start.start = start
  start.use = use

  return start

  // render the application to a string
  // (str, obj) -> str
  function toString (route, serverState) {
    serverState = serverState || {}
    assert.equal(typeof route, 'string', 'choo.app.toString: route must be a string')
    assert.equal(typeof serverState, 'object', 'choo.app.toString: serverState must be an object')
    _store.start({ subscriptions: false, reducers: false, effects: false })

    const state = _store.state({ state: serverState })
    const router = createRouter(_routerOpts, _routes, createSend)
    const tree = router(route, state)
    return tree.outerHTML || tree.toString()

    function createSend () {
      return function send () {
        assert.ok(false, 'choo: send() cannot be called from Node')
      }
    }
  }

  // start the application
  // (str?, obj?) -> DOMNode
  function start () {
    _store.model(createLocationModel(opts))
    const createSend = _store.start(opts)
    _router = start._router = createRouter(_routerOpts, _routes, createSend)
    const state = _store.state({state: {}})

    const tree = _router(state.location.href, state)
    assert.ok(tree, 'choo.start: the router should always return a valid DOM node')
    assert.equal(typeof tree, 'object', 'choo.start: the router should always return a valid DOM node')
    _rootNode = tree
    tree.done = done

    return tree

    // allow a 'mount' function to return the new node
    // html -> null
    function done (newNode) {
      _rootNode = newNode
    }
  }

  // update the DOM after every state mutation
  // (obj, obj, obj, str, fn) -> null
  function render (state, data, prev, name, createSend) {
    if (!_frame) {
      _frame = nanoraf(function (state, prev) {
        const newTree = _router(state.location.href, state, prev)
        _rootNode = yo.update(_rootNode, newTree)
      })
    }
    _frame(state, prev)
  }

  // register all routes on the router
  // (str?, [fn|[fn]]) -> obj
  function router (defaultRoute, routes) {
    _routerOpts = defaultRoute
    _routes = routes
  }

  // create a new model
  // (str?, obj) -> null
  function model (model) {
    _store.model(model)
  }

  // register a plugin
  // (obj) -> null
  function use (hooks) {
    assert.equal(typeof hooks, 'object', 'choo.use: hooks should be an object')
    _store.use(hooks)
  }

  // create a new router with a custom `createRoute()` function
  // (str?, obj) -> null
  function createRouter (routerOpts, routes, createSend) {
    var prev = null
    if (!routes) {
      routes = routerOpts
      routerOpts = {}
    }
    routerOpts = mutate({ thunk: 'match' }, routerOpts)
    const router = sheetRouter(routerOpts, routes)
    walk(router, wrap)

    return router

    function wrap (route, handler) {
      const send = createSend('view: ' + route, true)
      return function chooWrap (params) {
        return function (state) {
          // TODO(yw): find a way to wrap handlers so params shows up in state
          const nwState = xtend(state)
          nwState.location = xtend(nwState.location, { params: params })

          const nwPrev = prev
          prev = nwState // save for next time

          if (opts.freeze !== false) Object.freeze(nwState)
          return handler(nwState, nwPrev, send)
        }
      }
    }
  }
}

// application location model
// obj -> obj
function createLocationModel (opts) {
  return {
    namespace: 'location',
    state: mutate(createLocation(), { params: {} }),
    subscriptions: createSubscriptions(opts),
    effects: { set: setLocation, touch: touchLocation },
    reducers: { update: updateLocation }
  }

  // update the location on the state
  // try and jump to an anchor on the page if it exists
  // (obj, obj) -> obj
  function updateLocation (state, data) {
    if (opts.history !== false && data.hash && data.hash !== state.hash) {
      try {
        const el = document.querySelector(data.hash)
        if (el) el.scrollIntoView(true)
      } catch (e) {
        return data
      }
    }
    return data
  }

  // update internal location only
  // (str, obj, fn, fn) -> null
  function touchLocation (state, data, send, done) {
    const newLocation = createLocation(state, data)
    send('location:update', newLocation, done)
  }

  // set a new location e.g. "/foo/bar#baz?beep=boop"
  // (str, obj, fn, fn) -> null
  function setLocation (state, data, send, done) {
    const newLocation = createLocation(state, data)

    // update url bar if it changed
    if (opts.history !== false && newLocation.href !== state.href) {
      window.history.pushState({}, null, newLocation.href)
    }

    send('location:update', newLocation, done)
  }

  function createSubscriptions (opts) {
    const subs = {}

    if (opts.history !== false) {
      subs.handleHistory = function (send, done) {
        onHistoryChange(function navigate (href) {
          send('location:touch', href, done)
        })
      }
    }

    if (opts.href !== false) {
      subs.handleHref = function (send, done) {
        onHref(function navigate (location) {
          send('location:set', location, done)
        })
      }
    }

    return subs
  }
}

},{"assert":"/Users/josephluck/apps/choo/src/node_modules/assert/assert.js","barracks":"/Users/josephluck/apps/choo/src/node_modules/barracks/index.js","nanoraf":"/Users/josephluck/apps/choo/src/node_modules/nanoraf/index.js","sheet-router":"/Users/josephluck/apps/choo/src/node_modules/sheet-router/index.js","sheet-router/create-location":"/Users/josephluck/apps/choo/src/node_modules/sheet-router/create-location.js","sheet-router/history":"/Users/josephluck/apps/choo/src/node_modules/sheet-router/history.js","sheet-router/href":"/Users/josephluck/apps/choo/src/node_modules/sheet-router/href.js","sheet-router/walk":"/Users/josephluck/apps/choo/src/node_modules/sheet-router/walk.js","xtend":"/Users/josephluck/apps/choo/src/node_modules/xtend/immutable.js","xtend/mutable":"/Users/josephluck/apps/choo/src/node_modules/xtend/mutable.js","yo-yo":"/Users/josephluck/apps/choo/src/node_modules/yo-yo/index.js"}],"/Users/josephluck/apps/choo/src/node_modules/detect-browser/browser.js":[function(require,module,exports){
var detectBrowser = require('./lib/detectBrowser');

module.exports = detectBrowser(navigator.userAgent);

},{"./lib/detectBrowser":"/Users/josephluck/apps/choo/src/node_modules/detect-browser/lib/detectBrowser.js"}],"/Users/josephluck/apps/choo/src/node_modules/detect-browser/lib/detectBrowser.js":[function(require,module,exports){
module.exports = function detectBrowser(userAgentString) {
  var browsers = [
    [ 'edge', /Edge\/([0-9\._]+)/ ],
    [ 'chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ],
    [ 'crios', /CriOS\/([0-9\.]+)(:?\s|$)/ ],
    [ 'firefox', /Firefox\/([0-9\.]+)(?:\s|$)/ ],
    [ 'opera', /Opera\/([0-9\.]+)(?:\s|$)/ ],
    [ 'opera', /OPR\/([0-9\.]+)(:?\s|$)$/ ],
    [ 'ie', /Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/ ],
    [ 'ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/ ],
    [ 'ie', /MSIE\s(7\.0)/ ],
    [ 'bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/ ],
    [ 'android', /Android\s([0-9\.]+)/ ],
    [ 'ios', /iPad.*Version\/([0-9\._]+)/ ],
    [ 'ios',  /iPhone.*Version\/([0-9\._]+)/ ],
    [ 'safari', /Version\/([0-9\._]+).*Safari/ ]
  ];

  var i = 0, mapped =[];
  for (i = 0; i < browsers.length; i++) {
    browsers[i] = createMatch(browsers[i]);
    if (isMatch(browsers[i])) {
      mapped.push(browsers[i]);
    }
  }

  var match = mapped[0];
  var parts = match && match[3].split(/[._]/).slice(0,3);

  while (parts && parts.length < 3) {
    parts.push('0');
  }

  function createMatch(pair) {
    return pair.concat(pair[1].exec(userAgentString));
  }

  function isMatch(pair) {
    return !!pair[2];
  }

  // return the name and version
  return {
    name: match && match[0],
    version: parts && parts.join('.'),
  };
};

},{}],"/Users/josephluck/apps/choo/src/node_modules/global/document.js":[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-document":"/Users/josephluck/apps/choo/src/node_modules/browser-resolve/empty.js"}],"/Users/josephluck/apps/choo/src/node_modules/global/window.js":[function(require,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/josephluck/apps/choo/src/node_modules/hyperscript-attribute-to-property/index.js":[function(require,module,exports){
module.exports = attributeToProperty

var transform = {
  'class': 'className',
  'for': 'htmlFor',
  'http-equiv': 'httpEquiv'
}

function attributeToProperty (h) {
  return function (tagName, attrs, children) {
    for (var attr in attrs) {
      if (attr in transform) {
        attrs[transform[attr]] = attrs[attr]
        delete attrs[attr]
      }
    }
    return h(tagName, attrs, children)
  }
}

},{}],"/Users/josephluck/apps/choo/src/node_modules/hyperx/index.js":[function(require,module,exports){
var attrToProp = require('hyperscript-attribute-to-property')

var VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4
var ATTR_KEY = 5, ATTR_KEY_W = 6
var ATTR_VALUE_W = 7, ATTR_VALUE = 8
var ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10
var ATTR_EQ = 11, ATTR_BREAK = 12

module.exports = function (h, opts) {
  h = attrToProp(h)
  if (!opts) opts = {}
  var concat = opts.concat || function (a, b) {
    return String(a) + String(b)
  }

  return function (strings) {
    var state = TEXT, reg = ''
    var arglen = arguments.length
    var parts = []

    for (var i = 0; i < strings.length; i++) {
      if (i < arglen - 1) {
        var arg = arguments[i+1]
        var p = parse(strings[i])
        var xstate = state
        if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE
        if (xstate === ATTR) xstate = ATTR_KEY
        p.push([ VAR, xstate, arg ])
        parts.push.apply(parts, p)
      } else parts.push.apply(parts, parse(strings[i]))
    }

    var tree = [null,{},[]]
    var stack = [[tree,-1]]
    for (var i = 0; i < parts.length; i++) {
      var cur = stack[stack.length-1][0]
      var p = parts[i], s = p[0]
      if (s === OPEN && /^\//.test(p[1])) {
        var ix = stack[stack.length-1][1]
        if (stack.length > 1) {
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === OPEN) {
        var c = [p[1],{},[]]
        cur[2].push(c)
        stack.push([c,cur[2].length-1])
      } else if (s === ATTR_KEY || (s === VAR && p[1] === ATTR_KEY)) {
        var key = ''
        var copyKey
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_KEY) {
            key = concat(key, parts[i][1])
          } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {
            if (typeof parts[i][2] === 'object' && !key) {
              for (copyKey in parts[i][2]) {
                if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {
                  cur[1][copyKey] = parts[i][2][copyKey]
                }
              }
            } else {
              key = concat(key, parts[i][2])
            }
          } else break
        }
        if (parts[i][0] === ATTR_EQ) i++
        var j = i
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][1])
            else cur[1][key] = concat(cur[1][key], parts[i][1])
          } else if (parts[i][0] === VAR
          && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][2])
            else cur[1][key] = concat(cur[1][key], parts[i][2])
          } else {
            if (key.length && !cur[1][key] && i === j
            && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {
              // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes
              // empty string is falsy, not well behaved value in browser
              cur[1][key] = key.toLowerCase()
            }
            break
          }
        }
      } else if (s === ATTR_KEY) {
        cur[1][p[1]] = true
      } else if (s === VAR && p[1] === ATTR_KEY) {
        cur[1][p[2]] = true
      } else if (s === CLOSE) {
        if (selfClosing(cur[0]) && stack.length) {
          var ix = stack[stack.length-1][1]
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === VAR && p[1] === TEXT) {
        if (p[2] === undefined || p[2] === null) p[2] = ''
        else if (!p[2]) p[2] = concat('', p[2])
        if (Array.isArray(p[2][0])) {
          cur[2].push.apply(cur[2], p[2])
        } else {
          cur[2].push(p[2])
        }
      } else if (s === TEXT) {
        cur[2].push(p[1])
      } else if (s === ATTR_EQ || s === ATTR_BREAK) {
        // no-op
      } else {
        throw new Error('unhandled: ' + s)
      }
    }

    if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) {
      tree[2].shift()
    }

    if (tree[2].length > 2
    || (tree[2].length === 2 && /\S/.test(tree[2][1]))) {
      throw new Error(
        'multiple root elements must be wrapped in an enclosing tag'
      )
    }
    if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string'
    && Array.isArray(tree[2][0][2])) {
      tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2])
    }
    return tree[2][0]

    function parse (str) {
      var res = []
      if (state === ATTR_VALUE_W) state = ATTR
      for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i)
        if (state === TEXT && c === '<') {
          if (reg.length) res.push([TEXT, reg])
          reg = ''
          state = OPEN
        } else if (c === '>' && !quot(state)) {
          if (state === OPEN) {
            res.push([OPEN,reg])
          } else if (state === ATTR_KEY) {
            res.push([ATTR_KEY,reg])
          } else if (state === ATTR_VALUE && reg.length) {
            res.push([ATTR_VALUE,reg])
          }
          res.push([CLOSE])
          reg = ''
          state = TEXT
        } else if (state === TEXT) {
          reg += c
        } else if (state === OPEN && /\s/.test(c)) {
          res.push([OPEN, reg])
          reg = ''
          state = ATTR
        } else if (state === OPEN) {
          reg += c
        } else if (state === ATTR && /[\w-]/.test(c)) {
          state = ATTR_KEY
          reg = c
        } else if (state === ATTR && /\s/.test(c)) {
          if (reg.length) res.push([ATTR_KEY,reg])
          res.push([ATTR_BREAK])
        } else if (state === ATTR_KEY && /\s/.test(c)) {
          res.push([ATTR_KEY,reg])
          reg = ''
          state = ATTR_KEY_W
        } else if (state === ATTR_KEY && c === '=') {
          res.push([ATTR_KEY,reg],[ATTR_EQ])
          reg = ''
          state = ATTR_VALUE_W
        } else if (state === ATTR_KEY) {
          reg += c
        } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {
          res.push([ATTR_EQ])
          state = ATTR_VALUE_W
        } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
          res.push([ATTR_BREAK])
          if (/[\w-]/.test(c)) {
            reg += c
            state = ATTR_KEY
          } else state = ATTR
        } else if (state === ATTR_VALUE_W && c === '"') {
          state = ATTR_VALUE_DQ
        } else if (state === ATTR_VALUE_W && c === "'") {
          state = ATTR_VALUE_SQ
        } else if (state === ATTR_VALUE_DQ && c === '"') {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_SQ && c === "'") {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
          state = ATTR_VALUE
          i--
        } else if (state === ATTR_VALUE && /\s/.test(c)) {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ
        || state === ATTR_VALUE_DQ) {
          reg += c
        }
      }
      if (state === TEXT && reg.length) {
        res.push([TEXT,reg])
        reg = ''
      } else if (state === ATTR_VALUE && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_DQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_SQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_KEY) {
        res.push([ATTR_KEY,reg])
        reg = ''
      }
      return res
    }
  }

  function strfn (x) {
    if (typeof x === 'function') return x
    else if (typeof x === 'string') return x
    else if (x && typeof x === 'object') return x
    else return concat('', x)
  }
}

function quot (state) {
  return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ
}

var hasOwn = Object.prototype.hasOwnProperty
function has (obj, key) { return hasOwn.call(obj, key) }

var closeRE = RegExp('^(' + [
  'area', 'base', 'basefont', 'bgsound', 'br', 'col', 'command', 'embed',
  'frame', 'hr', 'img', 'input', 'isindex', 'keygen', 'link', 'meta', 'param',
  'source', 'track', 'wbr',
  // SVG TAGS
  'animate', 'animateTransform', 'circle', 'cursor', 'desc', 'ellipse',
  'feBlend', 'feColorMatrix', 'feComposite',
  'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap',
  'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR',
  'feGaussianBlur', 'feImage', 'feMergeNode', 'feMorphology',
  'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile',
  'feTurbulence', 'font-face-format', 'font-face-name', 'font-face-uri',
  'glyph', 'glyphRef', 'hkern', 'image', 'line', 'missing-glyph', 'mpath',
  'path', 'polygon', 'polyline', 'rect', 'set', 'stop', 'tref', 'use', 'view',
  'vkern'
].join('|') + ')(?:[\.#][a-zA-Z0-9\u007F-\uFFFF_:-]+)*$')
function selfClosing (tag) { return closeRE.test(tag) }

},{"hyperscript-attribute-to-property":"/Users/josephluck/apps/choo/src/node_modules/hyperscript-attribute-to-property/index.js"}],"/Users/josephluck/apps/choo/src/node_modules/insert-css/index.js":[function(require,module,exports){
var containers = []; // will store container HTMLElement references
var styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}

var usage = 'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';

function insertCss(css, options) {
    options = options || {};

    if (css === undefined) {
        throw new Error(usage);
    }

    var position = options.prepend === true ? 'prepend' : 'append';
    var container = options.container !== undefined ? options.container : document.querySelector('head');
    var containerId = containers.indexOf(container);

    // first time we see this container, create the necessary entries
    if (containerId === -1) {
        containerId = containers.push(container) - 1;
        styleElements[containerId] = {};
    }

    // try to get the correponding container + position styleElement, create it otherwise
    var styleElement;

    if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {
        styleElement = styleElements[containerId][position];
    } else {
        styleElement = styleElements[containerId][position] = createStyleElement();

        if (position === 'prepend') {
            container.insertBefore(styleElement, container.childNodes[0]);
        } else {
            container.appendChild(styleElement);
        }
    }

    // strip potential UTF-8 BOM if css was read from a file
    if (css.charCodeAt(0) === 0xFEFF) { css = css.substr(1, css.length); }

    // actually add the stylesheet
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText += css
    } else {
        styleElement.textContent += css;
    }

    return styleElement;
};

function createStyleElement() {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    return styleElement;
}

module.exports = insertCss;
module.exports.insertCss = insertCss;

},{}],"/Users/josephluck/apps/choo/src/node_modules/jwt-decode/lib/atob.js":[function(require,module,exports){
/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;

},{}],"/Users/josephluck/apps/choo/src/node_modules/jwt-decode/lib/base64_url_decode.js":[function(require,module,exports){
var atob = require('./atob');

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};

},{"./atob":"/Users/josephluck/apps/choo/src/node_modules/jwt-decode/lib/atob.js"}],"/Users/josephluck/apps/choo/src/node_modules/jwt-decode/lib/index.js":[function(require,module,exports){
'use strict';

var base64_url_decode = require('./base64_url_decode');

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new Error('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  return JSON.parse(base64_url_decode(token.split('.')[pos]));
};

},{"./base64_url_decode":"/Users/josephluck/apps/choo/src/node_modules/jwt-decode/lib/base64_url_decode.js"}],"/Users/josephluck/apps/choo/src/node_modules/morphdom/src/index.js":[function(require,module,exports){
'use strict';
// Create a range object for efficently rendering strings to elements.
var range;

var doc = typeof document !== 'undefined' && document;

var testEl = doc ?
    doc.body || doc.createElement('div') :
    {};

var NS_XHTML = 'http://www.w3.org/1999/xhtml';

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

// Fixes <https://github.com/patrick-steele-idem/morphdom/issues/32>
// (IE7+ support) <=IE7 does not support el.hasAttribute(name)
var hasAttributeNS;

if (testEl.hasAttributeNS) {
    hasAttributeNS = function(el, namespaceURI, name) {
        return el.hasAttributeNS(namespaceURI, name);
    };
} else if (testEl.hasAttribute) {
    hasAttributeNS = function(el, namespaceURI, name) {
        return el.hasAttribute(name);
    };
} else {
    hasAttributeNS = function(el, namespaceURI, name) {
        return !!el.getAttributeNode(name);
    };
}

function toElement(str) {
    if (!range && doc.createRange) {
        range = doc.createRange();
        range.selectNode(doc.body);
    }

    var fragment;
    if (range && range.createContextualFragment) {
        fragment = range.createContextualFragment(str);
    } else {
        fragment = doc.createElement('body');
        fragment.innerHTML = str;
    }
    return fragment.childNodes[0];
}

function syncBooleanAttrProp(fromEl, toEl, name) {
    if (fromEl[name] !== toEl[name]) {
        fromEl[name] = toEl[name];
        if (fromEl[name]) {
            fromEl.setAttribute(name, '');
        } else {
            fromEl.removeAttribute(name, '');
        }
    }
}

var specialElHandlers = {
    /**
     * Needed for IE. Apparently IE doesn't think that "selected" is an
     * attribute when reading over the attributes using selectEl.attributes
     */
    OPTION: function(fromEl, toEl) {
        syncBooleanAttrProp(fromEl, toEl, 'selected');
    },
    /**
     * The "value" attribute is special for the <input> element since it sets
     * the initial value. Changing the "value" attribute without changing the
     * "value" property will have no effect since it is only used to the set the
     * initial value.  Similar for the "checked" attribute, and "disabled".
     */
    INPUT: function(fromEl, toEl) {
        syncBooleanAttrProp(fromEl, toEl, 'checked');
        syncBooleanAttrProp(fromEl, toEl, 'disabled');

        if (fromEl.value !== toEl.value) {
            fromEl.value = toEl.value;
        }

        if (!hasAttributeNS(toEl, null, 'value')) {
            fromEl.removeAttribute('value');
        }
    },

    TEXTAREA: function(fromEl, toEl) {
        var newValue = toEl.value;
        if (fromEl.value !== newValue) {
            fromEl.value = newValue;
        }

        if (fromEl.firstChild) {
            // Needed for IE. Apparently IE sets the placeholder as the
            // node value and vise versa. This ignores an empty update.
            if (newValue === '' && fromEl.firstChild.nodeValue === fromEl.placeholder) {
                return;
            }

            fromEl.firstChild.nodeValue = newValue;
        }
    }
};

function noop() {}

/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */
function compareNodeNames(fromEl, toEl) {
    var fromNodeName = fromEl.nodeName;
    var toNodeName = toEl.nodeName;

    if (fromNodeName === toNodeName) {
        return true;
    }

    if (toEl.actualize &&
        fromNodeName.charCodeAt(0) < 91 && /* from tag name is upper case */
        toNodeName.charCodeAt(0) > 90 /* target tag name is lower case */) {
        // If the target element is a virtual DOM node then we may need to normalize the tag name
        // before comparing. Normal HTML elements that are in the "http://www.w3.org/1999/xhtml"
        // are converted to upper case
        return fromNodeName === toNodeName.toUpperCase();
    } else {
        return false;
    }
}

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
    return !namespaceURI || namespaceURI === NS_XHTML ?
        doc.createElement(name) :
        doc.createElementNS(namespaceURI, name);
}

/**
 * Loop over all of the attributes on the target node and make sure the original
 * DOM node has the same attributes. If an attribute found on the original node
 * is not on the new node then remove it from the original node.
 *
 * @param  {Element} fromNode
 * @param  {Element} toNode
 */
function morphAttrs(fromNode, toNode) {
    if (toNode.assignAttributes) {
        toNode.assignAttributes(fromNode);
    } else {
        var attrs = toNode.attributes;
        var i;
        var attr;
        var attrName;
        var attrNamespaceURI;
        var attrValue;
        var fromValue;

        for (i = attrs.length - 1; i >= 0; --i) {
            attr = attrs[i];
            attrName = attr.name;
            attrNamespaceURI = attr.namespaceURI;
            attrValue = attr.value;

            if (attrNamespaceURI) {
                attrName = attr.localName || attrName;
                fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);

                if (fromValue !== attrValue) {
                    fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
                }
            } else {
                fromValue = fromNode.getAttribute(attrName);

                if (fromValue !== attrValue) {
                    fromNode.setAttribute(attrName, attrValue);
                }
            }
        }

        // Remove any extra attributes found on the original DOM element that
        // weren't found on the target element.
        attrs = fromNode.attributes;

        for (i = attrs.length - 1; i >= 0; --i) {
            attr = attrs[i];
            if (attr.specified !== false) {
                attrName = attr.name;
                attrNamespaceURI = attr.namespaceURI;

                if (attrNamespaceURI) {
                    attrName = attr.localName || attrName;

                    if (!hasAttributeNS(toNode, attrNamespaceURI, attrName)) {
                        fromNode.removeAttributeNS(attrNamespaceURI, attrName);
                    }
                } else {
                    if (!hasAttributeNS(toNode, null, attrName)) {
                        fromNode.removeAttribute(attrName);
                    }
                }
            }
        }
    }
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while (curChild) {
        var nextChild = curChild.nextSibling;
        toEl.appendChild(curChild);
        curChild = nextChild;
    }
    return toEl;
}

function defaultGetNodeKey(node) {
    return node.id;
}

function morphdom(fromNode, toNode, options) {
    if (!options) {
        options = {};
    }

    if (typeof toNode === 'string') {
        if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML') {
            var toNodeHtml = toNode;
            toNode = doc.createElement('html');
            toNode.innerHTML = toNodeHtml;
        } else {
            toNode = toElement(toNode);
        }
    }

    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
    var onNodeAdded = options.onNodeAdded || noop;
    var onBeforeElUpdated = options.onBeforeElUpdated || noop;
    var onElUpdated = options.onElUpdated || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
    var childrenOnly = options.childrenOnly === true;

    // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
    var fromNodesLookup = {};
    var keyedRemovalList;

    function addKeyedRemoval(key) {
        if (keyedRemovalList) {
            keyedRemovalList.push(key);
        } else {
            keyedRemovalList = [key];
        }
    }

    function walkDiscardedChildNodes(node, skipKeyedNodes) {
        if (node.nodeType === ELEMENT_NODE) {
            var curChild = node.firstChild;
            while (curChild) {

                var key = undefined;

                if (skipKeyedNodes && (key = getNodeKey(curChild))) {
                    // If we are skipping keyed nodes then we add the key
                    // to a list so that it can be handled at the very end.
                    addKeyedRemoval(key);
                } else {
                    // Only report the node as discarded if it is not keyed. We do this because
                    // at the end we loop through all keyed elements that were unmatched
                    // and then discard them in one final pass.
                    onNodeDiscarded(curChild);
                    if (curChild.firstChild) {
                        walkDiscardedChildNodes(curChild, skipKeyedNodes);
                    }
                }

                curChild = curChild.nextSibling;
            }
        }
    }

    /**
     * Removes a DOM node out of the original DOM
     *
     * @param  {Node} node The node to remove
     * @param  {Node} parentNode The nodes parent
     * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
     * @return {undefined}
     */
    function removeNode(node, parentNode, skipKeyedNodes) {
        if (onBeforeNodeDiscarded(node) === false) {
            return;
        }

        if (parentNode) {
            parentNode.removeChild(node);
        }

        onNodeDiscarded(node);
        walkDiscardedChildNodes(node, skipKeyedNodes);
    }

    // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
    // function indexTree(root) {
    //     var treeWalker = document.createTreeWalker(
    //         root,
    //         NodeFilter.SHOW_ELEMENT);
    //
    //     var el;
    //     while((el = treeWalker.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }

    // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
    //
    // function indexTree(node) {
    //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
    //     var el;
    //     while((el = nodeIterator.nextNode())) {
    //         var key = getNodeKey(el);
    //         if (key) {
    //             fromNodesLookup[key] = el;
    //         }
    //     }
    // }

    function indexTree(node) {
        if (node.nodeType === ELEMENT_NODE) {
            var curChild = node.firstChild;
            while (curChild) {
                var key = getNodeKey(curChild);
                if (key) {
                    fromNodesLookup[key] = curChild;
                }

                // Walk recursively
                indexTree(curChild);

                curChild = curChild.nextSibling;
            }
        }
    }

    indexTree(fromNode);

    function handleNodeAdded(el) {
        onNodeAdded(el);

        var curChild = el.firstChild;
        while (curChild) {
            var nextSibling = curChild.nextSibling;

            var key = getNodeKey(curChild);
            if (key) {
                var unmatchedFromEl = fromNodesLookup[key];
                if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
                    curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
                    morphEl(unmatchedFromEl, curChild);
                }
            }

            handleNodeAdded(curChild);
            curChild = nextSibling;
        }
    }

    function morphEl(fromEl, toEl, childrenOnly) {
        var toElKey = getNodeKey(toEl);
        var curFromNodeKey;

        if (toElKey) {
            // If an element with an ID is being morphed then it is will be in the final
            // DOM so clear it out of the saved elements collection
            delete fromNodesLookup[toElKey];
        }

        if (toNode.isSameNode && toNode.isSameNode(fromNode)) {
            return;
        }

        if (!childrenOnly) {
            if (onBeforeElUpdated(fromEl, toEl) === false) {
                return;
            }

            morphAttrs(fromEl, toEl);
            onElUpdated(fromEl);

            if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
                return;
            }
        }

        if (fromEl.nodeName !== 'TEXTAREA') {
            var curToNodeChild = toEl.firstChild;
            var curFromNodeChild = fromEl.firstChild;
            var curToNodeKey;

            var fromNextSibling;
            var toNextSibling;
            var matchingFromEl;

            outer: while (curToNodeChild) {
                toNextSibling = curToNodeChild.nextSibling;
                curToNodeKey = getNodeKey(curToNodeChild);

                while (curFromNodeChild) {
                    fromNextSibling = curFromNodeChild.nextSibling;

                    if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                        curToNodeChild = toNextSibling;
                        curFromNodeChild = fromNextSibling;
                        continue outer;
                    }

                    curFromNodeKey = getNodeKey(curFromNodeChild);

                    var curFromNodeType = curFromNodeChild.nodeType;

                    var isCompatible = undefined;

                    if (curFromNodeType === curToNodeChild.nodeType) {
                        if (curFromNodeType === ELEMENT_NODE) {
                            // Both nodes being compared are Element nodes

                            if (curToNodeKey) {
                                // The target node has a key so we want to match it up with the correct element
                                // in the original DOM tree
                                if (curToNodeKey !== curFromNodeKey) {
                                    // The current element in the original DOM tree does not have a matching key so
                                    // let's check our lookup to see if there is a matching element in the original
                                    // DOM tree
                                    if ((matchingFromEl = fromNodesLookup[curToNodeKey])) {
                                        if (curFromNodeChild.nextSibling === matchingFromEl) {
                                            // Special case for single element removals. To avoid removing the original
                                            // DOM node out of the tree (since that can break CSS transitions, etc.),
                                            // we will instead discard the current node and wait until the next
                                            // iteration to properly match up the keyed target element with its matching
                                            // element in the original tree
                                            isCompatible = false;
                                        } else {
                                            // We found a matching keyed element somewhere in the original DOM tree.
                                            // Let's moving the original DOM node into the current position and morph
                                            // it.

                                            // NOTE: We use insertBefore instead of replaceChild because we want to go through
                                            // the `removeNode()` function for the node that is being discarded so that
                                            // all lifecycle hooks are correctly invoked
                                            fromEl.insertBefore(matchingFromEl, curFromNodeChild);

                                            fromNextSibling = curFromNodeChild.nextSibling;

                                            if (curFromNodeKey) {
                                                // Since the node is keyed it might be matched up later so we defer
                                                // the actual removal to later
                                                addKeyedRemoval(curFromNodeKey);
                                            } else {
                                                // NOTE: we skip nested keyed nodes from being removed since there is
                                                //       still a chance they will be matched up later
                                                removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                                            }

                                            curFromNodeChild = matchingFromEl;
                                        }
                                    } else {
                                        // The nodes are not compatible since the "to" node has a key and there
                                        // is no matching keyed node in the source tree
                                        isCompatible = false;
                                    }
                                }
                            } else if (curFromNodeKey) {
                                // The original has a key
                                isCompatible = false;
                            }

                            isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                            if (isCompatible) {
                                // We found compatible DOM elements so transform
                                // the current "from" node to match the current
                                // target DOM node.
                                morphEl(curFromNodeChild, curToNodeChild);
                            }

                        } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                            // Both nodes being compared are Text or Comment nodes
                            isCompatible = true;
                            // Simply update nodeValue on the original node to
                            // change the text value
                            curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                        }
                    }

                    if (isCompatible) {
                        // Advance both the "to" child and the "from" child since we found a match
                        curToNodeChild = toNextSibling;
                        curFromNodeChild = fromNextSibling;
                        continue outer;
                    }

                    // No compatible match so remove the old node from the DOM and continue trying to find a
                    // match in the original DOM. However, we only do this if the from node is not keyed
                    // since it is possible that a keyed node might match up with a node somewhere else in the
                    // target tree and we don't want to discard it just yet since it still might find a
                    // home in the final DOM tree. After everything is done we will remove any keyed nodes
                    // that didn't find a home
                    if (curFromNodeKey) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                    } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                    }

                    curFromNodeChild = fromNextSibling;
                }

                // If we got this far then we did not find a candidate match for
                // our "to node" and we exhausted all of the children "from"
                // nodes. Therefore, we will just append the current "to" node
                // to the end
                if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
                    fromEl.appendChild(matchingFromEl);
                    morphEl(matchingFromEl, curToNodeChild);
                } else {
                    var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
                    if (onBeforeNodeAddedResult !== false) {
                        if (onBeforeNodeAddedResult) {
                            curToNodeChild = onBeforeNodeAddedResult;
                        }

                        if (curToNodeChild.actualize) {
                            curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
                        }
                        fromEl.appendChild(curToNodeChild);
                        handleNodeAdded(curToNodeChild);
                    }
                }

                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
            }

            // We have processed all of the "to nodes". If curFromNodeChild is
            // non-null then we still have some from nodes left over that need
            // to be removed
            while (curFromNodeChild) {
                fromNextSibling = curFromNodeChild.nextSibling;
                if ((curFromNodeKey = getNodeKey(curFromNodeChild))) {
                    // Since the node is keyed it might be matched up later so we defer
                    // the actual removal to later
                    addKeyedRemoval(curFromNodeKey);
                } else {
                    // NOTE: we skip nested keyed nodes from being removed since there is
                    //       still a chance they will be matched up later
                    removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                }
                curFromNodeChild = fromNextSibling;
            }
        }

        var specialElHandler = specialElHandlers[fromEl.nodeName];
        if (specialElHandler) {
            specialElHandler(fromEl, toEl);
        }
    } // END: morphEl(...)

    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;

    if (!childrenOnly) {
        // Handle the case where we are given two DOM nodes that are not
        // compatible (e.g. <div> --> <span> or <div> --> TEXT)
        if (morphedNodeType === ELEMENT_NODE) {
            if (toNodeType === ELEMENT_NODE) {
                if (!compareNodeNames(fromNode, toNode)) {
                    onNodeDiscarded(fromNode);
                    morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
                }
            } else {
                // Going from an element node to a text node
                morphedNode = toNode;
            }
        } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) { // Text or comment node
            if (toNodeType === morphedNodeType) {
                morphedNode.nodeValue = toNode.nodeValue;
                return morphedNode;
            } else {
                // Text node to something else
                morphedNode = toNode;
            }
        }
    }

    if (morphedNode === toNode) {
        // The "to node" was not compatible with the "from node" so we had to
        // toss out the "from node" and use the "to node"
        onNodeDiscarded(fromNode);
    } else {
        morphEl(morphedNode, toNode, childrenOnly);

        // We now need to loop over any keyed nodes that might need to be
        // removed. We only do the removal if we know that the keyed node
        // never found a match. When a keyed node is matched up we remove
        // it out of fromNodesLookup and we use fromNodesLookup to determine
        // if a keyed node has been matched up or not
        if (keyedRemovalList) {
            for (var i=0, len=keyedRemovalList.length; i<len; i++) {
                var elToRemove = fromNodesLookup[keyedRemovalList[i]];
                if (elToRemove) {
                    removeNode(elToRemove, elToRemove.parentNode, false);
                }
            }
        }
    }

    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
        if (morphedNode.actualize) {
            morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
        }
        // If we had to swap out the from node with a new node because the old
        // node was not compatible with the target node then we need to
        // replace the old DOM node in the original DOM tree. This is only
        // possible if the original DOM node was part of a DOM tree which
        // we know is the case if it has a parent node.
        fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }

    return morphedNode;
}

module.exports = morphdom;

},{}],"/Users/josephluck/apps/choo/src/node_modules/nanoraf/index.js":[function(require,module,exports){
const window = require('global/window')
const assert = require('assert')

module.exports = nanoraf

// Only call RAF when needed
// (fn, fn?) -> fn
function nanoraf (render, raf) {
  assert.equal(typeof render, 'function', 'nanoraf: render should be a function')
  assert.ok(typeof raf === 'function' || typeof raf === 'undefined', 'nanoraf: raf should be a function or undefined')

  if (!raf) { raf = window.requestAnimationFrame }

  var inRenderingTransaction = false
  var redrawScheduled = false
  var currentState = null

  // pass new state to be rendered
  // (obj, obj?) -> null
  return function frame (state, prev) {
    assert.equal(typeof state, 'object', 'nanoraf: state should be an object')
    assert.equal(typeof prev, 'object', 'nanoraf: prev should be an object')
    assert.equal(inRenderingTransaction, false, 'nanoraf: infinite loop detected')

    // request a redraw for next frame
    if (currentState === null && !redrawScheduled) {
      redrawScheduled = true

      raf(function redraw () {
        redrawScheduled = false
        if (!currentState) return

        inRenderingTransaction = true
        render(currentState, prev)
        inRenderingTransaction = false

        currentState = null
      })
    }

    // update data for redraw
    currentState = state
  }
}

},{"assert":"/Users/josephluck/apps/choo/src/node_modules/assert/assert.js","global/window":"/Users/josephluck/apps/choo/src/node_modules/global/window.js"}],"/Users/josephluck/apps/choo/src/node_modules/nanotick/index.js":[function(require,module,exports){
(function (process){
var assert = require('assert')

module.exports = nanotick

var delay = (typeof process !== 'undefined' && process.nextTick)
  ? process.nextTick
  : (typeof setImmediate !== 'undefined')
    ? setImmediate
    : setTimeout

// Process.nextTick() batching ulity
// null -> fn(any) -> fn(any)
function nanotick () {
  var callbacks = []
  var interval = false

  return function tick (cb) {
    assert.equal(typeof cb, 'function', 'nanotick.tick: cb should be a function')

    var isAsync = false

    executeAsync(function () {
      isAsync = true
    })

    return function wrappedTick () {
      var length = arguments.length
      var args = []
      for (var i = 0; i < length; i++) {
        args.push[arguments[i]]
      }

      if (isAsync) {
        cb.apply(cb, args)
      } else {
        executeAsync(function () {
          cb.apply(cb, args)
        })
      }
    }
  }

  function executeAsync (cb) {
    callbacks.push(cb)

    if (!interval) {
      interval = true
      delay(function () {
        while (callbacks.length > 0) {
          callbacks.shift()()
        }
        interval = false
      })
    }
  }
}

}).call(this,require('_process'))
},{"_process":"/Users/josephluck/apps/choo/src/node_modules/browserify/node_modules/process/browser.js","assert":"/Users/josephluck/apps/choo/src/node_modules/assert/assert.js"}],"/Users/josephluck/apps/choo/src/node_modules/on-load/index.js":[function(require,module,exports){
/* global MutationObserver */
var document = require('global/document')
var window = require('global/window')
var watch = Object.create(null)
var KEY_ID = 'onloadid' + (new Date() % 9e6).toString(36)
var KEY_ATTR = 'data-' + KEY_ID
var INDEX = 0

if (window && window.MutationObserver) {
  var observer = new MutationObserver(function (mutations) {
    if (Object.keys(watch).length < 1) return
    for (var i = 0; i < mutations.length; i++) {
      if (mutations[i].attributeName === KEY_ATTR) {
        eachAttr(mutations[i], turnon, turnoff)
        continue
      }
      eachMutation(mutations[i].removedNodes, turnoff)
      eachMutation(mutations[i].addedNodes, turnon)
    }
  })
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeOldValue: true,
    attributeFilter: [KEY_ATTR]
  })
}

module.exports = function onload (el, on, off, caller) {
  on = on || function () {}
  off = off || function () {}
  el.setAttribute(KEY_ATTR, 'o' + INDEX)
  watch['o' + INDEX] = [on, off, 0, caller || onload.caller]
  INDEX += 1
  return el
}

function turnon (index, el) {
  if (watch[index][0] && watch[index][2] === 0) {
    watch[index][0](el)
    watch[index][2] = 1
  }
}

function turnoff (index, el) {
  if (watch[index][1] && watch[index][2] === 1) {
    watch[index][1](el)
    watch[index][2] = 0
  }
}

function eachAttr (mutation, on, off) {
  var newValue = mutation.target.getAttribute(KEY_ATTR)
  if (sameOrigin(mutation.oldValue, newValue)) {
    watch[newValue] = watch[mutation.oldValue]
    return
  }
  if (watch[mutation.oldValue]) {
    off(mutation.oldValue, mutation.target)
  }
  if (watch[newValue]) {
    on(newValue, mutation.target)
  }
}

function sameOrigin (oldValue, newValue) {
  if (!oldValue || !newValue) return false
  return watch[oldValue][3] === watch[newValue][3]
}

function eachMutation (nodes, fn) {
  var keys = Object.keys(watch)
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] && nodes[i].getAttribute && nodes[i].getAttribute(KEY_ATTR)) {
      var onloadid = nodes[i].getAttribute(KEY_ATTR)
      keys.forEach(function (k) {
        if (onloadid === k) {
          fn(k, nodes[i])
        }
      })
    }
    if (nodes[i].childNodes.length > 0) {
      eachMutation(nodes[i].childNodes, fn)
    }
  }
}

},{"global/document":"/Users/josephluck/apps/choo/src/node_modules/global/document.js","global/window":"/Users/josephluck/apps/choo/src/node_modules/global/window.js"}],"/Users/josephluck/apps/choo/src/node_modules/pad-left/index.js":[function(require,module,exports){
/*!
 * pad-left <https://github.com/jonschlinkert/pad-left>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var repeat = require('repeat-string');

module.exports = function padLeft(str, num, ch) {
  str = str.toString();

  if (typeof num === 'undefined') {
    return str;
  }

  if (ch === 0) {
    ch = '0';
  } else if (ch) {
    ch = ch.toString();
  } else {
    ch = ' ';
  }

  return repeat(ch, num - str.length) + str;
};

},{"repeat-string":"/Users/josephluck/apps/choo/src/node_modules/repeat-string/index.js"}],"/Users/josephluck/apps/choo/src/node_modules/pad-right/index.js":[function(require,module,exports){
'use strict';

var repeat = require('repeat-string');

module.exports = function padLeft(val, num, str) {
  var padding = '';
  var diff = num - val.length;

  // Breakpoints based on benchmarks to use the fastest approach
  // for the given number of zeros
  if (diff <= 5 && !str) {
    padding = '00000';
  } else if (diff <= 25 && !str) {
    padding = '000000000000000000000000000';
  } else {
    return val + repeat(str || '0', diff);
  }

  return val + padding.slice(0, diff);
};

},{"repeat-string":"/Users/josephluck/apps/choo/src/node_modules/repeat-string/index.js"}],"/Users/josephluck/apps/choo/src/node_modules/proptypes/index.js":[function(require,module,exports){
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('PropTypes', ['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.PropTypes = mod.exports;
  }
})(this, function (exports, module) {

  'use strict';

  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

  var ReactElement = {};

  ReactElement.isValidElement = function (object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  var ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };

  var emptyFunction = {
    thatReturns: function thatReturns(what) {
      return function () {
        return what;
      };
    }
  };

  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  var ANONYMOUS = '<<anonymous>>';

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (props[propName] == null) {
        var locationName = ReactPropTypeLocationNames[location];
        if (isRequired) {
          return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var locationName = ReactPropTypeLocationNames[location];

        var preciseType = getPreciseType(propValue);

        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturns(null));
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var locationName = ReactPropTypeLocationNames[location];
        var propType = getPropType(propValue);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!ReactElement.isValidElement(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var locationName = ReactPropTypeLocationNames[location];
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      return createChainableTypeChecker(function () {
        return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
      });
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (propValue === expectedValues[i]) {
          return null;
        }
      }

      var locationName = ReactPropTypeLocationNames[location];
      var valuesString = JSON.stringify(expectedValues);
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      return createChainableTypeChecker(function () {
        return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
      });
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName) == null) {
          return null;
        }
      }

      var locationName = ReactPropTypeLocationNames[location];
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || ReactElement.isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      return 'object';
    }
    return propType;
  }

  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  module.exports = ReactPropTypes;
});


},{}],"/Users/josephluck/apps/choo/src/node_modules/repeat-string/index.js":[function(require,module,exports){
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}

},{}],"/Users/josephluck/apps/choo/src/node_modules/rest/UrlBuilder.js":[function(require,module,exports){
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

var mixin, xWWWFormURLEncoder, origin, urlRE, absoluteUrlRE, fullyQualifiedUrlRE;

mixin = require('./util/mixin');
xWWWFormURLEncoder = require('./mime/type/application/x-www-form-urlencoded');

urlRE = /([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?(\/[^?#]*)?(\?[^#]*)?(#\S*)?/i;
absoluteUrlRE = /^([a-z][a-z0-9\-\+\.]*:\/\/|\/)/i;
fullyQualifiedUrlRE = /([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?\//i;

/**
 * Apply params to the template to create a URL.
 *
 * Parameters that are not applied directly to the template, are appended
 * to the URL as query string parameters.
 *
 * @param {string} template the URI template
 * @param {Object} params parameters to apply to the template
 * @return {string} the resulting URL
 */
function buildUrl(template, params) {
	// internal builder to convert template with params.
	var url, name, queryStringParams, queryString, re;

	url = template;
	queryStringParams = {};

	if (params) {
		for (name in params) {
			/*jshint forin:false */
			re = new RegExp('\\{' + name + '\\}');
			if (re.test(url)) {
				url = url.replace(re, encodeURIComponent(params[name]), 'g');
			}
			else {
				queryStringParams[name] = params[name];
			}
		}

		queryString = xWWWFormURLEncoder.write(queryStringParams);
		if (queryString) {
			url += url.indexOf('?') === -1 ? '?' : '&';
			url += queryString;
		}
	}
	return url;
}

function startsWith(str, test) {
	return str.indexOf(test) === 0;
}

/**
 * Create a new URL Builder
 *
 * @param {string|UrlBuilder} template the base template to build from, may be another UrlBuilder
 * @param {Object} [params] base parameters
 * @constructor
 */
function UrlBuilder(template, params) {
	if (!(this instanceof UrlBuilder)) {
		// invoke as a constructor
		return new UrlBuilder(template, params);
	}

	if (template instanceof UrlBuilder) {
		this._template = template.template;
		this._params = mixin({}, this._params, params);
	}
	else {
		this._template = (template || '').toString();
		this._params = params || {};
	}
}

UrlBuilder.prototype = {

	/**
	 * Create a new UrlBuilder instance that extends the current builder.
	 * The current builder is unmodified.
	 *
	 * @param {string} [template] URL template to append to the current template
	 * @param {Object} [params] params to combine with current params.  New params override existing params
	 * @return {UrlBuilder} the new builder
	 */
	append: function (template,  params) {
		// TODO consider query strings and fragments
		return new UrlBuilder(this._template + template, mixin({}, this._params, params));
	},

	/**
	 * Create a new UrlBuilder with a fully qualified URL based on the
	 * window's location or base href and the current templates relative URL.
	 *
	 * Path variables are preserved.
	 *
	 * *Browser only*
	 *
	 * @return {UrlBuilder} the fully qualified URL template
	 */
	fullyQualify: function () {
		if (typeof location === 'undefined') { return this; }
		if (this.isFullyQualified()) { return this; }

		var template = this._template;

		if (startsWith(template, '//')) {
			template = origin.protocol + template;
		}
		else if (startsWith(template, '/')) {
			template = origin.origin + template;
		}
		else if (!this.isAbsolute()) {
			template = origin.origin + origin.pathname.substring(0, origin.pathname.lastIndexOf('/') + 1);
		}

		if (template.indexOf('/', 8) === -1) {
			// default the pathname to '/'
			template = template + '/';
		}

		return new UrlBuilder(template, this._params);
	},

	/**
	 * True if the URL is absolute
	 *
	 * @return {boolean}
	 */
	isAbsolute: function () {
		return absoluteUrlRE.test(this.build());
	},

	/**
	 * True if the URL is fully qualified
	 *
	 * @return {boolean}
	 */
	isFullyQualified: function () {
		return fullyQualifiedUrlRE.test(this.build());
	},

	/**
	 * True if the URL is cross origin. The protocol, host and port must not be
	 * the same in order to be cross origin,
	 *
	 * @return {boolean}
	 */
	isCrossOrigin: function () {
		if (!origin) {
			return true;
		}
		var url = this.parts();
		return url.protocol !== origin.protocol ||
		       url.hostname !== origin.hostname ||
		       url.port !== origin.port;
	},

	/**
	 * Split a URL into its consituent parts following the naming convention of
	 * 'window.location'. One difference is that the port will contain the
	 * protocol default if not specified.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/DOM/window.location
	 *
	 * @returns {Object} a 'window.location'-like object
	 */
	parts: function () {
		/*jshint maxcomplexity:20 */
		var url, parts;
		url = this.fullyQualify().build().match(urlRE);
		parts = {
			href: url[0],
			protocol: url[1],
			host: url[3] || '',
			hostname: url[4] || '',
			port: url[6],
			pathname: url[7] || '',
			search: url[8] || '',
			hash: url[9] || ''
		};
		parts.origin = parts.protocol + '//' + parts.host;
		parts.port = parts.port || (parts.protocol === 'https:' ? '443' : parts.protocol === 'http:' ? '80' : '');
		return parts;
	},

	/**
	 * Expand the template replacing path variables with parameters
	 *
	 * @param {Object} [params] params to combine with current params.  New params override existing params
	 * @return {string} the expanded URL
	 */
	build: function (params) {
		return buildUrl(this._template, mixin({}, this._params, params));
	},

	/**
	 * @see build
	 */
	toString: function () {
		return this.build();
	}

};

origin = typeof location !== 'undefined' ? new UrlBuilder(location.href).parts() : void 0;

module.exports = UrlBuilder;

},{"./mime/type/application/x-www-form-urlencoded":"/Users/josephluck/apps/choo/src/node_modules/rest/mime/type/application/x-www-form-urlencoded.js","./util/mixin":"/Users/josephluck/apps/choo/src/node_modules/rest/util/mixin.js"}],"/Users/josephluck/apps/choo/src/node_modules/rest/browser.js":[function(require,module,exports){
/*
 * Copyright 2014-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

var rest = require('./client/default'),
    browser = require('./client/xhr');

rest.setPlatformDefaultClient(browser);

module.exports = rest;

},{"./client/default":"/Users/josephluck/apps/choo/src/node_modules/rest/client/default.js","./client/xhr":"/Users/josephluck/apps/choo/src/node_modules/rest/client/xhr.js"}],"/Users/josephluck/apps/choo/src/node_modules/rest/client.js":[function(require,module,exports){
/*
 * Copyright 2014-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

/**
 * Add common helper methods to a client impl
 *
 * @param {function} impl the client implementation
 * @param {Client} [target] target of this client, used when wrapping other clients
 * @returns {Client} the client impl with additional methods
 */
module.exports = function client(impl, target) {

	if (target) {

		/**
		 * @returns {Client} the target client
		 */
		impl.skip = function skip() {
			return target;
		};

	}

	/**
	 * Allow a client to easily be wrapped by an interceptor
	 *
	 * @param {Interceptor} interceptor the interceptor to wrap this client with
	 * @param [config] configuration for the interceptor
	 * @returns {Client} the newly wrapped client
	 */
	impl.wrap = function wrap(interceptor, config) {
		return interceptor(impl, config);
	};

	/**
	 * @deprecated
	 */
	impl.chain = function chain() {
		if (typeof console !== 'undefined') {
			console.log('rest.js: client.chain() is deprecated, use client.wrap() instead');
		}

		return impl.wrap.apply(this, arguments);
	};

	return impl;

};

},{}],"/Users/josephluck/apps/choo/src/node_modules/rest/client/default.js":[function(require,module,exports){
/*
 * Copyright 2014-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

/**
 * Plain JS Object containing properties that represent an HTTP request.
 *
 * Depending on the capabilities of the underlying client, a request
 * may be cancelable. If a request may be canceled, the client will add
 * a canceled flag and cancel function to the request object. Canceling
 * the request will put the response into an error state.
 *
 * @field {string} [method='GET'] HTTP method, commonly GET, POST, PUT, DELETE or HEAD
 * @field {string|UrlBuilder} [path=''] path template with optional path variables
 * @field {Object} [params] parameters for the path template and query string
 * @field {Object} [headers] custom HTTP headers to send, in addition to the clients default headers
 * @field [entity] the HTTP entity, common for POST or PUT requests
 * @field {boolean} [canceled] true if the request has been canceled, set by the client
 * @field {Function} [cancel] cancels the request if invoked, provided by the client
 * @field {Client} [originator] the client that first handled this request, provided by the interceptor
 *
 * @class Request
 */

/**
 * Plain JS Object containing properties that represent an HTTP response
 *
 * @field {Object} [request] the request object as received by the root client
 * @field {Object} [raw] the underlying request object, like XmlHttpRequest in a browser
 * @field {number} [status.code] status code of the response (i.e. 200, 404)
 * @field {string} [status.text] status phrase of the response
 * @field {Object] [headers] response headers hash of normalized name, value pairs
 * @field [entity] the response body
 *
 * @class Response
 */

/**
 * HTTP client particularly suited for RESTful operations.
 *
 * @field {function} wrap wraps this client with a new interceptor returning the wrapped client
 *
 * @param {Request} the HTTP request
 * @returns {ResponsePromise<Response>} a promise the resolves to the HTTP response
 *
 * @class Client
 */

 /**
  * Extended when.js Promises/A+ promise with HTTP specific helpers
  *q
  * @method entity promise for the HTTP entity
  * @method status promise for the HTTP status code
  * @method headers promise for the HTTP response headers
  * @method header promise for a specific HTTP response header
  *
  * @class ResponsePromise
  * @extends Promise
  */

var client, target, platformDefault;

client = require('../client');

if (typeof Promise !== 'function' && console && console.log) {
	console.log('An ES6 Promise implementation is required to use rest.js. See https://github.com/cujojs/when/blob/master/docs/es6-promise-shim.md for using when.js as a Promise polyfill.');
}

/**
 * Make a request with the default client
 * @param {Request} the HTTP request
 * @returns {Promise<Response>} a promise the resolves to the HTTP response
 */
function defaultClient() {
	return target.apply(void 0, arguments);
}

/**
 * Change the default client
 * @param {Client} client the new default client
 */
defaultClient.setDefaultClient = function setDefaultClient(client) {
	target = client;
};

/**
 * Obtain a direct reference to the current default client
 * @returns {Client} the default client
 */
defaultClient.getDefaultClient = function getDefaultClient() {
	return target;
};

/**
 * Reset the default client to the platform default
 */
defaultClient.resetDefaultClient = function resetDefaultClient() {
	target = platformDefault;
};

/**
 * @private
 */
defaultClient.setPlatformDefaultClient = function setPlatformDefaultClient(client) {
	if (platformDefault) {
		throw new Error('Unable to redefine platformDefaultClient');
	}
	target = platformDefault = client;
};

module.exports = client(defaultClient);

},{"../client":"/Users/josephluck/apps/choo/src/node_modules/rest/client.js"}],"/Users/josephluck/apps/choo/src/node_modules/rest/client/xhr.js":[function(require,module,exports){
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

var normalizeHeaderName, responsePromise, client, headerSplitRE;

normalizeHeaderName = require('../util/normalizeHeaderName');
responsePromise = require('../util/responsePromise');
client = require('../client');

// according to the spec, the line break is '\r\n', but doesn't hold true in practice
headerSplitRE = /[\r|\n]+/;

function parseHeaders(raw) {
	// Note: Set-Cookie will be removed by the browser
	var headers = {};

	if (!raw) { return headers; }

	raw.trim().split(headerSplitRE).forEach(function (header) {
		var boundary, name, value;
		boundary = header.indexOf(':');
		name = normalizeHeaderName(header.substring(0, boundary).trim());
		value = header.substring(boundary + 1).trim();
		if (headers[name]) {
			if (Array.isArray(headers[name])) {
				// add to an existing array
				headers[name].push(value);
			}
			else {
				// convert single value to array
				headers[name] = [headers[name], value];
			}
		}
		else {
			// new, single value
			headers[name] = value;
		}
	});

	return headers;
}

function safeMixin(target, source) {
	Object.keys(source || {}).forEach(function (prop) {
		// make sure the property already exists as
		// IE 6 will blow up if we add a new prop
		if (source.hasOwnProperty(prop) && prop in target) {
			try {
				target[prop] = source[prop];
			}
			catch (e) {
				// ignore, expected for some properties at some points in the request lifecycle
			}
		}
	});

	return target;
}

module.exports = client(function xhr(request) {
	return responsePromise.promise(function (resolve, reject) {
		/*jshint maxcomplexity:20 */

		var client, method, url, headers, entity, headerName, response, XHR;

		request = typeof request === 'string' ? { path: request } : request || {};
		response = { request: request };

		if (request.canceled) {
			response.error = 'precanceled';
			reject(response);
			return;
		}

		XHR = request.engine || XMLHttpRequest;
		if (!XHR) {
			reject({ request: request, error: 'xhr-not-available' });
			return;
		}

		entity = request.entity;
		request.method = request.method || (entity ? 'POST' : 'GET');
		method = request.method;
		url = response.url = request.path || '';

		try {
			client = response.raw = new XHR();

			// mixin extra request properties before and after opening the request as some properties require being set at different phases of the request
			safeMixin(client, request.mixin);
			client.open(method, url, true);
			safeMixin(client, request.mixin);

			headers = request.headers;
			for (headerName in headers) {
				/*jshint forin:false */
				if (headerName === 'Content-Type' && headers[headerName] === 'multipart/form-data') {
					// XMLHttpRequest generates its own Content-Type header with the
					// appropriate multipart boundary when sending multipart/form-data.
					continue;
				}

				client.setRequestHeader(headerName, headers[headerName]);
			}

			request.canceled = false;
			request.cancel = function cancel() {
				request.canceled = true;
				client.abort();
				reject(response);
			};

			client.onreadystatechange = function (/* e */) {
				if (request.canceled) { return; }
				if (client.readyState === (XHR.DONE || 4)) {
					response.status = {
						code: client.status,
						text: client.statusText
					};
					response.headers = parseHeaders(client.getAllResponseHeaders());
					response.entity = client.responseText;

					// #125 -- Sometimes IE8-9 uses 1223 instead of 204
					// http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
					if (response.status.code === 1223) {
						response.status.code = 204;
					}

					if (response.status.code > 0) {
						// check status code as readystatechange fires before error event
						resolve(response);
					}
					else {
						// give the error callback a chance to fire before resolving
						// requests for file:// URLs do not have a status code
						setTimeout(function () {
							resolve(response);
						}, 0);
					}
				}
			};

			try {
				client.onerror = function (/* e */) {
					response.error = 'loaderror';
					reject(response);
				};
			}
			catch (e) {
				// IE 6 will not support error handling
			}

			client.send(entity);
		}
		catch (e) {
			response.error = 'loaderror';
			reject(response);
		}

	});
});

},{"../client":"/Users/josephluck/apps/choo/src/node_modules/rest/client.js","../util/normalizeHeaderName":"/Users/josephluck/apps/choo/src/node_modules/rest/util/normalizeHeaderName.js","../util/responsePromise":"/Users/josephluck/apps/choo/src/node_modules/rest/util/responsePromise.js"}],"/Users/josephluck/apps/choo/src/node_modules/rest/interceptor.js":[function(require,module,exports){
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

var defaultClient, mixin, responsePromise, client;

defaultClient = require('./client/default');
mixin = require('./util/mixin');
responsePromise = require('./util/responsePromise');
client = require('./client');

/**
 * Interceptors have the ability to intercept the request and/org response
 * objects.  They may augment, prune, transform or replace the
 * request/response as needed.  Clients may be composed by wrapping
 * together multiple interceptors.
 *
 * Configured interceptors are functional in nature.  Wrapping a client in
 * an interceptor will not affect the client, merely the data that flows in
 * and out of that client.  A common configuration can be created once and
 * shared; specialization can be created by further wrapping that client
 * with custom interceptors.
 *
 * @param {Client} [target] client to wrap
 * @param {Object} [config] configuration for the interceptor, properties will be specific to the interceptor implementation
 * @returns {Client} A client wrapped with the interceptor
 *
 * @class Interceptor
 */

function defaultInitHandler(config) {
	return config;
}

function defaultRequestHandler(request /*, config, meta */) {
	return request;
}

function defaultResponseHandler(response /*, config, meta */) {
	return response;
}

/**
 * Alternate return type for the request handler that allows for more complex interactions.
 *
 * @param properties.request the traditional request return object
 * @param {Promise} [properties.abort] promise that resolves if/when the request is aborted
 * @param {Client} [properties.client] override the defined client with an alternate client
 * @param [properties.response] response for the request, short circuit the request
 */
function ComplexRequest(properties) {
	if (!(this instanceof ComplexRequest)) {
		// in case users forget the 'new' don't mix into the interceptor
		return new ComplexRequest(properties);
	}
	mixin(this, properties);
}

/**
 * Create a new interceptor for the provided handlers.
 *
 * @param {Function} [handlers.init] one time intialization, must return the config object
 * @param {Function} [handlers.request] request handler
 * @param {Function} [handlers.response] response handler regardless of error state
 * @param {Function} [handlers.success] response handler when the request is not in error
 * @param {Function} [handlers.error] response handler when the request is in error, may be used to 'unreject' an error state
 * @param {Function} [handlers.client] the client to use if otherwise not specified, defaults to platform default client
 *
 * @returns {Interceptor}
 */
function interceptor(handlers) {

	var initHandler, requestHandler, successResponseHandler, errorResponseHandler;

	handlers = handlers || {};

	initHandler            = handlers.init    || defaultInitHandler;
	requestHandler         = handlers.request || defaultRequestHandler;
	successResponseHandler = handlers.success || handlers.response || defaultResponseHandler;
	errorResponseHandler   = handlers.error   || function () {
		// Propagate the rejection, with the result of the handler
		return Promise.resolve((handlers.response || defaultResponseHandler).apply(this, arguments))
			.then(Promise.reject.bind(Promise));
	};

	return function (target, config) {

		if (typeof target === 'object') {
			config = target;
		}
		if (typeof target !== 'function') {
			target = handlers.client || defaultClient;
		}

		config = initHandler(config || {});

		function interceptedClient(request) {
			var context, meta;
			context = {};
			meta = { 'arguments': Array.prototype.slice.call(arguments), client: interceptedClient };
			request = typeof request === 'string' ? { path: request } : request || {};
			request.originator = request.originator || interceptedClient;
			return responsePromise(
				requestHandler.call(context, request, config, meta),
				function (request) {
					var response, abort, next;
					next = target;
					if (request instanceof ComplexRequest) {
						// unpack request
						abort = request.abort;
						next = request.client || next;
						response = request.response;
						// normalize request, must be last
						request = request.request;
					}
					response = response || Promise.resolve(request).then(function (request) {
						return Promise.resolve(next(request)).then(
							function (response) {
								return successResponseHandler.call(context, response, config, meta);
							},
							function (response) {
								return errorResponseHandler.call(context, response, config, meta);
							}
						);
					});
					return abort ? Promise.race([response, abort]) : response;
				},
				function (error) {
					return Promise.reject({ request: request, error: error });
				}
			);
		}

		return client(interceptedClient, target);
	};
}

interceptor.ComplexRequest = ComplexRequest;

module.exports = interceptor;

},{"./client":"/Users/josephluck/apps/choo/src/node_modules/rest/client.js","./client/default":"/Users/josephluck/apps/choo/src/node_modules/rest/client/default.js","./util/mixin":"/Users/josephluck/apps/choo/src/node_modules/rest/util/mixin.js","./util/responsePromise":"/Users/josephluck/apps/choo/src/node_modules/rest/util/responsePromise.js"}],"/Users/josephluck/apps/choo/src/node_modules/rest/interceptor/errorCode.js":[function(require,module,exports){
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

var interceptor;

interceptor = require('../interceptor');

/**
 * Rejects the response promise based on the status code.
 *
 * Codes greater than or equal to the provided value are rejected.  Default
 * value 400.
 *
 * @param {Client} [client] client to wrap
 * @param {number} [config.code=400] code to indicate a rejection
 *
 * @returns {Client}
 */
module.exports = interceptor({
	init: function (config) {
		config.code = config.code || 400;
		return config;
	},
	response: function (response, config) {
		if (response.status && response.status.code >= config.code) {
			return Promise.reject(response);
		}
		return response;
	}
});

},{"../interceptor":"/Users/josephluck/apps/choo/src/node_modules/rest/interceptor.js"}],"/Users/josephluck/apps/choo/src/node_modules/rest/interceptor/mime.js":[function(require,module,exports){
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

var interceptor, mime, registry, noopConverter, missingConverter, attempt;

interceptor = require('../interceptor');
mime = require('../mime');
registry = require('../mime/registry');
attempt = require('../util/attempt');

noopConverter = {
	read: function (obj) { return obj; },
	write: function (obj) { return obj; }
};

missingConverter = {
	read: function () { throw 'No read method found on converter'; },
	write: function () { throw 'No write method found on converter'; }
};

/**
 * MIME type support for request and response entities.  Entities are
 * (de)serialized using the converter for the MIME type.
 *
 * Request entities are converted using the desired converter and the
 * 'Accept' request header prefers this MIME.
 *
 * Response entities are converted based on the Content-Type response header.
 *
 * @param {Client} [client] client to wrap
 * @param {string} [config.mime='text/plain'] MIME type to encode the request
 *   entity
 * @param {string} [config.accept] Accept header for the request
 * @param {Client} [config.client=<request.originator>] client passed to the
 *   converter, defaults to the client originating the request
 * @param {Registry} [config.registry] MIME registry, defaults to the root
 *   registry
 * @param {boolean} [config.permissive] Allow an unkown request MIME type
 *
 * @returns {Client}
 */
module.exports = interceptor({
	init: function (config) {
		config.registry = config.registry || registry;
		return config;
	},
	request: function (request, config) {
		var type, headers;

		headers = request.headers || (request.headers = {});
		type = mime.parse(headers['Content-Type'] || config.mime || 'text/plain');
		headers.Accept = headers.Accept || config.accept || type.raw + ', application/json;q=0.8, text/plain;q=0.5, */*;q=0.2';

		if (!('entity' in request)) {
			return request;
		}

		headers['Content-Type'] = type.raw;

		return config.registry.lookup(type)['catch'](function () {
			// failed to resolve converter
			if (config.permissive) {
				return noopConverter;
			}
			throw 'mime-unknown';
		}).then(function (converter) {
			var client = config.client || request.originator,
				write = converter.write || missingConverter.write;

			return attempt(write.bind(void 0, request.entity, { client: client, request: request, mime: type, registry: config.registry }))
				['catch'](function() {
					throw 'mime-serialization';
				})
				.then(function(entity) {
					request.entity = entity;
					return request;
				});
		});
	},
	response: function (response, config) {
		if (!(response.headers && response.headers['Content-Type'] && response.entity)) {
			return response;
		}

		var type = mime.parse(response.headers['Content-Type']);

		return config.registry.lookup(type)['catch'](function () { return noopConverter; }).then(function (converter) {
			var client = config.client || response.request && response.request.originator,
				read = converter.read || missingConverter.read;

			return attempt(read.bind(void 0, response.entity, { client: client, response: response, mime: type, registry: config.registry }))
				['catch'](function (e) {
					response.error = 'mime-deserialization';
					response.cause = e;
					throw response;
				})
				.then(function (entity) {
					response.entity = entity;
					return response;
				});
		});
	}
});

},{"../interceptor":"/Users/josephluck/apps/choo/src/node_modules/rest/interceptor.js","../mime":"/Users/josephluck/apps/choo/src/node_modules/rest/mime.js","../mime/registry":"/Users/josephluck/apps/choo/src/node_modules/rest/mime/registry.js","../util/attempt":"/Users/josephluck/apps/choo/src/node_modules/rest/util/attempt.js"}],"/Users/josephluck/apps/choo/src/node_modules/rest/interceptor/pathPrefix.js":[function(require,module,exports){
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

var interceptor, UrlBuilder;

interceptor = require('../interceptor');
UrlBuilder = require('../UrlBuilder');

function startsWith(str, prefix) {
	return str.indexOf(prefix) === 0;
}

function endsWith(str, suffix) {
	return str.lastIndexOf(suffix) + suffix.length === str.length;
}

/**
 * Prefixes the request path with a common value.
 *
 * @param {Client} [client] client to wrap
 * @param {number} [config.prefix] path prefix
 *
 * @returns {Client}
 */
module.exports = interceptor({
	request: function (request, config) {
		var path;

		if (config.prefix && !(new UrlBuilder(request.path).isFullyQualified())) {
			path = config.prefix;
			if (request.path) {
				if (!endsWith(path, '/') && !startsWith(request.path, '/')) {
					// add missing '/' between path sections
					path += '/';
				}
				path += request.path;
			}
			request.path = path;
		}

		return request;
	}
});

},{"../UrlBuilder":"/Users/josephluck/apps/choo/src/node_modules/rest/UrlBuilder.js","../interceptor":"/Users/josephluck/apps/choo/src/node_modules/rest/interceptor.js"}],"/Users/josephluck/apps/choo/src/node_modules/rest/interceptor/template.js":[function(require,module,exports){
/*
 * Copyright 2015-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

var interceptor, uriTemplate, mixin;

interceptor = require('../interceptor');
uriTemplate = require('../util/uriTemplate');
mixin = require('../util/mixin');

/**
 * Applies request params to the path as a URI Template
 *
 * Params are removed from the request object, as they have been consumed.
 *
 * @see https://tools.ietf.org/html/rfc6570
 *
 * @param {Client} [client] client to wrap
 * @param {Object} [config.params] default param values
 * @param {string} [config.template] default template
 *
 * @returns {Client}
 */
module.exports = interceptor({
	init: function (config) {
		config.params = config.params || {};
		config.template = config.template || '';
		return config;
	},
	request: function (request, config) {
		var template, params;

		template = request.path || config.template;
		params = mixin({}, request.params, config.params);

		request.path = uriTemplate.expand(template, params);
		delete request.params;

		return request;
	}
});

},{"../interceptor":"/Users/josephluck/apps/choo/src/node_modules/rest/interceptor.js","../util/mixin":"/Users/josephluck/apps/choo/src/node_modules/rest/util/mixin.js","../util/uriTemplate":"/Users/josephluck/apps/choo/src/node_modules/rest/util/uriTemplate.js"}],"/Users/josephluck/apps/choo/src/node_modules/rest/mime.js":[function(require,module,exports){
/*
* Copyright 2014-2016 the original author or authors
* @license MIT, see LICENSE.txt for details
*
* @author Scott Andrews
*/

'use strict';

/**
 * Parse a MIME type into it's constituent parts
 *
 * @param {string} mime MIME type to parse
 * @return {{
 *   {string} raw the original MIME type
 *   {string} type the type and subtype
 *   {string} [suffix] mime suffix, including the plus, if any
 *   {Object} params key/value pair of attributes
 * }}
 */
function parse(mime) {
	var params, type;

	params = mime.split(';');
	type = params[0].trim().split('+');

	return {
		raw: mime,
		type: type[0],
		suffix: type[1] ? '+' + type[1] : '',
		params: params.slice(1).reduce(function (params, pair) {
			pair = pair.split('=');
			params[pair[0].trim()] = pair[1] ? pair[1].trim() : void 0;
			return params;
		}, {})
	};
}

module.exports = {
	parse: parse
};

},{}],"/Users/josephluck/apps/choo/src/node_modules/rest/mime/registry.js":[function(require,module,exports){
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

var mime, registry;

mime = require('../mime');

function Registry(mimes) {

	/**
	 * Lookup the converter for a MIME type
	 *
	 * @param {string} type the MIME type
	 * @return a promise for the converter
	 */
	this.lookup = function lookup(type) {
		var parsed;

		parsed = typeof type === 'string' ? mime.parse(type) : type;

		if (mimes[parsed.raw]) {
			return mimes[parsed.raw];
		}
		if (mimes[parsed.type + parsed.suffix]) {
			return mimes[parsed.type + parsed.suffix];
		}
		if (mimes[parsed.type]) {
			return mimes[parsed.type];
		}
		if (mimes[parsed.suffix]) {
			return mimes[parsed.suffix];
		}

		return Promise.reject(new Error('Unable to locate converter for mime "' + parsed.raw + '"'));
	};

	/**
	 * Create a late dispatched proxy to the target converter.
	 *
	 * Common when a converter is registered under multiple names and
	 * should be kept in sync if updated.
	 *
	 * @param {string} type mime converter to dispatch to
	 * @returns converter whose read/write methods target the desired mime converter
	 */
	this.delegate = function delegate(type) {
		return {
			read: function () {
				var args = arguments;
				return this.lookup(type).then(function (converter) {
					return converter.read.apply(this, args);
				}.bind(this));
			}.bind(this),
			write: function () {
				var args = arguments;
				return this.lookup(type).then(function (converter) {
					return converter.write.apply(this, args);
				}.bind(this));
			}.bind(this)
		};
	};

	/**
	 * Register a custom converter for a MIME type
	 *
	 * @param {string} type the MIME type
	 * @param converter the converter for the MIME type
	 * @return a promise for the converter
	 */
	this.register = function register(type, converter) {
		mimes[type] = Promise.resolve(converter);
		return mimes[type];
	};

	/**
	 * Create a child registry whoes registered converters remain local, while
	 * able to lookup converters from its parent.
	 *
	 * @returns child MIME registry
	 */
	this.child = function child() {
		return new Registry(Object.create(mimes));
	};

}

registry = new Registry({});

// include provided serializers
registry.register('application/hal', require('./type/application/hal'));
registry.register('application/json', require('./type/application/json'));
registry.register('application/x-www-form-urlencoded', require('./type/application/x-www-form-urlencoded'));
registry.register('multipart/form-data', require('./type/multipart/form-data'));
registry.register('text/plain', require('./type/text/plain'));

registry.register('+json', registry.delegate('application/json'));

module.exports = registry;

},{"../mime":"/Users/josephluck/apps/choo/src/node_modules/rest/mime.js","./type/application/hal":"/Users/josephluck/apps/choo/src/node_modules/rest/mime/type/application/hal.js","./type/application/json":"/Users/josephluck/apps/choo/src/node_modules/rest/mime/type/application/json.js","./type/application/x-www-form-urlencoded":"/Users/josephluck/apps/choo/src/node_modules/rest/mime/type/application/x-www-form-urlencoded.js","./type/multipart/form-data":"/Users/josephluck/apps/choo/src/node_modules/rest/mime/type/multipart/form-data.js","./type/text/plain":"/Users/josephluck/apps/choo/src/node_modules/rest/mime/type/text/plain.js"}],"/Users/josephluck/apps/choo/src/node_modules/rest/mime/type/application/hal.js":[function(require,module,exports){
/*
 * Copyright 2013-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

var pathPrefix, template, find, lazyPromise, responsePromise;

pathPrefix = require('../../../interceptor/pathPrefix');
template = require('../../../interceptor/template');
find = require('../../../util/find');
lazyPromise = require('../../../util/lazyPromise');
responsePromise = require('../../../util/responsePromise');

function defineProperty(obj, name, value) {
	Object.defineProperty(obj, name, {
		value: value,
		configurable: true,
		enumerable: false,
		writeable: true
	});
}

/**
 * Hypertext Application Language serializer
 *
 * Implemented to https://tools.ietf.org/html/draft-kelly-json-hal-06
 *
 * As the spec is still a draft, this implementation will be updated as the
 * spec evolves
 *
 * Objects are read as HAL indexing links and embedded objects on to the
 * resource. Objects are written as plain JSON.
 *
 * Embedded relationships are indexed onto the resource by the relationship
 * as a promise for the related resource.
 *
 * Links are indexed onto the resource as a lazy promise that will GET the
 * resource when a handler is first registered on the promise.
 *
 * A `requestFor` method is added to the entity to make a request for the
 * relationship.
 *
 * A `clientFor` method is added to the entity to get a full Client for a
 * relationship.
 *
 * The `_links` and `_embedded` properties on the resource are made
 * non-enumerable.
 */
module.exports = {

	read: function (str, opts) {
		var client, console;

		opts = opts || {};
		client = opts.client;
		console = opts.console || console;

		function deprecationWarning(relationship, deprecation) {
			if (deprecation && console && console.warn || console.log) {
				(console.warn || console.log).call(console, 'Relationship \'' + relationship + '\' is deprecated, see ' + deprecation);
			}
		}

		return opts.registry.lookup(opts.mime.suffix).then(function (converter) {
			return converter.read(str, opts);
		}).then(function (root) {
			find.findProperties(root, '_embedded', function (embedded, resource, name) {
				Object.keys(embedded).forEach(function (relationship) {
					if (relationship in resource) { return; }
					var related = responsePromise({
						entity: embedded[relationship]
					});
					defineProperty(resource, relationship, related);
				});
				defineProperty(resource, name, embedded);
			});
			find.findProperties(root, '_links', function (links, resource, name) {
				Object.keys(links).forEach(function (relationship) {
					var link = links[relationship];
					if (relationship in resource) { return; }
					defineProperty(resource, relationship, responsePromise.make(lazyPromise(function () {
						if (link.deprecation) { deprecationWarning(relationship, link.deprecation); }
						if (link.templated === true) {
							return template(client)({ path: link.href });
						}
						return client({ path: link.href });
					})));
				});
				defineProperty(resource, name, links);
				defineProperty(resource, 'clientFor', function (relationship, clientOverride) {
					var link = links[relationship];
					if (!link) {
						throw new Error('Unknown relationship: ' + relationship);
					}
					if (link.deprecation) { deprecationWarning(relationship, link.deprecation); }
					if (link.templated === true) {
						return template(
							clientOverride || client,
							{ template: link.href }
						);
					}
					return pathPrefix(
						clientOverride || client,
						{ prefix: link.href }
					);
				});
				defineProperty(resource, 'requestFor', function (relationship, request, clientOverride) {
					var client = this.clientFor(relationship, clientOverride);
					return client(request);
				});
			});

			return root;
		});

	},

	write: function (obj, opts) {
		return opts.registry.lookup(opts.mime.suffix).then(function (converter) {
			return converter.write(obj, opts);
		});
	}

};

},{"../../../interceptor/pathPrefix":"/Users/josephluck/apps/choo/src/node_modules/rest/interceptor/pathPrefix.js","../../../interceptor/template":"/Users/josephluck/apps/choo/src/node_modules/rest/interceptor/template.js","../../../util/find":"/Users/josephluck/apps/choo/src/node_modules/rest/util/find.js","../../../util/lazyPromise":"/Users/josephluck/apps/choo/src/node_modules/rest/util/lazyPromise.js","../../../util/responsePromise":"/Users/josephluck/apps/choo/src/node_modules/rest/util/responsePromise.js"}],"/Users/josephluck/apps/choo/src/node_modules/rest/mime/type/application/json.js":[function(require,module,exports){
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

/**
 * Create a new JSON converter with custom reviver/replacer.
 *
 * The extended converter must be published to a MIME registry in order
 * to be used. The existing converter will not be modified.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
 *
 * @param {function} [reviver=undefined] custom JSON.parse reviver
 * @param {function|Array} [replacer=undefined] custom JSON.stringify replacer
 */
function createConverter(reviver, replacer) {
	return {

		read: function (str) {
			return JSON.parse(str, reviver);
		},

		write: function (obj) {
			return JSON.stringify(obj, replacer);
		},

		extend: createConverter

	};
}

module.exports = createConverter();

},{}],"/Users/josephluck/apps/choo/src/node_modules/rest/mime/type/application/x-www-form-urlencoded.js":[function(require,module,exports){
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

var encodedSpaceRE, urlEncodedSpaceRE;

encodedSpaceRE = /%20/g;
urlEncodedSpaceRE = /\+/g;

function urlEncode(str) {
	str = encodeURIComponent(str);
	// spec says space should be encoded as '+'
	return str.replace(encodedSpaceRE, '+');
}

function urlDecode(str) {
	// spec says space should be encoded as '+'
	str = str.replace(urlEncodedSpaceRE, ' ');
	return decodeURIComponent(str);
}

function append(str, name, value) {
	if (Array.isArray(value)) {
		value.forEach(function (value) {
			str = append(str, name, value);
		});
	}
	else {
		if (str.length > 0) {
			str += '&';
		}
		str += urlEncode(name);
		if (value !== undefined && value !== null) {
			str += '=' + urlEncode(value);
		}
	}
	return str;
}

module.exports = {

	read: function (str) {
		var obj = {};
		str.split('&').forEach(function (entry) {
			var pair, name, value;
			pair = entry.split('=');
			name = urlDecode(pair[0]);
			if (pair.length === 2) {
				value = urlDecode(pair[1]);
			}
			else {
				value = null;
			}
			if (name in obj) {
				if (!Array.isArray(obj[name])) {
					// convert to an array, perserving currnent value
					obj[name] = [obj[name]];
				}
				obj[name].push(value);
			}
			else {
				obj[name] = value;
			}
		});
		return obj;
	},

	write: function (obj) {
		var str = '';
		Object.keys(obj).forEach(function (name) {
			str = append(str, name, obj[name]);
		});
		return str;
	}

};

},{}],"/Users/josephluck/apps/choo/src/node_modules/rest/mime/type/multipart/form-data.js":[function(require,module,exports){
/*
 * Copyright 2014-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Michael Jackson
 */

/* global FormData, File, Blob */

'use strict';

function isFormElement(object) {
	return object &&
		object.nodeType === 1 && // Node.ELEMENT_NODE
		object.tagName === 'FORM';
}

function createFormDataFromObject(object) {
	var formData = new FormData();

	var value;
	for (var property in object) {
		if (object.hasOwnProperty(property)) {
			value = object[property];

			if (value instanceof File) {
				formData.append(property, value, value.name);
			} else if (value instanceof Blob) {
				formData.append(property, value);
			} else {
				formData.append(property, String(value));
			}
		}
	}

	return formData;
}

module.exports = {

	write: function (object) {
		if (typeof FormData === 'undefined') {
			throw new Error('The multipart/form-data mime serializer requires FormData support');
		}

		// Support FormData directly.
		if (object instanceof FormData) {
			return object;
		}

		// Support <form> elements.
		if (isFormElement(object)) {
			return new FormData(object);
		}

		// Support plain objects, may contain File/Blob as value.
		if (typeof object === 'object' && object !== null) {
			return createFormDataFromObject(object);
		}

		throw new Error('Unable to create FormData from object ' + object);
	}

};

},{}],"/Users/josephluck/apps/choo/src/node_modules/rest/mime/type/text/plain.js":[function(require,module,exports){
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

module.exports = {

	read: function (str) {
		return str;
	},

	write: function (obj) {
		return obj.toString();
	}

};

},{}],"/Users/josephluck/apps/choo/src/node_modules/rest/util/attempt.js":[function(require,module,exports){
/*
 * Copyright 2015-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

/**
 * Attempt to invoke a function capturing the resulting value as a Promise
 *
 * If the method throws, the caught value used to reject the Promise.
 *
 * @param {function} work function to invoke
 * @returns {Promise} Promise for the output of the work function
 */
function attempt(work) {
	try {
		return Promise.resolve(work());
	}
	catch (e) {
		return Promise.reject(e);
	}
}

module.exports = attempt;

},{}],"/Users/josephluck/apps/choo/src/node_modules/rest/util/find.js":[function(require,module,exports){
/*
 * Copyright 2013-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

module.exports = {

	/**
	 * Find objects within a graph the contain a property of a certain name.
	 *
	 * NOTE: this method will not discover object graph cycles.
	 *
	 * @param {*} obj object to search on
	 * @param {string} prop name of the property to search for
	 * @param {Function} callback function to receive the found properties and their parent
	 */
	findProperties: function findProperties(obj, prop, callback) {
		if (typeof obj !== 'object' || obj === null) { return; }
		if (prop in obj) {
			callback(obj[prop], obj, prop);
		}
		Object.keys(obj).forEach(function (key) {
			findProperties(obj[key], prop, callback);
		});
	}

};

},{}],"/Users/josephluck/apps/choo/src/node_modules/rest/util/lazyPromise.js":[function(require,module,exports){
/*
 * Copyright 2013-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

var attempt = require('./attempt');

/**
 * Create a promise whose work is started only when a handler is registered.
 *
 * The work function will be invoked at most once. Thrown values will result
 * in promise rejection.
 *
 * @param {Function} work function whose ouput is used to resolve the
 *   returned promise.
 * @returns {Promise} a lazy promise
 */
function lazyPromise(work) {
	var started, resolver, promise, then;

	started = false;

	promise = new Promise(function (resolve, reject) {
		resolver = {
			resolve: resolve,
			reject: reject
		};
	});
	then = promise.then;

	promise.then = function () {
		if (!started) {
			started = true;
			attempt(work).then(resolver.resolve, resolver.reject);
		}
		return then.apply(promise, arguments);
	};

	return promise;
}

module.exports = lazyPromise;

},{"./attempt":"/Users/josephluck/apps/choo/src/node_modules/rest/util/attempt.js"}],"/Users/josephluck/apps/choo/src/node_modules/rest/util/mixin.js":[function(require,module,exports){
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

var empty = {};

/**
 * Mix the properties from the source object into the destination object.
 * When the same property occurs in more then one object, the right most
 * value wins.
 *
 * @param {Object} dest the object to copy properties to
 * @param {Object} sources the objects to copy properties from.  May be 1 to N arguments, but not an Array.
 * @return {Object} the destination object
 */
function mixin(dest /*, sources... */) {
	var i, l, source, name;

	if (!dest) { dest = {}; }
	for (i = 1, l = arguments.length; i < l; i += 1) {
		source = arguments[i];
		for (name in source) {
			if (!(name in dest) || (dest[name] !== source[name] && (!(name in empty) || empty[name] !== source[name]))) {
				dest[name] = source[name];
			}
		}
	}

	return dest; // Object
}

module.exports = mixin;

},{}],"/Users/josephluck/apps/choo/src/node_modules/rest/util/normalizeHeaderName.js":[function(require,module,exports){
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

/**
 * Normalize HTTP header names using the pseudo camel case.
 *
 * For example:
 *   content-type         -> Content-Type
 *   accepts              -> Accepts
 *   x-custom-header-name -> X-Custom-Header-Name
 *
 * @param {string} name the raw header name
 * @return {string} the normalized header name
 */
function normalizeHeaderName(name) {
	return name.toLowerCase()
		.split('-')
		.map(function (chunk) { return chunk.charAt(0).toUpperCase() + chunk.slice(1); })
		.join('-');
}

module.exports = normalizeHeaderName;

},{}],"/Users/josephluck/apps/choo/src/node_modules/rest/util/responsePromise.js":[function(require,module,exports){
/*
 * Copyright 2014-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

/*jshint latedef: nofunc */

var normalizeHeaderName = require('./normalizeHeaderName');

function property(promise, name) {
	return promise.then(
		function (value) {
			return value && value[name];
		},
		function (value) {
			return Promise.reject(value && value[name]);
		}
	);
}

/**
 * Obtain the response entity
 *
 * @returns {Promise} for the response entity
 */
function entity() {
	/*jshint validthis:true */
	return property(this, 'entity');
}

/**
 * Obtain the response status
 *
 * @returns {Promise} for the response status
 */
function status() {
	/*jshint validthis:true */
	return property(property(this, 'status'), 'code');
}

/**
 * Obtain the response headers map
 *
 * @returns {Promise} for the response headers map
 */
function headers() {
	/*jshint validthis:true */
	return property(this, 'headers');
}

/**
 * Obtain a specific response header
 *
 * @param {String} headerName the header to retrieve
 * @returns {Promise} for the response header's value
 */
function header(headerName) {
	/*jshint validthis:true */
	headerName = normalizeHeaderName(headerName);
	return property(this.headers(), headerName);
}

/**
 * Follow a related resource
 *
 * The relationship to follow may be define as a plain string, an object
 * with the rel and params, or an array containing one or more entries
 * with the previous forms.
 *
 * Examples:
 *   response.follow('next')
 *
 *   response.follow({ rel: 'next', params: { pageSize: 100 } })
 *
 *   response.follow([
 *       { rel: 'items', params: { projection: 'noImages' } },
 *       'search',
 *       { rel: 'findByGalleryIsNull', params: { projection: 'noImages' } },
 *       'items'
 *   ])
 *
 * @param {String|Object|Array} rels one, or more, relationships to follow
 * @returns ResponsePromise<Response> related resource
 */
function follow(rels) {
	/*jshint validthis:true */
	rels = [].concat(rels);

	return make(rels.reduce(function (response, rel) {
		return response.then(function (response) {
			if (typeof rel === 'string') {
				rel = { rel: rel };
			}
			if (typeof response.entity.clientFor !== 'function') {
				throw new Error('Hypermedia response expected');
			}
			var client = response.entity.clientFor(rel.rel);
			return client({ params: rel.params });
		});
	}, this));
}

/**
 * Wrap a Promise as an ResponsePromise
 *
 * @param {Promise<Response>} promise the promise for an HTTP Response
 * @returns {ResponsePromise<Response>} wrapped promise for Response with additional helper methods
 */
function make(promise) {
	promise.status = status;
	promise.headers = headers;
	promise.header = header;
	promise.entity = entity;
	promise.follow = follow;
	return promise;
}

function responsePromise(obj, callback, errback) {
	return make(Promise.resolve(obj).then(callback, errback));
}

responsePromise.make = make;
responsePromise.reject = function (val) {
	return make(Promise.reject(val));
};
responsePromise.promise = function (func) {
	return make(new Promise(func));
};

module.exports = responsePromise;

},{"./normalizeHeaderName":"/Users/josephluck/apps/choo/src/node_modules/rest/util/normalizeHeaderName.js"}],"/Users/josephluck/apps/choo/src/node_modules/rest/util/uriEncoder.js":[function(require,module,exports){
/*
 * Copyright 2015-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

var charMap;

charMap = (function () {
	var strings = {
		alpha: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
		digit: '0123456789'
	};

	strings.genDelims = ':/?#[]@';
	strings.subDelims = '!$&\'()*+,;=';
	strings.reserved = strings.genDelims + strings.subDelims;
	strings.unreserved = strings.alpha + strings.digit + '-._~';
	strings.url = strings.reserved + strings.unreserved;
	strings.scheme = strings.alpha + strings.digit + '+-.';
	strings.userinfo = strings.unreserved + strings.subDelims + ':';
	strings.host = strings.unreserved + strings.subDelims;
	strings.port = strings.digit;
	strings.pchar = strings.unreserved + strings.subDelims + ':@';
	strings.segment = strings.pchar;
	strings.path = strings.segment + '/';
	strings.query = strings.pchar + '/?';
	strings.fragment = strings.pchar + '/?';

	return Object.keys(strings).reduce(function (charMap, set) {
		charMap[set] = strings[set].split('').reduce(function (chars, myChar) {
			chars[myChar] = true;
			return chars;
		}, {});
		return charMap;
	}, {});
}());

function encode(str, allowed) {
	if (typeof str !== 'string') {
		throw new Error('String required for URL encoding');
	}
	return str.split('').map(function (myChar) {
		if (allowed.hasOwnProperty(myChar)) {
			return myChar;
		}
		var code = myChar.charCodeAt(0);
		if (code <= 127) {
			var encoded = code.toString(16).toUpperCase();
 			return '%' + (encoded.length % 2 === 1 ? '0' : '') + encoded;
		}
		else {
			return encodeURIComponent(myChar).toUpperCase();
		}
	}).join('');
}

function makeEncoder(allowed) {
	allowed = allowed || charMap.unreserved;
	return function (str) {
		return encode(str, allowed);
	};
}

function decode(str) {
	return decodeURIComponent(str);
}

module.exports = {

	/*
	 * Decode URL encoded strings
	 *
	 * @param {string} URL encoded string
	 * @returns {string} URL decoded string
	 */
	decode: decode,

	/*
	 * URL encode a string
	 *
	 * All but alpha-numerics and a very limited set of punctuation - . _ ~ are
	 * encoded.
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encode: makeEncoder(),

	/*
	* URL encode a URL
	*
	* All character permitted anywhere in a URL are left unencoded even
	* if that character is not permitted in that portion of a URL.
	*
	* Note: This method is typically not what you want.
	*
	* @param {string} string to encode
	* @returns {string} URL encoded string
	*/
	encodeURL: makeEncoder(charMap.url),

	/*
	 * URL encode the scheme portion of a URL
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encodeScheme: makeEncoder(charMap.scheme),

	/*
	 * URL encode the user info portion of a URL
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encodeUserInfo: makeEncoder(charMap.userinfo),

	/*
	 * URL encode the host portion of a URL
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encodeHost: makeEncoder(charMap.host),

	/*
	 * URL encode the port portion of a URL
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encodePort: makeEncoder(charMap.port),

	/*
	 * URL encode a path segment portion of a URL
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encodePathSegment: makeEncoder(charMap.segment),

	/*
	 * URL encode the path portion of a URL
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encodePath: makeEncoder(charMap.path),

	/*
	 * URL encode the query portion of a URL
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encodeQuery: makeEncoder(charMap.query),

	/*
	 * URL encode the fragment portion of a URL
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encodeFragment: makeEncoder(charMap.fragment)

};

},{}],"/Users/josephluck/apps/choo/src/node_modules/rest/util/uriTemplate.js":[function(require,module,exports){
/*
 * Copyright 2015-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

'use strict';

var uriEncoder, operations, prefixRE;

uriEncoder = require('./uriEncoder');

prefixRE = /^([^:]*):([0-9]+)$/;
operations = {
	'':  { first: '',  separator: ',', named: false, empty: '',  encoder: uriEncoder.encode },
	'+': { first: '',  separator: ',', named: false, empty: '',  encoder: uriEncoder.encodeURL },
	'#': { first: '#', separator: ',', named: false, empty: '',  encoder: uriEncoder.encodeURL },
	'.': { first: '.', separator: '.', named: false, empty: '',  encoder: uriEncoder.encode },
	'/': { first: '/', separator: '/', named: false, empty: '',  encoder: uriEncoder.encode },
	';': { first: ';', separator: ';', named: true,  empty: '',  encoder: uriEncoder.encode },
	'?': { first: '?', separator: '&', named: true,  empty: '=', encoder: uriEncoder.encode },
	'&': { first: '&', separator: '&', named: true,  empty: '=', encoder: uriEncoder.encode },
	'=': { reserved: true },
	',': { reserved: true },
	'!': { reserved: true },
	'@': { reserved: true },
	'|': { reserved: true }
};

function apply(operation, expression, params) {
	/*jshint maxcomplexity:11 */
	return expression.split(',').reduce(function (result, variable) {
		var opts, value;

		opts = {};
		if (variable.slice(-1) === '*') {
			variable = variable.slice(0, -1);
			opts.explode = true;
		}
		if (prefixRE.test(variable)) {
			var prefix = prefixRE.exec(variable);
			variable = prefix[1];
			opts.maxLength = parseInt(prefix[2]);
		}

		variable = uriEncoder.decode(variable);
		value = params[variable];

		if (value === void 0 || value === null) {
			return result;
		}
		if (Array.isArray(value)) {
			result = value.reduce(function (result, value) {
				if (result.length) {
					result += opts.explode ? operation.separator : ',';
					if (operation.named && opts.explode) {
						result += operation.encoder(variable);
						result += value.length ? '=' : operation.empty;
					}
				}
				else {
					result += operation.first;
					if (operation.named) {
						result += operation.encoder(variable);
						result += value.length ? '=' : operation.empty;
					}
				}
				result += operation.encoder(value);
				return result;
			}, result);
		}
		else if (typeof value === 'object') {
			result = Object.keys(value).reduce(function (result, name) {
				if (result.length) {
					result += opts.explode ? operation.separator : ',';
				}
				else {
					result += operation.first;
					if (operation.named && !opts.explode) {
						result += operation.encoder(variable);
						result += value[name].length ? '=' : operation.empty;
					}
				}
				result += operation.encoder(name);
				result += opts.explode ? '=' : ',';
				result += operation.encoder(value[name]);
				return result;
			}, result);
		}
		else {
			value = String(value);
			if (opts.maxLength) {
				value = value.slice(0, opts.maxLength);
			}
			result += result.length ? operation.separator : operation.first;
			if (operation.named) {
				result += operation.encoder(variable);
				result += value.length ? '=' : operation.empty;
			}
			result += operation.encoder(value);
		}

		return result;
	}, '');
}

function expandExpression(expression, params) {
	var operation;

	operation = operations[expression.slice(0,1)];
	if (operation) {
		expression = expression.slice(1);
	}
	else {
		operation = operations[''];
	}

	if (operation.reserved) {
		throw new Error('Reserved expression operations are not supported');
	}

	return apply(operation, expression, params);
}

function expandTemplate(template, params) {
	var start, end, uri;

	uri = '';
	end = 0;
	while (true) {
		start = template.indexOf('{', end);
		if (start === -1) {
			// no more expressions
			uri += template.slice(end);
			break;
		}
		uri += template.slice(end, start);
		end = template.indexOf('}', start) + 1;
		uri += expandExpression(template.slice(start + 1, end - 1), params);
	}

	return uri;
}

module.exports = {

	/**
	 * Expand a URI Template with parameters to form a URI.
	 *
	 * Full implementation (level 4) of rfc6570.
	 * @see https://tools.ietf.org/html/rfc6570
	 *
	 * @param {string} template URI template
	 * @param {Object} [params] params to apply to the template durring expantion
	 * @returns {string} expanded URI
	 */
	expand: expandTemplate

};

},{"./uriEncoder":"/Users/josephluck/apps/choo/src/node_modules/rest/util/uriEncoder.js"}],"/Users/josephluck/apps/choo/src/node_modules/sheet-router/_pathname.js":[function(require,module,exports){
/* eslint-disable no-useless-escape */
const electron = '^(file:\/\/|\/)(.*\.html?\/?)?'
const protocol = '^(http(s)?(:\/\/))?(www\.)?'
const domain = '[a-zA-Z0-9-_\.]+(:[0-9]{1,5})?(\/{1})?'
const qs = '[\?].*$'
/* eslint-enable no-useless-escape */

const stripElectron = new RegExp(electron)
const prefix = new RegExp(protocol + domain)
const normalize = new RegExp('#')
const suffix = new RegExp(qs)

module.exports = pathname

// replace everything in a route but the pathname and hash
// TODO(yw): ditch 'suffix' and allow qs routing
// (str, bool) -> str
function pathname (route, isElectron) {
  if (isElectron) route = route.replace(stripElectron, '')
  else route = route.replace(prefix, '')
  return route.replace(suffix, '').replace(normalize, '/')
}

},{}],"/Users/josephluck/apps/choo/src/node_modules/sheet-router/create-location.js":[function(require,module,exports){
const document = require('global/document')
const assert = require('assert')
const xtend = require('xtend')

const qs = require('./qs')

module.exports = createLocation

// takes an initial representation of the location state
// and then synchronize a mutation across all fields
//
// scenarios:
// - create a state object from document.location; we got no state yet
// - create a new state object from a string we pass in; full override mode
// - patch a state object with some value we pass in - lil patchy stuff
//
// (obj?, str?) -> obj
function createLocation (state, patch) {
  if (!state) {
    const newLocation = {
      pathname: document.location.pathname,
      search: (document.location.search) ? qs(document.location.search) : {},
      hash: document.location.hash,
      href: document.location.href
    }
    return newLocation
  } else {
    assert.equal(typeof state, 'object', 'sheet-router/create-location: state should be an object')
    if (typeof patch === 'string') {
      const newLocation = parseUrl(patch)
      return newLocation
    } else {
      assert.equal(typeof patch, 'object', 'sheet-router/create-location: patch should be an object')
      const newLocation = xtend(state, patch)
      return newLocation
    }
  }

  // parse a URL into a kv object inside the browser
  // str -> obj
  function parseUrl (url) {
    const a = document.createElement('a')
    a.href = url

    return {
      href: a.href,
      pathname: a.pathname,
      search: (a.search) ? qs(a.search) : {},
      hash: a.hash
    }
  }
}

},{"./qs":"/Users/josephluck/apps/choo/src/node_modules/sheet-router/qs.js","assert":"/Users/josephluck/apps/choo/src/node_modules/assert/assert.js","global/document":"/Users/josephluck/apps/choo/src/node_modules/global/document.js","xtend":"/Users/josephluck/apps/choo/src/node_modules/xtend/immutable.js"}],"/Users/josephluck/apps/choo/src/node_modules/sheet-router/history.js":[function(require,module,exports){
const document = require('global/document')
const window = require('global/window')
const assert = require('assert')

module.exports = history

// listen to html5 pushstate events
// and update router accordingly
// fn(str) -> null
function history (cb) {
  assert.equal(typeof cb, 'function', 'sheet-router/history: cb must be a function')
  window.onpopstate = function () {
    cb({
      pathname: document.location.pathname,
      search: document.location.search,
      href: document.location.href,
      hash: document.location.hash
    })
  }
}

},{"assert":"/Users/josephluck/apps/choo/src/node_modules/assert/assert.js","global/document":"/Users/josephluck/apps/choo/src/node_modules/global/document.js","global/window":"/Users/josephluck/apps/choo/src/node_modules/global/window.js"}],"/Users/josephluck/apps/choo/src/node_modules/sheet-router/href.js":[function(require,module,exports){
const window = require('global/window')
const assert = require('assert')

const qs = require('./qs')

module.exports = href

const noRoutingAttrName = 'data-no-routing'

// handle a click if is anchor tag with an href
// and url lives on the same domain. Replaces
// trailing '#' so empty links work as expected.
// (fn(str), obj?) -> undefined
function href (cb, root) {
  assert.equal(typeof cb, 'function', 'sheet-router/href: cb must be a function')

  window.onclick = function (e) {
    if ((e.button && e.button !== 0) || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return

    const node = (function traverse (node) {
      if (!node || node === root) return
      if (node.localName !== 'a') return traverse(node.parentNode)
      if (node.href === undefined) return traverse(node.parentNode)
      if (window.location.host !== node.host) return traverse(node.parentNode)
      return node
    })(e.target)

    if (!node) return

    const isRoutingDisabled = node.hasAttribute(noRoutingAttrName)
    if (isRoutingDisabled) return

    e.preventDefault()
    cb({
      pathname: node.pathname,
      search: (node.search) ? qs(node.search) : {},
      href: node.href,
      hash: node.hash
    })
  }
}

},{"./qs":"/Users/josephluck/apps/choo/src/node_modules/sheet-router/qs.js","assert":"/Users/josephluck/apps/choo/src/node_modules/assert/assert.js","global/window":"/Users/josephluck/apps/choo/src/node_modules/global/window.js"}],"/Users/josephluck/apps/choo/src/node_modules/sheet-router/index.js":[function(require,module,exports){
const window = require('global/window')
const pathname = require('./_pathname')
const wayfarer = require('wayfarer')
const assert = require('assert')

const isElectron = (window.process && window.process.type)

module.exports = sheetRouter

// Fast, modular client router
// fn(str, any[..]) -> fn(str, any[..])
function sheetRouter (opts, tree) {
  if (!tree) {
    tree = opts
    opts = {}
  }

  assert.equal(typeof opts, 'object', 'sheet-router: opts must be a object')
  assert.ok(Array.isArray(tree), 'sheet-router: tree must be an array')

  const dft = opts.default || '/404'
  assert.equal(typeof dft, 'string', 'sheet-router: dft must be a string')

  const router = wayfarer(dft)
  var prevCallback = null
  var prevRoute = null

  match._router = router

  // register tree in router
  // tree[0] is a string, thus a route
  // tree[0] is an array, thus not a route
  // tree[1] is a function
    // tree[2] is an array
    // tree[2] is not an array
  // tree[1] is an array
  ;(function walk (tree, fullRoute) {
    if (typeof tree[0] === 'string') {
      var route = tree[0].replace(/^[#\/]/, '')
    } else {
      var rootArr = tree[0]
    }

    const cb = (typeof tree[1] === 'function') ? tree[1] : null
    const children = (Array.isArray(tree[1]))
      ? tree[1]
      : Array.isArray(tree[2]) ? tree[2] : null

    if (rootArr) {
      tree.forEach(function (node) {
        walk(node, fullRoute)
      })
    }

    if (cb) {
      const innerRoute = route
        ? fullRoute.concat(route).join('/')
        : fullRoute.length ? fullRoute.join('/') : route

      // if opts.thunk is false or only enabled for match, don't thunk
      const handler = (opts.thunk === false || opts.thunk === 'match')
        ? cb
        : thunkify(cb)
      router.on(innerRoute, handler)
    }

    if (Array.isArray(children)) {
      walk(children, fullRoute.concat(route))
    }
  })(tree, [])

  return match

  // match a route on the router
  //
  // no thunking -> call route with all arguments
  // thunking only for match -> call route with all arguments
  // thunking and route is same -> call prev cb with new args
  // thunking and route is diff -> create cb and call with new args
  //
  // (str, [any..]) -> any
  function match (route, arg1, arg2, arg3, arg4, arg5) {
    assert.equal(typeof route, 'string', 'sheet-router: route must be a string')

    if (opts.thunk === false) {
      return router(pathname(route, isElectron), arg1, arg2, arg3, arg4, arg5)
    } else if (route === prevRoute) {
      return prevCallback(arg1, arg2, arg3, arg4, arg5)
    } else {
      prevRoute = pathname(route, isElectron)
      prevCallback = router(prevRoute)
      return prevCallback(arg1, arg2, arg3, arg4, arg5)
    }
  }
}

// wrap a function in a function so it can be called at a later time
// fn -> obj -> (any, any, any, any, any)
function thunkify (cb) {
  return function (params) {
    return function (arg1, arg2, arg3, arg4, arg5) {
      return cb(params, arg1, arg2, arg3, arg4, arg5)
    }
  }
}

},{"./_pathname":"/Users/josephluck/apps/choo/src/node_modules/sheet-router/_pathname.js","assert":"/Users/josephluck/apps/choo/src/node_modules/assert/assert.js","global/window":"/Users/josephluck/apps/choo/src/node_modules/global/window.js","wayfarer":"/Users/josephluck/apps/choo/src/node_modules/wayfarer/index.js"}],"/Users/josephluck/apps/choo/src/node_modules/sheet-router/qs.js":[function(require,module,exports){
const window = require('global/window')

const decodeURIComponent = window.decodeURIComponent
const reg = new RegExp('([^?=&]+)(=([^&]*))?', 'g')

module.exports = qs

// decode a uri into a kv representation :: str -> obj
function qs (uri) {
  const obj = {}
  uri.replace(/^.*\?/, '').replace(reg, map)
  return obj

  function map (a0, a1, a2, a3) {
    obj[decodeURIComponent(a1)] = decodeURIComponent(a3)
  }
}

},{"global/window":"/Users/josephluck/apps/choo/src/node_modules/global/window.js"}],"/Users/josephluck/apps/choo/src/node_modules/sheet-router/walk.js":[function(require,module,exports){
const walk = require('wayfarer/walk')
const assert = require('assert')

module.exports = walkSheetRouter

function walkSheetRouter (router, cb) {
  assert.equal(typeof router, 'function', 'sheet-router/walk: router should be a function')
  assert.equal(typeof cb, 'function', 'sheet-router/walk: cb should be a function')

  router = router._router
  return walk(router, cb)
}

},{"assert":"/Users/josephluck/apps/choo/src/node_modules/assert/assert.js","wayfarer/walk":"/Users/josephluck/apps/choo/src/node_modules/wayfarer/walk.js"}],"/Users/josephluck/apps/choo/src/node_modules/sheetify/insert.js":[function(require,module,exports){
module.exports = require('insert-css')

},{"insert-css":"/Users/josephluck/apps/choo/src/node_modules/insert-css/index.js"}],"/Users/josephluck/apps/choo/src/node_modules/util/node_modules/inherits/inherits_browser.js":[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"/Users/josephluck/apps/choo/src/node_modules/util/support/isBufferBrowser.js":[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],"/Users/josephluck/apps/choo/src/node_modules/util/util.js":[function(require,module,exports){
(function (process,global){
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
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
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
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
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
          }).join('\n').substr(2);
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
      name = name.substr(1, name.length - 2);
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

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

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

exports.isBuffer = require('./support/isBuffer');

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
exports.inherits = require('inherits');

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

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":"/Users/josephluck/apps/choo/src/node_modules/util/support/isBufferBrowser.js","_process":"/Users/josephluck/apps/choo/src/node_modules/browserify/node_modules/process/browser.js","inherits":"/Users/josephluck/apps/choo/src/node_modules/util/node_modules/inherits/inherits_browser.js"}],"/Users/josephluck/apps/choo/src/node_modules/validate.js/validate.js":[function(require,module,exports){
/*!
 * validate.js 0.11.1
 *
 * (c) 2013-2016 Nicklas Ansman, 2013 Wrapp
 * Validate.js may be freely distributed under the MIT license.
 * For all details and documentation:
 * http://validatejs.org/
 */

(function(exports, module, define) {
  "use strict";

  // The main function that calls the validators specified by the constraints.
  // The options are the following:
  //   - format (string) - An option that controls how the returned value is formatted
  //     * flat - Returns a flat array of just the error messages
  //     * grouped - Returns the messages grouped by attribute (default)
  //     * detailed - Returns an array of the raw validation data
  //   - fullMessages (boolean) - If `true` (default) the attribute name is prepended to the error.
  //
  // Please note that the options are also passed to each validator.
  var validate = function(attributes, constraints, options) {
    options = v.extend({}, v.options, options);

    var results = v.runValidations(attributes, constraints, options)
      , attr
      , validator;

    for (attr in results) {
      for (validator in results[attr]) {
        if (v.isPromise(results[attr][validator])) {
          throw new Error("Use validate.async if you want support for promises");
        }
      }
    }
    return validate.processValidationResults(results, options);
  };

  var v = validate;

  // Copies over attributes from one or more sources to a single destination.
  // Very much similar to underscore's extend.
  // The first argument is the target object and the remaining arguments will be
  // used as sources.
  v.extend = function(obj) {
    [].slice.call(arguments, 1).forEach(function(source) {
      for (var attr in source) {
        obj[attr] = source[attr];
      }
    });
    return obj;
  };

  v.extend(validate, {
    // This is the version of the library as a semver.
    // The toString function will allow it to be coerced into a string
    version: {
      major: 0,
      minor: 11,
      patch: 1,
      metadata: null,
      toString: function() {
        var version = v.format("%{major}.%{minor}.%{patch}", v.version);
        if (!v.isEmpty(v.version.metadata)) {
          version += "+" + v.version.metadata;
        }
        return version;
      }
    },

    // Below is the dependencies that are used in validate.js

    // The constructor of the Promise implementation.
    // If you are using Q.js, RSVP or any other A+ compatible implementation
    // override this attribute to be the constructor of that promise.
    // Since jQuery promises aren't A+ compatible they won't work.
    Promise: typeof Promise !== "undefined" ? Promise : /* istanbul ignore next */ null,

    EMPTY_STRING_REGEXP: /^\s*$/,

    // Runs the validators specified by the constraints object.
    // Will return an array of the format:
    //     [{attribute: "<attribute name>", error: "<validation result>"}, ...]
    runValidations: function(attributes, constraints, options) {
      var results = []
        , attr
        , validatorName
        , value
        , validators
        , validator
        , validatorOptions
        , error;

      if (v.isDomElement(attributes) || v.isJqueryElement(attributes)) {
        attributes = v.collectFormValues(attributes);
      }

      // Loops through each constraints, finds the correct validator and run it.
      for (attr in constraints) {
        value = v.getDeepObjectValue(attributes, attr);
        // This allows the constraints for an attribute to be a function.
        // The function will be called with the value, attribute name, the complete dict of
        // attributes as well as the options and constraints passed in.
        // This is useful when you want to have different
        // validations depending on the attribute value.
        validators = v.result(constraints[attr], value, attributes, attr, options, constraints);

        for (validatorName in validators) {
          validator = v.validators[validatorName];

          if (!validator) {
            error = v.format("Unknown validator %{name}", {name: validatorName});
            throw new Error(error);
          }

          validatorOptions = validators[validatorName];
          // This allows the options to be a function. The function will be
          // called with the value, attribute name, the complete dict of
          // attributes as well as the options and constraints passed in.
          // This is useful when you want to have different
          // validations depending on the attribute value.
          validatorOptions = v.result(validatorOptions, value, attributes, attr, options, constraints);
          if (!validatorOptions) {
            continue;
          }
          results.push({
            attribute: attr,
            value: value,
            validator: validatorName,
            globalOptions: options,
            attributes: attributes,
            options: validatorOptions,
            error: validator.call(validator,
                value,
                validatorOptions,
                attr,
                attributes,
                options)
          });
        }
      }

      return results;
    },

    // Takes the output from runValidations and converts it to the correct
    // output format.
    processValidationResults: function(errors, options) {
      errors = v.pruneEmptyErrors(errors, options);
      errors = v.expandMultipleErrors(errors, options);
      errors = v.convertErrorMessages(errors, options);

      var format = options.format || "grouped";

      if (typeof v.formatters[format] === 'function') {
        errors = v.formatters[format](errors);
      } else {
        throw new Error(v.format("Unknown format %{format}", options));
      }

      return v.isEmpty(errors) ? undefined : errors;
    },

    // Runs the validations with support for promises.
    // This function will return a promise that is settled when all the
    // validation promises have been completed.
    // It can be called even if no validations returned a promise.
    async: function(attributes, constraints, options) {
      options = v.extend({}, v.async.options, options);

      var WrapErrors = options.wrapErrors || function(errors) {
        return errors;
      };

      // Removes unknown attributes
      if (options.cleanAttributes !== false) {
        attributes = v.cleanAttributes(attributes, constraints);
      }

      var results = v.runValidations(attributes, constraints, options);

      return new v.Promise(function(resolve, reject) {
        v.waitForResults(results).then(function() {
          var errors = v.processValidationResults(results, options);
          if (errors) {
            reject(new WrapErrors(errors, options, attributes, constraints));
          } else {
            resolve(attributes);
          }
        }, function(err) {
          reject(err);
        });
      });
    },

    single: function(value, constraints, options) {
      options = v.extend({}, v.single.options, options, {
        format: "flat",
        fullMessages: false
      });
      return v({single: value}, {single: constraints}, options);
    },

    // Returns a promise that is resolved when all promises in the results array
    // are settled. The promise returned from this function is always resolved,
    // never rejected.
    // This function modifies the input argument, it replaces the promises
    // with the value returned from the promise.
    waitForResults: function(results) {
      // Create a sequence of all the results starting with a resolved promise.
      return results.reduce(function(memo, result) {
        // If this result isn't a promise skip it in the sequence.
        if (!v.isPromise(result.error)) {
          return memo;
        }

        return memo.then(function() {
          return result.error.then(function(error) {
            result.error = error || null;
          });
        });
      }, new v.Promise(function(r) { r(); })); // A resolved promise
    },

    // If the given argument is a call: function the and: function return the value
    // otherwise just return the value. Additional arguments will be passed as
    // arguments to the function.
    // Example:
    // ```
    // result('foo') // 'foo'
    // result(Math.max, 1, 2) // 2
    // ```
    result: function(value) {
      var args = [].slice.call(arguments, 1);
      if (typeof value === 'function') {
        value = value.apply(null, args);
      }
      return value;
    },

    // Checks if the value is a number. This function does not consider NaN a
    // number like many other `isNumber` functions do.
    isNumber: function(value) {
      return typeof value === 'number' && !isNaN(value);
    },

    // Returns false if the object is not a function
    isFunction: function(value) {
      return typeof value === 'function';
    },

    // A simple check to verify that the value is an integer. Uses `isNumber`
    // and a simple modulo check.
    isInteger: function(value) {
      return v.isNumber(value) && value % 1 === 0;
    },

    // Checks if the value is a boolean
    isBoolean: function(value) {
      return typeof value === 'boolean';
    },

    // Uses the `Object` function to check if the given argument is an object.
    isObject: function(obj) {
      return obj === Object(obj);
    },

    // Simply checks if the object is an instance of a date
    isDate: function(obj) {
      return obj instanceof Date;
    },

    // Returns false if the object is `null` of `undefined`
    isDefined: function(obj) {
      return obj !== null && obj !== undefined;
    },

    // Checks if the given argument is a promise. Anything with a `then`
    // function is considered a promise.
    isPromise: function(p) {
      return !!p && v.isFunction(p.then);
    },

    isJqueryElement: function(o) {
      return o && v.isString(o.jquery);
    },

    isDomElement: function(o) {
      if (!o) {
        return false;
      }

      if (!o.querySelectorAll || !o.querySelector) {
        return false;
      }

      if (v.isObject(document) && o === document) {
        return true;
      }

      // http://stackoverflow.com/a/384380/699304
      /* istanbul ignore else */
      if (typeof HTMLElement === "object") {
        return o instanceof HTMLElement;
      } else {
        return o &&
          typeof o === "object" &&
          o !== null &&
          o.nodeType === 1 &&
          typeof o.nodeName === "string";
      }
    },

    isEmpty: function(value) {
      var attr;

      // Null and undefined are empty
      if (!v.isDefined(value)) {
        return true;
      }

      // functions are non empty
      if (v.isFunction(value)) {
        return false;
      }

      // Whitespace only strings are empty
      if (v.isString(value)) {
        return v.EMPTY_STRING_REGEXP.test(value);
      }

      // For arrays we use the length property
      if (v.isArray(value)) {
        return value.length === 0;
      }

      // Dates have no attributes but aren't empty
      if (v.isDate(value)) {
        return false;
      }

      // If we find at least one property we consider it non empty
      if (v.isObject(value)) {
        for (attr in value) {
          return false;
        }
        return true;
      }

      return false;
    },

    // Formats the specified strings with the given values like so:
    // ```
    // format("Foo: %{foo}", {foo: "bar"}) // "Foo bar"
    // ```
    // If you want to write %{...} without having it replaced simply
    // prefix it with % like this `Foo: %%{foo}` and it will be returned
    // as `"Foo: %{foo}"`
    format: v.extend(function(str, vals) {
      if (!v.isString(str)) {
        return str;
      }
      return str.replace(v.format.FORMAT_REGEXP, function(m0, m1, m2) {
        if (m1 === '%') {
          return "%{" + m2 + "}";
        } else {
          return String(vals[m2]);
        }
      });
    }, {
      // Finds %{key} style patterns in the given string
      FORMAT_REGEXP: /(%?)%\{([^\}]+)\}/g
    }),

    // "Prettifies" the given string.
    // Prettifying means replacing [.\_-] with spaces as well as splitting
    // camel case words.
    prettify: function(str) {
      if (v.isNumber(str)) {
        // If there are more than 2 decimals round it to two
        if ((str * 100) % 1 === 0) {
          return "" + str;
        } else {
          return parseFloat(Math.round(str * 100) / 100).toFixed(2);
        }
      }

      if (v.isArray(str)) {
        return str.map(function(s) { return v.prettify(s); }).join(", ");
      }

      if (v.isObject(str)) {
        return str.toString();
      }

      // Ensure the string is actually a string
      str = "" + str;

      return str
        // Splits keys separated by periods
        .replace(/([^\s])\.([^\s])/g, '$1 $2')
        // Removes backslashes
        .replace(/\\+/g, '')
        // Replaces - and - with space
        .replace(/[_-]/g, ' ')
        // Splits camel cased words
        .replace(/([a-z])([A-Z])/g, function(m0, m1, m2) {
          return "" + m1 + " " + m2.toLowerCase();
        })
        .toLowerCase();
    },

    stringifyValue: function(value) {
      return v.prettify(value);
    },

    isString: function(value) {
      return typeof value === 'string';
    },

    isArray: function(value) {
      return {}.toString.call(value) === '[object Array]';
    },

    // Checks if the object is a hash, which is equivalent to an object that
    // is neither an array nor a function.
    isHash: function(value) {
      return v.isObject(value) && !v.isArray(value) && !v.isFunction(value);
    },

    contains: function(obj, value) {
      if (!v.isDefined(obj)) {
        return false;
      }
      if (v.isArray(obj)) {
        return obj.indexOf(value) !== -1;
      }
      return value in obj;
    },

    unique: function(array) {
      if (!v.isArray(array)) {
        return array;
      }
      return array.filter(function(el, index, array) {
        return array.indexOf(el) == index;
      });
    },

    forEachKeyInKeypath: function(object, keypath, callback) {
      if (!v.isString(keypath)) {
        return undefined;
      }

      var key = ""
        , i
        , escape = false;

      for (i = 0; i < keypath.length; ++i) {
        switch (keypath[i]) {
          case '.':
            if (escape) {
              escape = false;
              key += '.';
            } else {
              object = callback(object, key, false);
              key = "";
            }
            break;

          case '\\':
            if (escape) {
              escape = false;
              key += '\\';
            } else {
              escape = true;
            }
            break;

          default:
            escape = false;
            key += keypath[i];
            break;
        }
      }

      return callback(object, key, true);
    },

    getDeepObjectValue: function(obj, keypath) {
      if (!v.isObject(obj)) {
        return undefined;
      }

      return v.forEachKeyInKeypath(obj, keypath, function(obj, key) {
        if (v.isObject(obj)) {
          return obj[key];
        }
      });
    },

    // This returns an object with all the values of the form.
    // It uses the input name as key and the value as value
    // So for example this:
    // <input type="text" name="email" value="foo@bar.com" />
    // would return:
    // {email: "foo@bar.com"}
    collectFormValues: function(form, options) {
      var values = {}
        , i
        , j
        , input
        , inputs
        , option
        , value;

      if (v.isJqueryElement(form)) {
        form = form[0];
      }

      if (!form) {
        return values;
      }

      options = options || {};

      inputs = form.querySelectorAll("input[name], textarea[name]");
      for (i = 0; i < inputs.length; ++i) {
        input = inputs.item(i);

        if (v.isDefined(input.getAttribute("data-ignored"))) {
          continue;
        }

        value = v.sanitizeFormValue(input.value, options);
        if (input.type === "number") {
          value = value ? +value : null;
        } else if (input.type === "checkbox") {
          if (input.attributes.value) {
            if (!input.checked) {
              value = values[input.name] || null;
            }
          } else {
            value = input.checked;
          }
        } else if (input.type === "radio") {
          if (!input.checked) {
            value = values[input.name] || null;
          }
        }
        values[input.name] = value;
      }

      inputs = form.querySelectorAll("select[name]");
      for (i = 0; i < inputs.length; ++i) {
        input = inputs.item(i);
        if (input.multiple) {
          value = [];
          for (j in input.options) {
            option = input.options[j];
            if (option.selected) {
              value.push(v.sanitizeFormValue(option.value, options));
            }
          }
        } else {
          value = v.sanitizeFormValue(input.options[input.selectedIndex].value, options);
        }
        values[input.name] = value;
      }

      return values;
    },

    sanitizeFormValue: function(value, options) {
      if (options.trim && v.isString(value)) {
        value = value.trim();
      }

      if (options.nullify !== false && value === "") {
        return null;
      }
      return value;
    },

    capitalize: function(str) {
      if (!v.isString(str)) {
        return str;
      }
      return str[0].toUpperCase() + str.slice(1);
    },

    // Remove all errors who's error attribute is empty (null or undefined)
    pruneEmptyErrors: function(errors) {
      return errors.filter(function(error) {
        return !v.isEmpty(error.error);
      });
    },

    // In
    // [{error: ["err1", "err2"], ...}]
    // Out
    // [{error: "err1", ...}, {error: "err2", ...}]
    //
    // All attributes in an error with multiple messages are duplicated
    // when expanding the errors.
    expandMultipleErrors: function(errors) {
      var ret = [];
      errors.forEach(function(error) {
        // Removes errors without a message
        if (v.isArray(error.error)) {
          error.error.forEach(function(msg) {
            ret.push(v.extend({}, error, {error: msg}));
          });
        } else {
          ret.push(error);
        }
      });
      return ret;
    },

    // Converts the error mesages by prepending the attribute name unless the
    // message is prefixed by ^
    convertErrorMessages: function(errors, options) {
      options = options || {};

      var ret = [];
      errors.forEach(function(errorInfo) {
        var error = v.result(errorInfo.error,
            errorInfo.value,
            errorInfo.attribute,
            errorInfo.options,
            errorInfo.attributes,
            errorInfo.globalOptions);

        if (!v.isString(error)) {
          ret.push(errorInfo);
          return;
        }

        if (error[0] === '^') {
          error = error.slice(1);
        } else if (options.fullMessages !== false) {
          error = v.capitalize(v.prettify(errorInfo.attribute)) + " " + error;
        }
        error = error.replace(/\\\^/g, "^");
        error = v.format(error, {value: v.stringifyValue(errorInfo.value)});
        ret.push(v.extend({}, errorInfo, {error: error}));
      });
      return ret;
    },

    // In:
    // [{attribute: "<attributeName>", ...}]
    // Out:
    // {"<attributeName>": [{attribute: "<attributeName>", ...}]}
    groupErrorsByAttribute: function(errors) {
      var ret = {};
      errors.forEach(function(error) {
        var list = ret[error.attribute];
        if (list) {
          list.push(error);
        } else {
          ret[error.attribute] = [error];
        }
      });
      return ret;
    },

    // In:
    // [{error: "<message 1>", ...}, {error: "<message 2>", ...}]
    // Out:
    // ["<message 1>", "<message 2>"]
    flattenErrorsToArray: function(errors) {
      return errors
        .map(function(error) { return error.error; })
        .filter(function(value, index, self) {
          return self.indexOf(value) === index;
        });
    },

    cleanAttributes: function(attributes, whitelist) {
      function whitelistCreator(obj, key, last) {
        if (v.isObject(obj[key])) {
          return obj[key];
        }
        return (obj[key] = last ? true : {});
      }

      function buildObjectWhitelist(whitelist) {
        var ow = {}
          , lastObject
          , attr;
        for (attr in whitelist) {
          if (!whitelist[attr]) {
            continue;
          }
          v.forEachKeyInKeypath(ow, attr, whitelistCreator);
        }
        return ow;
      }

      function cleanRecursive(attributes, whitelist) {
        if (!v.isObject(attributes)) {
          return attributes;
        }

        var ret = v.extend({}, attributes)
          , w
          , attribute;

        for (attribute in attributes) {
          w = whitelist[attribute];

          if (v.isObject(w)) {
            ret[attribute] = cleanRecursive(ret[attribute], w);
          } else if (!w) {
            delete ret[attribute];
          }
        }
        return ret;
      }

      if (!v.isObject(whitelist) || !v.isObject(attributes)) {
        return {};
      }

      whitelist = buildObjectWhitelist(whitelist);
      return cleanRecursive(attributes, whitelist);
    },

    exposeModule: function(validate, root, exports, module, define) {
      if (exports) {
        if (module && module.exports) {
          exports = module.exports = validate;
        }
        exports.validate = validate;
      } else {
        root.validate = validate;
        if (validate.isFunction(define) && define.amd) {
          define([], function () { return validate; });
        }
      }
    },

    warn: function(msg) {
      if (typeof console !== "undefined" && console.warn) {
        console.warn("[validate.js] " + msg);
      }
    },

    error: function(msg) {
      if (typeof console !== "undefined" && console.error) {
        console.error("[validate.js] " + msg);
      }
    }
  });

  validate.validators = {
    // Presence validates that the value isn't empty
    presence: function(value, options) {
      options = v.extend({}, this.options, options);
      if (options.allowEmpty ? !v.isDefined(value) : v.isEmpty(value)) {
        return options.message || this.message || "can't be blank";
      }
    },
    length: function(value, options, attribute) {
      // Empty values are allowed
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var is = options.is
        , maximum = options.maximum
        , minimum = options.minimum
        , tokenizer = options.tokenizer || function(val) { return val; }
        , err
        , errors = [];

      value = tokenizer(value);
      var length = value.length;
      if(!v.isNumber(length)) {
        v.error(v.format("Attribute %{attr} has a non numeric value for `length`", {attr: attribute}));
        return options.message || this.notValid || "has an incorrect length";
      }

      // Is checks
      if (v.isNumber(is) && length !== is) {
        err = options.wrongLength ||
          this.wrongLength ||
          "is the wrong length (should be %{count} characters)";
        errors.push(v.format(err, {count: is}));
      }

      if (v.isNumber(minimum) && length < minimum) {
        err = options.tooShort ||
          this.tooShort ||
          "is too short (minimum is %{count} characters)";
        errors.push(v.format(err, {count: minimum}));
      }

      if (v.isNumber(maximum) && length > maximum) {
        err = options.tooLong ||
          this.tooLong ||
          "is too long (maximum is %{count} characters)";
        errors.push(v.format(err, {count: maximum}));
      }

      if (errors.length > 0) {
        return options.message || errors;
      }
    },
    numericality: function(value, options) {
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var errors = []
        , name
        , count
        , checks = {
            greaterThan:          function(v, c) { return v > c; },
            greaterThanOrEqualTo: function(v, c) { return v >= c; },
            equalTo:              function(v, c) { return v === c; },
            lessThan:             function(v, c) { return v < c; },
            lessThanOrEqualTo:    function(v, c) { return v <= c; },
            divisibleBy:          function(v, c) { return v % c === 0; }
          };

      // Strict will check that it is a valid looking number
      if (v.isString(value) && options.strict) {
        var pattern = "^(0|[1-9]\\d*)";
        if (!options.onlyInteger) {
          pattern += "(\\.\\d+)?";
        }
        pattern += "$";

        if (!(new RegExp(pattern).test(value))) {
          return options.message ||
            options.notValid ||
            this.notValid ||
            this.message ||
            "must be a valid number";
        }
      }

      // Coerce the value to a number unless we're being strict.
      if (options.noStrings !== true && v.isString(value) && !v.isEmpty(value)) {
        value = +value;
      }

      // If it's not a number we shouldn't continue since it will compare it.
      if (!v.isNumber(value)) {
        return options.message ||
          options.notValid ||
          this.notValid ||
          this.message ||
          "is not a number";
      }

      // Same logic as above, sort of. Don't bother with comparisons if this
      // doesn't pass.
      if (options.onlyInteger && !v.isInteger(value)) {
        return options.message ||
          options.notInteger ||
          this.notInteger ||
          this.message ||
          "must be an integer";
      }

      for (name in checks) {
        count = options[name];
        if (v.isNumber(count) && !checks[name](value, count)) {
          // This picks the default message if specified
          // For example the greaterThan check uses the message from
          // this.notGreaterThan so we capitalize the name and prepend "not"
          var key = "not" + v.capitalize(name);
          var msg = options[key] ||
            this[key] ||
            this.message ||
            "must be %{type} %{count}";

          errors.push(v.format(msg, {
            count: count,
            type: v.prettify(name)
          }));
        }
      }

      if (options.odd && value % 2 !== 1) {
        errors.push(options.notOdd ||
            this.notOdd ||
            this.message ||
            "must be odd");
      }
      if (options.even && value % 2 !== 0) {
        errors.push(options.notEven ||
            this.notEven ||
            this.message ||
            "must be even");
      }

      if (errors.length) {
        return options.message || errors;
      }
    },
    datetime: v.extend(function(value, options) {
      if (!v.isFunction(this.parse) || !v.isFunction(this.format)) {
        throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");
      }

      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var err
        , errors = []
        , earliest = options.earliest ? this.parse(options.earliest, options) : NaN
        , latest = options.latest ? this.parse(options.latest, options) : NaN;

      value = this.parse(value, options);

      // 86400000 is the number of seconds in a day, this is used to remove
      // the time from the date
      if (isNaN(value) || options.dateOnly && value % 86400000 !== 0) {
        err = options.notValid ||
          options.message ||
          this.notValid ||
          "must be a valid date";
        return v.format(err, {value: arguments[0]});
      }

      if (!isNaN(earliest) && value < earliest) {
        err = options.tooEarly ||
          options.message ||
          this.tooEarly ||
          "must be no earlier than %{date}";
        err = v.format(err, {
          value: this.format(value, options),
          date: this.format(earliest, options)
        });
        errors.push(err);
      }

      if (!isNaN(latest) && value > latest) {
        err = options.tooLate ||
          options.message ||
          this.tooLate ||
          "must be no later than %{date}";
        err = v.format(err, {
          date: this.format(latest, options),
          value: this.format(value, options)
        });
        errors.push(err);
      }

      if (errors.length) {
        return v.unique(errors);
      }
    }, {
      parse: null,
      format: null
    }),
    date: function(value, options) {
      options = v.extend({}, options, {dateOnly: true});
      return v.validators.datetime.call(v.validators.datetime, value, options);
    },
    format: function(value, options) {
      if (v.isString(options) || (options instanceof RegExp)) {
        options = {pattern: options};
      }

      options = v.extend({}, this.options, options);

      var message = options.message || this.message || "is invalid"
        , pattern = options.pattern
        , match;

      // Empty values are allowed
      if (!v.isDefined(value)) {
        return;
      }
      if (!v.isString(value)) {
        return message;
      }

      if (v.isString(pattern)) {
        pattern = new RegExp(options.pattern, options.flags);
      }
      match = pattern.exec(value);
      if (!match || match[0].length != value.length) {
        return message;
      }
    },
    inclusion: function(value, options) {
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }
      if (v.isArray(options)) {
        options = {within: options};
      }
      options = v.extend({}, this.options, options);
      if (v.contains(options.within, value)) {
        return;
      }
      var message = options.message ||
        this.message ||
        "^%{value} is not included in the list";
      return v.format(message, {value: value});
    },
    exclusion: function(value, options) {
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }
      if (v.isArray(options)) {
        options = {within: options};
      }
      options = v.extend({}, this.options, options);
      if (!v.contains(options.within, value)) {
        return;
      }
      var message = options.message || this.message || "^%{value} is restricted";
      return v.format(message, {value: value});
    },
    email: v.extend(function(value, options) {
      options = v.extend({}, this.options, options);
      var message = options.message || this.message || "is not a valid email";
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }
      if (!v.isString(value)) {
        return message;
      }
      if (!this.PATTERN.exec(value)) {
        return message;
      }
    }, {
      PATTERN: /^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i
    }),
    equality: function(value, options, attribute, attributes) {
      if (!v.isDefined(value)) {
        return;
      }

      if (v.isString(options)) {
        options = {attribute: options};
      }
      options = v.extend({}, this.options, options);
      var message = options.message ||
        this.message ||
        "is not equal to %{attribute}";

      if (v.isEmpty(options.attribute) || !v.isString(options.attribute)) {
        throw new Error("The attribute must be a non empty string");
      }

      var otherValue = v.getDeepObjectValue(attributes, options.attribute)
        , comparator = options.comparator || function(v1, v2) {
          return v1 === v2;
        };

      if (!comparator(value, otherValue, options, attribute, attributes)) {
        return v.format(message, {attribute: v.prettify(options.attribute)});
      }
    },

    // A URL validator that is used to validate URLs with the ability to
    // restrict schemes and some domains.
    url: function(value, options) {
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var message = options.message || this.message || "is not a valid url"
        , schemes = options.schemes || this.schemes || ['http', 'https']
        , allowLocal = options.allowLocal || this.allowLocal || false;

      if (!v.isString(value)) {
        return message;
      }

      // https://gist.github.com/dperini/729294
      var regex =
        "^" +
        // protocol identifier
        "(?:(?:" + schemes.join("|") + ")://)" +
        // user:pass authentication
        "(?:\\S+(?::\\S*)?@)?" +
        "(?:";

      var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";

      if (allowLocal) {
        tld += "?";
      } else {
        regex +=
          // IP address exclusion
          // private & local networks
          "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
          "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
          "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})";
      }

      regex +=
          // IP address dotted notation octets
          // excludes loopback network 0.0.0.0
          // excludes reserved space >= 224.0.0.0
          // excludes network & broacast addresses
          // (first & last IP address of each class)
          "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
          "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
          "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
        "|" +
          // host name
          "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
          // domain name
          "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
          tld +
        ")" +
        // port number
        "(?::\\d{2,5})?" +
        // resource path
        "(?:[/?#]\\S*)?" +
      "$";

      var PATTERN = new RegExp(regex, 'i');
      if (!PATTERN.exec(value)) {
        return message;
      }
    }
  };

  validate.formatters = {
    detailed: function(errors) {return errors;},
    flat: v.flattenErrorsToArray,
    grouped: function(errors) {
      var attr;

      errors = v.groupErrorsByAttribute(errors);
      for (attr in errors) {
        errors[attr] = v.flattenErrorsToArray(errors[attr]);
      }
      return errors;
    },
    constraint: function(errors) {
      var attr;
      errors = v.groupErrorsByAttribute(errors);
      for (attr in errors) {
        errors[attr] = errors[attr].map(function(result) {
          return result.validator;
        }).sort();
      }
      return errors;
    }
  };

  validate.exposeModule(validate, this, exports, module, define);
}).call(this,
        typeof exports !== 'undefined' ? /* istanbul ignore next */ exports : null,
        typeof module !== 'undefined' ? /* istanbul ignore next */ module : null,
        typeof define !== 'undefined' ? /* istanbul ignore next */ define : null);

},{}],"/Users/josephluck/apps/choo/src/node_modules/wayfarer/index.js":[function(require,module,exports){
const assert = require('assert')
const trie = require('./trie')

module.exports = Wayfarer

// create a router
// str -> obj
function Wayfarer (dft) {
  if (!(this instanceof Wayfarer)) return new Wayfarer(dft)

  const _default = (dft || '').replace(/^\//, '')
  const _trie = trie()

  emit._trie = _trie
  emit.emit = emit
  emit.on = on
  emit._wayfarer = true

  return emit

  // define a route
  // (str, fn) -> obj
  function on (route, cb) {
    assert.equal(typeof route, 'string')
    assert.equal(typeof cb, 'function')

    route = route || '/'

    if (cb && cb._wayfarer && cb._trie) {
      _trie.mount(route, cb._trie.trie)
    } else {
      const node = _trie.create(route)
      node.cb = cb
    }

    return emit
  }

  // match and call a route
  // (str, obj?) -> null
  function emit (route) {
    assert.notEqual(route, undefined, "'route' must be defined")
    const args = new Array(arguments.length)
    for (var i = 1; i < args.length; i++) {
      args[i] = arguments[i]
    }

    const node = _trie.match(route)
    if (node && node.cb) {
      args[0] = node.params
      return node.cb.apply(null, args)
    }

    const dft = _trie.match(_default)
    if (dft && dft.cb) {
      args[0] = dft.params
      return dft.cb.apply(null, args)
    }

    throw new Error("route '" + route + "' did not match")
  }
}

},{"./trie":"/Users/josephluck/apps/choo/src/node_modules/wayfarer/trie.js","assert":"/Users/josephluck/apps/choo/src/node_modules/assert/assert.js"}],"/Users/josephluck/apps/choo/src/node_modules/wayfarer/trie.js":[function(require,module,exports){
const mutate = require('xtend/mutable')
const assert = require('assert')
const xtend = require('xtend')

module.exports = Trie

// create a new trie
// null -> obj
function Trie () {
  if (!(this instanceof Trie)) return new Trie()
  this.trie = { nodes: {} }
}

// create a node on the trie at route
// and return a node
// str -> null
Trie.prototype.create = function (route) {
  assert.equal(typeof route, 'string', 'route should be a string')
  // strip leading '/' and split routes
  const routes = route.replace(/^\//, '').split('/')
  return (function createNode (index, trie, routes) {
    const route = routes[index]

    if (route === undefined) return trie

    var node = null
    if (/^:/.test(route)) {
      // if node is a name match, set name and append to ':' node
      if (!trie.nodes['$$']) {
        node = { nodes: {} }
        trie.nodes['$$'] = node
      } else {
        node = trie.nodes['$$']
      }
      trie.name = route.replace(/^:/, '')
    } else if (!trie.nodes[route]) {
      node = { nodes: {} }
      trie.nodes[route] = node
    } else {
      node = trie.nodes[route]
    }

    // we must recurse deeper
    return createNode(index + 1, node, routes)
  })(0, this.trie, routes)
}

// match a route on the trie
// and return the node
// str -> obj
Trie.prototype.match = function (route) {
  assert.equal(typeof route, 'string', 'route should be a string')

  const routes = route.replace(/^\//, '').split('/')
  const params = {}

  var node = (function search (index, trie) {
    // either there's no match, or we're done searching
    if (trie === undefined) return undefined
    const route = routes[index]
    if (route === undefined) return trie

    if (trie.nodes[route]) {
      // match regular routes first
      return search(index + 1, trie.nodes[route])
    } else if (trie.name) {
      // match named routes
      params[trie.name] = route
      return search(index + 1, trie.nodes['$$'])
    } else {
      // no matches found
      return search(index + 1)
    }
  })(0, this.trie)

  if (!node) return undefined
  node = xtend(node)
  node.params = params
  return node
}

// mount a trie onto a node at route
// (str, obj) -> null
Trie.prototype.mount = function (route, trie) {
  assert.equal(typeof route, 'string', 'route should be a string')
  assert.equal(typeof trie, 'object', 'trie should be a object')

  const split = route.replace(/^\//, '').split('/')
  var node = null
  var key = null

  if (split.length === 1) {
    key = split[0]
    node = this.create(key)
  } else {
    const headArr = split.splice(0, split.length - 1)
    const head = headArr.join('/')
    key = split[0]
    node = this.create(head)
  }

  mutate(node.nodes, trie.nodes)
  if (trie.name) node.name = trie.name

  // delegate properties from '/' to the new node
  // '/' cannot be reached once mounted
  if (node.nodes['']) {
    Object.keys(node.nodes['']).forEach(function (key) {
      if (key === 'nodes') return
      node[key] = node.nodes[''][key]
    })
    mutate(node.nodes, node.nodes[''].nodes)
    delete node.nodes[''].nodes
  }
}

},{"assert":"/Users/josephluck/apps/choo/src/node_modules/assert/assert.js","xtend":"/Users/josephluck/apps/choo/src/node_modules/xtend/immutable.js","xtend/mutable":"/Users/josephluck/apps/choo/src/node_modules/xtend/mutable.js"}],"/Users/josephluck/apps/choo/src/node_modules/wayfarer/walk.js":[function(require,module,exports){
const assert = require('assert')

module.exports = walk

// walk a wayfarer trie
// (obj, fn) -> null
function walk (router, transform) {
  assert.equal(typeof router, 'function', 'wayfarer.walk: router should be an function')
  assert.equal(typeof transform, 'function', 'wayfarer.walk: transform should be a function')

  const trie = router._trie
  assert.equal(typeof trie, 'object', 'wayfarer.walk: trie should be an object')

  // (str, obj) -> null
  ;(function walk (route, trie) {
    if (trie.cb) {
      trie.cb = transform(route, trie.cb)
    }

    if (trie.nodes) {
      const nodes = trie.nodes
      Object.keys(nodes).forEach(function (key) {
        const node = nodes[key]
        const newRoute = (key === '$$')
          ? route + '/:' + trie.name
          : route + '/' + key
        walk(newRoute, node)
      })
    }
  })('', trie.trie)
}

},{"assert":"/Users/josephluck/apps/choo/src/node_modules/assert/assert.js"}],"/Users/josephluck/apps/choo/src/node_modules/xtend/immutable.js":[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],"/Users/josephluck/apps/choo/src/node_modules/xtend/mutable.js":[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],"/Users/josephluck/apps/choo/src/node_modules/yo-yo/index.js":[function(require,module,exports){
var bel = require('bel') // turns template tag into DOM elements
var morphdom = require('morphdom') // efficiently diffs + morphs two DOM elements
var defaultEvents = require('./update-events.js') // default events to be copied when dom elements update

module.exports = bel

// TODO move this + defaultEvents to a new module once we receive more feedback
module.exports.update = function (fromNode, toNode, opts) {
  if (!opts) opts = {}
  if (opts.events !== false) {
    if (!opts.onBeforeElUpdated) opts.onBeforeElUpdated = copier
  }

  return morphdom(fromNode, toNode, opts)

  // morphdom only copies attributes. we decided we also wanted to copy events
  // that can be set via attributes
  function copier (f, t) {
    // copy events:
    var events = opts.events || defaultEvents
    for (var i = 0; i < events.length; i++) {
      var ev = events[i]
      if (t[ev]) { // if new element has a whitelisted attribute
        f[ev] = t[ev] // update existing element
      } else if (f[ev]) { // if existing element has it and new one doesnt
        f[ev] = undefined // remove it from existing element
      }
    }
    // copy values for form elements
    if ((f.nodeName === 'INPUT' && f.type !== 'file') || f.nodeName === 'SELECT') {
      if (t.getAttribute('value') === null) t.value = f.value
    } else if (f.nodeName === 'TEXTAREA') {
      if (t.getAttribute('value') === null) f.value = t.value
    }
  }
}

},{"./update-events.js":"/Users/josephluck/apps/choo/src/node_modules/yo-yo/update-events.js","bel":"/Users/josephluck/apps/choo/src/node_modules/bel/index.js","morphdom":"/Users/josephluck/apps/choo/src/node_modules/morphdom/src/index.js"}],"/Users/josephluck/apps/choo/src/node_modules/yo-yo/update-events.js":[function(require,module,exports){
module.exports = [
  // attribute events (can be set with attributes)
  'onclick',
  'ondblclick',
  'onmousedown',
  'onmouseup',
  'onmouseover',
  'onmousemove',
  'onmouseout',
  'ondragstart',
  'ondrag',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondrop',
  'ondragend',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onunload',
  'onabort',
  'onerror',
  'onresize',
  'onscroll',
  'onselect',
  'onchange',
  'onsubmit',
  'onreset',
  'onfocus',
  'onblur',
  'oninput',
  // other common events
  'oncontextmenu',
  'onfocusin',
  'onfocusout'
]

},{}],"/Users/josephluck/apps/choo/src/pages/Dashboard.js":[function(require,module,exports){
'use strict';
var _templateObject = _taggedTemplateLiteral([
    '\n    <div>\n      <h1>Welcome ',
    '</h1>\n      ',
    '\n    </div>\n  '
], [
    '\n    <div>\n      <h1>Welcome ',
    '</h1>\n      ',
    '\n    </div>\n  '
]);
function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var html = require('choo/html');
module.exports = function () {
    var child = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    };
    return function (state, prev, send) {
        return html(_templateObject, state.user.user.name, child(state, prev, send));
    };
};
},{"choo/html":"/Users/josephluck/apps/choo/src/node_modules/choo/html.js"}],"/Users/josephluck/apps/choo/src/pages/Login.js":[function(require,module,exports){
'use strict';
var _templateObject = _taggedTemplateLiteral([
    '\n    <div class=',
    '>\n      ',
    '\n\n      <div>\n        ',
    '\n      </div>\n\n      ',
    '\n    </div>\n  '
], [
    '\n    <div class=',
    '>\n      ',
    '\n\n      <div>\n        ',
    '\n      </div>\n\n      ',
    '\n    </div>\n  '
]);
function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var html = require('choo/html');
var css = 0;
var noop = function noop() {
};
var LoginForm = require('../components/LoginForm');
var styles = (null || true) && '_80454067';
var formStyles = (null || true) && '_f8e4a45c';
module.exports = function () {
    var child = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
    return function (state, prev, send) {
        var cb = function cb() {
            return send('location:set', 'dashboard');
        };
        var onSubmit = function onSubmit(form) {
            return send('login:submit', {
                form: form,
                cb: cb
            });
        };
        var onChange = function onChange(form) {
            return send('login:updateForm', { form: form });
        };
        return html(_templateObject, styles, LoginForm({
            styles: formStyles,
            onSubmit: onSubmit,
            onChange: onChange,
            values: state.login.form,
            submitted: state.login.submitted,
            submitting: state.login.submitting,
            valid: state.login.valid,
            validation: state.login.validation
        }), state.login.submitting ? 'Submitting' : null, child(state, prev, send));
    };
};
},{"../components/LoginForm":"/Users/josephluck/apps/choo/src/components/LoginForm.js","choo/html":"/Users/josephluck/apps/choo/src/node_modules/choo/html.js","sheetify/insert":"/Users/josephluck/apps/choo/src/node_modules/sheetify/insert.js"}],"/Users/josephluck/apps/choo/src/pages/Scaffold.js":[function(require,module,exports){
'use strict';
var _templateObject = _taggedTemplateLiteral([
    '\n    <div>\n      ',
    '\n      ',
    '\n    </div>\n  '
], [
    '\n    <div>\n      ',
    '\n      ',
    '\n    </div>\n  '
]);
function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var html = require('choo/html');
var MainNav = require('../components/MainNav');
module.exports = function () {
    var child = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    };
    return function (state, prev, send) {
        var onLogout = function onLogout() {
            send('auth:clearTokens');
            send('location:set', 'login');
        };
        return html(_templateObject, MainNav({
            user: state.user.user,
            onLogout: onLogout,
            currentRoute: state.location.pathname
        }), child(state, prev, send));
    };
};
},{"../components/MainNav":"/Users/josephluck/apps/choo/src/components/MainNav.js","choo/html":"/Users/josephluck/apps/choo/src/node_modules/choo/html.js"}],"/Users/josephluck/apps/choo/src/pages/Todos.js":[function(require,module,exports){
'use strict';
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _templateObject = _taggedTemplateLiteral([
    '\n    <div onload=',
    '>\n      ',
    '\n      ',
    '\n      ',
    '\n      ',
    '\n      ',
    '\n    </div>\n  '
], [
    '\n    <div onload=',
    '>\n      ',
    '\n      ',
    '\n      ',
    '\n      ',
    '\n      ',
    '\n    </div>\n  '
]);
function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var html = require('choo/html');
var TitleBar = require('../components/TitleBar');
var TodosList = require('../components/TodosList');
var AddNewTodoForm = require('../components/AddNewTodoForm');
module.exports = function () {
    var child = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    };
    return function (state, prev, send) {
        var requestTodos = function requestTodos() {
            return send('todos:requestTodos');
        };
        var onChange = function onChange(value) {
            return send('todos:setNewTodoValue', { value: value });
        };
        var onSubmit = function onSubmit() {
            return send('todos:addTodo', { title: state.todos.addNewTodoValue });
        };
        var onToggle = function onToggle(todo) {
            return send('todos:updateTodo', { todo: _extends({}, todo, { complete: !todo.complete }) });
        };
        return html(_templateObject, requestTodos, TitleBar({ title: 'Choodo' }), AddNewTodoForm({
            value: state.todos.addNewTodoValue,
            onChange: onChange,
            onSubmit: onSubmit
        }), TodosList({
            todos: state.todos.todos,
            onToggle: onToggle
        }), state.todos.loading === true ? 'Loading' : null, child(state, prev, send));
    };
};
},{"../components/AddNewTodoForm":"/Users/josephluck/apps/choo/src/components/AddNewTodoForm.js","../components/TitleBar":"/Users/josephluck/apps/choo/src/components/TitleBar.js","../components/TodosList":"/Users/josephluck/apps/choo/src/components/TodosList.js","choo/html":"/Users/josephluck/apps/choo/src/node_modules/choo/html.js"}],"/Users/josephluck/apps/choo/src/pages/index.js":[function(require,module,exports){
'use strict';
var requireAuth = require('./middleware/requireAuth');
var setPageTitle = require('./middleware/setPageTitle');
var redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated');
var scaffold = require('./Scaffold');
var todos = require('./Todos');
var login = require('./Login');
var dashboard = require('./Dashboard');
module.exports = function () {
    return [
        [
            '/login',
            setPageTitle('Login', redirectIfAuthenticated(login()))
        ],
        [
            '/todos',
            setPageTitle('Todos', requireAuth(scaffold(todos()))),
            [[
                    '/test',
                    setPageTitle('Todos - Test', requireAuth(scaffold(todos(login()))))
                ]]
        ],
        [
            '/dashboard',
            setPageTitle('Dashboard', requireAuth(scaffold(dashboard())))
        ]
    ];
};
},{"./Dashboard":"/Users/josephluck/apps/choo/src/pages/Dashboard.js","./Login":"/Users/josephluck/apps/choo/src/pages/Login.js","./Scaffold":"/Users/josephluck/apps/choo/src/pages/Scaffold.js","./Todos":"/Users/josephluck/apps/choo/src/pages/Todos.js","./middleware/redirectIfAuthenticated":"/Users/josephluck/apps/choo/src/pages/middleware/redirectIfAuthenticated.js","./middleware/requireAuth":"/Users/josephluck/apps/choo/src/pages/middleware/requireAuth.js","./middleware/setPageTitle":"/Users/josephluck/apps/choo/src/pages/middleware/setPageTitle.js"}],"/Users/josephluck/apps/choo/src/pages/middleware/redirectIfAuthenticated.js":[function(require,module,exports){
'use strict';
var _templateObject = _taggedTemplateLiteral(['<div></div>'], ['<div></div>']), _templateObject2 = _taggedTemplateLiteral([
        '',
        ''
    ], [
        '',
        ''
    ]);
function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var html = require('choo/html');
module.exports = function () {
    var child = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    };
    return function (state, prev, send) {
        if (state.auth.accessToken) {
            console.info('Redirecting to dashboard');
            send('location:set', 'dashboard');
            return html(_templateObject);
        }
        return html(_templateObject2, child(state, prev, send));
    };
};
},{"choo/html":"/Users/josephluck/apps/choo/src/node_modules/choo/html.js"}],"/Users/josephluck/apps/choo/src/pages/middleware/requireAuth.js":[function(require,module,exports){
'use strict';
var _templateObject = _taggedTemplateLiteral(['<div></div>'], ['<div></div>']), _templateObject2 = _taggedTemplateLiteral([
        '\n    <div onload=',
        '>\n      ',
        '\n    </div>\n  '
    ], [
        '\n    <div onload=',
        '>\n      ',
        '\n    </div>\n  '
    ]);
function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var html = require('choo/html');
module.exports = function () {
    var child = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    };
    return function (state, prev, send) {
        var checkAuth = function checkAuth() {
            if (!state.auth.accessToken) {
                send('location:set', 'login');
                return html(_templateObject);
            }
            send('auth:check', {
                onError: function onError() {
                    send('location:set', 'login');
                }
            });
        };
        if (prev && state.location.pathname !== prev.location.pathname) {
            checkAuth();
        }
        return html(_templateObject2, checkAuth, child(state, prev, send));
    };
};
},{"choo/html":"/Users/josephluck/apps/choo/src/node_modules/choo/html.js"}],"/Users/josephluck/apps/choo/src/pages/middleware/setPageTitle.js":[function(require,module,exports){
'use strict';
module.exports = function (title, child) {
    return function (state, prev, send) {
        var baseTitle = 'Goodlord - Property Done Right';
        if (title) {
            window.document.title = title + ' | ' + baseTitle;
        } else {
            window.document.title = baseTitle;
        }
        return child(state, prev, send);
    };
};
},{}],"/Users/josephluck/apps/choo/src/transport/passport.js":[function(require,module,exports){
'use strict';
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var transport = require('./transport');
module.exports = {
    login: function login(_ref) {
        var payload = _ref.payload;
        return transport.makeFormRequest({
            path: '/oauth/token',
            entity: _extends({}, payload, { grant_type: 'password' })
        });
    },
    fetchUser: function fetchUser(_ref2) {
        var userId = _ref2.userId;
        return transport.makeRequest({
            path: '/passport/' + userId,
            method: 'GET'
        });
    }
};
},{"./transport":"/Users/josephluck/apps/choo/src/transport/transport.js"}],"/Users/josephluck/apps/choo/src/transport/transport.js":[function(require,module,exports){
'use strict';
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var rest = require('rest');
var mime = require('rest/interceptor/mime');
var errorCode = require('rest/interceptor/errorCode');
var pathPrefix = require('rest/interceptor/pathPrefix');
var config = require('../utils/config');
var store = require('../utils/store');
var handleRequestError = function handleRequestError() {
    return function (err) {
        return {
            code: err.status.code,
            message: err.entity.error_description
        };
    };
};
var handleRequestResponse = function handleRequestResponse() {
    return function (response) {
        return response.entity.data;
    };
};
var getBaseClient = function getBaseClient() {
    return rest.wrap(errorCode).wrap(pathPrefix, { prefix: config.apiBase });
};
var getFormClient = function getFormClient() {
    return getBaseClient().wrap(mime, { mime: 'application/x-www-form-urlencoded' });
};
var getJsonClient = function getJsonClient() {
    return getBaseClient().wrap(mime, { mime: 'application/json' });
};
module.exports = {
    makeFormRequest: function makeFormRequest(request) {
        var handleResponse = function handleResponse() {
            return function (response) {
                return response.entity;
            };
        };
        var make = getFormClient();
        return make(request).then(handleResponse()).catch(handleRequestError());
    },
    makeUnauthenticatedRequest: function makeUnauthenticatedRequest(request) {
        var make = getJsonClient();
        return make(request).then(handleRequestResponse()).catch(handleRequestError());
    },
    makeRequest: function makeRequest(req) {
        var make = getJsonClient();
        var request = _extends({}, req, { headers: _extends({ Authorization: 'Bearer ' + store.state.auth.accessToken }, req.headers) });
        return make(request).then(handleRequestResponse()).catch(handleRequestError());
    }
};
},{"../utils/config":"/Users/josephluck/apps/choo/src/utils/config.js","../utils/store":"/Users/josephluck/apps/choo/src/utils/store.js","rest":"/Users/josephluck/apps/choo/src/node_modules/rest/browser.js","rest/interceptor/errorCode":"/Users/josephluck/apps/choo/src/node_modules/rest/interceptor/errorCode.js","rest/interceptor/mime":"/Users/josephluck/apps/choo/src/node_modules/rest/interceptor/mime.js","rest/interceptor/pathPrefix":"/Users/josephluck/apps/choo/src/node_modules/rest/interceptor/pathPrefix.js"}],"/Users/josephluck/apps/choo/src/utils/config.js":[function(require,module,exports){
(function (process){
'use strict';
var apiDomain = window.location.hostname === 'localhost' ? 'http://localhost:8000' : 'http://api.goodoverlord.com';
module.exports = {
    environment: 'production',
    apiDomain: apiDomain,
    apiBase: apiDomain + '/api',
    stripeKey: process.env.STRIPE_KEY
};
}).call(this,require('_process'))
},{"_process":"/Users/josephluck/apps/choo/src/node_modules/browserify/node_modules/process/browser.js"}],"/Users/josephluck/apps/choo/src/utils/promisify.js":[function(require,module,exports){
'use strict';
var promisifySend = function promisifySend(send) {
    return function (action, data) {
        return new Promise(function (resolve, reject) {
            try {
                send(action, data, function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
            } catch (e) {
                reject(e);
            }
        });
    };
};
module.exports = function () {
    return {
        wrapSubscriptions: function wrapSubscriptions(fn) {
            return function (send, done) {
                var newSend = promisifySend(send);
                return Promise.resolve(fn(newSend)).catch(function (err) {
                    return done(err);
                });
            };
        },
        wrapEffects: function wrapEffects(fn) {
            return function (data, state, send, done) {
                var newSend = promisifySend(send);
                return Promise.resolve(fn(data, state, newSend)).then(function (res) {
                    return done(null, res);
                }).catch(function (err) {
                    return done(err);
                });
            };
        }
    };
};
},{}],"/Users/josephluck/apps/choo/src/utils/state.js":[function(require,module,exports){
'use strict';
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var store = require('./store');
module.exports = function () {
    return {
        onStateChange: function onStateChange(state) {
            store.state = state;
        },
        wrapEffects: function wrapEffects(fn) {
            return function (state, payload, send, done) {
                fn(_extends({}, state, { $root: store.state }), payload, send, done);
            };
        }
    };
};
},{"./store":"/Users/josephluck/apps/choo/src/utils/store.js"}],"/Users/josephluck/apps/choo/src/utils/store.js":[function(require,module,exports){
'use strict';
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var timeout = 1000;
var store = {
    state: {},
    init: function init(models) {
        this.state = models.reduce(function (prev, curr) {
            if (curr.namespace) {
                return _extends({}, prev, _defineProperty({}, curr.namespace, curr.state));
            }
            return _extends({}, prev, curr.state);
        }, {});
    },
    getAll: function getAll(storeName) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    resolve(JSON.parse(window.localStorage[storeName]));
                } catch (e) {
                    resolve([]);
                }
            }, timeout);
        });
    },
    add: function add(storeName, item) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                store.getAll(storeName).then(function (items) {
                    items.push(item);
                    window.localStorage[storeName] = JSON.stringify(items);
                    resolve(item);
                });
            }, timeout);
        });
    },
    replace: function replace(storeName, index, item) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                store.getAll(storeName).then(function (items) {
                    items[index] = item;
                    window.localStorage[storeName] = JSON.stringify(items);
                    resolve(item);
                });
            }, timeout);
        });
    }
};
module.exports = store;
},{}]},{},["/Users/josephluck/apps/choo/src/index.js"]);
