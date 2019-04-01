let image = ['assets/img/cat1.jpg',
             'assets/img/cat2.png', 
             'assets/img/cat3.jpeg',
             'assets/img/momia.jpeg'],
    cont = 0;

function carrousel(container){
    container.addEventListener('click', e =>{
        let back = container.querySelector('.back'),
            ahead = container.querySelector('.ahead'),
            img = container.querySelector('img'),
            target = e.target;

            if (target == back) {
                if (cont > 0) {
                    img.src = image [cont-1];
                    cont--;
                }
                else{
                    img.src = image[image.length-1];
                    cont = image.length - 1;
                }
                
            } else if(target == ahead){
                if (cont < image.length-1) {
                    img.src = image[cont+1];
                    cont++;
                }
                else{
                    img.src = image[0];
                    cont = 0;
                }
            }
    });
}
let container = document.querySelector('.container');
console.log(container);
carrousel(container);