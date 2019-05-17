import React from 'react';
import {Tree} from './tree';


export default class Milestone extends React.Component{
    constructor(props){
        super(props);
        this.tree = new Tree({id:"0000",payload:{title:'',avatar:''}});
        this.state={}
        this.x = document.getElementById('milestones')
        this.request =null;
       
    }
    componentDidMount(){
        // console.log(this.x);    
    }


    buildTree(nodes){
        // console.log(nodes)
        nodes.map(node=>{
            // console.log("Running ON ")
            // console.log(node);
            if(node.id!="0000"){
                // console.log("Adding Node" + node.id);
                this.tree.addNode(node,node.parent,this.tree.traverseBF);
              
            }
            else{
                // console.log("Root FOund")
                this.tree._root=node;
            }
        })
        //  console.log(this.tree)
    }






    newMilestone(data,toNode,callback=null){
       let newnode = this.tree.addNode(data,toNode,this.tree.traverseBF)
   
      if(callback){
          callback(newnode)
      }  
    //   console.log(newnode)
      return newnode;



    }

    // Prepares the nodes of the tree to be JSON Stringified
    stringify(){
        var nodes=[]
        this.tree.traverseBF(
            (node)=>{
                nodes.push({
                    id:node.id,
                    parent: node.parent!=null?node.parent:null,
                    payload: node.payload,
                    level:node.level,
                    children:[]
                });
            }
            )
        return nodes;
        
    }

    stringifyNode(node){
        var nodeS =null
        nodeS = {
            id:node.id,
            parent: node.parent!=null?node.parent:null,
            payload: node.payload,
            level:node.level,
            children:[]
        }
        return nodeS
    }

    // Visualize the ====================================================================================================================================================
    visualize(commentNode=null, container){
        
        if(!commentNode){
            commentNode = this.tree._root;
        }
        // console.log(commentNode.children)
        var comment = document.createElement("ul");
        comment.className = "  fade-in-left";
    
    container.appendChild(comment)
        
        if(commentNode.id!="0000"){
            // Comments Div
            // comment.style.marginLeft = 10*node.level + "%";
            
            
            // Comment Avatar
                // var avatar = document.createElement("img");
                // avatar.src=commentNode.payload.avatar;
                // comment.appendChild(avatar);
            
            
            // Comment Body
            var cmbody = document.createElement("li");
            cmbody.innerHTML = commentNode.payload.title!=undefined?commentNode.payload.title:"";
            comment.appendChild(cmbody);
            
            var cmbody = document.createElement("small");
            cmbody.innerHTML = commentNode.payload.body!=undefined?commentNode.payload.body:"";
            comment.appendChild(cmbody);


                // var reply = document.createElement("form")
                // container.appendChild(reply);

                 // var replytxt = document.createElement("input")


            // Reply Button
            if(commentNode.id!="0000" && commentNode.level<2){
                var btn =document.createElement("button");
                btn.onclick = this.replyComment.bind(this,commentNode,comment)
                btn.className="replybtn";
                btn.innerHTML="Comment";
                cmbody.appendChild(btn)}

            commentNode.children.map(child=>{
            this.visualize(child,comment)
        })
            
        }
        else{
            commentNode.children.map(child=>{
                this.visualize(child,comment)
            })
    }}


replyComment(node,comments){

    //    this.addComment({data:{body:'test'+node.id}},node.id)
        var commentnode = this.newMilestone({
            id:node.id+1, //will not do
            parent:node.id,
            payload:{
                title:"test",
                avatar:'https://i.pravatar.cc/50'
            }
        },node.id)

        fetch('/api/requests/rescue/'+this.request,{
            'method':"POST",
            body:JSON.stringify(commentnode)
        })
        .then((res)=>{
            if(res.status==200){
                // alert("This Rescue Has been Assigned to You ")
                this.visualize(commentnode,comments)
            }
            else if(res.status==401){
                alert("You Must be logged in to Comment")
            }
        }
        )
    }
      

    // Special Milestones
    Reported(dt=0){
        console.log("Adding Reported Milestone")
        var data = {
            id:"0001",
            parent:"0000",
            payload:{
                title:"Animal Reported",
                date:dt,
                body:'',
                avatar:'https://i.pravatar.cc/50'
            }
        }

        this.newMilestone(data,'0000');
    }

    // Rescuer Assigned Milestone
    Rescuer(date){
        // console.log(this.tree);
        var data = {
            id:"0002",
            payload:{

                title:"Rescuer Assigned",
                date:"sss",
                body:'',
                avatar:'https://i.pravatar.cc/50'
            }
        }

     let child = this.newMilestone(data,'0000');
    //  this.visualize(child,this.x)
     return this.stringifyNode(child);
    }

    //Custom Milestone
    customeMile(data){
        var data = {
            id:Date.now(),
            payload:{
                title:data.title,
                date:Date.now(),
                body:data.body,
                avatar:'https://i.pravatar.cc/50'
            }
        }

     let child = this.newMilestone(data,'0000');
     return this.stringifyNode(child);
    }



    // Pushes the milestone to the mile stone object array
    pushms(node){
        alert(node.data.title);
       let child = {
            parent: node.parent!=null?node.parent.data:null,
            data: node.data,
            level:node.level,
            children:[]

        }

        fetch('/api/milestone/new',{
            'method':'POST',
             body:JSON.stringify(child)
        })
    }
 
    render(){
        return(
            <p>
              

            </p>
        )
    }
   

}