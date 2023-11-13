import { Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { Component } from '@angular/core';
import { RegistrarseComponent } from './componentes/main/registrarse/registrarse.component';

export const routes: Routes = [
    {
        path:'registrarse', component: RegistrarseComponent
    }
];
