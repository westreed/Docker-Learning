import CategoryPostList from "../components/categoryPostList";


const Home = (props) => {
    return (
        <div style={{width:"100%"}}>
            <CategoryPostList headerRef={props.headerRef} />
        </div>
    );
}

export default Home;