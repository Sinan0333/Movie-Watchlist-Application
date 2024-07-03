# Movie Watchlist Application

## Project Overview

The Movie Watchlist application is a web-based tool that allows users to manage a list of movies they want to watch. Users can add, edit, and delete movies from their watchlist, mark movies as watched or unwatched, and rate and review movies. State management is handled using Redux to ensure efficient and predictable state updates.

## Key Features

1. **Add Movies**
    - Users can add movies to their watchlist by providing details such as the movie title, description, release year, and genre.
    - Each movie has a unique identifier.
2. **Edit Movies**
    - Users can edit the details of movies already in their watchlist.
3. **Delete Movies**
    - Users can delete movies from their watchlist.
4. **Mark Movies as Watched/Unwatched**
    - Users can toggle the status of a movie between watched and unwatched.
5. **Rate and Review Movies**
    - Users can rate movies on a scale of 1 to 5 stars.
    - Users can provide a text review for each movie.
6. **State Management with Redux**
    - All state changes (adding, editing, deleting movies, marking as watched/unwatched, rating, and reviewing) are managed using Redux.

## Project Setup

### Prerequisites

- Node.js (>=14.0.0)
- npm (>=6.0.0) or yarn (>=1.22.0)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/movie-watchlist.git
    cd movie-watchlist
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

To start the application locally, run:
```bash
npm start
# or
yarn start
