import { useSelector } from "react-redux";
import Category from "../components/category";
import Profile from "../components/profile";


const Widget = () => {
    const showWidget = useSelector((state) => state.widgets.data);

    if(!showWidget){
        return (<div/>);
    }
    
    return (
        <div className="widget" style={{display:"flex", flexDirection:"column"}}>
            <Profile/>
            <Category/>
        </div>
    );
}

export default Widget;