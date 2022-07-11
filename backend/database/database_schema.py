from sqlalchemy import Column, Integer, String

from backend.database.alchemy import Base


class DbFilm(Base):
    __tablename__ = 'film_table'
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    magnet_url = Column(String)
    pic_url = Column(String)


