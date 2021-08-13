(() => {
var exports = {};
exports.id = 702;
exports.ids = [702];
exports.modules = {

/***/ 6790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ detail)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(8186);
var row_default = /*#__PURE__*/__webpack_require__.n(row_);
;// CONCATENATED MODULE: external "antd/lib/affix"
const affix_namespaceObject = require("antd/lib/affix");
var affix_default = /*#__PURE__*/__webpack_require__.n(affix_namespaceObject);
// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(9069);
var col_default = /*#__PURE__*/__webpack_require__.n(col_);
// EXTERNAL MODULE: external "antd/lib/breadcrumb"
var breadcrumb_ = __webpack_require__(6201);
var breadcrumb_default = /*#__PURE__*/__webpack_require__.n(breadcrumb_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
;// CONCATENATED MODULE: external "react-markdown"
const external_react_markdown_namespaceObject = require("react-markdown");
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(2266);
// EXTERNAL MODULE: ./components/Author.js
var Author = __webpack_require__(7946);
// EXTERNAL MODULE: ./components/Advert.js
var Advert = __webpack_require__(4969);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(2651);
// EXTERNAL MODULE: ./styles/Detail.module.scss
var Detail_module = __webpack_require__(4119);
var Detail_module_default = /*#__PURE__*/__webpack_require__.n(Detail_module);
;// CONCATENATED MODULE: external "markdown-navbar"
const external_markdown_navbar_namespaceObject = require("markdown-navbar");
var external_markdown_navbar_default = /*#__PURE__*/__webpack_require__.n(external_markdown_navbar_namespaceObject);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./config/apiUrl.js
var apiUrl = __webpack_require__(8549);
// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__(7820);
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_);
// EXTERNAL MODULE: external "highlight.js"
var external_highlight_js_ = __webpack_require__(6872);
var external_highlight_js_default = /*#__PURE__*/__webpack_require__.n(external_highlight_js_);
;// CONCATENATED MODULE: ./pages/detail.js
























const Detail = res => {
  const {
    0: detail,
    1: setDetail
  } = (0,external_react_.useState)(res);
  const renderer = new (external_marked_default()).Renderer();
  external_marked_default().setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    highlight: function (code) {
      return external_highlight_js_default().highlightAuto(code);
    }
  });
  let html = external_marked_default()(detail.content);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\u8BE6\u7EC6\u9875"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)((row_default()), {
      className: "comm-main",
      type: "flex",
      justify: "center",
      children: [/*#__PURE__*/jsx_runtime_.jsx((col_default()), {
        className: "comm-left",
        xs: 24,
        sm: 24,
        md: 16,
        lg: 18,
        xl: 14,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Detail_module_default())["bread-div"],
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((breadcrumb_default()), {
              children: [/*#__PURE__*/jsx_runtime_.jsx((breadcrumb_default()).Item, {
                children: "\u9996\u9875"
              }), /*#__PURE__*/jsx_runtime_.jsx((breadcrumb_default()).Item, {
                children: "\u89C6\u9891\u5217\u8868"
              }), /*#__PURE__*/jsx_runtime_.jsx((breadcrumb_default()).Item, {
                children: detail.title
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (Detail_module_default())["detailed-title"],
              children: detail.title
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (Detail_module_default())["list-icon"] + '' + (Detail_module_default()).center,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                className: (Detail_module_default()).icon,
                children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.CalendarOutlined, {}), " ", detail.createTime, " "]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                className: (Detail_module_default()).icon,
                children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.FolderOutlined, {}), " ", detail.typeName, " "]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                className: (Detail_module_default()).icon,
                children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.FireOutlined, {}), " ", detail.viewCount, "\u4EBA"]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (Detail_module_default())["detailed-content"],
              dangerouslySetInnerHTML: {
                __html: html
              }
            })]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((col_default()), {
        className: "comm-right",
        xs: 0,
        sm: 0,
        md: 7,
        lg: 5,
        xl: 4,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Author/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Advert/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx((affix_default()), {
          offsetTop: 5,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Detail_module_default())["detailed-nav"],
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (Detail_module_default())["nav-title"],
              children: "\u6587\u7AE0\u76EE\u5F55"
            }), /*#__PURE__*/jsx_runtime_.jsx((external_markdown_navbar_default()), {
              className: (Detail_module_default())["article-menu"],
              source: html,
              ordered: false
            })]
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
  });
};

Detail.getInitialProps = async context => {
  const {
    id
  } = context.query;
  console.info(id);
  const promise = new Promise(resolve => {
    external_axios_default()(apiUrl/* default.getArticleById */.Z.getArticleById + id).then(res => {
      console.info('data', res.data.data[0]);
      resolve(res.data.data[0]);
    });
  });
  return await promise;
};

/* harmony default export */ const detail = (Detail);

/***/ }),

/***/ 4119:
/***/ ((module) => {

// Exports
module.exports = {
	"bread-div": "Detail_bread-div__1B_8m",
	"detailed-title": "Detail_detailed-title__1POfY",
	"center": "Detail_center__3Y7Kk",
	"icon": "Detail_icon__RLovl",
	"detailed-content": "Detail_detailed-content__1_G8d",
	"code": "Detail_code__34Vv0",
	"title-anchor": "Detail_title-anchor__2jZcC",
	"active": "Detail_active__3Mg_L",
	"nav-title": "Detail_nav-title__3ufsi"
};


/***/ }),

/***/ 2372:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 6604:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/avatar");

/***/ }),

/***/ 6201:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/breadcrumb");

/***/ }),

/***/ 9069:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/col");

/***/ }),

/***/ 6709:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/divider");

/***/ }),

/***/ 9374:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/menu");

/***/ }),

/***/ 8186:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/row");

/***/ }),

/***/ 8193:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/space");

/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 6872:
/***/ ((module) => {

"use strict";
module.exports = require("highlight.js");

/***/ }),

/***/ 7820:
/***/ ((module) => {

"use strict";
module.exports = require("marked");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,16], () => (__webpack_exec__(6790)));
module.exports = __webpack_exports__;

})();