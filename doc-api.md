# user

List of available endpoints:
- `post /register`
- `post /user/:userId`
- `get /user/:userId`

### POST /register

Request:

- data:
```json
{
    "name": "string",
    "username": "string",
    "password": "string"
}
```

Response:
- status: 201
- body:

```json
{
    "name": "string",
    "username": "string",
    "password": "string",
    "createdAt": "date",
    "updatedAt": "date",
}
```

Response:
- status: 400 (Bad request)
- body:
```json
{
    "message": "Validation error: password at least 6 characters"
}
```
- status: 400 (Bad request)
- body:
```json
{
  "message": "Username already exists"
}
```
- status: 400 (Bad request)
- body:
```json
{
    "message": "Validation error: Field must be not empty."
}
```

- status: 500 (Internal service error)

### POST /user/:userId

Request:
- params: userId (integer)
- data:
```json
{
    "DishId": "integer",
    "notes": "string",
    "count":"integer"
}
```

Response:
- status: 201
- body:
```json
{
    "DishId": "integer",
    "notes": "string",
    "count":"integer",
    "createdAt": "date",
    "updatedAt": "date"
}
```

- status: 404 (not found)
- body:
```json
{
    "message": "User not found"
}
```

- status: 500 (Internal service error)

### POST /user/:userId

Request:
- params: userId (integer)

Response:
- status: 201
- body:
```json
{
"name": "string",
"username": "string",
"createdAt": "date",
"updatedAt": "date",
"dishes": "array"
}

```

- status: 404 (not found)
- body:
```json
{
    "message": "User not found"
}
```
- status: 500 (Internal service error)

# vendor
list of endpoint:
- `post /vendor`  
- `get /vendor`
- `post /vendor/:vendorId/dish`
- `get /vendor/:vendorId/dish`
- `post /vendor/:vendorId/tag`
- `get  /vendor/tag?cuisines=tag&category=tag`

### POST /vendor

Request:

- data:
```json
{
    "name": "string",
    "location": "string",
    "range_price": "string"
}
```

Response:
- status: 201
- body:

```json
{
    "name": "string",
    "location": "string",
    "range_price": "string",
    "createdAt": "date",
    "updatedAt": "date"
}
```

Response:
- status: 400 (Bad request)
- body:
```json
{
    "message": "Validation error: password at least 6 characters"
}
```
- status: 400 (Bad request)
- body:
```json
{
    "message": "Validation error: fields cannot exceed 128 characters."
}
```
- status: 400 (Bad request)
- body:
```json
{
    "message": "Validation error: Field must be not empty."
}
```

- status: 500 (Internal service error)

### GET /vendor

Response:
- status: 200
- body:

```json
[
    {
        "name": "string",
        "location": "string",
        "range_price": "string",
        "createdAt": "date",
        "updatedAt": "date",
        "Tags":"array",
        "Dishes": "array"
    },
    {
        "name": "string",
        "location": "string",
        "range_price": "string",
        "createdAt": "date",
        "updatedAt": "date",
        "Tags":"array",
        "Dishes": "array"
    },
]
```

Response:
- status: 500 (Internal service error)

## POST /vendor/:vendorId/dish

Request:
- params: VendorId (integer)
- data:
```json
{
    "name": "string",
    "ingredients": "string",
    "price": "integer"
}
```

Response:
- status: 201
- body:

```json
{
    "name": "string",
    "ingredients": "string",
    "price": "string",
    "VendorId": "integer",
    "createdAt": "date",
    "updatedAt": "date"
}
```

Response:
- status: 404 (not found)
- body:
```json
{
    "message": "Vendor not found"
}
```
- status: 500 (Internal service error)

## GET /vendor/:vendorId/dish

Request:
- params: VendorId (integer)

Response:
- status: 200
- body:

```json
[   
    {
        "name": "string",
        "ingredients": "string",
        "price": "string",
        "VendorId": "integer",
        "createdAt": "date",
        "updatedAt": "date"
    },
    {
        "name": "string",
        "ingredients": "string",
        "price": "string",
        "VendorId": "integer",
        "createdAt": "date",
        "updatedAt": "date"
    }
]


```

Response:
- status: 404 (not found)
- body:
```json
{
    "message": "Vendor not found"
}
```

- status: 500 (Internal service error)

## POST /vendor/:vendorId/tag

Request:
- params: VendorId (integer)
- body:
```json 
{
    "tag": "string"
}
```
Response:
- status: 201
- body:

```json
{
    "TagId": "integer",
    "VendorId": "integer",
    "updatedAt": "date",
    "createdAt": "date"
}


```

Response:
- status: 400 (Bad request)
- body:
```json
{
    "message": "Tag not available"
}
```
- status: 400 (Bad request)
- body:
```json
{
    "message": "Vendor not found"
}
```

- status: 500 (Internal service error)

## GET /vendor/tag?cuisines=tag&category=tag

Request:
- query: cuisines (string)
- query: category(string)

Response:
- status: 200
- body:

```json
[
    {
        "name": "string",
        "location": "string",
        "range_price": "string",
        "createdAt": "date",
        "updatedAt": "date",
        "Tags":"array"
    },
    {
        "name": "string",
        "location": "string",
        "range_price": "string",
        "createdAt": "date",
        "updatedAt": "date",
        "Tags":"array"
    },
]


```

Response:
- status: 400 (Bad request)
- body:
```json
{
    "message": "Vendor not found"
}
```

- status: 500 (Internal service error)

