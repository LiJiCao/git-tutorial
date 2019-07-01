var objectFactory = function () {
    var obj = new Object(),
        Constructor = [].shift.call(arguments);
    obj._proto_ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);

    return typeof ret === 'object' ? ret : obj;
}

var Person = function (name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}

var a = objectFactory(Person, 'ljc');
// var a = new Person('ljc');
// console.log(Object.getPrototypeOf(a) === Person.prototype);

// 闭包的写法
var extent = function () {
    var value = 0;
    return {
        call: function () {
            value++;
            console.log(value);
        }

    }
};
var extent = extent();
extent.call(); // 输出：1
extent.call(); // 输出：2
extent.call(); // 输出：3

// 面向对象的写法1
var extent = {
    value: 0,
    call: function () {
        this.value++;
        console.log(this.value);
    }
};
extent.call(); // 输出：1
extent.call(); // 输出：2
extent.call(); // 输出：3

// 面向对象的写法2
var Extent = function () {
    this.value = 0;
};
Extent.prototype.call = function () {
    this.value++;
    console.log(this.value);
};
var extent = new Extent();
extent.call();
extent.call();
extent.call();

// 判断数据类型
var isType = function (type) {
    return function (obj) {
        return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    }
};

var isString = isType('String');
var isArray = isType('Array');
var isNumber = isType('Number');

// AOP：日志系统、异常处理等等
Function.prototype.before = function (beforefn) {
    var __self = this; // 保存原函数的引用
    return function () { // 返回包含了原函数和新函数的"代理"函数
        beforefn.apply(this, arguments); // 执行新函数，修正this
        return __self.apply(this, arguments); // 执行原函数
    }
};
Function.prototype.after = function (afterfn) {
    var __self = this;
    return function () {
        var ret = __self.apply(this, arguments);
        afterfn.apply(this, arguments);
        return ret;
    }
};
var func = function () {
    console.log(2);
};
func = func.before(function () {
    console.log(1);
}).after(function () {
    console.log(3);
});
func();

// 函数节流
var throttle = function (fn, interval) {
    var __self = fn, // 保存需要被延迟执行的函数引用
        timer, // 定时器
        firstTime = true; // 是否是第一次调用
    return function () {
        var args = arguments,
            __me = this;
        if (firstTime) { // 如果是第一次调用，不需延迟执行
            __self.apply(__me, args);
            return firstTime = false;
        }
        if (timer) { // 如果定时器还在，说明前一次延迟执行还没有完成
            return false;
        }
        timer = setTimeout(function () { // 延迟一段时间执行
            clearTimeout(timer);
            timer = null;
            __self.apply(__me, args);
        }, interval || 500);
    };
};
window.onresize = throttle(function () {
    console.log(1);
}, 500);

// 分时函数
var timeChunk = function (ary, fn, count) {
    var obj,
        t;
    var len = ary.length;
    var start = function () {
        for (var i = 0; i < Math.min(count || 1, ary.length); i++) {
            var obj = ary.shift();
            fn(obj);
        }
    };
    return function () {
        t = setInterval(function () {
            if (ary.length === 0) { // 如果全部节点都已经被创建好
                return clearInterval(t);
            }
            start();
        }, 200); // 分批执行的时间间隔，也可以用参数的形式传入
    };
};

var ary = [];
for (var i = 1; i <= 1000; i++) {
    ary.push(i);
}
;
var renderFriendList = timeChunk(ary, function (n) {
    var div = document.createElement('div');
    div.innerHTML = n;
    document.body.appendChild(div);
}, 8);
renderFriendList();