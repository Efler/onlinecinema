from sqlalchemy import Column, Integer, String

from backend.database.alchemy import Base


class DbFilm(Base):
    __tablename__ = 'film_table'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    pic_url = Column(String)


