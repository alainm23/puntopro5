import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'presentation',
    loadChildren: () => import('./pages/presentation/presentation.module').then( m => m.PresentationPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'rate',
    loadChildren: () => import('./pages/rate/rate.module').then( m => m.RatePageModule)
  },
  {
    path: 'soypro-presentation',
    loadChildren: () => import('./pages/soypro-presentation/soypro-presentation.module').then( m => m.SoyproPresentationPageModule)
  },
  {
    path: 'soypro-data-required',
    loadChildren: () => import('./pages/soypro-data-required/soypro-data-required.module').then( m => m.SoyproDataRequiredPageModule)
  },
  {
    path: 'select-categories/:type',
    loadChildren: () => import('./pages/select-categories/select-categories.module').then( m => m.SelectCategoriesPageModule)
  },
  {
    path: 'service-first-image',
    loadChildren: () => import('./pages/service-first-image/service-first-image.module').then( m => m.ServiceFirstImagePageModule)
  },
  {
    path: 'soypro-completed',
    loadChildren: () => import('./pages/soypro-completed/soypro-completed.module').then( m => m.SoyproCompletedPageModule)
  },
  {
    path: 'soypro',
    loadChildren: () => import('./pages/soypro/soypro.module').then( m => m.SoyproPageModule)
  },
  {
    path: 'search-subcategories',
    loadChildren: () => import('./modals/search-subcategories/search-subcategories.module').then( m => m.SearchSubcategoriesPageModule)
  },
  {
    path: 'select-service',
    loadChildren: () => import('./modals/select-service/select-service.module').then( m => m.SelectServicePageModule)
  },
  {
    path: 'search-locations',
    loadChildren: () => import('./modals/search-locations/search-locations.module').then( m => m.SearchLocationsPageModule)
  },
  {
    path: 'pros-list/:subcategory_id/:subcategory_name/:address_name/:latitude/:longitude',
    loadChildren: () => import('./pages/pros-list/pros-list.module').then( m => m.ProsListPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modals/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'request-pro',
    loadChildren: () => import('./modals/request-pro/request-pro.module').then( m => m.RequestProPageModule)
  },
  {
    path: 'pro-favorites',
    loadChildren: () => import('./pages/pro-favorites/pro-favorites.module').then( m => m.ProFavoritesPageModule)
  },
  {
    path: 'request-history',
    loadChildren: () => import('./pages/request-history/request-history.module').then( m => m.RequestHistoryPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./modals/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'messages/:user_type',
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'request-view/:id',
    loadChildren: () => import('./pages/request-view/request-view.module').then( m => m.RequestViewPageModule)
  },
  {
    path: 'request-pro-view/:id',
    loadChildren: () => import('./pages/request-pro-view/request-pro-view.module').then( m => m.RequestProViewPageModule)
  },
  {
    path: 'send-quote',
    loadChildren: () => import('./modals/send-quote/send-quote.module').then( m => m.SendQuotePageModule)
  },
  {
    path: 'pro-request-history',
    loadChildren: () => import('./pages/pro-request-history/pro-request-history.module').then( m => m.ProRequestHistoryPageModule)
  },
  {
    path: 'qualify-pro',
    loadChildren: () => import('./modals/qualify-pro/qualify-pro.module').then( m => m.QualifyProPageModule)
  },
  {
    path: 'profile-edit',
    loadChildren: () => import('./pages/profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule)
  },
  {
    path: 'pro-services',
    loadChildren: () => import('./pages/pro-services/pro-services.module').then( m => m.ProServicesPageModule)
  },
  {
    path: 'service-edit',
    loadChildren: () => import('./modals/service-edit/service-edit.module').then( m => m.ServiceEditPageModule)
  },
  {
    path: 'galleries-view',
    loadChildren: () => import('./modals/galleries-view/galleries-view.module').then( m => m.GalleriesViewPageModule)
  },
  {
    path: 'pros-list-category/:subcategory_id/:subcategory_name',
    loadChildren: () => import('./pages/pros-list-category/pros-list-category.module').then( m => m.ProsListCategoryPageModule)
  },
  {
    path: 'pros-list-search/:request_id',
    loadChildren: () => import('./pages/pros-list-search/pros-list-search.module').then( m => m.ProsListSearchPageModule)
  },
  {
    path: 'emergency-request-list',
    loadChildren: () => import('./pages/emergency-request-list/emergency-request-list.module').then( m => m.EmergencyRequestListPageModule)
  },
  {
    path: 'pro-emergency-request-list',
    loadChildren: () => import('./pages/pro-emergency-request-list/pro-emergency-request-list.module').then( m => m.ProEmergencyRequestListPageModule)
  },
  {
    path: 'emergency-request-view/:request_id',
    loadChildren: () => import('./pages/emergency-request-view/emergency-request-view.module').then( m => m.EmergencyRequestViewPageModule)
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./pages/terms-and-conditions/terms-and-conditions.module').then( m => m.TermsAndConditionsPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./modals/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'choose-quote-emergency',
    loadChildren: () => import('./modals/choose-quote-emergency/choose-quote-emergency.module').then( m => m.ChooseQuoteEmergencyPageModule)
  },
  {
    path: 'soypro-select-category',
    loadChildren: () => import('./pages/soypro-select-category/soypro-select-category.module').then( m => m.SoyproSelectCategoryPageModule)
  },
  {
    path: 'soypro-cfg-service/:id/:name',
    loadChildren: () => import('./pages/soypro-cfg-service/soypro-cfg-service.module').then( m => m.SoyproCfgServicePageModule)
  },
  {
    path: 'soypro-select-plan',
    loadChildren: () => import('./pages/soypro-select-plan/soypro-select-plan.module').then( m => m.SoyproSelectPlanPageModule)
  },
  {
    path: 'soypro-panel',
    loadChildren: () => import('./pages/soypro-panel/soypro-panel.module').then( m => m.SoyproPanelPageModule)
  },
  {
    path: 'soypro-update-data',
    loadChildren: () => import('./pages/soypro-update-data/soypro-update-data.module').then( m => m.SoyproUpdateDataPageModule)
  },
  {
    path: 'soypro-set-personal-data',
    loadChildren: () => import('./pages/soypro-set-personal-data/soypro-set-personal-data.module').then( m => m.SoyproSetPersonalDataPageModule)
  },
  {
    path: 'soypro-update-personal-data',
    loadChildren: () => import('./pages/soypro-update-personal-data/soypro-update-personal-data.module').then( m => m.SoyproUpdatePersonalDataPageModule)
  },
  {
    path: 'soypro-update-pro-data',
    loadChildren: () => import('./pages/soypro-update-pro-data/soypro-update-pro-data.module').then( m => m.SoyproUpdateProDataPageModule)
  },
  {
    path: 'soypro-set-pro-data',
    loadChildren: () => import('./pages/soypro-set-pro-data/soypro-set-pro-data.module').then( m => m.SoyproSetProDataPageModule)
  },
  {
    path: 'soypro-profiles',
    loadChildren: () => import('./pages/soypro-profiles/soypro-profiles.module').then( m => m.SoyproProfilesPageModule)
  },
  {
    path: 'soypro-request-list',
    loadChildren: () => import('./pages/soypro-request-list/soypro-request-list.module').then( m => m.SoyproRequestListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
