/**
 * Created by bes on 23.02.2016.
 */
jQuery(function() {

// Функция срабатывает на поле фамилии читателя по событию .blur
                $('#userSurName').blur(function () {

                    // Убираем все классы с поля «Фамилия»
                    $('#userSurName').removeClass();

                    // Определяем длину значения поля
                    var nameLength = $('#userSurName').val().length;

                    // Если значение меньше или равно 1 символу, то выводим предупреждение
                    if (nameLength <= 1) {

                        $('#userSurName').addClass('notValid');
                        document.getElementById('userSurName_err').innerHTML = 'Введите пожалуйста фамилию!';
                    } else {
                        // Здесь мы пишем что должно быть, если все введено верно
                        $('#userSurName').addClass('valid');
                        document.getElementById('userSurName_err').innerHTML = 'ok.';	
                    }
                });
// Функция срабатывает на поле имени читателя по событию .blur
                $('#userFirstName').blur(function () {

                    // Убираем все классы с поля «Имя»
                   $('#userFirstName').removeClass();

                    // Определяем длину значения поля
                    var nameLength = $('#userFirstName').val().length;

                    // Если значение меньше или равно 1 символу, то выводим предупреждение
                    if (nameLength <= 1) {

                        $('#userFirstName').addClass('notValid');
                        document.getElementById('userFirstName_err').innerHTML = 'Введите пожалуйста имя!';
                    } else {
                        // Здесь мы пишем что должно быть, если все введено верно
                        $('#userFirstName').addClass('valid');
                        document.getElementById('userFirstName_err').innerHTML = 'ok.';
                    }
                });
// Функция срабатывает на поле отчества читателя по событию .blur
                $('#userMiddleName').blur(function () {


                    // Убираем все классы с поля «Отчество»
                    $('#userMiddleName').removeClass();

                    // Определяем длину значения поля
                    var nameLength = $('#userMiddleName').val().length;

                    // Если значение меньше или равно 1 символу, то выводим предупреждение
                    if (nameLength <= 1) {

                        $('#userMiddleName').addClass('notValid');
                        document.getElementById('userMiddleName_err').innerHTML = 'Введите пожалуйста отчество!';
                    } else {
                        // Здесь мы пишем что должно быть, если все введено верно
                        $('#userMiddleName').addClass('valid');
                        document.getElementById('userMiddleName_err').innerHTML = 'ok.';
                    }
                });
				


// Функция срабатывает на  спиcке факультет по событию .blur
                $('#faculty').blur(function () {
					if ( document.getElementById('faculty').selectedIndex == 0 )
                        {
                        document.getElementById('MainCheck5').innerHTML = 'Укажите название факультета!';
                        }
                    else {
                        document.getElementById('MainCheck5').innerHTML='';
                    }
				});
				
// Функция срабатывает на поле  e-mail по событию .blur
                $('#userEmail').blur(function checkMail() {
                    // Убираем все классы с поля «e-mail»
                    $('#userEmail').removeClass();

                    // Берем значение поля «e-mail»
                    var emailV = $('#userEmail').val();

                    // Задаем регулярное выражение которое проверит e-mail
                    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;

                    // Проверяем верно ли введен e-mail
                    if (filter.test(emailV)) {
                        $('#userEmail').addClass('valid');
                        document.getElementById('userEmail_err').innerHTML = 'ok.';
                    }
                    else {
                        // Здесь мы пишем что должно быть, если e-mail введен неверно
                        $('#userEmail').addClass('notValid');
                        document.getElementById('userEmail_err').innerHTML = 'Адрес электронной почты введен неверно';
                    }
                });
// Функция срабатывает на поле телефона по событию .blur
                $('#phoneNumber').blur(function () {
                    // Убираем все классы с поля «Телефон»
                    $('#phoneNumber').removeClass();
                    // Берем значение поля «Телефон»
                    var phoneV = $('#phoneNumber').val();
                    // Определяем длину значения поля
                    var phoneLngth = phoneV.length;

                    // Проверяем чтобы в номере телефона были только цифры
                    if (/[^0-9]/.test(phoneV)) {
                        $('#phoneNumber').addClass('notValid');
                        document.getElementById('phoneNumber_err').innerHTML = 'Номер телефона должен содержать только цифры';
                    } else if (phoneLngth <= 5) {
                        // Проверяем чтобы длина номера телефона была не меньше 6 символов
                        $('#phoneNumber').addClass('notValid');
                        document.getElementById('phoneNumber_err').innerHTML = 'Введите пожалуйста верный номер телефона';
                    } else {
                        // Здесь мы пишем что должно быть, если все введено верно
                        $('#phoneNumber').addClass('valid');
                        document.getElementById('phoneNumber_err').innerHTML = '';
                        enable_okbutton() ;
                    }
                });
});