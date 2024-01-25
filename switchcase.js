/**
 * Write a program to find whether the given number is present in the given array or not using the switch case.
 Input:
    const arr = [2,4,5,9,3,1,8];
    const num = 5;
 */

    const arr = [2,4,5,9,3,1,8];
    const num = 5;

    switch (num) {
        case arr[0]:
            console.log(`${num} is present in the given array.`)
            break;
        case arr[1]:
            console.log(`${num} is present in the given array.`)
            break;
        case arr[2]:
            console.log(`${num} is present in the given array.`)
            break;
        case arr[3]:
            console.log(`${num} is present in the given array.`)
            break;
        case arr[4]:
            console.log(`${num} is present in the given array.`)
            break;
        case arr[5]:
            console.log(`${num} is present in the given array.`)
            break;
        case arr[6]:
            console.log(`${num} is present in the given array.`)
            break;
        default:
            console.log(`${num} is not present in the given array.`)
            break;
    }