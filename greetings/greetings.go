package greetings

import (
	"errors"
	"fmt"
	"math/rand"
)

// Hello returns a greeting for the named person.
func Hello(name string) (string, error) {
	if name == "" {
		return "", errors.New("empty string")
	}

	// Return a greeting that embeds the name in a message.
	message := fmt.Sprintf(randomFormat(), name)
	return message, nil
}

// randomForamt: return one of a set of greeting message
func randomFormat() string {
	// slice of message formats
	formats := []string{
		"Hi!, %v. welcome",
		"great to see you, %v!",
		"yo %v!",
	}
	// return a randomly selected message
	return formats[rand.Intn(len(formats))]
}
