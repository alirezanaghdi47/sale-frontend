'use client';

// libraries
import {LuCheck, LuTrash, LuX} from "react-icons/lu";

// components
import {Dialog, DialogBody, DialogFooter} from "@/components/modules/Dialog";
import {Button} from "@/components/modules/Button";

const DeleteAdvertiseDialog = ({isOpenDialog, onCloseDialog, onDelete}) => {

    return (
        <Dialog
            isOpenDialog={isOpenDialog}
            onCloseDialog={onCloseDialog}
        >

            <DialogBody>

                <span className="bg-red/25 text-red rounded-lg p-2">
                    <LuTrash
                        size={32}
                        className="text-current"
                    />
                </span>

                <h3 className="text-base font-bold text-gray">
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
                                size={20}
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
                                size={20}
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