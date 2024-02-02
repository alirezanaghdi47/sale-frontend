'use client';

// libraries
import {LuCheck, LuTrash, LuX} from "react-icons/lu";

// modules
import {Dialog, DialogBody, DialogFooter} from "@/modules/Dialog";
import {Button} from "@/modules/Button";

// types
import {DeleteAdvertiseDialogType} from "@/types/components"; 

const DeleteAdvertiseDialog = ({isOpenDialog, onCloseDialog, onDelete}: DeleteAdvertiseDialogType) => {

    return (
        <Dialog
            isOpenDialog={isOpenDialog}
            onCloseDialog={onCloseDialog}
        >

            <DialogBody>

                <span className="bg-red/25 text-red rounded-lg p-2">
                    <LuTrash
                        size={24}
                        className="text-current"
                    />
                </span>

                <h3 className="text-sm font-bold text-gray">
                    آیا آگهی مورد نظر حذف شود ؟
                </h3>

            </DialogBody>

            <DialogFooter
                cancelButton={
                    <Button
                        variant="text"
                        color="gray"
                        startIcon={
                            <LuX
                                size={16}
                                className="text-current"
                            />
                        }
                        onClick={onCloseDialog}
                    >
                        انصراف
                    </Button>
                }
                submitButton={
                    <Button
                        variant="contained"
                        color="red"
                        startIcon={
                            <LuCheck
                                size={16}
                                className="text-current"
                            />
                        }
                        onClick={onDelete}
                    >
                        حذف
                    </Button>
                }
            />

        </Dialog>
    )
}

export default DeleteAdvertiseDialog;