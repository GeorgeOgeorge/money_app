package user

import (
	"context"
	"fmt"
	"money_app/database"
)

const (
	CreateUserQuery = `
		INSERT INTO "user" (username, "name", email, "password", phone)
		VALUES ($1, $2, $3, $4, $5)
		RETURNING id, username, "name", email, phone;
	`
	SelectUserQuery = `SELECT id, username, "name", email, phone FROM "user" %s ;`
)

func CreateUser(userData *CreateUserSchema) (User, error) {
	service := database.NewDbConnection()

	transaction, beginError := service.BeginTx(context.TODO(), nil)
	if beginError != nil {
		return User{}, beginError
	}

	var newUser User
	insertError := transaction.QueryRow(
		CreateUserQuery,
		userData.Username, userData.Name, userData.Email, userData.Password, userData.Phone,
	).Scan(&newUser.Id, &newUser.Username, &newUser.Name, &newUser.Email, &newUser.Phone)

	if insertError != nil {
		rollbackError := transaction.Rollback()
		if rollbackError != nil {
			return User{}, rollbackError
		}

		return User{}, insertError
	}

	commitError := transaction.Commit()
	if commitError != nil {
		return User{}, commitError
	}

	return newUser, nil
}

func FetchUsers(userFilter *UserFilterSchema) ([]User, error) {
	service := database.NewDbConnection()

	rows, fetchError := service.QueryContext(context.TODO(), fmt.Sprintf(SelectUserQuery, userFilter.asQueryFilters()))
	if fetchError != nil {
		return nil, fetchError
	}

	var users []User
	for rows.Next() {
		var userRow User

		errorScanning := rows.Scan(&userRow.Id, &userRow.Username, &userRow.Name, &userRow.Email, &userRow.Phone)
		if errorScanning != nil {
			return nil, errorScanning
		}

		users = append(users, userRow)
	}

	return users, nil
}
