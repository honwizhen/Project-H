from fastapi import FastAPI
from app.controllers import users_controller, tasks_controller, auth_controller

app = FastAPI()

app.include_router(users_controller.router, prefix="/users", tags=["Users"])
app.include_router(tasks_controller.router, prefix="/tasks", tags=["Tasks"])
app.include_router(auth_controller.router, prefix="/auth", tags=["Auth"])

@app.get("/")
def root():
    return {"message": "Hippero Backend is Running!"}
