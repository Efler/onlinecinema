import uvicorn
from fastapi import FastAPI, Depends, Response
from sqlalchemy.orm import Session

from database.alchemy import get_db
from database.db_actions import get_all_films, get_image
from tools.config_parser import SERVICE_PORT, SERVICE_HOST
from schemas import DisplayFilms, Film
from fastapi.responses import FileResponse

app = FastAPI()


@app.get("/", response_model=DisplayFilms)
async def root(response: Response, db: Session = Depends(get_db)):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return get_all_films(db)


@app.get("/get_image/{film_id}", response_class=FileResponse)
async def say_hello(film_id: int, db: Session = Depends(get_db)):
    return get_image(film_id, db)


if __name__ == '__main__':
    uvicorn.run(app, host=SERVICE_HOST, port=SERVICE_PORT, log_level="info")
