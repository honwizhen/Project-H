from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.users import Users

router = APIRouter()

@router.get("/")
def get_users(db: Session = Depends(get_db)):
    result = db.query(Users).all()
    return {"users": result}

# Other routes here
