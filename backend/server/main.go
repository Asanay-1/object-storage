package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type Response struct {
	Message string `json:"message"`
	Status  string `json:"status"`
}

func main() {
	// create a custom ServerMux
	mux := http.NewServeMux()

	// define endpoint
	mux.HandleFunc("GET /", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			http.NotFound(w, r)
			return
		}
		fmt.Printf("request received\n")
		fmt.Fprintf(w, "server running")
		fmt.Printf("respond sent\n")
	})
	mux.HandleFunc("GET /api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-type", "application/json")
		res := Response{
			Message: "server is good",
			Status:  "OK",
		}
		fmt.Printf("request received\n")
		json.NewEncoder(w).Encode(res)
		fmt.Printf("Health status sent\n")
	})
	// configure http server
	port := ":8080"
	server := &http.Server{
		Addr:    port,
		Handler: mux,
	}
	// start listen
	log.Printf("server listening on http://localhost%s\n", port)
	if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatal("server failed to start!")
	}

}
