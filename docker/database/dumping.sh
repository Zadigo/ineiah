#!/bin/bash

set -e

if ! docker info > /dev/null 2>&1; then
  echo "This script uses docker, and the database isn't running - please start docker and try again!"
  exit 1
fi

export DB_NAME=""
export DB_HOST="db" 
export DB_PORT=5432
export DB_USER=""
export DB_PASWORD=""
export PGADMIN_PASSWORD=""

BACKUP_DIR="db_backups"
LOG_FILE_PATH="$BACKUP_DIR/backup.log"

mkdir -p "$BACKUP_DIR"

# Name of the backup file to use
backup_file="$BACKUP_DIR//$(date +'%Y%m%d_%H%M%S')_${db_name}.sql"
# Executes the function to backup the database
docker-compose exec $DB_HOST pg_dump -U "$DB_USER" "$DB_NAME" > "$backup_file"

log() {
    echo "$(date +'%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE_PATH"
}

if [ $? -eq 0 ]; then
    log "Backup of database '$DB_NAME' was successful! Backup saved to '$BACKUP_DIR'"
else
    log "Backup of database '$DB_NAME' failed!"
    exit 1
fi
