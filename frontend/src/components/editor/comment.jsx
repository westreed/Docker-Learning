import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage.js';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties.js';
import Mention from '@ckeditor/ckeditor5-mention/src/mention.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';
import FileRepository from "@ckeditor/ckeditor5-upload/src/filerepository";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const editorConfig = {
    language: "ko",
    placeholder : "댓글을 남길 수 있어요.",
    mediaEmbed: {
        previewsInData: true
    },
    plugins: [
        Paragraph,
        Autoformat,
        AutoImage,
        AutoLink,
        Bold,
        Code,
        CodeBlock,
        Essentials,
        FontBackgroundColor,
        FontColor,
        Highlight,
        Image,
        ImageCaption,
        ImageInsert,
        ImageResize,
        ImageStyle,
        ImageToolbar,
        ImageUpload,
        Italic,
        Link,
        LinkImage,
        List,
        ListProperties,
        Mention,
        SourceEditing,
        Strikethrough,
        TextTransformation,
        Underline,
        WordCount,
        FileRepository
    ],
    extraPlugins: [],
    toolbar: {
        items: [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'code',
            'codeBlock',
            '|',
            'link',
            'imageUpload',
            '|',
            'undo',
            'redo',
        ],
        shouldNotGroupWhenFull: true
    },
    fontSize: {
        options: [
            14,
            15,
            16,
            18,
            20,
            24,
            26
        ],
    },
    image: {
        resizeUnit: "px",
        toolbar: [
            "imageStyle:alignLeft",
            // "imageStyle:full",
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
    }
}


const Comment = (props) => {
    const member = useSelector((state) => state.member.data);
    const [word, setWord] = useState(0);
    const buttonRef = useRef(null);
    const wordCountRef = useRef(null);
    const maxWordCount = 3000;

    const config = editorConfig;
    useEffect(() => {
        if (window.innerWidth > 768){ config.toolbar.shouldNotGroupWhenFull = true; }
        else{ config.toolbar.shouldNotGroupWhenFull = false; }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const notLoginComment = () => {
        return (
            <div style={{fontSize:"0.9em", color:"gray"}}>
                로그인을 하시면,<br/>게시글에 댓글을 남길 수 있어요. :P
            </div>
        );
    }

    const LoginComment = () => {
        return (
            <div style={{maxWidth:"842px"}}>
                <div className="commentName" style={{fontWeight:"bold", fontSize:"0.9em"}}>
                {member?.username}
                </div>
                <CKEditor
                    editor={ BalloonEditor }
                    config={{...config}}
                    onReady={(editor) => {
                        if(props.setEditorInstance !== null) props.setEditorInstance(editor);
                        else if(props.getContent != null) editor.setData(props.getContent);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        props.setContent(data);
                        const wordcount = editor.plugins.get('WordCount').characters;
                        if (maxWordCount < wordcount){
                            wordCountRef.current.style.color = "red";
                            buttonRef.current.disabled = true;
                            buttonRef.current.textContent = "등록할 수 없습니다.";
                            buttonRef.current.style.color = "gray";
                        }
                        else{
                            wordCountRef.current.style.color = "gray";
                            buttonRef.current.disabled = false;
                            buttonRef.current.textContent = props.flag === false ? "등록" : "수정";
                            buttonRef.current.style.color = "#7286D3";
                        }
                        setWord(wordcount);
                    }}
                />
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                    <div ref={wordCountRef} className="notDrag" style={{fontSize:"0.8em", color:"gray", pointerEvents:"none"}}>{word} / {maxWordCount}</div>
                    <div>
                        {props.reply != null ? <button className="noEffect useButton2" style={{fontSize:"0.9em", color:"gray"}} onClick={() => props.setReply(null)}>취소</button> : null}
                        <button ref={buttonRef} className="noEffect useButton2" style={{fontSize:"0.9em", color:"#7286D3"}} onClick={() => props.flag === false ? props.writeReply(props.reply?.id) : props.editReply(props.id ,props.reply?.id)}>{props.flag === false ? "등록" : "수정"}</button>
                    </div>
                </div>
            </div>
        );
    }
    // maxWidth:"678px"
    return (
        <div className="commentEditor" style={{padding:"1em", border:"2px solid #e5e5e5", borderRadius:"5px"}}>
            {member != null ? LoginComment() : notLoginComment()}
        </div>
    );
}

export default Comment;