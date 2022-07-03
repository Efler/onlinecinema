FROM python:3.9

WORKDIR .
COPY ./backend ./backend
COPY req.txt .
COPY .env .
RUN pip install --no-cache-dir --upgrade -r ./req.txt
ENV PYTHONPATH "${PYTHONPATH}:/backend"
CMD ["python3", "./backend/main.py"]
