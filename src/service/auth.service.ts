import { AuthModel } from "../model/auth.model"


export class AuthService {

    log_user(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.log_user(body).then((res: any) => {
                 console.log('res>>>',res);
                if (body.email === res.user_namee && body.password === res.passletter) {
                resolve(res);
                }
                else{
                    console.log('here')
                }
            });
        });
    }
    add_user(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.add_user(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    applications(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.applications(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    about(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.about(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    update_about1(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.update_about1(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    new_button(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.new_button(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    add_schedule(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.add_schedule(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    announcements(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.announcements(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    new_annnouncement1(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.new_annnouncement1(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    update_announcements1(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.update_announcements1(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
   
    // delete_announcement1(body: any){
    //     return new Promise(async function (resolve, reject) {
    //          AuthModel.delete_announcement1(body).then((res: any) => {
    //             console.log(res);
    //             resolve(res);
    //         });
    //     });
    // }
    services(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.services(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    contact_and_hours(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.contact_and_hours(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    notifications(body: any){
        return new Promise(async function (resolve, reject) {
             AuthModel.notifications(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    
//     update_user(body: any){
//         return new Promise(async function (resolve, reject) {
//              AuthModel.update_user(body).then((res: any) => {
//                 console.log(res);
//                 resolve(res);
//             });
//         });
//     }
//     delete_user(body: any){
//         return new Promise(async function (resolve, reject) {
//              AuthModel.delete_user(body).then((res: any) => {
//                 console.log(res);
//                 resolve(res);
//             });
//         });
//     }
//     create_user(body: any){
//         return new Promise(async function (resolve, reject) {
//              AuthModel.create_user(body).then((res: any) => {
//                 console.log(res);
//                 resolve(res);
//             });
//         });
//     }
//     forget_password(body: any){
//         return new Promise(async function (resolve, reject) {
//              AuthModel.forget_password(body).then((res: any) => {
//                 console.log(res);
//                 resolve(res);
//             });
//         });
//     }
//     login(body: any){
//         return new Promise(async function (resolve, reject) {
//              AuthModel.login(body).then((res: any) => {
//                 console.log(res);
//                 resolve(res);
//             });
//         });
//     }
//     dashboard(body: any){
//         return new Promise(async function (resolve, reject) {
//              AuthModel.dashboard(body).then((res: any) => {
//                 console.log(res);
//                 resolve(res);
//             });
//         });
//     }
}