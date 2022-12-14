const amqp = require("amqplib");

function receive() {
  amqp
    .connect("amqp://kimuna:1234@localhost")
    .then(function (conn) {
      process.once("SIGINT", function () {
        conn.close();
      });
      return conn.createChannel().then(function (ch) {
        var ok = ch.assertExchange("logs", "fanout", { durable: false });
        var ok2 = ok.then(function () {
          return ch.assertQueue("", { exclusive: true });
        });
        var ok3 = ok2.then(function (qok) {
          return ch.bindQueue(qok.queue, "logs", "").then(function () {
            return qok.queue;
          });
        });
        var ok4 = ok3.then(function (queue) {
          return ch.consume(queue, logMessage, { noAck: true });
        });
        return ok.then(function () {
          console.log(" [*] Waiting for logs. To exit press CTRL+C");
        });

        function logMessage(msg) {
          console.log(" [x] '%s'", msg.content.toString());
        }
      });
    })
    .catch(console.warn);
}

receive();
