let imgContainer = Array.from(document.querySelectorAll('.img_container img'));
let previewBody = document.querySelector('.previewBody');
let previewImage = document.querySelector('.previewImage img');
let cross = document.querySelector('.cross');
let next = document.querySelector('.next');

imgContainer.map((item, index) => {

    item.addEventListener('click', () => {
        previewBody.classList.add('active');

        let collectedImg = imgContainer[index].src;
        previewImage.src = collectedImg;
        

        next.addEventListener('click', () =>{
            index++;
            if(index > imgContainer.length -1){
                index = 0;
            }
             previewImage.src = imgContainer[index].src
            console.log(index);
            
        });

        let prev = document.querySelector('.prev');
        prev.addEventListener('click', () =>{
            index--;
            if(index <= 0){
                index = imgContainer.length -1;
            }
             previewImage.src = imgContainer[index].src
            console.log(index);
            
        });



    });

})

cross.addEventListener('click', ()=>{
    previewBody.classList.remove('active');
})