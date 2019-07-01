// 代理模式
// 合并请求
let synchronousFile = function (id) {
    console.log('开始同步文件，id 为: ' + id);
};
let proxySynchronousFile = (function () {
    let cache = [], // 保存一段时间内需要同步的ID
        timer; // 定时器
    return function (id) {
        cache.push(id);
        if (timer) { // 保证不会覆盖已经启动的定时器
            return;
        }
        timer = setTimeout(function () {
            synchronousFile(cache.join(',')); // 2 秒后向本体发送需要同步的ID 集合
            clearTimeout(timer); // 清空定时器
            timer = null;
            cache.length = 0; // 清空ID 集合
        }, 2000);
    }
})();
let checkbox = document.getElementsByTagName('input');
for (let i = 0, c; c = checkbox[i++];) {
    c.onclick = function () {
        if (this.checked === true) {
            proxySynchronousFile(this.id);
        }
    }
}

// 惰性请求
let miniConsole = (function () {
    let cache = [];
    let handler = function (ev) {
        if (ev.keyCode === 113) {
            let script = document.createElement('script');
            script.onload = function () {
                for (let i = 0, fn; fn = cache[i++];) {
                    fn();
                }
            };
            script.src = 'miniConsole.js';
            document.getElementsByTagName('head')[0].appendChild(script);
            document.body.removeEventListener('keydown', handler);// 只加载一次miniConsole.js
        }
    };
    document.body.addEventListener('keydown', handler, false);
    return {
        log: function () {
            let args = arguments;
            cache.push(function () {
                return miniConsole.log.apply(miniConsole, args);
            });
        }
    }
})();
miniConsole.log(11); // 开始打印log
// miniConsole.js 代码
miniConsole = {
    log: function () {
// 真正代码略
        console.log(Array.prototype.join.call(arguments));
    }
};

// 缓存代理：使用高阶函数缓存
/**************** 计算乘积 *****************/
let mult = function () {
    let a = 1;
    for (let i = 0, l = arguments.length; i < l; i++) {
        a = a * arguments[i];
    }
    return a;
};
/**************** 计算加和 *****************/
let plus = function () {
    let a = 0;
    for (let i = 0, l = arguments.length; i < l; i++) {
        a = a + arguments[i];
    }
    return a;
};
/**************** 创建缓存代理的工厂 *****************/
let createProxyFactory = function (fn) {
    let cache = {};
    return function () {
        let args = Array.prototype.join.call(arguments, ',');
        if (args in cache) {
            return cache[args];
        }
        return cache[args] = fn.apply(this, arguments);
    }
};
let proxyMult = createProxyFactory(mult),
    proxyPlus = createProxyFactory(plus);
alert(proxyMult(1, 2, 3, 4)); // 输出：24
alert(proxyMult(1, 2, 3, 4)); // 输出：24
alert(proxyPlus(1, 2, 3, 4)); // 输出：10
alert(proxyPlus(1, 2, 3, 4)); // 输出：10

// loading图片代理
var myImage = (function () {
    var imgNode = document.createElement('img');
    document.getElementById('app').appendChild(imgNode);
    return {
        setSrc: function (src) {
            imgNode.src = src;
        }
    }
})();
var proxyImage = (function () {
    var img = new Image;
    img.onload = function () {
        // 加载完成后再添加
        myImage.setSrc(this.src);
    }
    return {
        setSrc: function (src) {
            // myImage: 文档中的img节点，先放置以及存好的图片
            myImage.setSrc('../images/loading.gif');
            // 加载图片
            img.src = src;
        }
    }
})();
proxyImage.setSrc('http://106.38.157.59:8000/upload/image/201904/2d312ce7-c611-4b7f-a35d-485747746e07.jpg');