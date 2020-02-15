package main

import (
	"fmt"
	"log"
	"sync"

	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"github.com/joho/godotenv"
	"github.com/wufe/core/database"
	"github.com/wufe/core/services"
)

func main() {

	var wg sync.WaitGroup

	err := godotenv.Load()
	if err != nil {
		fmt.Println(err)
		log.Fatal("Error loading .env file")
	}

	db := database.ConnectToDatabase()
	defer db.Close()

	wg.Add(1)
	enqueueServer := services.NewEnqueueServer(db)
	/*server := */ services.StartGRPCServer(enqueueServer)

	wg.Wait()
}
