from app.models.users import Users
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.hash import verify_password

def delete_account(db: Session, current_user: Users):
    user = db.query(Users).filter(Users.id == current_user.id).first()
    
    if user:
        db.delete(user)
        db.commit()
        return True
    return False
