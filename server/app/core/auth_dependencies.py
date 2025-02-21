from fastapi import Depends, HTTPException, status
from jose import jwt, JWTError
from app.core.auth import oauth2_scheme
from app.core.database import get_db
from app.models.users import Users
from sqlalchemy.orm import Session 
from dotenv import load_dotenv
import os

load_dotenv()

JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY')
JWT_ALGORITHM = os.getenv('JWT_ALGORITHM')

def get_current_user(db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authentication credentials",
    )

    try:
        # Decode and verify token
        payload = jwt.decode(token, JWT_SECRET_KEY, algorithms=[JWT_ALGORITHM])
        user_id: str = payload.get("sub")
        if user_id is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    # Query the user from the database
    user = db.query(Users).filter(Users.id == int(user_id)).first()
    if user is None:
        raise credentials_exception

    return user