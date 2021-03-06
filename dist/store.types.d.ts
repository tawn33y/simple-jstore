export interface Store {
    get: (key: string) => any;
    set: (key: string, data: any) => void;
    del: (key: string) => void;
}
export interface FreeFormObject {
    [key: string]: any;
}
