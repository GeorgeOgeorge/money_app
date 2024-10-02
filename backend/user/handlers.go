package user

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func SetupUserRoutes(server *gin.Engine) {
	groupRouter := server.Group("/user")

	groupRouter.POST("", handlePostUser)
	groupRouter.GET("", handleGetUsers)
}

// handles HTTP POST requests to create a new user.
// It binds the JSON request body to the CreateUserSchema struct, creates a new user,
// and returns the result.
//
// Parameters:
// - request: The context of the request provided by Gin.
//
// Responses:
// - 400 Bad Request: If there is an error binding the request data.
// - 500 Internal Server Error: If there is an error creating the new user.
// - 200 OK: If the user is successfully created, returns the new user's data.
func handlePostUser(request *gin.Context) {
	var requestData CreateUserSchema

	if parseError := request.ShouldBindJSON(&requestData); parseError != nil {
		request.JSON(http.StatusBadRequest, gin.H{"error": parseError.Error()})
		return
	}

	newUser, createError := CreateUser(&requestData)
	if createError != nil {
		request.JSON(http.StatusInternalServerError, gin.H{"error": createError.Error()})
		return
	}

	request.JSON(http.StatusOK, newUser)
}

func handleGetUsers(request *gin.Context) {
	var requestData UserFilterSchema

	if parseError := request.ShouldBindJSON(&requestData); parseError != nil {
		request.JSON(http.StatusBadRequest, gin.H{"error": parseError.Error()})
		return
	}

	users, fetchError := FetchUsers(&requestData)
	if fetchError != nil {
		request.JSON(http.StatusInternalServerError, gin.H{"error": fetchError.Error()})
		return
	}

	request.JSON(http.StatusOK, users)
}
