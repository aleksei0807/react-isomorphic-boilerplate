'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navigation = require('../../components/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeneralContainer = function (_Component) {
    _inherits(GeneralContainer, _Component);

    function GeneralContainer() {
        _classCallCheck(this, GeneralContainer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GeneralContainer).apply(this, arguments));
    }

    _createClass(GeneralContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'general-container' },
                _react2.default.createElement(
                    'h1',
                    null,
                    'React Frontend Boilerplate'
                ),
                _react2.default.createElement(_Navigation2.default, null),
                this.props.children
            );
        }
    }]);

    return GeneralContainer;
}(_react.Component);

exports.default = GeneralContainer;