/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
class Logger {
    msgSet: Set<string>;
    msgMap: Map<string, number>;

    constructor() {
        this.msgSet = new Set();
        this.msgMap = new Map();
    }

    shouldPrintMessage(timestamp: number, message: string): boolean {
        if (this.msgSet.has(message)) {
            if (timestamp - this.msgMap.get(message)! >= 10) {
                this.msgMap.set(message, timestamp);
                return true;
            } else {
                return false;
            }
        } else {
            this.msgSet.add(message);
            this.msgMap.set(message, timestamp);
            return true;
        }
    }
}

const logger = new Logger();
console.log(logger.shouldPrintMessage(1, "foo")); // true
console.log(logger.shouldPrintMessage(2, "bar")); // true
console.log(logger.shouldPrintMessage(3, "foo")); // false
console.log(logger.shouldPrintMessage(8, "bar")); // false
console.log(logger.shouldPrintMessage(10, "foo")); // false
console.log(logger.shouldPrintMessage(11, "foo")); // true
