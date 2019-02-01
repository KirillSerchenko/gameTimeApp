export function server(data,operation){
    
    const baseUrl = 'http://localhost:3000/';
    
    switch(operation){
        case 'addPlayer':
            fetch(baseUrl + 'players',{method: 'POST', 
                body: JSON.stringify(data), 
                headers: {'Content-Type': 'application/json'}
            })
            .then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error))
            break;
        
        case 'deletePlayer':
            fetch(`${baseUrl}players/${data.id}`,{ method: 'DELETE' });
            break;
        

        case 'editPlayer':
            fetch(`${baseUrl}players/${data.id}`, {
                headers: { "Content-Type": "application/json; charset=utf-8" },
                method: 'PUT',
                body: JSON.stringify({value:data.value,rating:data.rating})
            })
        break;    
        default:
        break;
    }
    
}
