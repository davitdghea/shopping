import React from "react"
import { useState,useRef,useEffect } from "react"
import Action from "./Action"
import { VscTriangleDown,VscTriangleUp } from "react-icons/vsc";

const Comment = ({
    comment,
    handleInsertNode,
    handleEditNode,
    handleDeleteNode
}) =>{
    const [input,setInput] = useState("")
    const [editMode,setEditMode] = useState(false)
    const [expand,setExpand] = useState(false)
    const [ShowInput,setShowInput] = useState(false)
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef?.current?.focus();
    },[editMode])
    const handleNewComment = () =>{
        setExpand(!expand);
        setShowInput(true)
    }
    
    const handclick = () =>{
       inputRef.current.focus();
    }
    const onAddComment = () =>{
        if(editMode){
            handleEditNode(comment.id,inputRef?.current?.innerText);

        } else{
            setExpand(true);
            handleInsertNode(comment.id,input);
            setShowInput(false);
            setInput("");
        }
        if(editMode) {setEditMode(false)};
    }
    const handleDelete = ()=>{
        handleDeleteNode(comment.id)
    }
   
    return(
        <div>
            <div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
                {comment.id === 1 ? (
                    <>
                    <textarea
                    
                    className="inputContainer__input"
                    autoFous
                    style={{height:"auto",maxHeight:"30px"}}
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder="type...">
                    </textarea> 
                 
                  <Action 
                     className="reply comment" 
                     type="COMMENT"
                     handleClick={onAddComment}/>
                  </>
                    
                ):(
                    <>
                    <span 
                    style={{wordWrap:"break-word"}}
                    suppressContentEditableWarning={editMode}
                    ref={inputRef}
                    contentEditable={editMode}
                    >
                        {comment.name}
                    </span>
                    <div style={{display:"flex",marginTop:"5px"}}>
                        {editMode ? (
                            <>
                            <Action 
                               className="reply" 
                               type="Save"
                               handleClick={onAddComment}   
                            />
                            <Action 
                               className="reply" 
                               type="CANCEL"  
                               handleClick={()=>{
                                if(inputRef.current)
                                inputRef.current.innerText= comment.name
                                    setEditMode(false)
                                }}/>
                            </>
                        ):(
                            <>
                              <Action 
                                 className="reply" 
                                 type={
                                    <div style={{display:"flex"}}>
                                      {expand ? (
                                        <div width="10px" height="10px">{<VscTriangleDown />}</div>
                                      ):(
                                        <div width = "10px" height="10px"><VscTriangleUp /></div>
                                      )}{""}
                                     <p style={{marginLeft:"5px"}} onClick={handclick} >REPLY</p> 
                                    </div>
                                 }
                                 handleClick={handleNewComment} 
                                 />
                              <Action className="reply" 
                                  type="EDIT"
                                  handleClick={()=>{
                                    setEditMode(true)
                                  }}
                                />
                              <Action className="reply" 
                              type="DELETE"
                              handleClick={handleDelete}/>
                            </>
                        )
                    }
                    </div>
                    </>
                )} 
            </div>
            <div style={{display:expand ?"block":"none", paddingLeft:"25px"}}>
                {ShowInput && (
                    <div className="inputContainer">
                        <input 
                          type="text"
                          className="inputContainer" 
                          autoFocus
                          placeholder = "repli..."
                          onChange={(e)=>{setInput(e.target.value)}}
                        />
                        <Action className="reply" type="REPLY" handleClick={onAddComment} />
                        <Action className="reply" 
                        type="CANCEL"
                        handleClick={()=>{
                            setShowInput(false);
                            if(!comment?.items?.length) setExpand(false);
                        }}
                        />
                        </div>
                )}
            {comment?.items?.map((cmnt)=>{
                return(
                    <Comment 
                      key={cmnt.id} 
                      handleDeleteNode={handleDeleteNode}
                      comment={cmnt}
                      handleEditNode={handleEditNode}
                      handleInsertNode={handleInsertNode}
                    />
                )   
            })}
            </div>   
        </div>
    )
}
export default Comment;