/* 
    Necessário refatorar - A função valida mas não entrega valor útil. 
    o que é esperado de uma função dessas: Parse + Validate + Return.

    se inválido -> null
    se válida   -> retorna o ID (número)
    por enquanto deixamos assim - 10/02/2026 - 7:25 
*/

export function checkInputedID(args) {
    let argumentInputID = args[0];
    let convertedID = Number(args[0]);
    let isNotANumber = Number.isNaN(convertedID);
    let isNotPositive = convertedID <= 0;
    let isNotInteger = !Number.isInteger(convertedID);
    let hasLeadingZero = argumentInputID.length > 1 && argumentInputID[0] === "0";

    if (isNotANumber || isNotPositive || isNotInteger || hasLeadingZero) {
        return false;
    } else {
        return true;
    }
}

export function convertedID(args) {
    let convertedID = Number(args[0]);
    return convertedID;
}