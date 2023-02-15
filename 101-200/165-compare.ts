function compareVersion(version1: string, version2: string): number {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    const len = Math.max(v1.length, v2.length);
    for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i] || '0', 10);
        const num2 = parseInt(v2[i] || '0', 10);
        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1;
        }
    }
    return 0;
};

console.log(compareVersion('0.1', '1.1')); // -1