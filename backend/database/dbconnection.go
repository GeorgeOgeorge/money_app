package database

import (
	"database/sql"
	"log"
	"time"
)

func NewDbConnection() *sql.DB {
	dbconnection, err := sql.Open("pgx", "postgres://postgres:postgres@localhost:5432/money_app?sslmode=disable")
	if err != nil {
		log.Fatalf("Unable to connect to database because %s", err)
	}

	if err = dbconnection.Ping(); err != nil {
		log.Fatalf("Cannot ping database because %s", err)
	}

	dbconnection.SetMaxOpenConns(15)
	dbconnection.SetMaxIdleConns(5)
	dbconnection.SetConnMaxLifetime(5 * time.Minute)
	dbconnection.SetConnMaxIdleTime(5 * time.Minute)

	return dbconnection
}
