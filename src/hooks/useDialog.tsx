// libraries
import {useState} from "react";

export const useDialog = () => {

    const [showDialog, setShowDialog] = useState(false);

    const isOpenDialog = showDialog;

    const _handleShowDialog = () => setShowDialog(true);

    const _handleHideDialog = () => setShowDialog(false);

    return {isOpenDialog, _handleShowDialog, _handleHideDialog};
}

