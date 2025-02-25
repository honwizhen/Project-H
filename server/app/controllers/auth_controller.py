from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from app.services.auth_service import authenticate_user
from app.services.register_service import insert_user_to_db
from app.services.check_user_exists import check_if_already_exists
from app.services.delete_account_service import delete_account
from app.core.database import get_db
from app.core.jwt_handler import create_access_token
from app.core.auth_dependencies import get_current_user
from app.models.users import Users

router = APIRouter()

@router.post('/login')
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid credentials')
    
    access_token = create_access_token(data={'sub': str(user.id)})
    return {'access_token': access_token, 'token_type': 'bearer'}


@router.post('/register')
def register(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    username, unhashed_password = form_data.username, form_data.password
    
    try:
        user = check_if_already_exists(db, username)
        print(user)
        if not user:
            insert_user_to_db(db, username, unhashed_password)
        else:
            return {'message': 'Username already taken.'}
        return {'message': 'Successfully added user to the database.'}
    except:
        return {'message': 'Something went wrong inserting the user into the database.'}
    

@router.delete('/delete')
def delete_account_route(db: Session = Depends(get_db), current_user: Users = Depends(get_current_user)):
    success = delete_account(db, current_user)
    
    if success:
        return {'message': 'Account deleted successfully.'}
    else:
        return {'message': 'User not found or could not be deleted.'}
