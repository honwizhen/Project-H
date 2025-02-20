from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Users, Tasks

DATABASE_URL = "mysql+pymysql://root:rootpassword@localhost/hippero_db"     # Change on prod

engine = create_engine(DATABASE_URL, echo=True)

SessionLocal = sessionmaker(bind=engine)    # Sessions for ORM operations

# For testing db connectivity
if 0:
    connection = engine.connect()   # Connection for raw SQL operations
    print("\nDatabase connected successfully!")
    db = SessionLocal()
    user = db.query(Users).first()
    print(user)
    db.close()
    connection.close()