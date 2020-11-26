
export async function connect(id,pw){
    const URL = "http://192.168.75.102:8082/login";
    try {
        const response = await fetch(URL,{
            method: "POST",
            body: JSON.stringify({id: id,pw: pw}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(response.status != 200){
            throw new Error("Something is wrong");
        }
        const responseText = await response.text();
        if(responseText=="success"){
           
        }
        return responseText;
    }catch(error) {
        Alert.alert(error.message);
    }
}

