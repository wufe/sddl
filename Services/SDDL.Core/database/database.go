package database

import "github.com/jinzhu/gorm"

import "os"

import "github.com/wufe/core/models"

func ConnectToDatabase() *gorm.DB {
	dbPath := os.Getenv("DB_PATH")
	db, err := gorm.Open("sqlite3", dbPath)
	db.AutoMigrate(&models.Download{})
	if err != nil {
		panic(err)
	}
	return db
}
