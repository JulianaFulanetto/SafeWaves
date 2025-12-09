import { Client } from "react-native-paho-mqtt";

const myStorage = {
  setItem: (key, item) => Promise.resolve(),
  getItem: (key) => Promise.resolve(null),
  removeItem: (key) => Promise.resolve(),
};

const client = new Client({
  uri: "wss://broker.hivemq.com:8884/mqtt", // Porta correta para WebSocket
  clientId: "rn_safeWaves_" + Math.random(),
  storage: myStorage,
});

export default {
  connect: (onMessage) => {
    return client
      .connect()
      .then(() => {
        console.log("MQTT conectado!");
        return client.subscribe("safeWaves/alertas"); // tópico correto
      })
      .then(() => {
        console.log("Inscrito no tópico safeWaves/alertas");

        client.on("messageReceived", (message) => {
          console.log("MQTT recebeu:", message.payloadString);
          onMessage(message.payloadString);
        });
      })
      .catch((err) => console.log("Erro MQTT:", err));
  },
};
