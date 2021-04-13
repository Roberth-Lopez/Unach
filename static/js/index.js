//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
	//alert("led on");
	console.log("led1on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("Encender1");
    	message.destinationName = "ralopez.fie@unach.edu.ec/test";
    	client.send(message);
  
}
function LED2_On() {
	//alert("led on");
	console.log("led2on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("Encender2");
    	message.destinationName = "ralopez.fie@unach.edu.ec/test";
    	client.send(message);
  
}
function LED1_Off(){	
	//alert("led off");
	console.log("led1off");
	message = new Paho.MQTT.Message("Apagar1");
    	message.destinationName = "ralopez.fie@unach.edu.ec/test";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
function LED2_Off(){	
	//alert("led off");
	console.log("led2off");
	message = new Paho.MQTT.Message("Apagar2");
    	message.destinationName = "ralopez.fie@unach.edu.ec/test";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}

function Historial_1(){	
	//alert("led off");
	console.log("historial1");
	message = new Paho.MQTT.Message("Historial");
    	message.destinationName = "ralopez.fie@unach.edu.ec/test";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}

function Estado_1(){	
	//alert("led off");
	console.log("estado1");
	message = new Paho.MQTT.Message("Estado1");
    	message.destinationName = "ralopez.fie@unach.edu.ec/test";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
function Estado_2(){	
	//alert("led off");
	console.log("estado2");
	message = new Paho.MQTT.Message("Estado2");
    	message.destinationName = "ralopez.fie@unach.edu.ec/test";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}

function enviar_1(){	
	console.log("PIN1");
	message = new Paho.MQTT.Message(document.getElementById('pin1').value);
    	message.destinationName = "ralopez.fie@unach.edu.ec/test4";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}

function enviar_2(){	
	console.log("PIN2");
	message = new Paho.MQTT.Message(document.getElementById('pin2').value);
    	message.destinationName = "ralopez.fie@unach.edu.ec/test6";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}


// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "ralopez.fie@unach.edu.ec",
    password: "roberth1996",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("ralopez.fie@unach.edu.ec/test1");
    client.subscribe("ralopez.fie@unach.edu.ec/test2");
    client.subscribe("ralopez.fie@unach.edu.ec/test3");
    client.subscribe("ralopez.fie@unach.edu.ec/test5");	  
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "ralopez.fie@unach.edu.ec/test";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
    Mensaje=message.payloadString;
	  
	if((message.destinationName == "ralopez.fie@unach.edu.ec/test1") && (Mensaje == "Led 1 Encendido") ){
	   document.getElementById("sensor1").innerHTML=message.payloadString;
	   }
	else if((message.destinationName == "ralopez.fie@unach.edu.ec/test1") && (Mensaje == "Led 2 Encendido") ){
	   document.getElementById("sensor2").innerHTML=message.payloadString;
	   }
	else if((message.destinationName == "ralopez.fie@unach.edu.ec/test1") && (Mensaje == "Led 1 Apagado") ){
	   document.getElementById("sensor1").innerHTML=message.payloadString;
	   }
	else if((message.destinationName == "ralopez.fie@unach.edu.ec/test1") && (Mensaje == "Led 2 Apagado") ){
	   document.getElementById("sensor2").innerHTML=message.payloadString;
	   }  
	  
	  
	else if(message.destinationName == "ralopez.fie@unach.edu.ec/test2"){
	  document.getElementById("historial").innerHTML=message.payloadString;
	}
	  
	  
	else if((message.destinationName == "ralopez.fie@unach.edu.ec/test3") && (Mensaje == "Led 1 Encendido") ){
	  document.getElementById("estado1").innerHTML=message.payloadString;
	}
	else if((message.destinationName == "ralopez.fie@unach.edu.ec/test3") && (Mensaje == "Led 2 Encendido") ){
	  document.getElementById("estado2").innerHTML=message.payloadString;
	}  
	else if((message.destinationName == "ralopez.fie@unach.edu.ec/test3") && (Mensaje == "Led 1 Apagado") ){
	  document.getElementById("estado1").innerHTML=message.payloadString;
	}  
	else if((message.destinationName == "ralopez.fie@unach.edu.ec/test3") && (Mensaje == "Led 2 Apagado") ){
	  document.getElementById("estado2").innerHTML=message.payloadString;	
	}
	  
	  
	else if((message.destinationName == "ralopez.fie@unach.edu.ec/test3") && (Mensaje == "+Led 1 Encendido") ){
	  document.getElementById("estado_pin1").innerHTML=message.payloadString;
	}
	else if((message.destinationName == "ralopez.fie@unach.edu.ec/test3") && (Mensaje == "+Led 2 Encendido") ){
	  document.getElementById("estado_pin2").innerHTML=message.payloadString;
	}  
	else if((message.destinationName == "ralopez.fie@unach.edu.ec/test3") && (Mensaje == "+Led 1 Apagado") ){
	  document.getElementById("estado_pin1").innerHTML=message.payloadString;
	} 
	else if((message.destinationName == "ralopez.fie@unach.edu.ec/test3") && (Mensaje == "+Led 2 Apagado") ){
	  document.getElementById("estado_pin2").innerHTML=message.payloadString;
	}
	else if((message.destinationName == "ralopez.fie@unach.edu.ec/test3") && (Mensaje == "La contraseña es incorrecta") ){
	  document.getElementById("estado_pin1").innerHTML=message.payloadString;
	  document.getElementById("estado_pin2").innerHTML=message.payloadString;	
	}   
	

	if(message.destinationName == "ralopez.fie@unach.edu.ec/test5"){
		
        document.getElementById("hora").innerHTML=Mensaje.split(" ")[4];
        document.getElementById("minuto").innerHTML=Mensaje.split(" ")[6];
        document.getElementById("segundo").innerHTML=Mensaje.split(" ")[8];	
	
	}	  
  }
  
