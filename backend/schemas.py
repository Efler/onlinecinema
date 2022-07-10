from pydantic import BaseModel


class Film(BaseModel):
    id: int
    title: str
    description: str
    magnet_url: str
    star: int = 0

    class Config:
        orm_mode = True


class DisplayFilms(BaseModel):
    films: list[Film] = []

    class Config:
        orm_mode = True
