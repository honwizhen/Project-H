from sqlalchemy.orm import Session
from app.models.users import Users
from app.core.hash import verify_password

def authenticate_user(db: Session, username: str, password: str):
    user = db.query(Users).filter(Users.username == username).first()
    if not user or not verify_password(password, user.password_hash):
        return None
    return user
