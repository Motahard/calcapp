const div = (x, y) => parseFloat((parseFloat(x) / parseFloat(y)).toFixed(3))
const add = (x, y) => parseFloat((parseFloat(x) + parseFloat(y)).toFixed(3))
const sub = (x, y) => parseFloat((parseFloat(x) - parseFloat(y)).toFixed(3))
const mul = (x, y) => parseFloat((parseFloat(x) * parseFloat(y)).toFixed(3))
const mod = (x, y) => parseFloat((parseFloat(x) % parseFloat(y)).toFixed(3))

class Command {
    constructor(execute, value) {
        this.execute = execute
        this.value = value
    }
}

export const AddCommand = function (value) {
    return new Command(add, value)
}

export const SubCommand = function (value) {
    return new Command(sub, value)
}

export const MulCommand = function (value) {
    return new Command(mul, value)
}

export const DivCommand = function (value) {
    return new Command(div, value)
}

export const ModCommand = function (value) {
    return new Command(mod, value)
}

export const CalculatorFunc = function () {
    let current = 0
    const commands = []

    return {
        execute: function (command) {
            current = command.execute(current, command.value)
            commands.push(command)
        },

        setInitValue: function (value) {
            current = value
        },

        getCurrentValue: function () {
            return current
        },
    }
}

