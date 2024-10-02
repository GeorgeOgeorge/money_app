package user

import (
	"fmt"
	"strings"
)

type CreateUserSchema struct {
	Username string `json:"username" binding:"required"`
	Name     string `json:"name" binding:"required"`
	Password string `json:"password" binding:"required"`
	Email    string `json:"email" binding:"email"`
	Phone    string `json:"phone" binding:"required"`
}

type User struct {
	Id       int    `json:"id"`
	Username string `json:"username" binding:"required"`
	Name     string `json:"name" binding:"required"`
	Email    string `json:"email" binding:"email"`
	Phone    string `json:"phone" binding:"required"`
}

type UserFilterSchema struct {
	Id       []int    `json:"id"`
	Username []string `json:"username"`
	Name     []string `json:"name"`
	Email    []string `json:"email"`
	Phone    []string `json:"phone"`
}

func (userFilter *UserFilterSchema) asQueryFilters() string {
	var filterClauses []string

	addFilterClause := func(field string, values []string) {
		if len(values) > 0 {
			filterClauses = append(
				filterClauses,
				fmt.Sprintf(`"user".%s IN ('%s')`, field, strings.Join(values, "', '")),
			)
		}
	}

	addFilterClause("id", itemsToString(userFilter.Id))
	addFilterClause("username", userFilter.Username)
	addFilterClause("name", userFilter.Name)
	addFilterClause("email", userFilter.Email)
	addFilterClause("phone", userFilter.Phone)

	if len(filterClauses) == 0 {
		return ""
	}

	return "WHERE " + strings.Join(filterClauses, " AND ")
}

func itemsToString(items []int) []string {
	var finalArray []string

	for _, item := range items {
		finalArray = append(finalArray, fmt.Sprint(item))
	}

	return finalArray
}
