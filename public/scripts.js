const recipeImage = document.querySelectorAll('.recipe_image')

for(let image of recipeImage){
    const imageId = image.getAttribute("id")
    image.addEventListener("click", function(){
        window.location.href = `/recipes/${imageId}`
    })
}
