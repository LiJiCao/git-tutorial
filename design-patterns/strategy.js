let calculateBonus = function (performanceLevel, salary) {
    if (performanceLevel === 'S') {
        return salary * 4;
    }
    if (performanceLevel === 'A') {
        return salary * 3;
    }
    if (performanceLevel === 'B') {
        return salary * 2;
    }
};
calculateBonus('B', 20000); // 输出：40000
calculateBonus('S', 6000); // 输出：24000

// let performanceS = function( salary ){
//     return salary * 4;
// };
// let performanceA = function( salary ){
//     return salary * 3;
// };
// let performanceB = function( salary ){
//     return salary * 2;
// };
// let calculateBonus2 = function( performanceLevel, salary ){
//     if ( performanceLevel === 'S' ){
//         return performanceS( salary );
//     }
//     if ( performanceLevel === 'A' ){
//         return performanceA( salary );
//     }
//     if ( performanceLevel === 'B' ){
//         return performanceB( salary );
//     }
// };
// calculateBonus2( 'A' , 10000 ); // 输出：30000

// 策略类
let performanceS = function () {
};
performanceS.prototype.calculate = function (salary) {
    return salary * 4;
};
let performanceA = function () {
};
performanceA.prototype.calculate = function (salary) {
    return salary * 3;
};
let performanceB = function () {
};
performanceB.prototype.calculate = function (salary) {
    return salary * 2;
};

let Bonus = function () {
    this.salary = null; // 原始工资
    this.strategy = null; // 绩效等级对应的策略对象
};
Bonus.prototype.setSalary = function (salary) {
    this.salary = salary; // 设置员工的原始工资
};
Bonus.prototype.setStrategy = function (strategy) {
    this.strategy = strategy; // 设置员工绩效等级对应的策略对象
};
Bonus.prototype.getBonus = function () { // 取得奖金数额
    return this.strategy.calculate(this.salary); // 把计算奖金的操作委托给对应的策略对象
};

let bonus = new Bonus();
bonus.setSalary(10000);
bonus.setStrategy(new performanceS()); // 设置策略对象
console.log(bonus.getBonus()); // 输出：40000
bonus.setStrategy(new performanceA()); // 设置策略对象
console.log(bonus.getBonus()); // 输出：30000

let strategies = {
    "S": function (salary) {
        return salary * 4;
    },
    "A": function (salary) {
        return salary * 3;
    },
    "B": function (salary) {
        return salary * 2;
    }
};

var calculateBonus = function (level, salary) {
    return strategies[level](salary);
};
console.log(calculateBonus('S', 20000)); // 输出：80000
console.log(calculateBonus('A', 10000)); // 输出：30000