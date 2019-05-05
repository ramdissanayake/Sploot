import React from 'react';
import {Tree} from './tree';


export default class Milestone extends React.Component{
    constructor(props){
        super(props);
        this.tree = new Tree('0000');
        
    }
    
    buildTree(nodes){
        // console.log(nodes);
        nodes.map(node=>{
            
            if(node.parent!=null){
                // console.log("this node: " +node.data);
                // console.log("this parent: " +node.parent);
                this.tree.addNode(node.data,node.parent,this.tree.traverseBF);
            }
            else{
                this.tree._root=node;
            }
        })
        
         console.log(this.tree)
        // console.log(JSON.stringify(this.tree._root.children[0].data.props.children[0]));
    }




    newMilestone(data,toNode){
        this.tree.addNode(data,toNode,this.tree.traverseBF)
    }

    // Prepares the nodes of the tree to be JSON Stringified
    stringify(){
        var nodes=[]
        this.tree.traverseBF(
            (node)=>{
                nodes.push({
                    parent: node.parent!=null?node.parent.data:null,
                    data: node.data,
                    level:node.level,
                    children:[]
                });
            }
            )
        return nodes;
    }

    visualize(){
        var elements =[]
        this.tree.traverseDF(
            (node)=>{
                if(node.data!='0000'){

                    elements.push(
                        node
                        )  
                }
            }
        )

        return elements.map(node => {
          
            var style=['lvl1','lvl2','lvl3'];
            return  <div className="horizontallLine">
                       <div id="milestones" className={"alert alert-info ms "+style[node.level-1]}>

                {/* Milestone Title */}
            <h6>
                {node.data.title}
            </h6>
            <span>
                <small>
                {node.data.date}
                </small>
            </span>
            <p>
                {node.data.desc}
            </p>
            </div>



            </div>
            
         
     
        })
        
    }

    level(node){
        var level = node.level;

        for(var i=0; i<level;i++){

        }

    }

    // Special Milestones
    Reported(dt){
        var data = {
            title:"Animal Reported",
            date:dt    
        }

        this.newMilestone(data,'0000');
    }



}