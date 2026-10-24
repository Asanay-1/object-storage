package main

import (
	"fmt"
	"log"

	"example.com/greetings"
)

func main() {

	log.SetPrefix("greetings: ")
	log.SetFlags(0)

	names := []string{"mibombo", "hi", "yo"}
	messages, err := greetings.Hellos(names)

	// Get a greeting message and print it.
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(messages)
}
