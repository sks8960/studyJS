import { useState, useRef } from "react";

const DiaryItem = ({author, content, created_date, emotion, id, onRemove, onEdit,}) => {
    const [isEdit, setIsEdit] = useState(false);
    const toggleEdit = () => setIsEdit(!isEdit);
    const [localContent, setLocalContent] = useState(content);

    const localCententInput = useRef();

    const handleQuitEdit = () =>{
        setIsEdit(false);
        setLocalContent(content);
    }
    
    const handleRemove = () => {
        if(window.confirm(`${id}번째 일기를 정말로 삭제하시겠습니까?`)){
            onRemove(id);
        }
    }

    const handleEdit = () => {
        if(localContent.length < 5){
            localCententInput.current.focus();
            return;
        }
        if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)){
            onEdit(id, localContent);
            toggleEdit();
        }
    }

    return <div className="DiaryItem">
        <div className="Info">
            <span>작성자 : {author} | 감정점수 : {emotion} </span>
            <br />
            <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className="content">
            {isEdit ? (
            <>
                <textarea ref={localCententInput} value={localContent} onChange={(e)=>setLocalContent(e.target.value)}/>
            </> ) : (<>{content}</>)}
        </div>
        {isEdit ? (
        <>
            <button onClick={handleQuitEdit}>수정취소</button>
            <button onClick={handleEdit}>수정완료</button>
        </>)
        : (
        <>
            <button onClick={handleRemove}>삭제하기</button>
            <button onClick={toggleEdit}>수정하기</button>
        </>)}
    </div>
}

export default DiaryItem;