import os
from datetime import datetime, timedelta, timezone
from dotenv import load_dotenv
from jose import jwt
from typing import Optional

load_dotenv()

JWT_SECRET_KEY=os.getenv('JWT_SECRET_KEY')
JWT_ALGORITHM=os.getenv('JWT_ALGORITHM')
JWT_ACCESS_TOKEN_EXPIRE_MINUTES=os.getenv('JWT_ACCESS_TOKEN_EXPIRE_MINUTES')

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()

    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=JWT_ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode.update({'exp': expire})
    encoded_jwt = jwt.encode(to_encode, JWT_SECRET_KEY, JWT_ALGORITHM)
    return encoded_jwt