'use client';

// libraries
import Dialog from "rc-dialog";

const ProfileModal = ({isOpenModal , onCloseModal}) => {

    return (
        <Dialog
            visible={isOpenModal}
            onClose={onCloseModal}
            mask={false}
        >

            <div
                className="fixed top-0 left-0 z-30 flex justify-start items-start md:justify-center md:items-center w-full h-full bg-gray/75 md:p-4"
                onClick={onCloseModal}
            >

                <div
                    className="flex flex-col justify-start items-center gap-y-4 w-full h-full md:max-w-md md:h-max bg-light md:rounded-lg p-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    profile
                </div>

            </div>

        </Dialog>
    )
}

export default ProfileModal;