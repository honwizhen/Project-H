from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.models.base import Base


class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), nullable=False, unique=True)
    password_hash = Column(String(255), nullable=False)
    xp = Column(Integer, default=0)
    level = Column(Integer, default=0)
    currency = Column(Integer, default=0)

    tasks = relationship('Tasks', back_populates='user', cascade='all, delete')


from app.models.tasks import Tasks