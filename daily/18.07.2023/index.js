// Medium | HashTable
// Идея задачи достаточно легкая, но формулировка сделана крайне непонятно
// (по крайне мере перевод на русский). Узнал что у коллекции Map можно
// вызвать метод next() у массива keys().

// Speed O(1), Space O(n), n = capacity;
// Done | Beast Speed=8, Space=33
class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}