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
func Hellos(names []string) (map[string]string, error) {
	// a map to associate names with messages
	messages := make(map[string]string)
	// loop through the received slice of names, calling Hello function to get message for each name
	for _, name := range names {
		message, err := Hello(name)
		if err != nil {
			return nil, err
		}
		// in the map associate the retrieved message with the name
		messages[name] = message
	}
	return messages, nil
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
