
5.0.0 / 2017-12-25
==================

  * fix: 适配 iPhone X, 新增 viewport-fit=cover

4.1.2 / 2017-02-07
==================

  * doc: 更新文档

4.1.1 / 2016-12-07
==================

  * fix: fix android BUG

---

## 4.1.0
* 新增vw-no-android-hd模式, 安卓问题太多了! 业务自己看着选吧.

## 4.0.2
* 更新文档, 加上gif图, 感觉一图胜万言!

## 4.0.0
* 使用es6全模式;
* API修改;
* 恢复vh版本, 发现有业务使用.
* 新增vl版本, 不做viewport缩放, rem用来兼容vw, px单位保持原作用不变, 高清使用0.5px的方案; 期待安卓高版本跟进iOS的机制!



## 3.0.2
* 修复es6不识别的问题;

## 3.0.1
* 修复export default不识别的问题;


## 3.0.0
* 重构所有API, 删掉vw-750以及vh的版本. vh需求极少, 想用的用回2.0.4版本即可;
* vh-750版本通过require('anima-hd/vw.js')(100, 750);来实现
* flex支持动态修改scale参数, 方便在plus下想放大字体的需求;
* 源码用es6的语法实现, 简化各种兼容代码;

## 2.0.4
`IMPROVED` 兼容cdn的版本, 更新到atool-build;

## 2.0.3
`IMPROVED` 更新到tnpm;

## 2.0.2
`FIXED` iOS9.3下BUG修复

## 2.0.1
`FIXED` vw模式下的scale也要同步修改;

## 2.0.0
`CHANGED` 对iOS9.3做临时处理;

## 1.0.4
`CHANGED` 移除target-densitydpi=device-dpi的支持; 不支持scale的统一不做高清处理!


## 1.0.3
`CHANGED` 安卓机兼容UC内核;

## 1.0.1
`CHANGED` 让output文件可以直接执行.
`CHANGED` 更新README.MD


## 1.0.0
`NEW` 初始化代码
