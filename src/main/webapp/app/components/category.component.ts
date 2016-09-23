import { Component, OnInit } from '@angular/core';
//import { CategoryService } from './../shared/category.service';

@Component({
    selector: 'category-component',
    templateUrl: 'app/html/category.component.html',
//    providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
    categories: any;
//    constructor(private categoryService: CategoryService) { };
    ngOnInit(): void {
//        this.categoryService.getCategories().then(categories => this.categories = categories);
    }
}