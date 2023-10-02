const soap = require('soap')
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'

soap.createClient(url, function (err, client){
        //console.log('DESCRIBE -->', client.describe().AtendeClienteService.AtendeClientePort)

        client.consultaCEP({cep: '90160030'}, function(err, result){
            if (err) {
                console.log(err)
            } else {
                console.log(result)
            }
        })
});