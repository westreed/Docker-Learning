import { useEffect, useRef, useState } from "react";
import Functions from "../utils/functions";
import API from "../utils/api";
import { useDispatch } from "react-redux";
import { setCategory } from "../store/slice/category";

const getCategories = async(setCategories, dispatch) => {
    const res = await API.getCategories();
    let categories = [];
    if(res !== false){
        Functions.categorySort(res);
        // dispatch로 인해, List 내부의 객체들도 새롭게 할당해서 넣어야
        // 읽기전용 데이터를 피해갈 수 있음.
        res.forEach(data => {
            let newItem = Object.assign({}, data);
            categories.push(newItem);
        })
    }
    setCategories(categories);
    dispatch(setCategory(res));
}

const Editing = (props) => {
    const [idx, setIdx] = props.idx;
    const [categories, setCategories] = props.list;

    const MoveUp = (e) => {
        if(categories[idx].layer > 0){
            const pos = categories[idx].layer;
            const _categories = categories;
            _categories.forEach(data => {
                if(data.layer === pos-1) data.layer += 1;
            })
            _categories[idx].layer -= 1;
            setIdx(idx-1);
            setCategories(Functions.categorySort(_categories));
            props.update({});
        }
    }

    const MoveDown = (e) => {
        if(categories[idx].layer < categories.length-1){
            const pos = categories[idx].layer;
            const _categories = categories;
            _categories.forEach(data => {if(data.layer === pos+1) data.layer -= 1;})
            _categories[idx].layer += 1;
            setIdx(idx+1);
            setCategories(Functions.categorySort(_categories));
            props.update({});
        }
    }

    const ModifyName = (e) => {
        const _categories = categories;
        _categories[idx].name = e.target.value;
        setCategories(_categories);
        props.update({});
    }

    const Delete = (e) => {
        const _categories = categories;
        _categories.splice(idx, 1);
        for(let i = idx; i<_categories.length; i++){
            _categories[i].layer -= 1;
        }
        setCategories(_categories);
        setIdx(null);
        props.update({});
    }

    return (
        <div>
            <div>카테고리명</div>
            <input type="text" value={categories[idx].name} onChange={ModifyName}/>
            <div>카테고리정렬</div>
            <div>
                <button onClick={MoveUp}>위</button>
                <button onClick={MoveDown}>아래</button>
            </div>
            <button onClick={Delete}>삭제하기</button>
        </div>
    );
}

const EditCategory = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(false);
    const [, updateState] = useState();
    const [categories, setCategories] = useState([]);
    const [editIdx, setEditIdx] = useState(null);

    const addCategory = (e) => {
        const value = inputRef.current.value;
        if(value === '') return false;
        inputRef.current.value = '';
        let check = true;
        categories.forEach(data => {
            if(data.name === value){
                alert("같은 이름의 게시판이 존재합니다.");
                check = false;
            }
        });
        if(check){setCategories([...categories, {id:null, layer:categories.length, name:value}]);}
    }

    const selectCategory = (idx) => {
        setEditIdx(idx);
    }

    const Commit = async(e) => {
        const data = [];
        for (let index = 0; index < categories.length; index++) {
            if(categories[index].name.length === 0){
                alert("게시판 이름은 공백이 아니어야 합니다!");
                return false;
            }
            data.push({id:categories[index].id, layer:categories[index].layer, name:categories[index].name});
        }
        const res = await API.postCategories(data);
        if (res !== false){
            alert("수정된 사항이 적용되었습니다!");
            dispatch(setCategory(data));
        }
    }

    useEffect(() => {
        getCategories(setCategories, dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <div style={{flex:"30%", border:"1px solid #7286D3"}}>
                    <h3>카테고리</h3>
                    {categories.map((res, idx) => 
                        <button
                            className="noEffect useButton"
                            style={{display:"block", maxHeight:"24px"}}
                            key={res.layer}
                            onClick={() => selectCategory(res.layer)}
                        >{idx+1}. {res.name}</button>
                    )}
                    <input ref={inputRef} maxLength={10}/>
                    <button onClick={addCategory}>추가</button>
                </div>
                <div style={{flex:"70%", border:"1px solid #7286D3"}}>
                    {editIdx != null ?
                        <Editing idx={[editIdx, setEditIdx]} list={[categories, setCategories]} update={updateState} />
                    : null}
                </div>
            </div>
            <button style={{flex:1}} onClick={Commit}>확인</button>
        </div>
    );
}

export default EditCategory;