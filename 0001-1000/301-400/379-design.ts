/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
class PhoneDirectory {
    available: Set<number>;

    constructor(maxNumbers: number) {
        this.available = new Set();
        for (let i = 0; i < maxNumbers; i++) {
            this.available.add(i);
        }
    }

    get(): number {
        if (this.available.size === 0) {
            return -1;
        }
        const number = this.available.values().next().value;
        this.available.delete(number);
        return number;
    }

    check(number: number): boolean {
        return this.available.has(number);
    }

    release(number: number): void {
        this.available.add(number);
    }
}

const phoneDirectory = new PhoneDirectory(3);
console.log(phoneDirectory.get());
console.log(phoneDirectory.get());
console.log(phoneDirectory.check(2));
console.log(phoneDirectory.get());
console.log(phoneDirectory.check(2));
phoneDirectory.release(2);
console.log(phoneDirectory.check(2));
