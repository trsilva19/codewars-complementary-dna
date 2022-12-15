module.exports = class DNA {

    constructor(sequence) {
        
        this.sequence = sequence;

        this.sequenceIsEmptyOrNull();
        this.replaceSpace();
        this.sequenceIsInvalid(); 
 
    }

    // Functions to Validate 
    sequenceIsEmptyOrNull() {
        if (typeof this.sequence === "undefined" || this.sequence === null || this.sequence === "") {
            throw new TypeError('Parameter is empty or null');
        }
    }

    replaceSpace(){
        this.sequence = this.sequence.replace(/\s/g, "");
    }

    sequenceIsInvalid() {
        if (this.sequence.match(/^[AaCcGgTt>]*$/) === null) {
            throw new TypeError('Sequence is not valid');
        } 
    }

}