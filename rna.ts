// Introdução
// Você trabalha para uma empresa de bioengenharia especializada no desenvolvimento de soluções terapêuticas.

// Sua equipe acaba de receber um novo projeto para desenvolver uma terapia direcionada para um tipo raro de câncer.

// Observação
// É tudo muito complicado, mas a ideia básica é que, às vezes, o corpo das pessoas produz uma quantidade excessiva de uma determinada proteína. Isso pode causar todo tipo de estrago.

// Mas se você puder criar uma molécula muito específica (chamada micro-RNA), ela pode impedir que a proteína seja produzida.

// Essa técnica é chamada de Interferência de RNA .

// Instruções
// Sua tarefa é determinar o complemento de RNA de uma determinada sequência de DNA.

// Tanto as fitas de DNA quanto as de RNA são sequências de nucleotídeos.

// Os quatro nucleotídeos encontrados no DNA são adenina ( A ), citosina ( C ), guanina ( G ) e timina ( T ).

// Os quatro nucleotídeos encontrados no RNA são adenina ( A ), citosina ( C ), guanina ( G ) e uracila ( U ).

// Dada uma fita de DNA, sua fita de RNA transcrita é formada pela substituição de cada nucleotídeo por seu complemento:

// G->C
// C->G
// T->A
// A->U


    const tipoRna: string = 'A, C, G, U';
    function transcricaoRna(dna: string): string {
        // Implementação: converte cada nucleotídeo de DNA para seu complemento de RNA
        return dna.split('').map(nucleotide => {
            switch (nucleotide) {
                case 'G': return 'C';
                case 'C': return 'G';
                case 'T': return 'A';
                case 'A': return 'U';
                default: throw new Error(`Nucleotídeo inválido: ${nucleotide}`);
            }
        }).join('');
    }

    console.log(transcricaoRna("GCTA")); // Saída esperada: "CGAU"