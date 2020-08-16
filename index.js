'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
// function each(collection, action) {
//     if(Array.isArray(collection)) {
//         for(var i = 0; i < collection.length; i++) {
//             action(collection[i], i, collection);
//         }
//     } else {
//         for (var key in collection) {
//             action(collection[key], key, collection);
//         }
//     }
// }
// module.exports.each = each;
/**
 * identity: take a value and return value unchanged
 * @param {*} value: single value that can be any datatype
 * @param {*} the input value unchanged
 * Edge Case: none
 */ 
function identity(value){
    return value;//return value unchanged
}

module.exports.identity = identity;

/**
 *typeOf: takes a value and defines data types 
 * @param {*} any value
 * @return {string} returns string with data types
 * Edge Case: none
 */ 

function typeOf(value){
 if(Array.isArray(value) === true) return "array";   
 if(value === null) return "null";
 if(value instanceof Date) return "date";
 else return typeof value;
}

module.exports.typeOf = typeOf;

/**
 * first: the "first" function will return the 1st element based on the 
 * argument given.
 * @param {number} number of elements
 * @param {Array} array that is being looped through
 * @param {Array} return a new array
 * Edge Case: none
 */ 

function first(array, number){
  if(!Array.isArray(array)){//if array is not array return []
      return [];
  }else if(!number){//if number is not a number return 1st element
      return array[0];
  }else{//otherwise return 1st num of array
      return array.splice(0, number);
  }
}

module.exports.first = first;

/**
 * last: the "last" function will return the "last" element based on the 
 * argument given.
 * @param {number} number of elements
 * @param {Array} array that is being looped through
 * @return {Array} return a new array
 * Edge Case: none
 */ 
 
function last(array, number){
    if(!Array.isArray(array)){//if array is not array return []
        return [];
    }else if(number > array.length ){//if number is greater than array.length
        return array;//return array
    }else if(number){//if number is not given return last element
        return array.splice(array.length - number, number);
    }else if(!number){//otherwise return last number
        return array.pop();
    }
};

module.exports.last = last;

/**
 * indexOf: returns index's number where the value's argument
 * first appears in the array.
 * @param {array} array thast is being looped through
 * @param {*} any given value
 * @return {number} returns index number where argument 1st appears
 * Edge Case: none
 */ 

function indexOf(array, value){
    if(!array.includes(value)){//if array is not array return -1
        return -1;
    }if(array.includes(value)){//if array includes value
        for(let i = 0; i < array.length; i++){//loop over array length
            if(value === array[i]){//compare value to array index
                return i;//return index
            }
        }
       }
    }
    
module.exports.indexOf = indexOf;

/**
 * @param {array} array that is being looped through
 * @param {*} any given value
 * @return {booleans}
 * Edge Case: will return false if element is not found
 */ 
 
function contains(array, value){
    return array.includes(value) ? true : false;
}
// function contains(array, value){
// if(!value){
//     return array;
// }else{
//     return array.includes(value) ? true : false;
// }    
// }

module.exports.contains = contains;

/**
 * each: loops over the collection and the function for "each" element
 * @param {collection} an object or an array
 * @param {function} 
 * @return {} does not return anything
 * Edge Case: none
 */ 
 
function each(collect, func){
    if(Array.isArray(collect)){
        for(let i in collect){//loop over collection array
            func(collect[i], i, collect)//return elem, index, collection
        }
    }    else{
            for(let j in collect){//loop over coleection object
                func(collect[j], j, collect);//return elem, index, collection
        }
    }
}

module.exports.each = each;

/**
 * unique: loops through an array and removes duplicate values
 * @param {array}loops through array looking for duplicate values
 * @param {} 
 * @return {array} return array without duplicate values
 * Edge Case: none
 */ 
 
function unique(array){
    return [...new Set(array)];//return new Set to remove duplicates.
}  

module.exports.unique = unique;

/**
 * filter: "filter" will iterate through the array then look for the true
 * elements, array, index and pushes all the true values depending on 
 * the callback.
 * @param {array} array that's being looped through
 * @param {function} a set of statements that perform a task
 * @return {array} returns an array of all the truthy values that 
 * are filtered in the array
 * Edge Case: none
 */ 
 
function filter(array, func){
 let filterArray = [];
    for(let i = 0; i < array.length; i++){
        if (func(array[i], i, array) === true){
            filterArray.push(array[i])
        }
    } return filterArray;
}   
module.exports.filter = filter;

/**
 * reject: reject will iterate through the array then look for the falsey
 * elements, array, index and pushes all the falsey values depending 
 * on the callback.
 * @param {array} array that is being looped through
 * @param {function} a set of statements that performs a task 
 * @return {array} returns an array of all the falsey values that 
 * that are filtered in the array.
 * Edge Case: none
 */ 
 
function reject(array, func){ 
    return _.filter(array, function(ele, i, array){ 
        return (!(func(array[i], i, array)));
    });
};

module.exports.reject = reject;

/**
 * partition: The "partition" will iterate throught the array and return
 * two sub arrays of true and false values depending on the function.
 * It will then return one large array of the two sub arrays.
 * @param {array} array that is being looped through
 * @param {} 
 * @return {array} returns two sub arrays with true/false elements,
 * index and array into one large array
 * Edge Case: none
 */ 
 
function partition(array, func){
  return [_.filter(array, func), _.reject(array, func)];
}
 module.exports.partition = partition;
 
 /**
  * map: calls on each element and returns a value of each function
 * @param {collection} an object or an array
 * @param {function} a set of statements that performs a task
 * @return {array} returns a new array containing result of the modified array.
 * Edge Case: none
 */ 
 
function map(collect, func){
  let results = [];
    _.each(collect, function(elements, index, array) {
        results.push(func(collect[index], index, collect));
    }); return results;
};

module.exports.map = map;
  
/**
 * pluck: cycles through an object to see if a given property
 * is in the objects or arrays to see if the keys exist, then the values
 * are pushed into an array.
 * @param {array} an array and a string
 * @param {string} association between a key and a value 
 * @return {array} an array containing the values
 * Edge Case: none
 */ 
 
function pluck(array, property){
     return array.map(function(obj) {
         return obj[property];
  })
}  
  
module.exports.pluck = pluck; 

/**
 * every: calls upon each element in the collection. If all are
 * true it returns true. If one is false, returns the entire 
 * result false.
 * @param {collection} an object or an array
 * @param {function} a set of statements that performs a task 
 * @return: if one value is false returns entire collection false,
 * otherwise returns true if entire collection is true.
 * Edge Case: true for truthy and false for falsey when no function is passed
 * If any value in the index is falsey, returns false.
 * If passed through entire array with no falsey values, return true.
 * If function returns false at any index, return false
 * If any value in object is falsey, return false.
 * If passed through entire object with no falsey values, return true
 */ 
 
function every(collection, func) {
    let trueOrFalse = true;
    _.each(collection, function(element, index, collection) {
        if(_.typeOf(func) === 'function' && !func(element, index, collection)) {
            trueOrFalse = false;
        } else if (element === false) {
            trueOrFalse = false;
        }
    }); return trueOrFalse;
};
  
module.exports.every = every;  

/**
 * some: calls upon each element. If all or just one returns true it 
 * will be returned as true.
 * @param {collection} an object or an array
 * @param {function} a set of statements that performs a task 
 * @return: returns all elements if all are true or if one is true.
 * Edge Case: true for truthy and false for falsey when no function is passed
 * If any value in the index is falsey, returns false.
 * If passed through entire array with no falsey values, return true.
 * If function returns false at any index, return false
 * If any value in object is falsey, return false.
 * If passed through entire object with no falsey values, return true
 */ 

function some(collection, func) {
    let trueOrFalse = false;
    _.each(collection, function(element, index, collection) {
        if(_.typeOf(func) === 'function' && func(element, index, collection)) {
            trueOrFalse = true;
        } else if (element === true) {
            trueOrFalse = true;
        }
    }); return trueOrFalse;
}  
  
module.exports.some = some;

/**
 * extend: updates object values to other objects if they share the same key 
 * @param {object} object that is being looped through
 * @param {...moreObjects} spread array into different arguments
 * @return {object} returns a new object that contains the new properties
 * Edge Case: if key doesn't exist key value will be added
 */ 

function extend(...object){
    let arrObj = [...object];
    if(arrObj.length === 1){
        return arrObj[0];
    }
    for(let i = 1; i < arrObj.length; i++){
        for(let key in arrObj[i]){
            arrObj[0][key] = arrObj[i][key];
        }
    }
    return arrObj[0];
}

module.exports.extend = extend

/**
 * reduce: calls a function for every element passing the arguments: 
 * previousResults, elements, index. Then uses the return value of the function
 * as the "previous result" for the next iteration and seed as the first
 * "previous result". If no seed is given, the "first previous" will be the first 
 * index value of the array. After the last iteration, the return value of the
 * final function call will be returned.
 * @param {array} array that is being looped through
 * @param {function} a set of statements that performs a task 
 * @param {*} seed that will be included in the call
 * @return: the return value of the final function call
 * Edge Case: none
 */ 
 
function reduce(array, func, seed){
    if(seed === undefined){
        seed = array[0];
        for(let i = 1; i < array.length; i++){
            seed = func(seed, array[i], i);
        }
        return seed;
    }else{
        for(let i = 0; i < array.length; i++){
            seed = func(seed, array[i], i);
        }
        return seed;
    }
}

module.exports.reduce = reduce;


