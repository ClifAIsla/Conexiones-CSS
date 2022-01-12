console.log("page loaded...");

function cambiarnombre(aquillegainfo){
    //aquillegainfo.innerText = "Clif Isla";
    console.log(aquillegainfo.closest('.card-body').querySelector('h1'));
    let newname = aquillegainfo.closest('.card-body').querySelector('h1');
    newname.innerText = "Rebeca Purple";
}

function remove(aquillegoinfo){

    //ESTO SERIA ACTUALIZAR LOS NÚMEROS
    //console.log(aquillegoinfo.closest('.card').querySelector('#n_solicitudes'));
    
    let solicitudes = aquillegoinfo.closest('.card').querySelector('#n_solicitudes');
    console.log(solicitudes);

    let num_solicitu = Number(solicitudes.innerText);
    console.log(solicitudes);
    num_solicitu--;
    solicitudes.innerText = num_solicitu

    let eliminar =  aquillegoinfo.parentElement.parentElement;
    eliminar.remove()
}


function addfriends(aquillegoinfo){
    
    console.log(aquillegoinfo.closest('.col-1').querySelectorAll('.badge')[1]);
    let friends = aquillegoinfo.closest('.col-1').querySelectorAll('.badge')[1];
    let numberfriends = Number(friends.innerText);
    console.log(numberfriends)
    numberfriends++;
    friends.innerText = numberfriends;
        
    /*
    let solicitudes2 = aquillegoinfo.closest('.card').querySelector('.badge')[0];
    
    //console.log(aquillegoinfo.closest('.card').querySelector('.badge')[0])

    let num_solicitudes2 = Number(solicitudes2.innerText);
    num_solicitudes2--;
    solicitudes2.innerText = num_solicitudes2
    
    */

    let solicitudes = aquillegoinfo.closest('.card').querySelectorAll('.badge')[0];
    console.log(solicitudes);

    let num_solicitu = Number(solicitudes.innerText);
    console.log(solicitudes);
    num_solicitu--;
    solicitudes.innerText = num_solicitu



    
    let aceptado = aquillegoinfo.parentElement.parentElement.remove()
}
