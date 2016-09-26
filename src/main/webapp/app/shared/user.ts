/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export class User {
    constructor(
        public userId: number,
        public firstName: string,
        public lastName: string,
        public emailId: string,
        public address : string,
        public phoneNumber: number) {
    };

}


