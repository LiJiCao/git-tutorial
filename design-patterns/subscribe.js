// 发布-订阅模式

/* 例1：售楼处*/

let salesOffice = {};
// 客户
salesOffice.clientList = [];
// 添加订阅者
salesOffice.listen = function (fn) {
    this.clientList.push(fn);
};
// 发布消息
salesOffice.trigger = function () {
    for (let i = 0, fn; fn = this.clientList[i++];) {
        fn.apply(this, arguments);
    }
};
// 简单测试
// salesOffice.listen(function (price, squareMeter) {
//     console.log(`价格: ${price}`);
//     console.log(`面积: ${squareMeter}`);
// })
// salesOffice.listen(function (price, squareMeter) {
//     console.log(`价格: ${price}`);
//     console.log(`面积: ${squareMeter}`);
// })
// salesOffice.trigger(2000000, 88); // 输出：200 万，88 平方米
// salesOffice.trigger(3000000, 110); // 输出：300 万，110 平方米

/* 例2: 让订阅者只订阅自己感兴趣的消息 */
salesOffice.clientList = {};
salesOffice.listen = function (key, fn) {
    // 如果没有订阅过消息，就给其添加一个缓存列表
    if (!this.clientList[key]) {
        this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
};
salesOffice.trigger = function () {
    let key = Array.prototype.shift.call(arguments),
        fns = this.clientList[key];

    if (!fns || fns.length === 0) {
        return false;
    }

    for (let i = 0, fn; fn = fns[i++];) {
        fn.apply(this, arguments);
    }
};
// 测试
// salesOffice.listen('squareMeter88', function (price) { // 小明订阅88 平方米房子的消息
//     console.log('价格= ' + price); // 输出： 2000000
// });
// salesOffice.listen('squareMeter110', function (price) { // 小红订阅110 平方米房子的消息
//     console.log('价格= ' + price); // 输出： 3000000
// });
// salesOffice.trigger('squareMeter88', 2000000); // 发布88 平方米房子的价格
// salesOffice.trigger('squareMeter110', 3000000); // 发布110 平方米房子的价格

/* 例3: 封装发布和订阅的功能 */
let event = {
    clientList: [],
    listen(key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn);
    },
    trigger() {
        let key = Array.prototype.shift.call(arguments),
            fns = this.clientList[key];

        if (!fns || fns.length === 0) {
            return false;
        }

        for (let i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments);
        }
    },
    // 取消订阅
    remove(key, fn) {
        let fns = this.clientList[key];
        if (!fns) { // 如果key 对应的消息没有被人订阅，则直接返回
            return false;
        }
        if (!fn) { // 如果没有传入具体的回调函数，表示需要取消key 对应消息的所有订阅
            fns && (fns.length = 0);
        } else {
            for (let l = fns.length - 1; l >= 0; l--) { // 反向遍历订阅的回调函数列表
                let _fn = fns[l];
                if (_fn === fn) {
                    fns.splice(l, 1); // 删除订阅者的回调函数
                }
            }
        }
    }
};
// 为所有对象动态安装发布-订阅功能
let installEvent = function (obj) {
    for (let i in event) {
        obj[i] = event[i];
    }
};

salesOffice = {};
installEvent(salesOffice);

// salesOffice.listen('squareMeter88', fn1 = function (price) { // 小明订阅消息
//     console.log('价格= ' + price);
// });
// salesOffice.listen('squareMeter100', fn2 = function (price) { // 小红订阅消息
//     console.log('价格= ' + price);
// });
// salesOffice.trigger('squareMeter88', 2000000); // 输出：2000000
// salesOffice.trigger('squareMeter100', 3000000); // 输出：3000000
// salesOffice.remove( 'squareMeter88', fn1 ); // 删除小明的订阅
// salesOffice.trigger( 'squareMeter88', 2000000 ); // 输出：2000000

/* 例4: 全局发布-订阅对象 */
const Event = (function () {
    let clientList = {},
        listen,
        trigger,
        remove;

    listen = function (key, fn) {
        if (!clientList[key]) {
            clientList[key] = [];
        }
        clientList[key].push(fn);
    };

    trigger = function () {
        let key = Array.prototype.shift.call(arguments),
            fns = clientList[key];

        if (!fns || fns.length === 0) {
            return false;
        }

        for (let i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments);
        }
    };

    remove = function (key, fn) {
        let fns = clientList[key];
        if (!fns) { // 如果key 对应的消息没有被人订阅，则直接返回
            return false;
        }
        if (!fn) { // 如果没有传入具体的回调函数，表示需要取消key 对应消息的所有订阅
            fns && (fns.length = 0);
        } else {
            for (let l = fns.length - 1; l >= 0; l--) { // 反向遍历订阅的回调函数列表
                let _fn = fns[l];
                if (_fn === fn) {
                    fns.splice(l, 1); // 删除订阅者的回调函数
                }
            }
        }
    };

    return {
        listen: listen,
        trigger: trigger,
        remove: remove
    }

})();

// Event.listen('squareMeter88', function (price) { // 小红订阅消息
//     console.log('价格= ' + price); // 输出：'价格=2000000'
// });
// Event.trigger('squareMeter88', 2000000); // 售楼处发布消息

/* 例5: 使用命名空间的全局发布-订阅对象 */
const EventOfNamespace = (function () {
    let global = this,
        Event,
        _default = 'default';

    Event = (function () {
        let _listen,
            _trigger,
            _remove,
            _slice = Array.prototype.slice,
            _shift = Array.prototype.shift,
            _unshift = Array.prototype.unshift,
            nameSpaceCache = {},
            _create,
            find,
            each = function (arr, fn) {
                let ret;
                for (let i = 0, l = arr.length; i < l; i++) {
                    let n = arr[i];
                    ret = fn.call(n, i, n);
                }
            };

        _listen = function (key, fn, cache) {
            if (!cache[key]) {
                cache[key] = [];
            }
            cache[key].push(fn);
        };

        _remove = function (key, cache, fn) {
            if (cache[key]) {
                // 如果指定函数，就删除缓存上的元素
                if (fn) {
                    for (let i = cache[key].length - 1; i >= 0; i--) {
                        if (cache[key][i] === fn) {
                            cache[key].splice(i, 1);
                        }
                    }
                } else {
                    // 如果没有指定，就清空该缓存
                    cache[key] = [];
                }
            }
        };

        _trigger = function () {
            let cache = _shift.call(arguments),
                key = _shift.call(arguments),
                args = arguments,
                _self = this,
                stack = cache[key];

            if (!stack || stack.length === 0) {
                return false;
            }

            return each(stack, function () {
                return this.apply(_self, args);
            })
        };

        _create = function (namespace) {
            namespace = namespace || _default;
            let cache = {},
                offlineStack = [], // 离线事件
                ret = {
                    listen(key, fn, last) {
                        // 添加订阅者
                        _listen(key, fn, cache);

                        // 如果有离线数据，就将离线数据发送给订阅者
                        if (offlineStack === null) {
                            return;
                        }
                        if (last === 'last') {
                            offlineStack.length && offlineStack.pop()();
                        } else {
                            each(offlineStack, function () {
                                this();
                            })
                        }
                        // 清空离线数据
                        offlineStack = null;
                    },
                    one(key, fn, last) {
                        _remove(key, cache);
                        this.listen(key, fn, last);
                    },
                    remove(key, fn) {
                        _remove(key, cache, fn);
                    },
                    trigger() {
                        let fn,
                            args,
                            _self = this;
                        _unshift.call(arguments, cache);
                        args = arguments;
                        fn = function () {
                            return _trigger.apply(_self, args);
                        };
                        if (offlineStack) {
                            // 存放离线数据
                            return offlineStack.push(fn);
                        }
                        return fn();
                    }
                };
            return namespace
                ? (nameSpaceCache[namespace] ? nameSpaceCache[namespace] : nameSpaceCache[namespace] = ret)
                : ret;
        };

        return {
            create: _create,
            one: function (key, fn, last) {
                // 找是否有缓存，没有就创建缓存
                let event = this.create();
                event.one(key, fn, last);
            },
            remove: function (key, fn) {
                let event = this.create();
                event.remove(key, fn);
            },
            listen: function (key, fn, last) {
                let event = this.create();
                event.listen(key, fn, last);
            },
            trigger: function () {
                let event = this.create();
                event.trigger.apply(this, arguments);
            }
        };
    })();

    return Event;
})();

/************** 先发布后订阅 ********************/
EventOfNamespace.trigger('click', 1);
EventOfNamespace.listen('click', function (a) {
    console.log(a); // 输出：1
});
/************** 使用命名空间 ********************/
EventOfNamespace.create('namespace1').listen('click', function (a) {
    console.log(a); // 输出：1
});
EventOfNamespace.create('namespace1').trigger('click', 1);

EventOfNamespace.create('namespace1').trigger('click', 2);
EventOfNamespace.create('namespace1').listen('click', function (a) {
    console.log(a); // 输出：2
});
