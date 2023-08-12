import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ServicesIpmComponent } from './services-ipm/services-ipm.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UregComponent } from './ureg/ureg.component';
import { UserSucessLoginComponent } from './user-sucess-login/user-sucess-login.component';

import { DashboardComponent } from './user-sucess-login/dashboard/dashboard.component';
import { ProfileComponent } from './user-sucess-login/profile/profile.component';
import { PoliciesComponent } from './user-sucess-login/policies/policies.component';
import { HistoryComponent } from './user-sucess-login/history/history.component';
import { QuestionsComponent } from './user-sucess-login/questions/questions.component';
import { AdmindashboardComponent } from './adminsuccesslogin/admindashboard/admindashboard.component';
import { AdmincustomersComponent } from './adminsuccesslogin/admincustomers/admincustomers.component';
import { AdminPolicysComponent } from './adminsuccesslogin/admin-policys/admin-policys.component';
import { AdminQueryComponent } from './adminsuccesslogin/admin-query/admin-query.component';
import { AdminUnknownCustomerComponent } from './adminsuccesslogin/admin-unknown-customer/admin-unknown-customer.component';
import { AddAdminByAdminComponent } from './adminsuccesslogin/add-admin-by-admin/add-admin-by-admin.component';
import { AddnewadminComponent } from './adminsuccesslogin/addAdminByAdmin/addnewadmin/addnewadmin.component';
import { ViewadmisComponent } from './adminsuccesslogin/addAdminByAdmin/viewadmis/viewadmis.component';
import { ReplyComponent } from './adminsuccesslogin/admin-query/reply/reply.component';

import { AddPolicyComponent } from './adminsuccesslogin/admin-policys/add-policy/add-policy.component';
import { UpdatePolicyComponent } from './adminsuccesslogin/admin-policys/update-policy/update-policy.component';
import { DeletePolicyComponent } from './adminsuccesslogin/admin-policys/delete-policy/delete-policy.component';
import { AppliedPolicyHolderComponent } from './adminsuccesslogin/admin-policys/applied-policy-holder/applied-policy-holder.component';
import { ApproveddPolicyHolderComponent } from './adminsuccesslogin/admin-policys/approvedd-policy-holder/approvedd-policy-holder.component';
import { ReplaySubject } from 'rxjs';
import { RejectedPolicyHolderComponent } from './adminsuccesslogin/admin-policys/rejected-policy-holder/rejected-policy-holder.component';
import { WaitingpPolicyHolderComponent } from './adminsuccesslogin/admin-policys/waitingp-policy-holder/waitingp-policy-holder.component';
import { PolicysViewByAdminComponent } from './adminsuccesslogin/admin-policys/policys-view-by-admin/policys-view-by-admin.component';
import { ApplyUpdateComponent } from './adminsuccesslogin/admin-policys/update-policy/apply-update/apply-update.component';
import { UpdateLowerAdminComponent } from './adminsuccesslogin/addAdminByAdmin/update-lower-admin/update-lower-admin.component';
import { PageErrorComponent } from './page-error/page-error.component';

import { ChangePasswordComponent } from './user-sucess-login/change-password/change-password.component';



const routes: Routes = [
  {
    path: '',



    children: [
      {
        path: "", component: HomeComponent
      },

      {

        path: 'aboutus',
        component: AboutComponent
      },
      {
        path: 'services',
        component: ServicesIpmComponent
      },
      {
        path: 'contact',
        component: ContactusComponent
      }

    ]
  }

  ,
  {
    path: 'ulog',
    component: UserloginComponent
  }
  ,
  {
    path: 'alog',
    component: AdminloginComponent
  },

  {
    path: "ureg",
    component: UregComponent
    , pathMatch: 'full'
  },
  {
    path: "ulog/sucessLogin"
    , component: DashboardComponent


  },
  {
    path: "alog/adminsucesslogin", component: AdmindashboardComponent
  },
  //admin start
  {
    path: "dashboard",
    component: AdmindashboardComponent
  },


  { path: "admincustomers", component: AdmincustomersComponent },
  { path: "adminPolicys", component: AdminPolicysComponent },
  { path: "adminQuery", component: AdminQueryComponent },
  { path: "adminunknown", component: AdminUnknownCustomerComponent },

  //Admin End

  {
    path: "udashboard"
    , component: DashboardComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "password",
    component: ChangePasswordComponent
  },
  {
    path: "policies", component: PoliciesComponent

  },
  {
    path: "history", component: HistoryComponent
  },
  {
    path: "queries", component: QuestionsComponent
  },
  {
    path: "newadmin", component: AddAdminByAdminComponent
  },
  {
    path: "addadmin", component: AddnewadminComponent
  },
  {
    path: "viewadmins", component: ViewadmisComponent
  },
  {
    path: "adminQuery/reply", component: ReplyComponent

  },

  //Admin Policys Works----------
  {
    path: "viewPolicy", component: PolicysViewByAdminComponent
  },
  {
    path: "addPolicy", component: AddPolicyComponent
  },
  {
    path: "updatePolicy", component: UpdatePolicyComponent
  },
  {
    path: "deletePolicy", component: DeletePolicyComponent
  },
  {
    path: "appliedUsers", component: AppliedPolicyHolderComponent

  },
  {
    path: "approvedUsers", component: ApproveddPolicyHolderComponent

  },
  {
    path: "rejectedUsers", component: RejectedPolicyHolderComponent

  },
  {
    path: "waitingUsers", component: WaitingpPolicyHolderComponent

  }, {
    path: "editpolicy", component: ApplyUpdateComponent
  }, {

    path: "upNewAdmin", component: UpdateLowerAdminComponent
  }, {

    path: "**", component: PageErrorComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
