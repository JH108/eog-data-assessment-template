/**
 * We have all of our users stored locally in a csv file
 * Now we need to take those users that have been painstakingly gathered
 * and put them into a service where multiple applications can take advantage
 * of them.
 * The filesize could be quite large (in theory) so we will want to utilize
 * streams for processing the data and sending it off to our new postgres database.
 *
 * We will also need a way to know once we have processed all of the data.
 *
 * Each line of data represents one user following the same schema we used
 * earlier when creating our table.
 */
