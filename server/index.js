require("isomorphic-fetch");
const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const port = new SerialPort("/dev/ttyUSB0", { baudRate: 9600 });

const parser = new Readline();
port.pipe(parser);

parser.on("data", line => {
  console.log(`> ${line}`);
  MOVE();
});
port.write("ROBOT POWER ON\n");
/**/

async function MOVE() {
  const response = await fetch("https://iproject03.herokuapp.com/v1/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: "{orders(where: {col: {_eq: 1}}) {id}}" })
  });
  if (response == undefined) {
    return;
  }

  const data = (await response.json()).data.orders;

  const id = data[data.length - 1].id;

  fetch("https://iproject03.herokuapp.com/v1/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `mutation Move($id: Int, $col: Int) {
        update_orders(where: { id: { _eq: ${id} } }, _set: { col: ${2} }) {
          returning {
            id
            col
          }
        }
      }`
    })
  });
}
