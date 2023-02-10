const trakt = "https://api.trakt.tv"; //base URL for any Trakt API requests

/*
 * Functions for Trakt API requests.
 */
async function getTrendingShows() {
    let requrl = `${trakt}/shows/trending?limit=15`;
    let response = await fetch(
        requrl,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "trakt-api-version": "2",
                "trakt-api-key": process.env.TRAKT_CLIENT_ID
            }
        }
    );
    return await response.json();
}
async function getPopularShows() {
    // it fetching all the value so no any param needed
    let requrl = `${trakt}/shows/popular?limit=15`;
    // https://imdb.com/title/<imdb_id>
    let response = await fetch(
        requrl,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "trakt-api-version": "2",
                "trakt-api-key": process.env.TRAKT_CLIENT_ID
            }
        }
    );
    return await response.json();
}
module.exports = {
    getTrendingShows,
    getPopularShows
}
