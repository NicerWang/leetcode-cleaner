// ==UserScript==
// @name         Leetcode-cn清洁器
// @namespace    https://github.com/NicerWang
// @version      0.1
// @description  去除与刷题无关的内容，关闭结果提示
// @author       NicerWang
// @match        https://leetcode-cn.com/problems/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leetcode-cn.com
// ==/UserScript==

(function() {
    'use strict';
    var style = document.createElement("style");
    style.type = "text/css";
    var blockCssText = "div[data-key='submissions-content']>div>div>div>div>div:nth-child(n+3)," // 删除提交错误时的错误用例显示[OJ默认设置]
                     + "div[data-key='runcode-result-content']>div>div>div:nth-child(4)," // 删除执行代码时的正确代码运行结果[OJ默认设置]
                     + "div[data-key='comments']," // 关闭评论区
                     + "div[data-key='description-content']>div>div:nth-child(n+3):nth-child(-n+8)," // 删除相关企业、总提交次数、贡献者等无用信息
                     + "nav>ul>li:nth-child(2),nav>ul>li:nth-child(4),nav>ul>li:nth-child(6),nav>ul>li:nth-child(7),nav>ul>li:nth-child(8)," // 删除顶栏的学习、讨论、求职、商店
                     + "nav>div>*:nth-child(-n+5)," // 删除顶栏的下载APP、会员、我是面试官、通知等按钮
                     + "div[data-key='debugger']," // 关闭调试器
                     + "div.bottom-right," // 删除笔记功能
                     + "div#question-detail-main-tabs>div:nth-child(2)>div>div:nth-child(1)>div>*:nth-child(3)," // 删除点赞按钮
                     + "div#question-detail-main-tabs>div:nth-child(2)>div>div:nth-child(1)>div>*:nth-child(5)," // 删除分享按钮
                     + "div#question-detail-main-tabs>div:nth-child(2)>div>div:nth-child(1)>div>*:nth-child(7)," // 删除接受动态按钮
                     + "div#question-detail-main-tabs>div:nth-child(2)>div>div:nth-child(1)>div>*:nth-child(8)," // 删除反馈按钮
                     + "div#lc-home>div>div:nth-child(2)>div:first-child>div:first-child>div:last-child>div:first-child>div:last-child>div:first-child>div," // 删除贡献按钮
                     + "#lang-select + button" // 删除智能模式按钮

    // 重命名：题解 => 🧨我要放弃
    var giveUp = "div[data-key='solution']>a>div>span>div>div {display:none} div[data-key='solution']>a>div>span>div:after{content:'🧨我要放弃'}";
    var text = document.createTextNode(blockCssText + "{display:none;}" + giveUp);
    style.appendChild(text);
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
})();