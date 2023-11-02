"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Pagination = _interopRequireDefault(require("react-bootstrap/Pagination"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var WorkroomPagination = function WorkroomPagination(_ref) {
  var currentPage = _ref.currentPage,
    onPageChange = _ref.onPageChange,
    totalPages = _ref.totalPages,
    position = _ref.position;
  var handleClick = function handleClick(pageNumber) {
    onPageChange(pageNumber);
  };
  var generatePageItems = function generatePageItems() {
    var items = [];

    // Add "First" button
    items.push( /*#__PURE__*/_react.default.createElement(_Pagination.default.First, {
      key: "first",
      onClick: function onClick() {
        return handleClick(1);
      }
    }));

    // Add "Previous" button
    items.push( /*#__PURE__*/_react.default.createElement(_Pagination.default.Prev, {
      key: "prev",
      onClick: function onClick() {
        return handleClick(currentPage - 1);
      },
      disabled: currentPage === 1
    }));

    // Calculate the range of page numbers to display
    var startPage = Math.max(1, currentPage - 4);
    var endPage = Math.min(totalPages, startPage + 4);

    // Add page numbers
    var _loop = function _loop(number) {
      items.push( /*#__PURE__*/_react.default.createElement(_Pagination.default.Item, {
        key: number,
        active: number === currentPage,
        onClick: function onClick() {
          return handleClick(number);
        }
      }, number));
    };
    for (var number = startPage; number <= endPage; number++) {
      _loop(number);
    }

    // Add "Next" button
    items.push( /*#__PURE__*/_react.default.createElement(_Pagination.default.Next, {
      key: "next",
      onClick: function onClick() {
        return handleClick(currentPage + 1);
      },
      disabled: currentPage === totalPages
    }));

    // Add "Last" button
    items.push( /*#__PURE__*/_react.default.createElement(_Pagination.default.Last, {
      key: "first",
      onClick: function onClick() {
        return handleClick(totalPages);
      }
    }));

    // You can customize the range and appearance as needed
    return items;
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      float: position,
      marginRight: '10px'
    }
  }, totalPages > 0 && /*#__PURE__*/_react.default.createElement(_Pagination.default, null, generatePageItems())));
};

// Set a default value for prop3
WorkroomPagination.defaultProps = {
  totalPages: 0,
  position: 'right'
};
var _default = exports.default = WorkroomPagination;