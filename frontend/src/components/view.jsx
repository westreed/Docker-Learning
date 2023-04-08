
const Viewer = ({content}) => {
    
    return (
        <div
            className="ck-content"
            dangerouslySetInnerHTML={{ __html: content }}
        ></div>
    );
};

export default Viewer;