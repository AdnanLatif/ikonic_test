# Distributed Task Processing System

This Node.js application simulates a distributed task processing setup using RabbitMQ for message queuing. The setup consists of a producer, multiple worker nodes, and a supervisor. Redis is used for caching results to optimize and avoid redundant processing for similar tasks.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- RabbitMQ
- Redis

## Installation

1. Clone the repository:
2. `npm install`

- Open three terminals.
- In the first terminal, run `node src/producer.js` to start the Producer.
- In the second terminal, run `node src/worker.js` to start the Worker Node.
- In the third terminal, run `node src/supervisor.js` to start the Supervisor.

This README.md file provides comprehensive instructions for setting up and running the distributed task processing system. Feel free to modify it further based on your specific project requirements.
