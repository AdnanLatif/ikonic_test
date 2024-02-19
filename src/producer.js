const amqp = require('amqplib');

async function produceTasks() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertQueue('tasks');

  // Generate tasks with varying complexities
  const tasks = ['task1', 'task2', 'task3'];

  tasks.forEach(async (task) => {
    await channel.sendToQueue('tasks', Buffer.from(task));
  });

  setTimeout(() => {
    connection.close();
  }, 500);
}

produceTasks();
