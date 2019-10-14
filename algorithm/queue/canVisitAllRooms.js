/**
 * 841. 钥匙和房间
 * 有 N 个房间，开始时你位于 0 号房间。每个房间有不同的号码：0，1，2，...，N-1，
 * 并且房间里可能有一些钥匙能使你进入下一个房间。
 * 在形式上，对于每个房间 i 都有一个钥匙列表 rooms[i]，每个钥匙 rooms[i][j] 由 [0,1，...，N-1] 中的一个整数表示，
 * 其中 N = rooms.length。 钥匙 rooms[i][j] = v 可以打开编号为 v 的房间。
 * 最初，除 0 号房间外的其余所有房间都被锁住。
 * 你可以自由地在房间之间来回走动。
 * 如果能进入每个房间返回 true，否则返回 false。
 * @param {number[][]} rooms
 * @return {boolean}
 */

// 使用BFS遍历
var canVisitAllRooms = function(rooms) {
    let n = rooms.length, queue = [], i = 0, BFS = bfs(rooms)
    queue.push.apply(queue, rooms[0])
    rooms[0] = true
    while (queue.length > 0) {
        for (let j = 0, ql = queue.length; j < ql; j++) {
            let room = queue.pop()
            BFS(room, queue)
        }
    }
    return rooms.every(o => o === true)
};

var bfs = function (rooms) {
    return function (room, queue) {
        // 如果是没有访问过的房间
        if (rooms[room] !== true) {
            for (let k = 0, kl = rooms[room].length; k < kl; k++) {
                if (rooms[room][k] !== true) {
                    queue.push(rooms[room][k])
                }
            }
            rooms[room] = true
        }
    }
}