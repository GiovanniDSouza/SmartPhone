$(document).ready(function(){
    $('#entre').click(function(){
      $('.telaInicial').show();
      $('.telabloqueio').hide();
    });

    $('.desbloquea').click(function(){
        $('.namber').show();
        $('.telaDebloqueio').hide();
      });
    
      $('.botao').click(function(){
        $('#apagar').show();
        $('#cancelar').hide();
      });
    
      $('#apagar').click(function(){
        $('#cancelar').show();
        $('#apagar').hide();
      });
      $('#cancelar').click(function(){
        $('.telaDebloqueio').show();
        $('.namber').hide();
      });
      $('.telaPreta').click(function(){
        $('.telaDebloqueio').show();
        $('.bateriaOone').show();
        $('.hourOne').show();
        $('.telaPreta').hide();
      });
      $('.botaoBloqueia').click(function(){
        $('.telaInicial').hide();
        $('.telabloqueio').show();
        $('#cancelar').show();
        $('#apagar').hide();
      });

      $('#galeria').click(function(){
        $('.telaInicial').hide();
        
        $('.telaGaleria').show();
      
      });
      $('.botaoBrancoFoto').click(function(){
        $('.telaInicial').show();
        
        $('.telaGaleria').hide();
      
      });

      $('.botaoBrancoFotos').click(function(){
        $('.telaInicial').show();
        
        $('.telaGaleria').hide();
      
      });

      $('.botaoBrancoFotoos').click(function(){
        $('.telaInicial').show();
        
        $('.telaGaleria').hide();
      
      });

      $('#leftDois').click(function(){
        $('.menugaleria').show();
        $('.fototecaDois').hide();
        $('.vaifototecaDois').show();
        $('.menugaleriaa').hide();
        $('.fototeca').hide();
        $('.vai').show();
        $('.reta').show();
        $('#more').show();
        $('.textalbuns').show();
        $('.albunsText').show();
        $('.textalbu').show();
      
      });
      $('.fot').click(function(){
        $('.menugaleria').hide();
        $('.fototecaDois').hide();
        $('.menugaleriaa').show();
        $('.fototeca').show();
        $('.vai').hide();
        $('.reta').hide();
        $('#more').hide();
        $('.textalbuns').hide();
        $('.albunsText').hide();
        $('.textalbu').hide();
      });
      $('.albu').click(function(){
        $('.menugaleria').show();
        $('.menugaleriaa').hide();
        $('.fototeca').hide();
        $('.vai').show();
        $('.reta').show();
        $('#more').show();
        $('.textalbuns').show();
        $('.albunsText').show();
        $('.textalbu').show();
      });
      $('.quadradoDeFotos').click(function(){
        $('.menugaleria').show();
        $('.fototecaDois').show();
        $('.menugaleriaa').hide();
        $('.fototeca').hide();
        $('.vai').hide();
        $('.reta').hide();
        $('#more').hide();
        $('.textalbuns').hide();
        $('.albunsText').hide();
        $('.textalbu').hide();
      });

      $('.section').click(function(){
        $('.containerr').show();
        $('.menugaleria').hide();
        $('.fototecaDois').show();
        $('.vaifototecaDois').hide();
        $('.menugaleriaa').hide();
        $('.fototeca').hide();
        $('.vai').hide();
        $('.reta').hide();
        $('#more').hide();
        $('.textalbuns').hide();
        $('.albunsText').hide();
        $('.textalbu').hide();
      });
      $('#left').click(function(){
        $('.containerr').hide();
        $('.menugaleria').show();
        $('.fototecaDois').show();
        $('.vaifototecaDois').show();
        $('.menugaleriaa').hide();
        $('.fototeca').hide();
        $('.vai').hide();
        $('.reta').hide();
        $('#more').hide();
        $('.textalbuns').hide();
        $('.albunsText').hide();
        $('.textalbu').hide();
      });
      $('.item').click(function(){
       $('.parteB').hide();
       $('.parteE').hide();
       $('.bloque').show();
       $('.item').hide();
      });

      $('.bloque').click(function(){
        $('.parteB').show();
        $('.parteE').show();
        $('.bloque').hide();
        $('.item').show();
       });
     
  });
