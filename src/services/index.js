
export function getData(){
    const data=localStorage.getItem('data')
    return data ? JSON.parse(data) : null
}

export function setData(requestData){
    const data=getData()
    let newData=[]
    if(data!==null){
        newData=[...data,requestData]
    }else{
        newData.push(requestData)
    }
    localStorage.setItem('data',JSON.stringify(newData))
    return true
}