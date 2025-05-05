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
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-stepper-demo',
    standalone: true,
    imports: [CommonModule, ButtonModule, ButtonGroupModule, SplitButtonModule, StepperModule, AccordionModule, TableModule, TagModule, InputTextModule, FormsModule],
    template: `<div class="flex flex-col md:flex-row gap-8">
        <div class="md">
            <div class="card flex flex-col gap-4">
            <p-stepper [(value)]="activeStep" class="basis-[40rem]">
                <p-step-list>
                    <p-step [value]="1" class="flex flex-row flex-auto gap-2">
                        <ng-template #content let-activateCallback="activateCallback" let-value="value">
                            <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                                <span
                                    class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                                    [ngClass]="{
                                        'bg-primary text-primary-contrast border-primary': value <= activeStep,
                                        'border-surface': value > activeStep
                                    }"
                                >
                                    @if (activeStep === 2) {
                                        <i class="pi pi-stop-circle"></i>
                                    } @else {
                                        <i class="pi pi-circle"></i>
                                    }
                                </span>
                            </button>
                        </ng-template>
                    </p-step>

                    <p-step [value]="2" class="flex flex-row flex-auto gap-2">
                        <ng-template #content let-activateCallback="activateCallback" let-value="value">
                            <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                                <span
                                    class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                                    [ngClass]="{
                                        'bg-primary text-primary-contrast border-primary': value <= activeStep,
                                        'border-surface': value > activeStep
                                    }"
                                >
                                    @if (activeStep === 2) {
                                        <i class="pi pi-stop-circle"></i>
                                    } @else {
                                        <i class="pi pi-circle"></i>
                                    }
                                </span>
                            </button>
                        </ng-template>
                    </p-step>

                    <p-step [value]="3" class="flex flex-row flex-auto gap-2">
                        <ng-template #content let-activateCallback="activateCallback" let-value="value">
                            <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                                <span
                                    class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                                    [ngClass]="{
                                        'bg-primary text-primary-contrast border-primary': value <= activeStep,
                                        'border-surface': value > activeStep
                                    }"
                                >
                                    @if (activeStep === 3) {
                                        <i class="pi pi-stop-circle"></i>
                                    } @else {
                                        <i class="pi pi-circle"></i>
                                    }
                                </span>
                            </button>
                        </ng-template>
                    </p-step>
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

                    <p-step-panel [value]="3">
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
                </p-step-panels>
            </p-stepper>

            </div>
        </div>
    </div>`
})
export class StepperDemo implements OnInit {
    activeStep: number = 1;

    name: string | any = null;

    email: string | any = null;

    password: string | any = null;

    option1: boolean | undefined = false;

    option2: boolean | undefined = false;

    option3: boolean | undefined = false;

    option4: boolean | undefined = false;

    option5: boolean | undefined = false;

    option6: boolean | undefined = false;

    option7: boolean | undefined = false;

    option8: boolean | undefined = false;

    option9: boolean | undefined = false;

    option10: boolean | any = false;

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
