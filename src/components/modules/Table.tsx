import {useState} from "react";

// libraries
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import SimpleBar from "simplebar-react";
import {LuChevronLeft, LuChevronRight , LuChevronDown , LuChevronUp} from "react-icons/lu";

// styles
import 'simplebar-react/dist/simplebar.min.css';

const TablePaginationActions = ({count, page, rowsPerPage, onPageChange}) => {

    const handleBackButtonClick = (event: any) => onPageChange(event, page - 1);
    const handleNextButtonClick = (event: any) => onPageChange(event, page + 1);

    return (
        <div className="flex justify-center items-center mr-2">

            <button
                onClick={handleBackButtonClick}
                disabled={page === 0}
            >
                <LuChevronRight size={20}/>
            </button>

            <button
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            >
                <LuChevronLeft size={20}/>
            </button>

        </div>
    )
}

const Table = ({data, columns}) => {

    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
        data,
        columns,
        state: {sorting},
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    const {pageSize, pageIndex} = table.getState().pagination;

    return (
        <div className="flex flex-col justify-center items-start w-full gap-4">

            <SimpleBar
                autoHide={false}
                style={{width: "100%", height: 400}}
            >

                <table className="w-full rounded-lg">

                    <thead className="bg-blue rounded-lg">
                    {
                        table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id}>
                                    {
                                        headerGroup.headers.map(header => (
                                                <th
                                                    key={header.id}
                                                    className="p-2"
                                                    style={{
                                                        minWidth: header.column.columnDef?.width,
                                                        maxWidth: header.column.columnDef?.width,
                                                        width: header.column.columnDef?.width,
                                                    }}
                                                >
                                                    <div
                                                        className={`flex justify-start items-center ${header.column.getCanSort() ? "cursor-pointer" : "cursor-default"}`}
                                                        {...{onClick: header.column.getToggleSortingHandler()}}
                                                    >

                                                        {
                                                            header.isPlaceholder ? null : flexRender(
                                                                header.column.columnDef.header,
                                                                header.getContext()
                                                            )
                                                        }
                                                        {
                                                            {
                                                                asc: <LuChevronUp
                                                                    size={16}
                                                                    className="text-light mr-2"
                                                                />,
                                                                desc: <LuChevronDown
                                                                    size={16}
                                                                    className="text-light mr-2"
                                                                />,
                                                            }
                                                                [header.column.getIsSorted() as string] ?? null
                                                        }
                                                    </div>
                                                </th>
                                            )
                                        )
                                    }
                                </tr>
                            )
                        )
                    }
                    </thead>

                    <tbody>
                    {
                        table.getRowModel().rows.map(row => (
                                <tr key={row.id}>
                                    {
                                        row.getVisibleCells().map(cell => (
                                                <td
                                                    key={cell.id}
                                                    className="p-2"
                                                >
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </td>
                                            )
                                        )
                                    }
                                </tr>
                            )
                        )
                    }
                    </tbody>

                </table>

            </SimpleBar>

            {/*<TablePagination*/}
            {/*    labelRowsPerPage="نمایش :"*/}
            {/*    labelDisplayedRows={({from, to, count}) => `${count} / ${from}-${to}`}*/}
            {/*    rowsPerPageOptions={[5, 10, 15]}*/}
            {/*    component="div"*/}
            {/*    count={table.getFilteredRowModel().rows.length}*/}
            {/*    rowsPerPage={pageSize}*/}
            {/*    page={pageIndex}*/}
            {/*    showFirstButton={false}*/}
            {/*    showLastButton={false}*/}
            {/*    SelectProps={{*/}
            {/*        IconComponent: FiChevronDown,*/}
            {/*        variant: "outlined",*/}
            {/*        size: "small",*/}
            {/*        MenuProps: {*/}
            {/*            elevation: 2*/}
            {/*        }*/}
            {/*    }}*/}
            {/*    onPageChange={(_, page) => table.setPageIndex(page)}*/}
            {/*    onRowsPerPageChange={e => {*/}
            {/*        const size = e.target.value ? Number(e.target.value) : 10*/}
            {/*        table.setPageSize(size)*/}
            {/*    }}*/}
            {/*    ActionsComponent={TablePaginationActions}*/}
            {/*/>*/}

        </div>
    )
}

export default Table;