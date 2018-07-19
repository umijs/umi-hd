# umi-hd

> 迁移至内网，作者：@写轮

## 重要决定

安卓提供了 vw-no-android-hd 版, 由于安卓手机存在各种兼容问题, 放弃安卓的高清也是一种选择. 总比老是出线上故障好

## 整体介绍
* vw是最简单的, 全部自动拉伸, 做页面无视屏幕适配.
  * `当下活动页开发的最佳选择.`
* flex是需要写适配布局的, 高清兼容好. 安卓UC内核也兼容.
  * `当下项目开发最佳的选择.`
  * flex可以加任意参数等比放大, 不受屏幕大小限制;
* vl是iOS上最完美的适配, 既能flex, 又能vw, 又能高清. `缺点是安卓完全不支持高清!`
* vh是打酱油的, 纯粹迎合下vw;

## Install

```bash
$ npm install umi-hd --save
```

## Usage

```js
// 默认的vl模式; 不带viewport缩放了, 用rem兼容了vw的单位, 用px做flex适配, 0.5px的单位做高清!
import vl from 'umi-hd';
vl();
// 等价于默认的;
vl(100, 750);
// 自定义文字大小
vl(32, 750);
// 设计稿是640的
vl(100, 640);

// 以前的flex模式, 通过compile之后进入到了lib文件夹下;
import flex from 'umi-hd/lib/flex';
flex();
// 等价于默认的;
flex(100, 1);
// 如果有的rem基准单位是16px, 可以这样修改
flex(32);
// 有的希望plus下字体放大一些比例, 可以这样使用;
flex(100, 414/375);

// vw推荐用法
import vw from 'umi-hd/lib/vw';
import vw from 'umi-hd/lib/vw-vw-no-android-hd';
vw();
// 等价于, iPhone 5s下就是1rem=100px, 原始比例1倍;
vw(100, 750);
// 如果有的设计稿是640px;
vw(100, 640);
// 有的希望字体是浏览器默认的16px;
vw(32, 640);

// vh推荐用法
import vh from 'umi-hd/lib/vh';
vh();
// 等价于默认的iPhone6设计稿, 1334-64;
vh(100, 1270);
// 640稿子是 568*2-64
vh(100, 1072);
// 有的希望字体是浏览器默认的16px;
vh(32, 1072);

```

* cdn源码地址;
  * https://as.alipayobjects.com/g/animajs/anima-hd/5.0.0/vl.js
  * https://as.alipayobjects.com/g/animajs/anima-hd/5.0.0/flex.js
  * https://as.alipayobjects.com/g/animajs/anima-hd/5.0.0/vw.js
  * https://as.alipayobjects.com/g/animajs/anima-hd/5.0.0/vw-no-android-hd.js
  * https://as.alipayobjects.com/g/animajs/anima-hd/5.0.0/vh.js

* 某些js动态计算viewport `强烈建议内联到css之前加载, 否则安卓部分进行会闪`

## License

Component is released under the MIT license.
