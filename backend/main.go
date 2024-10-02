package main

import (
	"money_app/user"

	"github.com/gin-gonic/gin"
	_ "github.com/jackc/pgx/v4/stdlib"
)

func homeRoute(serverContext *gin.Context) {
	serverContext.JSON(200, gin.H{"message": "Hello, World!"})
}

func NewServer() *gin.Engine {
	server := gin.Default()

	server.GET("/", homeRoute)
	user.SetupUserRoutes(server)
	return server
}

func main() {
	server := NewServer()
	server.Run("0.0.0.0:8080")
}
