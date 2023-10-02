const soap = require('soap');
const url = 'http://www.dneonline.com/calculator.asmx?wsdl';

soap.createClient(url, function (err, client) {
    console.log('Descreve -> ', client.describe().Calculator.CalculatorSoap) 
})

soap.createClient(url, function(err, client) {
    client.Add({intA: 3, intB: 3}, function (err, result) {
        if (err) return console.log(err);
        console.log("SOMA: ", result.AddResult);
    });
    client.Subtract({ intA: 3, intB:3}, function(err, result) {
        if(err) return console.log(err);
        console.log("SUBTRAÇÃO: ", result.SubtractResult);
    });
    client.Multiply({ intA: 3, intB:3}, function(err, result) {
        if(err) return console.log(err);
        console.log("MULTIPLICAÇÃO: ", result.MultiplyResult);
    });
});