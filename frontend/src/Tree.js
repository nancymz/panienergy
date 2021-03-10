import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import fontawesome from '@fortawesome/fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons'
import React, { useState } from "react";
import "./Tree.css";

library.add(farCheckSquare);

const Tree = ({ data = [] }) => {
    return (
      <div className="d-tree">
        <ul className="d-flex d-tree-container flex-column">
          {data.map((tree,i) => (
            <TreeNode node={tree} key={i}/>
          ))}
        </ul>
      </div>
    );
  };
  
  const TreeNode = ({ node }) => {
    const [childVisible, setChildVisiblity] = useState(false);
  
    const hasPrice = node.price > 0  ? true : false;
  
    return (
        <>
      <li className="d-tree-node border-0">
        <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
          {node.hasChildren && (
            <div
              className={`d-inline d-tree-toggler ${
                childVisible ? "active" : ""
              }`}
            >
             <FontAwesomeIcon icon={farCheckSquare} />
            </div>
          )}
  
          <div className="col d-tree-head">
          <i className={`mr-1 ${farCheckSquare}`}> </i>
            {node.name} {hasPrice && node.price}
          </div>
        </div>
  
        {node.hasChildren && childVisible && (
          <div className="d-tree-content">
            <ul className="d-flex d-tree-container flex-column">
              <Tree data={node.children} />
            </ul>
          </div>
        )}
      </li>
      <div></div>
      </>
    );
  };
  
  export default Tree;