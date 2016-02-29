var rexpr = avalon.config.rexpr
var rexpr = avalon.config.rexpr

function VText(text) {
    if (typeof text === "string") {
        this.type = "#text"
        this.nodeValue = text
        this.skipContent = !rexpr.test(text)
    } else {
        for (var i in text) {
            this[i] = text[i]
        }
    }
}

VText.prototype = {
    constructor: VText,
    clone: function () {
        return new VText(this)
    },
    toDOM: function () {
        return document.createTextNode(this.nodeValue)
    },
    toHTML: function () {
        return this.nodeValue
    }
}

module.exports = VText