// কোন object থেকে falsy value বের করা

const obj = {
    a: "aslam",
    b: "",
    c: "morol",
    d: undefined,
    e: "hasib",
    f: "khan",
    g: null
};

const truthyObj = function (obj) {
    for (let key in obj) {
      if (!obj[key]) {
       delete obj[key] ; 
      }
    }
    return obj ;
};
console.log(truthyObj(obj));