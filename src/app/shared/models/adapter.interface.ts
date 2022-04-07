// Generic Interface for adapter.
export interface Adapter<T> {
    adapt(item: any): T;
}