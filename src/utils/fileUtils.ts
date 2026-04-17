
export const fileToBase64 = (file: File): Promise<{ base64: string, mimeType: string }> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            // The result includes the data URL prefix (e.g., "data:image/png;base64,"),
            // which we need to strip off to get just the base64 data.
            const base64 = result.split(',')[1];
            if (base64) {
                 resolve({ base64, mimeType: file.type });
            } else {
                reject(new Error("Failed to read file as base64."));
            }
        };
        reader.onerror = error => reject(error);
    });
};
