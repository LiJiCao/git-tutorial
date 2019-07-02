var duff = function (items, process) {
    let iterations = Math.floor(items.length / 8),
        startAt = items.length % 8,
        i = 0;
    if (startAt === 0) {
        if (iterations === 0) return
        iterations--
    }
    do {
        switch (startAt) {
            case 0: process(startAt, i, items[i++]);
            case 7: process(startAt, i, items[i++]);
            case 6: process(startAt, i, items[i++]);
            case 5: process(startAt, i, items[i++]);
            case 4: process(startAt, i, items[i++]);
            case 3: process(startAt, i, items[i++]);
            case 2: process(startAt, i, items[i++]);
            case 1: process(startAt, i, items[i++]);
        }
        startAt = 0;
    } while (iterations--)
}

var duff2 = function (items, process) {
    let i = items.length % 8;
    while (i) {
        process(i, items[i--])
    }

    i = items.length - i;

    while (i) {
        process(items[i--]);
        process(items[i--]);
        process(items[i--]);
        process(items[i--]);
        process(items[i--]);
        process(items[i--]);
        process(items[i--]);
        process(items[i--]);
    }
}

let items = new Array(8).fill(1)
duff2(items, console.log)


const test = (num, process) => {
    switch (num) {
        case 7: process(7, 'startAt', num);
        case 6: process(6, 'startAt', num);
        case 5: process(5, 'startAt', num);
        case 4: process(4, 'startAt', num);
        case 3: process(3, 'startAt', num);
        case 2: process(2, 'startAt', num);
        case 1: process(1, 'startAt', num);
    }
}

// test(2, console.log)