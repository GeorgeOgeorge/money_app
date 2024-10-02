package config

import (
	"fmt"
	"log"
	"strconv"

	"github.com/joho/godotenv"
)

var Config ServerConfig = InitServerConfig()

type ServerConfig struct {
	serverHost string
	serverPort int

	databaseUser     string
	databaseName     string
	databasePassword string
	databaseHost     string
	databasePort     int
	databaseURI      string
}

func InitServerConfig() ServerConfig {
	envValues, loadError := godotenv.Read("../.env")
	if loadError != nil {
		log.Fatal("Error loading .env file")
	}

	databaseUser := envValues["DATABASE_USER"]
	databasePassword := envValues["DATABASE_PASSWORD"]
	databaseHost := envValues["DATABASE_HOST"]
	databaseName := envValues["DATABASE_NAME"]
	databasePort := strToInt(envValues["DATABASE_PORT"], 5432)

	databaseURI := fmt.Sprintf(
		"postgres://%s:%s@%s:%d/%s?sslmode=disable",
		databaseUser, databasePassword, databaseHost, databasePort, databaseName,
	)

	config := ServerConfig{
		serverHost:       envValues["SERVER_HOST"],
		serverPort:       strToInt(envValues["SERVER_PORT"], 8080),
		databaseUser:     databaseUser,
		databaseName:     databaseName,
		databasePassword: databasePassword,
		databaseHost:     databaseHost,
		databasePort:     databasePort,
		databaseURI:      databaseURI,
	}

	return config
}

func strToInt(value string, defaultValue int) int {
	parsedValue, parseError := strconv.Atoi(value)
	if parseError != nil {
		log.Fatal("Error while parsing value to integer value: ", parseError)
		return defaultValue
	}

	return parsedValue
}
