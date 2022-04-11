const TYPE_AUDS = 1; 
const TYPE_MAGS_LECTIONS = 3;
const TYPES_MAGS_SPLITTED = 2;


const ITEMS = {
    [TYPE_AUDS]: { title: "Загруженность фонда", percent: 55, type: TYPE_AUDS, url: ""},
    [TYPES_MAGS_SPLITTED]:  { title: "Магистры разбиты", percent: 24, type: TYPES_MAGS_SPLITTED, url: ""},
    [TYPE_MAGS_LECTIONS]:  { title: "Лекции магистров", percent: 15, type: TYPE_MAGS_LECTIONS, url: ""},
}

module.exports = {
    TYPE_AUDS,
    TYPE_MAGS_LECTIONS,
    TYPES_MAGS_SPLITTED,
    ITEMS
}