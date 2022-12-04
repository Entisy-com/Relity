const amqp = require("amqplib");

module.exports = function log(log) {
  amqp.connect("amqp://kimuna:1234@localhost").then(function (conn) {
    return conn
      .createChannel()
      .then(function (ch) {
        var ex = "logs";
        var ok = ch.assertExchange(ex, "fanout", { durable: false });

        return ok.then(function () {
          ch.publish(ex, "", Buffer.from(log));
          console.log(" [x] Sent '%s'", log);
          return ch.close();
        });
      })
      .finally(function () {
        conn.close();
      });
  });
};
