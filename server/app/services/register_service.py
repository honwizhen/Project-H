from sqlalchemy.orm import Session
from app.models.users import Users
from app.core.hash import hash_password

def insert_user_to_db(db: Session, username: str, unhashed_password: str):
    new_user = Users(username=username, password_hash=hash_password(unhashed_password))
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user
