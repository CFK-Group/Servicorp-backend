let merge = require('merge-objects');

let util = {};

function isEmptyObject(obj) {
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

util.mix = function (objectToMix) {
    campanias = [];

    for(object of objectToMix){
        campanias.push({
            orderId: object.orderId,
            nombreCampania: object.nombreCampania,
            inicio: object.inicio,
            fin: object.fin,
            orderlines:[
                {id:object.orderline, nombre: object.nombreOrderLine, prioridad: object.prioridad, spot: object.spot}
            ]
        });
    }


    final = [];
    insertedCampaigns = [];
    for (let i = 0; i < campanias.length; i++) {
        let c = {};
        if(!insertedCampaigns.includes(campanias[i].orderId)) {
            for (let j = 0; j < campanias.length; j++) {
                if (j > i) {
                    let a = campanias[i];
                    let b = campanias[j];
                    if (a.orderId === b.orderId) {
                        c = merge(a, b);
                    }
                }
            }

            if (!isEmptyObject(c)) {
                final.push(c);
                insertedCampaigns.push(c.orderId);
            } else {
                final.push(campanias[i]);
                insertedCampaigns.push(campanias[i].orderId);
            }

        }
    }

    return final;
};

module.exports = util;