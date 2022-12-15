module.exports = class DNA {

    constructor(sequence) {
        
        this.inputSequence = sequence;

        this.sequenceIsEmptyOrNull();
        this.replaceSpace();
        this.sequenceIsInvalid(); 
 
    }

    sequenceDNA() { 
        this.outputSequence = "";
        for (let val of this.inputSequence) {
            console.log(val);
            switch (val) {
                case 'A':
                    val = 'T';
                    break;
                case 'T':
                    val = 'A';
                    break;
                case 'C': 
                    val = 'G';
                    break;
                case 'G':
                    val = 'C';
                    break;
            }

            this.outputSequence += val;
        }

        // if(this.inputSequence === 'A') {
        //     this.outputSequence = 'T';
        // }

        // if(this.inputSequence === 'T') {
        //     this.outputSequence = 'A';
        // }

        // if(this.inputSequence === 'C') {
        //     this.outputSequence = 'G';
        // }

        // if(this.inputSequence === 'G') {
        //     this.outputSequence = 'C';
        // }
    }

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