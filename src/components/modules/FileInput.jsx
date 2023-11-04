// libraries
import {useEffect, useState} from "react";
import Image from "next/image";
import {useDropzone} from "react-dropzone";
import {LuImage} from "react-icons/lu";

const FileInput = ({name, value, onChange, count = 1}) => {

    const [files, setFiles] = useState([]);

    const {getRootProps, getInputProps} = useDropzone({
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
            onChange(acceptedFiles);
        },
        maxFiles: count
    });

    useEffect(() => {
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <div
            {...getRootProps()}
            className="relative flex justify-center items-center gap-x-4 w-full h-full bg-secondary rounded-lg p-4 cursor-pointer"
        >

            <input
                {...getInputProps({name: name})}
                style={{display: "none"}}
            />

            {
                files.length === 0 && (
                    <div className="flex justify-center items-center w-max h-[120px]">
                        <span className="flex flex-col justify-center items-center gap-y-2 text-sm font-bold text-gray">
                            <LuImage size={32}/>
                            {count === 1 ? "یک مورد انتخاب کنید" : "چندین مورد انتخاب کنید"}
                        </span>
                    </div>
                )
            }

            {
                files.length > 0 && (

                    <div className={`flex flex-wrap ${count === 1 ? "justify-center" : "justify-start"} items-center gap-4 w-full`}>

                        {
                            files?.map(file =>
                                <Image
                                    src={file?.preview}
                                    alt="avatar"
                                    width={120}
                                    height={120}
                                    className="w-[120px] h-[120px] object-center object-cover rounded-lg overflow-hidden"
                                />
                            )
                        }

                    </div>
                )
            }

        </div>
    )
}

export default FileInput;