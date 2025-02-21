from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.users import Users
from app.core.auth_dependencies import get_current_user

router = APIRouter()

@router.get("/")
def get_users(db: Session = Depends(get_db)):
    result = db.query(Users).all()
    return {"users": result}

@router.get("/me")
def get_me(
    db: Session = Depends(get_db), current_user: Users = Depends(get_current_user)):
    return {"user": {
        "id": current_user.id,
        "username": current_user.username,
        "xp": current_user.xp,
        "level": current_user.level,
        "currency": current_user.currency
    }}