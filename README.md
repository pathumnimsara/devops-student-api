# Student REST API

A beginner-friendly **DevOps portfolio project** built with Node.js, Express, MongoDB, Docker, Docker Hub, and GitHub Actions.

The project demonstrates a complete CI/CD workflow from source code to a containerized application.

## 🚀 Project Overview

This project provides a simple REST API for managing student data.

The application supports:

* View all students
* Add new students
* API health check
* MongoDB data storage
* Docker containerization
* Docker Compose
* Automated CI/CD with GitHub Actions
* Docker Hub image publishing

## 🛠️ Technologies Used

| Technology     | Purpose                      |
| -------------- | ---------------------------- |
| Node.js        | Runtime environment          |
| Express.js     | REST API framework           |
| MongoDB        | Database                     |
| Docker         | Application containerization |
| Docker Compose | Multi-container management   |
| Docker Hub     | Docker image registry        |
| GitHub Actions | CI/CD automation             |
| Git & GitHub   | Version control              |

## 📁 Project Structure

```text
devops-student-api/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── compose.yaml
├── compose.aws.yaml
└── README.md
```

## 🔌 API Endpoints

### Health Check

```http
GET /health
```

Example response:

```json
{"message":"Student API is running!"}
```

### Get Students

```http
GET /students
```

Example response:

```json
[
  {
    "_id": "...",
    "id": 1,
    "name": "Pathum",
    "course": "IT"
  }
]
```

### Add Student

```http
POST /students
```

Request body:

```json
{
  "id": 1,
  "name": "Pathum",
  "course": "IT"
}
```

Example response:

```json
{
  "message": "Student added successfully",
  "id": "..."
}
```

## 🐳 Run with Docker Compose

Clone the repository:

```bash
git clone https://github.com/pathumnimsara/devops-student-api.git
```

Go to the project directory:

```bash
cd devops-student-api
```

Start the application:

```bash
docker compose up -d --build
```

Check running containers:

```bash
docker compose ps
```

The API will be available at:

```text
http://localhost:3002
```

Health check:

```text
http://localhost:3002/health
```

Students:

```text
http://localhost:3002/students
```

Stop the containers:

```bash
docker compose down
```

## 🔄 CI/CD Pipeline

Every push to the `main` branch triggers GitHub Actions.

```text
Developer
    ↓
Git Push
    ↓
GitHub
    ↓
GitHub Actions
    ↓
Install Dependencies
    ↓
Build Docker Image
    ↓
Push Image to Docker Hub
```

Docker Hub image:

```text
pathumnimsara/student-api:latest
```

## 🔐 Environment Configuration

The MongoDB connection uses an environment variable:

```text
MONGO_URL
```

Local Docker Compose configuration:

```text
mongodb://mongodb:27017
```

This allows the database configuration to be changed without modifying the application code.

## 🗄️ Architecture

```text
                 GitHub
                    │
                    ▼
            GitHub Actions
                    │
                    ▼
              Docker Build
                    │
                    ▼
               Docker Hub
                    │
                    ▼
             Docker Compose
                /       \
               /         \
              ▼           ▼
       Student API     MongoDB
              │
              ▼
        REST Endpoints
```

## 🎯 DevOps Concepts Demonstrated

This project demonstrates practical knowledge of:

* Version control with Git
* GitHub repository management
* Continuous Integration
* Continuous Delivery
* Docker image creation
* Docker containers
* Docker Compose
* Container networking
* MongoDB containerization
* Environment variables
* Docker Hub
* GitHub Actions
* API health monitoring

## 💰 Cloud Deployment

AWS deployment was considered as the next stage.

However, the project was intentionally kept **zero-cost** and no AWS resources were created because the available AWS account did not provide suitable free usage.

The project is therefore fully functional locally using Docker and Docker Compose.

## 👨‍💻 Author

**Pathum Nimesh Nimsara**

GitHub:
https://github.com/pathumnimsara

Docker Hub:
https://hub.docker.com/u/pathumnimsara
