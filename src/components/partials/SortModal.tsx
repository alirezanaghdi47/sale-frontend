'use client';

// libraries
import {useMediaQuery} from "@react-hooks-library/core";

// modules
import {Modal , ModalHeader , ModalBody} from "@/modules/Modal";
import RadioBox from "@/modules/RadioBox";

//types
import {SortModalType} from "@/types/components";

// utils
import {sortList} from "@/utils/constants";

const SortModal = ({sort , _handleChangeSort , isOpenModal, onCloseModal}: SortModalType) => {

    const isTablet = useMediaQuery("(min-width: 768px)");

    return (
        <Modal
            isOpenModal={isOpenModal}
            onCloseModal={onCloseModal}
            width={isTablet ? "lg" : "full"}
            position={isTablet ? "center" : "bottom"}
        >

            <ModalHeader
                title="مرتب سازی"
                onCloseModal={onCloseModal}
            />

            <ModalBody>

                {
                    sortList?.map(sortItem =>
                        <label
                            key={sortItem?.id}
                            htmlFor={`radiobox-${sortItem?.value}`}
                            className="flex justify-start items-center gap-x-2 w-full cursor-pointer"
                        >

                            <RadioBox
                                name="sort"
                                value={sortItem?.value}
                                checked={sortItem?.value === sort}
                                onChange={(value: any) => _handleChangeSort(value)}
                            />

                            <span className="text-xs text-dark">
                                {sortItem?.label}
                            </span>

                        </label>
                    )
                }

            </ModalBody>

        </Modal>
    )
}

export default SortModal;