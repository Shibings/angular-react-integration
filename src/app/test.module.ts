import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { registerElement } from '@angular-react/core';
import { MyComponent } from './MyComponent';


class TestComponent {
    static decorators: any;
    static propDecorators: {};
    name: string;
    constructor() {
        this.name = 'John';
    }

    onClick(){
        console.info('Update from React!!');
    }
}

TestComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-component',
                exportAs: 'myComponent',
                template: `
                    <MyComponent [name]="name" (onClick)="onClick($event)"></MyComponent>
                `,
                styles: [
                    'react-renderer',
                    ':host { display: inline-block; background: red; }'
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: { 'class': 'my-component' }
            },] },
];
TestComponent.propDecorators = {
    name: [{ type: Input }],
    "onClick": [{ type: Output },],
};

const components = [
    TestComponent,
];
class TestModule {
    static decorators: any;
    static ctorParameters: () => any[];
    constructor() {
        registerElement('MyComponent', () => MyComponent);
    }
}
TestModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: components,
                exports: components,
                schemas: [NO_ERRORS_SCHEMA]
            },] },
];
TestModule.ctorParameters = () => [];

export { TestModule, TestComponent };
