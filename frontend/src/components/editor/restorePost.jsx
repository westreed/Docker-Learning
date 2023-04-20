import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPreviousModal } from "../../store/slice/modal";
import { setWriting } from "../../store/slice/writing";


const RestorePost = (props) => {
    const show = useSelector((state) => state.modal.previous);
    const writing = useSelector((state) => state.writing.data);
    const dispatch = useDispatch();

    const select_Yes = () => {
        if(props?.editor != null || props?.editor !== undefined){
            props?.editor.setData(writing);
        }
        dispatch(setPreviousModal(false));
    }

    const select_No = () => {
        dispatch(setWriting(null));
        dispatch(setPreviousModal(false));
    }

    return (
        <Modal
            show={show}
            dialogClassName="modal-s2" // css 용 클래스 이름
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <button className="noEffect close" style={{float:"right"}} onClick={() => dispatch(setPreviousModal(false))}>×</button>
                <h5>이전 글</h5>
                <div>이전에 작성중이던 글의 데이터가 남아있습니다.</div>
                <div>불러오시겠습니까?</div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                    <Button style={{border:"none", backgroundColor:"#7286D3", marginRight:"1em"}} onClick={select_Yes}>네</Button>
                    <Button style={{border:"none", backgroundColor:"#7286D3"}} onClick={select_No}>아니오</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default RestorePost;