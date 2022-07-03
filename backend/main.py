from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"data": [
        {'Фильм1': []},
        {'Фильм2': []}
    ]}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}
