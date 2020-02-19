import { AppComponent } from "./app.component";
import { TextCompareComponent } from "./textcompare.component";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "home", component: AppComponent },
  { path: "compare", component: TextCompareComponent},
  { path: "**", redirectTo: "" }
];
export const routing = RouterModule.forRoot(appRoutes);
