import hotkeys, { KeyHandler } from 'hotkeys-js';
import React from 'react';
declare type AvailableTags = 'INPUT' | 'TEXTAREA' | 'SELECT';
export declare type Options = {
    filter?: typeof hotkeys.filter;
    enableOnTags?: AvailableTags[];
    splitKey?: string;
    scope?: string;
    keyup?: boolean;
    keydown?: boolean;
};
export declare function useHotkeys<T extends Element>(keys: string, callback: KeyHandler, options?: Options): React.MutableRefObject<T | null>;
export declare function useHotkeys<T extends Element>(keys: string, callback: KeyHandler, deps?: any[]): React.MutableRefObject<T | null>;
export declare function useHotkeys<T extends Element>(keys: string, callback: KeyHandler, options?: Options, deps?: any[]): React.MutableRefObject<T | null>;
export {};
