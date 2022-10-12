$(document).ready(function(){
    //Aqui tu codigo
    
  //  $("#paginas").load('archivos/'+ 'inicio' +'.html');

    inicilizarComponentes();
 
   
    $('#menu').slicknav({ 
            label: 'Menú'        
    });

     
    
    $(".click").click(function(){
        console.log($(this).attr("value"));
        $("#paginas").empty().html();        
        let documento = $(this).attr("value");

     


        $("#paginas").load('archivos/'+ documento +'.html');
        inicilizarComponentes();
      });

      function inicilizarComponentes() {
        $(".dropdown-trigger").dropdown();
        $('.sidenav').sidenav();
        $('.slider').slider({
          indicators: true
        });
        $('.tabs').tabs();
        

        console.log("componrnyrd");
      }

     

      
      
});
