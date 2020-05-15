// This is a JavaScript file

$(document).on("click","#alerta",function() {
    navigator.notification.alert("Minha Mensagem",null,"Aviso!","Aceito");
});

$(document).on("click","#confirm",function() {
      function confirma(buttonIndex){
        if(buttonIndex == 1){
          navigator.notification.alert("Escolheu a opção A");
        }else{
          navigator.notification.alert("Escolheu a opção B");
        }
        
      }
    navigator.notification.confirm("Escolha A ou B",confirma,"Escolha:",['A','B']);
});

$(document).on("click","#beep",function() {
    navigator.notification.beep(3);
});

$(document).on("click","#vibrar",function() {
    navigator.vibrate(4000);
});

function mostraMapa(Lat, Long){
  L.mapquest.key = 'lNf4AEm4IHGxI6Wp2pzwg5VmxCnDHkfu';

        var map = L.mapquest.map('map', {
          center: [Lat, Long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());
}

$(document).on("click","#local",function() {
    var onSuccess = function(position) {
      mostraMapa(position.coords.latitude, position.coords.longitude)
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});