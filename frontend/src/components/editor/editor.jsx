import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage.js';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
import Mention from '@ckeditor/ckeditor5-mention/src/mention.js';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Style from '@ckeditor/ckeditor5-style/src/style.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize.js';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Title from '@ckeditor/ckeditor5-heading/src/title.js';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';
import FileRepository from "@ckeditor/ckeditor5-upload/src/filerepository";
import '@ckeditor/ckeditor5-build-classic/build/translations/ko';
import '@ckeditor/ckeditor5-heading/build/translations/ko';
import '@ckeditor/ckeditor5-basic-styles/build/translations/ko';
import '@ckeditor/ckeditor5-table/build/translations/ko';
import '@ckeditor/ckeditor5-list/build/translations/ko';
import '@ckeditor/ckeditor5-word-count/build/translations/ko';
import '@ckeditor/ckeditor5-special-characters/build/translations/ko';
import '@ckeditor/ckeditor5-source-editing/build/translations/ko';
import '@ckeditor/ckeditor5-page-break/build/translations/ko';
import '@ckeditor/ckeditor5-link/build/translations/ko';
import '@ckeditor/ckeditor5-media-embed/build/translations/ko';
import '@ckeditor/ckeditor5-image/build/translations/ko';
import '@ckeditor/ckeditor5-font/build/translations/ko';
import '@ckeditor/ckeditor5-horizontal-line/build/translations/ko';
import '@ckeditor/ckeditor5-html-embed/build/translations/ko';
import '@ckeditor/ckeditor5-code-block/build/translations/ko';
import '@ckeditor/ckeditor5-block-quote/build/translations/ko';
import '@ckeditor/ckeditor5-alignment/build/translations/ko';
import '@ckeditor/ckeditor5-find-and-replace/build/translations/ko';
import '@ckeditor/ckeditor5-style/build/translations/ko';
import { useEffect, useState } from "react";
import { ReactComponent as Plane } from "../../assets/paper-plane-handmade-folded-shape-svgrepo-com.svg";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import API from "../../utils/api";
import Functions from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../../store/slice/category";
import { setMember } from "../../store/slice/member";
import { setWriting } from "../../store/slice/writing";
import { setPreviousModal } from "../../store/slice/modal";
import RestorePost from "./restorePost";

const editorConfig = {
    language: "ko",
    placeholder : "본문 내용을 입력해주세요.",
    mediaEmbed: {
        previewsInData: true
    },
    plugins: [
        Alignment,
        Autoformat,
        AutoImage,
        AutoLink,
        BlockQuote,
        Bold,
        Code,
        CodeBlock,
        Essentials,
        FindAndReplace,
        FontBackgroundColor,
        FontColor,
        FontFamily,
        FontSize,
        GeneralHtmlSupport,
        Heading,
        Highlight,
        HorizontalLine,
        HtmlEmbed,
        Image,
        ImageCaption,
        ImageInsert,
        ImageResize,
        ImageStyle,
        ImageToolbar,
        ImageUpload,
        Indent,
        IndentBlock,
        Italic,
        Link,
        LinkImage,
        List,
        ListProperties,
        MediaEmbed,
        MediaEmbedToolbar,
        Mention,
        PageBreak,
        Paragraph,
        SourceEditing,
        SpecialCharacters,
        SpecialCharactersArrows,
        SpecialCharactersCurrency,
        SpecialCharactersEssentials,
        SpecialCharactersMathematical,
        Strikethrough,
        Style,
        Subscript,
        Superscript,
        Table,
        TableCaption,
        TableCellProperties,
        TableColumnResize,
        TableProperties,
        TableToolbar,
        TextTransformation,
        Title,
        TodoList,
        Underline,
        WordCount,
        FileRepository
    ],
    extraPlugins: [],
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'fontFamily',
            'fontSize',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'bulletedList',
            'numberedList',
            'todoList',
            '|',
            'outdent',
            'indent',
            '|',
            'findAndReplace',
            'undo',
            'redo',
            '-',
            'style',
            '|',
            'alignment',
            '|',
            'horizontalLine',
            'blockQuote',
            'code',
            'codeBlock',
            '|',
            'subscript',
            'superscript',
            'specialCharacters',
            '|',
            'link',
            'imageUpload',
            'insertTable',
            'mediaEmbed',
            '|',
            'htmlEmbed',
            'pageBreak',
            'sourceEditing'
        ],
        shouldNotGroupWhenFull: true
    },
    heading: {
        options: [
            {
                model: "paragraph",
                view: "p",
                title: "본문",
                class: "ck-heading_paragraph",
            },
            {
                model: "heading2",
                view: "h2",
                title: "헤더1",
                class: "ck-heading_heading2",
            },
            {
                model: "heading3",
                view: "h3",
                title: "헤더2",
                class: "ck-heading_heading3",
            },
        ],
    },
    fontSize: {
        options: [
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
        ],
    },
    alignment: {
        options: ["justify", "left", "center", "right"],
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableCellProperties',
            'tableProperties'
        ],
    },
    image: {
        resizeUnit: "px",
        toolbar: [
            "imageStyle:alignLeft",
            "imageStyle:full",
            "imageStyle:alignRight",
            "|",
            "imageTextAlternative",
            'toggleImageCaption',
            'linkImage'
        ],
        styles: ["full", "alignLeft", "alignRight"],
        type: ["JPEG", "JPG", "GIF", "PNG"],
    },
    typing: {
        transformations: {
            remove: [
                "enDash",
                "emDash",
                "oneHalf",
                "oneThird",
                "twoThirds",
                "oneForth",
                "threeQuarters",
            ],
        },
    },
    style: {
        definitions: [
            {
                name: 'Side quote',
                element: 'blockquote',
                classes: [ 'side-quote' ]
            },
            {
                name: 'Spoiler',
                element: 'span',
                classes: [ 'spoiler' ]
            },
        ]
    },
}


const Editor = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [categoryId, setCategoryId] = useState(props.category);
    const [editorInstance, setEditorInstance] = useState(null);
    const categories = useSelector((state) => state.category.data);
    const writing = useSelector((state) => state.writing.data);
    const posting = useSelector((state) => state.posting.data);
    // const [content, setContent] = useState('');
    // const imgLink = "http://localhost:8080/uploads";

    // const customUploadAdapter = (loader) => {
    //     return {
    //         upload(){
    //             return new Promise ((resolve, reject) => {
    //                 const data = new FormData();
    //                  loader.file.then( (file) => {
    //                         data.append("name", file.name);
    //                         data.append("file", file);

    //                         axios.post('/api/upload', data)
    //                             .then((res) => {
    //                                 // if(!flag){
    //                                 //     setFlag(true);
    //                                 //     setImage(res.data.filename);
    //                                 // }
    //                                 console.log(res);
    //                                 resolve({
    //                                     default: res.data
    //                                 });
    //                             })
    //                             .catch((err)=>reject(err));
    //                     })
    //             })
    //         }
    //     }
    // }

    // function uploadPlugin (editor){
    //     editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    //         return customUploadAdapter(loader);
    //     }
    // }

    const config = props.types === 0 ? editorConfig : null;
    useEffect(() => {
        if (window.innerWidth > 768){ config.toolbar.shouldNotGroupWhenFull = true; }
        else{ config.toolbar.shouldNotGroupWhenFull = false; }
        // config["extraPlugins"] = [Publish];
        if (categoryId === 0 || categoryId === undefined) setCategoryId(1);
        const fetchData = async() => {
            let res = await API.getCategories();
            if (res === false){ res = []; }
            dispatch(setCategory(Functions.categorySort(res)));
        }
        fetchData();
        
        if(writing != null && props.edit === false){
            dispatch(setPreviousModal(true));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        // Edit 일때, 게시글 내용 불러오기
        if(props?.edit && editorInstance != null){
            const data = `<h1>${posting?.title}</h1>${posting?.content}`;
            editorInstance.setData(data);
        }
        // eslint-disable-next-line
    }, [editorInstance])

    const selectCategory = (idx) => {
        setCategoryId(idx+1);
    }

    const checkBeforePost = async() => {
        let user = await API.getSession();
        if (user.role === null){user = null;}
        dispatch(setMember(user));
        if (user == null || user.email == null){
            alert("로그인을 먼저 해야합니다.");
            return false;
        }
        const parser = new DOMParser();
        const postContent = editorInstance.getData();
        const doc = parser.parseFromString(postContent, "text/html");
        const title = doc.querySelector('h1').textContent;
        const detail = postContent.substring(postContent.indexOf("</h1>")+5);
        const data = {
            title: title.trim(),
            content: detail,
            email: user.email,
            category: categories[categoryId-1].id
        }
        if(data.title === ''){
            alert("게시글 제목을 작성해주세요.");
            return false;
        }
        return data;
    }

    const postEdit = async() => {
        const data = await checkBeforePost();
        if (data !== false){
            data.id = posting.id;
            console.log(data);
            const res = await API.editPost(data);
            if (res == null){
                alert("게시글을 수정하는데 실패했습니다.");
                return false;
            }
            alert("게시글을 수정했습니다!");
            navigate(`/post/${posting.id}`);
        }
    }

    const publish = async() => {
        const data = await checkBeforePost();
        if (data !== false){
            const res = await API.writePost(data);
            if (res == null){
                alert("게시글을 업로드하는데 실패했습니다.");
                return false;
            }
            dispatch(setWriting(null));
            alert("게시글을 업로드했습니다!");
            navigate(`/post/${res}`);
        }
    }

    return (
        <div className="postEditor">
            <div className="ck-top-tool" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", fontSize:"0.85em", alignItems:"center"}}>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <label style={{fontWeight:"bold", marginRight:"7px"}}>카테고리</label>
                        <Dropdown id="category">
                            <Dropdown.Toggle style={{backgroundColor:"white", padding:"0.1em 0", color:"black", width:"200px", fontSize:"1em", borderColor:"#7286D3"}}>
                                {categories[categoryId-1]?.name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            {categories.map((data, idx) =>
                                <Dropdown.Item
                                    key={idx}
                                    onClick={() => selectCategory(idx)}
                                >
                                    {data.name}
                                </Dropdown.Item>
                            )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <button className="noEffect ck-publish" onClick={props.edit ? postEdit : publish}>
                    <Plane width="1.3em" height="1.3em" fill="#ffffff" />
                    <span> 발행</span>
                </button>
            </div>
            <CKEditor
                editor={ ClassicEditor }
                config={{...config}}
                onReady={(editor) => {
                    setEditorInstance(editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    if (!props.edit) dispatch(setWriting(data));
                    // setContent(data);
                    // console.log({ event, editor, data });
                }}
            />
            <RestorePost editor={editorInstance} />
        </div>
    );
}

export default Editor;