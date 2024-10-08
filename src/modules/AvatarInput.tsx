// libraries
import {useEffect, useState} from "react";
import Image from "next/image";
import {useDropzone} from "react-dropzone";
import {LuCamera} from "react-icons/lu";

// types
import {AvatarInputType} from "@/types/modules";

const AvatarInput = ({name, value, preview, onChange}: AvatarInputType) => {

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
        // @ts-ignore
        return () => URL.revokeObjectURL(file.preview);
    }, [file]);

    return (
        <div
            {...getRootProps()}
            className="relative flex justify-center items-center w-[120px] h-[120px] bg-secondary rounded-full p-2 cursor-pointer"
        >

            <input
                {...getInputProps({name: name})}
                style={{display: "none"}}
            />

            {
                // @ts-ignore
                (file?.preview || preview) ? (
                    <Image
                        // @ts-ignore
                        src={file?.preview ? file?.preview : preview}
                        alt="avatar"
                        width={120}
                        height={120}
                        className="w-full h-full object-center object-cover rounded-full overflow-hidden"
                    />
                ) : (
                    <span className="text-gray">
                        <LuCamera size={32}/>
                    </span>
                )
            }

        </div>
    )
}

export default AvatarInput;