## Users Table
| Field         | Type         | Null | Key | Default | Extra          |
|---------------|--------------|------|-----|---------|----------------|
| id            | int          | NO   | PRI | NULL    | auto_increment |
| username      | varchar(50)  | NO   |     | NULL    |                |
| password_hash | varchar(255) | NO   |     | NULL    |                |
| xp            | int          | YES  |     | 0       |                |
| level         | int          | YES  |     | 0       |                |
| currency      | int          | YES  |     | 0       |                |

## Tasks Table
| Field              | Type                                      | Null | Key | Default           | Extra                                         |
|--------------------|-------------------------------------------|------|-----|-------------------|-----------------------------------------------|
| id                 | int                                       | NO   | PRI | NULL              | auto_increment                                |
| user_id            | int                                       | YES  | MUL | NULL              |                                               |
| title              | varchar(50)                               | NO   |     | NULL              |                                               |
| description        | text                                      | YES  |     | NULL              |                                               |
| priority           | enum('Low','Medium','High')               | YES  |     | NULL              |                                               |
| difficulty         | enum('Easy','Normal','Difficult')         | YES  |     | NULL              |                                               |
| status             | enum('Pending','In Progress','Completed') | YES  |     | NULL              |                                               |
| due_date           | datetime                                  | YES  |     | NULL              |                                               |
| recurring_interval | enum('Daily','Weekly','Monthly')          | YES  |     | NULL              |                                               |
| created_at         | timestamp                                 | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED                             |
| updated_at         | timestamp                                 | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |
