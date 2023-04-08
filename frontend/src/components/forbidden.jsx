import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Forbidden = () => {
    const navigate = useNavigate();
    return (
        <div className="blogCard shadow-sm bg-body rounded" style={{width:"100%"}}>
            <div style={{width:"70%", margin:"0 auto"}}>
                <div style={{color:"#0070c0", marginBottom:"30px"}}>
                    <h1>접근이 거부되었습니다.</h1>
                    <p>Error 403 Forbidden.</p>
                </div>
                <div>
                    <p style={{marginBottom:"0px"}}>요청하신 페이지 접근이 거부되었습니다.</p>
                    <p>입력하신 페이지의 주소가 정확한지 다시 한번 확인해주세요.</p>
                </div>
                <div className="row" style={{margin:"0px"}}>
                    <Button style={{width:"90px", marginRight:"10px"}} onClick={() => navigate(-1)}>이전으로</Button>
                    <Button style={{width:"90px"}} onClick={() => navigate('/')}>메인으로</Button>
                </div>
            </div>
        </div>
    );
}

export default Forbidden;