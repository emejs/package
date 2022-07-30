function compile(data,values) {
    let match = data.match(/\{\{(.*?)\}\}/g);

    if(match){
        match.forEach((m) => {
            let frm = m.replace(/\{\{|\}\}/g, '').trim();
            if(!frm.startsWith("=")){
                data = data.replaceAll(`{{${frm}}}`,eval(frm));
                eval(frm);
            }
        });
    }

    values.forEach((value) => {
        data = data.replaceAll(`{{=${value.name}}}`,value.value);
    });

    values.forEach((value) => {
        data = data.replaceAll(`{{=${value.name}.length}}`,value.value.length);
    });

    return data;
}

module.exports = compile;
