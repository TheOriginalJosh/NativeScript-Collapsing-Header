import { AbsoluteLayout } from 'ui/layouts/absolute-layout';
import { AddChildFromBuilder } from 'ui/core/view';
import { StackLayout } from 'ui/layouts/stack-layout';
import { ListView } from 'ui/list-view';
export declare class Header extends StackLayout {
    private _dropShadow;
    dropShadow: boolean;
    constructor();
}
export declare class Content extends StackLayout {
}
export declare class ListViewContent extends ListView {
}
export interface IMinimumHeights {
    portrait: number;
    landscape: number;
}
export declare class CollapsingHeader extends AbsoluteLayout implements AddChildFromBuilder {
    header: Header;
    content: Content;
    private _childLayouts;
    private _topOpacity;
    private _loaded;
    private _minimumHeights;
    private _statusBarBackgroundColor;
    statusIosBarBackgroundColor: string;
    android: any;
    ios: any;
    constructor();
    private constructView();
    _addChildFromBuilder: (name: string, value: any) => void;
}
