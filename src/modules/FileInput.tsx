// libraries
import {useEffect, useState} from "react";
import Image from "next/image";
import {useDropzone} from "react-dropzone";
import {LuTrash2} from "react-icons/lu";

// modules
import {IconButton} from "@/modules/IconButton";

// types
import {FileInputType} from "@/types/modules";

const FileInput = ({name, values, onChange, maxFiles = 1, acceptTypes}: FileInputType) => {

    const [files, setFiles] = useState([]);

    const {getRootProps, getInputProps} = useDropzone({
        onDrop: acceptedFiles => {
            // @ts-ignore
            setFiles(prevState => [
                ...prevState,
                ...acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            ]);
            // @ts-ignore
            onChange([...files , ...acceptedFiles]);
        },
        maxFiles: maxFiles,
        accept: acceptTypes
    });

    const _handleDeleteFile = (file: File) => {
        setFiles(prevState => prevState.filter(fileItem => JSON.stringify(fileItem) !== JSON.stringify(file)));
        // @ts-ignore
        onChange(files.filter(item => JSON.stringify(item) !== JSON.stringify(file)));
    }

    useEffect(() => {
        // @ts-ignore
        setFiles(values.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })))
    }, [values]);

    useEffect(() => {
        // @ts-ignore
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <div className="flex flex-col justify-center items-center gap-y-4 w-full">

            <div
                {...getRootProps()}
                className="relative flex justify-center items-center gap-x-4 w-full h-full bg-secondary rounded-lg p-4 cursor-pointer"
            >

                <input
                    {...getInputProps({name: name})}
                    style={{display: "none"}}
                />

                <div className="flex justify-center items-center w-max h-[180px]">

                    <span className="flex flex-col justify-center items-center gap-y-2 text-xs font-bold text-gray">
                        فایل خود انتخاب کنید
                    </span>

                </div>

            </div>

            {
                files.length > 0 && (

                    <div className="flex flex-wrap justify-start items-center gap-4 w-full">

                        {
                            files?.map((file, index) =>

                                <div
                                    key={index}
                                    className='relative w-[120px] h-[120px] rounded-lg overflow-hidden'
                                >

                                    <div
                                        className='absolute top-0 left-0 flex justify-between items-center gap-x-2 w-full p-2'>

                                        <IconButton
                                            variant='contained'
                                            color='red'
                                            size="sm"
                                            onClick={() => _handleDeleteFile(file)}
                                        >
                                            <LuTrash2 size={16}/>
                                        </IconButton>

                                    </div>

                                    <Image
                                        // @ts-ignore
                                        src={file?.preview}
                                        // @ts-ignore
                                        alt={file?.name}
                                        width={120}
                                        height={120}
                                        className="max-w-[120px] w-full h-full object-center object-cover rounded-lg"
                                    />

                                </div>
                            )
                        }

                    </div>
                )
            }

        </div>
    )
}

export default FileInput;