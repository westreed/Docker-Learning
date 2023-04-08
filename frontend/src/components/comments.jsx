import moment from "moment/moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosting } from "../store/slice/posting";
import API from "../utils/api";
import Comment from "./editor/comment";


const Comments = () => {
    const dispatch = useDispatch();
    // flag false:답글 true:수정
    const [commentFlag, setCommentFlag] = useState(false);
    const [replyComment, setReplyComment] = useState(null);
    const [editorInstance, setEditorInstance] = useState(null);
    const [content, setContent] = useState("");
    const [contentR, setContentR] = useState("");
    // const masterEmail = useSelector((state) => state.global.masterEmail);
    const member = useSelector((state) => state.member.data);
    const posting = useSelector((state) => state.posting.data);
    const writer = posting?.member.email;
    const replyCnt = posting?.replys.length;

    const replys = [];
    const replyTo = {};

    const findReplyById = (idx, reply) => {
        for (let j = idx; j < replyCnt; j++) {
            const _reply = {...posting.replys[j]};
            // 삭제된 답글은 감추기
            if(_reply.email === '') continue;
            if(_reply.replyId === reply.id){
                if(reply.email !== '') _reply.replyUsername = reply.username;
                else _reply.replyUsername = "삭제된 댓글";
            }
            else if(_reply.replyId in replyTo && replyTo[_reply.replyId].targetId === reply.id){
                _reply.replyUsername = replyTo[_reply.replyId].name;
            }
            else continue;
            replys.push(_reply);
            replyTo[_reply.id] = {targetId:reply.id, name:_reply.username};
        }
    }

    if(replyCnt){
        // double for문
        for (let i = 0; i < replyCnt; i++) {
            // 답글이 아닌 댓글 찾기
            const reply = posting.replys[i];
            if(reply.replyId === null){
                if(reply.email === ''){
                    // 삭제된 댓글인 경우 답글 검색하기
                    let exist = false;
                    for (let j=i+1; j < replyCnt; j++){
                        if (posting.replys[j].email !== '' && posting.replys[j].replyId === reply.id){
                            exist = true;
                            break;
                        }
                    }
                    // 답글이 존재하지 않으면 넘기기
                    if (!exist) continue;
                }
                replys.push(reply);
                // reply에 대한 답글 찾기
                findReplyById(i+1, reply);
            }
        }
        // 댓글 데이터는 있지만, 모두 삭제되어 댓글이 없는 경우
        if(replys.length === 0){
            API.deleteRepliesFromPost({"id":posting?.id})
        }
    }

    const formmatedDate = (date) => {
        const formmatDate = moment(date);
        return formmatDate.format("YYYY.MM.DD. HH:mm");
    }

    const styledComment = (res) => {
        const styles = {maxWidth:"80%", textAlign:"left", alignSelf:"flex-start"};
        if(writer === res.email){
            styles.alignSelf = "flex-end";
            styles.textAlign = "right";
        }
        if(res.replyId !== null){
        }
        return styles;
    }

    const writeReply = async(replyId) => {
        const data = {
            replyId:replyId,
            content:replyId ? contentR : content,
            boardId:posting.id,
            username:member.username,
            email:member.email
        };
        const res = await API.writeReply(data);
        if (res == null){
            alert("댓글을 업로드하는데 실패했습니다.");
            return false;
        }
        editorInstance.setData("");
        setContent("");
        setReplyComment(null);
        const post = await API.getPost({id:posting.id});
        dispatch(setPosting(post));
    }

    const editReply = async(id, replyId) => {
        const data = {
            id:id,
            replyId:replyId,
            content:replyId ? contentR : content,
            boardId:posting.id,
            username:member.username,
            email:member.email
        };
        const res = await API.editReply(data);
        if (res == null){
            alert("댓글을 수정하는데 실패했습니다.");
            return false;
        }
        editorInstance.setData("");
        setContent("");
        setReplyComment(null);
        const post = await API.getPost({id:posting.id});
        dispatch(setPosting(post));
    }

    const deleteReply = async(reply) => {
        const data = {
            id:reply.id,
            replyId:reply.replyId,
            content:'삭제된 댓글입니다.',
            boardId:posting.id,
            username:'',
            email:''
        };
        const res = await API.editReply(data);
        if (res == null){
            alert("댓글을 삭제하는데 실패했습니다.");
            return false;
        }
        const post = await API.getPost({id:posting.id});
        dispatch(setPosting(post));
    }

    const setEdit = (idx) => {
        setCommentFlag(true);
        setReplyComment(idx);
    }

    const setReply = (idx) => {
        setCommentFlag(false);
        setReplyComment(idx);
    }

    const commentList = () => {
        return (
            <div style={{marginBottom:"1em", padding:"1em", border:"2px solid #e5e5e5", borderRadius:"5px"}}>
                {
                    replys.map((res, idx) => 
                        <div key={idx} className="extraCard" style={{display:"flex", flexDirection:"column"}}>
                            <div style={styledComment(res)}>
                                {res.email !== '' ? <div style={{fontWeight:"bold", fontSize:"0.9em"}}>
                                    {res.username}
                                </div> : null}
                                <div style={{display:"flex", flexDirection:"row", backgroundColor:writer === res.email ? "#ffe4b2" : "#eaeaea", padding:"0.2em", borderRadius:"5px"}}>
                                    {res.replyId ?
                                        <div style={{color:"#3273dc", fontSize:"0.9em", marginRight:"0.5em"}}>
                                            @{res.replyUsername}
                                        </div>
                                    : null}
                                    <div
                                        style={{fontSize:"0.9em", textAlign:"left", overflow:"auto"}}
                                        dangerouslySetInnerHTML={{ __html: res.content }}
                                    >
                                    </div>
                                </div>
                                <div style={{display:"flex", flexDirection:"row", justifyContent:writer === res.email ? "flex-end" : "flex-start"}}>
                                    {res.email !== '' ? <div style={{color:"gray", fontSize:"0.8em"}}>
                                        {formmatedDate(res.createData)}
                                    </div> : null}
                                    {member !== null && member.email === res.email ?
                                    <button className="noEffect useButton2" style={{fontSize:"0.8em", color:"gray"}} onClick={() => setEdit(idx)}>
                                    수정
                                    </button> : null}
                                    {member !== null && member.email === res.email ?
                                    <button className="noEffect useButton2" style={{fontSize:"0.8em", color:"gray"}} onClick={() => deleteReply(res)}>
                                    삭제
                                    </button> : null}
                                    {member !== null && res.email !== '' ?
                                    <button className="noEffect useButton2" style={{fontSize:"0.8em", color:"gray"}} onClick={() => setReply(idx)}>
                                        답글쓰기
                                    </button> : null}
                                </div>
                            </div>
                            {replyComment === idx ? <Comment id={res.id} setEditorInstance={null} setContent={setContentR} reply={res} flag={commentFlag} setReply={setReplyComment} writeReply={writeReply} editReply={editReply} getContent={res.content} /> : null}
                            {replyCnt-1 !== idx && replys[idx+1]?.replyId === null ?
                                <hr style={{width:"100%", marginTop:"0.5em", marginBottom:"0.5em"}}/>
                                : null
                            }
                        </div>
                    )
                }
            </div>
        );
    }

    return (
        <div className="comment">
            {replys.length > 0 ? commentList() : null}
            <Comment id={null} setEditorInstance={setEditorInstance} setContent={setContent} reply={null} flag={false} setReply={null} writeReply={writeReply} editReply={null} getContent={null}/>
        </div>
    );
}

export default Comments;