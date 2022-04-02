const rules = {
    ismodile(dom,value){
        if (!value) {
            return {
                Msg:"请输入手机号",
                dom:dom
            }
            
        }
        if (!/^1[3|5|8][0-9]{9}$/.test(value)) {
            return {
                Msg:"你输入的手机号不符合规则",
                dom:dom
            }
            
        }
    }
}
export default rules