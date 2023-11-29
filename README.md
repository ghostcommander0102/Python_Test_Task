# Python Test Task

Expression calculator

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

## Docker

### Installing

A step-by-step series of examples that tell you how to get a development environment running.

#### Setting up the Backend

1. Navigate to the backend directory:
`cd calculator_backend`

2. Run the Docker container: `docker-compose up --build`


#### Setting up the Frontend

1. Navigate to the frontend directory: `cd calculator_frontend`

2. Run the Docker container: `docker-compose up --build`


## Usage

### Backend
1. The backend handles arithmetic calculations like addition, subtraction, multiplication, division, and potentially more complex operations.
2. It processes calculation requests sent from the frontend, performs the calculations server-side, and returns the results.
3. It includes logic to return additional data based on the calculation results, such as returning a color ('red' or 'green') based on the parity of the result.

### Frontend
1. The frontend provides a user interface for the calculator, where users can input expressions for calculation.
2. It communicates with the backend via AJAX calls, sending calculation requests and displaying results returned by the backend.
3. The UI is capable of dynamically adjusting to allow multiple operands and operators, and it displays the results with color coding received from the backend.

## Authors

* **Olaf Pawlowski** - *Initial work* - [ghostcommander0102](https://github.com/ghostcommander0102)


## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc


