import { useCallback, useEffect, useRef, useState } from 'react';

interface UseFileUploadProps {
  onUpload?: (file: File | null) => void;
  accept?: string;
}

function useFileUpload({ onUpload, accept }: UseFileUploadProps = {}) {
  const previewRef = useRef<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleUploadClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) {
        setFile(selectedFile);
        setFileName(selectedFile.name);

        // Only create object URL for images or if needed for preview
        const url = URL.createObjectURL(selectedFile);
        setPreviewUrl(url);
        previewRef.current = url;

        onUpload?.(selectedFile);
      }
    },
    [onUpload]
  );

  const handleRemove = useCallback(() => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setFile(null);
    setPreviewUrl(null);
    setFileName(null);
    previewRef.current = null;
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onUpload?.(null);
  }, [previewUrl, onUpload]);

  useEffect(() => {
    return () => {
      if (previewRef.current) {
        URL.revokeObjectURL(previewRef.current);
      }
    };
  }, []);

  return {
    file,
    previewUrl,
    fileName,
    fileInputRef,
    accept,
    handleUploadClick,
    handleThumbnailClick: handleUploadClick,
    handleFileChange,
    handleRemove,
  };
}

export default useFileUpload;
