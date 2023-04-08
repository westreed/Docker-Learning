import moment from "moment/moment";
import { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setPageSize } from "../store/slice/pageSize";
import { setPostList } from "../store/slice/postList";
import API from "../utils/api";
import Dog from "../images/christmas-dog.png";

const pageSizeList = [5, 10, 15, 20, 30, 50];

const bottomPageList = (postList, pageSize, fetchData, scrollToRef, categoryName) => {
    const pageElement = [];
    const split = window.innerWidth > 768 ? 10 : 5;
    const currentPage = Math.floor(postList?.pageNumber/split);
    const currentEndPage = (currentPage+1)*split;
    const currentLastPage = currentEndPage > postList?.totalPages ? postList?.totalPages : currentEndPage;

    const buttonClick = async(page) => {
        scrollToRef();
        await fetchData(pageSize, categoryName, page);
    }

    if(currentPage > 0){
        pageElement.push(<button className="noEffect page shadow-sm" onClick={() => buttonClick((currentPage-1)*split)}>〈 이전</button>);
    }
    for(let i=currentPage*split; i<currentLastPage; i++){
        if(i === postList?.pageNumber){
            pageElement.push(<button key={i} className="noEffect pick page shadow-sm" onClick={() => buttonClick(i)}>{i+1}</button>);
        }
        else{
            pageElement.push(<button key={i} className="noEffect page shadow-sm" onClick={() => buttonClick(i)}>{i+1}</button>);
        }
    }
    if(currentEndPage < postList?.totalPages){
        pageElement.push(<button className="noEffect page shadow-sm" onClick={() => buttonClick((currentPage+1)*split)}>다음 〉</button>);
    }
    return pageElement;
}

const CategoryPostList = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.postList.data);
    const categories = useSelector((state) => state.category.data);
    const pageSize = useSelector((state) => state.pageSize.data);
    const member = useSelector((state) => state.member.data);
    const nowMoment = moment();

    const scrollToRef = () => {
        props.headerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const findIdByCategoryName = (name) => {
        for(let i=0; i<categories.length; i++){
            if (categories[i].name === name){
                return categories[i].id;
            }
        }
        return 0;
    }

    const fetchData = async(pageSizeArg, name, page=0) => {
        const id = findIdByCategoryName(name);
        const req = {
            "page":page,
            "pageSize":pageSizeArg,
            "id":id
        };
        if (id === 0) name = "전체글보기";
        const res = await API.getCategoryPosts(req);
        if (res !== null) res.name = name;
        dispatch(setPostList(res));
        if (pageSize !== pageSizeArg) dispatch(setPageSize(pageSizeArg));
    }

    const clickCategory = async(name) => {
        navigate(`/category/${name}`);
    }

    const pageElement = bottomPageList(postList, pageSize, fetchData, scrollToRef, params?.name);

    const formmatedDate = (date) => {
        const formmatDate = moment(date);
        if(formmatDate.isSame(nowMoment, "day")){
            return "Today "+formmatDate.format("HH:mm");
        }
        return formmatDate.format("YYYY.MM.DD.");
    }
    
    const writePost = (id) => {
        let idx = 0;
        for(let i=0; i<categories.length; i++){
            if (categories[i].id === id){
                idx = i+1;
                break;
            }
        }
        navigate(`/write`, {state:{id:idx}});
    }

    useEffect(() => {
        // 특정 카테고리를 클릭한 상태에서 새로고침하면
        // 카테고리 데이터가 비어있을 때 읽어와서 전체글보기로 나오는 현상을 방지.
        if(categories.length > 0) fetchData(pageSize, params?.name);
        // eslint-disable-next-line
    }, [categories, params?.name])

    const pageList = () => {
        return (
            <div style={{zIndex:0}}>
                <div>
                {postList?.boards.map((res, idx) => 
                    <div className="blogCard postCard shadow-sm bg-body rounded" key={idx} style={{ animationDelay: `${0.05 * idx}s`}}>
                        <div style={{display:"flex", flexDirection:"row", color:"grey", fontSize:"0.8em"}}>
                            <div style={{marginRight:"0.5em"}}>{formmatedDate(res.createData)}</div>
                            <div>카테고리｜</div>
                            <button className="noEffect useButton" style={{marginRight:"0.5em"}} onClick={() => clickCategory(res.category.name)}>{res.category.name}</button>
                            <div>조회 {res.view.toLocaleString()}</div>
                        </div>
                        <div style={{display:"flex", flexDirection:"row", fontSize:"1.4em", alignItems:"center", justifyContent:"space-between"}}>
                            <button className="noEffect p-0" onClick={() => navigate(`/post/${res.id}`)}>{res.title}</button>
                        </div>
                    </div>
                )}
                </div>
                {/* 하단 페이지 이동 */}
                <div className="extraCard" style={{marginTop:"20px"}}>
                    <div style={{flex:1, display:"flex", flexDirection:"row", justifyContent:"center", fontSize:"1em"}}>
                        {pageElement}
                    </div>
                </div>
            </div>
        );
    }

    const noPost = () => {
        return (
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"4em", marginBottom:"2em"}}>
                <div style={{fontSize:"1.5em", color:"gray"}}>작성된 게시글이 없네요.</div>
                <div style={{color:"gray"}}>X﹏X</div>
                <img src={Dog} alt="게시글 없음" width="200em" height="200em"/>
                {member?.role === 'admin' ? <button className="noEffect mt-3" style={{color:"gray"}} onClick={() => writePost(postList?.id)}>{"게시글 작성하러 가기 >"}</button> : null}
            </div>
        );
    }

    return (
        <div style={{width:"100%"}}>
            {/* 카테고리 헤더 */}
            <div className="blogCard postCard shadow-sm bg-body rounded" style={{backgroundColor:"#f7f7f7", position:"relative", zIndex:1}}>
                <div style={{marginBottom:"6px", fontSize:"1.4em", fontWeight:"bold"}}>
                    <div>{postList?.name}</div>
                </div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                    <div style={{display:"flex", flexDirection:"row", fontSize:"0.9em"}}>
                        <div style={{fontWeight:"bold"}}>{postList?.totalCount.toLocaleString()}</div>
                        <div>개의 게시글</div>
                    </div>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <button className="noEffect" style={{backgroundColor:"#3273dc", borderRadius:"4px", marginRight:"5px", color:"white", fontSize:"14px"}} onClick={() => writePost(postList?.id)}>글쓰기</button>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" size="sm" id="dropdown-basic" style={{backgroundColor:"#3273dc"}}>
                                {pageSize}개씩
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {pageSizeList.map((res, idx) => 
                                    <Dropdown.Item
                                        key={idx}
                                        onClick={() => fetchData(res, params?.name)}
                                    >
                                        {res}개씩
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            {/* 게시글 리스트 */}
            {postList?.boards.length > 0 ? pageList() : noPost()}
        </div>
    );
}

export default CategoryPostList;