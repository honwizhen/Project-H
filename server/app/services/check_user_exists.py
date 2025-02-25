from sqlalchemy.orm import Session
from app.models.users import Users

def check_if_already_exists(db: Session, username: str):
    user = db.query(Users).filter(Users.username == username).first()
    return True if user else False