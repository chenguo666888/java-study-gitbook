(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{973:function(a,r,_){"use strict";_.r(r);var t=_(42),e=Object(t.a)({},(function(){var a=this,r=a.$createElement,_=a._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"order-by排序检索数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#order-by排序检索数据"}},[a._v("#")]),a._v(" ORDER BY排序检索数据")]),a._v(" "),_("h2",{attrs:{id:"_1-为什么使用排序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么使用排序"}},[a._v("#")]),a._v(" 1. 为什么使用排序")]),a._v(" "),_("p",[a._v("如果数据不排序，那么他检索出来的结果，一般以他在数据库底层中的出现顺讯显示，可能是添加的顺序。")]),a._v(" "),_("p",[a._v("但如果数据更新或删除，就有可讷讷个收到DBMS重用回收存储空间的方式影响")]),a._v(" "),_("h2",{attrs:{id:"_2-概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-概述"}},[a._v("#")]),a._v(" 2. 概述")]),a._v(" "),_("p",[a._v("ORDER BY 子句取一个或多个列的名字，据此对输出结果进行排序")]),a._v(" "),_("h3",{attrs:{id:"_2-1-单个列排序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-单个列排序"}},[a._v("#")]),a._v(" 2.1 单个列排序")]),a._v(" "),_("p",[a._v("对prod_name 列以字母顺序排序")]),a._v(" "),_("p",[a._v("ORDER BY 要在SELECT 语句的最后一行")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("SELECT prod_name\nFROM Products\nORDER BY prod_name;\n")])])]),_("h3",{attrs:{id:"_2-2-多个列排序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-多个列排序"}},[a._v("#")]),a._v(" 2.2 多个列排序")]),a._v(" "),_("p",[a._v("多个列之间用“,”分隔")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("SELECT prod_id,prod_price,prod_name \nFROM products\nORDER BY prod_price,prod_name;\n")])])]),_("ul",[_("li",[_("p",[a._v("仅在多个行具有相同的prod_price值时，才对产品按prod_name 进行排序")])]),a._v(" "),_("li",[_("p",[a._v("如果prod_price 列中的所有值都是唯一的，则不会按prod_name 排序")])])]),a._v(" "),_("h3",{attrs:{id:"_2-3-按列位置排序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-按列位置排序"}},[a._v("#")]),a._v(" 2.3 按列位置排序")]),a._v(" "),_("p",[a._v("除了按列名还可以按列位置")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("SELECT prod_id,prod_price,prod_name \nFROM products\nORDER BY 2,3;\n")])])]),_("ul",[_("li",[_("p",[a._v("好处")]),a._v(" "),_("p",[a._v("不用重新输入列名")])]),a._v(" "),_("li",[_("p",[a._v("缺点")]),a._v(" "),_("ul",[_("li",[a._v("不明确给出列名有可能造成错用列名排序")]),a._v(" "),_("li",[a._v("对SELECT 清单进行更改时容易错误地对数据进行排序")])])])]),a._v(" "),_("h3",{attrs:{id:"_2-4-指定排序的方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-指定排序的方案"}},[a._v("#")]),a._v(" 2.4 指定排序的方案")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("ASC (ASCENDING):升序")]),a._v(" "),_("p",[a._v("数据排序不限定升序排序（从A-Z）这只是默认的排序顺序，")])]),a._v(" "),_("li",[_("p",[a._v("DESC (DESCENDING):降序")])]),a._v(" "),_("li",[_("p",[a._v("还可以使用ORDER BY 子句进行降序（Z-A）排序。")])])]),a._v(" "),_("p",[a._v("例：价格降序来排序产品（最贵的排在最前面）")]),a._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("SELECT prod_id,prod_price,prod_name\nFROM products\nORDER BY prod_price DESC,prod_name;\n")])])]),_("p",[a._v("DESC 只应用到签名的列名")])])}),[],!1,null,null,null);r.default=e.exports}}]);