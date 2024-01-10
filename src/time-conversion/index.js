/**
 * Convierte una cadena de tiempo en formato de 12 horas a formato de 24 horas.
 *
 * @param {string} s - La cadena de tiempo en formato de 12 horas.
 * @returns {string} La cadena de tiempo convertida en formato de 24 horas.
 */
function timeConversion(s) {
    const isAM = s.includes("AM");
    const isPM = s.includes("PM");
    const hh = s.slice(0, 2);

    const pad = (v) => String(v).padStart(2, '0');

    const replace = (v) => s.replace(hh, v).slice(0, -2);

    if (isAM) return replace((hh != 12) ? hh : pad(0));
    if (isPM) return replace((hh != 12) ?
        pad(parseInt(hh) + 12) : 12);
    return s;
}

console.log(timeConversion('12:01:00AM'))//'00:01:00'
console.log(timeConversion('07:05:45PM'))//'19:05:45'
