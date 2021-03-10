# panienergy
Subscription preferences UI and API

#Frontend
clone the code 
Install node 
Run npm init
Run npm start 

Open the UI in http://localhost:3000/

#Backend

Create a DB and collection MongoDB 
I created a DB and collection in MongoDB Atlas 

clone the code
Run npm init
Run npm start
Server should be running on port 3001

# Backend API 
POST http://localhost:3001/create
GET http://localhost:3001/get
DELETE http://localhost:3001/delete/<name of the Subscription>
  
  sample data :
  {
        "children": [
            {
                "name": "Feature-C-1",
                "isParent": true,
                "hasChildren": true,
                "isRoot": false,
                "category": "parent",
                "price": 0,
                "children": [
                    {
                        "name": "Feature-C-1-1",
                        "isParent": false,
                        "hasChildren": false,
                        "isRoot": false,
                        "category": "child",
                        "price": 25
                    }
                ]
            }
        ],
        "_id": "6048f8a909780933e43c4d28",
        "name": "Feature-C",
        "isParent": true,
        "hasChildren": true,
        "isRoot": true,
        "category": "parent",
        "price": 0,
        "__v": 0
    }
}
  
