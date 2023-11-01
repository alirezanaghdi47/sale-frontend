// libraries
import {useEffect, useState} from "react";
import Image from "next/image";
import {useDropzone} from "react-dropzone";
import {LuCamera} from "react-icons/lu";

const AvatarInput = ({name, value, preview, onChange}) => {

    const [file, setFile] = useState({});

    const {getRootProps, getInputProps} = useDropzone({
        onDrop: (acceptedFiles) => {
            setFile(Object.assign(acceptedFiles[0], {
                preview: URL.createObjectURL(acceptedFiles[0])
            }));
            onChange(acceptedFiles[0]);
        },
    });

    useEffect(() => {
        return () => URL.revokeObjectURL(file.preview);
    }, [file]);

    return (
        <label
            {...getRootProps()}
            className="relative flex justify-center items-center w-[120px] h-[120px] bg-secondary rounded-lg p-4 overflow-hidden cursor-pointer"
        >

            <input
                {...getInputProps({name: name})}
                style={{display: "none"}}
            />

            {
                (file?.preview || preview) ? (
                    <Image
                        src={file?.preview ? file?.preview : preview}
                        alt="avatar"
                        width={100}
                        height={100}
                        className="w-[calc(120px_-_16px)] h-[calc(120px_-_16px)] object-center object-cover rounded-lg"
                    />
                ) : (
                    <span className="text-gray">
                        <LuCamera size={32}/>
                    </span>
                )
            }

        </label>
    )
}

export default AvatarInput;