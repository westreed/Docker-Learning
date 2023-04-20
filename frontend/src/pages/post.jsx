import Comments from "../components/comments";
import PostCotnent from "../components/postCotnent";


const Post = (props) => {
    return (
        <div style={{width:"100%", height:"100%"}}>
            <div className="blogCard shadow-sm bg-body rounded">
                <PostCotnent headerRef={props.headerRef}/>
            </div>
            <div className="blogCard shadow-sm bg-body rounded">
                <Comments/>
            </div>
        </div>
    );
}

export default Post;