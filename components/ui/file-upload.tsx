import { X, Upload, Trash2, FileIcon, CloudUpload, Loader2 } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Input } from "./input";

interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
    title?: string;
    description?: string;
    previewUrl?: string | null;
    fileName?: string | null;
    file?: File | null;
    onRemove?: (e: React.MouseEvent) => void;
    fileInputRef?: React.RefObject<HTMLInputElement | null>;
    handleThumbnailClick?: () => void;
    isLoading?: boolean;
}

export const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
    (
        {
            title = "Klik untuk upload",
            description = "SVG, PNG, JPG (MAX. 2MB)",
            className,
            previewUrl,
            fileName,
            file,
            onRemove,
            fileInputRef: externalRef,
            handleThumbnailClick: externalClick,
            isLoading,
            ...props
        },
        ref
    ) => {
        const internalRef = useRef<HTMLInputElement>(null);
        const fileInputRef = (ref as React.RefObject<HTMLInputElement>) || externalRef || internalRef;

        const [isDragging, setIsDragging] = useState(false);
        const [hasError, setHasError] = useState(false);

        const handleThumbnailClick = () => {
            if (externalClick) {
                externalClick();
            } else {
                fileInputRef.current?.click();
            }
        };

        const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();
        };

        const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(true);
        };

        const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);
        };

        const handleDrop = useCallback(
            (e: React.DragEvent<HTMLDivElement>) => {
                e.preventDefault();
                e.stopPropagation();
                setIsDragging(false);

                const file = e.dataTransfer.files?.[0];
                if (file) {
                    const fakeEvent = {
                        target: {
                            files: [file],
                        },
                    } as unknown as React.ChangeEvent<HTMLInputElement>;
                    if (props.onChange) {
                        props.onChange(fakeEvent);
                    }
                }
            },
            [props.onChange]
        );

        // Reset error state when file changes
        React.useEffect(() => {
            setHasError(false);
        }, [file]);

        return (
            <div className={cn("w-full relative", className)}>

                <Input
                    type="file"
                    className="hidden"
                    ref={fileInputRef}
                    {...props}
                />

                {!previewUrl && !fileName ? (
                    <div
                        onClick={handleThumbnailClick}
                        onDragOver={handleDragOver}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={cn(
                            "flex h-32 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 transition-colors hover:bg-slate-100",
                            isDragging && "border-primary/50 bg-primary/5"
                        )}
                    >
                        <div className="text-slate-400">
                            <CloudUpload className="h-8 w-8" />
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-slate-500">
                                <span className="font-semibold">{title}</span> atau drag and drop
                            </p>
                            <p className="text-xs text-slate-500">{description}</p>
                        </div>
                    </div>
                ) : (
                    <div className="relative">
                        <div className="group relative h-32 overflow-hidden rounded-lg border bg-muted/20">
                            {previewUrl && file?.type.startsWith("image/") && !hasError ? (
                                <Image
                                    src={previewUrl}
                                    alt="Preview"
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    onError={() => setHasError(true)}
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center">
                                    <FileIcon className="h-16 w-16 text-muted-foreground/50" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />
                            <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                                <Button
                                    size="sm"
                                    variant="secondary"
                                    onClick={handleThumbnailClick}
                                    className="h-9 w-9 p-0"
                                >
                                    <Upload className="h-4 w-4" />
                                </Button>
                                <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={onRemove}
                                    className="h-9 w-9 p-0"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        {fileName && (
                            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                                <span className="truncate font-medium">{fileName}</span>
                                <button
                                    onClick={onRemove}
                                    className="ml-auto rounded-full p-1 hover:bg-muted transition-colors"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {isLoading && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center rounded-lg bg-background/60 backdrop-blur-[1px]">
                        <div className="flex flex-col items-center gap-2">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                            <p className="text-xs font-medium text-muted-foreground text-slate-500">Mengunggah...</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
);

FileUpload.displayName = "FileUpload";
