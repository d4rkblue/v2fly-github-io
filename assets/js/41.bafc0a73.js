(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{412:function(v,_,t){"use strict";t.r(_);var a=t(18),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"mux-cool-协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mux-cool-协议"}},[v._v("#")]),v._v(" Mux.Cool 协议")]),v._v(" "),t("p",[v._v("Mux.Cool 协议是一个多路复用传输协议，用于在一条已建立的数据流中传输多个各自独立的数据流。")]),v._v(" "),t("h2",{attrs:{id:"版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[v._v("#")]),v._v(" 版本")]),v._v(" "),t("p",[v._v("当前版本是 1 Beta。")]),v._v(" "),t("h2",{attrs:{id:"依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[v._v("#")]),v._v(" 依赖")]),v._v(" "),t("h3",{attrs:{id:"底层协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#底层协议"}},[v._v("#")]),v._v(" 底层协议")]),v._v(" "),t("p",[v._v("Mux.Cool 必须运行在一个已建立的可靠数据流之上。")]),v._v(" "),t("h2",{attrs:{id:"通讯过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通讯过程"}},[v._v("#")]),v._v(" 通讯过程")]),v._v(" "),t("p",[v._v("一个 Mux.Cool 连接中可传输若干个子连接，每个子连接有一个独立的 ID 和状态。传输过程由帧（Frame）组成，每一帧用于传输一个特定的子连接的数据。")]),v._v(" "),t("h3",{attrs:{id:"客户端行为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端行为"}},[v._v("#")]),v._v(" 客户端行为")]),v._v(" "),t("p",[v._v("当有连接需求时并且没有现有可用的连接时，客户端向服务器发起一个新连接，以下称为“主连接”。")]),v._v(" "),t("ol",[t("li",[v._v("一个主连接可用于发送若干个子连接。客户端可自主决定主连接可承载的子连接数量。")]),v._v(" "),t("li",[v._v("对于一个新的子连接，客户端必须发送状态"),t("code",[v._v("New")]),v._v("以通知服务器建立子连接，然后使用状态"),t("code",[v._v("Keep")]),v._v("来传送数据。")]),v._v(" "),t("li",[v._v("当子连接结束时，客户端发送"),t("code",[v._v("End")]),v._v("状态来通知服务器关闭子连接。")]),v._v(" "),t("li",[v._v("客户端可自行决定何时关闭主连接，但必须确定服务器也同时保持连接。")]),v._v(" "),t("li",[v._v("客户端可使用 KeepAlive 状态来避免服务器关闭主连接。")])]),v._v(" "),t("h3",{attrs:{id:"服务器端行为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器端行为"}},[v._v("#")]),v._v(" 服务器端行为")]),v._v(" "),t("p",[v._v("当服务器端接收到新的子连接时，服务器应当按正常的连接来处理。")]),v._v(" "),t("ol",[t("li",[v._v("当收到状态"),t("code",[v._v("End")]),v._v("时，服务器端可以关闭对目标地址的上行连接。")]),v._v(" "),t("li",[v._v("在服务器的响应中，必须使用与请求相同的 ID 来传输子连接的数据。")]),v._v(" "),t("li",[v._v("服务器不能使用"),t("code",[v._v("New")]),v._v("状态。")]),v._v(" "),t("li",[v._v("服务器可使用 KeepAlive 状态来避免客户端关闭主连接。")])]),v._v(" "),t("h2",{attrs:{id:"传输格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传输格式"}},[v._v("#")]),v._v(" 传输格式")]),v._v(" "),t("p",[v._v("Mux.Cool 使用对称传输格式，即客户端和服务器发送和接收相同格式的数据。")]),v._v(" "),t("h3",{attrs:{id:"帧格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#帧格式"}},[v._v("#")]),v._v(" 帧格式")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("2 字节")]),v._v(" "),t("th",[v._v("L 字节")]),v._v(" "),t("th",[v._v("X 字节")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("元数据长度 L")]),v._v(" "),t("td",[v._v("元数据")]),v._v(" "),t("td",[v._v("额外数据")])])])]),v._v(" "),t("h3",{attrs:{id:"元数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#元数据"}},[v._v("#")]),v._v(" 元数据")]),v._v(" "),t("p",[v._v("元数据有若干种类型，由状态 S 来区分。所有类型的元数据都包含 ID 和 Opt 两项，其含义为：")]),v._v(" "),t("ul",[t("li",[v._v("ID: 子连接的唯一标识")]),v._v(" "),t("li",[v._v("Opt:\n"),t("ul",[t("li",[v._v("D(0x01): 有额外数据")])])])]),v._v(" "),t("p",[v._v("当选项 Opt(D) 开启时，额外数据格式如下：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("2 字节")]),v._v(" "),t("th",[v._v("L 字节")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("长度 L")]),v._v(" "),t("td",[v._v("数据")])])])]),v._v(" "),t("h4",{attrs:{id:"新建子连接-new"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建子连接-new"}},[v._v("#")]),v._v(" 新建子连接 (New)")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("2 字节")]),v._v(" "),t("th",[v._v("1 字节")]),v._v(" "),t("th",[v._v("1 字节")]),v._v(" "),t("th",[v._v("1 字节")]),v._v(" "),t("th",[v._v("2 字节")]),v._v(" "),t("th",[v._v("1 字节")]),v._v(" "),t("th",[v._v("X 字节")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("ID")]),v._v(" "),t("td",[v._v("0x01")]),v._v(" "),t("td",[v._v("选项 Opt")]),v._v(" "),t("td",[v._v("网络类型 N")]),v._v(" "),t("td",[v._v("端口")]),v._v(" "),t("td",[v._v("地址类型 T")]),v._v(" "),t("td",[v._v("地址 A")])])])]),v._v(" "),t("p",[v._v("其中：")]),v._v(" "),t("ul",[t("li",[v._v("网络类型 N：\n"),t("ul",[t("li",[v._v("0x01：TCP，表示当前子连接的流量应当以 TCP 的方式发送至目标。")]),v._v(" "),t("li",[v._v("0x02：UDP，表示当前子连接的流量应当以 UDP 的方式发送至目标。")])])]),v._v(" "),t("li",[v._v("地址类型 T：\n"),t("ul",[t("li",[v._v("0x01：IPv4")]),v._v(" "),t("li",[v._v("0x02：域名")]),v._v(" "),t("li",[v._v("0x03：IPv6")])])]),v._v(" "),t("li",[v._v("地址 A：\n"),t("ul",[t("li",[v._v("当 T = 0x01 时，A 为 4 字节 IPv4 地址；")]),v._v(" "),t("li",[v._v("当 T = 0x02 时，A 为 1 字节长度（L） + L 字节域名；")]),v._v(" "),t("li",[v._v("当 T = 0x03 时，A 为 16 字节 IPv6 地址；")])])])]),v._v(" "),t("p",[v._v("在新建子连接时，若 Opt(D) 开启，则这一帧所带的数据需要被发往目标主机。")]),v._v(" "),t("h4",{attrs:{id:"保持子连接-keep"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保持子连接-keep"}},[v._v("#")]),v._v(" 保持子连接 (Keep)")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("2 字节")]),v._v(" "),t("th",[v._v("1 字节")]),v._v(" "),t("th",[v._v("1 字节")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("ID")]),v._v(" "),t("td",[v._v("0x02")]),v._v(" "),t("td",[v._v("选项 Opt")])])])]),v._v(" "),t("p",[v._v("在保持子连接时，若 Opt(D) 开启，则这一帧所带的数据需要被发往目标主机。")]),v._v(" "),t("h4",{attrs:{id:"关闭子连接-end"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭子连接-end"}},[v._v("#")]),v._v(" 关闭子连接 (End)")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("2 字节")]),v._v(" "),t("th",[v._v("1 字节")]),v._v(" "),t("th",[v._v("1 字节")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("ID")]),v._v(" "),t("td",[v._v("0x03")]),v._v(" "),t("td",[v._v("选项 Opt")])])])]),v._v(" "),t("p",[v._v("在保持子连接时，若 Opt(D) 开启，则这一帧所带的数据需要被发往目标主机。")]),v._v(" "),t("h4",{attrs:{id:"保持连接-keepalive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保持连接-keepalive"}},[v._v("#")]),v._v(" 保持连接 (KeepAlive)")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("2 字节")]),v._v(" "),t("th",[v._v("1 字节")]),v._v(" "),t("th",[v._v("1 字节")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("ID")]),v._v(" "),t("td",[v._v("0x04")]),v._v(" "),t("td",[v._v("选项 Opt")])])])]),v._v(" "),t("p",[v._v("在保持连接时:")]),v._v(" "),t("ul",[t("li",[v._v("若 Opt(D) 开启，则这一帧所带的数据必须被丢弃。")]),v._v(" "),t("li",[v._v("ID 可为随机值。")])]),v._v(" "),t("h2",{attrs:{id:"应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[v._v("#")]),v._v(" 应用")]),v._v(" "),t("p",[v._v("Mux.Cool 协议与底层协议无关，理论上可以使用任何可靠的流式连接来传输 Mux.Cool 的协议数据。")]),v._v(" "),t("p",[v._v("在目标导向的协议如 Shadowsocks 和 VMess 协议中，连接建立时必须包含一个指定的地址。为了保持兼容性，Mux.Cool 协议指定地址为“v1.mux.cool”。即当主连接的目标地址与之匹配时，则进行 Mux.Cool 方式的转发，否则按传统方式进行转发。")])])}),[],!1,null,null,null);_.default=e.exports}}]);