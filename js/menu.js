// Xử lý sự kiện click cho phần tử Categories
document.addEventListener('DOMContentLoaded', function () {

    const iconClick = document.querySelector('#icon_menu');
    const menu = document.querySelector('#menu_reponse');
    const iconClose = document.querySelector('#icon_close');
    const categoriesElement = document.querySelector('#title_category');
    const mainMenuElement = document.querySelector('#title_menu');
    const categoryInfoElement = document.querySelector('#content_category_reponse');
    const mainMenuInfoElement = document.querySelector('#content_menu_reponse');

    //sự kiện khi click vao iconclick
    iconClick.addEventListener('click', function () {
        menu.style.display = "block";
    });
    // sự kiện khi click vào icon close
    iconClose.addEventListener('click', function () {
        menu.style.display = "none";
    })
    window.addEventListener('click', function (event) {
        if (event.target === menu) {
            menu.style.display = 'none';
        }
    });

    categoriesElement.addEventListener('click', function () {
        // Hiển thị thông tin về Categories
        categoryInfoElement.style.display = 'block';
        mainMenuInfoElement.style.display = 'none';
        mainMenuElement.style.color='#888';
        categoriesElement.style.color='black';
    });

    // Xử lý sự kiện click cho phần tử Main Menu
    mainMenuElement.addEventListener('click', function () {
        // Hiển thị thông tin về Main Menu
        categoryInfoElement.style.display = 'none';
        mainMenuInfoElement.style.display = 'block';
        categoriesElement.style.color='#888';
        mainMenuElement.style.color='black';
    });

});