PYTHON3_EXE := python3

install_frontend::
	(cd ./client && npm install)

start_frontend::
	(cd ./client && npm start)

frontend::
	$(MAKE) install_frontend && $(MAKE) start_frontend

install_backend::
	(cd ./server \
	&& $(PYTHON3_EXE) -m venv venv \
	&& . venv/bin/activate \
	&& $(PYTHON3_EXE) -m pip install --no-deps --no-cache-dir -r requirements.txt)

run_backend::
	(cd ./server && $(PYTHON3_EXE) app.py)

backend::
	$(MAKE) install_backend && $(MAKE) run_backend
