import {userAction} from './index'
export function loginInfo(type, flage){
return {
    type: userAction.LOGIN,
    playload: flage
}
}
export function loginInoErro(type, flage){
return {
    type: userAction.FAILUR,
    playload: flage
}
}