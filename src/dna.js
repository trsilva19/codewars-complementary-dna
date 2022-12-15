module.exports = class DNA {

    constructor(sequence) {
        
        this.inputSequence = sequence;

        this.sequenceIsEmptyOrNull();
        this.replaceSpace();
        this.sequenceIsInvalid(); 
 
    }

    sequenceDNA() { }

    // Functions to Validate 
    sequenceIsEmptyOrNull() {
        if (typeof this.inputSequence === "undefined" || this.inputSequence === null || this.inputSequence === "") {
            throw new TypeError('Parameter is empty or null');
        }
    }

    replaceSpace(){
        this.inputSequence = this.inputSequence.replace(/\s/g, "");
    }

    sequenceIsInvalid() {
        if (this.inputSequence.match(/^[AaCcGgTt>]*$/) === null) {
            throw new TypeError('Sequence is not valid');
        } 
    }

}