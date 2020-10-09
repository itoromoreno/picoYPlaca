export default interface Response {
    success: boolean;
    response?: boolean;
    error?: {
        code: number;
        errorMessage: string;
    }
}
