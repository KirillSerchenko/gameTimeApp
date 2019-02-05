export function server(data,operation){
    
    const baseUrl = 'http://localhost:3000/';
    
    function changeDB(method,url,body=null){
            const headers = {'Content-Type': 'application/json'}
            fetch(url,{method,body,headers})
            .then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error))
    }

   async function getFromDB(url){
        const response = await fetch(url);
        const data = await response.json();
        return  data;
    }

    function getStringifyData(){
        return  JSON.stringify(data)
    }

    switch(operation){
        
        case 'addPlayer':
            changeDB('POST',`${baseUrl}players`,getStringifyData())
            break;
            
        case 'deletePlayer': 
            changeDB('DELETE',`${baseUrl}players/${data['id']}`)
            break;
            
        
        case 'editPlayer':
            changeDB('PATCH',`${baseUrl}players/${data['id']}`,getStringifyData())
            break;
        
        case 'addUser':
            changeDB('POST',`${baseUrl}users`,getStringifyData())
            break;
        
        case 'editPayment':           
            changeDB('PATCH',`${baseUrl}players/${data['id']}`,getStringifyData())
            break;
        
        case 'getPlayersDb':
            return getFromDB(`${baseUrl}players`)
        
        case 'getUsersDb':
            return getFromDB(`${baseUrl}users`)   
        
        default:
        break;
    }
    
}
