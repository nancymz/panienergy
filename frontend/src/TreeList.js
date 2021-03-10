import React, { useEffect, useState } from 'react';
import Tree from "./Tree";
import { getUserPrefs } from './UserPrefs';

const treeData = [
    {
        "children": [
            {
                "name": "Feature-B-1",
                "isParent": false,
                "hasChildren": false,
                "isRoot": false,
                "category": "child",
                "price": 45,
                "children": []
            }
        ],
        "_id": "6048eff1f0571934847fdc0f",
        "name": "Feature-B",
        "isParent": true,
        "hasChildren": true,
        "isRoot": true,
        "category": "parent",
        "price": 0,
        "__v": 0
    },
    {
        "children": [
            {
                "name": "Feature-A-1",
                "isParent": true,
                "hasChildren": true,
                "isRoot": false,
                "category": "parent",
                "price": 0,
                "children": [
                    {
                        "name": "Feature-A-1-1",
                        "isParent": false,
                        "hasChildren": false,
                        "isRoot": false,
                        "category": "child",
                        "price": 20
                    }
                ]
            }
        ],
        "_id": "6048f0cdf0571934847fdc10",
        "name": "Feature-A",
        "isParent": true,
        "hasChildren": true,
        "isRoot": true,
        "category": "parent",
        "price": 0,
        "__v": 0
    }
];

const TreeList = () => {
    const [userPrefs, setUserPrefs] = useState([]);
   
    useEffect(() => {
        let mounted = true;
        getUserPrefs()
          .then(items => {
            if(mounted) {
                setUserPrefs(items)
            }
          })
        return () => mounted = false;
      }, [])

    return (
      <>
        <div className="row">
          <div className="col text-center">
           <h2>Subscription Preferences</h2>
              <div className="row mt-3 d-flex justify-content-center">
                <div className="col-lg-8 text-left text-dark">
                  <Tree data={userPrefs} />
                </div>
              </div>
        
          </div>
        </div>
      </>
    );
  };
  
export default TreeList;