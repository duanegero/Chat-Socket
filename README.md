# Chat Socket.IO Server

This is a real-time chat server built using Socket.IO, allowing users to connect and interact with each other through messages. The server facilitates a two-way communication channel, enabling users to join the chat, send messages, and receive messages in real-time.

- [Installation](#installation)
- [Docker](#docker)
- [Usage](#usage)
- [Frontend Repository](#frontend)
- [Backend Repository](#backend)

## Installation

1. Clone Repository:<br>
   `git clone https://github.com/duanegero/Chat-Socket.git`
2. Navigate to the Project Directory
3. Proceed to Docker for next steps.

## Docker

1. **CREATE DOCKER NETWORK!** - Before proceeding with the containers, you need to create a Docker network. This network allows the containers to communicate with each other. Run the following command to create the network:  
   `docker network create Chat-Network`
2. **Verify the Network Creation** - After creating the network, you can verify that it exists by listing the available networks with this command:
   `docker network ls`
3. **Build and Start the Docker Container** - To build the Docker container and start the services defined in the docker-compose.yml file, run the following command:
   `docker-compose up --build`
4. **Verify the Container Creation** - After building and running the container, you can verify that it is up and running with the following command:
   `docker ps`
5. **Shut Down the Docker Containers** - Once you're done with using the containers, you can stop and remove the containers with the following command:
   `docker-compose down`

## Usage

Once the Docker network and container are up and running, you can interact with others connected to the socket via chat in the frontend.

## Frontend

The Frontend React + Vite app can be found here

https://github.com/duanegero/Chat-App.git

For more information, please refer to the Frontend App Documentation for details on navigating the user interface, interacting with chat features, and managing user accounts.

## Backend

The Backend RESTful API and Database can be found here

https://github.com/duanegero/Chat-API.git

For more information, please refer to the API Documentation for details on the available endpoints and how to interact with the API.
