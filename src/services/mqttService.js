import { Client } from "react-native-paho-mqtt";

const myStorage = {
  setItem: (key, item) => Promise.resolve(),
  getItem: (key) => Promise.resolve(null),
  removeItem: (key) => Promise.resolve(),
};

const client = new Client({
  uri: "ws://broker.hivemq.com:8000/mqtt",
  clientId: "rn_safeWaves_" + Math.random(),
  storage: myStorage,
});

export default {
  connect: (onMessage) => {
    return client.connect()
      .then(() => {
        console.log("MQTT conectado");
        return client.subscribe("api/alertas/novo");  
      })
      .then(() => {
        console.log("Inscrito no tópico api/alertas/novo");

        client.on("messageReceived", (message) => {
          console.log("MQTT recebeu:", message.payloadString);
          onMessage(message.payloadString);
        });
      })
      .catch((err) => console.log("Erro MQTT:", err));
  }
};