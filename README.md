# Flask-React-Boilerplate
Starter code for building a web-app with a Python/Flask backend and a TypeScript/React frontend

## Project Setup

To run the project, you will need to open two separate terminals.
- In the first terminal, run `make backend`. This will install all the Python packages in a virtual environment and run the server on port 5000.
- In the second terminal, run `make frontend`. This will install all the TypeScript packages and run the application on port 3000. Open http://localhost:3000 to view the result in your browser.

### Other Make Commands
| Command                  | Description                                                   |
| -----------------------  | ------------------------------------------------------------- |
| `make install_frontend`  | Install all the frontend TypeScript packages                  |
| `make start_frontend`    | Start the frontend without installing packages                |
| `make install_backend`   | Setup virtual environment and install backend Python packages |
| `make start_backend`     | Start the server without installing packages                  |
