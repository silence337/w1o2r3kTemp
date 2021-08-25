import React, { useState, useEffect } from "react";
// useState, useRef, useEffect 등 은 hooks 방식으로(함수형으로 사용) class 방식에서는 적용되지 않음.

const Ex = () => {
    const [count, setCount] = useState(0);
    const [files, setFiles] = useState([]);

    const addCount = () => {
        setCount(count + 1);
    };

    const onChange = (e) => {
        let efiles = e.target.files;
        let filesArr = Array.prototype.slice.call(efiles);
        setFiles((efiles) => [...efiles, ...filesArr]);
        e.target.value = "";
    };

    useEffect(() => {
        console.log(files);
        return () => {
            //console.log("I'm dying...");
        };
    }, [files]);

    const removeFile = (name) => {
        setFiles(files.filter((item) => item.name !== name));
    };

    return (
        <div>
            <p>
                {`count: ${count}`} &nbsp;
                <button onClick={addCount}>+</button>
            </p>

            <label className="custom-file-upload">
                <input type="file" multiple onChange={onChange} />
                <i className="fa fa-cloud-upload" /> Attach
            </label>

            {files.map((item) => (
                <div className="file-preview" key={item.name}>
                    {item.name}
                    <button type="button" onClick={() => removeFile(item.name)}>
                        삭제
                    </button>
                </div>
            ))}
        </div>
    );
};
export default Ex;
