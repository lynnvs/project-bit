// Schrijf hier JavaScript om de tabel te generen
// Schrijf hier JavaScript om de tabel te generen

first = true;

$(document).ready(function(){
    MOCK_DATA = eval(MOCK_DATA);

    if(first){
        for (i=0;i<MOCK_DATA.length; i++){
                $( "#tabel" ).append( 
            " <tr class='data'> <td>" + MOCK_DATA[i].id + "</td><td>" + MOCK_DATA[i].first_name + "</td><td>" + MOCK_DATA[i].last_name + "</td><td>" + MOCK_DATA[i].email + "</td><td>" + MOCK_DATA[i].gender + "</td><td>" + MOCK_DATA[i].ip_address + "</td>/tr> "                  
            )}
    first = false;
}
    $("#search").change(function(){
        var bla = $('#search').val();
        $( '.data' ).remove();
    for (i=0;i<MOCK_DATA.length; i++){
            if (MOCK_DATA[i].first_name.search(bla)>-1 || MOCK_DATA[i].last_name.search(bla)>-1 || MOCK_DATA[i].gender.search(bla)>-1 ||  MOCK_DATA[i].ip_address.search(bla)>-1 || MOCK_DATA[i].email.search(bla)>-1){
                $( "#tabel" ).append( 
            " <tr class='data'> <td>" + MOCK_DATA[i].id + "</td><td>" + MOCK_DATA[i].first_name + "</td><td>" + MOCK_DATA[i].last_name + "</td><td>" + MOCK_DATA[i].email + "</td><td>" + MOCK_DATA[i].gender + "</td><td>" + MOCK_DATA[i].ip_address + "</td>/tr> "                  
        );
        }
    }
})
});

