# Purpose
  * This defines the rules for creating and updating migrations/seeds within this project

# Convention
  * Table names will all be pluralized
  * All tables will have a primary key called `id` for row reference and as a default for foreign key usage (Exception on users table currently)
  * Foreign keys naming will be `<referenceTableName>_<referenceTableColumn>`

# Rules
  1. All migration/seed files must be created with the CLI provided
  2. Any modification to these files must regard all tests so that the API does not break at any point
  3. All foreign keys will have `.onDelete('CASCADE')`

# Commands
  * `yarn migration-create <migrationName>` from the root project directory will create a new migration through the Knex.js CLI
  * `yarn seed-create <seedName>` from the root project directory will create a new seed file through a Bash script to order them based on date created