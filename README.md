# panienergy
Subscription preferences UI and API.

UI shows the preferences fetched via backend. 

# Frontend
This is a react app.

- Install node 
- Run npm install
- Run npm start 

Open the UI in http://localhost:3000/

# Backend
Backend API is developed usin Node Framework and Express server. Database is MongoDB.

Create a DB and collection MongoDB.  
I created a DB and collection in MongoDB Atlas 

created a .env file under backend/ folder add the DB connection string obtained while setting up the DB.

e.g: DATABASE=mongodb+srv://<dbuser>:<Password>@cluster0.lz9k7.mongodb.net/<DATABASE_NAME>?authSource=admin&replicaSet=atlas-km3jw0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true

- Run npm install --save
- Run npm start
- Server should be running on port 3001
## Schema
When you add the Subscriptions using below APIs please follow the model below

 `new mongoose.Schema({
    name:{
        type: String,
        required: true,
       // unique: true,
    },
    isRoot:{
        type:Boolean
    },
    category:{
        type:String
    },
    isParent:{
        type: Boolean,
      //  required: true,
    },
    hasChildren:{
        type:Boolean,
        required: true,
    },
   children:
           [this] 
    ,
    price:{
        type: Number
    }
})`


# Backend API 
1. POST http://localhost:3001/create

2. GET http://localhost:3001/get

3. DELETE http://localhost:3001/delete/<name of the Subscription>
  
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
  
