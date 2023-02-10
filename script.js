var arr= ["Москва", "Санкт-Петербург", "Воронеж"];

function  Comma(towns) {
    if (Array.isArray(towns)){
        var result = (towns.join(", ")+".");
        return result;
    }
    return 'It`s not an array';
}
console.log(Comma(arr));