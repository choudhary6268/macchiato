import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepperModule } from 'primeng/stepper';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'app-stepper-demo',
    standalone: true,
    imports: [CommonModule, ButtonModule, ButtonGroupModule, SplitButtonModule, StepperModule, AccordionModule, TableModule, TagModule],
    template: `<div class="flex flex-col md:flex-row gap-8">
        <div class="md">
            <div class="card flex flex-col gap-4">
            <p-stepper [value]="1" class="basis-[50rem]">
                <p-step-list>
                    <p-step [value]="1">Calculating</p-step>
                    <p-step [value]="2">Creating Snapshots</p-step>
                    <p-step [value]="3">Generating Output</p-step>
                    <p-step [value]="4">Complete</p-step>
                </p-step-list>
                <p-step-panels>
                    <p-step-panel [value]="1">
                        <ng-template #content let-activateCallback="activateCallback">
                            <div class="flex flex-col h-48">
                            <p-accordion value="0">
                                <p-accordion-panel value="0">
                                    <p-accordion-header><span><p-tag class="mr-2"><i class="pi pi-tag ml-1" style="font-size: 1rem"></i>Customer Complaint</p-tag>4</span></p-accordion-header>
                                    <p-accordion-content>
                                    <p-table [value]="products">
                                        <ng-template #body let-product>
                                            <tr>
                                                <td>{{ product.date | date : 'medium' }}</td>
                                                <td>{{ product.name }}</td>
                                                <td>{{ product.description }}</td>
                                                <td>{{ product.quantity }}</td>
                                                <td>
                                                    <span class="flex justify-content-between">
                                                        <p-button icon="pi pi-pencil" aria-label="Edit" label="Edit"/>
                                                        <p-button class="ml-2" icon="pi pi-trash" aria-label="Delete" label="Delete"/>
                                                    </span>
                                                </td>
                                            </tr>
                                        </ng-template>
                                    </p-table>
                                    </p-accordion-content>
                                </p-accordion-panel>

                                <p-accordion-panel value="1">
                                    <p-accordion-header><span><p-tag class="mr-2"><i class="pi pi-tag ml-1" style="font-size: 1rem"></i>Data Correction</p-tag>2</span></p-accordion-header>
                                    <p-accordion-content>
                                    <p-table [value]="products" >
                                        <ng-template #body let-product>
                                            <tr>
                                                <td>{{ product.date | date : 'medium' }}</td>
                                                <td>{{ product.name }}</td>
                                                <td>{{ product.description }}</td>
                                                <td>{{ product.quantity }}</td>
                                                <td>
                                                    <span class="flex justify-content-between">
                                                    <p-button icon="pi pi-pencil" aria-label="Edit" label="Edit"/>
                                                    <p-button class="ml-2" icon="pi pi-trash" aria-label="Delete" label="Delete"/>
                                                    </span>
                                                </td>
                                            </tr>
                                        </ng-template>
                                    </p-table>
                                    </p-accordion-content>
                                </p-accordion-panel>

                                <p-accordion-panel value="2">
                                    <p-accordion-header><span><p-tag class="mr-2"><i class="pi pi-tag ml-1" style="font-size: 1rem"></i>Customer Complaint</p-tag>4</span></p-accordion-header>
                                    <p-accordion-content>
                                    <p-table [value]="products">
                                        <ng-template #body let-product>
                                            <tr>
                                                <td>{{ product.date | date : 'medium' }}</td>
                                                <td>{{ product.name }}</td>
                                                <td>{{ product.description }}</td>
                                                <td>{{ product.quantity }}</td>
                                                <td>
                                                    <span class="flex justify-content-between">
                                                        <p-button icon="pi pi-pencil" aria-label="Edit" label="Edit"/>
                                                        <p-button class="ml-2" icon="pi pi-trash" aria-label="Delete" label="Delete"/>
                                                    </span>
                                                </td>
                                            </tr>
                                        </ng-template>
                                    </p-table>
                                    </p-accordion-content>
                                </p-accordion-panel>
                            </p-accordion>
                            </div>
                        </ng-template>
                    </p-step-panel>

                    <p-step-panel [value]="2">
                        <ng-template #content let-activateCallback="activateCallback">
                            <div class="flex flex-col h-48">
                                <div
                                    class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                                >
                                    Content II
                                </div>
                            </div>
                            <div class="flex pt-6 justify-between">
                                <p-button label="Back" severity="secondary" icon="pi pi-arrow-left" (onClick)="activateCallback(1)" />
                                <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(3)" />
                            </div>
                        </ng-template>
                    </p-step-panel>

                    <p-step-panel [value]="3">
                        <ng-template #content let-activateCallback="activateCallback">
                            <div class="flex flex-col h-48">
                                <div
                                    class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                                >
                                    Content III
                                </div>
                            </div>
                            <div class="flex pt-6 justify-start">
                                <p-button label="Back" icon="pi pi-arrow-left" iconPos="right" (onClick)="activateCallback(2)" />
                            </div>
                        </ng-template>
                    </p-step-panel>
                    <p-step-panel [value]="4">
                        <ng-template #content let-activateCallback="activateCallback">
                            <div class="flex flex-col h-48">
                                <div
                                    class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                                >
                                    Content IV
                                </div>
                            </div>
                            <div class="flex pt-6 justify-start">
                                <p-button label="Back" icon="pi pi-arrow-left" iconPos="right" (onClick)="activateCallback(2)" />
                            </div>
                        </ng-template>
                    </p-step-panel>
                </p-step-panels>
            </p-stepper>
            </div>
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">Severities</div>
                <div class="flex flex-wrap gap-2">
                    <p-button label="Primary" />
                    <p-button label="Secondary" severity="secondary" />
                    <p-button label="Success" severity="success" />
                    <p-button label="Info" severity="info" />
                    <p-button label="Warn" severity="warn" />
                    <p-button label="Help" severity="help" />
                    <p-button label="Danger" severity="danger" />
                    <p-button label="Contrast" severity="contrast" />
                </div>
            </div>
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">Text</div>
                <div class="flex flex-wrap gap-2">
                    <p-button label="Primary" text />
                    <p-button label="Secondary" severity="secondary" text />
                    <p-button label="Success" severity="success" text />
                    <p-button label="Info" severity="info" text />
                    <p-button label="Warn" severity="warn" text />
                    <p-button label="Help" severity="help" text />
                    <p-button label="Danger" severity="danger" text />
                    <p-button label="Plain" text />
                </div>
            </div>
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">Outlined</div>
                <div class="flex flex-wrap gap-2">
                    <p-button label="Primary" outlined />
                    <p-button label="Secondary" severity="secondary" outlined />
                    <p-button label="Success" severity="success" outlined />
                    <p-button label="Info" severity="info" outlined />
                    <p-button label="warn" severity="warn" outlined />
                    <p-button label="Help" severity="help" outlined />
                    <p-button label="Danger" severity="danger" outlined />
                    <p-button label="Contrast" severity="contrast" outlined />
                </div>
            </div>
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">Group</div>
                <div class="flex flex-wrap gap-2">
                    <p-buttongroup>
                        <p-button label="Save" icon="pi pi-check" />
                        <p-button label="Delete" icon="pi pi-trash" />
                        <p-button label="Cancel" icon="pi pi-times" />
                    </p-buttongroup>
                </div>
            </div>
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">SplitButton</div>
                <div class="flex flex-wrap gap-2">
                    <p-splitbutton label="Save" [model]="items"></p-splitbutton>
                    <p-splitbutton label="Save" [model]="items" severity="secondary"></p-splitbutton>
                    <p-splitbutton label="Save" [model]="items" severity="success"></p-splitbutton>
                    <p-splitbutton label="Save" [model]="items" severity="info"></p-splitbutton>
                    <p-splitbutton label="Save" [model]="items" severity="warn"></p-splitbutton>
                    <p-splitbutton label="Save" [model]="items" severity="help"></p-splitbutton>
                    <p-splitbutton label="Save" [model]="items" severity="danger"></p-splitbutton>
                    <p-splitbutton label="Save" [model]="items" severity="contrast"></p-splitbutton>
                </div>
            </div>
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">Templating</div>
                <div class="flex flex-wrap gap-2">
                    <p-button type="button">
                        <img alt="logo" src="https://primefaces.org/cdn/primeng/images/logo.svg" style="width: 1.5rem" />
                    </p-button>
                    <p-button type="button" outlined severity="success">
                        <img alt="logo" src="https://primefaces.org/cdn/primeng/images/logo.svg" style="width: 1.5rem" />
                        <span class="text-bold">PrimeNG</span>
                    </p-button>
                </div>
            </div>
        </div>
    </div> `
})
export class StepperDemo implements OnInit {
    items: MenuItem[] = [];
    products: any[] = [
        {
            date: '2/05/2025',
            name: 'Jane Smith',
            description: 'Sed ut perspiciatis unde omnis iste natus error',
            quantity: '90'
        },
        {
            date: '9/05/2025',
            name: 'Jane Smith',
            description: 'Sed ut perspiciatis unde omnis iste natus error',
            quantity: '100'
        }
    ];
    loading = [false, false, false, false];

    ngOnInit() {
        this.items = [{ label: 'Update', icon: 'pi pi-refresh' }, { label: 'Delete', icon: 'pi pi-times' }, { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' }, { separator: true }, { label: 'Setup', icon: 'pi pi-cog' }];
    }

    load(index: number) {
        this.loading[index] = true;
        setTimeout(() => (this.loading[index] = false), 1000);
    }
}
