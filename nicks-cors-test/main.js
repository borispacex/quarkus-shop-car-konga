function main() 
{
    console.log("nicks-cors-test");
    $.ajax
    ({
        url: "https://localhost:8080/cars",
        success: function(data) 
        {
            console.log(data);
        }
    });
}
