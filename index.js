function compile(data,values) {
    values.forEach((value) => {
        data = data.replaceAll(`{{${value.name}}}`,value.value);
    });

    values.forEach((value) => {
        data = data.replaceAll(`{{${value.name}.length}}`,value.value.length);
    });

    //console.log(/{{=.*}}/)
    //data = data.replaceAll(/{{=.*}}/g,eval("/{{.*}}/g"));

    return data;
}

module.exports = compile;
