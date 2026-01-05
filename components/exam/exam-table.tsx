'use client';

import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { ExamPagination } from '@/components/exam/pagination';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon, FilterIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ColumnDef<T> {
    header: string;
    accessorKey?: keyof T;
    cell?: (item: T) => React.ReactNode;
    className?: string;
    headerClassName?: string;
    align?: 'left' | 'center' | 'right';
}

interface ExamDataTableProps<T> {
    data: T[];
    columns: ColumnDef<T>[];
    searchPlaceholder?: string;
    onSearch?: (value: string) => void;
    showFilter?: boolean;
    onFilterClick?: () => void;
    filter?: React.ReactNode;
    extraActions?: React.ReactNode;
    isLoading?: boolean;
    searchValue?: string;
    pagination?: {
        currentPage: number;
        totalPages: number;
        onPageChange: (page: number) => void;
    };
    className?: string;
    containerClassName?: string;
}

export function ExamDataTable<T>({
    data,
    columns,
    searchPlaceholder = "Cari data...",
    onSearch,
    showFilter = false,
    onFilterClick,
    filter,
    extraActions,
    isLoading = false,
    searchValue = '',
    pagination,
    className,
    containerClassName,
}: ExamDataTableProps<T>) {
    const [localSearch, setLocalSearch] = React.useState(searchValue);

    // Sync local search with external prop
    React.useEffect(() => {
        setLocalSearch(searchValue);
    }, [searchValue]);

    // Handle internal debouncing
    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (localSearch !== searchValue) {
                onSearch?.(localSearch);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [localSearch, onSearch, searchValue]);

    const handleSearchChange = (value: string) => {
        setLocalSearch(value);
    };

    return (
        <div className={cn("bg-white rounded-xl border border-slate-100 shadow-sm shadow-slate-200/50 overflow-hidden", containerClassName)}>
            {/* Toolbar */}
            <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex gap-2 w-full sm:w-auto">
                    {onSearch && (
                        <div className="relative w-full sm:w-64">
                            <SearchIcon className="absolute left-3 top-2.5 size-4 text-slate-400" />
                            <Input
                                placeholder={searchPlaceholder}
                                value={localSearch}
                                className="flex h-10 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm pl-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 transition-shadow"
                                onChange={(e) => handleSearchChange(e.target.value)}
                            />
                        </div>
                    )}
                </div>
                <div className="flex gap-2 ml-auto items-center">
                    {filter ? (
                        filter
                    ) : (
                        showFilter && (
                            <Button
                                variant="outline"
                                onClick={onFilterClick}
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 h-10 px-4 py-2 border border-slate-200 bg-white text-slate-700 hover:bg-primary-50 hover:text-primary-900 hover:border-primary-100"
                            >
                                <FilterIcon className="mr-2 size-4" /> Filter
                            </Button>
                        )
                    )}
                    {extraActions}
                </div>
            </div>

            {/* Table */}
            <div className={cn(
                "relative w-full overflow-auto border border-slate-100 rounded-xl transition-all duration-300",
                isLoading && "min-h-[320px]"
            )}>
                {isLoading && (
                    <div className="absolute inset-x-0 bottom-0 top-[49px] z-10 bg-white/60 backdrop-blur-[1px] flex items-center justify-center">
                        <div className="flex flex-col items-center gap-2">
                            <div className="size-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
                            <span className="text-xs text-slate-500 font-medium">Memuat data...</span>
                        </div>
                    </div>
                )}
                <Table className={cn("w-full caption-bottom text-sm text-left", className)}>
                    <TableHeader className="bg-slate-50 sticky top-0 z-20 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
                        <TableRow className="border-b border-slate-100 hover:bg-transparent">
                            {columns.map((column, idx) => (
                                <TableHead
                                    key={idx}
                                    className={cn(
                                        "h-12 px-6 align-middle font-semibold text-slate-900",
                                        column.align === 'right' && "text-right",
                                        column.align === 'center' && "text-center",
                                        column.headerClassName
                                    )}
                                >
                                    {column.header}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.length > 0 ? (
                            data.map((item, rowIdx) => (
                                <TableRow
                                    key={rowIdx}
                                    className={cn(
                                        "border-b border-slate-100 transition-colors hover:bg-slate-50/80",
                                        isLoading && "opacity-50"
                                    )}
                                >
                                    {columns.map((column, colIdx) => (
                                        <TableCell
                                            key={colIdx}
                                            className={cn(
                                                "p-4 px-6 align-middle",
                                                column.align === 'right' && "text-right",
                                                column.align === 'center' && "text-center",
                                                column.className
                                            )}
                                        >
                                            {column.cell
                                                ? column.cell(item)
                                                : column.accessorKey
                                                    ? (item[column.accessorKey] as React.ReactNode)
                                                    : null
                                            }
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : !isLoading && (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-32 text-center text-slate-500">
                                    <div className="flex flex-col items-center gap-2 text-slate-400">
                                        <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center">
                                            <SearchIcon className="size-6" />
                                        </div>
                                        <p className="text-sm">Data tidak ditemukan.</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            {pagination && (
                <div className="p-6 border-t border-slate-50">
                    <ExamPagination
                        currentPage={pagination.currentPage}
                        totalPages={pagination.totalPages}
                        onPageChange={pagination.onPageChange}
                    />
                </div>
            )}
        </div>
    );
}
