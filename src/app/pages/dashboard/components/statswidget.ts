import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { Popover } from 'primeng/popover';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [Popover, InputGroupAddonModule, ButtonModule, InputTextModule, CommonModule, SelectModule, FormsModule, ReactiveFormsModule],
    template: `<div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Orders</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152</div>
                    </div>
                    <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 !text-xl"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">24 new </span>
                <span class="text-muted-color">since last visit</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                    <span class="block text-muted-color font-medium mb-4">Revenue</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">$2.100</div>
                    </div>
                    <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-dollar text-orange-500 !text-xl"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">%52+ </span>
                <span class="text-muted-color">since last week</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Customers</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">28441</div>
                    </div>
                    <div (click)="filterPopover.toggle($event)" class="flex items-center justify-center bg-cyan-100 dark:bg-cyan-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-users text-cyan-500 !text-xl"></i>
                    </div>
                    <p-popover #filterPopover>
                        <div class="flex flex-col gap-4 w-[42rem]" [formGroup]="filterForm">
                            <div>
                                <span class="font-medium text-surface-900 dark:text-surface-0 block mb-2">Filter by Property</span>
                            </div>
                            <form formArrayName="items">
                                @if(items.controls.length) {
                                <ul class="list-none p-0 m-0 flex flex-col gap-4">
                                    @for(filter of items.controls; track filter; let i = $index;) {
                                    <li class="flex items-center gap-1 justify-content" [formGroupName]="i">
                                        <div class="w-[12rem]">
                                            <p-select class="w-[11rem]" [options]="propertyTypes" [checkmark]="true" optionLabel="name" [showClear]="true" placeholder="Select Property"/>
                                        </div>
                                        <div class="w-[12rem]">
                                            <p-select class="w-[11rem]" [options]="operators" [checkmark]="true" optionLabel="name" [showClear]="true" placeholder="Select Operator" />
                                        </div>
                                        <div class="w-[12rem]">
                                            <input class="w-[11rem]" type="text" pInputText />
                                        </div>
                                        <div class="flex w-[4rem]">
                                            <p-button icon="pi pi-trash" severity="secondary" (click)="deleteRow(i)" />
                                            <p-button class="ml-1" icon="pi pi-bars" severity="secondary" (click)="pinRow(i)" />
                                        </div>
                                    </li>
                                    }
                                </ul>
                                } @else {
                                <div class="flex flex-start p-2 font-sm font-bold">
                                    No filter found, Please click add to add new filter.
                                </div>
                                }
                                <div class="flex flex-start mt-4">
                                    <p-button icon="pi pi-plus" severity="secondary" (click)="addFilter()" label="Add" [disabled]="items.controls.length >= 5"/>
                                </div>
                                <div class="flex mt-2" style="flex-direction: row-reverse;">
                                    <p-button class="ml-4" severity="primary" (click)="applyAndSave()" label="Apply & Save" />

                                    <p-button severity="primary" (click)="apply()" label="Apply" />
                                </div>
                            </form>
                        </div>
                    </p-popover>
                </div>
                <span class="text-primary font-medium">520 </span>
                <span class="text-muted-color">newly registered</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Comments</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152 Unread</div>
                    </div>
                    <div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-comment text-purple-500 !text-xl"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">85 </span>
                <span class="text-muted-color">responded</span>
            </div>
        </div>`
})
export class StatsWidget implements OnInit{
    filterForm: any;
    propertyTypes: any[] = [
        { name: 'Price', value: 'price'},
        { name: 'Date', value: 'date'}
    ];
    operators: any[] = [
        { name: 'Equals', value: '==='},
        { name: 'Does not equal', value: '!=='},
        { name: 'Greater than', value: '>'},
        { name: 'Greater than or equal to', value: '>='},
        { name: 'Less than', value: '<equals>'},
        { name: 'Less than or equal to', value: '<='},
        { name: 'Between', value: '<>'},
        { name: 'In list', value: 'in'},
        { name: 'Has any value', value: '%'},
        { name: 'Has no value', value: ''}
    ];

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        this.filterForm = this.formBuilder.group({
            items: this.formBuilder.array([])
          });
        this.addFilter();
    }


  newItem(): FormGroup {
    return this.formBuilder.group({
        propertyType: [null, Validators.required],
        operator: [null, Validators.required],
        value: [null]
    });
    }

    addFilter() {
        this.items.push(this.newItem());
    }

    apply() {
        console.log(this.filterForm.value);
        if(this.filterForm.invalid) {
            return false;
        } else {
            //Save Data
            return true;
        }
    }

    applyAndSave() {
        console.log(this.filterForm.value);
        if(this.filterForm.invalid) {
            return false;
        } else {
            //Save Data
            return true;
        }
    }

    deleteRow(index: number) {
        this.items.removeAt(index);
    }

    pinRow(index: number) {

    }

    get items(): FormArray {
        return this.filterForm.get('items') as FormArray;
    }
}
