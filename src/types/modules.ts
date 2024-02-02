// libraries
import React from "react";

export type AccordionType = {
    children: React.ReactNode
}

export type AccordionItemType = {
    children: React.ReactNode,
    header: string,
    icon?: React.ReactNode,
    initialEntered?: boolean
}

export type AlertType = {
    message: string,
    color: "red" | "blue",
    actionButton: React.ReactNode
}

export type AvatarInputType = {
    name: string,
    value: File | null,
    onChange: (data: File) => any,
    preview: string | null
}

export type ButtonType = {
    children: React.ReactNode,
    as?: "button" | "span",
    color: "red" | "green" | "blue" | "yellow" | "light" | "secondary" | "dark" | "gray"
    size?: "sm" | "md" | "lg" | "full",
    variant: "contained" | "text",
    justify?: "start" | "center" | "end",
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    onClick?: () => void,
    vertical?: boolean,
    disabled?: boolean,
    href?: string
}

export type CheckBoxType = {
    name: string,
    value: string,
    checked: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any,
}

export type DialogType = {
    children: React.ReactNode,
    isOpenDialog: boolean,
    onCloseDialog: () => void,
}

export type DialogBodyType = {
    children: React.ReactNode,
}

export type DialogFooterType = {
    cancelButton: React.ReactNode,
    submitButton: React.ReactNode,
}

export type FileInputType = {
    name: string,
    values: any,
    onChange: (data: File) => any,
    maxFiles: number,
    acceptTypes: any
}

export type IconButtonType = {
    children: React.ReactNode,
    color: "red" | "blue" | "yellow" | "light" | "secondary" | "gray",
    size?: "sm" | "md" | "lg",
    variant: "contained" | "text",
    shape?: "rounded" | "circle",
    onClick?: () => void,
    href?: string
}

export type MenuType = {
    children: React.ReactNode,
    menuButton: React.ReactNode,
    arrow?: boolean,
    align: 'start' | 'center' | 'end',
    direction: 'left' | 'right' | 'top' | 'bottom'
}

export type MenuItemType = {
    children: React.ReactNode,
    color: "red" | "green" | "blue" | "yellow" | "light" | "secondary" | "gray",
    size?: "sm" | "md" | "lg" | "full",
    variant: "contained" | "text",
    onClick?: () => void,
    href?: string,
    icon: React.ReactNode
}

export type ModalType = {
    children: React.ReactNode,
    isOpenModal: boolean,
    onCloseModal: () => void,
    width?: "sm" | "md" | "lg" | "full",
    height?: "content" | "full",
    position?: "any" | "center" | "bottom"
}

export type ModalHeaderType = {
    title: string,
    onCloseModal: () => void
}

export type ModalBodyType = {
    children: React.ReactNode,
    center?: boolean,
    className?: string
}

export type ModalFooterType = {
    cancelButton: React.ReactNode,
    submitButton: React.ReactNode,
}

export type NumberInputType = {
    name: string,
    value: number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
    placeholder?: string,
    disabled?: boolean,
    options: any
}

export type PaginationType = {
    pageCount: number,
    pageSize: number,
    currentPage: number,
    onChange: (data: number) => void
}

export type PasswordInputType = {
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any,
    placeholder?: string,
    startIcon?: React.ReactNode,
}

export type RadioBoxType = {
    name: string,
    value: string,
    checked: boolean,
    onChange: (e: React.FormEvent<HTMLInputElement>) => any
}

export type RangeInputType = {
    min: number,
    max: number,
    step: number,
    values: [number, number],
    onChange: (data: number[] | number) => void
}

export type SearchInputType = {
    name: string,
    placeholder?: string,
    value: string,
    onChange: (data: any) => any,
    onSubmit?: () => void
}

export type SelectBoxType = {
    name: string,
    placeholder?: string,
    value?: {
        id: string | number,
        label: string,
        value: string | number
    },
    options: {
        id: string | number,
        label: string,
        value: string | number
    }[],
    onChange: (e: React.FormEvent<HTMLInputElement>) => any,
    isMulti?: boolean,
    isClearable?: boolean,
    isSearchable?: boolean
}

export type StepperType = {
    step: number,
    stepList: {
        id: number,
        title: string
    }[]
}

export type StepperItemType = {
    step: number,
    stepItem: {
        id: number,
        title: string,
        number: number
    }
}

export type SwitchBoxType = {
    name: string,
    value: string,
    checked: boolean,
    onChange: (e: React.FormEvent<HTMLInputElement>) => any
}

export type TabsType = {
    children: React.ReactNode
}

export type TabsListType = {
    children: React.ReactNode
}

export type TabsItemType = {
    tabItem: {
        title: string,
        value: string,
        icon: React.ReactNode
    },
    activeTab: string,
    setActiveTab: (data: string) => void
}

export type TextAreaType = {
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => any,
    placeholder?: string,
    rows?: number
}

export type TextInputType = {
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any,
    placeholder?: string,
    disabled?: boolean,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    readOnly?: boolean
}

export type FadeTransitionType = {
    children: React.ReactNode,
    active: boolean
}