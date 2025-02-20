from sqlalchemy import Column, Integer, String, Text, ForeignKey, TIMESTAMP, Boolean, JSON, Enum
from sqlalchemy.orm import relationship, declarative_base
from datetime import datetime, timezone
import enum

Base = declarative_base()

class Priority(enum.Enum):
    Low = 'Low'
    Medium = 'Medium'
    High = 'High'

class Difficulty(enum.Enum):
    Easy = 'Easy'
    Normal = 'Normal'
    Difficult = 'Difficult'

class Status(enum.Enum):
    Pending = 'Pending'
    In_Progress = 'In Progress'
    Completed = 'Completed'

class RecurringInterval(enum.Enum):
    Daily = 'Daily'
    Weekly = 'Weekly'
    Monthly = 'Monthly'

class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), nullable=False, unique=True)
    password_hash = Column(String(255), nullable=False)
    xp = Column(Integer, default=0)
    level = Column(Integer, default=0)
    currency = Column(Integer, default=0)

    tasks = relationship('Tasks', back_populates='user', cascade='all, delete')

class Tasks(Base):
    __tablename__='tasks'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), index=True, nullable=False)
    title = Column(String(50), nullable=False)
    description = Column(Text)
    priority = Column(Enum(Priority))
    difficulty = Column(Enum(Difficulty))
    status = Column(Enum(Status))
    due_date = Column(TIMESTAMP)
    recurring_interval = Column(Enum(RecurringInterval))
    created_at = Column(TIMESTAMP, default=datetime.now(timezone.utc))
    updated_at = Column(TIMESTAMP, default=datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    user = relationship('Users', back_populates='tasks')