declare namespace IApp {
    export interface IAsset {
        Id?: string;
        Title: string;
        Owner: string;
        Value: number;
        Status: string;
    }

    export interface IOrder {
        Id?: string;
        ParentId: string;
        Title: string;
        Owner: string;
        Value: number;
        Status: string;
    }
}