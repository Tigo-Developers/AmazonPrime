
var PaqueteOtro = "";
var paqueteTigo = "";



(function ($) {
    $(document).ready(function () {        
        $("#select").hide(); // ocultar 
        $("#tabla").hide(); //
        $('select').formSelect();
    });

    $('select').on('contentChanged', function () {
        // re-initialize (update)
        $(this).material_select();
    });

    $("#Paquetetigo").change(function () {
        paqueteTigo = $('#PaqueteOtro').val();        
    });
    
    $("#PaqueteOtro").change(function () {
        LlenarPaquetes();        
    });

    
  

    // LLENAR PAQUETES
    function LlenarPaquetes() {
        
        paqueteTigo = $('#Paquetetigo').val();
        PaqueteOtro = $('#PaqueteOtro').val();
        var valorTigo;
        var dispoTigo;
        var conTigo;

        switch(paqueteTigo){
            case 'prime':
                valorTigo = 'gratis en el plan de $ 100.000 3 meses de cortesia en los planes de 60.000 y 75.000';
                dispoTigo = 'Hasta 3';
                conTigo = '+4.000';
                break;
            case 'hbogo':
                valorTigo = '29.900';
                dispoTigo = 'Hasta 2';
                conTigo = '+2.500'; 
                break; 
        }

        switch(PaqueteOtro){
            case 'netflix':
                valorOtro = '$16.900 o $32.900';
                dispoOtro = 'Hasta 4 (Cobro Adicional)';
                conOtro = '+4.000';
                break;
            case 'claro':
                valorOtro = '$13.900';
                dispoOtro = 'Hasta 2';
                conOtro = '+25.000 (cobro Adicional)'; 
                break; 
            case 'movistar':
                valorOtro = '$17.950';
                dispoOtro = 'Hasta 2';
                conOtro = '+3.500'; 
                break;     
        }


        if(paqueteTigo == "prime"){
            paqueteTigo = "PRIME VIDEO"
        }
        if(paqueteTigo == "hbogo"){
            paqueteTigo = "HBO GO"
        }

        $('.paqueteTigo').text(paqueteTigo);
        $('.valortigo').text(valorTigo);
        $('.dispotigo').text(dispoTigo);
        $('.contigo').text(conTigo);

        if(PaqueteOtro == "netflix"){
            paqueteTigo = "NETFLIX"
        }
        if(PaqueteOtro == "claro"){
            paqueteTigo = "CLARO"
        }
        if(PaqueteOtro == "movistar"){
            paqueteTigo = "MOVISTAR"
        }

        $('.paqueteOtro').text(paqueteTigo);
        $('.valorotro').text(valorOtro);
        $('.dispootro').text(dispoOtro);
        $('.conotro').text(conOtro);



    }
   
    
   


})(jQuery);