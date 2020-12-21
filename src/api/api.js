import myaxios from "../myaxios/myaxios";

/* 
    导出各种接口
*/
// export const login = (params) =>
//   myaxios.post("admin/login", params).catch((err) => console.log(err));
export const login = (params) =>{
   return  myaxios.post("admin/login", params).catch((err) => console.log(err));
}
// 退出接口
export const logout = () =>{
    return myaxios.get("admin/signout").catch(err=>{console.log(err)})
}
//总的用户量
export const getTotalUser = ()=>{
    return myaxios.get("v1/users/count").catch(err=>{console.log(err)})
}
//获取某天的注册量
export const getTodayUser  =(date)=>{
    return myaxios.get("/statis/user/"+date+"/count").catch(err=>{console.log(err)})
}
//总订单量
export const getTotalOrder = ()=>{
    return myaxios.get("bos/orders/count").catch(err=>{
        console.log(err)
    })
}
//获取某天的订单
export const getTodayTotal = (date)=>{
    return myaxios.get("statis/order/"+date+"/count").catch(err=>{console.log(err)})
}
//获取管理员数量
export const getAdminCount = ()=>{
    return myaxios.get("admin/count").catch((err)=>{
        console.log(err)
    })
}