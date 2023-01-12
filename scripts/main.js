$(document).ready(function () {
    document.getElementById('burger').onclick = function () {
        document.getElementById('menu').classList.add('open');
        console.log(1)    }
    document.querySelectorAll('#menu *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu').classList.remove('open');
        }
    })
    let orderButton = $('#order-btn');
    let loader = $('.loader-back');
    orderButton.click(function () {
        let orderInput = $('#order-input');
        let nameInput = $('#name-input');
        let telInput = $('#tel-input');
        let hasError = false;
        $('.error-input-ord').hide();
        $('.error-input-name').hide();
        $('.error-input-tel').hide();
        orderInput.css('border-color', 'rgb(130, 19, 40)');
        nameInput.css('border-color', 'rgb(130, 19, 40)');
        telInput.css('border-color', 'rgb(130, 19, 40)');
        if (!orderInput.val()) {
            orderInput.next().show();
            orderInput.css('border-color', 'red');
            hasError = true;
        }
        if (!nameInput.val()) {
            nameInput.next().show();
            nameInput.css('border-color', 'red');
            hasError = true;
        }
        if (!telInput.val()) {
            telInput.next().show();
            telInput.css('border-color', 'red');
            hasError = true;
        }
        if (!hasError) {
            loader.css('display', 'flex')
            $.ajax({
                method: 'POST',
                url: 'https://testologia.site/checkout',
                data: {product: orderInput.val(), name: nameInput.val(), telephone: telInput.val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        $('.form').css('display', 'none');
                        $('.order__title').css('display', 'none');
                        $('.order__text').css('display', 'none');
                        $('.instead-form').show();
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                    }
                })
        }
    })
    $('.gift-text').css({
        transform: '',
        opacity: ''
    })
    if ($(window).width() >= '995'){
        $('.gift-icon').hover(
            function () {
                $('.gift-text').css({
                    transform: 'translate(0, 0)',
                    opacity: '1'
                })
            },
            function () {
                $('.gift-text').css({
                    transform: 'translate(0, 180%)',
                    opacity: '0'
                })
            }
        );
    } else {
        let show = false;
        $('.gift-icon').click(function() {
            if (!show) {
                $('.gift-text').css({
                    transform: 'translate(0, 0)',
                    opacity: '1'
                })
                show = true;
            } else {
                $('.gift-text').css({
                    transform: 'translate(0, 180%)',
                    opacity: '0'
                })
                show = false;
            }
        })
    }
    let themeButton = $('.btn-theme');
    let link = $('#theme-link');
    themeButton.click(function() {
        let lightTheme = 'dist/style.min.css'
        let darkTheme = 'dist/theme.min.css';
        let currTheme = link.attr('href');
        let theme = '';
        if (currTheme === lightTheme) {
            currTheme = darkTheme;
            theme = 'dark';
        } else {
            currTheme = lightTheme;
            theme = 'light';
        }
        link.attr('href', currTheme);
    })
})