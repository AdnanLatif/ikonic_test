const amqp = require('amqplib');

async function processTask(task) {
  // Simulate time-consuming task
  await new Promise((resolve) => setTimeout(resolve, 10000));
  console.log('Task Completed:', task);
}

async function startWorker() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertQueue('tasks');
  channel.prefetch(1);

  console.log('Worker Node started. Waiting for tasks...');

  channel.consume('tasks', async (msg) => {
    const task = msg.content.toString();
    await processTask(task);
    channel.ack(msg);
  });
}

startWorker();
