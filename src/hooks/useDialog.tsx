// libraries
import {useState} from "react";

export const useDialog = () => {

    const [dialogData, setDialogData] = useState(null);
    const [showDialog, setShowDialog] = useState(false);

    const isOpenDialog = showDialog;

    const _handleShowDialog = (data) => {
        setShowDialog(true);
        setDialogData(data ?? dialogData);
    }

    const _handleHideDialog = () => setShowDialog(false);

    return {isOpenDialog, _handleShowDialog, _handleHideDialog , dialogData};
}

