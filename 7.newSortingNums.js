function sortingNums(input) {
    let newArr = [];
    let sorted = input.sort((a, b) => a - b);
    for (let num of sorted) {
        el = sorted.shift();
        max = sorted.pop();
        newArr.push(el);
        newArr.push(max);
    }
    if (sorted.length >= 0) {
        finalEl = sorted[0];
        finalMax = sorted[1];
        newArr.push(finalEl);
        newArr.push(finalMax);
    }
    return newArr;
}
console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));