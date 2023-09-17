# Date Converter API

This is a simple Node.js Express API that converts date inputs to both Unix timestamps and UTC date strings. It can handle input in either Unix timestamp format (as a number) or UTC date string format.

## How to Use

1. Make a GET request to the `/api/:id` endpoint, where `:id` is the date input you want to convert. The API will determine if the input is in Unix timestamp or UTC date string format.

2. The API will respond with a JSON object containing both the Unix timestamp and the UTC date string in the following format:

   ```json
   {
     "unix": 1451001600000,
     "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
   }
   If the input is invalid, the API will respond with an error message.
   ```

## Usage Examples

- To convert a Unix timestamp to UTC date string:

GET /api/1451001600000
Response:

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

- To convert a UTC date string to a Unix timestamp:

GET /api/Fri, 25 Dec 2015 00:00:00 GMT

Response:

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

## Deployment

This API is currently deployed and can be accessed via the following link:

https://fcc-timestamp-microservice-7kbw.onrender.com/

## Author

Abdelrahman Mohammed
