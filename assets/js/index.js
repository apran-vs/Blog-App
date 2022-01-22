// const { $where } = require("../../server/model/model");

$("#new_blog").submit(function(event){
    alert("Blog Inserted Successfully");
})

$("#edit_blog").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}
    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })
    // console.log(unindexed_array);

    var request = {
        "url" : `http://localhost:3000/api/blogs/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Blog Updated Successfully!")
        location.reload(window.location.pathname('/blog-page'));
    })
})


if(window.location.pathname == "/blog-page"){
    $ondelete = $(".HomeBlog .Second .delete");
    // $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/blogs/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                // window.location.pathname = "/";
                location.reload(window.location.pathname('/index'));
            })
        }
    })
}