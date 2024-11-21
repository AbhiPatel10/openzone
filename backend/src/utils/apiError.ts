export class ApiError extends Error {
    status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

export const handleErrors = (err: any, req: any, res: any, next: any) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ error: message });
};
