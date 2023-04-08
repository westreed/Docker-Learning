import { RSAKey } from 'jsencrypt/lib/lib/jsbn/rsa';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import hideImg from '../images/hide.png';
import viewImg from '../images/view.png';
import { setMember } from '../store/slice/member';
import { setModal } from '../store/slice/modal';
import { setRSAPublicKey } from '../store/slice/storeKey';
import API from '../utils/api';


const Login = () => {
    const showModal = useSelector((state) => state.modal.data);
    const rsaKey    = useSelector((state) => state.storeKey.rsaKey);
    const dispatch = useDispatch();

    const [email,       setEmail    ] = useState('');
    const [password,    setPassword ] = useState('');
    const [viewPW,      setViewPW   ] = useState(false);
    const [pwType,      setPwType   ] = useState('password');
    const [keepLogin,   setKeepLogin] = useState(false);

    const loginUser = async() => {
        let rsaPublicKey = rsaKey;
        if (rsaPublicKey == null){
            const data = await API.getRsakey();
            rsaPublicKey = data;
            dispatch(setRSAPublicKey(data));
        }
        
        if (email === '' || password === ''){
            alert("이메일과 비밀번호를 입력해주세요.");
            return false;
        }

        if (rsaPublicKey.modulus == null) {
            alert("서버에 문제가 발생했습니다.");
            return false;
        }

        const rsa = new RSAKey();
        rsa.setPublic(rsaPublicKey.modulus, rsaPublicKey.exponent);
        
        const res = await API.login({
            "email" : rsa.encrypt(email),
            "password" : rsa.encrypt(password),
            "keep" : keepLogin
        });
        if (!res.error){
            setEmail('');
            setPassword('');
            dispatch(setModal(false));
            dispatch(setMember(res.data));
        }
        else{
            switch (res.data.response.status) {
                case 404:
                    alert("없는 이메일이거나 잘못된 비밀번호입니다.");
                    break;
                
                // case 403:
                //     getRsaKey();
                //     break;
            
                default:
                    alert("서버에 문제가 발생했습니다.");
                    break;
            }
        }
    }

    const togglePW = () => {
        setViewPW(!viewPW);
        if(viewPW){setPwType('password');}
        else{setPwType('text');}
    }

    return (
        <Modal
            show={showModal}
            dialogClassName="modal-s2" // css 용 클래스 이름
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <button className="noEffect close" style={{float:"right"}} onClick={() => dispatch(setModal(false))}>×</button>
                <h5>로그인</h5>
                <Form>
                    <Form.Group className="mt-4 mb-3 outline" controlId="Form1">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control
                            className="shadow-none"
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 outline" controlId="Form2"
                    >
                        <Form.Label>비밀번호</Form.Label>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                            <Form.Control
                                className="shadow-none"
                                type={pwType}
                                placeholder="********"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div style={{margin:"auto", paddingRight:"12px"}} onClick={togglePW}><img src={viewPW ? viewImg : hideImg} width="20px" height="20px" alt="" /></div>
                        </div>
                    </Form.Group>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        <Form.Check type='checkbox' label='로그인 유지' onClick={() => setKeepLogin(!keepLogin)}/>
                        <div>
                            <Link to="/join" onClick={() => dispatch(setModal(false))} style={{color:"212121", marginRight:"10px"}}>회원가입</Link>
                            <Link to="/find" onClick={() => dispatch(setModal(false))}>ID/PW 찾기</Link>
                        </div>
                    </div>
                    <Button style={{width:"100%", marginTop:"20px", backgroundColor:"#7286D3"}} onClick={loginUser}>로그인</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default Login;