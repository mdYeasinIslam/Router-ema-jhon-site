let arr1 = ["a", "b", "c", "d"];
let arr2 = ["c", "e"]
for (let item of arr1) {
    arr1.find(item2 => {
        if (item2 == item) {
            console.log("true")
        }
        else {
            console.log("false")
        }
    })
}