{
    let sliderProduct = document.querySelector('.slider-product');
    if (sliderProduct) {
        let sliderProductThumbs;
        sliderProductThumbs = new Swiper(sliderProduct.querySelector('.slider-product__thumbs'), {
            spaceBetween: 10,

            slidesPerView: 'auto',
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                // when window width is >= 320px
                576: {
                    direction: 'vertical',
                },
            }
        });
        let sliderProductTop;
        sliderProductTop = new Swiper(sliderProduct.querySelector('.slider-product__main'), {
            spaceBetween: 0,
            effect: 'fade',
            thumbs: {
                swiper: sliderProductThumbs
            },
            preloadImages: false,
            // lazy: {
            //     loadOnTranstitionStart: false,
            //     loadPrevNext: true,
            // }
        });

        let zoomImages = sliderProduct.querySelectorAll('.zoom');
        if (zoomImages.length > 0) {
            zoomImages.forEach(item => {
                new Drift(item, {
                    paneContainer: document.querySelector('.detail'),
                    inlinePane: 900,
                    inlineOffsetY: -85,
                    containInline: true,
                    hoverBoundingBox: true,
                    zoomFactor: 2.5,
                });

            })
        }

        if (document.documentElement.clientWidth < 576) {
            sliderProduct.append(sliderProduct.querySelector('.slider-product__thumbs'));
        }

        window.addEventListener('resize', () => {
            if (document.documentElement.clientWidth < 576) {
                sliderProduct.append(sliderProduct.querySelector('.slider-product__thumbs'));
            }
        })
    }

}


let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
    for (let index = 0; index < quantityButtons.length; index++) {
        const quantityButton = quantityButtons[index];
        quantityButton.addEventListener("click", function (e) {
            let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
            if (quantityButton.classList.contains('quantity__button_plus')) {
                value++;
            } else {
                value = value - 1;
                if (value < 1) {
                    value = 1
                }
            }
            quantityButton.closest('.quantity').querySelector('input').value = value;
        });
    }
}