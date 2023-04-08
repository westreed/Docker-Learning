import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loading = () => {
    return (
        <div
            style={{
                display:"flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems:"center",
                marginTop:"3em",
                marginBottom:"3em"
            }}
        >
            <PuffLoader
                color="#3273dc"
                size={50}
            />
            <div
                style={{
                    fontSize:"0.9em",
                    marginTop:"0.5em"
                }}
            >데이터를 불러오고 있어요..</div>
        </div>
    );
}

export default Loading;