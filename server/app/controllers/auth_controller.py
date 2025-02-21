from app.core.database import get_db
from app.models.users import Users
from fastapi import Depends, APIRouter, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm  # Extracts/parses username/password from req body automatically
from sqlalchemy.orm import Session
from app.core.security import create_access_token
from app.core.hash import verify_password
from datetime import timedelta

router = APIRouter()

@router.post('/token')
def login(db: Session = Depends(get_db), form_data: OAuth2PasswordRequestForm = Depends()):
    user = db.query(Users).filter(Users.username == form_data.username).first()

    if not user or not verify_password(form_data.password, user.password_hash):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Incorrect username or password.')
    
    access_token_expires = timedelta(minutes=30)
    
    access_token = create_access_token(data={'sub': str(user.id)}, expires_delta=access_token_expires)
    return {'access_token': access_token, 'token_type': 'bearer'}