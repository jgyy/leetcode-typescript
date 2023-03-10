function isValidSerialization(preorder: string): boolean {
    const nodes = preorder.split(",");
    let diff = 1;
    for (const node of nodes) {
        if (--diff < 0) {
            return false;
        }
        if (node !== "#") {
            diff += 2;
        }
    }
    return diff === 0;
};

console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"));