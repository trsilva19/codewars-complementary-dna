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

    Receber um dos lados de uma sequencia de DNA
    Deve retornar o outro lado do DNA, seguindo as regras
        A tem como complemento T 
        G tem como complemento C 
    Nenhuma sequencia deve ter espaços vazio ou não conter um DNA
    
# Entities
    Determinar Sequencia
        Sequencia Entrada
        Sequencia Saida
        
        função para determinar sequencia
        funções para validar entrada
            - validar valor em branco
            - validar valor nulo ou vazio
            - validar que todas as entradas sejam A, C, G, T

# Pomodoro 1 ( 14-12-22 - 25min / 5min pause)
    Create git project ✅
    Determine domain ✅
    Determine Entities ✅
    Create initial node project structure ✅
    Adicionado test para validar se o sequence retornado é o mesmo que o retornado ✅
    
# Pomodoro 2 ( 14-12-22 - 25min / 5min pause)
    Adicionado teste para validar se sequencias com espaço são retorna sem espaço em branco ✅
    Adicionado teste para validar se sequencias com multiplos espaço em branco ✅
    Adicionado teste para validar se a sequencia não é vazia ✅
    Adicionado teste para validar se a sequencia não é nula ✅

# Pomodoro 3 ( 15-12-22 - 25min / 5min pause)
    relembrar oq foi feito no dia anterior ✅
    Adicionar teste para validar se a sequencia contem apenas A,C,G,T ✅
    refactoring nas validações que estão no contrutor para metodos ✅

# Pomodoro 4 ( 15-12-22 - 25min / 5min pause)  
    adicionar teste para trocar de A em C 
