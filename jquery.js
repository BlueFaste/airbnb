<script type="text/javascript" src="http://code.jquery.com/jquery-3.4.1.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script type="text/javascript">

  $(document).ready(function(){
    $('#bouton').on('click',function(){
      var lieu=$('#where').val();
      var date_arr=$('#dae_arrive').val();
      var date_dep=$('#date_depart').val();
      var nb_adu=$('#adulte').val();
      var nb_enf=$('enfant').val();
      $.ajax({
        url:'traitement.php',
        type: 'POST',
        data:{
          lieu:lieu,
          date_arr:date_arr,
          date_dep:date_dep,
          nb_adu:nb_adu,
          nb_enf:nb_enf
        },
        dataType:'html',
        success:function(code_html,status){
          if(code_html=="no"){
            <!-- alert('non'); -->
            $("#where").attr("placeholder","Rentrer soit paris soit marseille").val("");
          }
          else{
            window.location.assign(code_html);
            }
        }
      })
      return false;
    })

    $("#compte_deco").on('click',function(){
      $('#compte_deco').toggle();
      $('#compte_co').toggle();
    }),
    $("#compte_co").on('click',function(){
      $('#compte_deco').toggle();
      $('#compte_co').toggle();
  })
})

$( function() { //permet de choisir l'ordre sur la page
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
} );

$( function() { //autocomplete
  var availableTags = [
  "paris",
  "marseille",
  "toulouse",
  "lion",
  "lille",
  "nice",
  "nantes",
  "strabourg",
  "toulon"
  ];
$( "#where" ).autocomplete({
  source: availableTags
  });

});

</script>
