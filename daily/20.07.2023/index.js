// Medium | Stack
// Идея задачи достаточно легкая, но я ее сразу не понял. Проблем с
// реализацией не возникло.

// Speed O(n), Space (n), n = asteroids.length
// Done | Beats Speed=48, Space=89
const asteroidCollision = function (asteroids) {
    const result = []

    for (let index = 0, n = asteroids.length; index < n; index++) {
        const lastAsteroid = result.at(-1)
        const currentAsteroid = asteroids[index]

        if (!result.length || lastAsteroid < 0 || currentAsteroid > 0) {
            result.push(currentAsteroid)
        } else if (-currentAsteroid === lastAsteroid) {
            result.pop()
        } else if (-currentAsteroid > lastAsteroid) {
            result.pop()
            index--
        }
    }

    return result
}
