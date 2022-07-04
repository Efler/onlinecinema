import os

from sqlalchemy.orm import Session
from fastapi.responses import FileResponse
from fastapi.exception_handlers import HTTPException

from backend.database.database_schema import DbFilm


def get_all_films(db: Session):
    films = db.query(DbFilm).all()
    return {
        'films': films
    }


def get_image(film_id: int, db: Session):
    film = db.query(DbFilm).filter(DbFilm.id == film_id).first()
    if not film:
        raise HTTPException(status_code=404)
    pic_url = film.pic_url
    header = {
        "Access-Control-Allow-Origin": "*"
    }
    return FileResponse(os.path.abspath(f"/backend/{pic_url}"), headers=header)
