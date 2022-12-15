# Notes

**Labels**  
✅ done  
🚧 WIP  
❌ ERROR  

# Exercise
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

# Domain

    Receiving one side of a DNA sequence
    Must return the other side of the DNA, following the rules
        A has as complement T
        G has as complement C
    No sequence should have empty spaces or not contain a sequence of DNA
    
# Entities
    DNA
        Input Sequence
        Output Sequence
        
        function to determine sequence
        functions to validate input
            - validate blank value
            - validate null or empty value
            - validate that all entries are A, C, G, T

# Pomodoro 1 ( 14-12-22 - 25min / 5min pause)
    Create git project ✅
    Determine domain ✅
    Determine Entities ✅
    Create initial node project structure ✅
    should be return a "sequence" equal to the "input sequence" ✅
    
# Pomodoro 2 ( 14-12-22 - 25min / 5min pause)
    shold be return a "sequence" with no whitespace ✅
    should be return a sequence with multiple whitespaces in a sequence without whitespace ✅
    should validate that a string is not empty ✅
    should validate that a string is not null ✅

# Pomodoro 3 ( 15-12-22 - 25min / 5min pause)
    remember the last work day ✅
    should validate if a sequence contains only A, C, G, T ✅
    refactoring validate methods to functions ✅

# Pomodoro 4 ( 15-12-22 - 25min / 5min pause)  
    should be validated if 'A' was changed to 'T' ✅
    should be validated if 'T' was changed to 'A' ✅
    should be validated if 'C' was changed to 'G' ✅
    should be validated if 'G' was changed to 'C' ✅

# Pomodoro 5 ( 15-12-22 - 25min / 5min pause) 
    should be validated if 'AG' was changed to 'TC' ✅

    WTF : I added the 2 tests below to make sure the sequence was correct, but I didn't get test failures; 

    should be validated if 'ATTGC' was changed to 'TAACG' ✅
    should be validated if 'GTAT' was changed to 'CATA' ✅

    remove unnecessary code  ✅
    translate notes to English ✅