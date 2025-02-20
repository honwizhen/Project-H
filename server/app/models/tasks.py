from sqlalchemy import Column, Integer, String, Text, ForeignKey, TIMESTAMP, Boolean, JSON, Enum
from sqlalchemy.orm import relationship
from datetime import datetime, timezone
import enum

from app.models.base import Base


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