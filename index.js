const fs = require('fs');

function m(data,values) {
    let fmatch = data.match(/\{\{\-(.*?)\}\}/gm);
    let match = data.match(/\{\{(.*?)\}\}/gm);

    if(fmatch){
        fmatch.forEach((m) => {
            let frm = m.replace(/\{\{|\}\}/g, '').trim();
            if(frm.startsWith("-")){
                frm = frm.slice(1);
                let cu = fs.readFileSync(frm+'.eme','utf-8');
                data = data.replaceAll(`{{-${frm}}}`,cu);
            }
        });
    }

    if(match){
        match.forEach((m) => {
            let frm = m.replace(/\{\{|\}\}/g, '').trim();
            if(!frm.startsWith("=") && !frm.startsWith("-")){
                data = data.replaceAll(`{{${frm}}}`,eval(frm));
            }
        });
    }

    if(values){
        values.forEach((value) => {
            data = data.replaceAll(`{{=${value.name}}}`,value.value);
            data = data.replaceAll(`{{=${value.name}.length}}`,value.value.length);
        });
    }

    return data;
}

function compile(data,values) {

    let ma = m(data,values);

    return ma;
}

async function compilefile(data,values) {
    if(!data.split(".")[1] || data.split(".")[1] != "eme") return console.log("Only supported .eme file extensions.");
    const fs = require('fs');
    let filedata = await fs.readFileSync(data,'utf-8');

    let ma = m(filedata,values);

    return ma;
}

module.exports.compile = compile;
module.exports.compilefile = compilefile;
