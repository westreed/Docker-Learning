import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
    const member = useSelector((state) => state.member.data);

    return (
        <div className="profile blogCard text-center shadow-sm bg-body rounded">
            <img src='/avatar.png' style={{maxHeight:"150px", objectFit: "cover"}} alt="profile" />
            <div style={{flex:1}}>
                <div className="mt-3" style={{fontSize:"1.3em"}}>갈대</div>
                <div style={{fontSize:"15px", maxWidth:"150px", margin:"0 auto"}}>
                    <p className="mb-0">이것저것 개발하는게</p>
                    <p>재밌는 개발자이야기</p>
                </div>
                {member != null ?
                    <div>
                        {member.role === 'admin' ? <Link to='/settings'>관리</Link> : null}
                    </div>
                : null}
            </div>
        </div>
    );
}

export default Profile;