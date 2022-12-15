module.exports = class DNA {

    constructor(sequence) {
        if (typeof sequence === "undefined" || sequence === null || sequence === "") {
            throw new TypeError('Parameter is empty or null');
        }

        this.sequence = sequence.replace(/\s/g, "");
    }

}